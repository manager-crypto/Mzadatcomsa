import React from 'react';
import { CheckCircle2, Megaphone, Target, BarChart3, ArrowUpLeft } from 'lucide-react';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';

export const AdvertisersPage = () => {
  return (
    <div className="pt-36 pb-20 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#111] text-white py-20 relative overflow-hidden rounded-b-[3rem]">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#40C1C7] rounded-full blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
         <div className="w-full max-w-[1440px] mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">وصل إعلانك <br/><span className="text-[#40C1C7]">للملايين</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              انضم إلى شبكة مزادات الإعلانية واستهدف الباحثين عن العقارات والفرص الاستثمارية بدقة عالية.
            </p>
            <button className="bg-[#40C1C7] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#35a4a9] transition-all shadow-lg shadow-teal-500/20">
              ابدأ حملتك الإعلانية
            </button>
         </div>
      </div>

      {/* Features */}
      <div className="w-full max-w-[1440px] mx-auto px-4 py-24">
         <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">لماذا تعلن معنا؟</h2>
           <p className="text-gray-500">نقدم لك حلولاً إعلانية مبتكرة تضمن لك الوصول لجمهورك المستهدف.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:border-[#40C1C7] transition-colors group">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#40C1C7] shadow-sm group-hover:scale-110 transition-transform">
                 <Target size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">استهداف دقيق</h3>
               <p className="text-gray-500 text-sm">وصل لجمهور مهتم بالعقارات والاستثمار بدقة عالية بناءً على الموقع والاهتمامات.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:border-[#40C1C7] transition-colors group">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#40C1C7] shadow-sm group-hover:scale-110 transition-transform">
                 <Megaphone size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">تنسيقات متعددة</h3>
               <p className="text-gray-500 text-sm">خيارات إعلانية متنوعة تشمل البنرات، القوائم المميزة، ورسائل البريد الإلكتروني.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:border-[#40C1C7] transition-colors group">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#40C1C7] shadow-sm group-hover:scale-110 transition-transform">
                 <BarChart3 size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">تقارير مفصلة</h3>
               <p className="text-gray-500 text-sm">لوحة تحكم متكاملة لمتابعة أداء حملاتك الإعلانية وتحليل النتائج لحظياً.</p>
            </div>
         </div>
      </div>

      {/* Pricing / Packages */}
      <div className="bg-black text-white py-24">
         <div className="w-full max-w-[1440px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">باقات تناسب الجميع</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Basic */}
               <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl font-bold mb-2">الباقة الأساسية</h3>
                  <div className="text-3xl font-bold mb-6 flex items-center gap-2">
                    500 
                    <span className="text-sm font-normal text-gray-400 flex items-center gap-1">
                      <img src={sarCurrency} alt="ر.س" className="h-4 w-auto brightness-0 invert" /> / شهر
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8 text-gray-400 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#40C1C7]" /> 5 إعلانات مميزة</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#40C1C7]" /> ظهور في نتائج البحث</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#40C1C7]" /> دعم فني عبر البريد</li>
                  </ul>
                  <button className="w-full py-3 bg-white/10 rounded-xl hover:bg-white hover:text-black transition-colors font-bold text-sm">اشترك الآن</button>
               </div>

               {/* Pro */}
               <div className="bg-[#40C1C7] rounded-3xl p-8 border border-teal-500 relative transform md:-translate-y-4 shadow-2xl shadow-teal-500/20">
                  <span className="absolute top-4 left-4 bg-black/20 px-3 py-1 rounded-full text-xs font-bold">الأكثر طلباً</span>
                  <h3 className="text-xl font-bold mb-2">الباقة المتقدمة</h3>
                  <div className="text-3xl font-bold mb-6 flex items-center gap-2">
                    1,200 
                    <span className="text-sm font-normal text-teal-100 flex items-center gap-1">
                      <img src={sarCurrency} alt="ر.س" className="h-4 w-auto brightness-0 invert" /> / شهر
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8 text-white text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} /> 15 إعلان مميز</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} /> ظهور في الصفحة الرئيسية</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} /> إحصائيات م��قدمة</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} /> دعم فني مباشر</li>
                  </ul>
                  <button className="w-full py-3 bg-white text-[#40C1C7] rounded-xl hover:bg-gray-100 transition-colors font-bold text-sm">اشترك الآن</button>
               </div>

               {/* Enterprise */}
               <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-colors">
                  <h3 className="text-xl font-bold mb-2">باقة الشركات</h3>
                  <div className="text-3xl font-bold mb-6">اتصل بنا <span className="text-sm font-normal text-gray-400">للتسعير</span></div>
                  <ul className="space-y-4 mb-8 text-gray-400 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#40C1C7]" /> إعلانات غير محدودة</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#40C1C7]" /> مدير حساب خاص</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#40C1C7]" /> API للربط المباشر</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#40C1C7]" /> تقارير مخصصة</li>
                  </ul>
                  <button className="w-full py-3 bg-white/10 rounded-xl hover:bg-white hover:text-black transition-colors font-bold text-sm">تواصل معنا</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
