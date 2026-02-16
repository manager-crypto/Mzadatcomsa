import React, { useRef, useState, useEffect } from 'react';
import realEstateImage from 'figma:asset/02eac365cc9e337adf3b97a2ea591a530631b45f.png';
import movablesImage from 'figma:asset/d10d470270833f6352d8b12d7db244d3f1761b4a.png';
import luxuryImage from 'figma:asset/c401f321f596540c94893d5d865ff794356cb049.png';
import valuationImage from 'figma:asset/71fafc11d22677403993510d6411bea21409136b.png';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';
import appBgImage from 'figma:asset/5a892c5e0b0f4679e6cf216e290f98521e1de5b6.png';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Search,  
  MapPin, 
  Home, 
  Briefcase, 
  LayoutGrid, 
  ArrowRight, 
  Gavel, 
  Smartphone, 
  Download, 
  Building2, 
  FileText, 
  User, 
  Timer, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  Menu,
  Heart,
  Calendar,
  Clock,
  Gem,
  TrendingUp,
  Wallet,
  Users // Added Users to import
} from 'lucide-react';
import { BiddingIcon } from '../components/icons/BiddingIcon';

interface HomePageEnProps {
  onOpenChat: () => void;
  cursorPosition: { x: number; y: number };
  onCitySelect?: (cityId: string) => void;
  onNavigate?: (page: string) => void;
}

