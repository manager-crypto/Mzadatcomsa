import React, { useState } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Bed, 
  Bath, 
  Ruler, 
  Heart, 
  Share2, 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  X, 
  Home, 
  Building2, 
  TrendingUp, 
  Filter, 
  Map as MapIcon
} from 'lucide-react';

interface ResidentialRentPageProps {
  onNavigate: (page: string) => void;
}

interface RentalProperty {
  id: number;
  title: string;
  price: number;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: string;
  featured: boolean;
  tags?: string[];
}

const cities = [
  { name: 'الرياض', value: 'riyadh', icon: '🏛️' },
  { name: 'جدة', value: 'jeddah', icon: '🌊' },
  { name: 'مكة', value: 'makkah', icon: '🕋' },
  { name: 'المدينة', value: 'madinah', icon: '🕌' },
];

const neighborhoods = {
  riyadh: ['حي الملقا', 'حي النخيل', 'حي الياسمين', 'حي الربوة', 'حي السليمانية', 'حي الورود'],
  jeddah: ['حي الروضة', 'حي الزهراء', 'حي الشاطئ', 'حي المحمدية', 'حي أبحر'],
  makkah: ['حي العزيزية', 'حي النسيم', 'حي الشوقية', 'حي النزهة'],
  madinah: ['حي قباء', 'حي العيون', 'حي السلام', 'حي الأزهري'],
};

const propertyTypes = [
  { name: 'شقة', value: 'apartment', icon: '🏢' },
  { name: 'فيلا', value: 'villa', icon: '🏰' },
  { name: 'دوبلكس', value: 'duplex', icon: '🏘️' },
  { name: 'استوديو', value: 'studio', icon: '🏠' },
];

