import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Car, 
  Home, 
  LayoutGrid, 
  Package, 
  ChevronDown, 
  SlidersHorizontal,
  ArrowUpDown,
  Heart,
  Share2,
  MessageCircle,
  Phone,
  CheckCircle2,
  AlertCircle,
  X,
  BedDouble,
  Bath,
  Maximize,
  Calendar,
  Gauge,
  Tag
} from 'lucide-react';

interface RequestItem {
  id: string;
  type: 'real-estate' | 'car' | 'plate' | 'other';
  title: string;
  price: number;
  location: string;
  image: string;
  date: string;
  tags: string[];
  specs: {
    label: string;
    value: string;
    icon?: React.ReactNode;
  }[];
  isDirectSale: boolean;
}

const MOCK_DATA: RequestItem[] = [
  {
    id: '1',
    type: 'real-estate',
    title: 'فيلا مودرن للبيع في حي الياسمين',
    price: 2500000,
    location: 'الرياض، حي الياسمين',
    image: 'https://images.unsplash.com/photo-1600596542815-e36cb2907bcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'منذ ساعتين',
    tags: ['سكني', 'للبيع', 'جديد'],
    specs: [
      { label: 'المساحة', value: '450 م²' },
      { label: 'الغرف', value: '5' },
      { label: 'الواجهة', value: 'شمالية' }
    ],
    isDirectSale: true
  },
  {
    id: '2',
    type: 'car',
    title: 'مرسيدس بنز S-Class 2023',
    price: 580000,
    location: 'جدة، المعارض',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'منذ 4 ساعات',
    tags: ['سيارات', 'جديد', 'ضمان الوكالة'],
    specs: [
      { label: 'الممشى', value: '0 كم' },
      { label: 'اللون', value: 'أسود ملكي' },
      { label: 'المحرك', value: 'V8' }
    ],
    isDirectSale: true
  },
  {
    id: '3',
    type: 'plate',
    title: 'لوحة مميزة (ح ر ب 1)',
    price: 120000,
    location: 'الرياض',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'منذ يوم',
    tags: ['لوحات', 'خصوصي', 'ذهبي'],
    specs: [
      { label: 'النوع', value: 'خصوصي' },
      { label: 'الأرقام', value: '1' },
      { label: 'الحروف', value: 'ح ر ب' }
    ],
    isDirectSale: true
  },
  {
    id: '4',
    type: 'real-estate',
    title: 'شقة تمليك فاخرة إطلالة بحرية',
    price: 850000,
    location: 'الدمام، الشاطئ',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'منذ يومين',
    tags: ['سكني', 'شقق', 'تشطيب فاخر'],
    specs: [
      { label: 'المساحة', value: '200 م²' },
      { label: 'الغرف', value: '4' },
      { label: 'الدور', value: 'السابع' }
    ],
    isDirectSale: true
  },
  {
    id: '5',
    type: 'car',
    title: 'تويوتا لاندكروزر GXR 2024',
    price: 320000,
    location: 'الرياض، النسيم',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'منذ 3 ساعات',
    tags: ['سيارات', 'دبل', 'فل كامل'],
    specs: [
      { label: 'الممشى', value: '5,000 كم' },
      { label: 'اللون', value: 'أبيض لؤلؤي' },
      { label: 'الوقود', value: 'ديزل' }
    ],
    isDirectSale: true
  }
];

interface RequestsPageProps {
  onNavigate: (page: string) => void;
}

