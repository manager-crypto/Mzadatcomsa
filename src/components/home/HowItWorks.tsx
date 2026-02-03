import React from 'react';
import { User, Wallet, Gavel } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">زايد بكل سهولة</h2>
          <p className="text-gray-500 text-lg">تعرف على آلية عمل منصة مزادات</p>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Connecting Line (SVG) - Visible on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2 -z-10 text-[#40C1C7]">
             <svg width="100%" height="150" viewBox="0 0 1000 150" preserveAspectRatio="none" className="w-full h-full overflow-visible opacity-30">
               <path d="M0,100 Q500,-20 1000,100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
             </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1: Register */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#40C1C7] transition-all duration-300 relative z-10">
                <div className="w-12 h-12 bg-teal-50 text-[#40C1C7] rounded-xl flex items-center justify-center">
                   <User size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">التسجيل في المنصة</h3>
              <p className="text-gray-500 text-sm max-w-[200px]">انشئ حسابك على منصة المزاد الإلكتروني</p>
            </div>

            {/* Step 2: Charge Wallet */}
            <div className="flex flex-col items-center text-center group md:-mt-12">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#40C1C7] transition-all duration-300 relative z-10">
                <div className="w-12 h-12 bg-teal-50 text-[#40C1C7] rounded-xl flex items-center justify-center">
                   <Wallet size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">شحن المحفظة</h3>
              <p className="text-gray-500 text-sm max-w-[200px]">اشحن محفظتك لتكون مستعد لبدء المزايدة على الفور</p>
            </div>

            {/* Step 3: Start Bidding */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#40C1C7] transition-all duration-300 relative z-10">
                <div className="w-12 h-12 bg-teal-50 text-[#40C1C7] rounded-xl flex items-center justify-center">
                   <Gavel size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">بدء المزايدة</h3>
              <p className="text-gray-500 text-sm max-w-[200px]">سدد قيمة المشاركة وابدأ المزايدة</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
