import React, { useState } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  Heart,
  Phone,
  MessageCircle,
  Star,
  Calendar,
  TrendingUp,
  Building2,
  Home,
  DollarSign,
  Filter,
  X,
  ChevronDown
} from 'lucide-react';
import heroImage from 'figma:asset/a11b8294fd1ef4929326789444a13080ba58788a.png';

interface Property {
  id: number;
  title: string;
  location: string;
  district: string;
  price: number;
  priceType: 'monthly' | 'yearly';
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured: boolean;
  verified: boolean;
  rating: number;
  type: 'apartment' | 'villa' | 'townhouse' | 'studio';
  furnished: boolean;
  amenities: string[];
}

interface RiyadhRentPageProps {
  onNavigate: (page: string) => void;
  onPropertyClick?: (property: Property) => void;
}

export const RiyadhRentPage: React.FC<RiyadhRentPageProps> = ({ onNavigate, onPropertyClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 });
  const [bedrooms, setBedrooms] = useState('all');
  const [rentType, setRentType] = useState('all');
  const [furnished, setFurnished] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Mock data for Riyadh properties
  const properties: Property[] = [
    {
      id: 1,
      title: 'شقة فاخرة في حي الملقا',
      location: 'الرياض',
      district: 'الملقا',
      price: 45000,
      priceType: 'yearly',
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      image: 'https://images.unsplash.com/photo-1646662521253-5b9253b1a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXlhZGglMjBsdXh1cnklMjBhcGFydG1lbnR8ZW58MXx8fHwxNzcwNDAxODE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
      verified: true,
      rating: 4.8,
      type: 'apartment',
      furnished: true,
      amenities: ['مسبح', 'موقف سيارات', 'أمن 24/7', 'صالة رياضية']
    },
    {
      id: 2,
      title: 'فيلا راقية في حي الياسمين',
      location: 'الرياض',
      district: 'الياسمين',
      price: 120000,
      priceType: 'yearly',
      bedrooms: 5,
      bathrooms: 4,
      area: 450,
      image: 'https://images.unsplash.com/photo-1673538104712-62c9ac12462f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXlhZGglMjBtb2Rlcm4lMjB2aWxsYXxlbnwxfHx8fDE3NzA0MDE4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
      verified: true,
      rating: 4.9,
      type: 'villa',
      furnished: false,
      amenities: ['حديقة', 'مجس خارجي', 'موقف 4 سيارات', 'غرفة خادمة']
    },
    {
      id: 3,
      title: 'شقة عصرية في حي النرجس',
      location: 'الرياض',
      district: 'النرجس',
      price: 3500,
      priceType: 'monthly',
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1646662521253-5b9253b1a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXlhZGglMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDQwMTgxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
      verified: true,
      rating: 4.6,
      type: 'apartment',
      furnished: true,
      amenities: ['موقف سيارات', 'مصعد', 'أمن']
    },
    {
      id: 4,
      title: 'فيلا مودرن في حي الغدير',
      location: 'الرياض',
      district: 'الغدير',
      price: 95000,
      priceType: 'yearly',
      bedrooms: 4,
      bathrooms: 3,
      area: 350,
      image: 'https://images.unsplash.com/photo-1673538104712-62c9ac12462f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXlhZGglMjBtb2Rlcm4lMjB2aWxsYXxlbnwxfHx8fDE3NzA0MDE4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
      verified: true,
      rating: 4.7,
      type: 'villa',
      furnished: false,
      amenities: ['مسبح خاص', 'حديقة', 'موقف مظلل', 'غرفة سائق']
    },
    {
      id: 5,
      title: 'شقة مفروشة في حي العليا',
      location: 'الرياض',
      district: 'العليا',
      price: 4200,
      priceType: 'monthly',
      bedrooms: 1,
      bathrooms: 1,
      area: 85,
      image: 'https://images.unsplash.com/photo-1646662521253-5b9253b1a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXlhZGglMjBsdXh1cnklMjBhcGFydG1lbnR8ZW58MXx8fHwxNzcwNDAxODE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
      verified: true,
      rating: 4.5,
      type: 'apartment',
      furnished: true,
      amenities: ['موقع مركزي', 'قريب من الخدمات', 'مؤثثة بالكامل']
    },
    {
      id: 6,
      title: 'تاون هاوس في حي الربوة',
      location: 'الرياض',
      district: 'الربوة',
      price: 65000,
      priceType: 'yearly',
      bedrooms: 3,
      bathrooms: 3,
      area: 220,
      image: 'https://images.unsplash.com/photo-1646662521253-5b9253b1a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXlhZGglMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDQwMTgxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
      verified: true,
      rating: 4.4,
      type: 'townhouse',
      furnished: false,
      amenities: ['حديقة صغيرة', 'موقف سيارتين', 'مجمع مغلق']
    }
  ];

  const riyadhDistricts = [
    'الكل',
    'الملقا',
    'الياسمين',
    'النرجس',
    'الغدير',
    'العليا',
    'الربوة',
    'الندى',
    'الصحافة',
    'الورود',
    'المروج'
  ];

  const propertyTypes = [
    { value: 'all', label: 'جميع الأنواع', icon: Building2 },
    { value: 'apartment', label: 'شقة', icon: Building2 },
    { value: 'villa', label: 'فيلا', icon: Home },
    { value: 'townhouse', label: 'تاون هاوس', icon: Building2 },
    { value: 'studio', label: 'استوديو', icon: Building2 }
  ];

  const formatPrice = (price: number, type: 'monthly' | 'yearly') => {
    return `${price.toLocaleString('en-US')} ريال ${type === 'monthly' ? '/ شهرياً' : '/ سنوياً'}`;
  };

  const filteredProperties = properties.filter(property => {
    if (selectedDistrict !== 'all' && property.district !== selectedDistrict) return false;
    if (selectedType !== 'all' && property.type !== selectedType) return false;
    if (rentType !== 'all' && property.priceType !== rentType) return false;
    if (bedrooms !== 'all' && property.bedrooms !== parseInt(bedrooms)) return false;
    if (furnished !== 'all') {
      if (furnished === 'furnished' && !property.furnished) return false;
      if (furnished === 'unfurnished' && property.furnished) return false;
    }
    if (searchTerm && !property.title.includes(searchTerm) && !property.district.includes(searchTerm)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-l from-[#0f172a] to-[#1e293b] text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1722966885396-1f3dcebdf27f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaXlhZGglMjBza3lsaW5lJTIwbW9kZXJuJTIwbHV4dXJ5JTIwYXJjaGl0ZWN0dXJlJTIwbmlnaHR8ZW58MXx8fHwxNzcwNDg0NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#47CCD0]/20 px-4 py-2 rounded-full mb-6">
              <MapPin size={18} className="text-[#47CCD0]" />
              <span className="text-sm font-bold text-[#47CCD0]">عقارات للإيجار في الرياض</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">عقارات الرياض للإيجار</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              اكتشف أفضل العقارات السكنية للإيجار في أرقى أحياء العاصمة
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="ابحث عن حي، نوع عقار، أو مواصفات..."
                    className="w-full pr-12 pl-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#47CCD0] focus:outline-none text-gray-800"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-6 py-4 bg-[#47CCD0] text-white rounded-xl font-bold hover:bg-[#3bb3b7] transition-all flex items-center gap-2"
                >
                  <SlidersHorizontal size={20} />
                  <span>فلترة</span>
                </button>
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* District Filter */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">الحي</label>
                    <select
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#47CCD0] focus:outline-none text-gray-800"
                    >
                      {riyadhDistricts.map((district, idx) => (
                        <option key={idx} value={idx === 0 ? 'all' : district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Property Type Filter */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">نوع العقار</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#47CCD0] focus:outline-none text-gray-800"
                    >
                      {propertyTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Rent Type Filter */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">مدة الإيجار</label>
                    <select
                      value={rentType}
                      onChange={(e) => setRentType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#47CCD0] focus:outline-none text-gray-800"
                    >
                      <option value="all">الكل</option>
                      <option value="yearly">سنوي</option>
                      <option value="monthly">شهري</option>
                    </select>
                  </div>

                  {/* Bedrooms Filter */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">عدد الغرف</label>
                    <select
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#47CCD0] focus:outline-none text-gray-800"
                    >
                      <option value="all">الكل</option>
                      <option value="1">1 غرفة</option>
                      <option value="2">2 غرفة</option>
                      <option value="3">3 غرف</option>
                      <option value="4">4 غرف</option>
                      <option value="5">5+ غرف</option>
                    </select>
                  </div>

                  {/* Furnished Filter */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">حالة التأثيث</label>
                    <select
                      value={furnished}
                      onChange={(e) => setFurnished(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#47CCD0] focus:outline-none text-gray-800"
                    >
                      <option value="all">الكل</option>
                      <option value="furnished">مفروش</option>
                      <option value="unfurnished">غير مفروش</option>
                    </select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">ترتيب حسب</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#47CCD0] focus:outline-none text-gray-800"
                    >
                      <option value="featured">المميزة أولاً</option>
                      <option value="price-low">السعر: من الأقل للأعلى</option>
                      <option value="price-high">السعر: من الأعلى للأقل</option>
                      <option value="rating">الأعلى تقييماً</option>
                      <option value="newest">الأحدث</option>
                    </select>
                  </div>

                  {/* Reset Filters */}
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setSelectedDistrict('all');
                        setSelectedType('all');
                        setRentType('all');
                        setBedrooms('all');
                        setFurnished('all');
                        setSearchTerm('');
                      }}
                      className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                    >
                      <X size={18} />
                      <span>إعادة تعيين</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#47CCD0]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">إجمالي العقارات</p>
                <p className="text-3xl font-bold text-gray-900">{filteredProperties.length}</p>
              </div>
              <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center">
                <Building2 size={28} className="text-[#47CCD0]" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#2B3D50]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">عقارات مميزة</p>
                <p className="text-3xl font-bold text-gray-900">
                  {filteredProperties.filter(p => p.featured).length}
                </p>
              </div>
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center">
                <Star size={28} className="text-[#2B3D50] fill-[#2B3D50]" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#47CCD0]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">متوسط الإيجار</p>
                <p className="text-2xl font-bold text-gray-900">55,000</p>
                <p className="text-xs text-gray-500">ريال / سنوياً</p>
              </div>
              <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center">
                <DollarSign size={28} className="text-[#47CCD0]" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#2B3D50]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">أحياء متاحة</p>
                <p className="text-3xl font-bold text-gray-900">{riyadhDistricts.length - 1}</p>
              </div>
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center">
                <MapPin size={28} className="text-[#2B3D50]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            العقارات المتاحة ({filteredProperties.length})
          </h2>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={48} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-600 mb-6">جرب تعديل معايير البحث أو الفلاتر</p>
            <button
              onClick={() => {
                setSelectedDistrict('all');
                setSelectedType('all');
                setRentType('all');
                setBedrooms('all');
                setFurnished('all');
                setSearchTerm('');
              }}
              className="px-6 py-3 bg-[#47CCD0] text-white rounded-xl font-bold hover:bg-[#3bb3b7] transition-all"
            >
              إعادة تعيين الفلاتر
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                onClick={() => onPropertyClick && onPropertyClick(property)}
              >
                {/* Property Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {property.featured && (
                      <span className="bg-[#47CCD0] text-white text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1">
                        <Star size={12} className="fill-white" />
                        مميز
                      </span>
                    )}
                    {property.verified && (
                      <span className="bg-[#47CCD0] text-white text-xs px-3 py-1.5 rounded-full font-bold">
                        موثق
                      </span>
                    )}
                  </div>

                  {/* Favorite */}
                  <button className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all group/fav">
                    <Heart size={18} className="text-gray-700 group-hover/fav:text-red-500 group-hover/fav:fill-red-500 transition-all" />
                  </button>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <p className="text-lg font-bold text-[#47CCD0]">
                      {property.price.toLocaleString('en-US')} ريال
                    </p>
                    <p className="text-xs text-gray-600">
                      {property.priceType === 'monthly' ? 'شهرياً' : 'سنوياً'}
                    </p>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#47CCD0] transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-gray-700">{property.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin size={16} className="text-[#47CCD0]" />
                    <span className="text-sm">{property.district}، {property.location}</span>
                  </div>

                  {/* Property Features */}
                  <div className="flex items-center gap-6 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <Bed size={18} className="text-gray-400" />
                      <span className="text-sm font-bold text-gray-700">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={18} className="text-gray-400" />
                      <span className="text-sm font-bold text-gray-700">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize size={18} className="text-gray-400" />
                      <span className="text-sm font-bold text-gray-700">{property.area} م²</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {property.amenities.slice(0, 3).map((amenity, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-50 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                      {property.amenities.length > 3 && (
                        <span className="text-xs bg-gray-50 text-gray-700 px-3 py-1 rounded-full">
                          +{property.amenities.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#47CCD0] text-white rounded-xl font-bold hover:bg-[#3bb3b7] transition-all">
                      <Phone size={18} />
                      <span>اتصل</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all">
                      <MessageCircle size={18} />
                      <span>واتساب</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-l from-[#0f172a] to-[#1e293b] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">لم تجد العقار المناسب؟</h2>
          <p className="text-xl text-white/80 mb-8">
            تواصل معنا وسنساعدك في العثور على العقار المثالي
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 bg-[#47CCD0] text-white rounded-xl font-bold hover:bg-[#3bb3b7] transition-all flex items-center gap-2">
              <Phone size={20} />
              <span>تواصل معنا</span>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/20 transition-all border border-white/20">
              عرض جميع العقارات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
