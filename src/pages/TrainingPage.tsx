import React from 'react';
import { ArrowLeft, BookOpen, Award, Users, Calendar, CheckCircle2 } from 'lucide-react';

export const TrainingPage = () => {
  const courses = [
    {
      title: "دورة التسويق العقاري المحترف",
      date: "15 أكتوبر 2025",
      duration: "3 أيام",
      level: "مبتدئ",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "أساسيات التقييم العقاري",
      date: "22 أكتوبر 2025",
      duration: "5 أيام",
      level: "متوسط",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "إدارة الأملاك والمرافق",
      date: "1 نوفمبر 2025",
      duration: "يومان",
      level: "متقدم",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-36 pb-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#40C1C7] font-bold tracking-wider uppercase mb-2 block">أكاديمية مزادات</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">التدريب والتطوير العقاري</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            نقدم برامج تدريبية متخصصة تهدف إلى رفع كفاءة العاملين في القطاع العقاري وتزويدهم بالمهارات اللازمة للنجاح.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center group hover:border-[#40C1C7] transition-all">
            <div className="w-16 h-16 bg-teal-50 text-[#40C1C7] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <BookOpen size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">+50</h3>
            <p className="text-gray-500">دورة تدريبية</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center group hover:border-[#40C1C7] transition-all">
            <div className="w-16 h-16 bg-teal-50 text-[#40C1C7] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Users size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">+2000</h3>
            <p className="text-gray-500">متدرب خريج</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center group hover:border-[#40C1C7] transition-all">
            <div className="w-16 h-16 bg-teal-50 text-[#40C1C7] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Award size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-500">شهادات معتمدة</p>
          </div>
        </div>

        {/* Upcoming Courses */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <Calendar className="text-[#40C1C7]" /> الدورات القادمة
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                 <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                 <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1 rounded-full z-20">
                   {course.level}
                 </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#40C1C7] transition-colors">{course.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} className="text-[#40C1C7]" />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={16} className="text-[#40C1C7]" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <button className="w-full py-3 border border-[#40C1C7] text-[#40C1C7] rounded-xl font-bold hover:bg-[#40C1C7] hover:text-white transition-all flex items-center justify-center gap-2">
                  سجل الآن <ArrowLeft size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-[#111] text-white rounded-3xl p-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#40C1C7] rounded-full blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
           
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl font-bold mb-6">لماذا تختار أكاديمية مزادات؟</h2>
               <div className="space-y-4">
                 {[
                   "مدربين معتمدين ذوي خبرة عملية في السوق العقاري",
                   "مناهج تدريبية حديثة تواكب تطورات السوق",
                   "شهادات معتمدة تعزز مسارك المهني",
                   "ورش عمل تطبيقية وزيارات ميدانية"
                 ].map((feature, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-[#40C1C7]/20 flex items-center justify-center text-[#40C1C7]">
                       <CheckCircle2 size={14} />
                     </div>
                     <span className="text-gray-300">{feature}</span>
                   </div>
                 ))}
               </div>
               <button className="mt-8 bg-[#40C1C7] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#35a4a9] transition-colors">
                 تواصل معنا للمزيد
               </button>
             </div>
             <div className="relative h-[400px] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop" 
                  alt="Training Session" 
                  className="w-full h-full object-cover opacity-80"
                />
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

// Helper Icon
const Clock = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