export const ResidentialRentPage: React.FC<ResidentialRentPageProps> = ({ onNavigate }) => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [bedrooms, setBedrooms] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const properties: RentalProperty[] = [
    {
      id: 1,
      title: 'شقة عصرية بإطلالة رائعة',
      price: 45000,
      location: 'حي الملقا',
      city: 'الرياض',
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      image: 'https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3MDM2NDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'apartment',
      featured: true,
      tags: ['مفروشة', 'موقف سيارة']
    },
    {
      id: 2,
      title: 'فيلا فاخرة مع حديقة',
      price: 120000,
      location: 'حي النخيل',
      city: 'الرياض',
      bedrooms: 5,
      bathrooms: 4,
      area: 400,
      image: 'https://images.unsplash.com/photo-1674635847424-d82d56e38ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yJTIwcml5YWRofGVufDF8fHx8MTc3MDQwMDAzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'villa',
      featured: true,
      tags: ['حديقة', 'مسبح خاص']
    },
    {
      id: 3,
      title: 'شقة مفروشة بالكامل',
      price: 35000,
      location: 'حي الياسمين',
      city: 'الرياض',
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMzcwNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'apartment',
      featured: false,
      tags: ['مفروشة', 'قريبة من المدارس']
    },
    {
      id: 4,
      title: 'دوبلكس واسع للعائلات',
      price: 75000,
      location: 'حي الربوة',
      city: 'الرياض',
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      image: 'https://images.unsplash.com/photo-1707465990086-76d0a89c3cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMHNhdWRpfGVufDF8fHx8MTc3MDQwMDAzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'duplex',
      featured: true,
      tags: ['دورين', 'موقف خاص']
    },
    {
      id: 5,
      title: 'استوديو أنيق للعزاب',
      price: 18000,
      location: 'حي السليمانية',
      city: 'الرياض',
      bedrooms: 1,
      bathrooms: 1,
      area: 60,
      image: 'https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3MDM2NDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'studio',
      featured: false,
      tags: ['مفروش', 'قريب من المترو']
    },
    {
      id: 6,
      title: 'شقة عائلية راقية',
      price: 55000,
      location: 'حي الورود',
      city: 'الرياض',
      bedrooms: 3,
      bathrooms: 3,
      area: 200,
      image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMzcwNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'apartment',
      featured: false,
      tags: ['جديدة', 'أمن 24 ساعة']
    }
  ];

  const filteredProperties = properties.filter(property => {
    if (selectedCity !== 'all' && property.city !== cities.find(c => c.value === selectedCity)?.name) return false;
    if (selectedNeighborhood !== 'all' && property.location !== selectedNeighborhood) return false;
    if (selectedType !== 'all' && property.type !== selectedType) return false;
    if (property.price < priceRange[0] || property.price > priceRange[1]) return false;
    if (bedrooms !== 'all' && property.bedrooms.toString() !== bedrooms) return false;
    if (searchQuery && !property.title.includes(searchQuery) && !property.location.includes(searchQuery)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#2B3D50] via-[#2B3D50] to-[#1e293b] text-white py-16 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Home className="text-[#47CCD0]" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">عروض الإيجار المميزة</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              اكتشف أفضل الوحدات السكنية للإيجار في جميع أنحاء المملكة
            </p>
          </div>

          {/* Quick City Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {cities.map((city) => (
              <button
                key={city.value}
                onClick={() => setSelectedCity(city.value)}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 ${
                  selectedCity === city.value
                    ? 'bg-[#47CCD0] text-[#2B3D50] shadow-lg scale-105'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                }`}
              >
                <span className="text-2xl">{city.icon}</span>
                <span>{city.name}</span>
              </button>
            ))}
            <button
              onClick={() => setSelectedCity('all')}
              className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                selectedCity === 'all'
                  ? 'bg-[#47CCD0] text-[#2B3D50] shadow-lg scale-105'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
              }`}
            >
              عرض الكل
            </button>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-2 flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="ابحث عن عقار، حي، أو مدينة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 pr-12 pl-4 rounded-xl bg-gray-50 border-0 focus:outline-none focus:ring-2 focus:ring-[#2B3D50] text-gray-900"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 h-14 bg-[#2B3D50] text-white rounded-xl font-bold hover:bg-[#1e293b] transition-all flex items-center gap-2"
              >
                <Filter size={20} />
                <span className="hidden md:inline">فلترة</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <SlidersHorizontal className="text-[#2B3D50]" size={24} />
                الفلاتر المتقدمة
              </h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Neighborhood Filter */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">الحي</label>
                <div className="relative">
                  <select
                    value={selectedNeighborhood}
                    onChange={(e) => setSelectedNeighborhood(e.target.value)}
                    className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 pr-4 pl-10 appearance-none cursor-pointer focus:outline-none focus:border-[#2B3D50] focus:ring-2 focus:ring-[#2B3D50]/20"
                  >
                    <option value="all">جميع الأحياء</option>
                    {selectedCity !== 'all' && neighborhoods[selectedCity as keyof typeof neighborhoods]?.map((neighborhood) => (
                      <option key={neighborhood} value={neighborhood}>{neighborhood}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Property Type Filter */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">نوع العقار</label>
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 pr-4 pl-10 appearance-none cursor-pointer focus:outline-none focus:border-[#2B3D50] focus:ring-2 focus:ring-[#2B3D50]/20"
                  >
                    <option value="all">جميع الأنواع</option>
                    {propertyTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.icon} {type.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Bedrooms Filter */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">عدد الغرف</label>
                <div className="relative">
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 pr-4 pl-10 appearance-none cursor-pointer focus:outline-none focus:border-[#2B3D50] focus:ring-2 focus:ring-[#2B3D50]/20"
                  >
                    <option value="all">جميع الغرف</option>
                    <option value="1">غرفة واحدة</option>
                    <option value="2">غرفتان</option>
                    <option value="3">3 غرف</option>
                    <option value="4">4 غرف</option>
                    <option value="5">5 غرف أو أكثر</option>
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  السعر السنوي: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ر.س
                </label>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="5000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2B3D50]"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  setSelectedCity('all');
                  setSelectedNeighborhood('all');
                  setSelectedType('all');
                  setPriceRange([0, 100000]);
                  setBedrooms('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-bold hover:bg-gray-200 transition-all"
              >
                إعادة تعيين
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="px-6 py-2.5 bg-[#2B3D50] text-white rounded-lg font-bold hover:bg-[#1e293b] transition-all"
              >
                تطبيق الفلاتر ({filteredProperties.length})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Statistics Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Building2 className="text-[#47CCD0]" size={24} />
              </div>
              <p className="text-3xl font-black text-[#2B3D50]">{filteredProperties.length}</p>
              <p className="text-sm text-gray-500 font-medium">عقار متاح</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="text-[#47CCD0]" size={24} />
              </div>
              <p className="text-3xl font-black text-[#2B3D50]">12</p>
              <p className="text-sm text-gray-500 font-medium">حي</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Home className="text-[#47CCD0]" size={24} />
              </div>
              <p className="text-3xl font-black text-[#2B3D50]">4</p>
              <p className="text-sm text-gray-500 font-medium">أنواع العقارات</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="text-[#47CCD0]" size={24} />
              </div>
              <p className="text-3xl font-black text-[#2B3D50]">98%</p>
              <p className="text-sm text-gray-500 font-medium">رضا العملاء</p>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black text-gray-900">
            العقارات المتاحة ({filteredProperties.length})
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#2B3D50] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              شبكة
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg font-bold transition-all ${
                viewMode === 'list'
                  ? 'bg-[#2B3D50] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              قائمة
            </button>
          </div>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="text-gray-400" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-500">جرب تغيير الفلاتر للحصول على نتائج أفضل</p>
          </div>
        ) : (
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:-translate-y-1"
              >
                {/* Property Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {property.featured && (
                    <div className="absolute top-4 right-4 bg-[#47CCD0] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      ⭐ مميز
                    </div>
                  )}
                  <button className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all">
                    <Heart size={20} className="text-gray-700" />
                  </button>
                  <button className="absolute top-16 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all">
                    <Share2 size={18} className="text-gray-700" />
                  </button>
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4 bg-[#2B3D50] text-white px-4 py-2 rounded-xl backdrop-blur-sm">
                    <p className="text-xs opacity-90">سنوياً</p>
                    <p className="text-xl font-black">{property.price.toLocaleString()} <span className="text-sm">ر.س</span></p>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-[#2B3D50] transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#47CCD0]" />
                      {property.location}، {property.city}
                    </p>
                  </div>

                  {/* Property Features */}
                  <div className="flex items-center gap-4 py-3 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Bed size={18} className="text-[#2B3D50]" />
                      <span className="text-sm font-bold">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Bath size={18} className="text-[#2B3D50]" />
                      <span className="text-sm font-bold">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Ruler size={18} className="text-[#2B3D50]" />
                      <span className="text-sm font-bold">{property.area} م²</span>
                    </div>
                  </div>

                  {/* Tags */}
                  {property.tags && property.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                    <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#2B3D50] text-white rounded-xl font-bold hover:bg-[#1e293b] transition-all">
                      <Phone size={18} />
                      <span className="text-sm">اتصل الآن</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] transition-all">
                      <MessageCircle size={18} />
                      <span className="text-sm">واتساب</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#2B3D50] to-[#1e293b] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            هل لديك عقار للإيجار؟
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            انضم إلى منصة مزادات واعرض عقارك لآلاف المستأجرين المحتملين
          </p>
          <button
            onClick={() => onNavigate('home')}
            className="px-8 py-4 bg-[#47CCD0] text-[#2B3D50] rounded-xl font-bold hover:bg-[#35a4a9] transition-all text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            أضف عقارك الآن
          </button>
        </div>
      </div>
    </div>
  );
};
