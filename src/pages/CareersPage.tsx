import React from 'react';
import { ArrowLeft, Briefcase, Users, MapPin, CheckCircle2, TrendingUp, DollarSign, Heart } from 'lucide-react';

export const CareersPage = () => {
  const jobs = [
    {
      title: "مسوق عقاري",
      department: "المبيعات",
      location: "الرياض",
      type: "دوام كامل",
      posted: "منذ يومين"
    },
    {
      title: "أخصائي تقييم عقاري",
      department: "التقييم",
      location: "جدة",
      type: "دوام كامل",
      posted: "منذ أسبوع"
    },
    {
      title: "مطوّر واجهات أمامية (React)",
      department: "التقنية",
      location: "عن بعد",
      type: "دوام كامل",
      posted: "منذ 3 أيام"
    },
    {
      title: "مدير علاقات عملاء",
      department: "خدمة العملاء",
      location: "الدمام",
      type: "دوام كامل",
      posted: "منذ 5 أيام"
    }
  ];

  const benefits = [
    { icon: DollarSign, title: "رواتب تنافسية", desc: "نقدم حزم رواتب ومكافآت مجزية تناسب خبراتك." },
    { icon: TrendingUp, title: "تطور وظيفي", desc: "مسار وظيفي واضح وفرص للترقي والتطوير المستمر." },
    { icon: Heart, title: "تأمين طبي", desc: "تأمين طبي شامل لك ولأفراد عائلتك." },
    { icon: Users, title: "بيئة عمل محفزة", desc: "فريق عمل متعاون وثقافة شركة تدعم الإبداع." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-36 pb-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#40C1C7] font-bold tracking-wider uppercase mb-2 block">انضم لفريقنا</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">ابنِ مستقبلك مع مزادات</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            نبحث دائماً عن المواهب الشغوفة والطموحة لتنضم إلى فريقنا وتساهم في رحلة نجاحنا في تطوير القطاع العقاري.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 text-[#40C1C7] rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-500">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-20">
           <div className="p-8 border-b border-gray-100 flex justify-between items-center">
             <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
               <Briefcase className="text-[#40C1C7]" /> الوظائف المتاحة
             </h2>
             <button className="text-[#40C1C7] font-bold text-sm hover:underline">عرض جميع الوظائف</button>
           </div>
           
           <div className="divide-y divide-gray-100">
             {jobs.map((job, idx) => (
               <div key={idx} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50 transition-colors group cursor-pointer">
                 <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#40C1C7] transition-colors">{job.title}</h3>
                   <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                     <span className="flex items-center gap-1"><Briefcase size={14}/> {job.department}</span>
                     <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                     <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{job.type}</span>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <span className="text-xs text-gray-400">{job.posted}</span>
                   <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2 rounded-lg font-bold hover:bg-[#40C1C7] hover:border-[#40C1C7] hover:text-white transition-all">
                     قدم الآن
                   </button>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* CTA */}
        <div className="bg-[#40C1C7] rounded-3xl p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="text-3xl font-bold mb-4">لم تجد الوظيفة المناسبة؟</h2>
             <p className="text-teal-50 mb-8 text-lg">
               لا تتردد في إرسال سيرتك الذاتية وسنقوم بالتواصل معك في حال توفر شواغر تناسب مؤهلاتك.
             </p>
             <button className="bg-white text-[#40C1C7] px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg shadow-black/5">
               أرسل سيرتك الذاتية
             </button>
           </div>
        </div>

      </div>
    </div>
  );
};
