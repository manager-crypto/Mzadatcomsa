import React, { useState } from 'react';
import heroImage from 'figma:asset/490b23f89866c2e28d65798443a6ee7116ec5faf.png';
import luxuryImage from 'figma:asset/c401f321f596540c94893d5d865ff794356cb049.png';
import valuationImage from 'figma:asset/71fafc11d22677403993510d6411bea21409136b.png';
import { 
  Search,  
  MapPin, 
  Home, 
  Briefcase, 
  LayoutGrid, 
  ArrowUpLeft, 
  Gavel, 
  Smartphone, 
  Download, 
  Building2, 
  FileText, 
  User, 
  Timer, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown,
  Menu,
  Heart,
  CheckCircle2,
  Map,
  Gem
} from 'lucide-react';
import { BiddingIcon } from '../components/icons/BiddingIcon';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';
import appBgImage from 'figma:asset/5a892c5e0b0f4679e6cf216e290f98521e1de5b6.png';
import { HowItWorks } from '../components/home/HowItWorks';
import { HeroSection } from '../components/home/HeroSection';

interface HomePageProps {
  onOpenChat: () => void;
  cursorPosition: { x: number; y: number };
  onCitySelect?: (cityId: string) => void;
  onNavigate?: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenChat, cursorPosition, onCitySelect, onNavigate }) => {

  const categories = [
    { name: 'أراضي وسكن', icon: MapPin, count: '120' },
    { name: 'فلل وقصور', icon: Home, count: '45' },
    { name: 'عقارات تجارية', icon: Briefcase, count: '32' },
    { name: 'مزارع', icon: LayoutGrid, count: '18' },
  ];

  const partners = [
    { name: "العقارية الأولى", image: "https://ui-avatars.com/api/?name=Aqaria+First&background=f3f4f6&color=40C1C7&size=128&bold=true" },
    { name: "مساكن المستقبل", image: "https://ui-avatars.com/api/?name=Masaken&background=f3f4f6&color=40C1C7&size=128&bold=true" },
    { name: "إعمار نجد", image: "https://ui-avatars.com/api/?name=Emaar+Najd&background=f3f4f6&color=40C1C7&size=128&bold=true" },
    { name: "أصول القابضة", image: "https://ui-avatars.com/api/?name=Osool&background=f3f4f6&color=40C1C7&size=128&bold=true" },
    { name: "دار الأركان", image: "https://ui-avatars.com/api/?name=Dar+Arkan&background=f3f4f6&color=40C1C7&size=128&bold=true" },
    { name: "الماجدية", image: "https://ui-avatars.com/api/?name=Majdia&background=f3f4f6&color=40C1C7&size=128&bold=true" },
    { name: "روشن", image: "https://ui-avatars.com/api/?name=Roshn&background=f3f4f6&color=40C1C7&size=128&bold=true" },
    { name: "رتال", image: "https://ui-avatars.com/api/?name=Retal&background=f3f4f6&color=40C1C7&size=128&bold=true" },
    { name: "مفاتيح", image: "https://ui-avatars.com/api/?name=Keys&background=f3f4f6&color=40C1C7&size=128&bold=true" },
  ];

  const services = [
    { 
      title: 'المزادات العلنية', 
      desc: 'إدارة المزادات العقارية بأعلى معايير الشفافية والموثوقية.', 
      icon: BiddingIcon,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'الوساطة العقارية', 
      desc: 'حلول تسويقية مبتكرة للربط بين البائع والمشتري.', 
      icon: Building2, 
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'التقييم والتطوير العقاري', 
      desc: 'تقارير تثمين دقيقة ومعتمدة لكافة أنواع الأصول. مطورين عقاريين معتمدين بأعلى مستوى وتقنيات.', 
      icon: FileText, 
      image: valuationImage
    },
    { 
      title: 'عقارات فاخرة', 
      desc: 'روائع معمارية فاخرة بمعايير عالمية تُعيد صياغة مفهوم السكن الفاخر', 
      icon: Gem, 
      image: luxuryImage
    },
  ];

  const featuredAuctions = [
    {
      id: 1,
      title: 'أرض تجارية بحي الملقا',
      location: 'الرياض، طريق الدائري الشمالي',
      price: 2500000,
      image: 'https://images.unsplash.com/photo-1726087163038-2910e4de29e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbGFuZCUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjByaXlhZGglMjBzYXVkaSUyMGFyYWJpYXxlbnwxfHx8fDE3NjQ2MzUyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', 
      type: 'عقار',
      bidders: 14,
      status: 'مباشر',
      timeLeft: '02:15:30'
    },
    {
      id: 2,
      title: 'مجمع سكني فاخر بالروضة',
      location: 'جدة، شارع الأمير سلطان',
      price: 5200000,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
      type: 'عقار',
      bidders: 8,
      status: 'ينتهي قريباً',
      timeLeft: '00:45:10'
    },
    {
      id: 3,
      title: 'وحدة تخزين صناعية',
      location: 'الدمام، المدينة الصناعية الثانية',
      price: 850000,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop', 
      type: 'صناعي',
      bidders: 22,
      status: 'مباشر',
      timeLeft: '04:20:00'
    },
  ];

  const propertyAds = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1646662521253-5b9253b1a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBwYWxhY2UlMjBleHRlcmlvciUyMGFyY2hpdGVjdHVyZSUyMHNhdWRpJTIwYXJhYmlhfGVufDF8fHx8MTc2NDYzNTE1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "قصر النخيل الفاخر",
      location: "الرياض - حي النخيل"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      title: "بنتهاوس بإطلالة بحرية",
      location: "الخبر - الكورنيش"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      title: "فيلا مودرن",
      location: "جدة - أبحر الشمالية"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      title: "شاليهات ومنتجعات",
      location: "الطائف - الهدا"
    }
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <HeroSection onNavigate={onNavigate} onOpenChat={onOpenChat} />

      {/* --- HOW IT WORKS SECTION --- */}
      <HowItWorks />

      {/* --- CATEGORIES GRID --- */}
      <section className="py-24 bg-white mt-12 lg:mt-0">
        <div className="w-full max-w-[1440px] mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#40C1C7] text-sm uppercase tracking-widest mb-3 block">تصفح حسب الفئة</span>
            <h2 className="text-3xl md:text-4xl text-black mb-4">ما الذي تبحث عنه؟</h2>
            <div className="h-1.5 w-20 bg-gray-100 mx-auto rounded-full">
              <div className="h-full w-1/2 bg-[#40C1C7] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {categories.map((cat, idx) => (
               <div 
                  key={idx} 
                  onClick={() => {
                    if (cat.name === 'فلل وقصور') {
                      onNavigate?.('luxury-real-estate-auctions');
                    } else {
                      onNavigate?.('auctions');
                    }
                  }}
                  className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#40C1C7] hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 cursor-pointer text-center"
               >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-gray-400 shadow-sm group-hover:bg-[#40C1C7] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <cat.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-[#40C1C7] transition-colors">{cat.count} عقار</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- PROPERTY AD CAROUSEL --- */}
      <section className="w-full overflow-hidden bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {propertyAds.map((ad) => (
            <div key={ad.id} className="relative h-[450px] group cursor-pointer overflow-hidden">
              <img 
                src={ad.image} 
                alt={ad.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
              />
              
              {/* Map Button */}
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ad.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 z-30 bg-white/20 backdrop-blur-md border border-white/30 text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0"
                title="البحث في خرائط جوجل"
              >
                <Map size={16} />
              </a>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-right">
                    <h3 className="text-lg text-white mb-1">{ad.title}</h3>
                    <p className="text-[#40C1C7] text-xs flex items-center gap-1">
                      <MapPin size={12} /> {ad.location}
                    </p>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate?.('luxury-auction-details');
                    }}
                    className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs hover:bg-[#40C1C7] hover:border-[#40C1C7] transition-all flex items-center gap-1.5"
                  >
                    التفاصيل <ArrowUpLeft size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-20 bg-gray-50/50">
        <div className="w-full max-w-[1440px] mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Title Card */}
              <div className="bg-black text-white p-10 rounded-2xl flex flex-col justify-center relative overflow-hidden group h-full min-h-[400px]">
                 <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
                      alt="Business Handshake" 
                      className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 filter grayscale hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                 </div>

                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#40C1C7] rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity z-10"></div>
                 <div className="relative z-20">
                   <h2 className="text-3xl mb-4">خدماتنا المتكاملة</h2>
                   <p className="text-gray-400 mb-8 group-hover:text-gray-200 transition-colors">نقدم باقة شاملة من الخدمات العقارية التي تلبي احتياجات الأفراد والشركات والقطاعات الحكومية.</p>
                   <button className="flex items-center gap-2 text-[#40C1C7] hover:gap-4 transition-all">
                     عرض جميع الخدمات <ArrowUpLeft size={18} />
                   </button>
                 </div>
              </div>

              {/* Service Cards */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((srv, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-200 hover:border-[#40C1C7] hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group overflow-hidden flex flex-col h-full">
                     <div className="h-48 w-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        <img 
                          src={srv.image} 
                          alt={srv.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                     </div>
                     
                     <div className="p-8 pt-0 flex-1 flex flex-col relative">
                       <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-[#40C1C7] mb-4 group-hover:scale-110 transition-transform relative z-20 -mt-7 shadow-md border border-gray-50">
                         <srv.icon size={28} />
                       </div>
                       
                       <h3 className="text-xl mb-3 text-gray-900">{srv.title}</h3>
                       <p className="text-gray-500 text-sm">{srv.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* --- FEATURED AUCTIONS --- */}
      <section className="py-24 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <span className="text-[#40C1C7] text-sm uppercase tracking-widest mb-2 block">فرص حصرية</span>
                <h2 className="text-3xl text-black">أحدث المزادات</h2>
              </div>
              
              {/* Filter Tabs */}
              <div className="flex bg-gray-100 p-1.5 rounded-xl">
                <button className="px-6 py-2 rounded-lg bg-black text-white text-sm shadow-md">الكل</button>
                <button className="px-6 py-2 rounded-lg text-gray-500 text-sm hover:text-black transition-colors">عقاري</button>
                <button className="px-6 py-2 rounded-lg text-gray-500 text-sm hover:text-black transition-colors">صناعي</button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredAuctions.map((item) => (
                <div key={item.id} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-gray-200 hover:-translate-y-1 transition-all duration-500">
                   {/* Image */}
                   <div className="h-64 relative overflow-hidden bg-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-70"></div>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      
                      {/* Tags */}
                      <div className="absolute top-4 right-4 z-20 flex gap-2">
                        <span className="bg-white/95 backdrop-blur text-gray-900 text-xs px-3 py-1.5 rounded-lg shadow-sm">{item.type}</span>
                        {item.status === 'مباشر' && <span className="bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg shadow-sm animate-pulse">مباشر</span>}
                      </div>
                      
                      {/* Price Overlay */}
                      <div className="absolute bottom-4 right-4 z-20 text-white">
                        <p className="text-xs opacity-80 mb-1">السعر الحالي</p>
                        <p className="text-2xl flex items-center gap-2">
                          {item.price.toLocaleString()}
                          <img src={sarCurrency} alt="ر.س" className="h-5 w-auto inline-block bg-white/20 rounded-sm p-0.5 backdrop-blur-sm" />
                        </p>
                      </div>

                      {/* Map Button */}
                      <button className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-black/20 hover:bg-white backdrop-blur-md border border-white/20 px-3 py-2 rounded-lg text-white hover:text-black transition-all duration-300 group/map">
                        <MapPin size={16} className="group-hover/map:text-[#40C1C7] transition-colors" />
                        <span className="text-xs">عرض على الخريطة</span>
                      </button>
                   </div>

                   {/* Content */}
                   <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg text-gray-900 group-hover:text-[#40C1C7] transition-colors line-clamp-1">{item.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm flex items-center gap-2 mb-5">
                        <MapPin size={16} className="text-[#40C1C7]" /> {item.location}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                          <User size={16} className="text-gray-400" />
                          <span>{item.bidders} مزايد</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#40C1C7] text-xs font-mono bg-teal-50 px-2 py-1 rounded-lg">
                          <Timer size={14} />
                          <span>{item.timeLeft}</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => onNavigate?.('auction-details')}
                        className="w-full mt-5 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-sm"
                      >
                        عرض التفاصيل
                      </button>
                   </div>
                </div>
              ))}
           </div>

           <div className="mt-16 text-center">
             <button className="px-10 py-4 bg-gray-100 text-gray-900 rounded-xl hover:bg-[#40C1C7] hover:text-white transition-all duration-300">
               عرض جميع المزادات
             </button>
           </div>
        </div>
      </section>

      {/* --- APP CTA --- */}
      <section className="bg-[#111] text-white py-24 relative overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
           <img 
             src={appBgImage} 
             alt="Background" 
             className="w-full h-full object-cover opacity-30 mix-blend-overlay"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-transparent to-[#111]"></div>
         </div>

         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#40C1C7] rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
         
         <div className="w-full max-w-[1440px] mx-auto px-4 relative z-10">
           <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 text-center lg:text-right lg:pr-16">
                <span className="text-[#40C1C7] tracking-widest uppercase text-sm mb-4 block">تطبيق مزادات</span>
                <h2 className="text-4xl md:text-5xl mb-6 font-bold text-white">مزاداتك في جيبك، <br/>أين ما كنت.</h2>
                <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto lg:mx-0">حمل التطبيق الآن لتحصل على تنبيهات فورية لأحدث الفرص الاستثمارية، وشارك في المزادات بكل سهولة.</p>
                
                <div className="flex justify-center lg:justify-start gap-4">
                  <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-[#40C1C7] hover:text-white transition-all group shadow-lg shadow-white/10">
                    <div className="text-right">
                      <p className="text-[10px] uppercase opacity-60">Download on</p>
                      <p className="text-lg leading-none">App Store</p>
                    </div>
                    <Smartphone size={28} className="group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="flex items-center gap-3 bg-transparent border border-gray-600 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all hover:border-white">
                     <div className="text-right">
                      <p className="text-[10px] uppercase opacity-60">Get it on</p>
                      <p className="text-lg leading-none">Google Play</p>
                    </div>
                    <Download size={28} />
                  </button>
                </div>
              </div>
              
              {/* Phone Mockup */}
              <div className="lg:w-1/2 flex justify-center lg:justify-center">
                 <div className="relative">
                    <div className="w-[300px] h-[600px] bg-black border-[12px] border-gray-800 rounded-[2.5rem] shadow-2xl relative z-10 flex flex-col items-center overflow-hidden transform -rotate-12 hover:rotate-0 transition-transform duration-500 ease-out cursor-pointer group">
                       <div className="w-32 h-6 bg-black rounded-b-2xl absolute top-0 z-20"></div>
                       <div className="w-full h-full bg-gray-50 flex flex-col pt-12 px-4 pb-4 group-hover:bg-white transition-colors overflow-hidden">
                          {/* App Header */}
                          <div className="flex justify-between items-center mb-4 px-1">
                             <Menu size={20} className="text-gray-800" />
                             <span className="text-black text-lg">مزادات</span>
                             <User size={20} className="text-gray-800" />
                          </div>

                          {/* App Content */}
                          <div className="flex-1 space-y-3 overflow-y-auto no-scrollbar pb-4" style={{scrollbarWidth: 'none'}}>
                             <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3 items-center transform group-hover:translate-y-0 transition-transform duration-500">
                                <img 
                                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=200&auto=format&fit=crop" 
                                  className="w-16 h-16 rounded-xl object-cover" 
                                  alt="Villa"
                                />
                                <div className="flex-1">
                                   <h4 className="text-xs text-gray-900 mb-1">فيلا مودرن بالرياض</h4>
                                   <p className="text-[10px] text-gray-500 flex items-center gap-1 mb-1"><MapPin size={10}/> حي الملقا</p>
                                   <p className="text-xs text-[#40C1C7] flex items-center gap-1">
                                    2,500,000 
                                    <img src={sarCurrency} alt="ر.س" className="h-3 w-auto inline-block opacity-70" />
                                   </p>
                                </div>
                             </div>

                             <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3 items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                <img 
                                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=200&auto=format&fit=crop" 
                                  className="w-16 h-16 rounded-xl object-cover" 
                                  alt="Land"
                                />
                                <div className="flex-1">
                                   <h4 className="text-xs text-gray-900 mb-1">أرض تجارية بجدة</h4>
                                   <p className="text-[10px] text-gray-500 flex items-center gap-1 mb-1"><MapPin size={10}/> طريق الملك</p>
                                   <p className="text-xs text-[#40C1C7] flex items-center gap-1">
                                    1,850,000
                                    <img src={sarCurrency} alt="ر.س" className="h-3 w-auto inline-block opacity-70" />
                                   </p>
                                </div>
                             </div>

                             <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3 items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                <img 
                                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=200&auto=format&fit=crop" 
                                  className="w-16 h-16 rounded-xl object-cover" 
                                  alt="Real Estate"
                                />
                                <div className="flex-1">
                                   <h4 className="text-xs text-gray-900 mb-1">مجمع سكني بالخبر</h4>
                                   <p className="text-[10px] text-gray-500 flex items-center gap-1 mb-1"><MapPin size={10}/> العزيزية</p>
                                   <p className="text-xs text-[#40C1C7] flex items-center gap-1">
                                    5,200,000
                                    <img src={sarCurrency} alt="ر.س" className="h-3 w-auto inline-block opacity-70" />
                                   </p>
                                </div>
                             </div>
                          </div>

                          {/* App Bottom Nav */}
                          <div className="bg-white border-t border-gray-100 pt-3 pb-1 px-4 flex justify-between items-center text-gray-400">
                             <Home size={20} className="text-[#40C1C7]" />
                             <Search size={20} />
                             <Heart size={20} />
                             <User size={20} />
                          </div>
                       </div>
                    </div>
                    <div className="absolute -z-10 top-20 -right-20 w-72 h-72 bg-gray-800 rounded-full opacity-50 blur-2xl"></div>
                    <div className="absolute -z-10 bottom-10 -left-10 w-40 h-40 bg-[#40C1C7] rounded-full blur-3xl opacity-40 animate-pulse"></div>
                 </div>
              </div>
           </div>
         </div>
      </section>

    </>
  );
};
