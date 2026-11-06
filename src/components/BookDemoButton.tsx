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

    // Initialize the "15min" namespace with origin
    window.Cal?.("init", "15min", { origin: "https://cal.com" });

    // Configure UI styling for this namespace
    window.Cal?.ns?.["15min"]?.("ui", {
      theme: "light",
      styles: {
        branding: {
          brandColor: "#0a714e",
        },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });

    // Also preload the modal so it opens immediately without delay
    window.Cal?.ns?.["15min"]?.("preload", {
      calLink: "qdine/15min",
    });
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    // If Cal instance is ready, trigger modal directly
    if (typeof window !== "undefined" && window.Cal?.ns?.["15min"]) {
      try {
        window.Cal.ns["15min"]("modal", {
          calLink: "qdine/15min",
          calOrigin: "https://cal.com",
          config: { layout: "month_view" },
        });
        return;
      } catch (err) {
        console.error("Cal modal error:", err);
      }
    }
    // Fallback if blocked by adblocker
    window.open("https://cal.com/qdine/15min", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      data-cal-namespace="15min"
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
