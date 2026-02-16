import React, { useState } from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Gavel, 
  DollarSign, 
  Activity, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Building, 
  Car, 
  FileText, 
  Wallet, 
  LayoutGrid, 
  Gem, 
  ArrowRight, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  CreditCard, 
  Shield, 
  Star, 
  Bell, 
  Building2, 
  FileBarChart, 
  Download, 
  Zap, 
  Heart, 
  Briefcase, 
  Hash, 
  Home, 
  Settings 
} from 'lucide-react';
import { SmartManagementContent } from '../components/dashboard/SmartManagementContent';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line, 
  Legend 
} from 'recharts';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

// Mock Data
const revenueData = [
  { name: 'يناير', value: 4000 },
  { name: 'فبراير', value: 3000 },
  { name: 'مارس', value: 5000 },
  { name: 'أبريل', value: 2780 },
  { name: 'مايو', value: 1890 },
  { name: 'يونيو', value: 6390 },
  { name: 'يوليو', value: 8490 },
];

const pieData = [
  { name: 'عقارات', value: 45, color: '#0F766E' },
  { name: 'سيارات', value: 30, color: '#47CCD0' },
  { name: 'لوحات', value: 15, color: '#2DD4BF' },
  { name: 'أخرى', value: 10, color: '#CCFBF1' },
];

