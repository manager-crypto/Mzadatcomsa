import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Gavel, 
  Wallet, 
  Settings, 
  FileText, 
  Bell, 
  Search, 
  Menu, 
  X,
  LogOut,
  Building2,
  PieChart,
  MessageSquare,
  TrendingUp,
  ShieldCheck,
  Package,
  UserCircle,
  Briefcase,
  Car,
  ChevronLeft,
  HelpCircle,
  Brain,
  Bell
} from 'lucide-react';

interface DashboardSidebarProps {
  role: 'admin' | 'individual' | 'corporate' | 'broker';
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
  onSwitchRole: (role: 'admin' | 'individual' | 'corporate' | 'broker') => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ 
  role, 
  activeTab, 
  onTabChange, 
  isOpen, 
  onClose,
  onSwitchRole 
}) => {
  
  const getMenuItems = () => {
    switch(role) {
      case 'admin':
        return [
          { id: 'overview', label: 'نظرة عامة', icon: <LayoutDashboard size={20} /> },
          { id: 'users', label: 'المستخدمين', icon: <Users size={20} /> },
          { id: 'auctions', label: 'إدارة المزادات', icon: <Gavel size={20} /> },
          { id: 'financials', label: 'المالية', icon: <Wallet size={20} /> },
          { id: 'reports', label: 'التقارير', icon: <PieChart size={20} /> },
          { id: 'settings', label: 'الإعدادات', icon: <Settings size={20} /> },
          { id: 'smart-management', label: 'الإدارة الذكية', icon: <Brain size={20} /> },
        ];
      case 'individual':
        return [
          { id: 'overview', label: 'لوحة التحكم', icon: <LayoutDashboard size={20} /> },
          { id: 'my-bids', label: 'مزايداتي', icon: <Gavel size={20} /> },
          { id: 'wallet', label: 'المحفظة', icon: <Wallet size={20} /> },
          { id: 'watchlist', label: 'المفضلة', icon: <ShieldCheck size={20} /> },
          { id: 'my-vehicles', label: 'مركباتي', icon: <Car size={20} /> },
          { id: 'won-auctions', label: 'المزادات المرسوّة', icon: <Package size={20} /> },
          { id: 'settings', label: 'إعدادات الحساب', icon: <Settings size={20} /> },
          { id: 'smart-management', label: 'الإدارة الذكية', icon: <Brain size={20} /> },
        ];
      case 'corporate':
      case 'broker':
        return [
          { id: 'overview', label: 'اللوحة الرئيسية', icon: <LayoutDashboard size={20} /> },
          { id: 'settings', label: 'الإعدادات', icon: <Settings size={20} /> },
          { id: 'smart-management', label: 'الإدارة الذكية', icon: <Brain size={20} /> },
        ];
      default:
        return [];
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity" onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-32 right-0 h-[calc(100vh-8rem)] bg-white shadow-2xl z-40 w-[280px] transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} lg:w-[280px] border-l border-gray-100 flex flex-col rounded-tl-2xl`}>
        
        {/* Sidebar Header */}
        <div className="p-6 pt-6 flex items-center justify-between border-b border-gray-100/50">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-[#0F172A] rounded-xl flex items-center justify-center text-[#D4AF37] shadow-lg shadow-gray-900/10 border border-[#1e293b]">
               <LayoutDashboard size={20} />
             </div>
             <div>
               <h2 className="text-lg font-black text-[#0F172A] leading-tight font-serif tracking-wide">Mzadat</h2>
               <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest">Premium Auctions</p>
             </div>
          </div>
          <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-red-50">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5 scrollbar-thin scrollbar-thumb-gray-200">
          <p className="px-4 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">القائمة الرئيسية</p>
          {getMenuItems().map((item) => (
            <button
              key={item.id}
              onClick={() => { onTabChange(item.id); onClose(); }}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-all group ${
                activeTab === item.id 
                  ? 'bg-[#0F172A] text-[#D4AF37] shadow-lg shadow-gray-900/20 border border-[#1e293b]' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-[#0F172A]'
              }`}
            >
              <div className="flex items-center gap-3">
                {React.cloneElement(item.icon as React.ReactElement, { 
                  className: activeTab === item.id ? 'text-[#D4AF37]' : 'text-gray-400 group-hover:text-[#0F172A]' 
                })}
                {item.label}
              </div>
              {activeTab === item.id && <ChevronLeft size={16} className="text-[#D4AF37]" />}
            </button>
          ))}
          
          <div className="pt-6 mt-6 border-t border-gray-100">
            <p className="px-4 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">أخرى</p>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all">
              <HelpCircle size={20} />
              المساعدة والدعم
            </button>
          </div>
        </nav>

        {/* User Mini Profile Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3 mb-3 p-2 rounded-xl hover:bg-white transition-colors cursor-pointer">
             <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-full h-full object-cover" />
             </div>
             <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">محمد أحمد</p>
                <p className="text-xs text-gray-500 truncate">mohamed@example.com</p>
             </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-red-500 bg-red-50 hover:bg-red-100 transition-all">
            <LogOut size={16} />
            تسجيل الخروج
          </button>
        </div>
      </aside>
    </>
  );
};

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'individual' | 'corporate' | 'broker';
  activeTab: string;
  onTabChange: (tab: string) => void;
  onNavigate: (page: string) => void;
  onSwitchRole: (role: 'admin' | 'individual' | 'corporate' | 'broker') => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  role, 
  activeTab, 
  onTabChange, 
  onNavigate,
  onSwitchRole
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32" dir="rtl">
      <DashboardSidebar 
        role={role} 
        activeTab={activeTab} 
        onTabChange={onTabChange} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSwitchRole={onSwitchRole}
      />

      {/* Main Content Area */}
      <div className="lg:mr-[280px] min-h-screen flex flex-col transition-all duration-300">
        
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-100 sticky top-0 z-30 px-4 py-3 flex items-center justify-between shadow-sm">
           <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 active:scale-95 transition-all"
              >
                <Menu size={20} />
              </button>
              <h1 className="text-lg font-black text-[#0F172A]">لوحة التحكم</h1>
           </div>
           <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0F766E] font-bold text-xs">
              MA
           </div>
        </header>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between py-5 px-8 bg-white border-b border-gray-200/60 sticky top-0 z-30 shadow-sm">
           {/* Left (RTL Right) */}
           <div>
              <h1 className="text-xl font-black text-[#0F172A]">
                 {activeTab === 'overview' ? 'نظرة عامة' : 
                  activeTab === 'wallet' ? 'المحفظة' : 
                  activeTab === 'my-bids' ? 'مزايداتي' : 'لوحة التحكم'}
              </h1>
              <p className="text-xs text-gray-400 font-medium mt-0.5">{new Date().toLocaleDateString('ar-SA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
           </div>
           
           {/* Center Toggle */}
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#F1F5F9] p-1.5 rounded-full flex items-center shadow-inner border border-gray-200">
                 <button 
                    onClick={() => onSwitchRole('individual')}
                    className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                       role === 'individual' || role === 'admin'
                          ? 'bg-[#0F172A] text-[#D4AF37] shadow-md transform scale-105' 
                          : 'text-gray-500 hover:text-[#0F172A]'
                    }`}
                 >
                    أفراد
                 </button>
                 <button 
                    onClick={() => onSwitchRole('corporate')}
                    className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                       role === 'corporate' || role === 'broker'
                          ? 'bg-[#0F172A] text-[#D4AF37] shadow-md transform scale-105' 
                          : 'text-gray-500 hover:text-[#0F172A]'
                    }`}
                 >
                    شركات
                 </button>
              </div>
           </div>

           {/* Right (RTL Left) Actions */}
           <div className="flex items-center gap-5">
              <button className="relative p-2.5 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-[#0F172A] transition-all border border-transparent hover:border-gray-100">
                 <Bell size={22} />
                 <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
              </button>
              
              <div className="w-px h-8 bg-gray-200"></div>

              <div className="flex items-center gap-3 cursor-pointer group">
                 <div className="text-left hidden xl:block">
                    <p className="text-sm font-bold text-[#0F172A] group-hover:text-[#D4AF37] transition-colors">محمد أحمد</p>
                    <p className="text-[10px] text-gray-400 font-medium">عضوية ذهبية</p>
                 </div>
                 <div className="w-11 h-11 rounded-full p-0.5 border-2 border-[#D4AF37] bg-white shadow-sm group-hover:shadow-md transition-all">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-full h-full object-cover rounded-full" />
                 </div>
              </div>
           </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:px-8 pb-12 overflow-x-hidden">
          {children}
        </main>

      </div>
    </div>
  );
};