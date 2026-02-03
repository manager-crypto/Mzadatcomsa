import React, { useState, useEffect } from 'react';
import headerLogoImage from 'figma:asset/a8f7dae8a615b46338d3333fa94f4cbe0720d1cf.png';
import headerLogoScrolledImage from 'figma:asset/67935b978652e44c12ae5e3890df993d19556317.png';
import appImage from 'figma:asset/0e3bd9719da3ae2f4de946454f9c3824f61ed6e4.png';
import supportIcon from 'figma:asset/f38856eeafacefa5cb99fce66e6ce3244c3789df.png';
import { 
  Menu, 
  X, 
  ChevronDown, 
  User, 
  Phone, 
  Calendar, 
  Clock, 
  HelpCircle, 
  MessageCircle,
  Smartphone,
  Plus,
  Gavel,
  Home,
  Building2,
  Globe,
  Map,
  LayoutGrid,
  LayoutDashboard,
  ChevronLeft,
  FileText,
  Languages,
  Info,
  Home as HomeIcon,
  Fingerprint,
  Tag,
  Key,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Settings,
  Wallet,
  BookOpen,
  Briefcase,
  Car,
  Package,
  ScanFace,
  Star
} from 'lucide-react';
import { BiddingIcon } from '../icons/BiddingIcon';
import { XIcon } from '../icons/XIcon';
import { SnapchatIcon } from '../icons/SnapchatIcon';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  onOpenLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage, onOpenLogin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isWasataOpen, setIsWasataOpen] = useState(false);
  const [isAuctionsOpen, setIsAuctionsOpen] = useState(false);
  const [isDirectSalesOpen, setIsDirectSalesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isUserDirectSalesOpen, setIsUserDirectSalesOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeWasataTab, setActiveWasataTab] = useState('residential-sale');

  const cityImages = {
    riyadh: "https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?q=80&w=1080",
    jeddah: "https://images.unsplash.com/photo-1622274421175-87b87bde7fca?q=80&w=1080",
    makkah: "https://images.unsplash.com/photo-1635829582812-62c17e5710c0?q=80&w=1080",
    madinah: "https://images.unsplash.com/photo-1738762101661-fc109403dc06?q=80&w=1080"
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ar-SA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const formatGregorianDate = (date: Date) => {
    return new Intl.DateTimeFormat('ar-SA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      calendar: 'gregory'
    }).format(date);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('ar-SA', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };

  return (
    <>
      {/* --- TOP BAR REMOVED --- */}

      {/* --- MAIN NAVIGATION --- */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-[1440px] rounded-full ${
        scrolled || currentPage !== 'home'
          ? 'top-4 bg-white/95 backdrop-blur-xl shadow-md py-4 text-gray-800' 
          : 'top-8 bg-white/10 backdrop-blur-lg border border-white/10 py-5 text-white'
      }`}>
        <div className="w-full h-full px-6 md:px-10 flex justify-between items-center">
          
          {/* Right: Logo & Main Nav */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <img 
                src={scrolled || currentPage !== 'home' ? headerLogoScrolledImage : headerLogoImage} 
                alt="Mzadat Logo" 
                className="h-16 w-auto object-contain" 
              />
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-sm">
              
              {/* Wasata Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsWasataOpen(true)}
                onMouseLeave={() => setIsWasataOpen(false)}
              >
                <button 
                  className={`flex items-center gap-1 hover:text-[#40C1C7] transition-colors ${scrolled || currentPage !== 'home' ? 'text-gray-700' : 'text-white'}`}
                  onClick={() => setIsWasataOpen(!isWasataOpen)}
                >
                  الوساطة <ChevronDown size={14} />
                </button>
                <div 
                  className={`absolute top-full right-[-200px] mt-2 w-[900px] bg-white rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-75 origin-top-right overflow-hidden ${
                    isWasataOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                  }`}
                >
                  <div className="flex h-[380px]">
                    {/* Right Side: Menu */}
                    <div className="w-[280px] flex-shrink-0 p-4 border-l border-gray-100 flex flex-col gap-6 bg-white z-10">
                      {/* Residential */}
                      <div>
                         <h3 className="font-bold text-gray-900 px-3 mb-2 text-base">سكني</h3>
                         <div className="space-y-1">
                           <button 
                             onMouseEnter={() => setActiveWasataTab('residential-sale')}
                             className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group text-right ${activeWasataTab === 'residential-sale' ? 'bg-teal-50' : 'hover:bg-gray-50'}`}
                           >
                              <div>
                                 <div className={`font-bold text-sm transition-colors ${activeWasataTab === 'residential-sale' ? 'text-[#40C1C7]' : 'text-gray-900'}`}>للبيع</div>
                                 <div className={`text-[11px] mt-0.5 transition-colors ${activeWasataTab === 'residential-sale' ? 'text-[#40C1C7]/70' : 'text-gray-400'}`}>عروض البيع في منطقتك</div>
                              </div>
                              <Tag size={18} className={`transition-colors ${activeWasataTab === 'residential-sale' ? 'text-[#40C1C7]' : 'text-gray-400'}`} />
                           </button>
                           
                           <button 
                             onMouseEnter={() => setActiveWasataTab('residential-rent')}
                             className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group text-right ${activeWasataTab === 'residential-rent' ? 'bg-teal-50' : 'hover:bg-gray-50'}`}
                           >
                              <div>
                                 <div className={`font-bold text-sm transition-colors ${activeWasataTab === 'residential-rent' ? 'text-[#40C1C7]' : 'text-gray-900'}`}>للايجار</div>
                                 <div className={`text-[11px] mt-0.5 transition-colors ${activeWasataTab === 'residential-rent' ? 'text-[#40C1C7]/70' : 'text-gray-400'}`}>عروض الايجار في منطقتك</div>
                              </div>
                              <Key size={18} className={`transition-colors ${activeWasataTab === 'residential-rent' ? 'text-[#40C1C7]' : 'text-gray-400'}`} />
                           </button>
                           
                           <button 
                             onMouseEnter={() => setActiveWasataTab('residential-daily')}
                             onClick={() => { onNavigate('daily-rent'); setIsWasataOpen(false); }}
                             className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group text-right ${activeWasataTab === 'residential-daily' ? 'bg-teal-50' : 'hover:bg-gray-50'}`}
                           >
                              <div>
                                 <div className={`font-bold text-sm transition-colors ${activeWasataTab === 'residential-daily' ? 'text-[#40C1C7]' : 'text-gray-900'}`}>إيجار يومي</div>
                                 <div className={`text-[11px] mt-0.5 transition-colors ${activeWasataTab === 'residential-daily' ? 'text-[#40C1C7]/70' : 'text-gray-400'}`}>شاليهات، استراحات، مخيمات</div>
                              </div>
                              <Calendar size={18} className={`transition-colors ${activeWasataTab === 'residential-daily' ? 'text-[#40C1C7]' : 'text-gray-400'}`} />
                           </button>
                         </div>
                      </div>

                      {/* Commercial */}
                      <div>
                         <div className="flex items-center gap-2 px-3 mb-2">
                           <h3 className="font-bold text-gray-900 text-base">تجاري</h3>
                           <span className="bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold">جديد</span>
                         </div>
                         <div className="space-y-1">
                           <button 
                             onMouseEnter={() => setActiveWasataTab('commercial-sale')}
                             className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group text-right ${activeWasataTab === 'commercial-sale' ? 'bg-teal-50' : 'hover:bg-gray-50'}`}
                           >
                              <div>
                                 <div className={`font-bold text-sm transition-colors ${activeWasataTab === 'commercial-sale' ? 'text-[#40C1C7]' : 'text-gray-900'}`}>للبيع</div>
                                 <div className={`text-[11px] mt-0.5 transition-colors ${activeWasataTab === 'commercial-sale' ? 'text-[#40C1C7]/70' : 'text-gray-400'}`}>عروض البيع في منطقتك</div>
                              </div>
                              <Tag size={18} className={`transition-colors ${activeWasataTab === 'commercial-sale' ? 'text-[#40C1C7]' : 'text-gray-400'}`} />
                           </button>
                           
                           <button 
                             onMouseEnter={() => setActiveWasataTab('commercial-rent')}
                             className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group text-right ${activeWasataTab === 'commercial-rent' ? 'bg-teal-50' : 'hover:bg-gray-50'}`}
                           >
                              <div>
                                 <div className={`font-bold text-sm transition-colors ${activeWasataTab === 'commercial-rent' ? 'text-[#40C1C7]' : 'text-gray-900'}`}>للايجار</div>
                                 <div className={`text-[11px] mt-0.5 transition-colors ${activeWasataTab === 'commercial-rent' ? 'text-[#40C1C7]/70' : 'text-gray-400'}`}>عروض الايجار في منطقتك</div>
                              </div>
                              <Key size={18} className={`transition-colors ${activeWasataTab === 'commercial-rent' ? 'text-[#40C1C7]' : 'text-gray-400'}`} />
                           </button>
                         </div>
                      </div>

                      {/* Brokerage Guide Link */}
                      <div className="pt-2 border-t border-gray-100 mt-auto">
                         <button 
                           onClick={() => { onNavigate('brokerage-guide'); setIsWasataOpen(false); }}
                           className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group text-right hover:bg-gray-50"
                         >
                            <div>
                               <div className="font-bold text-sm text-gray-900 group-hover:text-[#40C1C7] transition-colors">آلية الوساطة</div>
                               <div className="text-[11px] text-gray-400 mt-0.5">الشروط والأحكام العامة</div>
                            </div>
                            <BookOpen size={18} className="text-gray-400 group-hover:text-[#40C1C7] transition-colors" />
                         </button>
                      </div>
                    </div>

                    {/* Left Side: Content */}
                    <div className="flex-1 bg-gray-50/50 p-6 relative overflow-hidden">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
                             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
                        </div>

                        {/* Residential Sale Content */}
                        {activeWasataTab === 'residential-sale' && (
                           <div className="relative animate-in fade-in slide-in-from-right-4 duration-300">
                             <div className="flex items-center justify-between mb-6">
                               <h4 className="font-bold text-xl text-gray-900">عروض البيع المميزة</h4>
                               <a href="#" className="flex items-center gap-1 text-sm text-[#40C1C7] font-bold hover:underline">
                                 عرض الكل <ChevronLeft size={16} />
                               </a>
                             </div>
                             
                             <div className="grid grid-cols-4 gap-4">
                               {[
                                 { name: 'الرياض', img: cityImages.riyadh, action: () => onNavigate('riyadh-sale') },
                                 { name: 'جدة', img: cityImages.jeddah, action: () => {} },
                                 { name: 'مكة', img: cityImages.makkah, action: () => {} },
                                 { name: 'المدينة', img: cityImages.madinah, action: () => {} }
                               ].map((city, idx) => (
                                 <button key={idx} onClick={() => { city.action(); setIsWasataOpen(false); }} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all text-right w-full">
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                   <img src={city.img} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                   <span className="absolute bottom-3 right-3 text-white font-bold z-20">{city.name}</span>
                                 </button>
                               ))}
                             </div>
                           </div>
                        )}

                        {/* Residential Rent Content */}
                        {activeWasataTab === 'residential-rent' && (
                           <div className="relative animate-in fade-in slide-in-from-right-4 duration-300">
                             <div className="flex items-center justify-between mb-6">
                               <h4 className="font-bold text-xl text-gray-900">عروض الإيجار المميزة</h4>
                               <a href="#" className="flex items-center gap-1 text-sm text-[#40C1C7] font-bold hover:underline">
                                 عرض الكل <ChevronLeft size={16} />
                               </a>
                             </div>
                             
                             <div className="grid grid-cols-4 gap-4">
                               {[
                                 { name: 'الرياض', img: cityImages.riyadh },
                                 { name: 'جدة', img: cityImages.jeddah },
                                 { name: 'مكة', img: cityImages.makkah },
                                 { name: 'المدينة', img: cityImages.madinah }
                               ].reverse().map((city, idx) => (
                                 <a key={idx} href="#" className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                   <img src={city.img} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                   <span className="absolute bottom-3 right-3 text-white font-bold z-20">{city.name}</span>
                                 </a>
                               ))}
                             </div>
                           </div>
                        )}

                        {/* Residential Daily Content */}
                        {activeWasataTab === 'residential-daily' && (
                           <div className="relative animate-in fade-in slide-in-from-right-4 duration-300">
                             <div className="flex items-center justify-between mb-6">
                               <h4 className="font-bold text-xl text-gray-900">عروض الإيجار اليومي</h4>
                               <button onClick={() => { onNavigate('daily-rent'); setIsWasataOpen(false); }} className="flex items-center gap-1 text-sm text-[#40C1C7] font-bold hover:underline">
                                 عرض الكل <ChevronLeft size={16} />
                               </button>
                             </div>
                             
                             <div className="grid grid-cols-2 gap-4">
                                <button onClick={() => { onNavigate('daily-rent'); setIsWasataOpen(false); }} className="relative flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all group overflow-hidden">
                                   <div className="w-16 h-16 bg-teal-50 rounded-lg flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all">
                                     <Home size={32} />
                                   </div>
                                   <div className="text-right">
                                     <h5 className="font-bold text-gray-900 mb-1">شاليهات واستراحات</h5>
                                     <p className="text-xs text-gray-400">للعطلات والمناسبات</p>
                                   </div>
                                   <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                                      <span className="text-xs font-bold text-yellow-700">4.9</span>
                                      <Star size={10} className="fill-yellow-500 text-yellow-500" />
                                   </div>
                                </button>
                                
                                <button onClick={() => { onNavigate('daily-rent'); setIsWasataOpen(false); }} className="relative flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all group overflow-hidden">
                                   <div className="w-16 h-16 bg-teal-50 rounded-lg flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all">
                                     <LayoutGrid size={32} />
                                   </div>
                                   <div className="text-right">
                                     <h5 className="font-bold text-gray-900 mb-1">مخيمات برية</h5>
                                     <p className="text-xs text-gray-400">تجهيزات متكاملة</p>
                                   </div>
                                   <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                                      <span className="text-xs font-bold text-yellow-700">4.8</span>
                                      <Star size={10} className="fill-yellow-500 text-yellow-500" />
                                   </div>
                                </button>

                                <button onClick={() => { onNavigate('daily-rent'); setIsWasataOpen(false); }} className="relative flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all group overflow-hidden">
                                   <div className="w-16 h-16 bg-teal-50 rounded-lg flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all">
                                     <Building2 size={32} />
                                   </div>
                                   <div className="text-right">
                                     <h5 className="font-bold text-gray-900 mb-1">شقق فندقية</h5>
                                     <p className="text-xs text-gray-400">إقامة مريحة وفاخرة</p>
                                   </div>
                                   <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                                      <span className="text-xs font-bold text-yellow-700">4.7</span>
                                      <Star size={10} className="fill-yellow-500 text-yellow-500" />
                                   </div>
                                </button>

                                <button onClick={() => { onNavigate('daily-rent'); setIsWasataOpen(false); }} className="relative flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all group overflow-hidden">
                                   <div className="w-16 h-16 bg-teal-50 rounded-lg flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all">
                                     <HomeIcon size={32} />
                                   </div>
                                   <div className="text-right">
                                     <h5 className="font-bold text-gray-900 mb-1">فلل خاصة</h5>
                                     <p className="text-xs text-gray-400">خصوصية تامة للعوائل</p>
                                   </div>
                                   <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                                      <span className="text-xs font-bold text-yellow-700">4.9</span>
                                      <Star size={10} className="fill-yellow-500 text-yellow-500" />
                                   </div>
                                </button>
                             </div>
                           </div>
                        )}

                        {/* Commercial Sale Content */}
                        {activeWasataTab === 'commercial-sale' && (
                           <div className="relative animate-in fade-in slide-in-from-right-4 duration-300">
                             <div className="flex items-center justify-between mb-6">
                               <h4 className="font-bold text-xl text-gray-900">عقارات تجارية للبيع</h4>
                               <a href="#" className="flex items-center gap-1 text-sm text-[#40C1C7] font-bold hover:underline">
                                 عرض الكل <ChevronLeft size={16} />
                               </a>
                             </div>
                             
                             <div className="grid grid-cols-2 gap-4">
                                <a href="#" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all group">
                                   <div className="w-16 h-16 bg-teal-50 rounded-lg flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all">
                                     <Building2 size={32} />
                                   </div>
                                   <div>
                                     <h5 className="font-bold text-gray-900 mb-1">مكاتب تجارية</h5>
                                     <p className="text-xs text-gray-400">مساحات مكتبية متنوعة</p>
                                   </div>
                                </a>
                                <a href="#" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all group">
                                   <div className="w-16 h-16 bg-teal-50 rounded-lg flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all">
                                     <LayoutGrid size={32} />
                                   </div>
                                   <div>
                                     <h5 className="font-bold text-gray-900 mb-1">معارض ومحلات</h5>
                                     <p className="text-xs text-gray-400">مواقع استراتيجية</p>
                                   </div>
                                </a>
                             </div>
                           </div>
                        )}

                        {/* Commercial Rent Content */}
                        {activeWasataTab === 'commercial-rent' && (
                           <div className="relative animate-in fade-in slide-in-from-right-4 duration-300">
                             <div className="flex items-center justify-between mb-6">
                               <h4 className="font-bold text-xl text-gray-900">عقارات تجارية للإيجار</h4>
                               <a href="#" className="flex items-center gap-1 text-sm text-[#40C1C7] font-bold hover:underline">
                                 عرض الكل <ChevronLeft size={16} />
                               </a>
                             </div>
                             
                             <div className="grid grid-cols-2 gap-4">
                                <a href="#" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all group">
                                   <div className="w-16 h-16 bg-teal-50 rounded-lg flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all">
                                     <Building2 size={32} />
                                   </div>
                                   <div>
                                     <h5 className="font-bold text-gray-900 mb-1">مكاتب مفروشة</h5>
                                     <p className="text-xs text-gray-400">جاهزة للعمل فوراً</p>
                                   </div>
                                </a>
                                <a href="#" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all group">
                                   <div className="w-16 h-16 bg-teal-50 rounded-lg flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all">
                                     <LayoutGrid size={32} />
                                   </div>
                                   <div>
                                     <h5 className="font-bold text-gray-900 mb-1">مستودعات</h5>
                                     <p className="text-xs text-gray-400">مساحات تخزينية آمنة</p>
                                   </div>
                                </a>
                             </div>
                           </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Auctions Dropdown */}
              <div className="relative group">
                <button 
                  className={`relative flex items-center gap-1 hover:text-[#40C1C7] transition-colors ${scrolled || currentPage !== 'home' ? 'text-gray-700' : 'text-white'} ${currentPage === 'auctions' ? 'font-bold' : ''}`}
                  onClick={() => setIsAuctionsOpen(!isAuctionsOpen)}
                  onMouseEnter={() => setIsAuctionsOpen(true)}
                  onMouseLeave={() => setIsAuctionsOpen(false)}
                >
                  المزادات <ChevronDown size={14} />
                  <span className="absolute -top-1 -left-1.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#40C1C7] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#40C1C7]"></span>
                  </span>
                </button>
                
                <div 
                  className={`absolute top-full right-[-50px] mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 transform transition-all duration-200 origin-top-right ${
                    isAuctionsOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                  }`}
                  onMouseEnter={() => setIsAuctionsOpen(true)}
                  onMouseLeave={() => setIsAuctionsOpen(false)}
                >
                  <div className="flex flex-col gap-1">
                     <button onClick={() => { onNavigate('auctions'); setIsAuctionsOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-teal-50 hover:text-[#40C1C7] transition-colors text-right group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#40C1C7] transition-colors">
                           <Building2 size={18} />
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#40C1C7]">العقارات</div>
                           <div className="text-[10px] text-gray-400">فلل، أراضي، عمائر</div>
                        </div>
                     </button>

                     <button onClick={() => { onNavigate('car-auctions'); setIsAuctionsOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-teal-50 hover:text-[#40C1C7] transition-colors text-right group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#40C1C7] transition-colors">
                           <Car size={18} />
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#40C1C7]">السيارات</div>
                           <div className="text-[10px] text-gray-400">مركبات ومعدات ثقيلة</div>
                        </div>
                     </button>

                     <button onClick={() => { onNavigate('car-plates-auctions'); setIsAuctionsOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-teal-50 hover:text-[#40C1C7] transition-colors text-right group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#40C1C7] transition-colors">
                           <LayoutGrid size={18} /> 
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#40C1C7]">لوحات السيارات</div>
                           <div className="text-[10px] text-gray-400">أرقام مميزة</div>
                        </div>
                     </button>

                     <button onClick={() => { onNavigate('other-auctions'); setIsAuctionsOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-teal-50 hover:text-[#40C1C7] transition-colors text-right group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#40C1C7] transition-colors">
                           <Package size={18} /> 
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#40C1C7]">أخرى</div>
                           <div className="text-[10px] text-gray-400">كمبيوترات، معدات، آليات...</div>
                        </div>
                     </button>

                     <div className="pt-2 mt-1 border-t border-gray-100 flex flex-col gap-1">
                       <button 
                         onClick={() => { onNavigate('auction-guide'); setIsAuctionsOpen(false); }} 
                         className="w-full flex items-center justify-center gap-2 py-2 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 hover:text-[#40C1C7] transition-all"
                       >
                          <Gavel size={16} />
                          <span>دليل المزايدة والشروط</span>
                       </button>

                       <button 
                         onClick={() => { onNavigate('add-auction'); setIsAuctionsOpen(false); }} 
                         className="w-full flex items-center justify-center gap-2 py-2.5 bg-teal-50 text-[#40C1C7] rounded-lg font-bold text-sm hover:bg-[#40C1C7] hover:text-white transition-all group"
                       >
                          <Plus size={16} />
                          <span>آلية إنشاء المزاد</span>
                       </button>
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Direct Sales Dropdown (NEW) */}
              <div className="relative group">
                <button 
                  className={`flex items-center gap-1 hover:text-[#40C1C7] transition-colors ${scrolled || currentPage !== 'home' ? 'text-gray-700' : 'text-white'}`}
                  onClick={() => setIsDirectSalesOpen(!isDirectSalesOpen)}
                  onMouseEnter={() => setIsDirectSalesOpen(true)}
                  onMouseLeave={() => setIsDirectSalesOpen(false)}
                >
                  شراء فوري <ChevronDown size={14} />
                </button>
                
                <div 
                  className={`absolute top-full right-[-50px] mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 transform transition-all duration-200 origin-top-right ${
                    isDirectSalesOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                  }`}
                  onMouseEnter={() => setIsDirectSalesOpen(true)}
                  onMouseLeave={() => setIsDirectSalesOpen(false)}
                >
                  <div className="flex flex-col gap-1">


                     <button onClick={() => { onNavigate('direct-sale-cars'); setIsDirectSalesOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-teal-50 hover:text-[#40C1C7] transition-colors text-right group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#40C1C7] transition-colors">
                           <Car size={18} />
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#40C1C7]">السيارات</div>
                           <div className="text-[10px] text-gray-400">مركبات بأسعار ثابتة</div>
                        </div>
                     </button>

                     <button onClick={() => { onNavigate('direct-sale-plates'); setIsDirectSalesOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-teal-50 hover:text-[#40C1C7] transition-colors text-right group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#40C1C7] transition-colors">
                           <LayoutGrid size={18} /> 
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#40C1C7]">لوحات السيارات</div>
                           <div className="text-[10px] text-gray-400">نقل ملكية فوري</div>
                        </div>
                     </button>

                     <button onClick={() => { onNavigate('direct-sale-other'); setIsDirectSalesOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-teal-50 hover:text-[#40C1C7] transition-colors text-right group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#40C1C7] transition-colors">
                           <Package size={18} /> 
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#40C1C7]">أخرى</div>
                           <div className="text-[10px] text-gray-400">منتجات متنوعة</div>
                        </div>
                     </button>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => onNavigate('advertisers')}
                className={`hover:text-[#40C1C7] transition-colors ${scrolled || currentPage !== 'home' ? 'text-gray-700' : 'text-white'} ${currentPage === 'advertisers' ? 'font-bold' : ''}`}
              >
                للمعلنين
              </button>

              <button 
                onClick={() => onNavigate('my-requests')}
                className={`hover:text-[#40C1C7] transition-colors ${scrolled || currentPage !== 'home' ? 'text-gray-700' : 'text-white'} ${currentPage === 'my-requests' ? 'font-bold' : ''}`}
              >
                طلبات العملاء
              </button>

              {/* More Dropdown */}
              <div className="relative group">
                <button 
                  className={`flex items-center gap-1 hover:text-[#40C1C7] transition-colors ${scrolled || currentPage !== 'home' ? 'text-gray-700' : 'text-white'}`}
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onMouseLeave={() => setIsMoreOpen(false)}
                >
                  المزيد <ChevronDown size={14} />
                </button>
                
                <div 
                  className={`absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-4 transform transition-all duration-200 origin-top-right ${
                    isMoreOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                  }`}
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onMouseLeave={() => setIsMoreOpen(false)}
                >
                  <div className="space-y-4 text-gray-800">
                    <a href="#" className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 hover:text-[#40C1C7] transition-colors text-sm font-medium">
                       <LayoutGrid size={18} className="text-gray-400" />
                       المخططات
                    </a>
                    
                    <button onClick={() => onNavigate('training')} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 hover:text-[#40C1C7] transition-colors text-sm font-medium w-full text-right">
                       <BookOpen size={18} className="text-gray-400" />
                       أكاديمية مزاد��ت
                    </button>

                    <button onClick={() => onNavigate('careers')} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 hover:text-[#40C1C7] transition-colors text-sm font-medium w-full text-right">
                       <Briefcase size={18} className="text-gray-400" />
                       الوظائف
                    </button>

                    <button onClick={() => onNavigate('faq')} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 hover:text-[#40C1C7] transition-colors text-sm font-medium w-full text-right">
                       <HelpCircle size={18} className="text-gray-400" />
                       الأسئلة الشائعة
                    </button>
                    
                    <div className="border-t border-gray-100 pt-3">
                       <div className="flex items-center gap-3 mb-2 text-gray-700">
                         <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-[#40C1C7]">
                           <Phone size={14} />
                         </div>
                         <div className="text-sm">
                           <p className="font-bold" dir="ltr">055 030 0400</p>
                           <p className="text-[10px] text-gray-500">الأحد - الخميس (8ص - 5م)</p>
                         </div>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-2 mt-3">
                         <button className="flex items-center justify-center gap-2 py-2 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100 transition-colors">
                           <MessageCircle size={14} /> واتساب
                         </button>
                         <button className="flex items-center justify-center gap-2 py-2 bg-gray-900 text-white rounded-lg text-xs font-bold hover:bg-gray-700 transition-colors">
                           <Phone size={14} /> إتصال
                         </button>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left: Actions & Utility */}
          <div className="flex items-center gap-4">
             {/* Wallet Button */}
             <button 
               onClick={() => onNavigate('wallet')}
               className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
               scrolled || currentPage !== 'home'
                 ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                 : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'
             }`}>
               <Wallet size={16} />
               <span>المحفظة</span>
             </button>

             {/* Add Ad Button - Hidden on smaller screens */}
             <button 
               onClick={() => onNavigate('add-ad')}
               className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:text-[#40C1C7] hover:border-[#40C1C7] transition-all"
             >
                 <Plus size={16} /> أضف إعلان
             </button>

             {/* Add Auction Button - Hidden on smaller screens */}
             <button 
               onClick={() => onNavigate('add-auction')}
               className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#40C1C7] rounded-full hover:bg-[#35a4a9] shadow-lg shadow-teal-500/20 transition-all"
             >
                 <Plus size={16} /> أضف مزاد
             </button>

             {/* Support Button */}
             <button 
               onClick={() => onNavigate('support')}
               className={`hidden xl:flex items-center gap-2 px-2 text-sm font-medium hover:text-[#40C1C7] transition-all ${
                 scrolled || currentPage !== 'home' ? 'text-gray-500' : 'text-white/80'
               }`}
               title="الدعم والاتصال"
             >
                 <img 
                   src={supportIcon} 
                   alt="الدعم والاتصال" 
                   className={`w-6 h-6 object-contain transition-all ${scrolled || currentPage !== 'home' ? 'brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 hover:sepia hover:saturate-[100] hover:hue-rotate-[130deg]' : ''}`}
                 />
             </button>

             {/* Combined Menu Button / User Menu - Used as Trigger for Side Menu on Mobile */}
             <div 
                className="relative group"
                onMouseEnter={() => {
                   if (window.innerWidth >= 1024) setIsUserMenuOpen(true);
                }}
                onMouseLeave={() => setIsUserMenuOpen(false)}
             >
               <button 
                 onClick={() => {
                    if (window.innerWidth < 1024) {
                      setIsMobileMenuOpen(true);
                    } else {
                      setIsUserMenuOpen(!isUserMenuOpen);
                    }
                 }}
                 className={`flex items-center gap-3 px-2 pl-2 pr-3 py-1.5 rounded-full border transition-all duration-100 active:scale-95 ${
                    scrolled || currentPage !== 'home'
                     ? 'bg-white border-gray-200 text-gray-700 hover:shadow-md'
                     : 'bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md'
                 }`}
               >
                 <Menu size={20} />
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    scrolled || currentPage !== 'home' ? 'bg-gray-100 text-gray-600' : 'bg-white/20 text-white'
                 }`}>
                   <User size={16} />
                 </div>
               </button>

               {/* Desktop User Dropdown */}
               <div 
                 className={`hidden lg:block absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 transform transition-all duration-75 origin-top-left z-50 overflow-hidden ${
                    isUserMenuOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                 }`}
               >
                     <div className="p-3 border-b border-gray-100 mb-2 bg-gray-50 rounded-xl">
                       <p className="text-xs text-gray-500 mb-1">حياك الله</p>
                       <button onClick={() => { onOpenLogin(); setIsUserMenuOpen(false); }} className="w-full py-2 bg-[#40C1C7] text-white rounded-lg text-sm font-bold shadow-md shadow-teal-500/20 mb-2">تسجيل الدخول / إنشاء حساب</button>
                       <button 
                         onClick={() => { onNavigate('nafath-login'); setIsUserMenuOpen(false); }}
                         className="w-full py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-bold hover:border-[#107055] hover:text-[#107055] transition-all flex items-center justify-center gap-2"
                       >
                         <div className="flex items-center gap-1">
                           <ScanFace size={16} />
                           <Fingerprint size={16} />
                         </div>
                         دخول عبر نفاذ
                       </button>
                     </div>
                     
                     <button onClick={() => { onNavigate('dashboard'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#40C1C7] transition-colors text-sm">
                       <LayoutDashboard size={18} /> لوحة التحكم
                     </button>
                     <button onClick={() => { onNavigate('dashboard'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#40C1C7] transition-colors text-sm">
                       <BiddingIcon size={18} /> مزاداتي
                     </button>
                     <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#40C1C7] transition-colors text-sm">
                       <FileText size={18} /> الوساطة
                     </a>

                     {/* User Menu Direct Sales Toggle */}
                     <div className="overflow-hidden transition-all">
                        <button 
                           onClick={(e) => { 
                              e.stopPropagation(); 
                              setIsUserDirectSalesOpen(!isUserDirectSalesOpen); 
                           }} 
                           className={`w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#40C1C7] transition-colors text-sm ${isUserDirectSalesOpen ? 'bg-gray-50 text-[#40C1C7]' : ''}`}
                        >
                           <div className="flex items-center gap-3">
                              <Tag size={18} /> 
                              <span>شراء فوري</span>
                           </div>
                           <ChevronDown size={14} className={`transition-transform ${isUserDirectSalesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Submenu */}
                        {isUserDirectSalesOpen && (
                           <div className="bg-gray-50/50 rounded-lg mx-2 my-1 animate-in slide-in-from-top-2 duration-200">
                              <button onClick={() => { onNavigate('direct-sale-cars'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-2 px-8 py-2.5 text-xs text-gray-600 hover:text-[#40C1C7] font-medium transition-colors">
                                 <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                                 السيارات
                              </button>
                              <button onClick={() => { onNavigate('direct-sale-plates'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-2 px-8 py-2.5 text-xs text-gray-600 hover:text-[#40C1C7] font-medium transition-colors">
                                 <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                                 لوحات السيارات
                              </button>
                               <button onClick={() => { onNavigate('direct-sale-other'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-2 px-8 py-2.5 text-xs text-gray-600 hover:text-[#40C1C7] font-medium transition-colors">
                                 <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                                 أخرى
                              </button>
                           </div>
                        )}
                     </div>

                     <button onClick={() => { onNavigate('wallet'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#40C1C7] transition-colors text-sm">
                       <Wallet size={18} /> المحفظة
                     </button>
                     <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#40C1C7] transition-colors text-sm">
                       <Settings size={18} /> الإعدادات
                     </a>
                     <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#40C1C7] transition-colors text-sm">
                       <Smartphone size={18} /> تحميل التطبيق
                     </button>
               </div>
             </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDE MENU DRAWER --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="relative w-full max-w-sm h-full bg-[#F8F9FA] shadow-2xl overflow-y-auto animate-slide-in-right p-4 flex flex-col gap-4">
            
            {/* Header / Close */}
            <div className="flex justify-end mb-2">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-white rounded-full text-gray-500 hover:bg-gray-100 shadow-sm"
              >
                <X size={20} />
              </button>
            </div>

            {/* Login Section */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center md:text-right">
              <h3 className="text-gray-900 font-bold mb-1">سجل الدخول للحصول</h3>
              <p className="text-gray-900 font-bold mb-4">على تجربة أفضل!</p>
              <div className="flex flex-col gap-3">
                <button onClick={() => { onOpenLogin(); setIsMobileMenuOpen(false); }} className="w-full py-2.5 border border-gray-300 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors">
                  تسجيل الدخول
                </button>
                <button 
                  onClick={() => { onNavigate('nafath-login'); setIsMobileMenuOpen(false); }}
                  className="w-full py-2.5 bg-[#107055]/5 border border-[#107055] text-[#107055] rounded-xl font-bold hover:bg-[#107055] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <div className="flex items-center gap-1">
                    <ScanFace size={18} />
                    <Fingerprint size={18} />
                  </div>
                  دخول عبر نفاذ
                </button>
              </div>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col gap-3">
              {/* Dashboard Link (Mobile) */}
              <div 
                onClick={() => {
                  onNavigate('dashboard');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-teal-50 hover:border-[#40C1C7] transition-all group"
              >
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all duration-300">
                       <LayoutDashboard size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-gray-900 group-hover:text-[#40C1C7] transition-colors">لوحة التحكم</h4>
                       <p className="text-xs text-gray-400 group-hover:text-[#40C1C7]/70 transition-colors">إدارة حسابك ونشاطك</p>
                    </div>
                 </div>
                 <ChevronLeft size={20} className="text-gray-400 group-hover:text-[#40C1C7] transition-colors" />
              </div>

              {/* Real Estate */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-teal-50 hover:border-[#40C1C7] transition-all group">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all duration-300">
                       <HomeIcon size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-gray-900 group-hover:text-[#40C1C7] transition-colors">العقارات</h4>
                       <p className="text-xs text-gray-400 group-hover:text-[#40C1C7]/70 transition-colors">اكتشف العقارات</p>
                    </div>
                 </div>
                 <ChevronDown size={20} className="text-gray-400 group-hover:text-[#40C1C7] transition-colors" />
              </div>

              {/* Request Broker */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-teal-50 hover:border-[#40C1C7] transition-all group">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all duration-300">
                       <FileText size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-gray-900 group-hover:text-[#40C1C7] transition-colors">أطلب وسيطك</h4>
                       <p className="text-xs text-gray-400 group-hover:text-[#40C1C7]/70 transition-colors">سجل طلبك العقاري</p>
                    </div>
                 </div>
                 <ChevronLeft size={20} className="text-gray-400 group-hover:text-[#40C1C7] transition-colors" />
              </div>

              {/* Auctions */}
              <div 
                onClick={() => {
                  onNavigate('auctions');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-teal-50 hover:border-[#40C1C7] transition-all group"
              >
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all duration-300">
                       <BiddingIcon size={24} />
                    </div>
                    <div>
                       <div className="flex items-center gap-2">
                         <h4 className="font-bold text-gray-900 group-hover:text-[#40C1C7] transition-colors">المزادات</h4>
                         <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                       </div>
                       <p className="text-xs text-gray-400 group-hover:text-[#40C1C7]/70 transition-colors">الجارية، القادمة والمنتهية</p>
                    </div>
                 </div>
                 <ChevronLeft size={20} className="text-gray-400 group-hover:text-[#40C1C7] transition-colors" />
              </div>

              {/* Projects */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-teal-50 hover:border-[#40C1C7] transition-all group">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-[#40C1C7] group-hover:bg-[#40C1C7] group-hover:text-white transition-all duration-300">
                       <Globe size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#40C1C7] transition-colors">المشاريع العالمية والفاخرة</h4>
                       <p className="text-xs text-gray-400 group-hover:text-[#40C1C7]/70 transition-colors">روائع معمارية بمعايير عالمية</p>
                    </div>
                 </div>
                 <ChevronLeft size={20} className="text-gray-400 group-hover:text-[#40C1C7] transition-colors" />
              </div>
            </div>

            {/* Add Buttons */}
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  onNavigate('add-ad');
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 bg-white border border-gray-200 text-gray-700 py-4 rounded-2xl hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all flex items-center justify-center gap-2 font-bold text-sm"
              >
                 <Plus size={16} />
                 إضافة إعلان
              </button>
              <button 
                onClick={() => {
                  onNavigate('add-auction');
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 bg-[#40C1C7] text-white py-4 rounded-2xl shadow-lg shadow-teal-500/20 hover:bg-[#35a4a9] transition-colors flex items-center justify-center gap-2 font-bold text-sm"
              >
                 <Gavel size={16} />
                 إنشاء مزاد
              </button>
            </div>

            {/* Support & Settings */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
               <div onClick={() => { onNavigate('support'); setIsMobileMenuOpen(false); }} className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                     <Info size={20} className="text-gray-400" />
                     <span className="text-gray-700 font-medium">ا��مساعدة والدعم</span>
                  </div>
                  <ChevronDown size={16} className="text-gray-400" />
               </div>
               <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                     <Languages size={20} className="text-gray-400" />
                     <span className="text-gray-700 font-medium">اللغة</span>
                  </div>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-bold">English</span>
               </div>
            </div>

            {/* App Promo */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 mt-auto">
               <div className="flex-1">
                 <h4 className="font-bold text-gray-900 mb-1 leading-tight">ابحث عن عقارات أسرع على جوالك</h4>
                 <button className="mt-3 px-6 py-2 border border-[#40C1C7] text-[#40C1C7] rounded-xl text-sm font-bold hover:bg-teal-50 transition-colors w-full">
                   حمل التطبيق
                 </button>
               </div>
               <div className="w-20">
                 <img src={appImage} alt="App" className="w-full h-auto object-contain" />
               </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
