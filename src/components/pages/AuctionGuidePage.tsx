import React from 'react';
import { 
  ShieldCheck, 
  Gavel, 
  Wallet, 
  FileCheck, 
  UserCheck, 
  ArrowLeft, 
  BookOpen, 
  AlertCircle 
} from 'lucide-react';

interface AuctionGuidePageProps {
  onNavigate?: (page: string) => void;
}

export const AuctionGuidePage: React.FC<AuctionGuidePageProps> = ({ onNavigate }) => {
  const steps = [
    {
      id: 1,
      title: "التسجيل والتحقق",
      desc: "يجب تسجيل الدخول والتحقق من الهوية عبر بوابة 'نفاذ' الوطنية لضمان موثوقية جميع الأطراف.",
      icon: <UserCheck size={24} />,
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      id: 2,
      title: "شحن المحفظة (العربون)",
      desc: "يلزم شحن المحفظة بمبلغ العربون المحدد للمزاد (عادة نسبة من السعر الافتتاحي) لضمان جدية المزايدة.",
      icon: <Wallet size={24} />,
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      id: 3,
      title: "المشاركة في المزاد",
      desc: "يمكنك تقديم عروضك يدوياً أو استخدام 'المزايد الذكي' لرفع السعر تلقائياً بحدود تحددها مسبقاً.",
      icon: <Gavel size={24} />,
      color: "bg-[#40C1C7]/10 text-[#40C1C7] border-[#40C1C7]/20"
    },
    {
      id: 4,
      title: "الترسية والسداد",
      desc: "عند انتهاء الوقت ورسو المزاد عليك، يتم إصدار فاتورة لإكمال بقية المبلغ خلال المهلة المحددة.",
      icon: <FileCheck size={24} />,
      color: "bg-green-50 text-green-600 border-green-100"
    },
    {
      id: 5,
      title: "الإفراغ واستلام الأصل",
      desc: "بعد سداد كامل المبلغ، يتم التنسيق لإفراغ العقار أو نقل ملكية المركبة واستلام الأصل.",
      icon: <ShieldCheck size={24} />,
      color: "bg-orange-50 text-orange-600 border-orange-100"
    }
  ];

  const terms = [
    "يجب أن يكون المزايد كامل الأهلية المعتبرة شرعاً وقانوناً.",
    "يعتبر دخول المستخدم في المزاد إقراراً منه بمعاينة الأصل المعروض المعاينة النافية للجهالة.",
    "العربون المدفوع يعتبر جزءاً من ثمن السلعة في حال الترسية، ويسترد في حال عدم الترسية (مخصوماً منه الرسوم البنكية إن وجدت).",
    "في حال عدم السداد خلال الفترة المحددة بعد الترسية، يحق للمنصة مصادرة العربون وإعادة عرض الأصل للمزاد.",
    "تخضع جميع عمليات البيع والشراء للأنظمة واللوائح المعمول بها في المملكة العربية السعودية.",
    "المنصة تضمن سرية بيانات المزايدين وللمزايد الحق في الدخول في المزايدة بأسمه الحقيقي أو الحركي.",
    "يتم تمديد وقت المزاد تلقائياً لمدة (5 دقائق) في حال وجود مزايدة في الدقائق الأخيرة لتحقيق العدالة."
  ];

  return (
    <div className="pt-36 pb-20 min-h-screen bg-[#F8FAFC]" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
              onClick={() => onNavigate?.('home')}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#40C1C7] hover:border-[#40C1C7] transition-all shadow-sm"
          >
              <ArrowLeft size={22} />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">دليل المزايدة والشروط</h1>
            <p className="text-gray-500 mt-1">تعرف على آلية المشاركة في المزادات والقواعد المنظمة لها</p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-8 animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
             <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#40C1C7]">
               <BookOpen size={20} />
             </div>
             <h2 className="text-xl font-bold text-gray-900">كيف تشارك في المزاد؟</h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-8 right-8 bottom-8 w-0.5 bg-gray-100 hidden md:block"></div>

            <div className="space-y-8 relative">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col md:flex-row gap-6 relative">
                  {/* Icon Bubble */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 z-10 border-2 shadow-sm ${step.color} bg-white`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-xs flex items-center justify-center font-mono">
                        {index + 1}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm bg-gray-50 p-4 rounded-xl border border-gray-100">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terms Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
               <AlertCircle size={20} />
             </div>
             <h2 className="text-xl font-bold text-gray-900">الشروط والأحكام العامة</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <ul className="space-y-4">
              {terms.map((term, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#40C1C7] mt-2 flex-shrink-0"></span>
                  {term}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-400">
                * تطبق الشروط والأحكام الخاصة بكل مزاد على حدة، يرجى مراجعة تفاصيل كل صفقة قبل المزايدة.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => onNavigate?.('auctions')}
              className="px-8 py-3 bg-[#40C1C7] text-white rounded-xl font-bold hover:bg-[#3bb1b7] transition-all shadow-lg shadow-teal-500/20"
            >
              تصفح المزادات الحالية
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
