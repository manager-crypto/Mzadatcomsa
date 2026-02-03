import React, { useState } from 'react';
import { Flag, Upload, Send, CheckCircle, Hash, Calendar, Building, User, Info } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

interface ReportComplaintPageProps {
  property?: any;
  onBack: () => void;
}

export const ReportComplaintPage = ({ property, onBack }: ReportComplaintPageProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    complaintType: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 animate-fade-up pt-24">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full text-center border border-gray-100">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">تم استلام شكواك بنجاح</h2>
          <p className="text-gray-500 mb-8">
            شكراً لاهتمامك. سيقوم فريق الامتثال والجودة بمراجعة الشكوى واتخاذ الإجراءات اللازمة خلال 24 ساعة.
          </p>
          <Button 
            onClick={onBack} 
            className="bg-[#40C1C7] hover:bg-[#35a4a9] text-white w-full rounded-xl py-6 text-lg"
          >
            العودة للإعلان
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 pt-24">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10 animate-fade-up">
          <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-2xl mb-4">
            <Flag size={32} className="text-red-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">تقديم شكوى على إعلان</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            نأسف لسماع ذلك. يرجى تزويدنا بتفاصيل الشكوى لنتمكن من حماية حقوقك وحقوق المستخدمين الآخرين.
          </p>
        </div>

        {/* Property Info Card */}
        {property && (
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-gray-100 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">تفاصيل الإعلان المشكو عليه</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                     <Hash size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 mb-1">رقم الإعلان</p>
                     <p className="font-mono font-bold text-gray-900 text-lg">7658291</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                     <Calendar size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 mb-1">تاريخ الإعلان</p>
                     <p className="font-bold text-gray-900">{property.time || '2023/12/14'}</p>
                   </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                     <Building size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 mb-1">المعلن</p>
                     <p className="font-bold text-gray-900">{property.agent?.name || 'غير متوفر'}</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                     <User size={20} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 mb-1">حالة المعلن</p>
                     <p className="font-bold text-gray-900 flex items-center gap-1">
                       {property.agent?.verified ? 'موثوق' : 'عضو'}
                       {property.agent?.verified && <CheckCircle size={14} className="text-[#40C1C7]" />}
                     </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="h-2 bg-red-500 w-full"></div>
          <form onSubmit={handleSubmit} className="p-8 lg:p-10 space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">الاسم الكريم</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="أدخل اسمك" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:border-[#40C1C7] focus:ring-[#40C1C7]/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base">رقم الجوال</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  placeholder="05xxxxxxxx" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:border-[#40C1C7] focus:ring-[#40C1C7]/20 text-left placeholder:text-right"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="complaintType" className="text-base">نوع الشكوى</Label>
              <select 
                id="complaintType" 
                name="complaintType"
                className="w-full bg-gray-50 border border-gray-200 h-12 rounded-xl focus:outline-none focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/20 px-3 text-sm"
                required
                value={formData.complaintType}
                onChange={handleChange}
              >
                <option value="">اختر نوع الشكوى...</option>
                <option value="fraud">احتيال مالي أو وهمي</option>
                <option value="misleading">إعلان مضلل أو معلومات غير صحيحة</option>
                <option value="price">سعر غير منطقي</option>
                <option value="duplicate">إعلان مكرر</option>
                <option value="inappropriate">محتوى غير لائق أو مسيء</option>
                <option value="rights">انتهاك حقوق الملكية</option>
                <option value="other">أخرى</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-base">تفاصيل الشكوى</Label>
              <Textarea 
                id="description" 
                name="description" 
                placeholder="يرجى كتابة تفاصيل الشكوى بوضوح..." 
                required 
                className="bg-gray-50 border-gray-200 min-h-[120px] rounded-xl focus:border-[#40C1C7] focus:ring-[#40C1C7]/20 resize-y"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-base">إرفاق دليل (اختياري)</Label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-[#40C1C7] transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#40C1C7]/10 group-hover:text-[#40C1C7] transition-colors text-gray-400">
                  <Upload size={24} />
                </div>
                <p className="text-sm font-medium text-gray-900">اضغط لإرفاق صور أو مستندات</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF حتى 10 ميجابايت</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-500 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <Info size={18} className="text-gray-400" />
              <p className="text-sm">سيتم إشعار المعلن ومراجعة الشكوى والعمل على حل المشكلة خلال خمسة أيام عمل كحد أقصى</p>
            </div>

            <div className="pt-4 flex gap-4">
              <Button 
                type="button" 
                onClick={onBack}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 h-14 rounded-xl text-lg font-bold"
              >
                إلغاء
              </Button>
              <Button 
                type="submit" 
                className="flex-[2] bg-red-600 hover:bg-red-700 text-white h-14 rounded-xl text-lg font-bold shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? <span className="animate-spin">⌛</span> : <Send size={20} />}
                {isLoading ? 'جاري الإرسال...' : 'إرسال الشكوى'}
              </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