export const RequestsPage: React.FC<RequestsPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000000]);

  // Specific filters state
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState<string[]>([]);
  const [carMake, setCarMake] = useState<string[]>([]);
  const [plateType, setPlateType] = useState<string[]>([]);

  const categories = [
    { id: 'all', label: 'الكل', icon: LayoutGrid },
    { id: 'real-estate', label: 'عقارات', icon: Home },
    { id: 'car', label: 'سيارات', icon: Car },
    { id: 'plate', label: 'لوحات', icon: LayoutGrid },
    { id: 'other', label: 'أخرى', icon: Package },
  ];

  const handleCityToggle = (city: string) => {
    setSelectedCities(prev => 
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    );
  };

  const filteredData = MOCK_DATA.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.type === activeCategory;
    const matchesSearch = item.title.includes(searchQuery) || item.location.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const renderCategorySpecificFilters = () => {
    switch (activeCategory) {
      case 'real-estate':
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="border-t border-gray-100 pt-4">
              <label className="text-sm font-bold text-gray-700 mb-3 block">نوع العقار</label>
              <div className="grid grid-cols-2 gap-2">
                {['فيلا', 'شقة', 'أرض', 'عمارة', 'استراحة', 'دور'].map(type => (
                  <button 
                    key={type}
                    onClick={() => setPropertyType(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type])}
                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-all border ${
                      propertyType.includes(type) 
                        ? 'bg-[#0F766E] text-white border-[#0F766E]' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#0F766E]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
               <label className="text-sm font-bold text-gray-700 mb-3 block">المواصفات</label>
               <div className="space-y-3">
                  <div>
                    <span className="text-xs text-gray-500 mb-1 block">عدد الغرف</span>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, '5+'].map(num => (
                        <button key={num} className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 text-xs font-bold hover:border-[#0F766E] hover:text-[#0F766E] transition-colors">
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 mb-1 block">عدد الصالات</span>
                    <div className="flex gap-2">
                      {[1, 2, 3, '4+'].map(num => (
                        <button key={num} className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 text-xs font-bold hover:border-[#0F766E] hover:text-[#0F766E] transition-colors">
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        );

      case 'car':
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="border-t border-gray-100 pt-4">
              <label className="text-sm font-bold text-gray-700 mb-3 block">الشركة المصنعة</label>
              <div className="grid grid-cols-2 gap-2">
                {['تويوتا', 'مرسيدس', 'هيونداي', 'فورد', 'لكزس', 'نيسان'].map(make => (
                  <button 
                    key={make}
                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-all border bg-white text-gray-600 border-gray-200 hover:border-[#0F766E]`}
                  >
                    {make}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
               <label className="text-sm font-bold text-gray-700 mb-3 block">سنة الصنع</label>
               <div className="flex items-center gap-2">
                  <select className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs font-bold outline-none">
                    <option>من 2024</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                  <span className="text-gray-400">-</span>
                  <select className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs font-bold outline-none">
                    <option>إلى 2015</option>
                    <option>2010</option>
                  </select>
               </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <label className="text-sm font-bold text-gray-700 mb-3 block">الممشى (كم)</label>
              <div className="flex flex-wrap gap-2">
                 <button className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-600 hover:border-[#0F766E]">جديد (0)</button>
                 <button className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-600 hover:border-[#0F766E]">أقل من 50 ألف</button>
                 <button className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-600 hover:border-[#0F766E]">أكثر من 100 ألف</button>
              </div>
            </div>
          </div>
        );

      case 'plate':
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="border-t border-gray-100 pt-4">
              <label className="text-sm font-bold text-gray-700 mb-3 block">نوع اللوحة</label>
              <div className="flex flex-wrap gap-2">
                {['خصوصي', 'نقل خاص', 'دراجة نارية', 'أجرة'].map(type => (
                  <button 
                    key={type}
                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-all border bg-white text-gray-600 border-gray-200 hover:border-[#0F766E]`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <label className="text-sm font-bold text-gray-700 mb-3 block">عدد الأرقام</label>
              <div className="flex gap-2">
                 {[1, 2, 3, 4].map(num => (
                   <button key={num} className="flex-1 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs font-bold hover:border-[#0F766E] hover:text-[#0F766E] transition-colors">
                     {num}
                   </button>
                 ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
               <label className="text-sm font-bold text-gray-700 mb-3 block">الأحرف</label>
               <div className="flex gap-2">
                  <input type="text" maxLength={1} placeholder="1" className="w-full h-10 bg-gray-50 border border-gray-200 rounded-lg text-center font-bold" />
                  <input type="text" maxLength={1} placeholder="2" className="w-full h-10 bg-gray-50 border border-gray-200 rounded-lg text-center font-bold" />
                  <input type="text" maxLength={1} placeholder="3" className="w-full h-10 bg-gray-50 border border-gray-200 rounded-lg text-center font-bold" />
               </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 pt-24" dir="rtl">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 pb-8 pt-6 sticky top-[80px] z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">سوق الطلبات والعروض</h1>
              <p className="text-gray-500 font-medium">ابحث عن أفضل الفرص المباشرة أو أضف طلبك الخاص</p>
            </div>
            <div className="flex gap-3">
               <button 
                 onClick={() => onNavigate('create-request')}
                 className="px-6 py-3 bg-[#0F766E] hover:bg-[#0d615b] text-white rounded-xl font-bold transition-all shadow-lg shadow-teal-700/20 flex items-center gap-2"
               >
                 <span>أضف طلب جديد</span>
                 <Package size={18} />
               </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="ابحث عن عقار، سيارة، أو أي سلعة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pr-12 pl-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] transition-all font-medium"
              />
              {/* Instant Search Dropdown */}
              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {filteredData.length > 0 ? (
                    <>
                      <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
                        {filteredData.slice(0, 5).map((item) => (
                          <div key={item.id} className="p-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 border-b border-gray-50 last:border-0 transition-colors group">
                             <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                             <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-0.5">
                                   <h4 className="text-sm font-bold text-gray-900 truncate group-hover:text-[#0F766E] transition-colors">{item.title}</h4>
                                   <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 whitespace-nowrap">
                                     {item.type === 'real-estate' ? 'عقار' : item.type === 'car' ? 'سيارة' : 'لوحة'}
                                   </span>
                                </div>
                                <div className="flex items-center justify-between">
                                   <p className="text-xs text-gray-500 truncate flex items-center gap-1">
                                      <MapPin size={10} /> {item.location}
                                   </p>
                                   <p className="text-sm font-black text-[#0F766E]">{item.price.toLocaleString()}</p>
                                </div>
                             </div>
                          </div>
                        ))}
                      </div>
                      {filteredData.length > 5 && (
                        <div className="p-3 text-center bg-gray-50 border-t border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                           <span className="text-xs font-bold text-[#0F766E]">عرض جميع النتائج ({filteredData.length})</span>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="p-6 text-center text-gray-500">
                       <p className="text-sm font-medium">لا توجد نتائج مطابقة لـ "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              )}
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`h-14 px-6 rounded-xl border flex items-center gap-2 font-bold whitespace-nowrap transition-all ${showFilters ? 'bg-gray-900 text-white border-gray-900' : 'bg-white border-gray-200 text-gray-700 hover:border-[#0F766E]'}`}
              >
                <Filter size={18} />
                <span>{showFilters ? 'إخفاء الفلترة' : 'فلترة متقدمة'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Advanced Sidebar Filters - RIGHT SIDE */}
          <aside className={`lg:w-72 flex-shrink-0 space-y-6 transition-all duration-300 ${showFilters ? 'block' : 'hidden lg:block'}`}>
             
             {/* Filters Container */}
             <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm sticky top-[240px] max-h-[calc(100vh-260px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <SlidersHorizontal size={18} className="text-[#0F766E]" />
                    خيارات العرض
                  </h3>
                  <button 
                    onClick={() => { setSelectedCities([]); setPropertyType([]); setCarMake([]); setActiveCategory('all'); }}
                    className="text-xs text-red-500 font-bold hover:underline"
                  >
                    مسح الكل
                  </button>
                </div>
                
                <div className="space-y-5">
                   {/* Category Filter */}
                   <div>
                      <label className="text-sm font-bold text-gray-700 mb-3 block">القسم</label>
                      <div className="grid grid-cols-2 gap-2">
                        {categories.map((cat) => (
                          <button 
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex items-center justify-center gap-2 px-2 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                              activeCategory === cat.id
                                ? 'bg-[#0F766E] text-white border-[#0F766E] shadow-md'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-[#0F766E] hover:bg-gray-50'
                            }`}
                          >
                            <cat.icon size={14} />
                            <span>{cat.label}</span>
                          </button>
                        ))}
                      </div>
                   </div>

                   {/* Common Filters */}
                   <div>
                      <label className="text-sm font-bold text-gray-700 mb-3 block">نطاق السعر</label>
                      <div className="flex items-center gap-2 mb-3">
                         <div className="relative flex-1">
                            <input type="number" placeholder="من" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 px-3 text-sm font-bold outline-none focus:border-[#0F766E] focus:bg-white transition-colors" />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400">ر.س</span>
                         </div>
                         <span className="text-gray-300">-</span>
                         <div className="relative flex-1">
                            <input type="number" placeholder="إلى" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 px-3 text-sm font-bold outline-none focus:border-[#0F766E] focus:bg-white transition-colors" />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400">ر.س</span>
                         </div>
                      </div>
                      <input 
                        type="range" 
                        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0F766E]" 
                      />
                   </div>

                   <div className="border-t border-gray-100 pt-5">
                      <label className="text-sm font-bold text-gray-700 mb-3 block">المدينة</label>
                      <div className="space-y-2 max-h-40 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-100">
                         {['الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام', 'الخبر', 'أبها', 'الطائف'].map(city => (
                           <label key={city} className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50 p-1.5 rounded-lg transition-colors">
                              <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${selectedCities.includes(city) ? 'bg-[#0F766E] border-[#0F766E]' : 'border-gray-300 group-hover:border-[#0F766E]'}`}>
                                 {selectedCities.includes(city) && <CheckCircle2 size={12} className="text-white" />}
                              </div>
                              <input 
                                type="checkbox" 
                                className="hidden" 
                                checked={selectedCities.includes(city)}
                                onChange={() => handleCityToggle(city)}
                              />
                              <span className={`text-sm font-medium transition-colors ${selectedCities.includes(city) ? 'text-[#0F766E] font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>{city}</span>
                           </label>
                         ))}
                      </div>
                   </div>

                   {/* Dynamic Category Filters */}
                   {renderCategorySpecificFilters()}

                   <div className="border-t border-gray-100 pt-5">
                      <label className="text-sm font-bold text-gray-700 mb-3 block">حالة العرض</label>
                      <div className="flex flex-wrap gap-2">
                         <button className="px-4 py-2 rounded-xl bg-[#0F766E]/10 text-[#0F766E] text-xs font-bold border border-[#0F766E] shadow-sm">جديد</button>
                         <button className="px-4 py-2 rounded-xl bg-gray-50 text-gray-500 text-xs font-bold border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all">مستخدم</button>
                      </div>
                   </div>
                </div>
             </div>
          </aside>

          {/* Main Content Grid - CENTER */}
          <main className="flex-1">
             {/* Sort & Count Bar */}
             <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-600 font-medium text-sm">
                   تم العثور على <span className="font-bold text-[#0F766E] text-lg mx-1">{filteredData.length}</span> نتيجة
                </p>
                <div className="flex items-center gap-2">
                   <span className="text-xs font-bold text-gray-400 hidden sm:inline">ترتيب حسب:</span>
                   <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:border-[#0F766E] hover:bg-white transition-all group">
                      <span>الأحدث</span>
                      <ArrowUpDown size={14} className="text-gray-400 group-hover:text-[#0F766E]" />
                   </button>
                </div>
             </div>

             {/* Items List - Redesigned Cards */}
             <div className="space-y-5">
                {filteredData.map((item) => (
                   <div key={item.id} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-[#0F766E]/30 transition-all duration-300 flex flex-col md:flex-row">
                      {/* Image Side */}
                      <div className="md:w-72 h-56 md:h-auto relative flex-shrink-0">
                         <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-none opacity-60 md:opacity-100"></div>
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors hidden md:block"></div>
                         
                         {/* Status Badge */}
                         <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                            <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-black text-[#0F766E] flex items-center gap-1.5 shadow-sm border border-teal-100">
                               <CheckCircle2 size={14} className="text-[#0F766E]" />
                               طلب مجاز
                            </div>
                            {item.isDirectSale && (
                              <div className="bg-orange-500/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-black text-white flex items-center gap-1.5 shadow-sm">
                                 <Tag size={14} />
                                 بيع مباشر
                              </div>
                            )}
                         </div>

                         <div className="absolute bottom-3 right-3 left-3 flex justify-between items-end md:hidden">
                            <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-white text-[10px] font-bold flex items-center gap-1">
                               <MapPin size={10} /> {item.location}
                            </div>
                         </div>
                      </div>

                      {/* Content Side */}
                      <div className="p-5 md:p-6 flex flex-col flex-1 relative">
                         <div className="flex items-start justify-between mb-4">
                            <div>
                               <div className="flex items-center gap-2 mb-2">
                                  <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg border ${
                                     item.type === 'real-estate' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                     item.type === 'car' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                                     item.type === 'plate' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                     'bg-gray-50 text-gray-700 border-gray-200'
                                  }`}>
                                     {item.type === 'real-estate' ? 'عقار' : item.type === 'car' ? 'سيارات' : item.type === 'plate' ? 'لوحات' : 'أخرى'}
                                  </span>
                                  <span className="h-4 w-[1px] bg-gray-300"></span>
                                  <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1">
                                     <ClockIcon /> {item.date}
                                  </span>
                                  <span className="h-4 w-[1px] bg-gray-300 hidden md:block"></span>
                                  <span className="text-[11px] font-medium text-gray-500 items-center gap-1 hidden md:flex">
                                     <MapPin size={12} /> {item.location}
                                  </span>
                               </div>
                               <h3 className="font-bold text-gray-900 text-lg md:text-xl group-hover:text-[#0F766E] transition-colors line-clamp-1">{item.title}</h3>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-colors border border-gray-100">
                               <Heart size={20} />
                            </button>
                         </div>
                         
                         {/* Specs Grid */}
                         <div className="grid grid-cols-3 gap-3 mb-6">
                            {item.specs.map((spec, idx) => (
                               <div key={idx} className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex flex-col items-center justify-center text-center group-hover:border-[#0F766E]/20 group-hover:bg-[#0F766E]/5 transition-colors">
                                  <span className="text-[11px] text-gray-500 mb-1">{spec.label}</span>
                                  <span className="text-sm font-black text-gray-800">{spec.value}</span>
                               </div>
                            ))}
                         </div>

                         <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-4 pt-5 border-t border-gray-100">
                            <div>
                               <p className="text-xs text-gray-500 font-bold mb-1">السعر المطلوب</p>
                               <div className="flex items-baseline gap-1">
                                 <p className="text-2xl font-black text-[#0F766E]">{item.price.toLocaleString()}</p>
                                 <span className="text-sm font-bold text-gray-400">ر.س</span>
                               </div>
                            </div>
                            
                            <div className="flex gap-3 w-full md:w-auto">
                               <button className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-white border-2 border-gray-100 text-gray-700 font-bold text-sm hover:border-[#0F766E] hover:text-[#0F766E] transition-colors">
                                  التفاصيل
                               </button>
                               <button className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-[#0F766E] text-white font-bold text-sm hover:bg-[#0d615b] shadow-lg shadow-teal-700/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                                  <MessageCircle size={18} />
                                  تواصل
                               </button>
                            </div>
                         </div>
                      </div>
                   </div>
                ))}
             </div>

             {/* Empty State */}
             {filteredData.length === 0 && (
                <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 border-dashed animate-in fade-in zoom-in duration-300">
                   <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                      <Search size={48} />
                   </div>
                   <h3 className="text-2xl font-black text-gray-900 mb-3">لا توجد نتائج مطابقة</h3>
                   <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">لم نعثر على أي عروض تطابق معايير البحث الحالية. يمكنك محاولة تغيير الفلاتر أو البحث عن كلمات مختلفة.</p>
                   <div className="flex justify-center gap-4">
                      <button 
                         onClick={() => { setActiveCategory('all'); setSearchQuery(''); setShowFilters(false); }}
                         className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all"
                      >
                         مسح الفلاتر
                      </button>
                      <button className="px-6 py-3 bg-[#0F766E] text-white rounded-xl font-bold hover:bg-[#0d615b] transition-all shadow-lg shadow-teal-700/20">
                         أضف طلبك الآن
                      </button>
                   </div>
                </div>
             )}
          </main>

          {/* Ad Banner - LEFT SIDE (Structurally last in RTL) */}
          <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-[240px]">
               <div className="bg-gradient-to-br from-[#0F766E] to-[#0D554E] rounded-2xl p-6 text-white text-center relative overflow-hidden shadow-lg shadow-teal-900/10">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                  <div className="relative z-10">
                     <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                        <Package size={24} className="text-white" />
                     </div>
                     <h3 className="font-bold text-lg mb-2">هل تبحث عن تمويل؟</h3>
                     <p className="text-sm text-teal-100 mb-4 leading-relaxed">احصل على تمويلك العقاري أو الشخصي بأفضل نسبة ربح وبأسرع وقت.</p>
                     <button className="w-full py-3 bg-white text-[#0F766E] rounded-xl font-bold text-sm hover:bg-teal-50 transition-colors shadow-lg shadow-black/5">قدم طلبك الآن</button>
                  </div>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

// Simple Icons
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const ArrowUpLeftIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);
