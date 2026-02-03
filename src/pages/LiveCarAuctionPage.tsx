import React, { useState } from 'react';
import { 
  Heart, 
  Share2, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  User, 
  ChevronLeft,
  Gauge,
  FileCheck,
  Settings
} from 'lucide-react';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

interface LiveCarAuctionPageProps {
  onNavigate: (page: string) => void;
}

export const LiveCarAuctionPage: React.FC<LiveCarAuctionPageProps> = ({ onNavigate }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [bidAmount, setBidAmount] = useState<string>('86000');
  
  const images = [
    "https://images.unsplash.com/photo-1621007947382-bb3c3968e3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx0b3lvdGElMjBjYW1yeSUyMGludGVyaW9yfGVufDF8fHx8MTc2NjE1ODAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1629897009405-18870ec3c889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0b3lvdGElMjBjYW1yeXxlbnwxfHx8fDE3NjYxNjEwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1590362891991-f776e747a588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx0b3lvdGElMjBjYW1yeXxlbnwxfHx8fDE3NjYxNjEwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  const bids = [
    { user: "سعد م.", time: "منذ 2 دقيقة", amount: 85000, active: true },
    { user: "محمد ع.", time: "منذ 15 دقيقة", amount: 84000, active: false },
    { user: "خالد س.", time: "منذ 1 ساعة", amount: 82500, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20" dir="rtl">
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
           <span className="cursor-pointer hover:text-[#40C1C7]" onClick={() => onNavigate('home')}>الرئيسية</span>
           <ChevronLeft size={14} />
           <span className="cursor-pointer hover:text-[#40C1C7]" onClick={() => onNavigate('bid-now')}>مزادات السيارات</span>
           <ChevronLeft size={14} />
           <span className="text-gray-900 font-bold">تويوتا كامري 2023 فل كامل</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- LEFT SIDEBAR (Bidding) --- */}
          <div className="lg:col-span-4 space-y-6 lg:order-2">
            
            {/* 1. Main Bidding Card */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-200 p-6 sticky top-28">
              
              {/* Timer */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 bg-red-50 text-[#FF3B30] px-4 py-2 rounded-full font-bold text-sm">
                  <Clock size={16} />
                  <span dir="ltr">02 d : 15 h : 30 m</span>
                </div>
              </div>

              {/* Price Info */}
              <div className="text-center mb-6">
                <p className="text-gray-500 text-sm mb-2">السعر الحالي (أعلى مزايدة)</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-[#1A1A1A] tracking-tighter">85,000</span>
                  <img src={sarCurrency} alt="SAR" className="w-6 opacity-60 mt-2" />
                </div>
                <div className="flex items-center justify-center gap-1 text-sm text-gray-400">
                  <User size={14} />
                  <span>12 مزايدين حتى الآن</span>
                </div>
              </div>

              {/* Bidding Controls */}
              <div className="space-y-4">
                <div>
                   <label className="text-sm font-bold text-gray-700 mb-2 block">قيمة المزايدة</label>
                   <div className="relative">
                     <Input 
                       value={bidAmount}
                       onChange={(e) => setBidAmount(e.target.value)}
                       className="h-12 bg-gray-50 border-gray-200 text-left pl-16 text-lg font-bold" 
                     />
                     <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">SAR</span>
                     <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">أدنى مزايدة: 86,000</span>
                   </div>
                </div>

                {/* Preset Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  {[1000, 2000, 5000].map((amount) => (
                    <button 
                      key={amount}
                      className="py-2 rounded-lg border border-gray-200 text-gray-600 text-xs font-bold hover:border-[#40C1C7] hover:bg-[#40C1C7]/5 hover:text-[#40C1C7] transition-all"
                    >
                      {amount}+
                    </button>
                  ))}
                </div>

                {/* Main CTA */}
                <Button className="w-full bg-[#1A1A1A] hover:bg-[#40C1C7] text-white h-12 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  زايد الآن
                </Button>

                <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                  تطبق الشروط والأحكام. السعر لا يشمل ضريبة القيمة المضافة (15%).
                </p>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-end gap-2">
                   <span className="text-xs font-bold text-[#40C1C7]">موثوق</span>
                   <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                     <ShieldCheck size={16} />
                   </div>
                </div>
              </div>
            </div>

            {/* 2. Bid History Card */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-200 p-6">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="font-bold text-gray-900 flex items-center gap-2">
                   <Clock size={18} className="text-[#40C1C7]" />
                   سجل المزايدات
                 </h3>
               </div>

               <div className="space-y-4 relative">
                 {/* Timeline line */}
                 <div className="absolute top-2 bottom-2 right-[7px] w-0.5 bg-gray-100"></div>

                 {bids.map((bid, i) => (
                   <div key={i} className="flex items-start gap-3 relative">
                     <div className={`w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 mt-1 flex-shrink-0 ${bid.active ? 'bg-[#40C1C7]' : 'bg-gray-200'}`}></div>
                     <div className="flex-1">
                       <div className="flex justify-between items-center mb-1">
                         <span className="text-sm font-bold text-gray-900">{bid.user}</span>
                         <span className={`text-sm font-bold ${bid.active ? 'text-[#40C1C7]' : 'text-gray-400'}`}>
                           SAR {bid.amount.toLocaleString()}
                         </span>
                       </div>
                       <div className="text-xs text-gray-400">{bid.time}</div>
                     </div>
                   </div>
                 ))}
               </div>

               <button className="w-full mt-4 text-xs text-gray-500 hover:text-[#40C1C7] font-medium transition-colors text-center">
                 عرض كل المزايدات (12)
               </button>
            </div>

            {/* 3. Safety Tips Card */}
            <div className="bg-white rounded-[24px] shadow-sm border border-gray-200 p-6">
               <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                 <ShieldCheck size={18} className="text-[#40C1C7]" />
                 نصائح التعامل الآمن
               </h3>
               <ul className="space-y-3 text-xs text-gray-500 leading-relaxed list-disc list-inside marker:text-[#40C1C7]">
                 <li>لا تقم بتحويل الأموال خارج المنصة لأي سبب.</li>
                 <li>عاين السيارة على أرض الواقع قبل إتمام الشراء النهائي.</li>
                 <li>تأكد من مطابقة المواصفات المذكورة في الفحص.</li>
                 <li>الإبلاغ فوراً في حال الاشتباه بأي عملية احتيال.</li>
               </ul>
            </div>

            {/* 4. Ad Info & Actions */}
            <div className="bg-gray-50 rounded-[24px] border border-gray-200 p-6 space-y-4">
               
               {/* Ad Info */}
               <div className="flex items-center justify-between text-xs text-gray-500 pb-4 border-b border-gray-200">
                  <div className="text-center flex-1 border-l border-gray-200 pl-2">
                    <p className="mb-1 text-gray-400">رقم الإعلان</p>
                    <p className="font-bold text-gray-900">105923</p>
                  </div>
                  <div className="text-center flex-1 pr-2">
                    <p className="mb-1 text-gray-400">تاريخ الإعلان</p>
                    <p className="font-bold text-gray-900">2023/10/12</p>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="grid grid-cols-2 gap-3">
                 <button className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-xl border border-gray-200 hover:border-red-200 hover:bg-red-50 hover:text-red-500 transition-all group">
                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-red-100 flex items-center justify-center transition-colors">
                      <Settings size={16} className="text-gray-500 group-hover:text-red-500" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 group-hover:text-red-500">مشكلة تقنية</span>
                 </button>
                 
                 <button className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500 transition-all group">
                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
                      <FileCheck size={16} className="text-gray-500 group-hover:text-orange-500" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 group-hover:text-orange-500">إرسال شكوى</span>
                 </button>
               </div>
            </div>

          </div>

          {/* --- RIGHT CONTENT (Car Details) --- */}
          <div className="lg:col-span-8 space-y-6 lg:order-1">
            
            {/* Image Gallery */}
            <div className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-sm">
               <div className="relative h-[400px] md:h-[500px] bg-gray-100">
                 <img 
                   src={images[currentImage]} 
                   alt="Car Main" 
                   className="w-full h-full object-cover"
                 />
                 
                 {/* Live Badge */}
                 <div className="absolute top-6 right-6 bg-[#FF3B30] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 animate-pulse">
                   <span className="w-2 h-2 bg-white rounded-full"></span>
                   مباشر
                 </div>

                 {/* Navigation Arrows (Optional visual cue) */}
                 <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                    {/* Implemented if needed, currently hidden */}
                 </div>
               </div>

               {/* Thumbnails */}
               <div className="p-2 flex gap-2 overflow-x-auto">
                 {images.map((img, idx) => (
                   <button 
                     key={idx}
                     onClick={() => setCurrentImage(idx)} 
                     className={`relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${currentImage === idx ? 'border-[#40C1C7]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                   >
                     <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                   </button>
                 ))}
               </div>
            </div>

            {/* Title & Info Card */}
            <div className="bg-white rounded-[24px] border border-gray-200 p-6 md:p-8 shadow-sm">
               <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                 <div>
                   <h1 className="text-3xl font-bold text-gray-900 mb-2">تويوتا كامري 2023 فل كامل</h1>
                   <p className="text-gray-500 font-medium">Toyota Camry • 2023</p>
                 </div>
                 
                 <div className="flex gap-2">
                   <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                     <Share2 size={18} />
                   </button>
                   <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors">
                     <Heart size={18} />
                   </button>
                 </div>
               </div>

               {/* Key Specs Grid */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  
                  {/* Odometer */}
                  <div className="bg-[#F8F9FA] rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-[#40C1C7]/5 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#40C1C7] group-hover:text-white transition-colors">
                       <Gauge size={20} />
                    </div>
                    <span className="text-xs text-gray-400 mb-1">الممشى</span>
                    <span className="font-bold text-gray-900 dir-ltr text-lg">
                      15,000 <span className="text-sm font-normal text-gray-500">km</span>
                    </span>
                  </div>

                  {/* Location */}
                  <div className="bg-[#F8F9FA] rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-[#40C1C7]/5 transition-colors">
                    <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#40C1C7] group-hover:text-white transition-colors">
                       <MapPin size={20} />
                    </div>
                    <span className="text-xs text-gray-400 mb-1">الموقع</span>
                    <span className="font-bold text-gray-900 text-lg">الرياض</span>
                  </div>

                  {/* Specs */}
                  <div className="bg-[#F8F9FA] rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-[#40C1C7]/5 transition-colors">
                    <div className="w-10 h-10 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#40C1C7] group-hover:text-white transition-colors">
                       <FileCheck size={20} />
                    </div>
                    <span className="text-xs text-gray-400 mb-1">المواصفات</span>
                    <span className="font-bold text-gray-900 text-lg">سعودي</span>
                  </div>

                  {/* Condition */}
                  <div className="bg-[#F8F9FA] rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-[#40C1C7]/5 transition-colors">
                    <div className="w-10 h-10 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#40C1C7] group-hover:text-white transition-colors">
                       <CheckCircle2 size={20} />
                    </div>
                    <span className="text-xs text-gray-400 mb-1">حالة البدي</span>
                    <span className="font-bold text-gray-900 text-lg">وكالة</span>
                  </div>

               </div>
            </div>

            {/* Description (Optional Placeholder) */}
            <div className="bg-white rounded-[24px] border border-gray-200 p-6 md:p-8 shadow-sm">
               <h3 className="font-bold text-xl mb-4 text-gray-900">وصف المركبة</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                 السيارة بحالة الوكالة، جميع الصيانات تمت في الوكالة. خالية من الحوادث والرش. المالك الأول.
                 تتميز بمحرك 4 سلندر اقتصادي، فتحة سقف، مقاعد جلد، شاشة ملاحة، كاميرا خلفية، حساسات أمامية وخلفية.
                 السيارة جاهزة للنقل الفوري.
               </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
