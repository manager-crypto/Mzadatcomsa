import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  CreditCard, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Building2,
  Wallet
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface BookingPageProps {
  onNavigate: (page: string) => void;
  property?: any; // We can make this strictly typed if we knew the type, but 'any' is safe for now
}

export const BookingPage: React.FC<BookingPageProps> = ({ onNavigate, property }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  // Mock property data if none provided
  const propertyData = property || {
    title: "فيلا مودرن فاخرة في حي العقيق",
    location: "الرياض، حي العقيق",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1625315271865-2e10ef879e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjB2aWxsYSUyMHNhdWRpJTIwYXJhYmlhJTIwZXh0ZXJpb3IlMjBzdW5ueXxlbnwxfHx8fDE3Njg3NTcxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ref: "REF-2024-8859",
    deposit: 5000
  };

  const handleConfirm = () => {
    // In a real app, we would process payment/booking here
    setStep(2); // Move to success state
  };

  if (step === 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6" dir="rtl">
        <div className="bg-white rounded-3xl p-8 max-w-lg w-full text-center shadow-lg border border-gray-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle2 size={40} strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2 font-sans">تم الحجز بنجاح!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            شكراً لك، تم تأكيد حجزك للعقار رقم <span className="font-bold text-gray-900">{propertyData.ref}</span>. 
            تم إرسال تفاصيل الحجز إلى بريدك الإلكتروني وجوالك.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-4 mb-8 text-right text-sm border border-gray-100">
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">رقم الحجز</span>
              <span className="font-bold text-gray-900">#BK-99283</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">تاريخ المعاينة</span>
              <span className="font-bold text-gray-900">{selectedDate || '2024-02-20'}</span>
            </div>
          </div>

          <div className="flex gap-3">
             <button 
               onClick={() => onNavigate('home')}
               className="flex-1 bg-gray-100 text-gray-900 font-bold h-12 rounded-xl hover:bg-gray-200 transition-colors"
             >
               العودة للرئيسية
             </button>
             <button 
               onClick={() => onNavigate('dashboard')}
               className="flex-1 bg-[#0F766E] text-white font-bold h-12 rounded-xl hover:bg-[#0d615b] transition-colors shadow-lg shadow-[#0F766E]/20"
             >
               حجوزاتي
             </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-36" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <span className="cursor-pointer hover:text-gray-900" onClick={() => onNavigate('home')}>الرئيسية</span>
          <ChevronRight size={14} className="rtl:rotate-180" />
          <span className="cursor-pointer hover:text-gray-900" onClick={() => onNavigate('city-sale')}>العقارات</span>
          <ChevronRight size={14} className="rtl:rotate-180" />
          <span className="text-[#0F766E] font-medium">إتمام الحجز</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Right Column: Booking Form */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* 1. Personal Information */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <User size={20} />
                </div>
                <div>
                   <h2 className="text-xl font-bold text-gray-900 font-sans">المعلومات الشخصية</h2>
                   <p className="text-sm text-gray-500">يرجى التأكد من صحة البيانات للتواصل معك</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                   <label className="text-sm font-bold text-gray-700">الاسم الكامل</label>
                   <div className="relative">
                     <input 
                       type="text" 
                       placeholder="ادخل اسمك الكامل"
                       className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 pr-10 text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all"
                     />
                     <User className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" size={18} />
                   </div>
                </div>

                <div className="space-y-1.5">
                   <label className="text-sm font-bold text-gray-700">رقم الجوال</label>
                   <div className="relative">
                     <input 
                       type="tel" 
                       placeholder="05xxxxxxxx"
                       className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 pr-10 text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all text-left"
                       dir="ltr"
                     />
                     <Phone className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" size={18} />
                   </div>
                </div>

                <div className="space-y-1.5 md:col-span-2">
                   <label className="text-sm font-bold text-gray-700">البريد الإلكتروني</label>
                   <div className="relative">
                     <input 
                       type="email" 
                       placeholder="name@example.com"
                       className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 pr-10 text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all text-left"
                       dir="ltr"
                     />
                     <Mail className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" size={18} />
                   </div>
                </div>
              </div>
            </section>

            {/* 2. Booking Time */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                  <Calendar size={20} />
                </div>
                <div>
                   <h2 className="text-xl font-bold text-gray-900 font-sans">وقت المعاينة المناسب</h2>
                   <p className="text-sm text-gray-500">اختر الوقت والتاريخ المناسب لك لزيارة العقار</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                   <label className="text-sm font-bold text-gray-700">تاريخ الزيارة</label>
                   <input 
                     type="date" 
                     className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all"
                     onChange={(e) => setSelectedDate(e.target.value)}
                   />
                </div>
                <div className="space-y-1.5">
                   <label className="text-sm font-bold text-gray-700">الوقت المفضل</label>
                   <select 
                     className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all appearance-none cursor-pointer"
                     onChange={(e) => setSelectedTime(e.target.value)}
                   >
                     <option value="" disabled selected>اختر الوقت</option>
                     <option value="morning">صباحاً (9 ص - 12 م)</option>
                     <option value="afternoon">مساءً (4 م - 6 م)</option>
                     <option value="evening">مساءً (6 م - 9 م)</option>
                   </select>
                </div>
              </div>
            </section>

            {/* 3. Payment Method (If deposit is required) */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <Wallet size={20} />
                </div>
                <div>
                   <h2 className="text-xl font-bold text-gray-900 font-sans">دفع العربون (اختياري)</h2>
                   <p className="text-sm text-gray-500">يمكنك دفع عربون لحجز العقار وتأكيد جديتك</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center justify-center gap-3 transition-all ${paymentMethod === 'card' ? 'border-[#0F766E] bg-teal-50/10 text-[#0F766E]' : 'border-gray-100 hover:border-gray-200 text-gray-600'}`}
                >
                  <CreditCard size={24} />
                  <span className="font-bold text-sm">بطاقة مدى / ائتمان</span>
                </div>
                <div 
                  onClick={() => setPaymentMethod('apple')}
                  className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center justify-center gap-3 transition-all ${paymentMethod === 'apple' ? 'border-black bg-black/5 text-black' : 'border-gray-100 hover:border-gray-200 text-gray-600'}`}
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
                  </svg>
                  <span className="font-bold text-sm">Apple Pay</span>
                </div>
                <div 
                  onClick={() => setPaymentMethod('transfer')}
                  className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center justify-center gap-3 transition-all ${paymentMethod === 'transfer' ? 'border-[#0F766E] bg-teal-50/10 text-[#0F766E]' : 'border-gray-100 hover:border-gray-200 text-gray-600'}`}
                >
                  <Building2 size={24} />
                  <span className="font-bold text-sm">تحويل بنكي</span>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500">اسم صاحب البطاقة</label>
                    <input type="text" className="w-full h-10 bg-white border border-gray-200 rounded-lg px-3 text-sm focus:outline-none focus:border-[#0F766E]" placeholder="NAME ON CARD" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500">رقم البطاقة</label>
                    <div className="relative">
                       <input type="text" className="w-full h-10 bg-white border border-gray-200 rounded-lg px-3 text-sm focus:outline-none focus:border-[#0F766E]" placeholder="0000 0000 0000 0000" dir="ltr" />
                       <CreditCard size={16} className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500">تاريخ الانتهاء</label>
                      <input type="text" className="w-full h-10 bg-white border border-gray-200 rounded-lg px-3 text-sm focus:outline-none focus:border-[#0F766E]" placeholder="MM/YY" dir="ltr" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500">رمز التحقق (CVC)</label>
                      <input type="text" className="w-full h-10 bg-white border border-gray-200 rounded-lg px-3 text-sm focus:outline-none focus:border-[#0F766E]" placeholder="123" dir="ltr" />
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Left Column: Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 sticky top-24">
               <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 relative group">
                  <ImageWithFallback 
                    src={propertyData.image} 
                    alt={propertyData.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                    {propertyData.ref}
                  </div>
               </div>

               <div className="mb-6">
                 <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">{propertyData.title}</h3>
                 <div className="flex items-center text-gray-500 text-sm mb-3">
                   <MapPin size={16} className="ml-1 text-[#0F766E]" />
                   {propertyData.location}
                 </div>
                 <div className="text-2xl font-black text-[#0F766E] font-sans">
                   {propertyData.price.toLocaleString()} <span className="text-sm font-medium text-gray-500">ر.س</span>
                 </div>
               </div>

               <div className="space-y-3 mb-6 pt-6 border-t border-gray-100">
                 <div className="flex justify-between text-sm">
                   <span className="text-gray-500">قيمة العربون</span>
                   <span className="font-bold text-gray-900">{propertyData.deposit.toLocaleString()} ر.س</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-gray-500">الضريبة (15%)</span>
                   <span className="font-bold text-gray-900">{(propertyData.deposit * 0.15).toLocaleString()} ر.س</span>
                 </div>
                 <div className="flex justify-between text-lg font-black pt-3 border-t border-gray-100">
                   <span className="text-gray-900">الإجمالي</span>
                   <span className="text-[#0F766E]">{(propertyData.deposit * 1.15).toLocaleString()} ر.س</span>
                 </div>
               </div>

               <button 
                 onClick={handleConfirm}
                 className="w-full h-14 bg-[#0F766E] text-white font-bold rounded-xl hover:bg-[#0d615b] transition-colors shadow-lg shadow-[#0F766E]/20 flex items-center justify-center gap-2"
               >
                 <span>تأكيد الحجز ودفع العربون</span>
                 <CheckCircle2 size={20} />
               </button>

               <div className="mt-4 flex items-start gap-2 text-xs text-gray-400 leading-relaxed bg-gray-50 p-3 rounded-lg">
                 <ShieldCheck size={16} className="shrink-0 text-[#0F766E]" />
                 <span>جميع عمليات الدفع محمية ومشفرة. العربون قابل للاسترداد في حالة عدم إتمام الصفقة وفقاً للشروط.</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
