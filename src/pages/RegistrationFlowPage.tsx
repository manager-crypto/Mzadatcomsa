import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  CreditCard, 
  Smartphone,
  Fingerprint,
  Wallet,
  AlertCircle
} from 'lucide-react';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';

interface RegistrationFlowPageProps {
  onNavigate?: (page: string) => void;
}

export const RegistrationFlowPage: React.FC<RegistrationFlowPageProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  // Constants
  const depositAmount = 100000;
  
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Complete
      alert('تم التسجيل ودفع العربون بنجاح!');
      onNavigate?.('wallet');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      onNavigate?.('register-now');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto focus next
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="pt-36 pb-20 min-h-screen bg-[#F8FAFC]" dir="rtl">
      <div className="container mx-auto px-4 max-w-2xl">
        
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
          <h1 className="text-2xl font-bold text-gray-900">إتمام التسجيل</h1>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-8">
          <div className="relative flex justify-between px-4">
            {/* Progress Bar Line */}
            <div className="absolute top-[22px] left-10 right-10 h-[3px] bg-gray-100 -z-0">
               <div 
                 className="h-full bg-[#40C1C7] transition-all duration-500 ease-out"
                 style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
               ></div>
            </div>

            {/* Steps */}
            {[
              { id: 1, label: 'البيانات الشخصية', icon: <UserStepIcon active={currentStep >= 1} /> },
              { id: 2, label: 'التحقق', icon: <OtpStepIcon active={currentStep >= 2} /> },
              { id: 3, label: 'دفع العربون', icon: <PaymentStepIcon active={currentStep >= 3} /> },
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
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[500px] flex flex-col">
          
          {/* Step 1: Personal Info */}
          {currentStep === 1 && (
            <div className="space-y-8 flex-1 flex flex-col justify-center">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-teal-50/50 rounded-3xl flex items-center justify-center text-[#40C1C7] mx-auto mb-6">
                  <Smartphone size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">تسجيل الدخول / إنشاء حساب</h2>
                <p className="text-gray-500">الرجاء إدخال رقم الجوال للمتابعة</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">رقم الجوال</label>
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="5XXXXXXXX" 
                    className="w-full h-16 bg-[#F9FAFB] border border-gray-200 rounded-2xl px-4 text-left font-mono text-xl focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 transition-all outline-none placeholder:text-gray-300 text-gray-900"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    dir="ltr"
                  />
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center gap-3 border-l border-gray-200 pl-4 py-1">
                    <span className="font-bold text-gray-900 text-lg dir-ltr">+966</span>
                    <img src="https://flagcdn.com/w40/sa.png" alt="SA" className="w-8 rounded-md shadow-sm" />
                  </div>
                </div>
              </div>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-gray-400 font-medium">أو</span>
                </div>
              </div>

              <button className="w-full h-16 bg-[#1e293b] text-white rounded-2xl font-bold hover:bg-[#0f172a] transition-all flex items-center justify-center gap-3 shadow-lg shadow-gray-900/10 active:scale-[0.99]">
                 <Fingerprint size={24} />
                 <span className="text-lg">تسجيل الدخول عبر نفاذ</span>
              </button>

              <div className="mt-4">
                 <button 
                   onClick={handleNext}
                   className="w-full h-16 bg-[#40C1C7] text-white rounded-2xl font-bold text-lg hover:bg-[#3bb1b7] transition-all shadow-lg shadow-teal-500/20 active:scale-[0.99]"
                 >
                   متابعة
                 </button>
              </div>
            </div>
          )}

          {/* Step 2: OTP */}
          {currentStep === 2 && (
            <div className="space-y-8 flex-1 flex flex-col justify-center">
               <div className="text-center mb-4">
                <div className="w-20 h-20 bg-teal-50/50 rounded-3xl flex items-center justify-center text-[#40C1C7] mx-auto mb-6">
                  <ShieldCheck size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">التحقق من الرقم</h2>
                <p className="text-gray-500 text-lg">
                  تم إرسال رمز التحقق إلى الرقم 
                  <br/>
                  <span className="font-mono text-gray-900 font-bold mt-2 inline-block dir-ltr text-xl" dir="ltr">+966 {phoneNumber || '5XXXXXXXX'}</span>
                </p>
              </div>

              <div className="flex justify-center gap-4 my-6" dir="ltr">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    className="w-20 h-20 bg-[#F9FAFB] border border-gray-200 rounded-2xl text-center text-3xl font-bold text-gray-900 focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 transition-all outline-none"
                  />
                ))}
              </div>

              <div className="text-center text-gray-500 text-lg">
                لم يصلك الرمز؟ <button className="text-[#40C1C7] font-bold hover:underline">إعادة إرسال</button> <span className="font-mono">(00:45)</span>
              </div>

              <div className="mt-8">
                 <button 
                   onClick={handleNext}
                   className="w-full h-16 bg-[#40C1C7] text-white rounded-2xl font-bold text-lg hover:bg-[#3bb1b7] transition-all shadow-lg shadow-teal-500/20 active:scale-[0.99]"
                 >
                   تحقق
                 </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <div className="space-y-8 flex-1 flex flex-col justify-center">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-teal-50/50 rounded-3xl flex items-center justify-center text-[#40C1C7] mx-auto mb-6">
                  <Wallet size={40} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">دفع مبلغ العربون</h2>
                <p className="text-gray-500">لإتمام عملية التسجيل في المزاد، يجب دفع مبلغ الضمان</p>
              </div>

              {/* Amount Card */}
              <div className="bg-[#F0FDFA] border border-[#CCFBF1] rounded-3xl p-8 text-center mb-2">
                <p className="text-teal-800 font-bold mb-4">المبلغ المستحق للدفع</p>
                <div className="flex items-center justify-center gap-3 text-5xl font-bold text-[#40C1C7] font-mono tracking-tight">
                  {depositAmount.toLocaleString()} <img src={sarCurrency} alt="SAR" className="w-8 opacity-80 grayscale" />
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-4">اختر وسيلة الدفع</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setSelectedPayment('apple')}
                    className={`h-20 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 transition-all ${selectedPayment === 'apple' ? 'border-[#40C1C7] bg-teal-50/30 ring-2 ring-[#40C1C7]/20' : 'border-gray-100 bg-[#F9FAFB] hover:border-gray-300'}`}
                  >
                     <span className="font-bold tracking-tight text-xl"> Pay</span>
                  </button>
                  <button 
                    onClick={() => setSelectedPayment('card')}
                    className={`h-20 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 transition-all ${selectedPayment === 'card' ? 'border-[#40C1C7] bg-teal-50/30 ring-2 ring-[#40C1C7]/20' : 'border-gray-100 bg-[#F9FAFB] hover:border-gray-300'}`}
                  >
                     <div className="flex items-center gap-2">
                        <CreditCard size={20} />
                        <span className="text-sm font-bold">بطاقة بنكية</span>
                     </div>
                  </button>
                </div>
              </div>

              {/* Secure Badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400 py-2">
                <ShieldCheck size={16} className="text-[#40C1C7]" />
                <span>عملية دفع آمنة ومشفرة 100%</span>
              </div>

              <div className="mt-4">
                 <button 
                   onClick={handleNext}
                   disabled={!selectedPayment}
                   className="w-full h-16 bg-[#40C1C7] text-white rounded-2xl font-bold text-lg hover:bg-[#3bb1b7] transition-all shadow-lg shadow-teal-500/20 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
                 >
                   إتمام الدفع وتسجيل الرغبة
                 </button>
              </div>
            </div>
          )}
        
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-400 font-medium">
           جميع الحقوق محفوظة لمنصة مزادات © 2024
        </div>

      </div>
    </div>
  );
};

// Helper Icons
const UserStepIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const OtpStepIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const PaymentStepIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);
