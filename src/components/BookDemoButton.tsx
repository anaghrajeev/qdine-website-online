"use client";

import { useEffect, useState } from 'react';
import { getCalApi } from '@calcom/embed-react';

export default function BookDemoButton() {
  const [calApi, setCalApi] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;
    (async function () {
      try {
        const cal = await getCalApi();
        if (isMounted && cal) {
          cal("init", { origin: "https://cal.com" });
          cal("ui", {
            theme: "light",
            styles: {
              branding: {
                brandColor: "#0a714e",
              },
            },
            hideEventTypeDetails: false,
            layout: "month_view",
          });
          setCalApi(() => cal);
        }
      } catch (err) {
        console.error("Cal.com initialization error:", err);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (calApi) {
      try {
        await calApi("modal", {
          calLink: "qdine/15min",
          calOrigin: "https://cal.com",
          config: { layout: "month_view" },
        });
        return;
      } catch (err) {
        console.error("Cal modal trigger error:", err);
      }
    }
    // Reliable fallback: opens the booking page directly if embed is blocked or loading
    window.open("https://cal.com/qdine/15min", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      data-cal-link="qdine/15min"
      data-cal-origin="https://cal.com"
      data-cal-config='{"layout":"month_view"}'
      onClick={handleClick}
      className="bg-[#111111] hover:bg-black text-white px-6 sm:px-8 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 flex items-center justify-center sm:w-max shadow-sm relative z-20 cursor-pointer"
    >
      Book a demo
    </button>
  );
}
