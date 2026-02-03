import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Timer, 
  Gavel, 
  User, 
  Clock, 
  Maximize, 
  Info, 
  FileText, 
  Map, 
  ChevronLeft, 
  ShieldCheck, 
  Eye,
  Send,
  Heart,
  Share2,
  Volume2,
  VolumeX,
  Radio
} from 'lucide-react';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';
import { motion, AnimatePresence } from 'motion/react';

interface LiveAuctionPageProps {
  onNavigate: (page: string) => void;
}

export const LiveAuctionPage: React.FC<LiveAuctionPageProps> = ({ onNavigate }) => {
  const [currentBid, setCurrentBid] = useState(2500000);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState('details');
  const [bidAmount, setBidAmount] = useState<string>('');
  
  // Fake chat/log
  const [logs, setLogs] = useState([
    { id: 1, type: 'bid', user: 'محمد فهد', amount: 2450000, time: '10:45:10' },
    { id: 2, type: 'system', message: 'تم فتح المزاد بسعر 1,800,000 ر.س', time: '10:30:00' },
    { id: 3, type: 'bid', user: 'شركة إعمار', amount: 2500000, time: '10:46:22' },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  // Simulate incoming bids
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newBid = currentBid + 50000;
        setCurrentBid(newBid);
        setLogs(prev => [...prev, {
          id: Date.now(),
          type: 'bid',
          user: `مزايد ${Math.floor(Math.random() * 1000)}`,
          amount: newBid,
          time: new Date().toLocaleTimeString('ar-SA')
        }]);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentBid]);

  const handleBid = (amount: number) => {
    const newBid = currentBid + amount;
    setCurrentBid(newBid);
    setLogs(prev => [...prev, {
      id: Date.now(),
      type: 'bid',
      user: 'أنت',
      amount: newBid,
      time: new Date().toLocaleTimeString('ar-SA')
    }]);
  };

  return (
    <div className="pt-36 min-h-screen bg-gray-50 pb-20">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-4 mb-6">
        <div className="w-full max-w-[1440px] mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
           <span className="cursor-pointer hover:text-[#40C1C7]" onClick={() => onNavigate('home')}>الرئيسية</span>
           <ChevronLeft size={14} />
           <span className="cursor-pointer hover:text-[#40C1C7]" onClick={() => onNavigate('auctions')}>المزادات العقارية</span>
           <ChevronLeft size={14} />
           <span className="text-gray-900 font-bold">البث المباشر: أرض تجارية بحي الملقا</span>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* --- LEFT COLUMN (Video & Info) --- */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1726087163038-2910e4de29e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbGFuZCUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjByaXlhZGglMjBzYXVkaSUyMGFyYWJpYXxlbnwxfHx8fDE3NjQ2MzUyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Live Stream" 
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Overlays */}
              <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                <div className="bg-red-600 text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-2 animate-pulse">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  مباشر
                </div>
                <div className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs flex items-center gap-2">
                  <Eye size={14} /> 1,240 مشاهد
                </div>
              </div>

              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 left-4 bg-black/50 hover:bg-black/70 backdrop-blur-md text-white p-2 rounded-lg transition-colors z-10"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 {/* Play Button Placeholder if needed, but for "Live" it usually auto-plays */}
              </div>
            </div>

            {/* Property Header Info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#40C1C7] to-transparent"></div>
               
               <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                 <div>
                   <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                     <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-mono">MZ-1024</span>
                     <span>•</span>
                     <span className="text-[#40C1C7]">عقاري</span>
                   </div>
                   <h1 className="text-2xl font-bold text-gray-900 mb-2">أرض تجارية بحي الملقا</h1>
                   <p className="text-gray-500 flex items-center gap-2">
                     <MapPin size={16} className="text-[#40C1C7]" /> الرياض، طريق الدائري الشمالي
                   </p>
                 </div>
                 
                 <div className="flex gap-2">
                   <button className="p-3 bg-gray-50 rounded-xl text-gray-600 hover:bg-[#40C1C7] hover:text-white transition-colors">
                     <Share2 size={20} />
                   </button>
                   <button className="p-3 bg-gray-50 rounded-xl text-gray-600 hover:text-red-500 transition-colors">
                     <Heart size={20} />
                   </button>
                 </div>
               </div>

               {/* Key Specs */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-100">
                  <div className="text-center">
                     <p className="text-gray-400 text-xs mb-1">المساحة</p>
                     <p className="font-bold text-lg flex items-center justify-center gap-1">
                        2,500 <span className="text-xs font-normal text-gray-500">م²</span>
                     </p>
                  </div>
                  <div className="text-center border-r border-gray-100">
                     <p className="text-gray-400 text-xs mb-1">نوع الصك</p>
                     <p className="font-bold text-lg">إلكتروني</p>
                  </div>
                  <div className="text-center border-r border-gray-100">
                     <p className="text-gray-400 text-xs mb-1">استخدام العقار</p>
                     <p className="font-bold text-lg">تجاري</p>
                  </div>
                  <div className="text-center border-r border-gray-100">
                     <p className="text-gray-400 text-xs mb-1">الواجهة</p>
                     <p className="font-bold text-lg">شمالية</p>
                  </div>
               </div>

               {/* Tabs */}
               <div className="mt-6">
                  <div className="flex border-b border-gray-200 mb-4">
                    {['details', 'files', 'location'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 text-sm font-bold relative ${activeTab === tab ? 'text-[#40C1C7]' : 'text-gray-500 hover:text-gray-800'}`}
                      >
                        {tab === 'details' && 'تفاصيل العقار'}
                        {tab === 'files' && 'المستندات'}
                        {tab === 'location' && 'الموقع'}
                        {activeTab === tab && (
                          <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#40C1C7]" />
                        )}
                      </button>
                    ))}
                  </div>
                  
                  <div className="min-h-[200px] text-gray-600 text-sm leading-relaxed">
                    {activeTab === 'details' && (
                      <p>
                        فرصة استثمارية مميزة في حي الملقا، أحد أرقى أحياء شمال الرياض. الأرض تقع على طريق أنس بن مالك مباشرة، 
                        وتتميز بموقع استراتيجي بالقرب من طريق الملك فهد وطريق الأمير محمد بن سلمان. 
                        المنطقة تشهد نمواً عمرانياً وتجارياً متسارعاً، مما يجعلها مثالية للمشاريع التجارية الكبرى.
                        <br/><br/>
                        ملاحظات:<br/>
                        - الأرض مستوية وجاهزة للبناء.<br/>
                        - جميع الخدمات متوفرة (كهرباء، مياه، صرف صحي).<br/>
                        - تصريح بناء متعدد الأدوار.
                      </p>
                    )}
                    {activeTab === 'files' && (
                      <div className="space-y-3">
                         <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="flex items-center gap-3">
                               <FileText size={20} className="text-[#40C1C7]" />
                               <span>صورة الصك.pdf</span>
                            </div>
                            <button className="text-xs text-[#40C1C7] font-bold">تحميل</button>
                         </div>
                         <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="flex items-center gap-3">
                               <FileText size={20} className="text-[#40C1C7]" />
                               <span>تقرير الرفع المساحي.pdf</span>
                            </div>
                            <button className="text-xs text-[#40C1C7] font-bold">تحميل</button>
                         </div>
                      </div>
                    )}
                  </div>
               </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN (Bidding Panel) --- */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* 1. Timer & Status */}
            <div className="bg-[#1a1a1a] text-white p-4 rounded-xl flex items-center justify-between shadow-lg">
               <div className="flex items-center gap-2">
                 <Radio size={18} className="text-red-500 animate-pulse" />
                 <span className="font-bold">جاري الآن</span>
               </div>
               <div className="flex items-center gap-2 font-mono text-xl text-[#40C1C7]">
                 <Clock size={18} />
                 <span>00:45:20</span>
               </div>
            </div>

            {/* 2. Current Price */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
               <p className="text-gray-500 text-sm mb-2">السعر الحالي (وصل السوم)</p>
               <div className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-2 mb-2 font-mono">
                 {currentBid.toLocaleString()} 
                 <img src={sarCurrency} alt="SAR" className="w-6 opacity-80" />
               </div>
               <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">
                 <span>الحد الأدنى للمزايدة: 10,000 ر.س</span>
               </div>
            </div>

            {/* 3. Bid Log (Chat style) */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[400px]">
               <div className="p-4 bg-gray-50 border-b border-gray-100 font-bold text-sm flex justify-between items-center">
                 <span>سجل المزايدات</span>
                 <span className="text-xs font-normal text-gray-500">{logs.length} عملية</span>
               </div>
               
               <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                 {logs.map((log) => (
                   <motion.div 
                     key={log.id} 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className={`flex items-start gap-3 ${log.type === 'system' ? 'justify-center' : ''}`}
                   >
                     {log.type === 'system' ? (
                       <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{log.message}</span>
                     ) : (
                       <>
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${log.user === 'أنت' ? 'bg-[#40C1C7] text-white' : 'bg-gray-200 text-gray-600'}`}>
                           {log.user === 'أنت' ? <User size={14}/> : log.user.charAt(0)}
                         </div>
                         <div className="flex-1">
                           <div className="flex items-center justify-between">
                             <span className="text-xs font-bold text-gray-900">{log.user}</span>
                             <span className="text-[10px] text-gray-400" dir="ltr">{log.time}</span>
                           </div>
                           <div className="text-sm font-mono text-[#40C1C7] font-bold">
                             {log.amount?.toLocaleString()} ر.س
                           </div>
                         </div>
                       </>
                     )}
                   </motion.div>
                 ))}
                 <div ref={messagesEndRef} />
               </div>
            </div>

            {/* 4. Controls */}
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm sticky bottom-4">
              <div className="grid grid-cols-2 gap-2 mb-3">
                 <button onClick={() => handleBid(10000)} className="py-2 bg-gray-50 hover:bg-gray-100 text-[#40C1C7] font-bold rounded-lg border border-gray-200 hover:border-[#40C1C7] transition-all text-sm">
                   + 10,000
                 </button>
                 <button onClick={() => handleBid(50000)} className="py-2 bg-gray-50 hover:bg-gray-100 text-[#40C1C7] font-bold rounded-lg border border-gray-200 hover:border-[#40C1C7] transition-all text-sm">
                   + 50,000
                 </button>
              </div>
              
              <div className="flex gap-2 mb-3">
                 <input 
                   type="number" 
                   placeholder="مبلغ مخصص..." 
                   value={bidAmount}
                   onChange={(e) => setBidAmount(e.target.value)}
                   className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#40C1C7]"
                 />
              </div>

              <button 
                onClick={() => { if(bidAmount) handleBid(Number(bidAmount)); setBidAmount(''); }}
                className="w-full bg-[#40C1C7] text-white py-3 rounded-xl font-bold shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <Gavel size={20} />
                تأكيد المزايدة
              </button>
              
              <p className="text-[10px] text-gray-400 text-center mt-3">
                بالضغط على تأكيد المزايدة أنت توافق على الشروط والأحكام الخاصة بالمزاد
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
