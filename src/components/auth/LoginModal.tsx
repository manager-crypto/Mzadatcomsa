import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '../ui/dialog';
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from '../ui/input-otp';
import { 
  User, 
  Loader2, 
  ArrowRight, 
  Fingerprint, 
  ScanFace, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle2,
  Cloud
} from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [step, setStep] = useState<'selection' | 'login'>('selection');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isCloudflareChecked, setIsCloudflareChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep('selection');
      setUsername('');
      setPassword('');
      setShowPassword(false);
      setIsCloudflareChecked(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password || !isCloudflareChecked) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (onLogin) onLogin();
      onClose();
    }, 1500);
  };

  const handleNafathLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (onLogin) onLogin();
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden bg-white border-none shadow-2xl rounded-3xl">
        <div className="p-8 pb-10">
          
          {step === 'selection' ? (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 py-4">
               <div className="text-center mb-10">
                 <DialogTitle className="text-gray-500 font-medium text-xl mb-1">حياك الله</DialogTitle>
                 <DialogDescription className="sr-only">اختر طريقة الدخول المناسبة لك</DialogDescription>
               </div>
               
               <div className="space-y-4">
                 <button 
                   onClick={() => setStep('login')}
                   className="w-full bg-[#40C1C7] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#35a4a9] transition-all shadow-lg shadow-teal-500/20"
                 >
                   تسجيل الدخول / إنشاء حساب
                 </button>
                 
                 <button 
                   onClick={handleNafathLogin}
                   className="w-full bg-white border-2 border-gray-100 text-gray-800 py-4 rounded-xl font-bold text-lg hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all flex items-center justify-between px-6 group"
                 >
                   <span>دخول عبر نفاذ</span>
                   <div className="flex items-center gap-2 text-gray-400 group-hover:text-[#40C1C7] transition-colors">
                     <Fingerprint size={24} strokeWidth={1.5} />
                     <ScanFace size={24} strokeWidth={1.5} />
                   </div>
                 </button>
               </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-8 duration-300">
               {/* Header Icon */}
               <div className="flex justify-center mb-6">
                 <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center rotate-45 mb-2 shadow-sm border border-gray-100">
                    <div className="-rotate-45 text-[#40C1C7]">
                      <User size={32} />
                    </div>
                 </div>
               </div>

               <div className="text-center mb-8">
                 <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">أهلاً بعودتك</DialogTitle>
                 <DialogDescription className="text-gray-500 text-sm max-w-[280px] mx-auto leading-relaxed">
                   صفقة العمر بانتظارك سجل دخولك للوصول الى احدث المزادات
                 </DialogDescription>
               </div>

               <form onSubmit={handleLoginSubmit} className="space-y-4">
                 {/* Email/Username Input */}
                 <div>
                    <label className="text-xs font-bold text-gray-700 mb-1.5 block">البريد الإلكتروني أو رقم الهوية</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 text-right focus:outline-none focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 transition-all text-sm"
                        placeholder="البريد الإلكتروني أو رقم الهوية"
                        dir="rtl"
                      />
                      <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                 </div>

                 {/* Password Input */}
                 <div>
                    <label className="text-xs font-bold text-gray-700 mb-1.5 block">كلمة المرور</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 pl-10 text-right focus:outline-none focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 transition-all text-sm font-sans"
                        placeholder="••••••••"
                        dir="rtl"
                      />
                      <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <div className="text-left mt-2">
                       <button type="button" className="text-xs text-[#40C1C7] font-bold hover:underline">هل نسيت كلمة المرور؟</button>
                    </div>
                 </div>

                 {/* Cloudflare Mock */}
                 <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="relative flex items-center justify-center">
                          <input 
                            type="checkbox" 
                            checked={isCloudflareChecked}
                            onChange={(e) => setIsCloudflareChecked(e.target.checked)}
                            className="peer w-6 h-6 border-2 border-gray-300 rounded cursor-pointer checked:bg-[#40C1C7] checked:border-[#40C1C7] transition-all appearance-none"
                          />
                          <CheckCircle2 className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" size={16} />
                       </div>
                       <span className="text-sm text-gray-700">I am human</span>
                    </div>
                    <div className="flex flex-col items-end">
                       <Cloud size={20} className="text-gray-400" />
                       <span className="text-[10px] text-gray-400">Cloudflare</span>
                    </div>
                 </div>

                 <button
                   type="submit"
                   disabled={!isCloudflareChecked || !username || !password || isLoading}
                   className="w-full bg-[#115E59] text-white py-3 rounded-xl font-bold hover:bg-[#0F504C] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-teal-900/10 flex items-center justify-center gap-2 mt-4"
                 >
                   {isLoading ? <Loader2 className="animate-spin" /> : 'تسجيل الدخول'}
                 </button>

                 <div className="text-center mt-4">
                    <span className="text-gray-500 text-xs">ليس لديك حساب؟ </span>
                    <button type="button" className="text-[#40C1C7] font-bold text-xs hover:underline">إنشاء حساب جديد</button>
                 </div>
                 
                 <div className="flex justify-center gap-4 mt-6 text-[10px] text-[#40C1C7]">
                    <a href="#" className="hover:underline">الشروط والأحكام</a>
                    <a href="#" className="hover:underline">سياسة الخصوصية</a>
                 </div>

               </form>
            </div>
          )}
          
        </div>
      </DialogContent>
    </Dialog>
  );
};