const growthData = [
  { name: 'فبراير', visits: 2400, deals: 2400, units: 2400, clients: 2400 },
  { name: 'مارس', visits: 1398, deals: 2210, units: 2210, clients: 2000 },
  { name: 'أبريل', visits: 9800, deals: 2290, units: 2290, clients: 2181 },
  { name: 'مايو', visits: 3908, deals: 2000, units: 2000, clients: 2500 },
  { name: 'يونيو', visits: 4800, deals: 2181, units: 2181, clients: 2100 },
  { name: 'يوليو', visits: 3800, deals: 2500, units: 2500, clients: 2400 },
  { name: 'أغسطس', visits: 4300, deals: 2100, units: 2100, clients: 2300 },
  { name: 'سبتمبر', visits: 4300, deals: 2100, units: 2100, clients: 2300 },
  { name: 'أكتوبر', visits: 4300, deals: 2100, units: 2100, clients: 2300 },
  { name: 'نوفمبر', visits: 4300, deals: 2100, units: 2100, clients: 2300 },
  { name: 'ديسمبر', visits: 4300, deals: 2100, units: 12000, clients: 2300 }, // Spike
  { name: 'يناير', visits: 4300, deals: 2100, units: 2100, clients: 2300 },
];

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const [activeRole, setActiveRole] = useState<'admin' | 'individual' | 'corporate' | 'broker'>('individual');
  const [activeTab, setActiveTab] = useState('overview');
  const [growthFilter, setGrowthFilter] = useState('all');

  // --- REUSABLE COMPONENTS ---
  
  const StatCard = ({ title, value, subValue, icon: Icon, trend, trendValue, colorClass, bgClass }: any) => (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${bgClass} group-hover:scale-110 duration-300`}>
          <Icon size={24} className={colorClass} />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
            {trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {trendValue}
          </div>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-black text-gray-900 mb-1 font-sans">{value}</h3>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        {subValue && <p className="text-xs text-gray-400 mt-1">{subValue}</p>}
      </div>
    </div>
  );

  const ActionButton = ({ icon: Icon, label, onClick, primary = false }: any) => (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border transition-all active:scale-95 ${
        primary 
          ? 'bg-[#0F766E] border-[#0F766E] text-white shadow-lg shadow-teal-900/10 hover:bg-[#0d655e]' 
          : 'bg-white border-gray-100 text-gray-600 hover:border-[#0F766E] hover:text-[#0F766E] hover:bg-teal-50/30'
      }`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${primary ? 'bg-white/20' : 'bg-gray-50'}`}>
        <Icon size={20} />
      </div>
      <span className="text-sm font-bold">{label}</span>
    </button>
  );

  const SectionHeader = ({ title, actionLabel, onAction }: any) => (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
        <span className="w-1 h-6 bg-[#0F766E] rounded-full"></span>
        {title}
      </h2>
      {actionLabel && (
        <button onClick={onAction} className="text-sm text-[#0F766E] font-bold hover:underline flex items-center gap-1">
          {actionLabel} <ArrowRight size={14} className="rotate-180" />
        </button>
      )}
    </div>
  );

  // --- CONTENT RENDERERS ---

  const renderDashboardContent = (isCorporate: boolean) => (
    <div className="space-y-8 animate-fade-up">
      
      {/* KPIs Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Wallet Balance - Navy Card */}
        <div className="bg-[#2B3D50] p-6 rounded-2xl text-white relative overflow-hidden shadow-xl shadow-[#2B3D50]/10 group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-white/10"></div>
           <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#47CCD0] border border-white/5">
                    <Wallet size={20} />
                 </div>
                 <span className="text-gray-300 font-medium text-sm">رصيد المحفظة</span>
              </div>
              <h3 className="text-4xl font-black text-white mb-2 font-mono dir-ltr text-right tracking-tight">
                {isCorporate ? '1,250,000.00' : '25,400.00'} <span className="text-sm font-sans text-[#47CCD0] font-bold">SAR</span>
              </h3>
              <p className="text-xs text-gray-400 mt-2 flex items-center gap-1 bg-white/5 w-fit px-2 py-1 rounded-lg">
                 <ArrowRight size={12} className="rotate-180 text-green-400" />
                 <span className="text-green-400 font-bold">+{isCorporate ? '125,000' : '2,500'}</span> هذا الشهر
              </p>
           </div>
        </div>

        {/* Active Bids - White Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#47CCD0]/30 transition-all group relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-[#2B3D50] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
           <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F8FAFB] flex items-center justify-center text-[#47CCD0] group-hover:scale-110 transition-transform border border-[#47CCD0]/20">
                 <Gavel size={20} />
              </div>
              <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full border border-green-100">نشط حالياً</span>
           </div>
           <h3 className="text-4xl font-black text-[#2B3D50] mb-1">{isCorporate ? '24' : '8'}</h3>
           <p className="text-sm text-gray-500 font-medium">مزايدات قيد التنفيذ</p>
        </div>

        {/* Compliance Status - White Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#47CCD0]/30 transition-all group relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-[#2B3D50] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
           <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform border border-blue-100">
                 <Shield size={20} />
              </div>
              <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full border border-blue-100">100% مكتمل</span>
           </div>
           <h3 className="text-lg font-black text-[#2B3D50] mb-1">حساب موثق</h3>
           <p className="text-xs text-green-600 font-bold flex items-center gap-1">
              <CheckCircle size={14} /> متوافق مع الأنظمة
           </p>
        </div>
      </div>

      {/* --- CONDITIONAL CONTENT BASED ON ROLE (Moved Up) --- */}
      
      {isCorporate ? (
        // === CORPORATE SPECIFIC CONTENT ===
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           {/* Corporate Services Hub */}
           <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200/60 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="font-bold text-[#2B3D50] text-lg font-serif flex items-center gap-2">
                    <Building2 size={20} className="text-[#47CCD0]" />
                    خدمات الأعمال
                 </h3>
                 <button className="text-xs font-bold text-gray-400 hover:text-[#2B3D50]">إدارة الخدمات</button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                 {[
                   { icon: FileBarChart, label: 'التقارير المالية', desc: 'تحليل المصروفات' },
                   { icon: Briefcase, label: 'إدارة المحفظة', desc: 'الأصول والاستثمار' },
                   { icon: Users, label: 'إدارة المستخدمين', desc: 'الصلاحيات والفرق' },
                   { icon: Gavel, label: 'مزايدة مجمعة', desc: 'استيراد من Excel' },
                 ].map((service, idx) => (
                   <button key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 hover:border-[#47CCD0] hover:bg-gray-50 transition-all group text-center">
                      <div className="w-10 h-10 rounded-lg bg-[#2B3D50]/5 text-[#2B3D50] flex items-center justify-center mb-3 group-hover:bg-[#2B3D50] group-hover:text-[#47CCD0] transition-colors">
                         <service.icon size={20} />
                      </div>
                      <h4 className="font-bold text-sm text-[#2B3D50] mb-1">{service.label}</h4>
                      <p className="text-[10px] text-gray-400">{service.desc}</p>
                   </button>
                 ))}
              </div>
           </div>

           {/* Quick Financial Summary */}
           <div className="bg-white rounded-2xl border border-gray-200/60 p-6 shadow-sm">
              <h3 className="font-bold text-[#2B3D50] text-lg font-serif mb-4 flex items-center gap-2">
                 <FileText size={20} className="text-[#47CCD0]" />
                 الفواتير والضرائب
              </h3>
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded bg-red-100 flex items-center justify-center text-red-600">
                          <AlertCircle size={16} />
                       </div>
                       <div>
                          <p className="text-xs font-bold text-gray-900">مستحقات ضريبية</p>
                          <p className="text-[10px] text-gray-400">فترة الربع الأول</p>
                       </div>
                    </div>
                    <span className="font-mono font-bold text-red-600 text-sm">15,400 SAR</span>
                 </div>
                 
                 <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center text-green-600">
                          <CheckCircle size={16} />
                       </div>
                       <div>
                          <p className="text-xs font-bold text-gray-900">فاتورة #9921</p>
                          <p className="text-[10px] text-gray-400">تم السداد</p>
                       </div>
                    </div>
                    <button className="text-gray-400 hover:text-[#2B3D50]">
                       <Download size={16} />
                    </button>
                 </div>
                 
                 <button className="w-full py-2.5 mt-2 rounded-xl bg-[#2B3D50] text-white text-xs font-bold hover:bg-gray-800 transition-colors">
                    تحميل الكشف الضريبي
                 </button>
              </div>
           </div>
        </div>
      ) : (
        // === INDIVIDUAL SPECIFIC CONTENT ===
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
           {/* Explore Categories */}
           <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-200/60 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="font-bold text-[#2B3D50] text-lg font-serif flex items-center gap-2">
                    <Zap size={20} className="text-[#47CCD0] fill-[#47CCD0]" />
                    استكشف الفرص
                 </h3>
                 <div className="flex gap-2">
                    <button className="text-xs font-bold px-3 py-1 rounded-full bg-[#2B3D50] text-white">الكل</button>
                    <button className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">الأكثر طلباً</button>
                 </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   { icon: Home, label: 'عقارات', count: '120+', bg: 'bg-emerald-100', text: 'text-emerald-700' },
                   { icon: Car, label: 'سيارات', count: '450+', bg: 'bg-blue-100', text: 'text-blue-700' },
                   { icon: Hash, label: 'لوحات', count: '80+', bg: 'bg-amber-100', text: 'text-amber-700' },
                   { icon: Gem, label: 'مقتنيات', count: '30+', bg: 'bg-purple-100', text: 'text-purple-700' },
                 ].map((cat, idx) => (
                   <div key={idx} className="relative overflow-hidden rounded-xl p-4 border border-gray-100 hover:border-[#47CCD0] transition-all cursor-pointer group bg-gray-50 hover:bg-white">
                      <div className={`w-10 h-10 rounded-full ${cat.bg} ${cat.text} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                         <cat.icon size={20} />
                      </div>
                      <h4 className="font-bold text-gray-900">{cat.label}</h4>
                      <p className="text-xs text-gray-400 mt-1">{cat.count} مزاد</p>
                      <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <ArrowRight size={14} className="text-[#47CCD0] rotate-180" />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Recommended For You */}
           <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-200/60 p-6 shadow-sm">
              <h3 className="font-bold text-[#2B3D50] text-lg font-serif mb-4 flex items-center gap-2">
                 <Heart size={20} className="text-red-500 fill-red-500" />
                 مرشحة لك
              </h3>
              <div className="space-y-4">
                 {[1, 2].map((item) => (
                   <div key={item} className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#47CCD0] transition-all cursor-pointer group">
                      <img src={`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=150&q=80`} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-1">
                         <div className="flex justify-between items-start">
                            <span className="text-[10px] font-bold bg-[#2B3D50] text-[#47CCD0] px-1.5 py-0.5 rounded">عقار</span>
                            <span className="text-[10px] font-bold text-green-600 flex items-center gap-1">
                               <TrendingUp size={10} /> فرصة
                            </span>
                         </div>
                         <h4 className="font-bold text-gray-900 text-sm mt-1 leading-tight line-clamp-2">شقة فاخرة بإطلالة بحرية - جدة</h4>
                         <p className="text-xs font-mono font-bold text-[#2B3D50] mt-2">1,200,000 SAR</p>
                      </div>
                   </div>
                 ))}
                 <button className="w-full py-2 text-xs font-bold text-[#2B3D50] border border-gray-200 rounded-lg hover:bg-gray-50">
                    عرض جميع الترشيحات
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Active Auctions List */}
      <div className="bg-white rounded-2xl border border-gray-200/60 shadow-sm overflow-hidden">
         <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/30">
            <h3 className="font-bold text-[#2B3D50] text-lg flex items-center gap-2 font-serif">
               <span className="w-1.5 h-6 bg-[#47CCD0] rounded-full"></span>
               المزادات الجارية
            </h3>
            <button className="text-xs font-bold text-[#47CCD0] hover:text-[#2B3D50] transition-colors flex items-center gap-1">
               عرض الكل <ArrowRight size={14} className="rotate-180" />
            </button>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-sm text-right">
               <thead className="bg-gray-50 text-gray-400 font-bold text-xs">
                  <tr>
                     <th className="px-6 py-4 rounded-tr-xl">العنصر</th>
                     <th className="px-6 py-4">العرض الحالي</th>
                     <th className="px-6 py-4">الوقت المتبقي</th>
                     <th className="px-6 py-4 rounded-tl-xl">الحالة</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                  {[
                    { id: 1, title: 'فيلا مودرن - حي الملقا', bid: '2,500,000', time: '02:45:12', status: 'winning', img: 'https://images.unsplash.com/photo-1600596542815-e328701102b9?auto=format&fit=crop&w=100&q=80' },
                    { id: 2, title: 'مرسيدس G63 2024', bid: '850,000', time: '05:12:30', status: 'outbid', img: 'https://images.unsplash.com/photo-1520031441872-26514dd970c3?auto=format&fit=crop&w=100&q=80' },
                    { id: 3, title: 'لوحة مميزة (أ أ أ 1111)', bid: '120,000', time: '12:00:00', status: 'winning', img: 'https://images.unsplash.com/photo-1597042668549-361956799052?auto=format&fit=crop&w=100&q=80' },
                    { id: 4, title: 'أرض تجارية - جدة', bid: '4,200,000', time: '1 يوم', status: 'winning', img: 'https://images.unsplash.com/photo-1542665952-14513db15293?auto=format&fit=crop&w=100&q=80' },
                  ].map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={item.img} alt={item.title} className="w-12 h-12 rounded-lg object-cover shadow-sm border border-gray-100 group-hover:border-[#47CCD0]/50 transition-colors" />
                          <div>
                             <p className="font-bold text-[#2B3D50]">{item.title}</p>
                             <p className="text-xs text-gray-400 mt-0.5">رقم المزاد: #{202400 + item.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                         <p className="font-mono font-black text-[#2B3D50] text-base">{item.bid} <span className="text-[10px] text-gray-400 font-sans">SAR</span></p>
                      </td>
                      <td className="px-6 py-4">
                         <div className="flex items-center gap-1.5 text-[#F39C12] font-mono font-bold bg-[#FFF8E1] w-fit px-2.5 py-1 rounded-lg text-xs">
                            <Clock size={12} />
                            {item.time}
                         </div>
                      </td>
                      <td className="px-6 py-4">
                        {item.status === 'winning' ? (
                          <span className="bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 w-fit border border-green-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> متصدر
                          </span>
                        ) : (
                          <span className="bg-red-50 text-red-700 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 w-fit border border-red-100">
                            <ArrowRight size={12} className="-rotate-45" /> تم تجاوزك
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );

  const renderIndividualContent = () => renderDashboardContent(false);
  const renderCorporateContent = () => renderDashboardContent(true);

  const renderAdminContent = () => (
    <div className="space-y-6 animate-fade-up">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="إجمالي المستخدمين" value="12,345" trend="up" trendValue="+12%" icon={Users} bgClass="bg-blue-50" colorClass="text-blue-600" />
        <StatCard title="المزادات النشطة" value="84" trend="up" trendValue="+5%" icon={Gavel} bgClass="bg-purple-50" colorClass="text-purple-600" />
        <StatCard title="إجمالي الإيرادات" value="1.2M" trend="up" trendValue="+8%" icon={DollarSign} bgClass="bg-green-50" colorClass="text-green-600" />
        <StatCard title="البلاغات المفتوحة" value="12" trend="down" trendValue="-2%" icon={AlertCircle} bgClass="bg-orange-50" colorClass="text-orange-600" />
      </div>

      {/* Growth Chart */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
           {/* Filters */}
           <div className="flex bg-gray-100/80 p-1.5 rounded-xl overflow-x-auto max-w-full">
              {[
                { id: 'all', label: 'الكل' },
                { id: 'visits', label: 'عدد الزيارات على الموقع الإلكتروني' },
                { id: 'deals', label: 'الصفقات' },
                { id: 'clients', label: 'العملاء' },
                { id: 'units', label: 'الوحدات' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setGrowthFilter(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    growthFilter === tab.id 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
           </div>
           
           {/* Title & Dropdown */}
           <div className="flex items-center gap-2">
             <h3 className="font-bold text-gray-900 text-lg">النمو في آخر</h3>
             <select className="bg-transparent font-bold text-gray-900 border-none outline-none cursor-pointer text-lg">
                <option>12 أشهر</option>
                <option>6 أشهر</option>
                <option>30 يوم</option>
             </select>
           </div>
        </div>

        <div className="h-[400px] w-full min-w-0" dir="ltr">
           <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                 <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#9CA3AF', fontSize: 12}} 
                    dy={20} 
                 />
                 <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'right'}}
                    itemStyle={{textAlign: 'right'}}
                    labelStyle={{textAlign: 'right', marginBottom: '8px', color: '#374151', fontWeight: 'bold'}}
                    formatter={(value: number) => [value.toLocaleString(), '']}
                 />
                 <Legend 
                    verticalAlign="top" 
                    height={36} 
                    iconType="circle"
                    wrapperStyle={{ paddingTop: '0px', paddingBottom: '20px', fontSize: '12px' }}
                 />
                 
                 {(growthFilter === 'all' || growthFilter === 'clients') && (
                   <Line 
                     name="العملاء" 
                     type="monotone" 
                     dataKey="clients" 
                     stroke="#8884d8" 
                     strokeWidth={3} 
                     dot={{ r: 4, strokeWidth: 2 }} 
                     activeDot={{ r: 6 }} 
                   />
                 )}
                 {(growthFilter === 'all' || growthFilter === 'units') && (
                   <Line 
                     name="الوحدات" 
                     type="monotone" 
                     dataKey="units" 
                     stroke="#f59e0b" 
                     strokeWidth={3} 
                     dot={{ r: 4, strokeWidth: 2 }} 
                     activeDot={{ r: 6 }} 
                   />
                 )}
                 {(growthFilter === 'all' || growthFilter === 'deals') && (
                   <Line 
                     name="الصفقات" 
                     type="monotone" 
                     dataKey="deals" 
                     stroke="#10b981" 
                     strokeWidth={3} 
                     dot={{ r: 4, strokeWidth: 2 }} 
                     activeDot={{ r: 6 }} 
                   />
                 )}
                 {(growthFilter === 'all' || growthFilter === 'visits') && (
                   <Line 
                     name="الزيارات" 
                     type="monotone" 
                     dataKey="visits" 
                     stroke="#be185d" 
                     strokeWidth={3} 
                     dot={{ r: 4, strokeWidth: 2 }} 
                     activeDot={{ r: 6 }} 
                   />
                 )}
                 
                 {/* Reference Label for the spike */}
                 {/* <ReferenceLine x="ديسمبر" stroke="red" label="Max PV PAGE" /> */}
              </LineChart>
           </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900 text-lg">الإيرادات</h3>
            <select className="bg-gray-50 border border-gray-200 rounded-lg text-sm px-3 py-1 outline-none text-gray-600">
              <option>آخر 6 أشهر</option>
              <option>آخر سنة</option>
            </select>
          </div>
          <div className="h-[300px] w-full min-w-0" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0F766E" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#0F766E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dx={-10} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} 
                />
                <Area type="monotone" dataKey="value" stroke="#0F766E" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 text-lg mb-6">توزيع المزادات</h3>
          <div className="h-[200px] relative min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
              <span className="text-3xl font-bold text-gray-900">1,240</span>
              <span className="text-xs text-gray-400">مزاد كلي</span>
            </div>
          </div>
          <div className="space-y-3 mt-6">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-bold text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout 
      role={activeRole} 
      activeTab={activeTab} 
      onTabChange={setActiveTab}
      onNavigate={onNavigate}
      onSwitchRole={setActiveRole}
    >
      {activeTab === 'overview' ? (
        <>
          {activeRole === 'individual' && renderIndividualContent()}
          {activeRole === 'admin' && renderAdminContent()}
          {(activeRole === 'corporate' || activeRole === 'broker') && renderCorporateContent()}
        </>
      ) : activeTab === 'smart-management' ? (
        <SmartManagementContent role={activeRole} />
      ) : (
        <div className="flex flex-col items-center justify-center h-[500px] bg-white rounded-3xl border border-dashed border-gray-200">
           <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-4">
              <Activity size={32} />
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-2">قريباً</h3>
           <p className="text-gray-500">هذه الصفحة قيد التطوير حالياً</p>
        </div>
      )}
    </DashboardLayout>
  );
};