export const HomePageEn: React.FC<HomePageEnProps> = ({ onOpenChat, cursorPosition, onCitySelect, onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const heroRef = useRef(null);

  // Hero Slides Data
  const slides = [
    {
      id: 1,
      image: realEstateImage,
      title: "Your Premier Gateway",
      subtitle: "For Real Estate Investment",
      desc: "An auction platform enabling you to access the best real estate and investment opportunities in the Kingdom with ease and security.",
      buttonText: "Browse Real Estate",
      navTarget: "auctions-en"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1760661779074-07dd9ad8da24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBjaW5lbWF0aWMlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjQ2MzUyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Elite Cars",
      subtitle: "Luxury & Distinctive",
      desc: "An exclusive collection of luxury and rare cars, available for bidding now with the highest standards of transparency.",
      buttonText: "Browse Cars",
      navTarget: "car-auctions"
    },
    {
      id: 3,
      image: movablesImage,
      title: "Movables",
      subtitle: "And Unique Collectibles",
      desc: "Discover a world of art pieces, jewelry, and rare priceless collectibles.",
      buttonText: "Browse Movables",
      navTarget: "other-auctions"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Time ticker
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Formatters
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(date);
  };

  // Mouse Move Logic for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const xPos = (clientX - left) / width - 0.5;
    const yPos = (clientY - top) / height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const springConfig = { damping: 25, stiffness: 100 };
  const moveX = useSpring(useTransform(x, [-0.5, 0.5], [20, -20]), springConfig);
  const moveY = useSpring(useTransform(y, [-0.5, 0.5], [20, -20]), springConfig);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [-5, 5]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), springConfig);

  const categories = [
    { name: 'Land & Residential', icon: MapPin, count: '120' },
    { name: 'Villas & Palaces', icon: Home, count: '45' },
    { name: 'Commercial', icon: Briefcase, count: '32' },
    { name: 'Farms', icon: LayoutGrid, count: '18' },
  ];

  const services = [
    { 
      title: 'Public Auctions', 
      desc: 'Managing real estate auctions with the highest standards of transparency and reliability.', 
      icon: BiddingIcon,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Real Estate Brokerage', 
      desc: 'Innovative marketing solutions connecting sellers and buyers.', 
      icon: Building2, 
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Valuation & Development', 
      desc: 'Accurate and certified valuation reports for all asset types. Certified developers with top standards.', 
      icon: FileText, 
      image: valuationImage
    },
    { 
      title: 'Luxury Properties', 
      desc: 'Architectural masterpieces redefining the concept of luxury living.', 
      icon: Gem, 
      image: luxuryImage
    },
  ];

  const featuredAuctions = [
    {
      id: 1,
      title: 'Commercial Land in Al Malqa',
      location: 'Riyadh, Northern Ring Road',
      price: 2500000,
      image: 'https://images.unsplash.com/photo-1726087163038-2910e4de29e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbGFuZCUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjByaXlhZGglMjBzYXVkaSUyMGFyYWJpYXxlbnwxfHx8fDE3NjQ2MzUyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', 
      type: 'Property',
      bidders: 14,
      status: 'Live',
      timeLeft: '02:15:30'
    },
    {
      id: 2,
      title: 'Luxury Compound in Al Rawdah',
      location: 'Jeddah, Prince Sultan St.',
      price: 5200000,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
      type: 'Property',
      bidders: 8,
      status: 'Ending Soon',
      timeLeft: '00:45:10'
    },
    {
      id: 3,
      title: 'Industrial Storage Unit',
      location: 'Dammam, 2nd Industrial City',
      price: 850000,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop', 
      type: 'Industrial',
      bidders: 22,
      status: 'Live',
      timeLeft: '04:20:00'
    },
  ];

  const propertyAds = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1646662521253-5b9253b1a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBwYWxhY2UlMjBleHRlcmlvciUyMGFyY2hpdGVjdHVyZSUyMHNhdWRpJTIwYXJhYmlhfGVufDF8fHx8MTc2NDYzNTE1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Al Nakheel Luxury Palace",
      location: "Riyadh - Al Nakheel"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      title: "Sea View Penthouse",
      location: "Khobar - Corniche"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      title: "Modern Villa",
      location: "Jeddah - Obhur Al Shamal"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      title: "Resorts & Chalets",
      location: "Taif - Al Hada"
    }
  ];

  return (
    <div className="font-sans" dir="ltr" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      
      {/* --- HERO SECTION --- */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-slate-900 perspective-1000"
      >
        {/* Background Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10 mix-blend-multiply" />
          </motion.div>
        </AnimatePresence>

        {/* Brand Identity Transition Overlay (Arrow Wipe Effect) */}
        <AnimatePresence mode="wait">
          <motion.div
              key={`overlay-${currentSlide}`}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0 w-full z-50 pointer-events-none bg-[#40C1C7] opacity-30 mix-blend-multiply"
              style={{ 
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 100% 100%, 0 100%)" // Arrow / Chevron shape
              }}
          />
        </AnimatePresence>

        {/* Content */}
        <div className="container mx-auto px-4 z-20 relative pt-20 pb-32">
          <motion.div 
            style={{ rotateX, rotateY, x: moveX, y: moveY }}
            className="max-w-4xl mx-auto text-center perspective-origin-center transform-style-3d"
          >
             {/* Date & Time Widget */}
             <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-2.5 text-white/90 mb-8 mx-auto shadow-xl hover:bg-white/15 transition-all w-fit"
             >
                <div className="flex items-center gap-2">
                   <Calendar size={16} className="text-[#40C1C7]" />
                   <span className="text-sm font-medium">{formatDate(currentTime)}</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-white/20"></div>
                <div className="flex items-center gap-2 font-mono">
                   <Clock size={16} className="text-[#40C1C7]" />
                   <span className="text-sm pt-0.5">{formatTime(currentTime)}</span>
                </div>
             </motion.div>

             {/* Dynamic Text Content */}
             <AnimatePresence mode="wait">
               <motion.div
                 key={currentSlide}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.5 }}
               >
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
                    <span className="block">{slides[currentSlide].title}</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#40C1C7] to-cyan-200 mt-2">
                      {slides[currentSlide].subtitle}
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                    {slides[currentSlide].desc}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                      onClick={() => onNavigate?.(slides[currentSlide].navTarget)}
                      className="group relative w-full sm:w-auto px-8 py-4 bg-[#40C1C7] rounded-md overflow-hidden shadow-lg shadow-[#40C1C7]/30 hover:shadow-[#40C1C7]/50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
                      <span className="relative flex items-center justify-center gap-2 font-bold text-white text-lg">
                        {slides[currentSlide].buttonText}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                    
                    <button 
                      onClick={onOpenChat}
                      className="group relative w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-md overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                       <span className="relative flex items-center justify-center gap-2 font-bold text-white text-lg">
                        <Sparkles className="w-5 h-5 text-[#40C1C7] animate-pulse" />
                        Ask Smart Advisor
                      </span>
                    </button>
                  </div>
               </motion.div>
             </AnimatePresence>
          </motion.div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-30 hidden md:flex flex-col gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-1.5 transition-all duration-300 rounded-full ${
                currentSlide === idx ? 'h-12 bg-[#40C1C7]' : 'h-3 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", damping: 20 }}
          className="absolute bottom-0 left-0 right-0 z-30"
        >
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#40C1C7]/50 to-transparent" />
          <div className="bg-[#40C1C7]/90 backdrop-blur-lg md:bg-gradient-to-r md:from-[#40C1C7] md:via-[#40C1C7]/95 md:to-[#40C1C7] py-6 md:py-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
                <div className="text-center group/stat hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center justify-center gap-2 text-white mb-1">
                     <Gavel size={20} className="opacity-80 group-hover/stat:scale-110 transition-transform" />
                     <span className="text-3xl font-black tabular-nums">250+</span>
                  </div>
                  <p className="text-white/90 text-sm font-medium">Active Auctions</p>
                </div>
                <div className="text-center group/stat hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center justify-center gap-2 text-white mb-1">
                     <Users size={20} className="opacity-80 group-hover/stat:scale-110 transition-transform" />
                     <span className="text-3xl font-black tabular-nums">10K+</span>
                  </div>
                  <p className="text-white/90 text-sm font-medium">Registered Users</p>
                </div>
                <div className="text-center group/stat hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center justify-center gap-2 text-white mb-1">
                     <TrendingUp size={20} className="opacity-80 group-hover/stat:scale-110 transition-transform" />
                     <span className="text-3xl font-black tabular-nums">500+</span>
                  </div>
                  <p className="text-white/90 text-sm font-medium">Real Estate Partners</p>
                </div>
                <div className="text-center group/stat hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center justify-center gap-2 text-white mb-1">
                     <ShieldCheck size={20} className="opacity-80 group-hover/stat:scale-110 transition-transform" />
                     <span className="text-3xl font-black tabular-nums">100%</span>
                  </div>
                  <p className="text-white/90 text-sm font-medium">Security Rate</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Bid With Ease</h2>
            <p className="text-gray-500 text-lg">Learn how Mzadat platform works</p>
          </div>

          {/* Steps Container */}
          <div className="relative max-w-5xl mx-auto">
            
            {/* Connecting Line (SVG) - Visible on Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2 -z-10 text-[#40C1C7]">
               <svg width="100%" height="150" viewBox="0 0 1000 150" preserveAspectRatio="none" className="w-full h-full overflow-visible opacity-30">
                 <path d="M0,100 Q500,-20 1000,100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
               </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Step 1: Register */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#40C1C7] transition-all duration-300 relative z-10">
                  <div className="w-12 h-12 bg-teal-50 text-[#40C1C7] rounded-xl flex items-center justify-center">
                     <User size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Register</h3>
                <p className="text-gray-500 text-sm max-w-[200px]">Create your account on the auction platform</p>
              </div>

              {/* Step 2: Charge Wallet */}
              <div className="flex flex-col items-center text-center group md:-mt-12">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#40C1C7] transition-all duration-300 relative z-10">
                  <div className="w-12 h-12 bg-teal-50 text-[#40C1C7] rounded-xl flex items-center justify-center">
                     <Wallet size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Top Up Wallet</h3>
                <p className="text-gray-500 text-sm max-w-[200px]">Charge your wallet to be ready to bid immediately</p>
              </div>

              {/* Step 3: Start Bidding */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#40C1C7] transition-all duration-300 relative z-10">
                  <div className="w-12 h-12 bg-teal-50 text-[#40C1C7] rounded-xl flex items-center justify-center">
                     <Gavel size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start Bidding</h3>
                <p className="text-gray-500 text-sm max-w-[200px]">Pay the participation fee and start bidding</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CATEGORIES GRID --- */}
      <section className="py-24 bg-white mt-12 lg:mt-0">
        <div className="w-full max-w-[1440px] mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#40C1C7] text-sm uppercase tracking-widest mb-3 block">Browse by Category</span>
            <h2 className="text-3xl md:text-4xl text-black mb-4">What are you looking for?</h2>
            <div className="h-1.5 w-20 bg-gray-100 mx-auto rounded-full">
              <div className="h-full w-1/2 bg-[#40C1C7] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {categories.map((cat, idx) => (
               <div 
                  key={idx} 
                  onClick={() => {
                    if (cat.name === 'Villas & Palaces') {
                      onNavigate?.('luxury-real-estate-auctions');
                    } else {
                      onNavigate?.('auctions-en');
                    }
                  }}
                  className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#40C1C7] hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 cursor-pointer text-center"
               >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-gray-400 shadow-sm group-hover:bg-[#40C1C7] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <cat.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-[#40C1C7] transition-colors">{cat.count} Properties</p>
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
                className="absolute top-4 right-4 z-30 bg-white/20 backdrop-blur-md border border-white/30 text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0"
                title="Search in Google Maps"
              >
                <MapPin size={16} />
              </a>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-left">
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
                    Details <ArrowRight size={12} />
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
                   <h2 className="text-3xl mb-4">Integrated Services</h2>
                   <p className="text-gray-400 mb-8 group-hover:text-gray-200 transition-colors">We offer a comprehensive range of real estate services that cater to the needs of individuals, businesses, and government sectors.</p>
                   <button className="flex items-center gap-2 text-[#40C1C7] hover:gap-4 transition-all">
                     View All Services <ArrowRight size={18} />
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
                <span className="text-[#40C1C7] text-sm uppercase tracking-widest mb-2 block">Exclusive Opportunities</span>
                <h2 className="text-3xl text-black">Latest Auctions</h2>
              </div>
              
              {/* Filter Tabs */}
              <div className="flex bg-gray-100 p-1.5 rounded-xl">
                <button className="px-6 py-2 rounded-lg bg-black text-white text-sm shadow-md">All</button>
                <button className="px-6 py-2 rounded-lg text-gray-500 text-sm hover:text-black transition-colors">Real Estate</button>
                <button className="px-6 py-2 rounded-lg text-gray-500 text-sm hover:text-black transition-colors">Industrial</button>
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
                      <div className="absolute top-4 left-4 z-20 flex gap-2">
                        <span className="bg-white/95 backdrop-blur text-gray-900 text-xs px-3 py-1.5 rounded-lg shadow-sm">{item.type}</span>
                        {item.status === 'Live' && <span className="bg-red-600 text-white text-xs px-3 py-1.5 rounded-lg shadow-sm animate-pulse">Live</span>}
                      </div>
                      
                      {/* Price Overlay */}
                      <div className="absolute bottom-4 left-4 z-20 text-white">
                        <p className="text-xs opacity-80 mb-1">Current Price</p>
                        <p className="text-2xl flex items-center gap-2">
                          {item.price.toLocaleString()}
                          <span className="text-sm font-light">SAR</span>
                        </p>
                      </div>

                      {/* Map Button */}
                      <button className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-black/20 hover:bg-white backdrop-blur-md border border-white/20 px-3 py-2 rounded-lg text-white hover:text-black transition-all duration-300 group/map">
                        <MapPin size={16} className="group-hover/map:text-[#40C1C7] transition-colors" />
                        <span className="text-xs">View on Map</span>
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
                          <span>{item.bidders} Bidders</span>
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
                        View Details
                      </button>
                   </div>
                </div>
              ))}
           </div>

           <div className="mt-16 text-center">
             <button className="px-10 py-4 bg-gray-100 text-gray-900 rounded-xl hover:bg-[#40C1C7] hover:text-white transition-all duration-300">
               View All Auctions
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
              <div className="lg:w-1/2 text-center lg:text-left lg:pr-16">
                <span className="text-[#40C1C7] tracking-widest uppercase text-sm mb-4 block">Mzadat App</span>
                <h2 className="text-4xl md:text-5xl mb-6 font-bold text-white">Your Auctions in Your Pocket, <br/>Anywhere.</h2>
                <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto lg:mx-0">Download the app now to get instant alerts for the latest investment opportunities, and participate in auctions with ease.</p>
                
                <div className="flex justify-center lg:justify-start gap-4">
                  <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-[#40C1C7] hover:text-white transition-all group shadow-lg shadow-white/10">
                    <div className="text-left">
                      <p className="text-[10px] uppercase opacity-60">Download on</p>
                      <p className="text-lg leading-none">App Store</p>
                    </div>
                    <Smartphone size={28} className="group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="flex items-center gap-3 bg-transparent border border-gray-600 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all hover:border-white">
                     <div className="text-left">
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
                    <div className="w-[300px] h-[600px] bg-black border-[12px] border-gray-800 rounded-[2.5rem] shadow-2xl relative z-10 flex flex-col items-center overflow-hidden transform rotate-12 hover:rotate-0 transition-transform duration-500 ease-out cursor-pointer group">
                       <div className="w-32 h-6 bg-black rounded-b-2xl absolute top-0 z-20"></div>
                       <div className="w-full h-full bg-gray-50 flex flex-col pt-12 px-4 pb-4 group-hover:bg-white transition-colors overflow-hidden">
                          {/* App Header */}
                          <div className="flex justify-between items-center mb-4 px-1" dir="rtl">
                             <Menu size={20} className="text-gray-800" />
                             <span className="text-black text-lg">مزادات</span>
                             <User size={20} className="text-gray-800" />
                          </div>

                          {/* App Content */}
                          <div className="flex-1 space-y-3 overflow-y-auto no-scrollbar pb-4" style={{scrollbarWidth: 'none'}}>
                             {/* Keep app content in Arabic to show authentic app look? Or translate? Let's translate for consistency with the request */}
                             <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3 items-center transform group-hover:translate-y-0 transition-transform duration-500">
                                <img 
                                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=200&auto=format&fit=crop" 
                                  className="w-16 h-16 rounded-xl object-cover" 
                                  alt="Villa"
                                />
                                <div className="flex-1 text-left">
                                   <h4 className="text-xs text-gray-900 mb-1">Modern Villa in Riyadh</h4>
                                   <p className="text-[10px] text-gray-500 flex items-center gap-1 mb-1"><MapPin size={10}/> Al Malqa</p>
                                   <p className="text-xs text-[#40C1C7] flex items-center gap-1">
                                    2,500,000 SAR
                                   </p>
                                </div>
                             </div>

                             <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3 items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                <img 
                                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=200&auto=format&fit=crop" 
                                  className="w-16 h-16 rounded-xl object-cover" 
                                  alt="Land"
                                />
                                <div className="flex-1 text-left">
                                   <h4 className="text-xs text-gray-900 mb-1">Commercial Land in Jeddah</h4>
                                   <p className="text-[10px] text-gray-500 flex items-center gap-1 mb-1"><MapPin size={10}/> King Road</p>
                                   <p className="text-xs text-[#40C1C7] flex items-center gap-1">
                                    1,850,000 SAR
                                   </p>
                                </div>
                             </div>

                             <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3 items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                <img 
                                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=200&auto=format&fit=crop" 
                                  className="w-16 h-16 rounded-xl object-cover" 
                                  alt="Real Estate"
                                />
                                <div className="flex-1 text-left">
                                   <h4 className="text-xs text-gray-900 mb-1">Compound in Khobar</h4>
                                   <p className="text-[10px] text-gray-500 flex items-center gap-1 mb-1"><MapPin size={10}/> Al Aziziyah</p>
                                   <p className="text-xs text-[#40C1C7] flex items-center gap-1">
                                    5,200,000 SAR
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

    </div>
  );
};
