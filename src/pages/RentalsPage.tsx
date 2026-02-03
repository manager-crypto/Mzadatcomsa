import React, { useState } from 'react';
import { 
  Tag, 
  Key, 
  ChevronLeft, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  Heart, 
  Share2, 
  Star, 
  CheckCircle2, 
  MessageCircle, 
  Phone,
  Filter,
  Search,
  ChevronDown,
  List,
  Map,
  Calendar as CalendarIcon
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { cn } from '../components/ui/utils';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';

interface RentalsPageProps {
  onNavigate: (page: string) => void;
}

export const RentalsPage: React.FC<RentalsPageProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const cities = [
    {
      id: 'riyadh',
      name: 'الرياض',
      image: 'https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaXlhZGglMjBjaXR5JTIwc2t5bGluZSUyMG5pZ2h0fGVufDF8fHx8MTc2NjUxNjc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'jeddah',
      name: 'جدة',
      image: 'https://images.unsplash.com/photo-1674979724572-c0a0579bc9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKZWRkYWglMjBjaXR5JTIwc2VhJTIwbGFuZG1hcmt8ZW58MXx8fHwxNzY2NTE2NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'makkah',
      name: 'مكة',
      image: 'https://images.unsplash.com/photo-1635829577291-8a0dc47606e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWtrYWglMjBjaXR5JTIwbW91bnRhaW5zfGVufDF8fHx8MTc2NjUxNjc2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'medina',
      name: 'المدينة',
      image: 'https://images.unsplash.com/photo-1638800213251-ec31194b1cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZWRpbmElMjBjaXR5JTIwbW9zcXVlfGVufDF8fHx8MTc2NjUxNjc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  // Mock rental properties
  const rentalProperties = [
    {
      id: 1,
      title: 'شقة فاخرة للإيجار في حي الملقا',
      price: 85000,
      period: 'سنوي',
      address: 'الرياض، حي الملقا',
      specs: { beds: 3, baths: 3, area: 180 },
      type: 'شقة',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1080',
      tags: ['مطبخ راكب', 'تكييف مركزي'],
      agent: {
        name: 'إعمار المستقبل',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=EM',
        verified: true
      },
      featured: true,
      time: 'منذ 3 ��اعات'
    },
    {
      id: 2,
      title: 'فيلا مودرن للإيجار حي العارض',
      price: 150000,
      period: 'سنوي',
      address: 'الرياض، حي العارض',
      specs: { beds: 5, baths: 6, area: 450 },
      type: 'فيلا',
      image: 'https://images.unsplash.com/photo-1600596542815-27b88e54e60d?q=80&w=1080',
      tags: ['مسبح', 'جديدة'],
      agent: {
        name: 'نخبة العقار',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=NE',
        verified: true
      },
      featured: false,
      time: 'منذ 5 ساعات'
    },
    {
      id: 3,
      title: 'مكتب تجاري للإيجار طريق الملك فهد',
      price: 45000,
      period: 'سنوي',
      address: 'الرياض، العليا',
      specs: { beds: 0, baths: 2, area: 120 },
      type: 'مكتب',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1080',
      tags: ['مؤثث', 'إطلالة'],
      agent: {
        name: 'أصول للاستثمار',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=AS',
        verified: true
      },
      featured: true,
      time: 'منذ يوم'
    },
    {
      id: 4,
      title: 'شقة عائلية للإيجار الشهري',
      price: 6500,
      period: 'شهري',
      address: 'جدة، حي السلامة',
      specs: { beds: 2, baths: 2, area: 110 },
      type: 'شقة',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1080',
      tags: ['شامل الكهرباء', 'موقف خاص'],
      agent: {
        name: 'مسكن جدة',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=MJ',
        verified: false
      },
      featured: false,
      time: 'منذ يومين'
    }
  ];

  return (
    <div className="container mx-auto px-4 animate-fade-up min-h-screen pt-36 pb-12">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Main Content (Left Side in RTL) */}
        <div className="flex-1 order-2 lg:order-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">عروض الإيجار المميزة</h2>
            <button className="text-[#40C1C7] hover:text-[#35a4a9] flex items-center gap-1 text-sm font-medium transition-colors">
              عرض الكل
              <ChevronLeft size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {cities.map((city) => (
              <div 
                key={city.id} 
                className="group relative h-40 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => onNavigate('city-sale')} 
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                <img 
                  src={city.image} 
                  alt={city.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-4 z-20">
                  <h3 className="text-white font-bold text-lg drop-shadow-md">{city.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Search & Filters */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6 sticky top-24 z-30">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
               <div className="md:col-span-2 relative">
                 <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                 <input 
                   type="text" 
                   placeholder="ابحث بالحي، المدينة..." 
                   className="w-full h-11 pr-10 pl-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none transition-all text-sm"
                 />
               </div>
               <button className="h-11 px-3 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-600">
                 <span>نوع العقار</span>
                 <ChevronDown size={16} />
               </button>
               <button className="h-11 px-3 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-600">
                 <span className="flex items-center gap-2"><Filter size={16} /> تصفية</span>
               </button>
             </div>
             
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {['سنوي', 'شهري', 'يومي', 'عوائل', 'عزاب'].map((tag, idx) => (
                    <button key={idx} className="flex-shrink-0 px-4 py-1.5 bg-gray-50 hover:bg-teal-50 hover:text-[#40C1C7] border border-gray-100 rounded-full text-xs font-bold transition-all text-gray-600">
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="flex items-center bg-gray-100 p-1 rounded-lg">
                   <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#40C1C7]' : 'text-gray-400 hover:text-gray-600'}`}>
                     <List size={18} />
                   </button>
                   <button onClick={() => setViewMode('map')} className={`p-1.5 rounded-md transition-all ${viewMode === 'map' ? 'bg-white shadow-sm text-[#40C1C7]' : 'text-gray-400 hover:text-gray-600'}`}>
                     <Map size={18} />
                   </button>
                </div>
             </div>
          </div>
          
          {/* Listings */}
          {viewMode === 'map' ? (
             <div className="bg-gray-100 rounded-3xl h-[600px] overflow-hidden border border-gray-200 relative mb-8">
               <iframe 
                 width="100%" 
                 height="100%" 
                 frameBorder="0" 
                 scrolling="no" 
                 title="Rentals Map"
                 src="https://maps.google.com/maps?width=100%25&height=600&hl=ar&q=Riyadh%20Real%20Estate&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                 className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
               ></iframe>
               <button 
                 onClick={() => setViewMode('grid')}
                 className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-sm font-bold text-gray-900 hover:bg-white transition-all z-10"
               >
                 العودة للقائمة
               </button>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
               {rentalProperties.map((property) => (
                 <div 
                   key={property.id} 
                   onClick={() => onNavigate('property-details')}
                   className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#40C1C7]/30 transition-all duration-300 flex flex-col cursor-pointer"
                 >
                   {/* Image Section */}
                   <div className="relative h-56 overflow-hidden">
                     <img 
                       src={property.image} 
                       alt={property.title} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                     />
                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                     
                     <div className="absolute top-3 right-3 flex gap-2">
                        <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-lg">للإيجار</span>
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
                     </div>

                     <div className="absolute bottom-3 right-3 text-white">
                       <p className="text-xl font-bold font-mono flex items-center justify-end gap-2">
                         {property.price.toLocaleString()} 
                         <img src={sarCurrency} alt="ر.س" className="h-4 w-auto inline-block bg-white/20 rounded-sm p-0.5 backdrop-blur-sm" />
                         <span className="text-xs font-normal opacity-80 mr-1">/ {property.period}</span>
                       </p>
                     </div>
                   </div>

                   {/* Content Section */}
                   <div className="p-4 flex-1 flex flex-col">
                     <div className="flex-1">
                       <h3 className="font-bold text-gray-900 text-base line-clamp-1 group-hover:text-[#40C1C7] transition-colors mb-1">{property.title}</h3>
                       
                       <p className="text-gray-500 text-xs flex items-center gap-1 mb-3">
                         <MapPin size={12} className="text-[#40C1C7]" />
                         {property.address}
                       </p>

                       <div className="flex items-center gap-3 text-gray-600 text-xs mb-3 bg-gray-50 p-2 rounded-lg justify-between">
                          <div className="flex items-center gap-1">
                            <Bed size={14} className="text-gray-400" />
                            <span className="font-bold">{property.specs.beds}</span>
                          </div>
                          <div className="w-px h-3 bg-gray-200" />
                          <div className="flex items-center gap-1">
                            <Bath size={14} className="text-gray-400" />
                            <span className="font-bold">{property.specs.baths}</span>
                          </div>
                          <div className="w-px h-3 bg-gray-200" />
                          <div className="flex items-center gap-1">
                            <Maximize size={14} className="text-gray-400" />
                            <span className="font-bold">{property.specs.area} م²</span>
                          </div>
                       </div>
                     </div>

                     {/* Footer */}
                     <div className="pt-3 mt-auto border-t border-gray-100 flex items-center justify-between">
                       <div className="flex items-center gap-2">
                         <img src={property.agent.logo} alt={property.agent.name} className="w-6 h-6 rounded-full border border-gray-100" />
                         <span className="text-xs font-bold text-gray-900 line-clamp-1">{property.agent.name}</span>
                       </div>

                       <div className="flex items-center gap-1">
                         <button className="w-7 h-7 rounded-lg bg-teal-50 text-[#40C1C7] flex items-center justify-center hover:bg-[#40C1C7] hover:text-white transition-colors">
                           <MessageCircle size={14} />
                         </button>
                         <button className="w-7 h-7 rounded-lg bg-teal-50 text-[#40C1C7] flex items-center justify-center hover:bg-[#40C1C7] hover:text-white transition-colors">
                           <Phone size={14} />
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
            </div>
          )}
        </div>

        {/* Sidebar (Right Side in RTL) */}
        <div className="w-full lg:w-72 flex-shrink-0 order-1 lg:order-2 space-y-8">
          
          {/* Residential Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-right">سكني</h3>
            <div className="space-y-2">
              <button 
                onClick={() => onNavigate('city-sale')} 
                className="w-full flex items-center justify-end gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-500 hover:text-gray-900 transition-colors group"
              >
                <div className="text-right">
                  <div className="font-bold">للبيع</div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-500">عروض البيع في منطقتك</div>
                </div>
                <Tag className="w-5 h-5" />
              </button>

              <button 
                className="w-full flex items-center justify-end gap-3 p-3 rounded-xl bg-[#E6F9FA] text-[#40C1C7] relative overflow-hidden"
              >
                {/* Active Indicator Circle */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-24 h-24 bg-[#40C1C7]/10 rounded-full blur-xl pointer-events-none"></div>
                
                <div className="text-right z-10">
                  <div className="font-bold">للايجار</div>
                  <div className="text-xs text-[#40C1C7]/70">عروض الايجار في منطقتك</div>
                </div>
                <Key className="w-5 h-5 z-10" />
              </button>

              <button 
                onClick={() => onNavigate('daily-rent')} 
                className="w-full flex items-center justify-end gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-500 hover:text-gray-900 transition-colors group"
              >
                <div className="text-right">
                  <div className="font-bold">إيجار يومي</div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-500">شاليهات، استراحات، مخيمات</div>
                </div>
                <CalendarIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Commercial Section */}
          <div>
            <div className="flex items-center justify-end gap-2 mb-4">
              <Badge className="bg-green-500 hover:bg-green-600 text-[10px] px-2 h-5">جديد</Badge>
              <h3 className="text-lg font-bold text-gray-900">تجاري</h3>
            </div>
            
            <div className="space-y-2">
              <button 
                onClick={() => onNavigate('city-sale')} 
                className="w-full flex items-center justify-end gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-500 hover:text-gray-900 transition-colors group"
              >
                <div className="text-right">
                  <div className="font-bold">للبيع</div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-500">عروض البيع في منطقتك</div>
                </div>
                <Tag className="w-5 h-5" />
              </button>

              <button 
                onClick={() => onNavigate('city-sale')}
                className="w-full flex items-center justify-end gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-500 hover:text-gray-900 transition-colors group"
              >
                <div className="text-right">
                  <div className="font-bold">للايجار</div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-500">عروض الايجار في منطقتك</div>
                </div>
                <Key className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
