import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Globe, 
  Moon, 
  Shield, 
  Mail, 
  Smartphone, 
  CheckCircle2,
  Camera,
  LogOut,
  Trash2,
  ChevronRight,
  Eye,
  EyeOff
} from 'lucide-react';
import { toast } from 'sonner';

export const SettingsContent = () => {
  const [activeSection, setActiveSection] = useState('account');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would be a toast notification
      alert('تم حفظ التغييرات بنجاح');
    }, 1500);
  };

  const sections = [
    { id: 'account', label: 'المعلومات الشخصية', icon: User },
    { id: 'security', label: 'الأمان وكلمة المرور', icon: Lock },
    { id: 'notifications', label: 'الإشعارات', icon: Bell },
    { id: 'preferences', label: 'تفضيلات التطبيق', icon: Globe },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 shrink-0 space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                activeSection === section.id 
                  ? 'bg-[#0F172A] text-white shadow-lg shadow-[#0F172A]/10' 
                  : 'bg-white text-gray-500 hover:bg-gray-50 border border-transparent hover:border-gray-200'
              }`}
            >
              <section.icon size={18} className={activeSection === section.id ? 'text-[#D4AF37]' : ''} />
              {section.label}
              {activeSection === section.id && (
                <ChevronRight size={16} className="mr-auto rtl:rotate-180 text-gray-400" />
              )}
            </button>
          ))}
          
          <div className="pt-4 border-t border-gray-100 mt-4">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-red-500 hover:bg-red-50 transition-all">
              <LogOut size={18} />
              تسجيل الخروج
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-6">
          
          {/* Account Section */}
          {activeSection === 'account' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <User size={20} className="text-[#40C1C7]" />
                  الملف الشخصي
                </h3>
                
                {/* Profile Photo */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                  <div className="relative">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                      alt="Profile" 
                      className="w-24 h-24 rounded-full bg-gray-100 border-4 border-white shadow-md"
                    />
                    <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center border-2 border-white hover:bg-[#40C1C7] transition-colors">
                      <Camera size={14} />
                    </button>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">الصورة الشخصية</h4>
                    <p className="text-sm text-gray-500 mb-3">يتم عرض هذه الصورة في ملفك العام وبطاقات المزايدة</p>
                    <div className="flex gap-2">
                      <button className="text-xs font-bold text-[#0F172A] border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50">تغيير الصورة</button>
                      <button className="text-xs font-bold text-red-500 border border-transparent px-3 py-1.5 rounded-lg hover:bg-red-50">حذف</button>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">الاسم الكامل</label>
                    <input type="text" defaultValue="عبدالله محمد" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">اسم المستخدم</label>
                    <div className="relative">
                      <input type="text" defaultValue="@abdullah_m" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all text-left dir-ltr" />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-400 text-sm">mazadat.sa/</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">البريد الإلكتروني</label>
                    <div className="relative">
                      <input type="email" defaultValue="abdullah@example.com" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all" />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">رقم الجوال</label>
                    <div className="relative">
                      <input type="tel" defaultValue="+966 50 000 0000" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all text-left dir-ltr" />
                      <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Shield size={20} className="text-green-500" />
                  توثيق الهوية
                </h3>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">الهوية موثقة (نفاذ)</h4>
                      <p className="text-xs text-gray-500">تم التحقق من هويتك الوطنية بنجاح</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">معتمد</span>
                </div>
              </div>
            </div>
          )}

          {/* Security Section */}
          {activeSection === 'security' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Lock size={20} className="text-[#40C1C7]" />
                  تغيير كلمة المرور
                </h3>
                
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">كلمة المرور الحالية</label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all" 
                      />
                      <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">كلمة المرور الجديدة</label>
                    <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">تأكيد كلمة المرور الجديدة</label>
                    <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6">التحقق بخطوتين (2FA)</h3>
                <div className="flex items-center justify-between">
                  <div className="max-w-md">
                    <h4 className="font-bold text-gray-900 mb-1">زيادة أمان الحساب</h4>
                    <p className="text-sm text-gray-500">عند تفعيل هذه الخاصية، سنطلب منك رمزاً إضافياً عند تسجيل الدخول من جهاز جديد.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#40C1C7]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#40C1C7]"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Section */}
          {activeSection === 'notifications' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Bell size={20} className="text-[#40C1C7]" />
                  تفضيلات التنبيهات
                </h3>
                
                <div className="space-y-6">
                  {[
                    { title: 'تحديثات المزادات', desc: 'إشعارات عند المزايدة على عقار تتابعه أو انتهاء المزاد', default: true },
                    { title: 'العروض الخاصة', desc: 'رسائل حول الخصومات والفرص الاستثمارية الجديدة', default: false },
                    { title: 'تذكيرات الدفع', desc: 'تذكير بمواعيد سداد الفواتير والمستحقات', default: true },
                    { title: 'الأمان وتسجيل الدخول', desc: 'تنبيهات عند محاولات الدخول المشبوهة', default: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start justify-between pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer mt-1">
                        <input type="checkbox" defaultChecked={item.default} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#40C1C7]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#40C1C7]"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Preferences Section */}
          {activeSection === 'preferences' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Globe size={20} className="text-[#40C1C7]" />
                  اللغة والمنطقة
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">لغة العرض</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all">
                      <option value="ar">العربية (المملكة العربية السعودية)</option>
                      <option value="en">English (United States)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">العملة الافتراضية</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all">
                      <option value="sar">ريال سعودي (SAR)</option>
                      <option value="usd">دولار أمريكي (USD)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Moon size={20} className="text-[#40C1C7]" />
                  المظهر
                </h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'light', label: 'فاتح', icon: '☀️' },
                    { id: 'dark', label: 'داكن', icon: '🌙' },
                    { id: 'system', label: 'النظام', icon: '💻' },
                  ].map((theme) => (
                    <button 
                      key={theme.id}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                        theme.id === 'light' 
                          ? 'border-[#40C1C7] bg-[#40C1C7]/5 text-[#40C1C7]' 
                          : 'border-gray-100 text-gray-500 hover:border-gray-200'
                      }`}
                    >
                      <span className="text-2xl mb-2">{theme.icon}</span>
                      <span className="font-bold text-sm">{theme.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <h3 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
                  <Trash2 size={20} />
                  منطقة الخطر
                </h3>
                <p className="text-sm text-red-500/80 mb-4">
                   عند حذف الحساب، سيتم إزالة جميع بياناتك وسجلك بشكل نهائي ولا يمكن التراجع عن هذا الإجراء.
                </p>
                <button className="px-6 py-2.5 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20 text-sm">
                  حذف الحساب نهائياً
                </button>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end pt-4">
            <button 
              onClick={handleSave}
              disabled={isLoading}
              className="px-8 py-3 bg-[#0F172A] text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg shadow-[#0F172A]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  جاري الحفظ...
                </>
              ) : (
                'حفظ التغييرات'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
