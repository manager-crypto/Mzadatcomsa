import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Gavel, 
  Clock, 
  Calendar,
  DollarSign, 
  FileText,
  AlertCircle,
  Upload,
  ShieldCheck,
  Building2,
  Car,
  Package
} from 'lucide-react';
import personImage from 'figma:asset/12e4927068bfa4d6d7d02d08e05baa6297fe91f3.png';
import auctionImage from 'figma:asset/9e185068aed0ec71a303c8b7e7720bfe7568bc93.png';

interface AddAuctionPageProps {
  onNavigate?: (page: string) => void;
}

export const AddAuctionPage: React.FC<AddAuctionPageProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    type: 'public',
    category: '',
    title: '',
    startPrice: '',
    minIncrement: '',
    startDate: '',
    endDate: '',
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Submit
      alert('تم إنشاء المزاد بنجاح! سيتم مراجعته من قبل الإدارة.');
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

  return (
    <div className="pt-40 pb-10 md:pt-48 md:pb-20 min-h-screen bg-[#F8FAFC]" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-8">
           <div className="flex items-center gap-4">
            <button 
                onClick={handleBack}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#40C1C7] hover:border-[#40C1C7] transition-all shadow-sm"
            >
                <ArrowRight size={22} />
            </button>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">إنشاء مزاد جديد</h1>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm border border-gray-100 mb-6 md:mb-8">
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
              { id: 1, label: 'نوع المزاد', icon: <Gavel size={20} /> },
              { id: 2, label: 'التفاصيل', icon: <FileText size={20} /> },
              { id: 3, label: 'التوقيت والأسعار', icon: <Clock size={20} /> },
              { id: 4, label: 'التأكيد', icon: <ShieldCheck size={20} /> },
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
          
          {/* Step 1: Auction Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">اختر نوع المزاد</h2>
                <p className="text-gray-500">حدد آلية المزايدة المناسبة لأصلك</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - Image Section with Animation */}
                <div className="hidden md:block relative">
                  <div className="relative bg-white">
                    {/* Person Image */}
                    <div className="relative p-6">
                      <img 
                        src={auctionImage} 
                        alt="مستشار مزادات" 
                        className="w-full h-auto relative z-10"
                      />
                      
                      {/* Floating Icons with Animation */}
                      <div className="absolute top-12 left-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float">
                        <Gavel size={28} className="text-[#47CCD0]" />
                      </div>
                      
                      <div className="absolute top-24 right-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float-delay-1">
                        <Clock size={28} className="text-[#47CCD0]" />
                      </div>
                      
                      <div className="absolute bottom-32 left-12 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float-delay-2">
                        <DollarSign size={28} className="text-[#47CCD0]" />
                      </div>
                      
                      <div className="absolute bottom-24 right-12 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float-delay-3">
                        <ShieldCheck size={28} className="text-[#47CCD0]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Options */}
                <div className="space-y-8">
                   {/* Auction Types */}
                   <div className="space-y-4">
                       <h3 className="text-lg font-bold text-gray-900">نوع المزاد</h3>
                       <div className="grid grid-cols-1 gap-4">
                          {[
                            { id: 'public', label: 'مزاد علني', desc: 'متاح للجميع والمزايدة مباشرة' },
                            { id: 'sealed', label: 'ظرف مغلق', desc: 'العروض سرية وتفتح في وقت محدد' },
                            { id: 'private', label: 'مزاد خاص', desc: 'للمدعوين فقط برابط خاص' },
                          ].map((type) => (
                            <button
                              key={type.id}
                              onClick={() => setFormData({ ...formData, type: type.id })}
                              className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-right group ${
                                formData.type === type.id
                                  ? 'border-[#40C1C7] bg-teal-50/50 ring-2 ring-[#40C1C7]/20'
                                  : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                              }`}
                            >
                              <div className={`w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center transition-colors ${
                                formData.type === type.id ? 'bg-[#40C1C7] text-white' : 'bg-gray-100 text-gray-500'
                              }`}>
                                <Gavel size={24} />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 group-hover:text-[#47CCD0] transition-colors">{type.label}</h4>
                                <p className="text-sm text-gray-400">{type.desc}</p>
                              </div>
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                  formData.type === type.id ? 'border-[#47CCD0]' : 'border-gray-300'
                              }`}>
                                  {formData.type === type.id && <div className="w-3 h-3 bg-[#47CCD0] rounded-full" />}
                              </div>
                            </button>
                          ))}
                       </div>
                   </div>

                   {/* Categories */}
                   <div className="space-y-4">
                       <h3 className="text-lg font-bold text-gray-900">تصنيف الأصل</h3>
                       <div className="flex flex-wrap gap-3">
                          {[
                            { id: 'real-estate', label: 'عقارات', icon: <Building2 size={18} /> },
                            { id: 'cars', label: 'مركبات', icon: <Car size={18} /> },
                            { id: 'other', label: 'أصول أخرى', icon: <Package size={18} /> },
                          ].map((cat) => (
                            <button
                              key={cat.id}
                              onClick={() => setFormData({ ...formData, category: cat.id })}
                              className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all ${
                                formData.category === cat.id
                                  ? 'border-[#40C1C7] bg-[#40C1C7] text-white shadow-lg shadow-teal-500/20'
                                  : 'border-gray-200 text-gray-600 hover:border-[#40C1C7] hover:text-[#40C1C7]'
                              }`}
                            >
                              {cat.icon}
                              <span className="font-bold text-sm">{cat.label}</span>
                            </button>
                          ))}
                       </div>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">بيانات الأصل</h2>
                <p className="text-gray-500">وصف دقيق للأصل المعروض للمزاد</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left side - Image */}
                <div className="hidden md:block">
                  <div className="relative bg-white rounded-3xl p-8">
                    <img 
                      src={personImage} 
                      alt="مستشار مزادات" 
                      className="w-full h-auto rounded-2xl"
                    />
                    <div className="mt-6 bg-gray-50 rounded-2xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#47CCD0] rounded-full flex items-center justify-center">
                          <ShieldCheck size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 text-sm">التحقق من الهوية</p>
                          <p className="text-xs text-gray-500">موثق ومعتمد من المنصة</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">عنوان المزاد</label>
                    <input 
                      type="text" 
                      placeholder="مثال: أرض تجارية حي الملقا"
                      className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 transition-all outline-none"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>

                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4 group-hover:bg-[#40C1C7] group-hover:text-white transition-all">
                      <Upload size={28} />
                    </div>
                    <h3 className="font-bold text-gray-900">صور ومستندات الأصل</h3>
                    <p className="text-gray-500 text-xs mt-1">PNG, JPG, PDF حتى 10 ميجابايت</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Pricing & Timing */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">إعدادات المزاد</h2>
                <p className="text-gray-500">حدد السعر الافتتاحي ومدة المزاد</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">السعر الافتتاحي</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 transition-all outline-none"
                      value={formData.startPrice}
                      onChange={(e) => setFormData({ ...formData, startPrice: e.target.value })}
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-bold">ر.س</div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">أقل مبلغ للمزايدة</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 transition-all outline-none"
                      value={formData.minIncrement}
                      onChange={(e) => setFormData({ ...formData, minIncrement: e.target.value })}
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-bold">ر.س</div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">تاريخ البدء</label>
                  <input 
                    type="datetime-local" 
                    className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 transition-all outline-none text-gray-600"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">تاريخ الانتهاء</label>
                  <input 
                    type="datetime-local" 
                    className="w-full h-14 bg-gray-50 border border-gray-200 rounded-xl px-4 focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 transition-all outline-none text-gray-600"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3 text-sm text-orange-800">
                <AlertCircle size={20} className="flex-shrink-0" />
                <p>سيتم تمديد وقت المزاد تلقائياً في حال وجود مزايدة في الدقائق الأخيرة لضمان العدالة.</p>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                   <ShieldCheck size={40} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">جاهز للإرسال؟</h2>
                <p className="text-gray-500">سيقوم فريقنا بمراجعة طلبك وتفعيله خلال 24 ساعة</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 space-y-3 text-sm border border-gray-100">
                <div className="flex justify-between">
                  <span className="text-gray-500">نوع المزاد</span>
                  <span className="font-bold">{formData.type === 'public' ? 'علني' : 'خاص'}</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-gray-500">الأصل</span>
                   <span className="font-bold">{formData.title}</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-gray-500">يبدأ من</span>
                   <span className="font-bold text-[#40C1C7]">{formData.startPrice} ر.س</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-4">
                <input type="checkbox" id="agree" className="w-5 h-5 text-[#40C1C7] rounded border-gray-300 focus:ring-[#40C1C7]" />
                <label htmlFor="agree" className="text-sm text-gray-600">أقر بصحة البيانات ومسؤوليتي عن الأصل المعروض</label>
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
              {currentStep === 4 ? 'إرسال طلب المزاد' : 'متابعة'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};