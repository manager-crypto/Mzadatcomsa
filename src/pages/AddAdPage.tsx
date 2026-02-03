import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Building2, 
  Car, 
  LayoutGrid, 
  Package, 
  Camera, 
  MapPin, 
  DollarSign, 
  FileText,
  AlertCircle,
  Upload
} from 'lucide-react';

interface AddAdPageProps {
  onNavigate?: (page: string) => void;
}

export const AddAdPage: React.FC<AddAdPageProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    price: '',
    city: 'riyadh',
    images: [] as File[]
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Submit
      alert('تم إرسال الإعلان للمراجعة بنجاح!');
      onNavigate?.('home');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      onNavigate?.('home');
    }
  };

  const categories = [
    { id: 'real-estate', label: 'عقارات', icon: <Building2 size={24} />, desc: 'أراضي، فلل، شقق' },
    { id: 'cars', label: 'سيارات', icon: <Car size={24} />, desc: 'جديدة، مستعملة' },
    { id: 'plates', label: 'لوحات', icon: <LayoutGrid size={24} />, desc: 'لوحات مميزة' },
    { id: 'other', label: 'أخرى', icon: <Package size={24} />, desc: 'أجهزة، مقتنيات' },
  ];

  return (
    <div className="pt-36 pb-20 min-h-screen bg-[#F8FAFC]" dir="rtl">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-4">
            <button 
                onClick={handleBack}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#40C1C7] hover:border-[#40C1C7] transition-all shadow-sm"
            >
                <ArrowRight size={22} />
            </button>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">إضافة إعلان جديد</h1>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-8">
          <div className="relative flex justify-between px-4">
            {/* Progress Bar Line */}
            <div className="absolute top-[22px] left-10 right-10 h-[3px] bg-gray-100 -z-0">
               <div 
                 className="h-full bg-[#40C1C7] transition-all duration-500 ease-out"
                 style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
               ></div>
            </div>

            {/* Steps */}
            {[
              { id: 1, label: 'القسم', icon: <LayoutGrid size={20} /> },
              { id: 2, label: 'التفاصيل', icon: <FileText size={20} /> },
              { id: 3, label: 'الصور', icon: <Camera size={20} /> },
              { id: 4, label: 'المراجعة', icon: <Check size={20} /> },
            ].map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center gap-3">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                    currentStep >= step.id 
                      ? 'bg-[#40C1C7] border-[#40C1C7] text-white shadow-lg shadow-teal-500/20' 
                      : 'bg-white border-gray-200 text-gray-300'
                  }`}
                >
                  {currentStep > step.id ? <Check size={22} /> : step.icon}
                </div>
                <span className={`text-sm font-bold transition-colors ${currentStep >= step.id ? 'text-[#40C1C7]' : 'text-gray-300'}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 animate-fade-up min-h-[400px] flex flex-col">
          
          {/* Step 1: Category */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">اختر القسم المناسب</h2>
                <p className="text-gray-500">حدد نوع السلعة أو العقار الذي تود الإعلان عنه</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFormData({ ...formData, category: cat.id })}
                    className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center text-center gap-3 ${
                      formData.category === cat.id
                        ? 'border-[#40C1C7] bg-teal-50/50 ring-2 ring-[#40C1C7]/20'
                        : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                      formData.category === cat.id ? 'bg-[#40C1C7] text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{cat.label}</h3>
                      <p className="text-sm text-gray-400 mt-1">{cat.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">تفاصيل الإعلان</h2>
                <p className="text-gray-500">أدخل المعلومات الأساسية لإعلانك بدقة</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">عنوان الإعلان</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "فلل للبيع", "أراضي للبيع", "شقق للبيع", "دور للإيجار", "عمائر للبيع", 
                      "محلات للبيع", "استراحة للبيع", "بيت للبيع", "مزرعة للبيع", 
                      "بيت للإيجار", "استراحة للإيجار", "مكتب تجاري للإيجار", "أراضي للإيجار", 
                      "عمائر للإيجار", "مستودع للإيجار", "مخيم للإيجار", "غرف للإيجار", "محلات للإيجار"
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, title: type })}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                          formData.title === type
                            ? 'bg-[#40C1C7] text-white border-[#40C1C7]'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-[#40C1C7] hover:text-[#40C1C7]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">المدينة</label>
                  <div className="relative">
                    <select 
                      className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 appearance-none focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 transition-all outline-none"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    >
                      <option value="riyadh">الرياض</option>
                      <option value="jeddah">جدة</option>
                      <option value="dammam">الدمام</option>
                    </select>
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">السعر المطلوب</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      placeholder="0"
                      className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 transition-all outline-none"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-bold">ر.س</div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">الوصف</label>
                  <textarea 
                    rows={4}
                    placeholder="اكتب وصفاً تفصيلياً..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 transition-all outline-none resize-none"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Images */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">صور الإعلان</h2>
                <p className="text-gray-500">أضف صوراً واضحة لزيادة فرص البيع</p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-3xl p-10 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4 group-hover:bg-[#40C1C7] group-hover:text-white transition-all">
                  <Upload size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">اسحب وأفلت الصور هنا</h3>
                <p className="text-gray-500 text-sm mb-6">أو تصفح الملفات من جهازك</p>
                <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-bold hover:border-[#40C1C7] hover:text-[#40C1C7] transition-colors">
                  اختر ملفات
                </button>
              </div>

              <div className="bg-blue-50 text-blue-800 p-4 rounded-xl flex gap-3 text-sm">
                <AlertCircle size={20} className="flex-shrink-0" />
                <p>يجب أن تكون الصور خالية من الشعارات المائية وأرقام التواصل. ��لحد الأقصى 10 صور.</p>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">مراجعة الإعلان</h2>
                <p className="text-gray-500">تأكد من صحة البيانات قبل النشر</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-500">القسم</span>
                  <span className="font-bold text-gray-900">
                    {categories.find(c => c.id === formData.category)?.label || formData.category}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-500">العنوان</span>
                  <span className="font-bold text-gray-900">{formData.title}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-500">السعر</span>
                  <span className="font-bold text-[#40C1C7]">{formData.price} ر.س</span>
                </div>
                <div>
                   <span className="block text-gray-500 mb-2">الوصف</span>
                   <p className="text-gray-900 text-sm leading-relaxed">{formData.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="w-5 h-5 text-[#40C1C7] rounded border-gray-300 focus:ring-[#40C1C7]" />
                <label htmlFor="terms" className="text-sm text-gray-600">أوافق على <a href="#" className="text-[#40C1C7] underline">الشروط والأحكام</a> الخاصة بالإعلانات</label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-auto pt-8 flex gap-4">
            <button 
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`flex-1 h-14 rounded-xl font-bold border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              السابق
            </button>
            <button 
              onClick={handleNext}
              disabled={currentStep === 1 && !formData.category}
              className="flex-[2] h-14 bg-[#40C1C7] text-white rounded-xl font-bold hover:bg-[#3bb1b7] transition-all shadow-lg shadow-teal-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === 4 ? 'نشر الإعلان' : 'متابعة'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
