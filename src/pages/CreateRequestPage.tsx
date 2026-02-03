import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Package, 
  Home, 
  Car, 
  LayoutGrid, 
  User, 
  Phone, 
  MessageSquare,
  DollarSign,
  Tag,
  Key,
  Calendar,
  Building2,
  MapPin,
  Map
} from 'lucide-react';

interface CreateRequestPageProps {
  onNavigate: (page: string) => void;
}

export const CreateRequestPage: React.FC<CreateRequestPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('real-estate');
  const [realEstateType, setRealEstateType] = useState('residential-sale');
  const [activePropertyType, setActivePropertyType] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // States for location
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');

  // States for Car Filters
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYearFrom, setCarYearFrom] = useState('');
  const [carYearTo, setCarYearTo] = useState('');
  const [carOfferType, setCarOfferType] = useState('direct'); // direct, transfer
  const [carCondition, setCarCondition] = useState('used'); // new, used
  const [carGear, setCarGear] = useState('');
  const [carFuel, setCarFuel] = useState('');
  const [carRegionalSpec, setCarRegionalSpec] = useState('');

  // States for Plate Filters
  const [plateType, setPlateType] = useState('private');
  const [plateLetterCount, setPlateLetterCount] = useState<string>('');
  const [plateNumberCount, setPlateNumberCount] = useState<string>('');
  const [plateLetters, setPlateLetters] = useState('');
  const [plateNumbers, setPlateNumbers] = useState('');

  // States for Other Category
  const [otherItemName, setOtherItemName] = useState('');
  const [otherItemCondition, setOtherItemCondition] = useState('new'); // new, used

  // States for Real Estate Specific Filters
  const [propertyAge, setPropertyAge] = useState('');
  const [propertyDirection, setPropertyDirection] = useState('');
  const [streetWidth, setStreetWidth] = useState('');
  const [roomsCount, setRoomsCount] = useState('');
  const [floorNumber, setFloorNumber] = useState('');

  const categories = [
    { id: 'real-estate', label: 'عقار', icon: Home },
    { id: 'car', label: 'سيارة', icon: Car },
    { id: 'plate', label: 'لوحة', icon: LayoutGrid },
    { id: 'other', label: 'أخرى', icon: Package },
  ];

  const cities = [
    { id: 'riyadh', name: 'الرياض' },
    { id: 'jeddah', name: 'جدة' },
    { id: 'makkah', name: 'مكة المكرمة' },
    { id: 'madinah', name: 'المدينة المنورة' },
    { id: 'dammam', name: 'الدمام' },
    { id: 'khobar', name: 'الخبر' },
  ];

  const realEstateOptions = [
    // Residential
    {
      id: 'residential-sale',
      label: 'سكني - للبيع',
      type: 'residential',
      action: 'sale',
      icon: Tag,
      description: 'عروض البيع في منطقتك',
      propertyTypes: [
        { id: 'villa', label: 'فيلا' },
        { id: 'apartment', label: 'شقة' },
        { id: 'land', label: 'أرض' },
        { id: 'building', label: 'عمارة' },
        { id: 'duplex', label: 'دوبلكس' },
        { id: 'floor', label: 'دور' },
        { id: 'chalet', label: 'شاليه' },
        { id: 'warehouse', label: 'مستودع' }
      ]
    },
    {
      id: 'residential-rent',
      label: 'سكني - للايجار',
      type: 'residential',
      action: 'rent',
      icon: Key,
      description: 'عروض الايجار في منطقتك',
      propertyTypes: [
        { id: 'apartment', label: 'شقة' },
        { id: 'floor', label: 'دور' },
        { id: 'villa', label: 'فيلا' },
        { id: 'studio', label: 'استوديو' },
        { id: 'chalet', label: 'شاليه' },
        { id: 'warehouse', label: 'مستودع' }
      ]
    },
    {
      id: 'residential-daily',
      label: 'إيجار يومي',
      type: 'residential',
      action: 'daily',
      icon: Calendar,
      description: 'شاليهات، استراحات، مخيمات',
      propertyTypes: [
        { id: 'chalet', label: 'شاليه' },
        { id: 'rest-house', label: 'استراحة' },
        { id: 'camp', label: 'مخيم' },
        { id: 'farm', label: 'مزرعة' },
        { id: 'resort', label: 'منتجع' }
      ]
    },
    // Commercial
    {
      id: 'commercial-sale',
      label: 'تجاري - للبيع',
      type: 'commercial',
      action: 'sale',
      icon: Tag,
      description: 'عروض البيع في منطقتك',
      propertyTypes: [
        { id: 'office', label: 'مكتب' },
        { id: 'shop', label: 'معرض/محل' },
        { id: 'warehouse', label: 'مستودع' },
        { id: 'chalet', label: 'شاليه' },
        { id: 'land-commercial', label: 'أرض تجارية' },
        { id: 'building-commercial', label: 'عمارة تجارية' }
      ]
    },
    {
      id: 'commercial-rent',
      label: 'تجاري - للايجار',
      type: 'commercial',
      action: 'rent',
      icon: Key,
      description: 'عروض الايجار في منطقتك',
      propertyTypes: [
        { id: 'office', label: 'مكتب' },
        { id: 'shop', label: 'معرض/محل' },
        { id: 'warehouse', label: 'مستودع' },
        { id: 'chalet', label: 'شاليه' },
        { id: 'showroom', label: 'صالة عرض' }
      ]
    }
  ];

  const carBrands = [
    { id: 'toyota', name: 'تويوتا', models: ['لاندكروزر', 'كامري', 'كورولا', 'هايلكس', 'يارس', 'فورتشنر'] },
    { id: 'mercedes', name: 'مرسيدس بنز', models: ['S-Class', 'E-Class', 'C-Class', 'G-Class', 'GLE', 'CLA'] },
    { id: 'hyundai', name: 'هيونداي', models: ['النترا', 'سوناتا', 'اكسنت', 'توسان', 'سانتافي'] },
    { id: 'ford', name: 'فورد', models: ['تورس', 'اكسبلورر', 'اكسبدشن', 'موستانج', 'رينجر'] },
    { id: 'nissan', name: 'نيسان', models: ['باترول', 'التيما', 'مكسيما', 'صني', 'اكس تريل'] },
    { id: 'lexus', name: 'لكزس', models: ['LX', 'ES', 'LS', 'RX', 'NX'] },
  ];

  const years = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() + 1) - i);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset after 2 seconds and go back
      setTimeout(() => {
        onNavigate('my-requests');
      }, 2000);
    }, 1500);
  };

  const getActivePropertyTypes = () => {
    const option = realEstateOptions.find(opt => opt.id === realEstateType);
    return option ? option.propertyTypes : [];
  };

  const getCarModels = () => {
    const brand = carBrands.find(b => b.id === carBrand);
    return brand ? brand.models : [];
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4" dir="rtl">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-xl animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">تم إرسال طلبك بنجاح!</h2>
          <p className="text-gray-500 mb-6">سيتم مراجعة طلبك وإشعارك فور توفر عروض تناسبك.</p>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 animate-[width_2s_linear_forwards] w-0"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 pt-24" dir="rtl">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 pb-6 pt-6 sticky top-[80px] z-20 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <button 
            onClick={() => onNavigate('my-requests')}
            className="flex items-center gap-2 text-gray-500 hover:text-[#0F766E] font-bold mb-4 transition-colors"
          >
            <ArrowRight size={20} />
            العودة لصفحة طلبات العملاء
          </button>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">طلب خاص جديد</h1>
          <p className="text-gray-500 font-medium mt-1">أخبرنا عما تبحث عنه وسنقوم بالبحث نيابة عنك</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Request Options */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
              <Package className="text-[#0F766E]" size={20} />
              خيارات الطلب والمواصفات
            </h3>
            
            <div className="space-y-6">
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">نوع الطلب</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {categories.map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                        activeCategory === cat.id
                          ? 'border-[#0F766E] bg-[#0F766E]/5 text-[#0F766E]'
                          : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200'
                      }`}
                    >
                      <cat.icon size={24} />
                      <span className="font-bold text-sm">{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* REAL ESTATE SPECIFIC OPTIONS */}
              {activeCategory === 'real-estate' && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-300 space-y-6 border-t border-gray-100 pt-6 mt-6">
                   
                   {/* Sub-Category Selection (Residential/Commercial) */}
                   <div className="grid md:grid-cols-2 gap-8">
                      {/* Residential Column */}
                      <div>
                         <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                           <Home size={18} className="text-[#0F766E]" />
                           سكني
                         </h4>
                         <div className="space-y-2">
                            {realEstateOptions.filter(opt => opt.type === 'residential').map(option => (
                               <button
                                 type="button"
                                 key={option.id}
                                 onClick={() => {
                                    setRealEstateType(option.id);
                                    setActivePropertyType('');
                                 }}
                                 className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-right group ${
                                    realEstateType === option.id 
                                    ? 'border-[#0F766E] bg-[#0F766E]/5' 
                                    : 'border-gray-100 bg-white hover:border-gray-200'
                                 }`}
                               >
                                  <div className="flex items-center gap-3">
                                     <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                                        realEstateType === option.id ? 'bg-[#0F766E] text-white' : 'bg-gray-100 text-gray-500'
                                     }`}>
                                        <option.icon size={18} />
                                     </div>
                                     <div>
                                        <div className={`font-bold text-sm ${realEstateType === option.id ? 'text-[#0F766E]' : 'text-gray-900'}`}>
                                           {option.label.split(' - ')[1] || option.label}
                                        </div>
                                        <div className="text-[10px] text-gray-400 mt-0.5">{option.description}</div>
                                     </div>
                                  </div>
                                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                     realEstateType === option.id ? 'border-[#0F766E]' : 'border-gray-300'
                                  }`}>
                                     {realEstateType === option.id && <div className="w-2 h-2 rounded-full bg-[#0F766E]" />}
                                  </div>
                               </button>
                            ))}
                         </div>
                      </div>

                      {/* Commercial Column */}
                      <div>
                         <div className="flex items-center gap-2 mb-3">
                           <h4 className="font-bold text-gray-900 flex items-center gap-2">
                              <Building2 size={18} className="text-[#0F766E]" />
                              تجاري
                           </h4>
                           <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">جديد</span>
                         </div>
                         <div className="space-y-2">
                            {realEstateOptions.filter(opt => opt.type === 'commercial').map(option => (
                               <button
                                 type="button"
                                 key={option.id}
                                 onClick={() => {
                                    setRealEstateType(option.id);
                                    setActivePropertyType('');
                                 }}
                                 className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-right group ${
                                    realEstateType === option.id 
                                    ? 'border-[#0F766E] bg-[#0F766E]/5' 
                                    : 'border-gray-100 bg-white hover:border-gray-200'
                                 }`}
                               >
                                  <div className="flex items-center gap-3">
                                     <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                                        realEstateType === option.id ? 'bg-[#0F766E] text-white' : 'bg-gray-100 text-gray-500'
                                     }`}>
                                        <option.icon size={18} />
                                     </div>
                                     <div>
                                        <div className={`font-bold text-sm ${realEstateType === option.id ? 'text-[#0F766E]' : 'text-gray-900'}`}>
                                           {option.label.split(' - ')[1] || option.label}
                                        </div>
                                        <div className="text-[10px] text-gray-400 mt-0.5">{option.description}</div>
                                     </div>
                                  </div>
                                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                     realEstateType === option.id ? 'border-[#0F766E]' : 'border-gray-300'
                                  }`}>
                                     {realEstateType === option.id && <div className="w-2 h-2 rounded-full bg-[#0F766E]" />}
                                  </div>
                               </button>
                            ))}
                         </div>
                      </div>
                   </div>

                   {/* Property Type Selection */}
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">نوع العقار المطلوب</label>
                      <div className="flex flex-wrap gap-2">
                         {getActivePropertyTypes().map((type) => (
                           <button
                              type="button"
                              key={type.id}
                              onClick={() => setActivePropertyType(type.id)}
                              className={`px-4 py-2 rounded-lg text-sm font-bold border transition-all ${
                                 activePropertyType === type.id
                                 ? 'bg-[#0F766E] text-white border-[#0F766E]'
                                 : 'bg-white text-gray-600 border-gray-200 hover:border-[#0F766E] hover:text-[#0F766E]'
                              }`}
                           >
                              {type.label}
                           </button>
                         ))}
                      </div>
                   </div>

                   {/* Property Specific Fields (Villa, Land, Apartment) */}
                   {activePropertyType && (
                     <div className="animate-in fade-in slide-in-from-top-2 duration-300 grid md:grid-cols-2 gap-4 border-t border-gray-100 pt-4 mt-2">
                        
                        {/* Fields for Villa & Land & Warehouse & Chalet: Direction & Street Width */}
                        {(activePropertyType === 'villa' || activePropertyType === 'land' || activePropertyType === 'building' || activePropertyType === 'warehouse' || activePropertyType === 'land-commercial' || activePropertyType === 'building-commercial' || activePropertyType === 'chalet') && (
                           <>
                              <div>
                                 <label className="block text-sm font-bold text-gray-700 mb-2">الواجهة</label>
                                 <select 
                                    value={propertyDirection}
                                    onChange={(e) => setPropertyDirection(e.target.value)}
                                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                                 >
                                    <option value="">اختر الواجهة</option>
                                    <option value="north">شمالية</option>
                                    <option value="south">جنوبية</option>
                                    <option value="east">شرقية</option>
                                    <option value="west">غربية</option>
                                    <option value="northeast">شمالية شرقية</option>
                                    <option value="northwest">شمالية غربية</option>
                                    <option value="southeast">جنوبية شرقية</option>
                                    <option value="southwest">جنوبية غربية</option>
                                    <option value="3_streets">3 شوارع</option>
                                    <option value="4_streets">4 شوارع</option>
                                 </select>
                              </div>
                              <div>
                                 <label className="block text-sm font-bold text-gray-700 mb-2">عرض الشارع (متر)</label>
                                 <select 
                                    value={streetWidth}
                                    onChange={(e) => setStreetWidth(e.target.value)}
                                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                                 >
                                    <option value="">اختر عرض الشارع</option>
                                    <option value="10">10 م</option>
                                    <option value="15">15 م</option>
                                    <option value="20">20 م</option>
                                    <option value="25">25 م</option>
                                    <option value="30">30 م</option>
                                    <option value="30+">أكثر من 30 م</option>
                                 </select>
                              </div>
                           </>
                        )}

                        {/* Fields for Villa & Building & Apartment & Warehouse & Chalet: Age */}
                        {(activePropertyType === 'villa' || activePropertyType === 'building' || activePropertyType === 'apartment' || activePropertyType === 'floor' || activePropertyType === 'warehouse' || activePropertyType === 'building-commercial' || activePropertyType === 'chalet') && (
                           <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2">عمر العقار</label>
                              <select 
                                 value={propertyAge}
                                 onChange={(e) => setPropertyAge(e.target.value)}
                                 className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                              >
                                 <option value="">اختر عمر العقار</option>
                                 <option value="new">جديد</option>
                                 <option value="less_5">أقل من 5 سنوات</option>
                                 <option value="less_10">أقل من 10 سنوات</option>
                                 <option value="less_20">أقل من 20 سنة</option>
                                 <option value="old">قديم</option>
                              </select>
                           </div>
                        )}

                        {/* Fields for Apartment & Floor: Rooms & Floor Number */}
                        {(activePropertyType === 'apartment' || activePropertyType === 'floor') && (
                           <>
                              <div>
                                 <label className="block text-sm font-bold text-gray-700 mb-2">عدد الغرف</label>
                                 <select 
                                    value={roomsCount}
                                    onChange={(e) => setRoomsCount(e.target.value)}
                                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                                 >
                                    <option value="">اختر عدد الغرف</option>
                                    <option value="1">غرفة واحدة</option>
                                    <option value="2">غرفتين</option>
                                    <option value="3">3 غرف</option>
                                    <option value="4">4 غرف</option>
                                    <option value="5">5 غرف</option>
                                    <option value="5+">أكثر من 5 غرف</option>
                                 </select>
                              </div>
                              <div>
                                 <label className="block text-sm font-bold text-gray-700 mb-2">رقم الدور</label>
                                 <select 
                                    value={floorNumber}
                                    onChange={(e) => setFloorNumber(e.target.value)}
                                    className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                                 >
                                    <option value="">اختر الدور</option>
                                    <option value="ground">أرضي</option>
                                    <option value="1">الأول</option>
                                    <option value="2">الثاني</option>
                                    <option value="3">الثالث</option>
                                    <option value="upper">علوي</option>
                                 </select>
                              </div>
                           </>
                        )}
                     </div>
                   )}

                   {/* Location Fields */}
                   <div className="grid md:grid-cols-2 gap-4">
                      {/* City */}
                      <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">المدينة</label>
                         <div className="relative">
                            <select 
                               value={city}
                               onChange={(e) => setCity(e.target.value)}
                               className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                            >
                               <option value="">اختر المدينة</option>
                               {cities.map(c => (
                                  <option key={c.id} value={c.id}>{c.name}</option>
                               ))}
                            </select>
                            <MapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                         </div>
                      </div>

                      {/* District */}
                      <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">الحي (اختياري)</label>
                         <div className="relative">
                            <input 
                               type="text"
                               value={district}
                               onChange={(e) => setDistrict(e.target.value)}
                               placeholder="مثال: حي النرجس"
                               className="w-full h-12 pr-4 pl-10 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all"
                            />
                            <Map className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={18} />
                         </div>
                      </div>
                   </div>

                </div>
              )}

              {/* CAR SPECIFIC OPTIONS */}
              {activeCategory === 'car' && (
                 <div className="animate-in fade-in slide-in-from-top-4 duration-300 space-y-6 border-t border-gray-100 pt-6 mt-6">
                    {/* Offer Type */}
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-3">نوع العرض</label>
                       <div className="flex gap-4">
                          <button
                             type="button"
                             onClick={() => setCarOfferType('direct')}
                             className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all font-bold ${
                                carOfferType === 'direct' 
                                ? 'border-[#0F766E] bg-[#0F766E]/5 text-[#0F766E]' 
                                : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'
                             }`}
                          >
                             <CheckCircle2 size={18} className={carOfferType === 'direct' ? 'opacity-100' : 'opacity-0'} />
                             بيع مباشر
                          </button>
                          <button
                             type="button"
                             onClick={() => setCarOfferType('transfer')}
                             className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all font-bold ${
                                carOfferType === 'transfer' 
                                ? 'border-[#0F766E] bg-[#0F766E]/5 text-[#0F766E]' 
                                : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'
                             }`}
                          >
                             <CheckCircle2 size={18} className={carOfferType === 'transfer' ? 'opacity-100' : 'opacity-0'} />
                             تنازل
                          </button>
                       </div>
                    </div>

                    {/* Brand & Model */}
                    <div className="grid md:grid-cols-2 gap-4">
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">الماركة</label>
                          <div className="relative">
                             <select 
                                value={carBrand}
                                onChange={(e) => {
                                   setCarBrand(e.target.value);
                                   setCarModel('');
                                }}
                                className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                             >
                                <option value="">اختر الماركة</option>
                                {carBrands.map(b => (
                                   <option key={b.id} value={b.id}>{b.name}</option>
                                ))}
                             </select>
                             <Car className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                          </div>
                       </div>
                       
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">الموديل</label>
                          <div className="relative">
                             <select 
                                value={carModel}
                                onChange={(e) => setCarModel(e.target.value)}
                                disabled={!carBrand}
                                className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                             >
                                <option value="">اختر الموديل</option>
                                {getCarModels().map(m => (
                                   <option key={m} value={m}>{m}</option>
                                ))}
                             </select>
                          </div>
                       </div>
                    </div>

                    {/* Year Range */}
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">سنة الصنع</label>
                       <div className="flex gap-4">
                          <div className="flex-1">
                             <select 
                                value={carYearFrom}
                                onChange={(e) => setCarYearFrom(e.target.value)}
                                className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                             >
                                <option value="">من سنة</option>
                                {years.map(y => (
                                   <option key={y} value={y}>{y}</option>
                                ))}
                             </select>
                          </div>
                          <div className="flex-1">
                             <select 
                                value={carYearTo}
                                onChange={(e) => setCarYearTo(e.target.value)}
                                className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                             >
                                <option value="">إلى سنة</option>
                                {years.map(y => (
                                   <option key={y} value={y}>{y}</option>
                                ))}
                             </select>
                          </div>
                       </div>
                    </div>

                    {/* City Selection */}
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">المدينة</label>
                       <div className="relative">
                          <select 
                             value={city}
                             onChange={(e) => setCity(e.target.value)}
                             className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                          >
                             <option value="">كل المدن</option>
                             {cities.map(c => (
                                <option key={c.id} value={c.id}>{c.name}</option>
                             ))}
                          </select>
                          <MapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                       </div>
                    </div>

                    {/* Regional Specs */}
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">الموا��فات الإقليمية</label>
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['سعودي', 'خليجي', 'أمريكي', 'مستورد'].map((spec) => (
                             <button
                                key={spec}
                                type="button"
                                onClick={() => setCarRegionalSpec(spec)}
                                className={`py-2 px-3 rounded-lg text-sm border transition-all ${
                                   carRegionalSpec === spec
                                   ? 'bg-[#0F766E] text-white border-[#0F766E]'
                                   : 'bg-white text-gray-600 border-gray-200 hover:border-[#0F766E]'
                                }`}
                             >
                                {spec}
                             </button>
                          ))}
                       </div>
                    </div>

                    {/* Additional Options (Collapsible or just grid) */}
                    <div className="grid md:grid-cols-2 gap-4">
                       {/* Gear */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">ناقل الحركة (الجير)</label>
                          <div className="flex gap-2">
                             {['أوتوماتيك', 'عادي'].map((gear) => (
                                <button
                                   key={gear}
                                   type="button"
                                   onClick={() => setCarGear(gear)}
                                   className={`flex-1 py-2 px-3 rounded-lg text-sm border transition-all ${
                                      carGear === gear
                                      ? 'bg-[#0F766E] text-white border-[#0F766E]'
                                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#0F766E]'
                                   }`}
                                >
                                   {gear}
                                </button>
                             ))}
                          </div>
                       </div>
                       
                       {/* Fuel */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">نوع الوقود</label>
                          <div className="flex gap-2">
                             {['بنزين', 'ديزل', 'هايبرد'].map((fuel) => (
                                <button
                                   key={fuel}
                                   type="button"
                                   onClick={() => setCarFuel(fuel)}
                                   className={`flex-1 py-2 px-3 rounded-lg text-sm border transition-all ${
                                      carFuel === fuel
                                      ? 'bg-[#0F766E] text-white border-[#0F766E]'
                                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#0F766E]'
                                   }`}
                                >
                                   {fuel}
                                </button>
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
              )}

              {/* PLATE SPECIFIC OPTIONS */}
              {activeCategory === 'plate' && (
                 <div className="animate-in fade-in slide-in-from-top-4 duration-300 space-y-6 border-t border-gray-100 pt-6 mt-6">
                    {/* Plate Type */}
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-3">نوع اللوحة</label>
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {[
                             { id: 'private', label: 'خصوصي' },
                             { id: 'transport', label: 'نقل خاص' },
                             { id: 'motorcycle', label: 'دراجة نارية' },
                             { id: 'other', label: 'أخرى' }
                          ].map((type) => (
                             <button
                                key={type.id}
                                type="button"
                                onClick={() => setPlateType(type.id)}
                                className={`py-3 px-3 rounded-xl text-sm font-bold border transition-all ${
                                   plateType === type.id
                                   ? 'bg-[#0F766E] text-white border-[#0F766E]'
                                   : 'bg-white text-gray-600 border-gray-200 hover:border-[#0F766E]'
                                }`}
                             >
                                {type.label}
                             </button>
                          ))}
                       </div>
                    </div>

                    {/* Plate Structure */}
                    <div className="grid md:grid-cols-2 gap-4">
                       {/* Letter Count */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">عدد الحروف</label>
                          <select 
                             value={plateLetterCount}
                             onChange={(e) => setPlateLetterCount(e.target.value)}
                             className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                          >
                             <option value="">غير محدد</option>
                             <option value="1">حرف واحد</option>
                             <option value="2">حرفين</option>
                             <option value="3">3 حروف</option>
                             <option value="distinct">حروف مميزة</option>
                          </select>
                       </div>

                       {/* Number Count */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">عدد الأرقام</label>
                          <select 
                             value={plateNumberCount}
                             onChange={(e) => setPlateNumberCount(e.target.value)}
                             className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                          >
                             <option value="">غير محدد</option>
                             <option value="1">رقم واحد</option>
                             <option value="2">رقمين</option>
                             <option value="3">3 أرقام</option>
                             <option value="4">4 أرقام (مميز)</option>
                          </select>
                       </div>
                    </div>

                    {/* Specific Preferences */}
                    <div className="grid md:grid-cols-2 gap-4">
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">الحروف المفضلة (اختياري)</label>
                          <input 
                             type="text"
                             value={plateLetters}
                             onChange={(e) => setPlateLetters(e.target.value)}
                             placeholder="مثال: أ أ أ"
                             className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all"
                          />
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">الأرقام المفضلة (اختياري)</label>
                          <input 
                             type="text"
                             value={plateNumbers}
                             onChange={(e) => setPlateNumbers(e.target.value)}
                             placeholder="مثال: 1111"
                             className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all text-left dir-ltr"
                          />
                       </div>
                    </div>

                    {/* City Selection */}
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">المدينة</label>
                       <div className="relative">
                          <select 
                             value={city}
                             onChange={(e) => setCity(e.target.value)}
                             className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                          >
                             <option value="">كل المدن</option>
                             {cities.map(c => (
                                <option key={c.id} value={c.id}>{c.name}</option>
                             ))}
                          </select>
                          <MapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                       </div>
                    </div>
                 </div>
              )}

              {/* OTHER SPECIFIC OPTIONS */}
              {activeCategory === 'other' && (
                 <div className="animate-in fade-in slide-in-from-top-4 duration-300 space-y-6 border-t border-gray-100 pt-6 mt-6">
                    {/* Item Name */}
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">اسم السلعة / الخدمة</label>
                       <div className="relative">
                          <input 
                             type="text"
                             value={otherItemName}
                             onChange={(e) => setOtherItemName(e.target.value)}
                             placeholder="مثال: جهاز لابتوب، ساعة يد، أثاث..."
                             className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all"
                          />
                          <Package className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={18} />
                       </div>
                    </div>

                    {/* Condition & City */}
                    <div className="grid md:grid-cols-2 gap-4">
                       {/* Condition */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">الحالة</label>
                          <div className="flex gap-2">
                             {[{id: 'new', label: 'جديد'}, {id: 'used', label: 'مستعمل'}].map((cond) => (
                                <button
                                   key={cond.id}
                                   type="button"
                                   onClick={() => setOtherItemCondition(cond.id)}
                                   className={`flex-1 py-3 px-3 rounded-xl text-sm font-bold border transition-all ${
                                      otherItemCondition === cond.id
                                      ? 'bg-[#0F766E] text-white border-[#0F766E]'
                                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#0F766E]'
                                   }`}
                                >
                                   {cond.label}
                                </button>
                             ))}
                          </div>
                       </div>

                       {/* City Selection */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">المدينة</label>
                          <div className="relative">
                             <select 
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all appearance-none cursor-pointer"
                             >
                                <option value="">كل المدن</option>
                                {cities.map(c => (
                                   <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                             </select>
                             <MapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                          </div>
                       </div>
                    </div>
                 </div>
              )}

              {/* Price Range */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">ميزانية الطلب (تقريباً)</label>
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <span className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
                      <DollarSign size={16} />
                    </span>
                    <input 
                      type="number" 
                      placeholder="أقل سعر" 
                      className="w-full h-12 pr-10 pl-4 bg-gray-50 border border-gray-200 rounded-xl font-bold focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 transition-all"
                    />
                  </div>
                  <span className="text-gray-400 font-bold">-</span>
                  <div className="relative flex-1">
                    <span className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
                      <DollarSign size={16} />
                    </span>
                    <input 
                      type="number" 
                      placeholder="أعلى سعر" 
                      className="w-full h-12 pr-10 pl-4 bg-gray-50 border border-gray-200 rounded-xl font-bold focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Specs */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">مواصفات إضافية وملاحظات</label>
                <div className="relative">
                  <textarea 
                    rows={5}
                    placeholder="اكتب هنا أي تفاصيل أخرى تهمك، مثل: الواجهة، عمر العقار، عدد الغرف، إلخ..."
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 transition-all resize-none"
                  ></textarea>
                  <MessageSquare className="absolute top-4 left-4 text-gray-300" size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Customer Info */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
              <User className="text-[#0F766E]" size={20} />
              معلومات العميل
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل</label>
                <input 
                  type="text" 
                  placeholder="محمد عبدالله"
                  className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">رقم الجوال</label>
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="05xxxxxxxx"
                    dir="ltr"
                    className="w-full h-12 pr-4 pl-10 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:outline-none focus:border-[#0F766E] transition-all text-right"
                  />
                  <Phone className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto px-12 py-4 bg-[#0F766E] text-white rounded-xl font-black text-lg shadow-lg shadow-teal-700/20 hover:bg-[#0d615b] hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  جاري الإرسال...
                </>
              ) : (
                <>
                  <span>إتمام وإرسال الطلب</span>
                  <CheckCircle2 size={20} />
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
