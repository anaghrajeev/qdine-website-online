"use client";

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

export default function BookDemoButton() {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "15min" });
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
      } catch (err) {
        console.error("Cal.com initialization error:", err);
      }
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace="15min"
      data-cal-link="qdine/15min"
      data-cal-config='{"layout":"month_view"}'
      className="bg-[#111111] hover:bg-black text-white px-6 sm:px-8 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 flex items-center justify-center sm:w-max shadow-sm relative z-20 cursor-pointer"
    >
      Book a demo
    </button>
  );
}
