import React, { useState } from 'react';
import { ArrowRight, Loader2, ShieldCheck, FileText, User, ScanFace } from 'lucide-react';
import headerLogoImage from 'figma:asset/67935b978652e44c12ae5e3890df993d19556317.png';

interface NafathLoginPageProps {
  onNavigate: (page: string) => void;
  onLoginSuccess?: (data: any) => void;
}

export const NafathLoginPage: React.FC<NafathLoginPageProps> = ({ onNavigate, onLoginSuccess }) => {
  const [nationalId, setNationalId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (nationalId.length !== 10) {
      setError('رقم الهوية يجب أن يتكون من 10 أرقام');
      return;
    }

    if (!nationalId.startsWith('1') && !nationalId.startsWith('2')) {
      setError('رقم الهوية غير صحيح');
      return;
    }

    setIsLoading(true);
    // Simulate API call to Nafath
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to verification page with the random number
      onNavigate('nafath-verification');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      
      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 lg:p-16 relative order-2 lg:order-1">
        <button 
          onClick={() => onNavigate('login')} 
          className="absolute top-8 right-8 flex items-center gap-2 text-gray-500 hover:text-[#40C1C7] transition-colors"
        >
          <ArrowRight size={20} className="rotate-180" />
          <span className="font-bold">عودة</span>
        </button>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          <div className="mb-12 text-center lg:text-right">
             <img src={headerLogoImage} alt="Mzadat" className="h-12 w-auto mx-auto lg:mx-0 mb-6 object-contain filter invert opacity-0" style={{ filter: 'invert(0)' }} />
          </div>

          <div className="mb-10 text-center lg:text-right">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold mb-4 border border-green-100">
                <ShieldCheck size={14} />
                بوابة النفاذ الوطني الموحد
             </div>
             <h1 className="text-3xl font-black text-gray-900 mb-3">
               تسجيل الدخول عبر نفاذ
             </h1>
             <p className="text-gray-500 text-lg">
               أدخل رقم الهوية الوطنية أو الإقامة للمتابعة
             </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 block text-right">رقم الهوية / الإقامة</label>
              <div className="relative">
                <div className="absolute right-0 top-0 bottom-0 px-4 flex items-center justify-center text-gray-400">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  value={nationalId}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    if (val.length <= 10) setNationalId(val);
                  }}
                  placeholder="1xxxxxxxxx"
                  className={`w-full pr-12 pl-4 py-3.5 bg-white border rounded-xl focus:outline-none focus:ring-4 transition-all text-lg font-medium placeholder:text-gray-300 text-gray-900 ${
                    error ? 'border-red-300 focus:border-red-500 focus:ring-red-50' : 'border-gray-200 focus:border-[#40C1C7] focus:ring-teal-50'
                  }`}
                />
              </div>
              {error && <p className="text-red-500 text-sm font-medium mt-1">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#107055] text-white py-3.5 rounded-xl font-bold text-lg hover:bg-[#0d5c46] transition-all shadow-lg shadow-green-900/10 flex items-center justify-center gap-2"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : 'تسجيل الدخول'}
            </button>

            {/* Face ID Option */}
            <div className="text-center">
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">أو</span>
                </div>
              </div>
              
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3.5 border-2 border-[#107055]/20 rounded-xl hover:border-[#107055] hover:bg-[#107055]/5 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#107055]/10 flex items-center justify-center text-[#107055] group-hover:scale-110 transition-transform">
                  <ScanFace size={20} />
                </div>
                <span className="font-bold text-[#107055] text-lg">الدخول عبر Face ID</span>
              </button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
             <p className="text-gray-400 text-sm">
               عند تسجيل الدخول، أنت توافق على مشاركة بياناتك الأساسية من مركز المعلومات الوطني
             </p>
          </div>
        </div>
      </div>

      {/* Left Side: Nafath Branding */}
      <div className="hidden lg:block w-1/2 bg-[#107055] relative overflow-hidden order-1 lg:order-2">
         <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://www.nafath.sa/images/bg.png')] bg-cover opacity-10"></div>
             <div className="absolute inset-0 bg-gradient-to-br from-[#107055] to-[#0a4d3a]"></div>
         </div>

         <div className="relative z-10 h-full flex flex-col justify-center items-center p-16 text-white text-center">
            <div className="w-32 h-32 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-md mb-8 border border-white/20">
               <ShieldCheck size={64} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">نفاذ</h2>
            <p className="text-xl text-green-100 max-w-md leading-relaxed">
              هويتك الرقمية الموحدة للوصول إلى كافة الخدمات الحكومية والخاصة في المملكة
            </p>
         </div>
      </div>
    </div>
  );
};
