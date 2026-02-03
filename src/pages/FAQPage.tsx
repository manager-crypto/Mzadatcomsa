import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Gavel, 
  ShoppingBag, 
  Wallet, 
  User, 
  ShieldCheck 
} from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'الكل', icon: HelpCircle },
    { id: 'auctions', name: 'المزادات', icon: Gavel },
    { id: 'direct-sales', name: 'الشراء الفوري', icon: ShoppingBag },
    { id: 'payments', name: 'المدفوعات', icon: Wallet },
    { id: 'account', name: 'الحساب والأمان', icon: User },
  ];

  const faqs = [
    {
      category: 'auctions',
      question: 'كيف يمكنني المشاركة في المزاد؟',
      answer: 'للمشاركة في المزاد، يجب عليك أولاً تسجيل الدخول والتحقق من هويتك عبر نفاذ. بعد ذلك، قم بشحن محفظتك بمبلغ العربون المطلوب للمزاد. بمجرد دفع العربون، يمكنك الدخول إلى صفحة المزاد والبدء في المزايدة.'
    },
    {
      category: 'auctions',
      question: 'ماذا يحدث للعربون في حال لم أربح المزاد؟',
      answer: 'في حال لم يرس المزاد عليك، يتم استرجاع مبلغ العربون تلقائياً إلى محفظتك في التطبيق بعد انتهاء المزاد. يمكنك استخدام الرصيد في مزادات أخرى أو طلب استرداده إلى حسابك البنكي.'
    },
    {
      category: 'direct-sales',
      question: 'هل الأسعار في "شراء فوري" نهائية؟',
      answer: 'نعم، الأسعار المعروضة في قسم الشراء الفوري هي أسعار ثابتة ومحددة من قبل البائع. ومع ذلك، يمكنك التواصل مع البائع للاستفسار أو التفاوض إذا كان يقبل ذلك خارج المنصة.'
    },
    {
      category: 'payments',
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نقبل الدفع عبر مدى، البطاقات الائتمانية (Visa/Mastercard)، و Apple Pay. كما يمكنك التحويل البنكي المباشر لحساباتنا المعتمدة.'
    },
    {
      category: 'account',
      question: 'كيف يمكنني توثيق حسابي؟',
      answer: 'يتم توثيق الحساب حصرياً عبر خدمة "نفاذ" الوطنية. انتقل إلى الإعدادات > توثيق الحساب، واتبع التعليمات لتسجيل الدخول عبر نفاذ وتأكيد هويتك.'
    },
    {
      category: 'auctions',
      question: 'هل يمكنني إلغاء المزايدة بعد تقديمها؟',
      answer: 'لا، المزايدة تعتبر عقداً ملزماً ولا يمكن إلغاؤها بعد تقديمها. يرجى التأكد من رغبتك وقدرتك على الشراء قبل تقديم أي عرض.'
    },
    {
      category: 'direct-sales',
      question: 'كيف أضمن حقي عند الشراء المباشر؟',
      answer: 'ننصح دائماً بمعاينة السلعة على أرض الواقع قبل الدفع. المنصة توفر وسيلة للتواصل، ولكن إتمام الصفقة المالية وتوثيق العقود (خاصة في العقارات والسيارات) يجب أن يتم عبر القنوات الرسمية المعتمدة في المملكة.'
    },
    {
      category: 'account',
      question: 'نسيت كلمة المرور، ماذا أفعل؟',
      answer: 'يمكنك استعادة كلمة المرور من خلال صفحة تسجيل الدخول بالضغط على "نسيت كلمة المرور". سيتم إرسال رمز تحقق إلى رقم جوالك المسجل لتعيين كلمة مرور جديدة.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.includes(searchQuery) || faq.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-40">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-gray-900 mb-4">كيف يمكننا مساعدتك؟</h1>
          <div className="relative max-w-lg mx-auto">
             <input 
               type="text" 
               placeholder="ابحث عن سؤال..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-4 pr-12 py-3.5 rounded-2xl border-none shadow-md focus:ring-2 focus:ring-[#40C1C7] text-right"
             />
             <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar justify-center">
           {categories.map((cat) => (
             <button 
               key={cat.id}
               onClick={() => setActiveCategory(cat.id)}
               className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold whitespace-nowrap transition-all ${
                 activeCategory === cat.id 
                 ? 'bg-[#40C1C7] text-white shadow-lg shadow-teal-500/20' 
                 : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
               }`}
             >
               <cat.icon size={18} /> {cat.name}
             </button>
           ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
           {filteredFaqs.length > 0 ? (
             filteredFaqs.map((faq, index) => (
               <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <button 
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex items-center justify-between p-5 text-right hover:bg-gray-50 transition-colors"
                  >
                     <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                     {openQuestionIndex === index ? (
                       <ChevronUp className="text-[#40C1C7]" size={20} />
                     ) : (
                       <ChevronDown className="text-gray-400" size={20} />
                     )}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openQuestionIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                     <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                        {faq.answer}
                     </div>
                  </div>
               </div>
             ))
           ) : (
             <div className="text-center py-10">
               <HelpCircle size={48} className="mx-auto text-gray-300 mb-4" />
               <p className="text-gray-500 font-bold">لم يتم العثور على نتائج للبحث</p>
             </div>
           )}
        </div>

        <div className="mt-12 bg-[#40C1C7]/5 rounded-3xl p-8 text-center border border-[#40C1C7]/10">
           <h3 className="text-xl font-bold text-gray-900 mb-2">لم تجد إجابة لسؤالك؟</h3>
           <p className="text-gray-600 mb-6">فريق الدعم لدينا جاهز لمساعدتك في أي وقت</p>
           <button 
             onClick={() => onNavigate('support')}
             className="px-8 py-3 bg-[#40C1C7] text-white rounded-xl font-bold shadow-lg shadow-teal-500/20 hover:bg-[#35a4a9] transition-all"
           >
             تواصل معنا
           </button>
        </div>

      </div>
    </div>
  );
};