import React from 'react';
import { FileText, Gavel, AlertCircle, CreditCard, Users, Scale } from 'lucide-react';
import { motion } from 'motion/react';

interface TermsPageProps {
  onNavigate?: (page: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-36 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-[#40C1C7] mx-auto mb-4"
          >
            <FileText size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            الشروط والأحكام
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            تنظم هذه الشروط استخدامك لمنصة "مزادات". يرجى قراءتها بعناية قبل البدء في استخدام خدماتنا.
          </motion.p>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="p-8 md:p-12 space-y-8">
            
            {/* Last Updated */}
            <div className="text-sm text-gray-400 mb-8 border-b border-gray-100 pb-4">
              آخر تحديث: 21 ديسمبر 2024
            </div>

            {/* Section 1 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <FileText size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">1. مقدمة</h2>
              </div>
              <div className="pr-14 text-gray-600 space-y-2 leading-relaxed">
                <p>
                  تعد هذه الشروط والأحكام اتفاقية ملزمة قانوناً بينك (المستخدم) وبين منصة "مزادات". من خلال الوصول إلى المنصة أو استخدامها، فإنك توافق على الالتزام بهذه الشروط.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                  <Users size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">2. التسجيل والحسابات</h2>
              </div>
              <div className="pr-14 text-gray-600 space-y-2 leading-relaxed">
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>يجب أن يكون عمرك 18 عاماً على الأقل للتسجيل واستخدام المنصة.</li>
                  <li>يجب تقديم معلومات دقيقة وصحيحة وكاملة أثناء عملية التسجيل.</li>
                  <li>أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور.</li>
                  <li>تحتفظ المنصة بالحق في تعليق أو إنهاء حسابك إذا تم انتهاك أي من هذه الشروط.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                  <Gavel size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">3. قواعد المزادات</h2>
              </div>
              <div className="pr-14 text-gray-600 space-y-2 leading-relaxed">
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>تعتبر جميع المزايدات ملزمة قانوناً ولا يمكن التراجع عنها.</li>
                  <li>يجب إيداع مبلغ التأمين المطلوب قبل المشاركة في المزاد.</li>
                  <li>يتم ترسية المزاد على صاحب أعلى عطاء عند انتهاء الوقت المحدد، شريطة وصول السعر للحد الأدنى (إن وجد).</li>
                  <li>تحتفظ المنصة بالحق في تمديد وقت المزاد في حال تقديم عطاء في اللحظات الأخيرة.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                  <CreditCard size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">4. الدفع والرسوم</h2>
              </div>
              <div className="pr-14 text-gray-600 space-y-2 leading-relaxed">
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>يجب على الفائز بالمزاد إتمام عملية الدفع خلال المدة المحددة في تفاصيل المزاد.</li>
                  <li>قد تفرض المنصة رسوم خدمة أو عمولة على عمليات البيع والشراء، وتكون موضحة بوضوح قبل إتمام العملية.</li>
                  <li>في حال عدم السداد، يحق للمنصة مصادرة مبلغ التأمين واتخاذ الإجراءات القانونية اللازمة.</li>
                </ul>
              </div>
            </section>

             {/* Section 5 */}
             <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                  <AlertCircle size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">5. إخلاء المسؤولية</h2>
              </div>
              <div className="pr-14 text-gray-600 space-y-2 leading-relaxed">
                <p>
                  منصة "مزادات" هي وسيط لعرض المزادات، ولا تضمن دقة أو جودة المعروضات بشكل كامل، على الرغم من حرصنا على التحقق. تقع مسؤولية المعاينة والتحقق من حالة المعروضات على عاتق المشتري قبل المزايدة.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-[#40C1C7]">
                  <Scale size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">6. القانون الواجب التطبيق</h2>
              </div>
              <div className="pr-14 text-gray-600 space-y-2 leading-relaxed">
                <p>
                  تخضع هذه الشروط والأحكام وتفسر وفقاً لأنظمة المملكة العربية السعودية. تختص محاكم المملكة بالفصل في أي نزاع ينشأ عن استخدام المنصة.
                </p>
              </div>
            </section>

            {/* Contact */}
            <div className="bg-gray-50 rounded-2xl p-6 mt-8 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">هل لديك أسئلة حول الشروط؟</h3>
              <p className="text-gray-600 mb-4 text-sm">فريقنا القانوني وخدمة العملاء في خدمتك.</p>
              <button onClick={() => onNavigate && onNavigate('support')} className="text-[#40C1C7] font-bold hover:underline">
                تواصل مع الدعم
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};
