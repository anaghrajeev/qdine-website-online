"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Cal from '@calcom/embed-react';

export default function BookDemoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modal = isOpen ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      />

      {/* Modal Box */}
      <div 
        className="bg-white rounded-[24px] sm:rounded-[32px] w-full max-w-4xl h-[92vh] max-h-[750px] shadow-2xl relative z-10 flex flex-col overflow-hidden border border-gray-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 border-b border-gray-100 bg-white flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0a714e]"></div>
            <div>
              <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#1a1a1a] tracking-tight leading-none">
                Book a 15-Minute Demo
              </h3>
              <p className="text-[12px] sm:text-[13px] text-gray-500 font-medium mt-1">
                Pick a date & time that suits your schedule.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href="https://cal.com/qdine/15min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 hover:text-[#0a714e] px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
              title="Open calendar in new tab"
            >
              <span>Open in new tab</span>
              <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
            </a>
            <button 
              onClick={closeModal}
              className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Calendar Body */}
        <div className="relative flex-1 w-full bg-[#fdfaf6] overflow-y-auto">
          <Cal
            calLink="qdine/15min"
            style={{ width: "100%", height: "100%", minHeight: "550px", border: "0" }}
            config={{ layout: "month_view", theme: "light" }}
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="bg-[#111111] hover:bg-black text-white px-6 sm:px-8 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 flex items-center justify-center sm:w-max shadow-sm relative z-20 cursor-pointer"
      >
        Book a demo
      </button>

      {mounted && typeof document !== 'undefined' ? createPortal(modal, document.body) : null}
    </>
  );
}
