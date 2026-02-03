import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  User, 
  Gavel, 
  ArrowRight, 
  Heart, 
  Share2, 
  Maximize, 
  Bed, 
  Bath, 
  Building, 
  CheckCircle2, 
  Calendar,
  ShieldCheck,
  AlertCircle,
  Settings,
  FileCheck,
  BadgeCheck
} from 'lucide-react';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';
import galleryImage from 'figma:asset/df69c8e52b412c7f91b6f65ddce29539b9012881.png';

interface LuxuryAuctionDetailsPageProps {
  property?: any;
  onNavigate?: (page: string) => void;
  onBack?: () => void;
  isLoggedIn?: boolean;
  onOpenLogin?: () => void;
}

export const LuxuryAuctionDetailsPage: React.FC<LuxuryAuctionDetailsPageProps> = ({ 
  property = {
      id: 1,
      title: 'فيلا الشاطئ الأبيض',
      description: 'فيلا مودرن بمسابح خاصة وإطلالة بانورامية. تتميز بتصميم معماري فريد يجمع بين الفخامة والراحة، مع مساحات واسعة وتشطيبات عالية الجودة. الموقع الاستراتيجي يوفر خصوصية تامة وقرب من أهم الخدمات.',
      location: 'جدة، حي الشاطئ',
      price: 12500000,
      area: 1200,
      beds: 6,
      baths: 8,
      type: 'villa',
      status: 'active',
      timeLeft: '02 يوم : 14 ساعة',
      image: 'https://images.unsplash.com/photo-1669605273258-52f42b9489ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aGl0ZSUyMHZpbGxhJTIwbHV4dXJ5JTIwcG9vbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NjI4OTYyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bidders: 14
  }, 
  onNavigate, 
  onBack,
  isLoggedIn = false,
  onOpenLogin = () => {}
}) => {
  const [activeTab, setActiveTab] = useState('details');
  const [bidAmount, setBidAmount] = useState<string>('');

  const features = [
    'مسبح خاص', 'حديقة واسعة', 'مصعد', 'تكييف مركزي', 
    'موقف سيارات', 'غرفة سينما', 'نظام ذكي', 'إطلالة بحرية',
    'غرفة خادمة', 'غرفة سائق', 'مطبخ خارجي', 'كاميرات مراقبة'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-36 pb-12" dir="rtl">
      {/* Breadcrumbs & Back */}
      <div className="container mx-auto px-4 mb-6">
        <button 
          onClick={onBack || (() => onNavigate?.('luxury-real-estate-auctions'))}
          className="flex items-center gap-2 text-gray-500 hover:text-[#40C1C7] transition-colors mb-4"
        >
          <ArrowRight size={18} />
          <span>العودة للمزادات</span>
        </button>
      </div>

      {/* Hero Section - Images */}
      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px] rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-white">
          {/* Main Image */}
          <div className="h-full relative group">
            <img 
              src={property.image} 
              alt={property.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-bold text-gray-900">المزاد جاري</span>
            </div>
          </div>
          
          {/* Secondary Images Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
             <div className="relative overflow-hidden group">
                <img 
                  src={galleryImage} 
                  alt="Gallery" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-left" 
                />
             </div>
             <div className="relative overflow-hidden group">
                <img 
                  src={galleryImage} 
                  alt="Gallery" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-center" 
                />
             </div>
             <div className="relative overflow-hidden group">
                <img 
                  src={galleryImage} 
                  alt="Gallery" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-right" 
                />
             </div>
             <div className="relative overflow-hidden group bg-gray-900 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                <div className="text-center text-white">
                   <Maximize size={24} className="mx-auto mb-2 opacity-80" />
                   <span className="text-sm font-bold">عرض كل الصور</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Right Column: Details */}
          <div className="lg:col-span-2 space-y-6">
             {/* Header Info */}
             <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                   <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                      <div className="flex items-center gap-2 text-gray-500">
                         <MapPin size={18} className="text-[#40C1C7]" />
                         <span>{property.location}</span>
                      </div>
                   </div>
                   <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all">
                         <Heart size={20} />
                      </button>
                      <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#40C1C7] hover:border-[#40C1C7] hover:bg-teal-50 transition-all">
                         <Share2 size={20} />
                      </button>
                   </div>
                </div>

                {/* Key Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-gray-400 text-xs mb-1">المساحة</span>
                      <div className="flex items-center gap-1 font-bold text-gray-900">
                         <Maximize size={16} className="text-[#40C1C7]" />
                         {property.area} م²
                      </div>
                   </div>
                   <div className="flex flex-col items-center justify-center text-center border-r border-gray-200">
                      <span className="text-gray-400 text-xs mb-1">غرف النوم</span>
                      <div className="flex items-center gap-1 font-bold text-gray-900">
                         <Bed size={16} className="text-[#40C1C7]" />
                         {property.beds}
                      </div>
                   </div>
                   <div className="flex flex-col items-center justify-center text-center border-r border-gray-200">
                      <span className="text-gray-400 text-xs mb-1">دورات المياه</span>
                      <div className="flex items-center gap-1 font-bold text-gray-900">
                         <Bath size={16} className="text-[#40C1C7]" />
                         {property.baths}
                      </div>
                   </div>
                   <div className="flex flex-col items-center justify-center text-center border-r border-gray-200">
                      <span className="text-gray-400 text-xs mb-1">نوع العقار</span>
                      <div className="flex items-center gap-1 font-bold text-gray-900">
                         <Building size={16} className="text-[#40C1C7]" />
                         {property.type === 'villa' ? 'فيلا' : property.type === 'apartment' ? 'شقة' : 'تجاري'}
                      </div>
                   </div>
                </div>
             </div>

             {/* Description & Features */}
             <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-8 border-b border-gray-100 mb-6">
                   <button 
                     onClick={() => setActiveTab('details')}
                     className={`pb-4 text-sm font-bold relative ${activeTab === 'details' ? 'text-[#40C1C7]' : 'text-gray-500 hover:text-gray-800'}`}
                   >
                     تفاصيل العقار
                     {activeTab === 'details' && <span className="absolute bottom-0 right-0 w-full h-0.5 bg-[#40C1C7] rounded-t-full" />}
                   </button>
                   <button 
                     onClick={() => setActiveTab('features')}
                     className={`pb-4 text-sm font-bold relative ${activeTab === 'features' ? 'text-[#40C1C7]' : 'text-gray-500 hover:text-gray-800'}`}
                   >
                     المميزات والمرافق
                     {activeTab === 'features' && <span className="absolute bottom-0 right-0 w-full h-0.5 bg-[#40C1C7] rounded-t-full" />}
                   </button>
                   <button 
                     onClick={() => setActiveTab('files')}
                     className={`pb-4 text-sm font-bold relative ${activeTab === 'files' ? 'text-[#40C1C7]' : 'text-gray-500 hover:text-gray-800'}`}
                   >
                     المستندات والوثائق
                     {activeTab === 'files' && <span className="absolute bottom-0 right-0 w-full h-0.5 bg-[#40C1C7] rounded-t-full" />}
                   </button>
                </div>

                <div className="min-h-[200px]">
                   {activeTab === 'details' && (
                      <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                         <h3 className="font-bold text-gray-900 mb-3">نبذة عن العقار</h3>
                         <p className="text-gray-600 leading-relaxed mb-6">
                            {property.description || 'لا يوجد وصف متاح لهذا العقار حالياً.'}
                         </p>
                         
                         <h3 className="font-bold text-gray-900 mb-3">بيانات المزاد</h3>
                         <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            <div className="flex justify-between py-2 border-b border-gray-50">
                               <span className="text-gray-500 text-sm">رقم المزاد</span>
                               <span className="font-medium text-gray-900">#MZ-{property.id}024</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-50">
                               <span className="text-gray-500 text-sm">تاريخ البدء</span>
                               <span className="font-medium text-gray-900">20 ديسمبر 2025</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-50">
                               <span className="text-gray-500 text-sm">مبلغ التأمين</span>
                               <span className="font-medium text-gray-900">100,000 ر.س</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-50">
                               <span className="text-gray-500 text-sm">الجهة المشرفة</span>
                               <span className="font-medium text-gray-900">مركز الإسناد والتصفية</span>
                            </div>
                         </div>
                      </div>
                   )}

                   {activeTab === 'features' && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                         {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                               <CheckCircle2 size={16} className="text-[#40C1C7]" />
                               <span className="text-sm">{feature}</span>
                            </div>
                         ))}
                      </div>
                   )}
                </div>
             </div>
          </div>

          {/* Left Column: Bidding Card & Sidebar */}
          <div className="lg:col-span-1">
             <div className="sticky top-28 space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto pb-6 custom-scrollbar">
             
              {/* Auction Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xl shadow-gray-200/50">
                <div className="text-center mb-6">
                   <span className="text-gray-500 text-sm block mb-1">السعر الحالي واصل</span>
                   <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-black text-gray-900 tracking-tight">{property.price?.toLocaleString()}</span>
                      <img src={sarCurrency} alt="SAR" className="w-8 opacity-80" />
                   </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-500 text-xs font-bold">الوقت المتبقي</span>
                      <span className="text-[#40C1C7] text-xs font-bold bg-white px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                        <Clock size={12} /> {property.timeLeft}
                      </span>
                   </div>
                   <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#40C1C7] w-3/4 rounded-full animate-pulse" />
                   </div>
                   <p className="text-center text-[10px] text-gray-400 mt-2">ينتهي المزاد في 25 ديسمبر 2025 الساعة 04:00 م</p>
                </div>

                <div className="space-y-4 mb-6">
                   <div className="relative">
                      <label className="text-xs font-bold text-gray-700 mb-1.5 block">مبلغ المزايدة</label>
                      <input 
                        type="text" 
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        placeholder={`أدنى مزايدة: ${(property.price + 50000).toLocaleString()}`}
                        className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] font-bold text-lg text-left ltr"
                      />
                      <span className="absolute left-4 top-[34px] text-gray-400 text-sm font-bold">SAR</span>
                   </div>
                   
                   <button 
                     onClick={() => {
                       if (!isLoggedIn) {
                         onOpenLogin();
                         return;
                       }
                     }}
                     className="w-full py-4 bg-[#40C1C7] text-white rounded-xl font-bold text-lg hover:bg-[#35a3a8] transition-colors shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 group"
                   >
                      <Gavel size={20} className="group-hover:-rotate-12 transition-transform" />
                      زايد الآن
                   </button>
                   
                   <p className="text-xs text-center text-gray-400 leading-tight">
                      * تطبق الشروط والأحكام. يتطلب المزاد دفع مبلغ تأمين مسترد.
                   </p>
                </div>

                {/* Bidding History Snippet */}
                <div className="border-t border-gray-100 pt-4">
                   <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <User size={16} className="text-gray-400" />
                      آخر المزايدات
                   </h4>
                   <div className="space-y-3">
                      {[1, 2, 3].map((_, idx) => (
                         <div key={idx} className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2">
                               <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-500 font-bold">
                                  {['A', 'M', 'S'][idx]}
                               </div>
                               <span className="text-gray-600 flex items-center gap-1">
                                 مزايد ****{['45', '92', '11'][idx]}
                                 <ShieldCheck size={12} className="text-green-500 fill-green-500/10" />
                               </span>
                            </div>
                            <span className="font-bold text-gray-900 font-mono">
                               {(property.price - (idx * 50000)).toLocaleString()}
                            </span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Seller Info */}
             <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg border border-red-100">
                  RE
                </div>
                <div className="flex-1">
                   <div className="flex items-center gap-2 mb-1">
                     <h4 className="font-bold text-gray-900">شركة العقار المتميز</h4>
                     <BadgeCheck size={14} className="text-blue-500" />
                   </div>
                   <div className="flex items-center gap-2 text-xs text-gray-500">
                     <span className="flex items-center gap-1"><span className="text-yellow-400">★</span> 4.9</span>
                     <span>•</span>
                     <span>وكيل معتمد</span>
                   </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#40C1C7] hover:text-white transition-all">
                  <Share2 size={18} />
                </button>
             </div>

             {/* Safety Tips */}
             <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-blue-600" />
                  نصائح التعامل الآمن
                </h3>
                <ul className="space-y-3 text-xs text-blue-800/80 leading-relaxed list-disc list-inside marker:text-blue-500">
                  <li>لا تقم بتحويل الأموال خارج المنصة لأي سبب.</li>
                  <li>عاين العقار على أرض الواقع قبل إتمام الشراء.</li>
                  <li>تأكد من مطابقة المواصفات المذكورة في الصك.</li>
                  <li>الإبلاغ فوراً في حال الاشتباه بأي عملية احتيال.</li>
                </ul>
             </div>

             {/* Ad Info & Actions */}
             <div className="bg-white rounded-3xl border border-gray-200 p-6 space-y-4 shadow-sm">
                {/* Ad Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 pb-4 border-b border-gray-100">
                   <div className="text-center flex-1 border-l border-gray-100 pl-2">
                     <p className="mb-1 text-gray-400">رقم الإعلان</p>
                     <p className="font-bold text-gray-900 font-mono">7658291</p>
                   </div>
                   <div className="text-center flex-1 pr-2">
                     <p className="mb-1 text-gray-400">تاريخ الإعلان</p>
                     <p className="font-bold text-gray-900 font-mono">2023/12/14</p>
                   </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50 hover:text-red-500 transition-all group">
                     <Settings size={16} className="text-gray-400 group-hover:text-red-500" />
                     <span className="text-[10px] font-bold text-gray-600 group-hover:text-red-500">مشكلة تقنية</span>
                  </button>
                  
                  <button className="flex flex-col items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-500 transition-all group">
                     <FileCheck size={16} className="text-gray-400 group-hover:text-orange-500" />
                     <span className="text-[10px] font-bold text-gray-600 group-hover:text-orange-500">إرسال شكوى</span>
                  </button>
                </div>
             </div>
             
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
