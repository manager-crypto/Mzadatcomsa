import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  FileText, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Search
} from 'lucide-react';

interface SupportPageProps {
  onNavigate: (page: string) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onNavigate }) => {
  const [ticketStep, setTicketStep] = useState(1); // 1: Form, 2: Success
  const [activeTab, setActiveTab] = useState('new-ticket'); // 'new-ticket' or 'track-ticket'
  const [ticketId, setTicketId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setTicketStep(2);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-40">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-gray-900 mb-2">مركز الدعم والشكاوي</h1>
          <p className="text-gray-500">نحن هنا لمساعدتك وحل جميع المشاكل التي قد تواجهك</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:border-[#40C1C7] transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                 <Phone size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">اتصل بنا</h3>
              <p className="text-sm text-gray-400 mb-3">متاح يومياً من 8 ص - 10 م</p>
              <a href="tel:920000000" className="text-blue-600 font-bold font-mono text-lg" dir="ltr">9200 00000</a>
           </div>

           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:border-[#40C1C7] transition-all group">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                 <MessageCircle size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">واتساب</h3>
              <p className="text-sm text-gray-400 mb-3">رد فوري خلال ساعات العمل</p>
              <a href="#" className="text-green-600 font-bold font-mono text-lg" dir="ltr">+966 55 123 4567</a>
           </div>

           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:border-[#40C1C7] transition-all group">
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                 <Mail size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h3>
              <p className="text-sm text-gray-400 mb-3">سنرد عليك خلال 24 ساعة</p>
              <a href="mailto:support@mzadat.sa" className="text-orange-600 font-bold font-mono text-lg">support@mzadat.sa</a>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
           {/* Tabs */}
           <div className="flex border-b border-gray-100">
              <button 
                onClick={() => setActiveTab('new-ticket')}
                className={`flex-1 py-4 text-center font-bold text-sm flex items-center justify-center gap-2 transition-colors ${activeTab === 'new-ticket' ? 'text-[#40C1C7] bg-teal-50 border-b-2 border-[#40C1C7]' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                 <FileText size={18} /> فتح تذكرة جديدة
              </button>
              <button 
                onClick={() => setActiveTab('track-ticket')}
                className={`flex-1 py-4 text-center font-bold text-sm flex items-center justify-center gap-2 transition-colors ${activeTab === 'track-ticket' ? 'text-[#40C1C7] bg-teal-50 border-b-2 border-[#40C1C7]' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                 <Search size={18} /> متابعة تذكرة سابقة
              </button>
           </div>

           <div className="p-6 md:p-10">
              
              {/* New Ticket Form */}
              {activeTab === 'new-ticket' && (
                 <>
                   {ticketStep === 1 ? (
                     <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-700">الاسم الكامل</label>
                              <input 
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none transition-all"
                                placeholder="ادخل اسمك هنا"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-700">رقم الجوال</label>
                              <input 
                                required
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                type="tel" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none transition-all text-left"
                                placeholder="05xxxxxxxx"
                                dir="ltr"
                              />
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-700">البريد الإلكتروني</label>
                              <input 
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none transition-all text-left"
                                placeholder="example@mail.com"
                                dir="ltr"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-700">نوع المشكلة</label>
                              <select 
                                required
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none transition-all bg-white"
                              >
                                 <option value="">اختر التصنيف</option>
                                 <option value="auction">مشكلة في المزاد</option>
                                 <option value="payment">مشكلة في الدفع / المحفظة</option>
                                 <option value="account">مشكلة في الحساب / الدخول</option>
                                 <option value="complaint">شكوى على بائع / مستخدم</option>
                                 <option value="other">استفسار عام</option>
                              </select>
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">عنوان الموضوع</label>
                           <input 
                             required
                             name="subject"
                             value={formData.subject}
                             onChange={handleChange}
                             type="text" 
                             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none transition-all"
                             placeholder="اكتب عنواناً مختصراً للمشكلة"
                           />
                        </div>

                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">تفاصيل المشكلة</label>
                           <textarea 
                             required
                             name="description"
                             value={formData.description}
                             onChange={handleChange}
                             rows={5}
                             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none transition-all resize-none"
                             placeholder="اشرح المشكلة بالتفصيل..."
                           ></textarea>
                        </div>

                        <div className="border border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                           <Paperclip className="mx-auto text-gray-400 mb-2" />
                           <p className="text-sm text-gray-500">ارفق صور أو مستندات (اخت��اري)</p>
                           <p className="text-xs text-gray-400 mt-1">PNG, JPG, PDF بحد أقصى 5MB</p>
                        </div>

                        <button type="submit" className="w-full py-4 bg-[#40C1C7] text-white rounded-xl font-bold shadow-lg shadow-teal-500/20 hover:bg-[#35a4a9] transition-all flex items-center justify-center gap-2 text-lg">
                           <Send size={20} />
                           إرسال التذكرة
                        </button>
                     </form>
                   ) : (
                     <div className="text-center py-10 animate-fade-up">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                           <CheckCircle2 size={48} />
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 mb-2">تم استلام طلبك بنجاح!</h2>
                        <p className="text-gray-500 mb-6">رقم التذكرة الخاص بك هو <span className="font-mono font-bold text-gray-900">#TK-88592</span>. سنقوم بالرد عليك في أقرب وقت.</p>
                        
                        <div className="flex justify-center gap-4">
                           <button 
                             onClick={() => onNavigate('home')}
                             className="px-6 py-2.5 border border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                           >
                             العودة للرئيسية
                           </button>
                           <button 
                             onClick={() => { setTicketStep(1); setFormData({name: '', email: '', phone: '', category: '', subject: '', description: ''}); }}
                             className="px-6 py-2.5 bg-[#40C1C7] text-white rounded-xl font-bold shadow-md shadow-teal-500/10 hover:bg-[#35a4a9] transition-colors"
                           >
                             فتح تذكرة أخرى
                           </button>
                        </div>
                     </div>
                   )}
                 </>
              )}

              {/* Track Ticket */}
              {activeTab === 'track-ticket' && (
                 <div className="max-w-md mx-auto py-10">
                    <div className="text-center mb-6">
                       <Search size={48} className="mx-auto text-gray-300 mb-4" />
                       <h3 className="text-xl font-bold text-gray-900">متابعة حالة الطلب</h3>
                       <p className="text-gray-500 text-sm">أدخل رقم التذكرة لمعرفة حالتها الحالية</p>
                    </div>
                    
                    <div className="space-y-4">
                       <input 
                         type="text" 
                         value={ticketId}
                         onChange={(e) => setTicketId(e.target.value)}
                         className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none transition-all text-center font-mono placeholder:font-sans"
                         placeholder="مثال: #TK-12345"
                       />
                       <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all">
                          بحث
                       </button>
                    </div>

                    {/* Simulation Result */}
                    {ticketId && (
                       <div className="mt-8 bg-gray-50 rounded-xl p-4 border border-gray-200 animate-fade-in">
                          <div className="flex items-center justify-between mb-2">
                             <span className="font-bold text-gray-900">حالة التذكرة</span>
                             <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-md font-bold">قيد المعالجة</span>
                          </div>
                          <p className="text-sm text-gray-500 mb-4">تم استلام طلبك وجاري مراجعته من قبل القسم المختص.</p>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                             <Clock size={14} />
                             <span>آخر تحديث: منذ ساعتين</span>
                          </div>
                       </div>
                    )}
                 </div>
              )}

           </div>
        </div>

      </div>
    </div>
  );
};