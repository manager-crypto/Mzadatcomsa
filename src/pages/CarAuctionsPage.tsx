import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Car, 
  Calendar, 
  Gauge, 
  MapPin, 
  ChevronDown, 
  SlidersHorizontal,
  X,
  Check,
  Clock,
  User,
  Eye,
  ArrowUpDown,
  Siren,
  Building2,
  Landmark,
  Wallet,
  FileCheck,
  ShieldCheck,
  Zap,
  Map
} from 'lucide-react';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';
import { Slider } from '../components/ui/slider';

interface CarAuctionsPageProps {
  onNavigate?: (page: string) => void;
  onCarClick?: (car: any) => void;
}

export const CarAuctionsPage: React.FC<CarAuctionsPageProps> = ({ onNavigate, onCarClick }) => {
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number[]>([0, 500000]);
  const [isBodyConditionOpen, setIsBodyConditionOpen] = useState(true);
  const [isCarConditionOpen, setIsCarConditionOpen] = useState(true);
  const [isTransmissionOpen, setIsTransmissionOpen] = useState(true);
  const [isFuelTypeOpen, setIsFuelTypeOpen] = useState(true);
  const [selectedCarCondition, setSelectedCarCondition] = useState<string>('مستعمل');

  // Mock Data
  const cars = [
    {
      id: 1,
      title: 'تويوتا كامري 2023 فل كامل',
      make: 'Toyota',
      model: 'Camry',
      year: 2023,
      odometer: '15,000 كم',
      location: 'الرياض',
      currentBid: 85000,
      image: 'https://images.unsplash.com/photo-1689182441262-64e78e223584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lvdGElMjBjYW1yeSUyMHdoaXRlJTIwY2FyfGVufDF8fHx8MTc2NjE1NzAzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      timeLeft: '02 يوم : 15 س : 30 د',
      bidders: 12,
      status: 'مباشر',
      statusColor: 'bg-red-500'
    },
    {
      id: 2,
      title: 'مرسيدس بنز S-Class 2022',
      make: 'Mercedes',
      model: 'S-Class',
      year: 2022,
      odometer: '28,000 كم',
      location: 'جدة',
      currentBid: 420000,
      image: 'https://images.unsplash.com/photo-1629019879070-11fceb18ed61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMGJlbnolMjBzJTIwY2xhc3MlMjBibGFja3xlbnwxfHx8fDE3NjYxNTcwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      timeLeft: '01 يوم : 08 س : 10 د',
      bidders: 45,
      status: 'مباشر',
      statusColor: 'bg-red-500'
    },
    {
      id: 3,
      title: 'لكزس LX600 2024',
      make: 'Lexus',
      model: 'LX600',
      year: 2024,
      odometer: '5,000 كم',
      location: 'الرياض',
      currentBid: 580000,
      image: 'https://images.unsplash.com/photo-1698122660387-64acb063dabe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXh1cyUyMHN1diUyMHdoaXRlfGVufDF8fHx8MTc2NjE1NzA0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      timeLeft: '03 يوم : 12 س : 00 د',
      bidders: 28,
      status: 'قريباً',
      statusColor: 'bg-blue-500'
    },
    {
      id: 4,
      title: 'هونداي سوناتا 2023',
      make: 'Hyundai',
      model: 'Sonata',
      year: 2023,
      odometer: '35,000 كم',
      location: 'الدمام',
      currentBid: 65000,
      image: 'https://images.unsplash.com/photo-1631452598383-3787ab18650e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXVuZGFpJTIwc29uYXRhJTIwc2lsdmVyfGVufDF8fHx8MTc2NjE1NzA0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      timeLeft: '00 يوم : 05 س : 20 د',
      bidders: 8,
      status: 'مباشر',
      statusColor: 'bg-red-500'
    },
    {
      id: 5,
      title: 'فورد موستانج GT 2021',
      make: 'Ford',
      model: 'Mustang',
      year: 2021,
      odometer: '42,000 كم',
      location: 'جدة',
      currentBid: 145000,
      image: 'https://images.unsplash.com/photo-1692807471707-880ceff6bb17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JkJTIwbXVzdGFuZyUyMHJlZHxlbnwxfHx8fDE3NjYxNTcwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      timeLeft: '04 يوم : 02 س : 15 د',
      bidders: 19,
      status: 'مباشر',
      statusColor: 'bg-red-500'
    },
    {
      id: 6,
      title: 'رنج روفر فوج 2023',
      make: 'Land Rover',
      model: 'Range Rover',
      year: 2023,
      odometer: '12,000 كم',
      location: 'الرياض',
      currentBid: 720000,
      image: 'https://images.unsplash.com/photo-1676319100135-bbf0d23232aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwcm92ZXIlMjByYW5nZSUyMHJvdmVyJTIwd2hpdGV8ZW58MXx8fHwxNzY2MTU3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      timeLeft: '06 يوم : 10 س : 45 د',
      bidders: 56,
      status: 'قريباً',
      statusColor: 'bg-blue-500'
    }
  ];

  const vehicleTypes = [
    { name: 'سيدان', count: 120 },
    { name: 'دفع رباعي', count: 85 },
    { name: 'كوبيه', count: 15 },
    { name: 'بيك أب', count: 24 },
    { name: 'فان', count: 8 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-36" dir="rtl">
      
      {/* --- Hero Section --- */}
      <div className="relative h-[300px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
           <img 
             src="https://images.unsplash.com/photo-1760689043833-bbacf1316e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBjYXIlMjBleHRlcmlvciUyMGZyb250JTIwdmlld3xlbnwxfHx8fDE3NjYxNTcwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080" 
             alt="Luxury Car" 
             className="w-full h-full object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 h-full flex flex-col justify-center">
           <div className="flex items-center gap-3 mb-4">
             <div className="p-2 bg-[#40C1C7]/20 rounded-lg backdrop-blur-md border border-[#40C1C7]/30">
               <Car className="text-[#40C1C7]" size={24} />
             </div>
             <span className="text-[#40C1C7] font-bold tracking-widest uppercase">مزادات السيارات</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
             اقتنِ سيارة أحلامك <br/> بأفضل الأسعار
           </h1>
           <p className="text-gray-300 text-lg max-w-xl">
             مئات السيارات الفاخرة والاقتصادية متاحة للمزايدة اليومية. فحص شامل وضمانات معتمدة.
           </p>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- Sidebar Filters --- */}
          <div className="w-full lg:w-[280px] flex-shrink-0">
             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="font-bold text-gray-900 flex items-center gap-2 text-lg">
                     <Filter size={20} className="text-[#40C1C7]" />
                     تصفية النتائج
                   </h3>
                   <button className="text-xs text-red-500 hover:underline">إعادة تعيين</button>
                </div>

                {/* 1. Auction Status (Urgency) */}
                <div className="mb-6">
                  <h4 className="font-bold text-sm mb-3 text-gray-800">حالة المزاد</h4>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between p-2 rounded-lg border border-red-100 bg-red-50/50 cursor-pointer hover:bg-red-50 transition-colors">
                      <div className="flex items-center gap-2">
                         <input type="checkbox" className="w-4 h-4 rounded text-red-600 focus:ring-red-500 border-gray-300" defaultChecked />
                         <span className="text-sm font-bold text-red-600 flex items-center gap-1.5">
                           <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                            </span>
                            جاري الآن
                         </span>
                      </div>
                      <span className="text-xs font-medium text-red-600 bg-white px-2 py-0.5 rounded shadow-sm">12</span>
                    </label>

                    <label className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-2">
                         <input type="checkbox" className="w-4 h-4 rounded text-[#40C1C7] focus:ring-[#40C1C7] border-gray-300" />
                         <span className="text-sm text-gray-700 flex items-center gap-2">
                           <Clock size={14} className="text-orange-500" />
                           ينتهي اليوم
                         </span>
                      </div>
                      <span className="text-xs text-gray-400">5</span>
                    </label>

                    <label className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-2">
                         <input type="checkbox" className="w-4 h-4 rounded text-[#40C1C7] focus:ring-[#40C1C7] border-gray-300" />
                         <span className="text-sm text-gray-700 flex items-center gap-2">
                           <Calendar size={14} className="text-blue-500" />
                           قادم قريباً
                         </span>
                      </div>
                      <span className="text-xs text-gray-400">20</span>
                    </label>
                  </div>
                </div>

                <div className="h-px bg-gray-100 mb-6" />

                {/* 2. Auction Source */}
                <div className="mb-6">
                   <h4 className="font-bold text-sm mb-3 text-gray-800">جهة المزاد</h4>
                   <div className="space-y-3">
                      {[
                        { id: 'gov', label: 'جهات حكومية', icon: Building2, color: 'text-slate-600' },
                        { id: 'bank', label: 'بنوك وشركات تمويل', icon: Landmark, color: 'text-emerald-600' },
                        { id: 'private', label: 'شركات خاصة', icon: Wallet, color: 'text-blue-600' },
                        { id: 'individual', label: 'أفراد', icon: User, color: 'text-gray-600' }
                      ].map((source) => (
                        <label key={source.id} className="flex items-center gap-3 cursor-pointer group">
                           <input type="checkbox" className="w-4 h-4 rounded text-[#40C1C7] focus:ring-[#40C1C7] border-gray-300" />
                           <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-[#40C1C7] transition-colors">
                              <source.icon size={16} className={source.color} />
                              {source.label}
                           </div>
                        </label>
                      ))}
                   </div>
                </div>

                <div className="h-px bg-gray-100 mb-6" />

                {/* 3. Starting Bid (Slider) */}
                <div className="mb-6">
                   <h4 className="font-bold text-sm mb-4 text-gray-800">سعر فتح المزاد</h4>
                   <div className="px-2">
                     <Slider 
                        defaultValue={[0, 500000]} 
                        max={1000000} 
                        step={5000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="my-4"
                     />
                     <div className="flex items-center justify-between text-xs text-gray-500 mt-2 font-medium">
                        <div className="bg-gray-50 px-2 py-1 rounded border border-gray-200">{priceRange[0].toLocaleString()} ر.س</div>
                        <div className="bg-gray-50 px-2 py-1 rounded border border-gray-200">{priceRange[1].toLocaleString()} ر.س</div>
                     </div>
                   </div>
                </div>

                <div className="h-px bg-gray-100 mb-6" />

                {/* 4. Car Details */}
                <div className="mb-6">
                   <h4 className="font-bold text-sm mb-3 text-gray-800">تفاصيل السيارة</h4>
                   <div className="space-y-3">
                      <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-[#40C1C7] transition-all">
                         <option>كل الماركات</option>
                         <option>تويوتا</option>
                         <option>مرسيدس</option>
                         <option>فورد</option>
                      </select>
                      
                      <div className="flex items-center gap-2">
                         <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-[#40C1C7]">
                            <option>من سنة</option>
                            <option>2020</option>
                            <option>2021</option>
                         </select>
                         <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-[#40C1C7]">
                            <option>إلى سنة</option>
                            <option>2025</option>
                            <option>2024</option>
                         </select>
                      </div>

                      <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-[#40C1C7]">
                         <option>الممشى (كم)</option>
                         <option>أقل من 10,000</option>
                         <option>10,000 - 50,000</option>
                         <option>50,000+</option>
                      </select>
                   </div>
                </div>

                <div className="h-px bg-gray-100 mb-6" />

                {/* 5. Inspection & Docs */}
                <div className="mb-6">
                   <h4 className="font-bold text-sm mb-3 text-gray-800">حالة الفحص والأوراق</h4>
                   <div className="space-y-2">
                      {[
                        { label: 'يوجد تقرير فحص', icon: FileCheck },
                        { label: 'الاستمارة سارية', icon: ShieldCheck },
                        { label: 'الفحص الدوري ساري', icon: Check },
                        { label: 'جاهزة للنقل فوراً', icon: Zap }
                      ].map((item, idx) => (
                        <label key={idx} className="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-gray-50 rounded-lg -mx-1.5 transition-colors">
                           <input type="checkbox" className="w-4 h-4 rounded text-[#40C1C7] focus:ring-[#40C1C7] border-gray-300" />
                           <span className="text-sm text-gray-600 flex items-center gap-2">
                             <item.icon size={14} className="text-gray-400" />
                             {item.label}
                           </span>
                        </label>
                      ))}
                   </div>
                </div>

                <div className="h-px bg-gray-100 mb-6" />

                {/* 6. Regional Specifications */}
                <div className="mb-6">
                   <h4 className="font-bold text-sm mb-3 text-gray-800">المواصفات الإقليمية</h4>
                   <div className="space-y-2">
                      {['سعودي', 'خليجي', 'أمريكي', 'مستورد آخر'].map((spec) => (
                        <label key={spec} className="flex items-center justify-between cursor-pointer p-1.5 hover:bg-gray-50 rounded-lg -mx-1.5 transition-colors">
                           <span className="text-sm text-gray-600">{spec}</span>
                           <input type="checkbox" className="w-4 h-4 rounded text-[#40C1C7] focus:ring-[#40C1C7] border-gray-300" />
                        </label>
                      ))}
                   </div>
                </div>

                <div className="h-px bg-gray-100 mb-6" />

                {/* 7. Body Condition */}
                <div className="mb-6">
                   <button 
                      onClick={() => setIsBodyConditionOpen(!isBodyConditionOpen)}
                      className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all mb-2 group"
                   >
                      <span className="font-bold text-sm text-gray-800 group-hover:text-[#40C1C7] transition-colors">حالة البدي</span>
                      <ChevronDown size={16} className={`text-gray-400 group-hover:text-[#40C1C7] transition-all ${isBodyConditionOpen ? 'rotate-180' : ''}`} />
                   </button>
                   
                   {isBodyConditionOpen && (
                     <div className="space-y-2 px-1">
                        {[
                          'وكالة (بودي بلد)',
                          'رش تجميلي',
                          'صدمات خفيفة / معدل'
                        ].map((condition) => (
                          <label key={condition} className="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-gray-50 rounded-lg transition-colors">
                             <input type="checkbox" className="w-4 h-4 rounded text-[#40C1C7] focus:ring-[#40C1C7] border-gray-300" />
                             <span className="text-sm text-gray-600">{condition}</span>
                          </label>
                        ))}
                     </div>
                   )}
                </div>

                <div className="h-px bg-gray-100 mb-6" />

                {/* 8. Car Condition */}
                <div className="mb-6">
                   <button 
                      onClick={() => setIsCarConditionOpen(!isCarConditionOpen)}
                      className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all mb-2 group"
                   >
                      <span className="font-bold text-sm text-gray-800 group-hover:text-[#40C1C7] transition-colors">حالة السيارة</span>
                      <ChevronDown size={16} className={`text-gray-400 group-hover:text-[#40C1C7] transition-all ${isCarConditionOpen ? 'rotate-180' : ''}`} />
                   </button>
                   
                   {isCarConditionOpen && (
                     <div className="space-y-2 px-1">
                        {[
                          'جديد',
                          'مستعمل',
                          'مصدوم / تشليح'
                        ].map((condition) => (
                          <label key={condition} className="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-gray-50 rounded-lg transition-colors">
                             <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${selectedCarCondition === condition ? 'border-black' : 'border-gray-200'}`}>
                                {selectedCarCondition === condition && (
                                  <div className="w-2 h-2 rounded-full bg-black" />
                                )}
                             </div>
                             <input 
                               type="radio" 
                               name="carCondition" 
                               className="hidden" 
                               checked={selectedCarCondition === condition} 
                               onChange={() => setSelectedCarCondition(condition)} 
                             />
                             <span className={`text-sm ${selectedCarCondition === condition ? 'font-bold text-black' : 'text-gray-600'}`}>{condition}</span>
                          </label>
                        ))}
                     </div>
                   )}
                </div>

                <div className="h-px bg-gray-100 mb-6" />

                {/* 9. Transmission */}
                <div className="mb-6">
                   <button 
                      onClick={() => setIsTransmissionOpen(!isTransmissionOpen)}
                      className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all mb-2 group"
                   >
                      <span className="font-bold text-sm text-gray-800 group-hover:text-[#40C1C7] transition-colors">ناقل الحركة (الجير)</span>
                      <ChevronDown size={16} className={`text-gray-400 group-hover:text-[#40C1C7] transition-all ${isTransmissionOpen ? 'rotate-180' : ''}`} />
                   </button>
                   
                   {isTransmissionOpen && (
                     <div className="space-y-2 px-1">
                        {[
                          'أوتوماتيك',
                          'عادي'
                        ].map((type) => (
                          <label key={type} className="flex items-center justify-between cursor-pointer p-1.5 hover:bg-gray-50 rounded-lg transition-colors">
                             <span className="text-sm text-gray-600">{type}</span>
                             <input type="checkbox" className="w-4 h-4 rounded text-[#40C1C7] focus:ring-[#40C1C7] border-gray-300" />
                          </label>
                        ))}
                     </div>
                   )}
                </div>

                <div className="h-px bg-gray-100 mb-6" />

                {/* 10. Fuel Type */}
                <div className="mb-6">
                   <button 
                      onClick={() => setIsFuelTypeOpen(!isFuelTypeOpen)}
                      className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all mb-2 group"
                   >
                      <span className="font-bold text-sm text-gray-800 group-hover:text-[#40C1C7] transition-colors">نوع الوقود</span>
                      <ChevronDown size={16} className={`text-gray-400 group-hover:text-[#40C1C7] transition-all ${isFuelTypeOpen ? 'rotate-180' : ''}`} />
                   </button>
                   
                   {isFuelTypeOpen && (
                     <div className="space-y-2 px-1">
                        {[
                          'بنزين',
                          'ديزل',
                          'هايبرد',
                          'كهرباء'
                        ].map((type) => (
                          <label key={type} className="flex items-center justify-between cursor-pointer p-1.5 hover:bg-gray-50 rounded-lg transition-colors">
                             <span className="text-sm text-gray-600">{type}</span>
                             <input type="checkbox" className="w-4 h-4 rounded text-[#40C1C7] focus:ring-[#40C1C7] border-gray-300" />
                          </label>
                        ))}
                     </div>
                   )}
                </div>

                <div className="h-px bg-gray-100 mb-6" />

                 {/* 11. Location */}
                 <div>
                   <h4 className="font-bold text-sm mb-3 text-gray-800">الموقع</h4>
                   <div className="space-y-2 max-h-32 overflow-y-auto custom-scrollbar pl-2">
                      {['الرياض', 'جدة', 'الدمام', 'مكة المكرمة', 'المدينة المنورة', 'ساحة المزاد الرئيسية'].map((loc) => (
                        <label key={loc} className="flex items-center gap-2 cursor-pointer">
                           <input type="checkbox" className="w-4 h-4 rounded text-[#40C1C7] focus:ring-[#40C1C7] border-gray-300" />
                           <span className="text-sm text-gray-600">{loc}</span>
                        </label>
                      ))}
                   </div>
                </div>

             </div>
          </div>

          {/* --- Main Content --- */}
          <div className="flex-1">
             
             {/* Sort Bar */}
             <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6">
                <p className="text-gray-500 text-sm">
                   تم العثور على <span className="font-bold text-gray-900">124</span> سيارة
                </p>
                <div className="flex items-center gap-3">
                   <span className="text-sm text-gray-500">ترتيب حسب:</span>
                   <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium hover:border-[#40C1C7] transition-all">
                      الأحدث <ChevronDown size={14} />
                   </button>
                   <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button className="p-2 bg-[#40C1C7] text-white"><SlidersHorizontal size={16} /></button>
                      <button className="p-2 bg-white text-gray-500 hover:bg-gray-50"><SlidersHorizontal size={16} className="rotate-90" /></button>
                   </div>
                </div>
             </div>

             {/* Cars Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {cars.map((car) => (
                  <div key={car.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col">
                     
                     {/* Image Area */}
                     <div className="relative h-56 overflow-hidden bg-gray-100">
                        <img 
                          src={car.image} 
                          alt={car.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                        
                        <div className="absolute top-3 right-3 z-10 flex gap-2">
                           <span className={`${car.statusColor} text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm flex items-center gap-1`}>
                             <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                             {car.status}
                           </span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                           <button 
                             onClick={() => onCarClick?.(car)}
                             className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300"
                           >
                              <Eye size={16} /> عرض التفاصيل
                           </button>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-5 flex-1 flex flex-col">
                        <h3 
                          className="font-bold text-lg text-gray-900 mb-1 group-hover:text-[#40C1C7] transition-colors cursor-pointer"
                          onClick={() => onCarClick?.(car)}
                        >
                          {car.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                           <span className="font-medium text-gray-700">{car.make}</span> • <span className="text-gray-500">{car.year}</span>
                        </p>

                        <div className="flex items-center gap-4 mb-6 text-xs text-gray-500 border-y border-gray-50 py-3">
                           <div className="flex items-center gap-1.5">
                              <Gauge size={14} className="text-[#40C1C7]" />
                              <span dir="ltr">{car.odometer}</span>
                           </div>
                           <div className="w-px h-4 bg-gray-200" />
                           <div className="flex items-center gap-1.5">
                              <MapPin size={14} className="text-[#40C1C7]" />
                              <span>{car.location}</span>
                           </div>
                        </div>

                        {/* Bid Info */}
                        <div className="mt-auto">
                           <div className="flex items-end justify-between mb-2">
                              <div>
                                 <p className="text-xs text-gray-400 mb-1">السعر الحالي</p>
                                 <div className="flex items-center gap-1">
                                    <span className="text-xl font-bold text-gray-900" dir="ltr">{car.currentBid.toLocaleString()}</span>
                                    <img src={sarCurrency} alt="SAR" className="w-4 opacity-70" />
                                 </div>
                              </div>
                              <div className="text-left">
                                 <div className="flex items-center gap-1 text-[#40C1C7] text-xs font-bold bg-teal-50 px-2 py-1 rounded-md mb-1">
                                    <Clock size={12} />
                                    <span dir="ltr">{car.timeLeft}</span>
                                 </div>
                                 <p className="text-[10px] text-gray-400">{car.bidders} مزايد</p>
                              </div>
                           </div>

                           <button className="w-full py-2.5 bg-gray-900 text-white rounded-lg font-bold text-sm hover:bg-[#40C1C7] transition-colors shadow-lg shadow-gray-200 hover:shadow-teal-500/30">
                              زايد الآن
                           </button>
                        </div>
                     </div>
                  </div>
                ))}
             </div>

             {/* Pagination */}
             <div className="mt-12 flex justify-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all">
                   <ChevronDown className="rotate-90" size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#40C1C7] text-white font-bold">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all">
                   <ChevronDown className="-rotate-90" size={20} />
                </button>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
};
