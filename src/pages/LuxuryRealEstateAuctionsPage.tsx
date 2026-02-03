import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Gavel, 
  MapPin,
  Bed,
  Bath,
  Maximize,
  Home,
  Building,
  Armchair,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';

interface LuxuryRealEstateAuctionsPageProps {
  onNavigate?: (page: string) => void;
}

export const LuxuryRealEstateAuctionsPage: React.FC<LuxuryRealEstateAuctionsPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'villa' | 'commercial' | 'apartment'>('all');

  const categories = [
    { id: 'all', label: 'الكل', icon: Home },
    { id: 'villa', label: 'فلل فاخرة', icon: Home },
    { id: 'apartment', label: 'شقق وبنتهاوس', icon: Armchair },
    { id: 'commercial', label: 'أبراج تجارية', icon: Building },
  ];

  const properties = [
    {
      id: 1,
      title: 'فيلا الشاطئ الأبيض',
      description: 'فيلا مودرن بمسابح خاصة وإطلالة بانورامية',
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
    {
      id: 2,
      title: 'منزل الغابة العصرية',
      description: 'تصميم معماري فريد يمزج بين الطبيعة والحداثة',
      location: 'الرياض، حي الملقا',
      price: 8900000,
      area: 950,
      beds: 5,
      baths: 6,
      type: 'villa',
      status: 'active',
      timeLeft: '05 يوم : 08 ساعة',
      image: 'https://images.unsplash.com/photo-1609520025808-e26aeaf7a69f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGRhcmslMjBleHRlcmlvciUyMG5hdHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjYyODk2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bidders: 23
    },
    {
      id: 3,
      title: 'بنتهاوس السحاب',
      description: 'أعلى مستويات الرفاهية مع إطلالة كاملة على المدينة',
      location: 'الرياض، العليا',
      price: 4500000,
      area: 450,
      beds: 3,
      baths: 4,
      type: 'apartment',
      status: 'coming_soon',
      timeLeft: '00 يوم : 12 ساعة',
      image: 'https://images.unsplash.com/photo-1758448756350-3d0eec02ba37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBtb2Rlcm4lMjBwZW50aG91c2V8ZW58MXx8fHwxNzY2Mjg5NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bidders: 0
    },
    {
      id: 4,
      title: 'برج المال والأعمال',
      description: 'فرصة استثمارية نادرة في قلب المركز المالي',
      location: 'الرياض، كافد',
      price: 150000000,
      area: 25000,
      beds: 0,
      baths: 0,
      type: 'commercial',
      status: 'active',
      timeLeft: '15 يوم : 00 ساعة',
      image: 'https://images.unsplash.com/photo-1722966885396-1f3dcebdf27f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaXlhZGglMjBLQUZEJTIwYXJjaGl0ZWN0dXJlJTIwc2t5c2NyYXBlcnxlbnwxfHx8fDE3NjYyODk2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bidders: 5
    }
  ];

  const filteredProperties = activeCategory === 'all' 
    ? properties 
    : properties.filter(p => p.type === activeCategory);

  return (
    <div className="pt-36 pb-20 min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Header */}
      <div className="bg-[#1e293b] text-white py-16 relative overflow-hidden mb-8">
         <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
               <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#40C1C7] flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                     <Gavel size={28} />
                  </div>
                  مزادات النخبة العقارية
               </h1>
               <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
                  مجموعة حصرية من العقارات الفاخرة والفرص الاستثمارية النادرة. 
                  نقدم لك تجربة مزايدة استثنائية تليق بطموحك.
               </p>
               
               <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/10">
                     <CheckCircle2 className="text-[#40C1C7]" size={20} />
                     <span className="font-medium">عقارات موثقة 100%</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/10">
                     <CheckCircle2 className="text-[#40C1C7]" size={20} />
                     <span className="font-medium">فحص فني شامل</span>
                  </div>
               </div>
            </div>
         </div>
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
             <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#40C1C7]/30 to-transparent"></div>
             <img 
               src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1080&auto=format&fit=crop" 
               className="w-full h-full object-cover mix-blend-overlay"
               alt="Background"
             />
         </div>
      </div>

      <div className="container mx-auto px-4">
         
         {/* Filter Tabs */}
         <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat.id
                  ? 'bg-[#40C1C7] text-white shadow-lg shadow-teal-500/20 scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <cat.icon size={18} />
                {cat.label}
              </button>
            ))}
         </div>

         {/* Properties Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col">
                
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                   <img 
                     src={property.image} 
                     alt={property.title} 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                   
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-gray-900 flex items-center gap-1.5 shadow-sm">
                      <Clock size={14} className="text-[#40C1C7]" />
                      {property.timeLeft}
                   </div>

                   <div className="absolute bottom-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-1 shadow-black/10 drop-shadow-md">{property.title}</h3>
                      <div className="flex items-center gap-1.5 text-gray-200 text-sm">
                        <MapPin size={16} className="text-[#40C1C7]" />
                        {property.location}
                      </div>
                   </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                   <div className="flex items-start justify-between mb-6">
                      <p className="text-gray-500 text-sm leading-relaxed max-w-md">{property.description}</p>
                      <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
                         <span className="text-xs text-gray-500">مزايدين</span>
                         <span className="font-bold text-gray-900">{property.bidders}</span>
                      </div>
                   </div>

                   {/* Features */}
                   <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-2xl">
                         <Maximize size={20} className="text-[#40C1C7] mb-2" />
                         <span className="text-sm font-bold text-gray-900">{property.area} م²</span>
                         <span className="text-xs text-gray-400">المساحة</span>
                      </div>
                      {property.beds > 0 && (
                        <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-2xl">
                           <Bed size={20} className="text-[#40C1C7] mb-2" />
                           <span className="text-sm font-bold text-gray-900">{property.beds}</span>
                           <span className="text-xs text-gray-400">غرف</span>
                        </div>
                      )}
                      {property.baths > 0 && (
                        <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-2xl">
                           <Bath size={20} className="text-[#40C1C7] mb-2" />
                           <span className="text-sm font-bold text-gray-900">{property.baths}</span>
                           <span className="text-xs text-gray-400">دورات مياه</span>
                        </div>
                      )}
                      {property.type === 'commercial' && (
                        <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-2xl">
                           <Building size={20} className="text-[#40C1C7] mb-2" />
                           <span className="text-sm font-bold text-gray-900">تجاري</span>
                           <span className="text-xs text-gray-400">النوع</span>
                        </div>
                      )}
                   </div>

                   <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                      <div>
                         <p className="text-xs text-gray-500 mb-1">أعلى سعر حالياً</p>
                         <div className="text-2xl font-bold text-[#40C1C7] flex items-center gap-1">
                            {property.price.toLocaleString()}
                            <span className="text-sm text-gray-400 font-normal">ر.س</span>
                         </div>
                      </div>
                      
                      <button 
                        onClick={() => onNavigate?.('luxury-auction-details')}
                        className="px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-[#40C1C7] transition-colors flex items-center gap-2"
                      >
                         زايد الآن
                         <ArrowUpRight size={18} />
                      </button>
                   </div>
                </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};
