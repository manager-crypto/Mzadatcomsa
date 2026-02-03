import React, { useState } from 'react';
import { 
  MapPin, 
  Timer, 
  Gavel, 
  Filter, 
  Search, 
  ChevronDown,
  List,
  Map,
  Clock,
  User,
  Maximize,
  Radio,
  Eye,
  Monitor,
  Truck,
  Package,
  Cpu,
  Settings
} from 'lucide-react';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';
import { QuickViewModal } from '../components/QuickViewModal';

interface OtherAuctionsPageProps {
  onNavigate?: (page: string) => void;
  onAuctionClick?: (auction: any) => void;
}

export const OtherAuctionsPage: React.FC<OtherAuctionsPageProps> = ({ onNavigate, onAuctionClick }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedAuction, setSelectedAuction] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const handleQuickView = (auction: any) => {
    setSelectedAuction(auction);
    setIsQuickViewOpen(true);
  };

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'computers', label: 'كمبيوترات وإلكترونيات' },
    { id: 'heavy-equipment', label: 'معدات ثقيلة' },
    { id: 'mixed', label: 'مزادات مختلطة' },
    { id: 'machinery', label: 'آليات' },
  ];

  // Mock Data
  const auctions = [
    {
      id: 101,
      code: 'MZ-8012',
      title: 'مجموعة أجهزة كمبيوتر مكتبية ولابتوب',
      location: 'الرياض، مستودع الوزارة',
      currentBid: 45000,
      openingBid: 20000,
      quantity: 150,
      image: 'https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxlJTIwb2YlMjBsYXB0b3BzJTIwYW5kJTIwZGVza3RvcCUyMGNvbXB1dGVycyUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NjYxNjIyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080', 
      type: 'computers',
      status: 'مباشر',
      statusColor: 'bg-red-500',
      timeLeft: '01 يوم : 05 س : 30 د',
      companyLogo: 'https://ui-avatars.com/api/?name=IT&background=000&color=fff&font-size=0.5',
      specs: { quantity: 150, condition: 'مستعمل' },
      tags: ['إلكترونيات', 'أجهزة مكتبية']
    },
    {
      id: 102,
      code: 'MZ-8044',
      title: 'معدات ثقيلة - جرافات وحفارات',
      location: 'جدة، المنطقة الصناعية',
      currentBid: 850000,
      openingBid: 600000,
      quantity: 5,
      image: 'https://images.unsplash.com/photo-1677695029687-2b2e72e0342e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBleGNhdmF0b3JzJTIwYW5kJTIwYnVsbGRvemVycyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzY2MTYyMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'heavy-equipment',
      status: 'قريباً',
      statusColor: 'bg-blue-500',
      timeLeft: '07 يوم : 12 س : 00 د',
      companyLogo: 'https://ui-avatars.com/api/?name=HE&background=000&color=fff&font-size=0.5',
      specs: { quantity: 5, condition: 'بحالة جيدة' },
      tags: ['معدات ثقيلة', 'بناء']
    },
    {
      id: 103,
      code: 'MZ-8105',
      title: 'مزاد مختلط - أثاث ومفروشات',
      location: 'الدمام، فندق الخليج',
      currentBid: 12000,
      openingBid: 5000,
      quantity: 500,
      image: 'https://images.unsplash.com/photo-1636573785224-d9bbe74e1fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGZ1cm5pdHVyZSUyMHN0b3JhZ2UlMjBhdWN0aW9ufGVufDF8fHx8MTc2NjE2MjIzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'mixed',
      status: 'مباشر',
      statusColor: 'bg-red-500',
      timeLeft: '00 يوم : 08 س : 15 د',
      companyLogo: 'https://ui-avatars.com/api/?name=MX&background=000&color=fff&font-size=0.5',
      specs: { quantity: 500, condition: 'مستعمل' },
      tags: ['أثاث', 'فندقي']
    },
    {
      id: 104,
      code: 'MZ-8220',
      title: 'خط إنتاج مصنع مياه كامل',
      location: 'القصيم، بريدة',
      currentBid: 1250000,
      openingBid: 900000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1530037335614-e68828dcf258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsaW5nJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb24lMjBsaW5lJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjYxNjIyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'machinery',
      status: 'منتهي',
      statusColor: 'bg-gray-500',
      timeLeft: '00 يوم : 00 س : 00 د',
      companyLogo: 'https://ui-avatars.com/api/?name=FA&background=000&color=fff&font-size=0.5',
      specs: { quantity: 1, condition: 'يعمل' },
      tags: ['مصانع', 'خطوط إنتاج']
    },
    {
      id: 105,
      code: 'MZ-8311',
      title: 'سيرفرات وأجهزة شبكات',
      location: 'الرياض، حي الصحافة',
      currentBid: 65000,
      openingBid: 40000,
      quantity: 20,
      image: 'https://images.unsplash.com/photo-1662890459081-87e680bb1b00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwZGF0YSUyMGNlbnRlciUyMHJhY2tzfGVufDF8fHx8MTc2NjE2MjIzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'computers',
      status: 'مباشر',
      statusColor: 'bg-red-500',
      timeLeft: '02 يوم : 09 س : 45 د',
      companyLogo: 'https://ui-avatars.com/api/?name=TC&background=000&color=fff&font-size=0.5',
      specs: { quantity: 20, condition: 'مجدد' },
      tags: ['شبكات', 'IT']
    },
    {
      id: 106,
      code: 'MZ-8450',
      title: 'رافعات شوكية (Forklifts)',
      location: 'جدة، الميناء',
      currentBid: 110000,
      openingBid: 85000,
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1763665814546-27c2c003317e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JrbGlmdCUyMGluJTIwd2FyZWhvdXNlJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjYxNjIyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'heavy-equipment',
      status: 'قريباً',
      statusColor: 'bg-blue-500',
      timeLeft: '05 يوم : 14 س : 20 د',
      companyLogo: 'https://ui-avatars.com/api/?name=LG&background=000&color=fff&font-size=0.5',
      specs: { quantity: 3, condition: 'ممتاز' },
      tags: ['لوجستي', 'مستودعات']
    },
    {
      id: 107,
      code: 'MZ-8512',
      title: 'مولدات كهرباء صناعية (Diesel Generators)',
      location: 'الجبيل، المنطقة الصناعية',
      currentBid: 240000,
      openingBid: 180000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1636867759143-c28c1e909bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcG93ZXIlMjBnZW5lcmF0b3J8ZW58MXx8fHwxNzY2MTYyMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'machinery',
      status: 'جديد',
      statusColor: 'bg-emerald-500',
      timeLeft: '10 يوم : 02 س : 00 د',
      companyLogo: 'https://ui-avatars.com/api/?name=PG&background=000&color=fff&font-size=0.5',
      specs: { quantity: 2, condition: 'جديد' },
      tags: ['طاقة', 'مولدات']
    },
    {
      id: 108,
      code: 'MZ-8630',
      title: 'أثاث مكتبي (كراسي وطاولات)',
      location: 'الرياض، العليا',
      currentBid: 8000,
      openingBid: 2000,
      quantity: 45,
      image: 'https://images.unsplash.com/photo-1669985457873-0c540a1d832a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjaGFpcnMlMjBhbmQlMjBkZXNrcyUyMHN1cnBsdXN8ZW58MXx8fHwxNzY2MTYyMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'mixed',
      status: 'مباشر',
      statusColor: 'bg-red-500',
      timeLeft: '01 يوم : 00 س : 30 د',
      companyLogo: 'https://ui-avatars.com/api/?name=OF&background=000&color=fff&font-size=0.5',
      specs: { quantity: 45, condition: 'مستعمل' },
      tags: ['أثاث', 'تصفية']
    },
    {
      id: 109,
      code: 'MZ-8755',
      title: 'أجهزة طبية متنوعة',
      location: 'المدينة المنورة',
      currentBid: 320000,
      openingBid: 250000,
      quantity: 12,
      image: 'https://images.unsplash.com/photo-1694787590597-ba49c7cdc2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwYXVjdGlvbiUyMGhvc3BpdGFsfGVufDF8fHx8MTc2NjE2MjIzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'mixed',
      status: 'قريباً',
      statusColor: 'bg-blue-500',
      timeLeft: '15 يوم : 06 س : 00 د',
      companyLogo: 'https://ui-avatars.com/api/?name=ME&background=000&color=fff&font-size=0.5',
      specs: { quantity: 12, condition: 'يحتاج صيانة' },
      tags: ['طبي', 'أجهزة']
    }
  ];

  const filteredAuctions = activeTab === 'all' 
    ? auctions 
    : auctions.filter(a => a.type === activeTab);

  return (
    <div className="pt-36 pb-20 min-h-screen bg-gray-50 animate-in fade-in duration-500" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <button onClick={() => onNavigate?.('home')} className="hover:text-[#40C1C7] transition-colors">الرئيسية</button>
          <span>/</span>
          <span className="text-gray-900 font-bold">المزادات العامة</span>
        </div>

        {/* Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">المزادات العامة والمنقولات</h1>
            <p className="text-gray-500">تم العثور على {filteredAuctions.length} مزاد نشط في الأقسام المختلفة</p>
          </div>
          
          <div className="flex items-center p-1.5 bg-white border border-gray-200 rounded-xl shadow-sm">
            <button 
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                viewMode === 'grid' 
                ? 'bg-[#40C1C7] text-white shadow-md' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <List size={18} />
              قائمة
            </button>
            <button 
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                viewMode === 'map' 
                ? 'bg-[#40C1C7] text-white shadow-md' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Map size={18} />
              خريطة
            </button>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-shrink-0 px-5 py-3 rounded-xl text-sm font-bold transition-all border ${
                activeTab === cat.id
                ? 'bg-[#40C1C7] text-white border-[#40C1C7] shadow-lg shadow-teal-500/20'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#40C1C7] hover:text-[#40C1C7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8 sticky top-20 z-30">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <div className="col-span-1 md:col-span-2 relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="ابحث عن أصل، جهاز، أو معدة..." 
                className="w-full h-11 pr-10 pl-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none transition-all text-sm"
              />
            </div>
            
            <div className="relative group">
              <button className="w-full h-11 px-3 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-600">
                <span>الحالة</span>
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="relative group">
              <button className="w-full h-11 px-3 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-600">
                <span>القيمة</span>
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="relative group">
              <button className="w-full h-11 px-3 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-600">
                <span>المدينة</span>
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="relative group">
              <button className="w-full h-11 px-3 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-600">
                <span className="flex items-center gap-2">
                   <Filter size={16} />
                   تصفية
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main List */}
          <div className="md:col-span-12 lg:col-span-9">
            <div className="flex items-center justify-between mb-4">
               <h3 className="font-bold text-gray-800">قائمة المعروضات</h3>
               <div className="flex items-center gap-2 text-sm text-gray-500">
                 <span>ترتيب حسب:</span>
                 <select 
                   value={sortBy}
                   onChange={(e) => setSortBy(e.target.value)}
                   className="bg-transparent font-bold text-gray-900 outline-none cursor-pointer"
                 >
                   <option value="newest">الأحدث</option>
                   <option value="lowest_price">الأقل سعراً</option>
                   <option value="highest_price">الأعلى سعراً</option>
                   <option value="ending_soon">ينتهي قريباً</option>
                 </select>
               </div>
            </div>

            {viewMode === 'map' ? (
              <div className="bg-gray-100 rounded-3xl h-[600px] overflow-hidden border border-gray-200 relative flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Map size={48} className="mx-auto mb-4 opacity-50" />
                  <p>الخريطة غير متاحة لهذه الفئة حالياً</p>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {filteredAuctions.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group">
                     
                     {/* Top Section: Image & Badge */}
                     <div className="relative h-60 overflow-hidden bg-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                        
                        <div className="absolute top-4 right-4 z-10">
                           <span className={`${item.statusColor} text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5`}>
                             <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                             {item.status}
                           </span>
                        </div>

                        <div className="absolute bottom-4 left-4 z-20 text-white text-left bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                           <p className="text-[10px] text-gray-200 mb-0.5">السعر الحالي</p>
                           <p className="text-xl font-bold font-mono flex items-center gap-1.5 text-shadow-lg">
                              {item.currentBid.toLocaleString()}
                              <img src={sarCurrency} alt="ر.س" className="h-4 w-auto inline-block opacity-90" />
                           </p>
                        </div>

                        {/* Quick Action Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                           <button 
                             onClick={() => handleQuickView(item)}
                             className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300"
                           >
                              <Eye size={16} /> نظرة سريعة
                           </button>
                        </div>
                     </div>

                     {/* Content Section */}
                     <div className="p-5 flex-1 flex flex-col">
                        
                        <div className="mb-4">
                           <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#40C1C7] transition-colors line-clamp-2 min-h-[3rem]">
                              {item.title}
                           </h3>
                           <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                              <MapPin size={14} className="text-[#40C1C7] flex-shrink-0" />
                              <span className="truncate">{item.location}</span>
                           </div>
                        </div>

                        {/* Specs */}
                        <div className="flex items-center gap-4 text-xs text-gray-600 mb-4 bg-gray-50 p-3 rounded-lg">
                           <div className="flex items-center gap-1">
                             <Package size={14} className="text-[#40C1C7]" />
                             <span>الكمية: {item.quantity}</span>
                           </div>
                           <div className="h-4 w-px bg-gray-200"></div>
                           <div className="flex items-center gap-1">
                             <Settings size={14} className="text-[#40C1C7]" />
                             <span>الحالة: {item.specs.condition}</span>
                           </div>
                        </div>

                        {/* Stats Row */}
                        <div className="flex items-center justify-between mb-6 mt-auto">
                           <div className="flex items-center gap-2 bg-teal-50 text-[#40C1C7] px-3 py-1.5 rounded-lg text-xs font-medium">
                              <Clock size={14} />
                              <span dir="ltr" className="font-mono pt-0.5">{item.timeLeft.split(' ')[0]} أيام متبقية</span>
                           </div>
                           <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                              <span>{20 + item.id} مزايد</span>
                              <User size={14} />
                           </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-2">
                          <button 
                            onClick={() => onAuctionClick ? onAuctionClick(item) : onNavigate?.('auction-details')}
                            className="flex-1 py-2.5 bg-white border border-gray-200 text-gray-900 rounded-xl hover:bg-[#40C1C7] hover:text-white hover:border-[#40C1C7] transition-all duration-300 text-sm font-bold shadow-sm"
                          >
                             التفاصيل
                          </button>
                          <button 
                            onClick={() => onNavigate?.('live-auction')}
                            className="px-3 py-2.5 bg-red-50 text-red-600 border border-red-100 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 text-sm font-bold flex items-center justify-center"
                            title="بث مباشر"
                          >
                             <Radio size={16} className="animate-pulse" />
                          </button>
                        </div>
                     </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
             {/* Banner */}
             <div className="bg-gray-900 rounded-2xl p-6 text-white text-center relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="font-bold text-lg mb-2">تصفية مستودعات؟</h3>
                 <p className="text-sm text-gray-400 mb-4 leading-relaxed">نساعدك في بيع فائض المستودعات، المعدات، والأصول المنقولة بأفضل الأسعار.</p>
                 <button className="w-full py-3 bg-[#40C1C7] hover:bg-[#35a3a8] rounded-xl font-bold transition-colors shadow-lg shadow-teal-500/20">تواصل معنا</button>
               </div>
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#40C1C7] rounded-full blur-[60px] opacity-10"></div>
             </div>

             {/* Categories List (Sidebar Style) */}
             <div className="bg-white rounded-2xl border border-gray-100 p-5">
               <h3 className="font-bold text-gray-900 mb-4">الأقسام</h3>
               <div className="space-y-1">
                 {categories.filter(c => c.id !== 'all').map((cat) => (
                   <button 
                    key={cat.id} 
                    onClick={() => setActiveTab(cat.id)}
                    className={`w-full flex items-center justify-between text-sm px-3 py-2.5 rounded-lg transition-all ${
                      activeTab === cat.id ? 'bg-teal-50 text-[#40C1C7] font-bold' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                   >
                      <span>{cat.label}</span>
                      <ChevronDown size={14} className="-rotate-90 text-gray-300" />
                   </button>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>

      <QuickViewModal 
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        auction={selectedAuction}
        onNavigate={(page) => {
           if (page === 'auction-details' && onAuctionClick) {
             onAuctionClick(selectedAuction);
           } else {
             onNavigate?.(page);
           }
        }}
      />
    </div>
  );
};
