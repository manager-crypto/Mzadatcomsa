import React, { useState } from 'react';
import { 
  ArrowRight, 
  Timer, 
  Gavel, 
  AlertCircle, 
  CheckCircle2, 
  History, 
  ShieldCheck, 
  CreditCard,
  User,
  Share2,
  Plus,
  Minus,
  Phone,
  MessageCircle,
  Building2
} from 'lucide-react';
import { SaudiPlate } from '../components/auctions/SaudiPlate';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';

interface PlateDetailsPageProps {
  onNavigate?: (page: string) => void;
}

export const PlateDetailsPage: React.FC<PlateDetailsPageProps> = ({ onNavigate }) => {
  const [bidAmount, setBidAmount] = useState<number>(2500000);
  const [activeTab, setActiveTab] = useState<'history' | 'details'>('history');

  // Mock Data for a specific plate
  const plate = {
    id: 1,
    letters: 'ط ط ط',
    numbers: '١ ١ ١',
    type: 'private',
    currentPrice: 1800000,
    deposit: 100000,
    minIncrement: 10000,
    endTime: '2025-06-20T18:00:00',
    timeLeft: '02 يوم : 15 س : 30 د',
    bidsCount: 45,
    status: 'diamond'
  };

  const bidHistory = [
    { id: 1, bidder: 'عبدالله ...', amount: 250000, time: '10:30 ص' },
    { id: 2, bidder: 'فهد ...', amount: 245000, time: '10:15 ص' },
    { id: 3, bidder: 'محمد ...', amount: 240000, time: '09:45 ص' },
    { id: 4, bidder: 'سعد ...', amount: 235000, time: '09:00 ص' },
    { id: 5, bidder: 'خالد ...', amount: 230000, time: 'أمس' },
  ];

  const handleIncrease = () => {
    setBidAmount(prev => prev + plate.minIncrement);
  };

  const handleDecrease = () => {
    if (bidAmount > plate.currentPrice) {
      setBidAmount(prev => prev - plate.minIncrement);
    }
  };

  // Calculations
  const vatRate = 0.15;
  const commissionRate = 0.025;
  const vatAmount = bidAmount * vatRate;
  const commissionAmount = bidAmount * commissionRate;
  const totalAmount = bidAmount + vatAmount + commissionAmount;

  return (
    <div className="pt-36 pb-20 min-h-screen bg-gray-50 font-sans" dir="rtl">
      
      {/* Breadcrumbs & Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => onNavigate?.('car-plates-auctions')}
            className="flex items-center gap-2 text-gray-500 hover:text-[#40C1C7] transition-colors mb-4"
          >
            <ArrowRight size={18} />
            <span>العودة للمزادات</span>
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-[#40C1C7]">#</span>
              تفاصيل المزاد: {plate.letters} {plate.numbers}
            </h1>
            <div className="flex items-center gap-3">
               <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-bold rounded-full border border-green-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  جاري الآن
               </span>
               <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-bold rounded-full border border-blue-200">
                  لوحة ماسية
               </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* RIGHT COLUMN: Plate Visualization & Details (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Visual Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
               <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex flex-col items-center justify-center border-b border-gray-200 relative">
                  <div className="scale-125 transform transition-transform hover:scale-150 duration-500">
                    <SaudiPlate letters={plate.letters} numbers={plate.numbers} type={plate.type as any} size="lg" />
                  </div>
               </div>
               
               {/* Key Stats Strip */}
               <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-gray-100 bg-white">
                  <div className="p-6 text-center group hover:bg-gray-50 transition-colors">
                     <div className="w-10 h-10 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Gavel size={20} />
                     </div>
                     <p className="text-xs text-gray-500 mb-1">عدد المزايدات</p>
                     <p className="font-bold text-lg text-gray-900">{plate.bidsCount}</p>
                  </div>
                  <div className="p-6 text-center group hover:bg-gray-50 transition-colors">
                     <div className="w-10 h-10 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <CreditCard size={20} />
                     </div>
                     <p className="text-xs text-gray-500 mb-1">القيمة الاسمية</p>
                     <p className="font-bold text-lg text-gray-900">500 <span className="text-xs font-normal">ر.س</span></p>
                  </div>
                  <div className="p-6 text-center group hover:bg-gray-50 transition-colors">
                     <div className="w-10 h-10 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <ShieldCheck size={20} />
                     </div>
                     <p className="text-xs text-gray-500 mb-1">حالة اللوحة</p>
                     <p className="font-bold text-lg text-gray-900">جديدة</p>
                  </div>
                  <div className="p-6 text-center group hover:bg-gray-50 transition-colors">
                     <div className="w-10 h-10 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <User size={20} />
                     </div>
                     <p className="text-xs text-gray-500 mb-1">المزايد الحالي</p>
                     <p className="font-bold text-lg text-gray-900">عبدالله ...</p>
                  </div>
               </div>
            </div>

            {/* Info Tabs */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
               <div className="flex border-b border-gray-200">
                  <button 
                     onClick={() => setActiveTab('history')}
                     className={`flex-1 py-4 font-bold text-sm relative ${activeTab === 'history' ? 'text-[#40C1C7]' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                     <span className="flex items-center justify-center gap-2">
                        <History size={18} />
                        سجل المزايدات
                     </span>
                     {activeTab === 'history' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#40C1C7]"></div>}
                  </button>
                  <button 
                     onClick={() => setActiveTab('details')}
                     className={`flex-1 py-4 font-bold text-sm relative ${activeTab === 'details' ? 'text-[#40C1C7]' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                     <span className="flex items-center justify-center gap-2">
                        <AlertCircle size={18} />
                        الشروط والأحكام
                     </span>
                     {activeTab === 'details' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#40C1C7]"></div>}
                  </button>
               </div>

               <div className="p-6 min-h-[300px]">
                  {activeTab === 'history' ? (
                     <div className="overflow-x-auto">
                        <table className="w-full text-right">
                           <thead>
                              <tr className="border-b border-gray-100">
                                 <th className="pb-4 text-xs text-gray-500 font-medium">المزايد</th>
                                 <th className="pb-4 text-xs text-gray-500 font-medium">قيمة المزايدة</th>
                                 <th className="pb-4 text-xs text-gray-500 font-medium">التوقيت</th>
                                 <th className="pb-4 text-xs text-gray-500 font-medium">الحالة</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-gray-50">
                              {bidHistory.map((bid, index) => (
                                 <tr key={bid.id} className="group hover:bg-gray-50 transition-colors">
                                    <td className="py-4 text-sm font-bold text-gray-900">
                                       <div className="flex items-center gap-2">
                                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${index === 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}>
                                             {bid.bidder.charAt(0)}
                                          </div>
                                          {bid.bidder}
                                       </div>
                                    </td>
                                    <td className="py-4 text-sm font-mono font-bold text-gray-900">{bid.amount.toLocaleString()} ر.س</td>
                                    <td className="py-4 text-sm text-gray-500">{bid.time}</td>
                                    <td className="py-4">
                                       {index === 0 ? (
                                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">في المقدمة</span>
                                       ) : (
                                          <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">تم تخطيه</span>
                                       )}
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  ) : (
                     <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                        <p>1. المشاركة في المزاد تعني الالتزام التام بالشراء في حال الترسية.</p>
                        <p>2. يجب سداد العربون وقدره 1000 ريال (مستردة) لدخول المزاد.</p>
                        <p>3. يضاف مبلغ السعي (2.5%) وضريبة القيمة المضافة على السعر النهائي.</p>
                        <p>4. يجب إتمام عملية الدفع ونقل الملكية خلال 48 ساعة من انتهاء المزاد.</p>
                     </div>
                  )}
               </div>
            </div>
          </div>

          {/* LEFT COLUMN: Bidding Action (4 cols) - RE-DESIGNED */}
          <div className="lg:col-span-4">
            
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden sticky top-24">
               {/* Header Share */}
               <div className="py-3 text-center border-b border-gray-50">
                  <button className="text-gray-500 flex items-center justify-center gap-2 text-sm font-medium hover:text-[#40C1C7] transition-colors">
                     <Share2 size={16} />
                     مشاركة
                  </button>
               </div>

               {/* Teal Banner - Timer */}
               <div className="bg-[#40C1C7] text-white p-5 text-center relative overflow-hidden">
                  <div className="relative z-10">
                     <p className="text-lg font-bold mb-1">ينتهي المزاد بعد</p>
                     <p className="text-3xl font-mono font-bold tracking-wider" dir="ltr">{plate.timeLeft}</p>
                     <p className="text-xs text-white/80 mt-2">قد يختلف وقت انتهاء الأصل عن وقت انتهاء المجموعة</p>
                  </div>
                  {/* Decoration Circles */}
                  <div className="absolute -left-4 -top-4 w-24 h-24 rounded-full border-4 border-white/20"></div>
                  <div className="absolute -right-10 bottom-0 w-32 h-32 rounded-full bg-white/10"></div>
               </div>

               <div className="p-6">
                  {/* Prices Row */}
                  <div className="flex justify-between items-start mb-8">
                     <div className="text-right">
                        <p className="text-gray-500 text-xs mb-1">مبلغ العربون</p>
                        <div className="flex items-center gap-1">
                           <span className="text-xl font-bold text-gray-900">{plate.deposit.toLocaleString()}</span>
                           <img src={sarCurrency} alt="SAR" className="w-4 opacity-70" />
                        </div>
                     </div>
                     <div className="text-left">
                        <p className="text-gray-500 text-xs mb-1">السعر الافتتاحي</p>
                        <div className="flex items-center gap-1 justify-end">
                           <span className="text-xl font-bold text-gray-900">{plate.currentPrice.toLocaleString()}</span>
                           <img src={sarCurrency} alt="SAR" className="w-4 opacity-70" />
                        </div>
                     </div>
                  </div>

                  {/* Bidding Control */}
                  <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
                     <div className="flex justify-between items-center mb-3">
                        <p className="text-sm font-bold text-gray-900">قدم العرض الآن</p>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                           <AlertCircle size={12} />
                           <span>({plate.minIncrement.toLocaleString()} ر.س الزيادة)</span>
                        </div>
                     </div>
                     
                     <div className="flex items-center bg-white rounded-xl border border-gray-200 shadow-sm h-14 overflow-hidden">
                        <button 
                           onClick={handleDecrease}
                           disabled={bidAmount <= plate.currentPrice}
                           className="w-14 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors border-l border-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                           <Minus size={20} />
                        </button>
                        <div className="flex-1 h-full flex items-center justify-center font-bold text-xl text-gray-900 font-mono tracking-wide">
                           {bidAmount.toLocaleString()}
                        </div>
                        <button 
                           onClick={handleIncrease}
                           className="w-14 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors border-r border-gray-100"
                        >
                           <Plus size={20} />
                        </button>
                     </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-4 bg-[#0f172a] text-white rounded-xl font-bold text-lg hover:bg-[#1e293b] transition-colors shadow-lg shadow-gray-200 mb-8">
                     سجل الآن
                  </button>

                  {/* Breakdown */}
                  <div className="space-y-3 mb-8 border-t border-dashed border-gray-200 pt-6">
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">(الضريبة 15%)</span>
                        <div className="flex items-center gap-1 font-mono font-medium text-gray-600">
                           {vatAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} <span className="text-xs">ر.س</span>
                        </div>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">سعر المتر المربع</span>
                        <div className="flex items-center gap-1 font-mono font-medium text-gray-600">
                           - <span className="text-xs">ر.س</span>
                        </div>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">السعي 2.5%</span>
                        <div className="flex items-center gap-1 font-mono font-medium text-gray-600">
                           {commissionAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} <span className="text-xs">ر.س</span>
                        </div>
                     </div>
                     
                     <div className="my-4 border-b border-gray-100"></div>

                     <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900 text-lg">الإجمالي</span>
                        <div className="flex items-center gap-1 font-bold text-xl text-gray-900 font-mono">
                           {totalAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-sm font-normal text-gray-500">ر.س</span>
                        </div>
                     </div>
                  </div>

                  {/* Agent Info */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6 mb-6">
                     <div className="text-right">
                         <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-500 mb-1">
                           <span>وكيل البيع</span>
                           <ShieldCheck size={10} />
                         </div>
                         <h4 className="font-bold text-gray-900 text-sm">منصة المزادات الرسمية</h4>
                         <p className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1">
                           <AlertCircle size={10} />
                           فال رخصة رقم 1200003456
                         </p>
                     </div>
                     <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200 text-gray-400">
                        <Building2 size={24} />
                     </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex gap-3">
                     <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#eefcfc] text-[#40C1C7] rounded-xl font-bold text-sm hover:bg-[#dffafa] transition-colors">
                        <MessageCircle size={18} />
                        واتساب
                     </button>
                     <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors">
                        <Phone size={18} />
                        اتصال
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
