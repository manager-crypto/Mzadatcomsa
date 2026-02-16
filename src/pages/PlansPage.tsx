import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Filter, 
  ArrowLeft, 
  Building2, 
  Ruler, 
  CheckCircle2, 
  Map as MapIcon, 
  List, 
  ChevronDown,
  LayoutGrid
} from 'lucide-react';

// Mock Data for Schemes
const schemes = [
  {
    id: 1,
    title: "مخطط بوابة مكة",
    location: "مكة المكرمة، الشميسي",
    area: "400 - 800 م²",
    priceStart: "1,200,000",
    status: "available",
    image: "https://images.unsplash.com/photo-1759863468387-374e0362050a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGNvbXBvdW5kJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzA1Nzc4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    licenseNumber: "123456789",
    type: "سكني / تجاري",
    plotsCount: 150
  },
  {
    id: 2,
    title: "مخطط الريان",
    location: "الرياض، حي الريان",
    area: "300 - 600 م²",
    priceStart: "850,000",
    status: "selling_fast",
    image: "https://images.unsplash.com/photo-1722966885396-1f3dcebdf27f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMGNpdHklMjBwbGFubmluZyUyMGJsdWVwcmludHxlbnwxfHx8fDE3NzA1Nzc4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    licenseNumber: "987654321",
    type: "سكني",
    plotsCount: 85
  },
  {
    id: 3,
    title: "مخطط واحة النخيل",
    location: "القصيم، بريدة",
    area: "500 - 900 م²",
    priceStart: "450,000",
    status: "available",
    image: "https://images.unsplash.com/photo-1598618334722-5693f0e37ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwb2YlMjBsYW5kJTIwcGxvdHMlMjBmb3IlMjBzYWxlJTIwZGVzZXJ0fGVufDF8fHx8MTc3MDU3NzgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    licenseNumber: "456123789",
    type: "زراعي / سكني",
    plotsCount: 200
  },
  {
    id: 4,
    title: "مخطط العليا فيو",
    location: "الخبر، العزيزية",
    area: "450 - 700 م²",
    priceStart: "1,500,000",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1759863468387-374e0362050a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGNvbXBvdW5kJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzA1Nzc4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    licenseNumber: "789456123",
    type: "تجاري",
    plotsCount: 40
  },
  {
    id: 5,
    title: "مخطط الياسمين",
    location: "جدة، أبحر الشمالية",
    area: "350 - 600 م²",
    priceStart: "950,000",
    status: "sold_out",
    image: "https://images.unsplash.com/photo-1722966885396-1f3dcebdf27f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMGNpdHklMjBwbGFubmluZyUyMGJsdWVwcmludHxlbnwxfHx8fDE3NzA1Nzc4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    licenseNumber: "321654987",
    type: "سكني",
    plotsCount: 0
  }
];

interface PlansPageProps {
  onNavigate: (page: string) => void;
}

export const PlansPage: React.FC<PlansPageProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedCity, setSelectedCity] = useState('all');

  return (
    <div className="min-h-screen bg-[#F8FAFB] pb-20">
      {/* Hero Section */}
      <div className="bg-[#2B3D50] text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">��لمخططات المعتمدة</h1>
              <p className="text-gray-300">استعرض أحدث المخططات العقارية المعتمدة في المملكة</p>
            </div>
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
            >
              <ArrowLeft size={16} />
              العودة للرئيسية
            </button>
          </div>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-xl shadow-lg flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
              <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="ابحث عن اسم المخطط أو المدينة..." 
                className="w-full h-12 pr-10 pl-4 bg-transparent border-none focus:ring-0 text-[#2B3D50] placeholder:text-gray-400"
              />
            </div>
            <div className="h-px md:h-12 w-full md:w-px bg-gray-100"></div>
            <div className="flex-1 relative">
              <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select className="w-full h-12 pr-10 pl-4 bg-transparent border-none focus:ring-0 text-[#2B3D50] appearance-none cursor-pointer">
                <option value="">نوع العقار (سكني، تجاري...)</option>
                <option value="residential">سكني</option>
                <option value="commercial">تجاري</option>
                <option value="agricultural">زراعي</option>
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
            <button className="bg-[#47CCD0] hover:bg-[#3bbdc1] text-white px-8 h-12 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <Search size={20} />
              <span>بحث</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            {['الكل', 'الرياض', 'مكة المكرمة', 'الشرقية', 'جدة', 'القصيم'].map((city, idx) => (
              <button 
                key={city}
                onClick={() => setSelectedCity(city === 'الكل' ? 'all' : city)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  (selectedCity === 'all' && city === 'الكل') || selectedCity === city 
                    ? 'bg-[#2B3D50] text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-[#47CCD0] text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('map')}
              className={`p-2 rounded-md transition-all ${viewMode === 'map' ? 'bg-[#47CCD0] text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <MapIcon size={20} />
            </button>
          </div>
        </div>

        {/* Results Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((scheme) => (
              <motion.div 
                key={scheme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={scheme.image} 
                    alt={scheme.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#2B3D50] shadow-sm flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-[#47CCD0]" />
                    مرخص من وافي
                  </div>
                  <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${
                    scheme.status === 'available' ? 'bg-[#2ECC71]' : 
                    scheme.status === 'sold_out' ? 'bg-[#E74C3C]' : 
                    scheme.status === 'selling_fast' ? 'bg-[#F39C12]' : 'bg-[#2B3D50]'
                  }`}>
                    {scheme.status === 'available' ? 'متاح للبيع' : 
                     scheme.status === 'sold_out' ? 'مباع بالكامل' : 
                     scheme.status === 'selling_fast' ? 'متبقي عدد محدود' : 'قريباً'}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#2B3D50] mb-1 group-hover:text-[#47CCD0] transition-colors">{scheme.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={14} className="ml-1" />
                        {scheme.location}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 my-4">
                    <div className="bg-[#F8FAFB] p-2 rounded-lg text-center">
                      <span className="block text-xs text-gray-500 mb-1">المساحات تبدأ من</span>
                      <span className="font-bold text-[#2B3D50] text-sm dir-ltr">{scheme.area}</span>
                    </div>
                    <div className="bg-[#F8FAFB] p-2 rounded-lg text-center">
                      <span className="block text-xs text-gray-500 mb-1">الأسعار تبدأ من</span>
                      <span className="font-bold text-[#47CCD0] text-sm">{scheme.priceStart} <span className="text-xs text-gray-400">ر.س</span></span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-400">
                      رقم الترخيص: {scheme.licenseNumber}
                    </div>
                    <button className="text-[#2B3D50] font-medium text-sm flex items-center gap-1 group/btn hover:text-[#47CCD0] transition-colors">
                      <span>عرض التفاصيل</span>
                      <ArrowLeft size={16} className="transform group-hover/btn:-translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl h-[600px] border border-gray-200 flex items-center justify-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Riyadh_Map.jpg')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
            <div className="bg-white p-6 rounded-2xl shadow-xl z-10 text-center max-w-md mx-4">
              <div className="w-16 h-16 bg-[#47CCD0]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#47CCD0]">
                <MapIcon size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#2B3D50] mb-2">عرض الخريطة التفاعلي</h3>
              <p className="text-gray-500 mb-6">يمكنك استعراض المخططات على الخريطة التفاعلية ومشاهدة مواقع القطع والمرافق المحيطة.</p>
              <button 
                onClick={() => setViewMode('grid')}
                className="bg-[#2B3D50] text-white px-6 py-3 rounded-xl hover:bg-[#34495E] transition-colors w-full font-medium"
              >
                العودة للعرض الشبكي
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
