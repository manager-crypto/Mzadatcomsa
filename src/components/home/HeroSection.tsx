import React, { useRef, useState, useEffect } from 'react';
import realEstateImage from 'figma:asset/02eac365cc9e337adf3b97a2ea591a530631b45f.png';
import movablesImage from 'figma:asset/d10d470270833f6352d8b12d7db244d3f1761b4a.png';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowLeft, TrendingUp, Users, Gavel, ShieldCheck, ChevronRight, Calendar, Clock } from 'lucide-react';

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
  onOpenChat?: () => void;
}

const slides = [
  {
    id: 1,
    // Placeholder for Real Estate GIF - Using a high quality image that could be a GIF
    image: realEstateImage,
    title: "بوابتك الأولى",
    subtitle: "للاستثمار العقاري",
    desc: "منصة مزادات تمكنك من الوصول لأفضل الفرص العقارية والاستثمارية في المملكة بكل سهولة وأمان.",
    buttonText: "تصفح العقارات",
    navTarget: "auctions"
  },
  {
    id: 2,
    // Placeholder for Car GIF
    image: "https://images.unsplash.com/photo-1760661779074-07dd9ad8da24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBjaW5lbWF0aWMlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjY0MjM4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "نخبة السيارات",
    subtitle: "الفارهة والمميزة",
    desc: "مجموعة حصرية من السيارات الفاخرة والنادرة، متاحة للمزايدة الآن بأعلى معايير الشفافية.",
    buttonText: "تصفح السيارات",
    navTarget: "car-auctions"
  },
  {
    id: 3,
    // Placeholder for Art/Luxury GIF
    image: movablesImage,
    title: "المنقولات",
    subtitle: "والمقتنيات المتميزة",
    desc: "اكتشف عالماً من القطع الفنية والمجوهرات والمقتنيات النادرة التي لا تقدر بثمن.",
    buttonText: "تصفح المنقولات",
    navTarget: "other-auctions"
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenChat }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const ref = useRef(null);

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

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ar-SA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      numberingSystem: 'latn'
    }).format(date);
  };

  const formatGregorianDate = (date: Date) => {
    return new Intl.DateTimeFormat('ar-SA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      calendar: 'gregory',
      numberingSystem: 'latn'
    }).format(date);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('ar-SA', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      numberingSystem: 'latn'
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
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), springConfig);

  return (
    <section 
      ref={ref}
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
          {/* Use img tag for GIF support */}
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
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 right-0 w-full z-50 pointer-events-none bg-[#40C1C7] opacity-30 mix-blend-multiply"
            style={{ 
              clipPath: "polygon(100% 0, 0% 0, 50% 50%, 0% 100%, 100% 100%)" // Inverted Arrow / Chevron shape
            }}
        />
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative pt-20 pb-32">
        <motion.div 
          style={{ rotateX, rotateY, x: moveX, y: moveY }}
          className="max-w-4xl mx-auto text-center perspective-origin-center transform-style-3d"
        >
           {/* Date & Time Widget (Moved from Header) */}
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
              <div className="flex items-center gap-2">
                 <span className="text-sm font-medium">{formatGregorianDate(currentTime)}</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-2 font-mono" dir="ltr">
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
                      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={onOpenChat}
                    className="group relative w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-md overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                  >
                     <span className="relative flex items-center justify-center gap-2 font-bold text-white text-lg">
                      <Sparkles className="w-5 h-5 text-[#40C1C7] animate-pulse" />
                      اسأل مستشارنا الذكي
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-x-reverse divide-white/20">
              <div className="text-center group/stat hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-center gap-2 text-white mb-1">
                   <Gavel size={20} className="opacity-80 group-hover/stat:scale-110 transition-transform" />
                   <span className="text-3xl font-black tabular-nums">250+</span>
                </div>
                <p className="text-white/90 text-sm font-medium">مزاد نشط</p>
              </div>
              <div className="text-center group/stat hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-center gap-2 text-white mb-1">
                   <Users size={20} className="opacity-80 group-hover/stat:scale-110 transition-transform" />
                   <span className="text-3xl font-black tabular-nums">10K+</span>
                </div>
                <p className="text-white/90 text-sm font-medium">مستخدم مسجل</p>
              </div>
              <div className="text-center group/stat hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-center gap-2 text-white mb-1">
                   <TrendingUp size={20} className="opacity-80 group-hover/stat:scale-110 transition-transform" />
                   <span className="text-3xl font-black tabular-nums">500+</span>
                </div>
                <p className="text-white/90 text-sm font-medium">شريك عقاري</p>
              </div>
              <div className="text-center group/stat hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-center gap-2 text-white mb-1">
                   <ShieldCheck size={20} className="opacity-80 group-hover/stat:scale-110 transition-transform" />
                   <span className="text-3xl font-black tabular-nums">%100</span>
                </div>
                <p className="text-white/90 text-sm font-medium">نسبة الأمان</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
