"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function BookDemoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantType: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.restaurantType) {
      alert("Please fill in all fields.");
      return;
    }
    // Handle form submission here
    console.log("Demo request submitted:", formData);
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Reset state after animation completes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        restaurantType: '',
      });
    }, 300);
  };

  const modal = isOpen ? (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeModal}
      ></div>
      <div 
        className="bg-white rounded-[24px] p-6 sm:p-8 w-full max-w-md shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
        
        {isSubmitted ? (
          <div className="py-8 px-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-[32px] text-[#0a714e]">check_circle</span>
            </div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-3 font-serif tracking-tight">Demo Requested!</h2>
            <p className="text-gray-500 text-[15px] mb-8 leading-relaxed">
              Thank you, {formData.name.split(' ')[0]}! We've received your request and our team will get in touch with you shortly.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-[#111111] hover:bg-black text-white py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 shadow-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-2 font-serif tracking-tight">Book a Demo</h2>
              <p className="text-gray-500 text-[14px]">See how Qdine can transform your restaurant. Fill out the details below.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[13px] font-medium text-gray-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent transition-all bg-gray-50/50 text-[14px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-[13px] font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent transition-all bg-gray-50/50 text-[14px]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[13px] font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent transition-all bg-gray-50/50 text-[14px]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="restaurantType" className="block text-[13px] font-medium text-gray-700 mb-1.5">Restaurant Type</label>
                <div className="relative">
                  <select
                    id="restaurantType"
                    name="restaurantType"
                    value={formData.restaurantType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent transition-all bg-gray-50/50 appearance-none cursor-pointer text-[14px]"
                  >
                    <option value="" disabled>Select type</option>
                    <option value="Fine Dining">Fine Dining</option>
                    <option value="Casual Dining">Casual Dining</option>
                    <option value="Quick Service (QSR)">Quick Service (QSR)</option>
                    <option value="Cafe / Bakery">Cafe / Bakery</option>
                    <option value="Bar / Pub">Bar / Pub</option>
                    <option value="Food Truck">Food Truck</option>
                    <option value="Cloud Kitchen">Cloud Kitchen</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                    <span className="material-symbols-outlined text-[18px]">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#111111] hover:bg-black text-white py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 shadow-sm"
                >
                  Request Demo
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-[#111111] hover:bg-black text-white px-6 sm:px-8 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 flex items-center justify-center sm:w-max shadow-sm relative z-20"
      >
        Book a demo
      </button>

      {mounted ? createPortal(modal, document.body) : null}
    </>
  );
}

