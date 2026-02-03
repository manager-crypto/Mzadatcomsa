import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface AddAdIntroPageProps {
  onNavigate: (page: string) => void;
  onOpenLogin: () => void;
  mode?: 'ad' | 'auction' | 'transaction';
}

export const AddAdIntroPage: React.FC<AddAdIntroPageProps> = ({ onNavigate, onOpenLogin, mode = 'ad' }) => {
  const getMessage = () => {
    switch (mode) {
      case 'auction':
        return 'لإضافة مزاد جديد وضمان موثوقية المنصة، يلزم التحقق من هويتك وتوثيق حسابك عبر النفاذ الوطني الموحد.';
      case 'transaction':
        return 'لإتمام هذه المعاملة وضمان حقوق جميع الأطراف، يلزم التحقق من هويتك وتوثيق حسابك عبر النفاذ الوطني الموحد.';
      default:
        return 'لإضافة إعلان جديد وضمان موثوقية المنصة، يلزم التحقق من هويتك وتوثيق حسابك عبر النفاذ الوطني الموحد.';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 pt-36" dir="rtl">
       <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 max-w-md w-full text-center animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 border-4 border-green-100">
             <ShieldCheck size={48} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">التحقق من الهوية</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            {getMessage()}
          </p>
          
          <button 
            onClick={onOpenLogin}
            className="w-full bg-[#2B9268] text-white py-4 rounded-xl font-bold text-xl hover:bg-[#237a56] transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-3 group relative overflow-hidden mb-4"
          >
             <span>تسجيل الدخول عبر نفاذ</span>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>
          
          <button 
             onClick={() => onNavigate('home')}
             className="text-gray-400 text-sm hover:text-gray-600 transition-colors flex items-center justify-center gap-1"
          >
             العودة للرئيسية
          </button>
       </div>
       
       <div className="mt-8 flex items-center gap-2 text-gray-400 text-xs">
          <ShieldCheck size={12} />
          <span>بياناتك محمية ومشفرة وفق أعلى معايير الأمان</span>
       </div>
    </div>
  );
};