"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function BookDemoButton() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal?.("init", { origin: "https://app.cal.com" });

    window.Cal?.("ui", {
      theme: "light",
      styles: {
        branding: {
          brandColor: "#0a714e",
        },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  const handleClick = () => {
    // If Cal embed hasn't initialized for any reason (e.g. adblocker), open directly
    if (typeof window !== "undefined" && !window.Cal?.loaded) {
      window.open("https://cal.com/qdine/15min", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      data-cal-namespace=""
      data-cal-link="qdine/15min"
      data-cal-config='{"layout":"month_view"}'
      onClick={handleClick}
      className="bg-[#111111] hover:bg-black text-white px-6 sm:px-8 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 flex items-center justify-center sm:w-max shadow-sm relative z-20 cursor-pointer"
    >
      Book a demo
    </button>
  );
}
