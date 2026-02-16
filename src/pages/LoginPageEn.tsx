import React, { useState } from 'react';
import { 
  Eye, 
  EyeOff, 
  Loader2, 
  CheckCircle2
} from 'lucide-react';

interface LoginPageEnProps {
  onNavigate: (page: string) => void;
  onLogin?: () => void;
}

export const LoginPageEn: React.FC<LoginPageEnProps> = ({ onNavigate, onLogin }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !password || !isCaptchaVerified) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin?.();
      onNavigate('home-en');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans" dir="ltr" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-12 lg:py-0 bg-white order-1 lg:order-1">
        <div className="w-full max-w-md mx-auto">
          
          {/* Logo */}
          <div className="flex justify-center mb-8 lg:mb-12">
            <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center transform rotate-45 overflow-hidden">
               <div className="transform -rotate-45 font-bold text-[#0F766E] text-2xl">
                 {/* Placeholder Logo Icon */}
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10">
                   <path d="M3 21h18M5 21V7l8-4 8 4v14" />
                 </svg>
               </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Welcome Back</h1>
            <p className="text-gray-500 text-lg">The deal of a lifetime awaits. Sign in to access the latest auctions.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Identifier Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 block text-left">Email or ID Number</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full h-14 bg-gray-50 border border-gray-200 rounded-lg px-4 text-left text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all placeholder:text-gray-400"
                  placeholder="Email or ID Number"
                />
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700">Password</label>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-14 bg-gray-50 border border-gray-200 rounded-lg px-4 text-left text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all placeholder:text-gray-400"
                  placeholder="Password"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
               <button type="button" className="text-[#0F766E] text-sm font-bold hover:underline">
                 Forgot Password?
               </button>
            </div>

            {/* Cloudflare Captcha Mock */}
            <div className="bg-[#f9f9f9] border border-[#e0e0e0] rounded-lg p-3 flex items-center justify-between shadow-sm cursor-pointer select-none" onClick={() => setIsCaptchaVerified(true)}>
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${isCaptchaVerified ? 'bg-[#0F766E] border-[#0F766E]' : 'bg-white border-gray-300'}`}>
                   {isCaptchaVerified && <CheckCircle2 size={16} className="text-white" />}
                </div>
                <span className="text-sm text-gray-700">I am human</span>
              </div>
              <div className="flex flex-col items-end">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cloudflare_Logo.svg/1200px-Cloudflare_Logo.svg.png" alt="Cloudflare" className="h-3 opacity-50 mb-0.5" />
                 <span className="text-[10px] text-gray-400">Privacy - Terms</span>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={!identifier || !password || !isCaptchaVerified || isLoading}
              className="w-full h-14 bg-[#0F766E] text-white rounded-lg font-bold hover:bg-[#0d655e] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-teal-900/10 flex items-center justify-center gap-2"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : 'Log In'}
            </button>

            {/* Sign Up Link */}
            <div className="text-center pt-2">
               <span className="text-gray-400 text-sm">Don't have an account? </span>
               <button 
                 type="button" 
                 onClick={() => onNavigate('signup-en')} 
                 className="text-gray-400 hover:text-[#0F766E] font-bold text-sm transition-colors"
               >
                 Create new account
               </button>
            </div>
            
            {/* Footer Links */}
            <div className="flex justify-center gap-6 pt-12 text-sm text-[#0F766E] font-bold opacity-80">
              <button onClick={() => onNavigate('privacy-policy')} type="button" className="hover:opacity-100 transition-opacity">Privacy Policy</button>
              <button onClick={() => onNavigate('terms')} type="button" className="hover:opacity-100 transition-opacity">Terms & Conditions</button>
            </div>

          </form>
        </div>
      </div>

      {/* Left Side: Image (Hidden on Mobile) */}
      <div className="hidden lg:block w-1/2 relative order-2 lg:order-2">
        <div className="absolute inset-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1694018359679-49465b4c0d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbCUyMEZhaXNhbGlhaCUyMFRvd2VyJTIwUml5YWRoJTIwdmVydGljYWwlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc2ODMyODcxOXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Al Faisaliah Tower" 
            className="w-full h-full object-cover opacity-90"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        {/* Language Switcher */}
        <div className="absolute top-8 right-8 z-10">
           <button 
             onClick={() => onNavigate('login')}
             className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-white/30 transition-all font-sans"
           >
             العربية
           </button>
        </div>
      </div>

    </div>
  );
};
