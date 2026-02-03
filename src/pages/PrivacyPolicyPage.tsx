import React from 'react';
import { Shield, Lock, Eye, FileText, Database, Server, Globe2, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

interface PrivacyPolicyPageProps {
  onNavigate?: (page: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-36 pb-16" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center text-[#0F766E] mx-auto mb-6 shadow-sm"
          >
            <Shield size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-sans"
          >
            سياسة الخصوصية
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            نلتزم في منصة "مزادات" بأقصى معايير الشفافية والأمان في التعامل مع بياناتك، وفقاً للأنظمة المحلية والدولية.
          </motion.p>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="p-8 md:p-14 space-y-10">
            
            {/* Last Updated */}
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-8 border-b border-gray-100 pb-6">
              <span className="w-2 h-2 rounded-full bg-[#0F766E]"></span>
              آخر تحديث: 14 يناير 2026
            </div>

            {/* Section 1: Collection */}
            <section className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 mt-1">
                  <Database size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">1. جمع المعلومات والبيانات</h2>
                  <div className="text-gray-600 leading-8 space-y-3">
                    <p>نقوم بجمع البيانات الضرورية لتوثيق الحسابات وإتمام المزادات بشكل نظامي، وتشمل:</p>
                    <ul className="list-disc list-inside space-y-2 marker:text-[#0F766E]">
                      <li><span className="font-bold text-gray-800">بيانات الهوية:</span> الاسم الرباعي، رقم الهوية الوطنية أو الإقامة (للمقيمين)، أو رقم جواز السفر (لمواطني دول الخليج والدول الأخرى).</li>
                      <li><span className="font-bold text-gray-800">بيانات الاتصال:</span> رقم الجوال الموثق، البريد الإلكتروني، والعنوان الوطني.</li>
                      <li><span className="font-bold text-gray-800">البيانات المالية:</span> المعلومات البنكية اللازمة لإعادة مبالغ التأمين أو إتمام المدفوعات.</li>
                      <li><span className="font-bold text-gray-800">وثائق الكيانات:</span> السجل التجاري والتراخيص النظامية للحسابات التجارية.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div className="h-px bg-gray-100 w-full" />

            {/* Section 2: Sharing */}
            <section className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-[#0F766E] shrink-0 mt-1">
                  <Building2 size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">2. مشاركة البيانات والإفصاح</h2>
                  <div className="text-gray-600 leading-8 space-y-3">
                    <p>نلتزم بعدم مشاركة بياناتك الشخصية مع أي أطراف ثالثة لأغراض تسويقية، ونقوم بمشاركتها فقط في الحالات التالية:</p>
                    <ul className="list-disc list-inside space-y-2 marker:text-[#0F766E]">
                      <li>الامتثال للأنظمة الحكومية والقضائية في <span className="font-bold text-gray-800">المملكة العربية السعودية، ودول مجلس التعاون الخليجي</span> عند الطلب الرسمي.</li>
                      <li>مع شركاء الخدمة الموثوقين (مثل منصة "نفاذ"، وبوابات الدفع، وشركات الوساطة العقارية المرخصة) لإتمام خدمات المنصة.</li>
                      <li>الربط مع الجهات الحكومية ذات العلاقة (مثل وزارة العدل أو الهيئة العامة للعقار) لتوثيق عمليات الإفراغ العقاري.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div className="h-px bg-gray-100 w-full" />

            {/* Section 3: Cross Border (New) */}
            <section className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 mt-1">
                  <Globe2 size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">3. نقل البيانات عبر الحدود</h2>
                  <div className="text-gray-600 leading-8 space-y-3">
                    <p>
                      نظراً لطبيعة خدماتنا التي قد تشمل مستخدمين ومستثمرين دوليين، قد تتم معالجة بعض البيانات أو الوصول إليها من خارج المملكة:
                    </p>
                    <ul className="list-disc list-inside space-y-2 marker:text-[#0F766E]">
                      <li>
                        <span className="font-bold text-gray-800">دول مجلس التعاون الخليجي:</span> يتم تبادل البيانات الضرورية لإتمام الصفقات العقارية العابرة للحدود وفقاً للاتفاقيات الخليجية المشتركة.
                      </li>
                      <li>
                        <span className="font-bold text-gray-800">المعايير العالمية:</span> في حال نقل البيانات إلى خوادم أو جهات معالجة دولية، نلتزم بتطبيق معايير حماية بيانات صارمة تتماشى مع نظام حماية البيانات الشخصية السعودي (PDPL) والأنظمة الدولية المماثلة.
                      </li>
                      <li>
                        يتم تخزين البيانات الأساسية بشكل سيادي داخل خوادم في المملكة العربية السعودية لضمان أقصى درجات الأمان.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div className="h-px bg-gray-100 w-full" />

            {/* Section 4: Security */}
            <section className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0 mt-1">
                  <Lock size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">4. أمن المعلومات</h2>
                  <div className="text-gray-600 leading-8">
                    <p>
                      نستخدم أحدث تقنيات التشفير (SSL/TLS) وبروتوكولات الأمان السيبراني المعتمدة لحماية بياناتك من الاختراق أو التسريب. تخضع أنظمتنا لفحوصات دورية لضمان سلامة البنية التحتية الرقمية.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Footer */}
            <div className="bg-[#0F766E]/5 rounded-3xl p-8 mt-4 border border-[#0F766E]/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">هل لديك استفسار حول خصوصيتك؟</h3>
                  <p className="text-gray-600">فريق حماية البيانات لدينا جاهز للرد على جميع تساؤلاتك.</p>
                </div>
                <button 
                  onClick={() => onNavigate && onNavigate('support')}
                  className="bg-[#0F766E] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0d655e] transition-all shadow-lg shadow-teal-900/10 active:scale-95 whitespace-nowrap"
                >
                  تواصل معنا
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};