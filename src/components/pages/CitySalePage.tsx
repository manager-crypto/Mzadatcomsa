import React, { useState } from 'react';
import { 
  Map, 
  List, 
  Filter, 
  ChevronDown, 
  Search, 
  Heart, 
  Share2, 
  Bed, 
  Bath, 
  Maximize, 
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  Star
} from 'lucide-react';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';

interface CitySalePageProps {
  cityId?: string;
  onPropertyClick?: (property: any) => void;
  onNavigate?: (page: string) => void;
}

export const CitySalePage = ({ cityId = 'riyadh', onPropertyClick, onNavigate }: CitySalePageProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [sortBy, setSortBy] = useState('newest');

  const getCityName = (id: string) => {
    const names: {[key: string]: string} = {
      'riyadh': 'الرياض',
      'jeddah': 'جدة',
      'mecca': 'مكة',
      'medina': 'المدينة'
    };
    return names[id] || 'الرياض';
  };

  const cityName = getCityName(cityId);

  // Mock properties data - Ideally this would be filtered by cityId
  const properties = [
    {
      id: 1,
      title: `فيلا مودرن فاخرة في ${cityName}`,
      price: 3500000,
      address: `${cityName}، حي الياسمين`,
      specs: { beds: 5, baths: 6, area: 450 },
      type: 'فيلا',
      image: 'https://images.unsplash.com/photo-1700085060165-1ac17cf08286?q=80&w=1080',
      tags: ['جديد', 'مطبخ را��ب'],
      agent: {
        name: 'شركة العقار المتميز',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=RE',
        verified: true
      },
      featured: true,
      time: 'منذ 3 ساعات'
    },
    {
      id: 2,
      title: 'شقة تمليك بتشطيب راقي',
      price: 850000,
      address: `${cityName}، حي الملقا`,
      specs: { beds: 3, baths: 3, area: 180 },
      type: 'شقة',
      image: 'https://images.unsplash.com/photo-1663756915301-2ba688e078cf?q=80&w=1080',
      tags: ['ضمانات شاملة'],
      agent: {
        name: 'إعمار المستقبل',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=EM',
        verified: true
      },
      featured: false,
      time: 'منذ يوم'
    },
    {
      id: 3,
      title: 'قصر مصغر حي حطين',
      price: 12000000,
      address: `${cityName}، حي حطين`,
      specs: { beds: 7, baths: 9, area: 1200 },
      type: 'قصر',
      image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1080',
      tags: ['مسبح', 'مصعد', 'سينما'],
      agent: {
        name: 'نخبة العقار',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=NE',
        verified: true
      },
      featured: true,
      time: 'منذ 5 ساعات'
    },
    {
      id: 4,
      title: 'مبنى تجاري إداري للبيع',
      price: 45000000,
      address: `${cityName}، طريق الملك فهد`,
      specs: { beds: 0, baths: 20, area: 3500 },
      type: 'عمارة',
      image: 'https://images.unsplash.com/photo-1694018359679-49465b4c0d61?q=80&w=1080',
      tags: ['دخل 8%', 'مؤجرة بالكامل'],
      agent: {
        name: 'أصول للاستثمار',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=AS',
        verified: true
      },
      featured: false,
      time: 'منذ يومين'
    },
    {
      id: 5,
      title: 'فيلا درج صالة حي النرجس',
      price: 2800000,
      address: `${cityName}، حي النرجس`,
      specs: { beds: 4, baths: 5, area: 375 },
      type: 'فيلا',
      image: 'https://images.unsplash.com/photo-1700085060165-1ac17cf08286?q=80&w=1080',
      tags: ['قريب من الخدمات'],
      agent: {
        name: 'وساطة نجد',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=WN',
        verified: false
      },
      featured: false,
      time: 'منذ 6 ساعات'
    },
    {
      id: 6,
      title: 'تاون هاوس زاوية',
      price: 1650000,
      address: `${cityName}، حي العارض`,
      specs: { beds: 3, baths: 4, area: 250 },
      type: 'تاون هاوس',
      image: 'https://images.unsplash.com/photo-1663756915301-2ba688e078cf?q=80&w=1080',
      tags: ['سمارت هوم'],
      agent: {
        name: 'مطورون',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=DE',
        verified: true
      },
      featured: false,
      time: 'منذ 12 ساعة'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-36 pb-12 animate-in fade-in duration-500">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <button onClick={() => onNavigate?.('home')} className="hover:text-[#40C1C7] transition-colors">الرئيسية</button>
          <span>/</span>
          <span className="text-gray-500">عقارات للبيع</span>
          <span>/</span>
          <span className="text-gray-900 font-bold">{cityName}</span>
        </div>

        {/* Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">عقارات للبيع في {cityName}</h1>
            <p className="text-gray-500">تم العثور على {properties.length * 15} عقار متاح للبيع</p>
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

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8 sticky top-28 z-30">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search Input - Flexible Width */}
            <div className="relative flex-1 w-full">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="ابحث باسم الحي، رقم المخطط..." 
                className="w-full h-12 pr-12 pl-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none transition-all text-sm"
              />
            </div>
            
            {/* Dropdowns Row */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
              <div className="relative group min-w-[120px]">
                <button className="w-full h-12 px-4 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-700">
                  <span>نوع العقار</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              <div className="relative group min-w-[100px]">
                <button className="w-full h-12 px-4 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-700">
                  <span>السعر</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              <div className="relative group min-w-[100px]">
                <button className="w-full h-12 px-4 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-700">
                  <span>المساحة</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              <div className="relative group">
                <button className="h-12 px-4 flex items-center gap-2 bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-700">
                  <Filter size={18} />
                  <span>المزيد</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {[`شمال ${cityName}`, 'فلل مودرن', 'دوبلكس', 'أراضي سكنية', 'تمويل عقاري', 'مباشر مع المالك'].map((tag, idx) => (
              <button key={idx} className="flex-shrink-0 px-4 py-2 bg-gray-50 hover:bg-teal-50 hover:text-[#40C1C7] border border-gray-100 rounded-full text-xs font-bold transition-all text-gray-600">
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main List */}
          <div className="md:col-span-12 lg:col-span-9">
            <div className="flex items-center justify-between mb-4">
               <h3 className="font-bold text-gray-800">أحدث العروض</h3>
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
                 </select>
               </div>
            </div>

            {viewMode === 'map' ? (
              <div className="bg-gray-100 rounded-3xl h-[600px] overflow-hidden border border-gray-200 relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  title={`${cityName} Real Estate Map`}
                  src={`https://maps.google.com/maps?width=100%25&height=600&hl=ar&q=${cityName}%20Real%20Estate&t=&z=12&ie=UTF8&iwloc=B&output=embed`}
                  className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                ></iframe>
                
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs z-10 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">استكشف العقارات على الخريطة</h4>
                    <p className="text-xs text-gray-500 mb-3">يمكنك التنقل في الخريطة لرؤية العقارات المتاحة في مختلف أحياء {cityName}.</p>
                    <a 
                      href={`https://www.google.com/maps/search/عقارات+للبيع+في+${cityName}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-[#40C1C7] font-bold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      فتح في نافذة جديدة <Share2 size={12} />
                    </a>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {properties.map((property) => (
                  <div 
                    key={property.id} 
                    onClick={() => onPropertyClick?.(property)}
                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#40C1C7]/30 transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={property.image} 
                        alt={property.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                      
                      <div className="absolute top-3 right-3 flex gap-2">
                         <span className="bg-[#40C1C7] text-white text-xs font-bold px-2 py-1 rounded-lg">للبيع</span>
                         {property.featured && (
                           <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                             <Star size={10} fill="currentColor" /> مميز
                           </span>
                         )}
                      </div>

                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        <button className="w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors">
                          <Heart size={16} />
                        </button>
                        <button className="w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                          <Share2 size={16} />
                        </button>
                      </div>

                      <div className="absolute bottom-3 right-3 text-white">
                        <p className="text-2xl font-bold font-mono flex items-center justify-end gap-2">
                          {property.price.toLocaleString()} 
                          <img src={sarCurrency} alt="ر.س" className="h-5 w-auto inline-block bg-white/20 rounded-sm p-0.5 backdrop-blur-sm" />
                        </p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-bold text-gray-900 text-lg line-clamp-1 group-hover:text-[#40C1C7] transition-colors">{property.title}</h3>
                        </div>
                        
                        <p className="text-gray-500 text-sm flex items-center gap-1 mb-4">
                          <MapPin size={14} className="text-[#40C1C7]" />
                          {property.address}
                        </p>

                        <div className="flex items-center gap-4 text-gray-600 text-sm mb-4 bg-gray-50 p-3 rounded-xl justify-between">
                           <div className="flex items-center gap-1.5" title="غرف النوم">
                             <Bed size={16} className="text-gray-400" />
                             <span className="font-bold">{property.specs.beds}</span>
                           </div>
                           <div className="w-px h-4 bg-gray-200" />
                           <div className="flex items-center gap-1.5" title="دورات المياه">
                             <Bath size={16} className="text-gray-400" />
                             <span className="font-bold">{property.specs.baths}</span>
                           </div>
                           <div className="w-px h-4 bg-gray-200" />
                           <div className="flex items-center gap-1.5" title="المساحة">
                             <Maximize size={16} className="text-gray-400" />
                             <span className="font-bold">{property.specs.area} م²</span>
                           </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {property.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="pt-4 mt-auto border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img src={property.agent.logo} alt={property.agent.name} className="w-8 h-8 rounded-full border border-gray-100" />
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-gray-900 flex items-center gap-1">
                              {property.agent.name}
                              {property.agent.verified && <CheckCircle2 size={10} className="text-[#40C1C7] fill-current" />}
                            </span>
                            <span className="text-[10px] text-gray-400">{property.time}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="w-8 h-8 rounded-lg bg-teal-50 text-[#40C1C7] flex items-center justify-center hover:bg-[#40C1C7] hover:text-white transition-colors">
                            <MessageCircle size={16} />
                          </button>
                          <button className="w-8 h-8 rounded-lg bg-teal-50 text-[#40C1C7] flex items-center justify-center hover:bg-[#40C1C7] hover:text-white transition-colors">
                            <Phone size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
               <div className="flex items-center gap-2">
                 <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all disabled:opacity-50">السابق</button>
                 <button className="w-10 h-10 rounded-xl bg-[#40C1C7] text-white flex items-center justify-center font-bold shadow-lg shadow-[#40C1C7]/30">1</button>
                 <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all">2</button>
                 <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all">3</button>
                 <span className="text-gray-400">...</span>
                 <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all">12</button>
                 <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all">التالي</button>
               </div>
            </div>
          </div>

          {/* Sidebar / Map Placeholder for future */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
             {/* Banner */}
             <div className="bg-[#0f172a] rounded-2xl p-6 text-white text-center relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="font-bold text-lg mb-2">هل لديك عقار للإيجار؟</h3>
                 <p className="text-sm text-gray-400 mb-4 leading-relaxed">أعلن عن عقارك معنا وشاهد النتائج. آلاف الباحثين عن عقارات بانتظارك.</p>
                 <button 
                  onClick={() => onNavigate?.('add-ad')}
                  className="w-full py-3 bg-[#40C1C7] hover:bg-[#35a3a8] rounded-xl font-bold transition-colors"
                >
                  أضف عقارك مجاناً
                </button>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#40C1C7] rounded-full blur-[60px] opacity-20"></div>
             </div>

             {/* Trending Areas */}
             <div className="bg-white rounded-2xl border border-gray-100 p-5">
               <h3 className="font-bold text-gray-900 mb-4">الأحياء الأكثر طلباً</h3>
               <div className="space-y-3">
                 {[
                   { name: 'حي الملقا', count: 420 },
                   { name: 'حي الياسمين', count: 350 },
                   { name: 'حي النرجس', count: 280 },
                   { name: 'حي حطين', count: 210 },
                   { name: 'حي العارض', count: 190 },
                 ].map((area, idx) => (
                   <a key={idx} href="#" className="flex items-center justify-between text-sm group">
                      <span className="text-gray-600 group-hover:text-[#40C1C7] transition-colors">{area.name}</span>
                      <span className="text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md text-xs group-hover:bg-teal-50 group-hover:text-[#40C1C7] transition-colors">{area.count}</span>
                   </a>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
