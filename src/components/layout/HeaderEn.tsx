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
  ChevronRight,
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

interface HeaderEnProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  onOpenLogin: () => void;
}

export const HeaderEn: React.FC<HeaderEnProps> = ({ onNavigate, currentPage, onOpenLogin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isWasataOpen, setIsWasataOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeWasataTab, setActiveWasataTab] = useState('residential-sale');
  const [isAuctionsOpen, setIsAuctionsOpen] = useState(false);
  const [isDirectSalesOpen, setIsDirectSalesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isUserDirectSalesOpen, setIsUserDirectSalesOpen] = useState(false);

  // Handle Language Switch
  const switchToArabic = () => {
    // Map English pages to Arabic pages
    const pageMap: Record<string, string> = {
      'home-en': 'home',
      'auctions-en': 'auctions',
      'login-en': 'login',
      'car-auctions-en': 'car-auctions',
      'live-auction-en': 'live-auction',
      'other-auctions-en': 'other-auctions',
      'car-plates-auctions-en': 'car-plates-auctions',
      'luxury-real-estate-auctions-en': 'luxury-real-estate-auctions',
      'faq-en': 'faq',
      'support-en': 'support',
      'privacy-policy-en': 'privacy-policy',
      'terms-en': 'terms',
      'training-en': 'training',
      'careers-en': 'careers',
      'dashboard-en': 'dashboard',
      'wallet-en': 'wallet',
      'daily-rent-en': 'daily-rent',
      'add-ad-en': 'add-ad',
      'add-auction-en': 'add-auction',
      'my-requests-en': 'my-requests',
      'advertisers-en': 'advertisers',
      'direct-sale-cars-en': 'direct-sale-cars',
      'direct-sale-plates-en': 'direct-sale-plates',
      'direct-sale-other-en': 'direct-sale-other',
      'plans-en': 'plans'
    };
    
    const arPage = pageMap[currentPage] || 'home';
    onNavigate(arPage);
  };

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

  return (
    <div>
      {/* --- MAIN NAVIGATION --- */}
      <nav dir="ltr" className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-[1440px] rounded-full font-sans ${
        scrolled || currentPage !== 'home-en'
          ? 'top-4 bg-[#2B3D50]/95 backdrop-blur-xl shadow-md py-4 text-white' 
          : 'top-8 bg-white/10 backdrop-blur-lg border border-white/10 py-5 text-white'
      }`} style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        <div className="w-full h-full px-6 md:px-10 flex justify-between items-center">
          
          {/* Left: Logo & Main Nav */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Logo - Always use light logo since background is always dark/navy when scrolled */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home-en')}>
              <img 
                src={headerLogoImage} 
                alt="Mzadat Logo" 
                className="h-16 w-auto object-contain" 
              />
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-sm">
              
              {/* Brokerage Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsWasataOpen(true)}
                onMouseLeave={() => setIsWasataOpen(false)}
              >
                <button 
                  className={`flex items-center gap-1 hover:text-[#47CCD0] transition-colors text-white`}
                  onClick={() => setIsWasataOpen(!isWasataOpen)}
                >
                  Brokerage <ChevronDown size={14} />
                </button>
                <div 
                  className={`absolute top-full left-[-200px] mt-2 w-[900px] bg-white rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-75 origin-top-left overflow-hidden ${
                    isWasataOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                  }`}
                >
                  <div className="flex h-[380px]">
                    {/* Left Side: Menu */}
                    <div className="w-[280px] flex-shrink-0 p-4 border-r border-gray-100 flex flex-col gap-6 bg-white z-10 text-gray-900">
                      {/* Residential */}
                      <div>
                         <h3 className="font-bold text-gray-900 px-3 mb-2 text-base">Residential</h3>
                         <div className="space-y-1">
                           <button 
                             onMouseEnter={() => setActiveWasataTab('residential-sale')}
                             className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group text-left ${activeWasataTab === 'residential-sale' ? 'bg-[#F8FAFB]' : 'hover:bg-gray-50'}`}
                           >
                              <div>
                                 <div className={`font-bold text-sm transition-colors ${activeWasataTab === 'residential-sale' ? 'text-[#47CCD0]' : 'text-gray-900'}`}>For Sale</div>
                                 <div className={`text-[11px] mt-0.5 transition-colors ${activeWasataTab === 'residential-sale' ? 'text-[#47CCD0]/70' : 'text-gray-400'}`}>Sales offers in your area</div>
                              </div>
                              <Tag size={18} className={`transition-colors ${activeWasataTab === 'residential-sale' ? 'text-[#47CCD0]' : 'text-gray-400'}`} />
                           </button>
                           
                           <button 
                             onMouseEnter={() => setActiveWasataTab('residential-rent')}
                             className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group text-left ${activeWasataTab === 'residential-rent' ? 'bg-[#F8FAFB]' : 'hover:bg-gray-50'}`}
                           >
                              <div>
                                 <div className={`font-bold text-sm transition-colors ${activeWasataTab === 'residential-rent' ? 'text-[#47CCD0]' : 'text-gray-900'}`}>For Rent</div>
                                 <div className={`text-[11px] mt-0.5 transition-colors ${activeWasataTab === 'residential-rent' ? 'text-[#47CCD0]/70' : 'text-gray-400'}`}>Rental offers in your area</div>
                              </div>
                              <Key size={18} className={`transition-colors ${activeWasataTab === 'residential-rent' ? 'text-[#47CCD0]' : 'text-gray-400'}`} />
                           </button>
                           
                           <button 
                             onMouseEnter={() => setActiveWasataTab('residential-daily')}
                             onClick={() => { onNavigate('daily-rent-en'); setIsWasataOpen(false); }}
                             className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group text-left ${activeWasataTab === 'residential-daily' ? 'bg-[#F8FAFB]' : 'hover:bg-gray-50'}`}
                           >
                              <div>
                                 <div className={`font-bold text-sm transition-colors ${activeWasataTab === 'residential-daily' ? 'text-[#47CCD0]' : 'text-gray-900'}`}>Daily Rent</div>
                                 <div className={`text-[11px] mt-0.5 transition-colors ${activeWasataTab === 'residential-daily' ? 'text-[#47CCD0]/70' : 'text-gray-400'}`}>Chalets, resorts, camps</div>
                              </div>
                              <Calendar size={18} className={`transition-colors ${activeWasataTab === 'residential-daily' ? 'text-[#47CCD0]' : 'text-gray-400'}`} />
                           </button>
                         </div>
                      </div>

                      {/* Commercial */}
                      <div>
                         <div className="flex items-center gap-2 px-3 mb-2">
                           <h3 className="font-bold text-gray-900 text-base">Commercial</h3>
                           <span className="bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold">New</span>
                         </div>
                         <div className="space-y-1">
                           <button 
                             onMouseEnter={() => setActiveWasataTab('commercial-sale')}
                             className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group text-left ${activeWasataTab === 'commercial-sale' ? 'bg-[#F8FAFB]' : 'hover:bg-gray-50'}`}
                           >
                              <div>
                                 <div className={`font-bold text-sm transition-colors ${activeWasataTab === 'commercial-sale' ? 'text-[#47CCD0]' : 'text-gray-900'}`}>For Sale</div>
                                 <div className={`text-[11px] mt-0.5 transition-colors ${activeWasataTab === 'commercial-sale' ? 'text-[#47CCD0]/70' : 'text-gray-400'}`}>Sales offers in your area</div>
                              </div>
                              <Tag size={18} className={`transition-colors ${activeWasataTab === 'commercial-sale' ? 'text-[#47CCD0]' : 'text-gray-400'}`} />
                           </button>
                           
                           <button 
                             onMouseEnter={() => setActiveWasataTab('commercial-rent')}
                             className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group text-left ${activeWasataTab === 'commercial-rent' ? 'bg-[#F8FAFB]' : 'hover:bg-gray-50'}`}
                           >
                              <div>
                                 <div className={`font-bold text-sm transition-colors ${activeWasataTab === 'commercial-rent' ? 'text-[#47CCD0]' : 'text-gray-900'}`}>For Rent</div>
                                 <div className={`text-[11px] mt-0.5 transition-colors ${activeWasataTab === 'commercial-rent' ? 'text-[#47CCD0]/70' : 'text-gray-400'}`}>Rental offers in your area</div>
                              </div>
                              <Key size={18} className={`transition-colors ${activeWasataTab === 'commercial-rent' ? 'text-[#47CCD0]' : 'text-gray-400'}`} />
                           </button>
                         </div>
                      </div>

                      {/* Brokerage Guide Link */}
                      <div className="pt-2 border-t border-gray-100 mt-auto">
                         <button 
                           onClick={() => { onNavigate('brokerage-guide-en'); setIsWasataOpen(false); }}
                           className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group text-left hover:bg-gray-50"
                         >
                            <div>
                               <div className="font-bold text-sm text-gray-900 group-hover:text-[#47CCD0] transition-colors">Brokerage Mechanism</div>
                               <div className="text-[11px] text-gray-400 mt-0.5">General Terms and Conditions</div>
                            </div>
                            <BookOpen size={18} className="text-gray-400 group-hover:text-[#47CCD0] transition-colors" />
                         </button>
                      </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="flex-1 bg-gray-50/50 p-6 relative overflow-hidden text-gray-900">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
                             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
                        </div>

                        {/* Residential Sale Content */}
                        {activeWasataTab === 'residential-sale' && (
                           <div className="relative animate-in fade-in slide-in-from-left-4 duration-300">
                             <div className="flex items-center justify-between mb-6">
                               <h4 className="font-bold text-xl text-gray-900">Featured Sales Offers</h4>
                               <a href="#" className="flex items-center gap-1 text-sm text-[#47CCD0] font-bold hover:underline">
                                 View All <ChevronRight size={16} />
                               </a>
                             </div>
                             
                             <div className="grid grid-cols-4 gap-4">
                               {[
                                 { name: 'Riyadh', img: cityImages.riyadh, action: () => onNavigate('riyadh-sale-en') },
                                 { name: 'Jeddah', img: cityImages.jeddah, action: () => {} },
                                 { name: 'Makkah', img: cityImages.makkah, action: () => {} },
                                 { name: 'Madinah', img: cityImages.madinah, action: () => {} }
                               ].map((city, idx) => (
                                 <button key={idx} onClick={() => { city.action(); setIsWasataOpen(false); }} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all text-left w-full">
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                   <img src={city.img} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                   <span className="absolute bottom-3 left-3 text-white font-bold z-20">{city.name}</span>
                                 </button>
                               ))}
                             </div>
                           </div>
                        )}

                        {/* Residential Rent Content */}
                        {activeWasataTab === 'residential-rent' && (
                           <div className="relative animate-in fade-in slide-in-from-left-4 duration-300">
                             <div className="flex items-center justify-between mb-6">
                               <h4 className="font-bold text-xl text-gray-900">Featured Rental Offers</h4>
                               <a href="#" className="flex items-center gap-1 text-sm text-[#47CCD0] font-bold hover:underline">
                                 View All <ChevronRight size={16} />
                               </a>
                             </div>
                             
                             <div className="grid grid-cols-4 gap-4">
                               {[
                                 { name: 'Madinah', img: cityImages.madinah },
                                 { name: 'Makkah', img: cityImages.makkah },
                                 { name: 'Jeddah', img: cityImages.jeddah },
                                 { name: 'Riyadh', img: cityImages.riyadh }
                               ].map((city, idx) => (
                                 <a key={idx} href="#" className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                   <img src={city.img} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                   <span className="absolute bottom-3 left-3 text-white font-bold z-20">{city.name}</span>
                                 </a>
                               ))}
                             </div>
                           </div>
                        )}

                        {/* Residential Daily Content */}
                        {activeWasataTab === 'residential-daily' && (
                           <div className="relative animate-in fade-in slide-in-from-left-4 duration-300">
                             <div className="flex items-center justify-between mb-6">
                               <h4 className="font-bold text-xl text-gray-900">Daily Rental Offers</h4>
                               <button onClick={() => { onNavigate('daily-rent-en'); setIsWasataOpen(false); }} className="flex items-center gap-1 text-sm text-[#47CCD0] font-bold hover:underline">
                                 View All <ChevronRight size={16} />
                               </button>
                             </div>
                             
                             <div className="grid grid-cols-2 gap-4">
                                <button onClick={() => { onNavigate('daily-rent-en'); setIsWasataOpen(false); }} className="relative flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#47CCD0] transition-all group overflow-hidden">
                                   <div className="w-16 h-16 bg-[#F8FAFB] rounded-lg flex items-center justify-center text-[#47CCD0] group-hover:bg-[#47CCD0] group-hover:text-white transition-all">
                                     <Home size={32} />
                                   </div>
                                   <div className="text-left">
                                     <h5 className="font-bold text-gray-900 mb-1">Chalets & Resorts</h5>
                                     <p className="text-xs text-gray-400">For holidays and events</p>
                                   </div>
                                   <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                                      <span className="text-xs font-bold text-yellow-700">4.9</span>
                                      <Star size={10} className="fill-yellow-500 text-yellow-500" />
                                   </div>
                                </button>
                                
                                <button onClick={() => { onNavigate('daily-rent-en'); setIsWasataOpen(false); }} className="relative flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#47CCD0] transition-all group overflow-hidden">
                                   <div className="w-16 h-16 bg-[#F8FAFB] rounded-lg flex items-center justify-center text-[#47CCD0] group-hover:bg-[#47CCD0] group-hover:text-white transition-all">
                                     <LayoutGrid size={32} />
                                   </div>
                                   <div className="text-left">
                                     <h5 className="font-bold text-gray-900 mb-1">Desert Camps</h5>
                                     <p className="text-xs text-gray-400">Fully equipped</p>
                                   </div>
                                   <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                                      <span className="text-xs font-bold text-yellow-700">4.8</span>
                                      <Star size={10} className="fill-yellow-500 text-yellow-500" />
                                   </div>
                                </button>

                                <button onClick={() => { onNavigate('daily-rent-en'); setIsWasataOpen(false); }} className="relative flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#47CCD0] transition-all group overflow-hidden">
                                   <div className="w-16 h-16 bg-[#F8FAFB] rounded-lg flex items-center justify-center text-[#47CCD0] group-hover:bg-[#47CCD0] group-hover:text-white transition-all">
                                     <Building2 size={32} />
                                   </div>
                                   <div className="text-left">
                                     <h5 className="font-bold text-gray-900 mb-1">Hotel Apartments</h5>
                                     <p className="text-xs text-gray-400">Comfortable & luxury stay</p>
                                   </div>
                                   <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                                      <span className="text-xs font-bold text-yellow-700">4.7</span>
                                      <Star size={10} className="fill-yellow-500 text-yellow-500" />
                                   </div>
                                </button>

                                <button onClick={() => { onNavigate('daily-rent-en'); setIsWasataOpen(false); }} className="relative flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#47CCD0] transition-all group overflow-hidden">
                                   <div className="w-16 h-16 bg-[#F8FAFB] rounded-lg flex items-center justify-center text-[#47CCD0] group-hover:bg-[#47CCD0] group-hover:text-white transition-all">
                                     <HomeIcon size={32} />
                                   </div>
                                   <div className="text-left">
                                     <h5 className="font-bold text-gray-900 mb-1">Private Villas</h5>
                                     <p className="text-xs text-gray-400">Complete privacy for families</p>
                                   </div>
                                   <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                                      <span className="text-xs font-bold text-yellow-700">4.9</span>
                                      <Star size={10} className="fill-yellow-500 text-yellow-500" />
                                   </div>
                                </button>
                             </div>
                           </div>
                        )}

                        {/* Commercial Sale Content */}
                        {activeWasataTab === 'commercial-sale' && (
                           <div className="relative animate-in fade-in slide-in-from-left-4 duration-300">
                             <div className="flex items-center justify-between mb-6">
                               <h4 className="font-bold text-xl text-gray-900">Commercial Properties For Sale</h4>
                               <a href="#" className="flex items-center gap-1 text-sm text-[#47CCD0] font-bold hover:underline">
                                 View All <ChevronRight size={16} />
                               </a>
                             </div>
                             
                             <div className="grid grid-cols-2 gap-4">
                                <a href="#" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#47CCD0] transition-all group">
                                   <div className="w-16 h-16 bg-[#F8FAFB] rounded-lg flex items-center justify-center text-[#47CCD0] group-hover:bg-[#47CCD0] group-hover:text-white transition-all">
                                     <Building2 size={32} />
                                   </div>
                                   <div>
                                     <h5 className="font-bold text-gray-900 mb-1">Commercial Offices</h5>
                                     <p className="text-xs text-gray-400">Various office spaces</p>
                                   </div>
                                </a>
                                <a href="#" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#47CCD0] transition-all group">
                                   <div className="w-16 h-16 bg-[#F8FAFB] rounded-lg flex items-center justify-center text-[#47CCD0] group-hover:bg-[#47CCD0] group-hover:text-white transition-all">
                                     <LayoutGrid size={32} />
                                   </div>
                                   <div>
                                     <h5 className="font-bold text-gray-900 mb-1">Showrooms & Shops</h5>
                                     <p className="text-xs text-gray-400">Strategic locations</p>
                                   </div>
                                </a>
                             </div>
                           </div>
                        )}

                        {/* Commercial Rent Content */}
                        {activeWasataTab === 'commercial-rent' && (
                           <div className="relative animate-in fade-in slide-in-from-left-4 duration-300">
                             <div className="flex items-center justify-between mb-6">
                               <h4 className="font-bold text-xl text-gray-900">Commercial Properties For Rent</h4>
                               <a href="#" className="flex items-center gap-1 text-sm text-[#47CCD0] font-bold hover:underline">
                                 View All <ChevronRight size={16} />
                               </a>
                             </div>
                             
                             <div className="grid grid-cols-2 gap-4">
                                <a href="#" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#47CCD0] transition-all group">
                                   <div className="w-16 h-16 bg-[#F8FAFB] rounded-lg flex items-center justify-center text-[#47CCD0] group-hover:bg-[#47CCD0] group-hover:text-white transition-all">
                                     <Building2 size={32} />
                                   </div>
                                   <div>
                                     <h5 className="font-bold text-gray-900 mb-1">Furnished Offices</h5>
                                     <p className="text-xs text-gray-400">Ready for immediate use</p>
                                   </div>
                                </a>
                                <a href="#" className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#47CCD0] transition-all group">
                                   <div className="w-16 h-16 bg-[#F8FAFB] rounded-lg flex items-center justify-center text-[#47CCD0] group-hover:bg-[#47CCD0] group-hover:text-white transition-all">
                                     <LayoutGrid size={32} />
                                   </div>
                                   <div>
                                     <h5 className="font-bold text-gray-900 mb-1">Warehouses</h5>
                                     <p className="text-xs text-gray-400">Secure storage spaces</p>
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
                  className={`relative flex items-center gap-1 hover:text-[#47CCD0] transition-colors text-white ${currentPage === 'auctions-en' ? 'font-bold' : ''}`}
                  onClick={() => setIsAuctionsOpen(!isAuctionsOpen)}
                  onMouseEnter={() => setIsAuctionsOpen(true)}
                  onMouseLeave={() => setIsAuctionsOpen(false)}
                >
                  Auctions <ChevronDown size={14} />
                  <span className="absolute -top-1 -right-1.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#47CCD0] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#47CCD0]"></span>
                  </span>
                </button>
                
                <div 
                  className={`absolute top-full left-[-50px] mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 transform transition-all duration-200 origin-top-left ${
                    isAuctionsOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                  }`}
                  onMouseEnter={() => setIsAuctionsOpen(true)}
                  onMouseLeave={() => setIsAuctionsOpen(false)}
                >
                  <div className="flex flex-col gap-1 text-gray-900">
                     <button onClick={() => { onNavigate('auctions-en'); setIsAuctionsOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#F8FAFB] hover:text-[#47CCD0] transition-colors text-left group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#47CCD0] transition-colors">
                           <Building2 size={18} />
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#47CCD0]">Real Estate</div>
                           <div className="text-[10px] text-gray-400">Villas, lands, buildings</div>
                        </div>
                     </button>

                     <button onClick={() => { onNavigate('car-auctions-en'); setIsAuctionsOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#F8FAFB] hover:text-[#47CCD0] transition-colors text-left group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#47CCD0] transition-colors">
                           <Car size={18} />
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#47CCD0]">Vehicles</div>
                           <div className="text-[10px] text-gray-400">Cars and heavy equipment</div>
                        </div>
                     </button>

                     <button onClick={() => { onNavigate('car-plates-auctions-en'); setIsAuctionsOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#F8FAFB] hover:text-[#47CCD0] transition-colors text-left group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#47CCD0] transition-colors">
                           <LayoutGrid size={18} /> 
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#47CCD0]">Car Plates</div>
                           <div className="text-[10px] text-gray-400">Distinctive numbers</div>
                        </div>
                     </button>

                     <button onClick={() => { onNavigate('other-auctions-en'); setIsAuctionsOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#F8FAFB] hover:text-[#47CCD0] transition-colors text-left group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#47CCD0] transition-colors">
                           <Package size={18} /> 
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#47CCD0]">Other</div>
                           <div className="text-[10px] text-gray-400">Computers, equipment, machinery...</div>
                        </div>
                     </button>

                     <div className="pt-2 mt-1 border-t border-gray-100 flex flex-col gap-1">
                       <button 
                         onClick={() => { onNavigate('auction-guide-en'); setIsAuctionsOpen(false); }} 
                         className="w-full flex items-center justify-center gap-2 py-2 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 hover:text-[#47CCD0] transition-all"
                       >
                          <Gavel size={16} />
                          <span>Bidding Guide & Terms</span>
                       </button>

                       <button 
                         onClick={() => { onNavigate('add-auction-en'); setIsAuctionsOpen(false); }} 
                         className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#47CCD0]/10 text-[#47CCD0] rounded-lg font-bold text-sm hover:bg-[#47CCD0] hover:text-white transition-all group"
                       >
                          <Plus size={16} />
                          <span>Create Auction Process</span>
                       </button>
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Direct Sales Dropdown (NEW) */}
              <div className="relative group">
                <button 
                  className={`flex items-center gap-1 hover:text-[#47CCD0] transition-colors text-white`}
                  onClick={() => setIsDirectSalesOpen(!isDirectSalesOpen)}
                  onMouseEnter={() => setIsDirectSalesOpen(true)}
                  onMouseLeave={() => setIsDirectSalesOpen(false)}
                >
                  Instant Buy <ChevronDown size={14} />
                </button>
                
                <div 
                  className={`absolute top-full left-[-50px] mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 transform transition-all duration-200 origin-top-left ${
                    isDirectSalesOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                  }`}
                  onMouseEnter={() => setIsDirectSalesOpen(true)}
                  onMouseLeave={() => setIsDirectSalesOpen(false)}
                >
                  <div className="flex flex-col gap-1 text-gray-900">
                     <button onClick={() => { onNavigate('direct-sale-cars-en'); setIsDirectSalesOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#F8FAFB] hover:text-[#47CCD0] transition-colors text-left group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#47CCD0] transition-colors">
                           <Car size={18} />
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#47CCD0]">Vehicles</div>
                           <div className="text-[10px] text-gray-400">Fixed price vehicles</div>
                        </div>
                     </button>

                     <button onClick={() => { onNavigate('direct-sale-plates-en'); setIsDirectSalesOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#F8FAFB] hover:text-[#47CCD0] transition-colors text-left group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#47CCD0] transition-colors">
                           <LayoutGrid size={18} /> 
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#47CCD0]">Car Plates</div>
                           <div className="text-[10px] text-gray-400">Instant ownership transfer</div>
                        </div>
                     </button>

                     <button onClick={() => { onNavigate('direct-sale-other-en'); setIsDirectSalesOpen(false); }} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#F8FAFB] hover:text-[#47CCD0] transition-colors text-left group">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-[#47CCD0] transition-colors">
                           <Package size={18} /> 
                        </div>
                        <div>
                           <div className="font-bold text-sm text-gray-900 group-hover:text-[#47CCD0]">Other</div>
                           <div className="text-[10px] text-gray-400">Various products</div>
                        </div>
                     </button>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => onNavigate('advertisers-en')}
                className={`hover:text-[#47CCD0] transition-colors text-white ${currentPage === 'advertisers-en' ? 'font-bold' : ''}`}
              >
                For Advertisers
              </button>

              <button 
                onClick={() => onNavigate('my-requests-en')}
                className={`hover:text-[#47CCD0] transition-colors text-white ${currentPage === 'my-requests-en' ? 'font-bold' : ''}`}
              >
                Client Requests
              </button>

              {/* More Dropdown */}
              <div className="relative group">
                <button 
                  className={`flex items-center gap-1 hover:text-[#47CCD0] transition-colors text-white`}
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onMouseLeave={() => setIsMoreOpen(false)}
                >
                  More <ChevronDown size={14} />
                </button>
                
                <div 
                  className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-4 transform transition-all duration-200 origin-top-left ${
                    isMoreOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                  }`}
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onMouseLeave={() => setIsMoreOpen(false)}
                >
                  <div className="space-y-4 text-gray-800">
                    <button onClick={() => onNavigate('plans-en')} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 hover:text-[#47CCD0] transition-colors text-sm font-medium w-full text-left">
                       <LayoutGrid size={18} className="text-gray-400" />
                       Development Plans
                    </button>
                    
                    <button onClick={() => { onNavigate('training-en'); setIsMoreOpen(false); }} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 hover:text-[#47CCD0] transition-colors text-sm font-medium w-full text-left">
                       <BookOpen size={18} className="text-gray-400" />
                       Mzadat Academy
                    </button>

                    <button onClick={() => { onNavigate('careers-en'); setIsMoreOpen(false); }} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 hover:text-[#47CCD0] transition-colors text-sm font-medium w-full text-left">
                       <Briefcase size={18} className="text-gray-400" />
                       Careers
                    </button>

                    <button onClick={() => { onNavigate('faq-en'); setIsMoreOpen(false); }} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 hover:text-[#47CCD0] transition-colors text-sm font-medium w-full text-left">
                       <HelpCircle size={18} className="text-gray-400" />
                       FAQs
                    </button>
                    
                    <div className="border-t border-gray-100 pt-3">
                       <div className="flex items-center gap-3 mb-2 text-gray-700">
                         <div className="w-8 h-8 rounded-full bg-[#F8FAFB] flex items-center justify-center text-[#47CCD0]">
                           <Phone size={14} />
                         </div>
                         <div className="text-sm">
                           <p className="font-bold" dir="ltr">055 030 0400</p>
                           <p className="text-[10px] text-gray-500">Sun - Thu (8AM - 5PM)</p>
                         </div>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-2 mt-3">
                         <button className="flex items-center justify-center gap-2 py-2 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100 transition-colors">
                           <MessageCircle size={14} /> WhatsApp
                         </button>
                         <button className="flex items-center justify-center gap-2 py-2 bg-gray-900 text-white rounded-lg text-xs font-bold hover:bg-gray-700 transition-colors">
                           <Phone size={14} /> Call
                         </button>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Actions & Utility */}
          <div className="flex items-center gap-4">
             {/* Wallet Button */}
             <button 
               onClick={() => onNavigate('wallet-en')}
               className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
               scrolled || currentPage !== 'home-en'
                 ? 'bg-white/10 text-white hover:bg-white/20'
                 : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'
             }`}>
               <Wallet size={16} />
               <span>Wallet</span>
             </button>

             {/* Add Ad Button - Hidden on smaller screens */}
             <button 
               onClick={() => onNavigate('add-ad-en')}
               className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:text-[#47CCD0] hover:border-[#47CCD0] transition-all"
             >
                 <Plus size={16} /> Add Listing
             </button>

             {/* Add Auction Button - Hidden on smaller screens */}
             <button 
               onClick={() => onNavigate('add-auction-en')}
               className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#47CCD0] rounded-full hover:bg-[#35a4a9] shadow-lg shadow-[#47CCD0]/20 transition-all"
             >
                 <Plus size={16} /> Add Auction
             </button>

             {/* Support Button */}
             <button 
               onClick={() => onNavigate('support-en')}
               className={`hidden xl:flex items-center gap-2 px-2 text-sm font-medium hover:text-[#47CCD0] transition-all text-white/80`}
               title="Support & Contact"
             >
                 <img 
                   src={supportIcon} 
                   alt="Support & Contact" 
                   className={`w-6 h-6 object-contain transition-all`}
                 />
             </button>

             {/* Language Toggle Button */}
             <button 
               onClick={switchToArabic}
               className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20`}
               title="Switch to Arabic"
             >
                 <Globe size={16} />
                 <span className="hidden md:inline" dir="rtl">العربية</span>
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
                 className={`flex items-center gap-3 px-2 pl-2 pr-3 py-1.5 rounded-full border transition-all duration-100 active:scale-95 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md`}
               >
                 <Menu size={20} />
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/20 text-white`}>
                   <User size={16} />
                 </div>
               </button>

               {/* Desktop User Dropdown */}
               <div 
                 className={`hidden lg:block absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 transform transition-all duration-75 origin-top-right z-50 overflow-hidden ${
                    isUserMenuOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                 }`}
               >
                     <div className="p-3 border-b border-gray-100 mb-2 bg-gray-50 rounded-xl">
                       <p className="text-xs text-gray-500 mb-1">Welcome</p>
                       <button onClick={() => { onOpenLogin(); setIsUserMenuOpen(false); }} className="w-full py-2 bg-[#47CCD0] text-white rounded-lg text-sm font-bold shadow-md shadow-[#47CCD0]/20 mb-2">Login / Sign Up</button>
                       <button 
                         onClick={() => { onNavigate('nafath-login-en'); setIsUserMenuOpen(false); }}
                         className="w-full py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-bold hover:border-[#107055] hover:text-[#107055] transition-all flex items-center justify-center gap-2"
                       >
                         <div className="flex items-center gap-1">
                           <ScanFace size={16} />
                           <Fingerprint size={16} />
                         </div>
                         Login via Nafath
                       </button>
                     </div>
                     
                     <button onClick={() => { onNavigate('dashboard-en'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#47CCD0] transition-colors text-sm">
                       <LayoutDashboard size={18} /> Dashboard
                     </button>
                     <button onClick={() => { onNavigate('dashboard-en'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#47CCD0] transition-colors text-sm">
                       <BiddingIcon size={18} /> My Auctions
                     </button>
                     <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#47CCD0] transition-colors text-sm">
                       <FileText size={18} /> Brokerage
                     </a>

                     {/* User Menu Direct Sales Toggle */}
                     <div className="overflow-hidden transition-all">
                        <button 
                           onClick={(e) => { 
                              e.stopPropagation(); 
                              setIsUserDirectSalesOpen(!isUserDirectSalesOpen); 
                           }} 
                           className={`w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#47CCD0] transition-colors text-sm ${isUserDirectSalesOpen ? 'bg-gray-50 text-[#47CCD0]' : ''}`}
                        >
                           <div className="flex items-center gap-3">
                              <Tag size={18} /> 
                              <span>Instant Buy</span>
                           </div>
                           <ChevronDown size={14} className={`transition-transform ${isUserDirectSalesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Submenu */}
                        {isUserDirectSalesOpen && (
                           <div className="bg-gray-50/50 rounded-lg mx-2 my-1 animate-in slide-in-from-top-2 duration-200">
                              <button onClick={() => { onNavigate('direct-sale-cars-en'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-2 px-8 py-2.5 text-xs text-gray-600 hover:text-[#47CCD0] font-medium transition-colors">
                                 <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                                 Vehicles
                              </button>
                              <button onClick={() => { onNavigate('direct-sale-plates-en'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-2 px-8 py-2.5 text-xs text-gray-600 hover:text-[#47CCD0] font-medium transition-colors">
                                 <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                                 Car Plates
                              </button>
                               <button onClick={() => { onNavigate('direct-sale-other-en'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-2 px-8 py-2.5 text-xs text-gray-600 hover:text-[#47CCD0] font-medium transition-colors">
                                 <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                                 Other
                              </button>
                           </div>
                        )}
                     </div>

                     <button onClick={() => { onNavigate('wallet-en'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#47CCD0] transition-colors text-sm">
                       <Wallet size={18} /> Wallet
                     </button>
                     <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#47CCD0] transition-colors text-sm">
                       <Settings size={18} /> Settings
                     </a>
                     <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#47CCD0] transition-colors text-sm">
                       <Smartphone size={18} /> Download App
                     </button>
               </div>
             </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col font-sans" dir="ltr" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
           <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <img src={headerLogoScrolledImage} alt="Mzadat" className="h-10 w-auto" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-50 rounded-full text-gray-500">
                <X size={24} />
              </button>
           </div>
           
           <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-2">
                {['Brokerage', 'Auctions', 'Instant Buy', 'For Advertisers', 'Client Requests', 'More'].map((item) => (
                   <button key={item} className="text-left py-4 border-b border-gray-50 text-lg font-bold text-gray-900 hover:text-[#47CCD0] transition-colors">
                     {item}
                   </button>
                ))}
              </div>
           </div>
           
           <div className="p-6 border-t border-gray-100">
              <button onClick={switchToArabic} className="w-full py-3 bg-gray-100 text-gray-900 rounded-xl font-bold mb-3 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                 <Globe size={18} /> <span dir="rtl">العربية</span>
              </button>
              <button onClick={onOpenLogin} className="w-full py-3 bg-[#47CCD0] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#35a4a9] transition-colors">
                 <User size={18} /> Login / Sign Up
              </button>
           </div>
        </div>
      )}
    </div>
  );
};
