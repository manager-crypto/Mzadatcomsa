import React, { useState } from 'react';
import { 
  MapPin, 
  Timer, 
  Gavel, 
  Filter, 
  Search, 
  ChevronDown,
  List,
  Map,
  Bed,
  Bath,
  Maximize,
  Clock,
  User,
  Radio,
  Eye
} from 'lucide-react';
import sarCurrency from 'figma:asset/420f1daadac013c93f67f2a0a77818d951df4b98.png';
import carImage from 'figma:asset/3c101079407c0c432e6ca48126e0020aa8a51dbd.png';

interface AuctionsPageEnProps {
  onNavigate?: (page: string) => void;
  onAuctionClick?: (auction: any) => void;
}

export const AuctionsPageEn: React.FC<AuctionsPageEnProps> = ({ onNavigate, onAuctionClick }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [sortBy, setSortBy] = useState('newest');

  // Mock Data conforming to the new requirements
  const auctions = [
    {
      id: 1,
      code: 'MZ-1024',
      title: 'Commercial Land in Al Malqa',
      location: 'Riyadh, Northern Ring Road',
      currentBid: 2500000,
      openingBid: 1800000,
      area: 2500,
      image: 'https://images.unsplash.com/photo-1726087163038-2910e4de29e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbGFuZCUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjByaXlhZGglMjBzYXVkaSUyMGFyYWJpYXxlbnwxfHx8fDE3NjQ2MzUyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', 
      type: 'Real Estate',
      status: 'Live',
      statusColor: 'bg-red-500',
      timeLeft: '02d : 15h : 30m',
      companyLogo: 'https://ui-avatars.com/api/?name=RE&background=000&color=fff&font-size=0.5',
      specs: { beds: 0, baths: 0, area: 2500 },
      tags: ['Commercial', 'Prime Location']
    },
    {
      id: 2,
      code: 'MZ-2055',
      title: 'Luxury Compound in Al Rawdah',
      location: 'Jeddah, Prince Sultan St.',
      currentBid: 5200000,
      openingBid: 4500000,
      area: 1800,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
      type: 'Real Estate',
      status: 'Soon',
      statusColor: 'bg-blue-500',
      timeLeft: '05d : 08h : 10m',
      companyLogo: 'https://ui-avatars.com/api/?name=EM&background=000&color=fff&font-size=0.5',
      specs: { beds: 12, baths: 15, area: 1800 },
      tags: ['Residential', 'Investment']
    },
    {
      id: 3,
      code: 'MZ-3091',
      title: 'Industrial Storage Unit',
      location: 'Dammam, 2nd Industrial City',
      currentBid: 850000,
      openingBid: 500000,
      area: 5000,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop', 
      type: 'Industrial',
      status: 'Live',
      statusColor: 'bg-red-500',
      timeLeft: '00d : 04h : 20m',
      companyLogo: 'https://ui-avatars.com/api/?name=IN&background=000&color=fff&font-size=0.5',
      specs: { beds: 0, baths: 2, area: 5000 },
      tags: ['Industrial', 'Warehouse']
    },
    {
      id: 4,
      code: 'MZ-4011',
      title: 'Residential Villa in Al Yasmeen',
      location: 'Riyadh, Al Yasmeen Dist.',
      currentBid: 3100000,
      openingBid: 2800000,
      area: 450,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
      type: 'Residential',
      status: 'Ended',
      statusColor: 'bg-gray-500',
      timeLeft: '00d : 00h : 00m',
      companyLogo: 'https://ui-avatars.com/api/?name=HO&background=000&color=fff&font-size=0.5',
      specs: { beds: 5, baths: 6, area: 450 },
      tags: ['Residential', 'Modern']
    },
    {
      id: 5,
      code: 'MZ-5088',
      title: 'Commercial Building in Khobar',
      location: 'Khobar, Golden Belt',
      currentBid: 4500000,
      openingBid: 4000000,
      area: 900,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      type: 'Commercial',
      status: 'Live',
      statusColor: 'bg-red-500',
      timeLeft: '01d : 10h : 20m',
      companyLogo: 'https://ui-avatars.com/api/?name=CO&background=000&color=fff&font-size=0.5',
      specs: { beds: 0, baths: 0, area: 900 },
      tags: ['Commercial', 'High Income']
    },
    {
      id: 7,
      code: 'MZ-7001',
      title: 'Toyota Supra 2024 Turbo',
      location: 'Riyadh, Qadisiyah Exhibition',
      currentBid: 185000,
      openingBid: 150000,
      area: 2024, 
      image: carImage,
      type: 'Cars',
      status: 'New',
      statusColor: 'bg-emerald-500',
      timeLeft: '04d : 12h : 00m',
      companyLogo: 'https://ui-avatars.com/api/?name=Toyota&background=red&color=fff',
      specs: { beds: 0, baths: 0, area: 0 },
      tags: ['Cars', 'Sport']
    },
  ];

  return (
    <div className="pt-36 pb-20 min-h-screen bg-gray-50 animate-in fade-in duration-500 font-sans" dir="ltr" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <a href="#" onClick={() => onNavigate?.('home-en')} className="hover:text-[#40C1C7] transition-colors">Home</a>
          <span>/</span>
          <span className="text-gray-900 font-bold">Real Estate Auctions</span>
        </div>

        {/* Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Real Estate Auctions</h1>
            <p className="text-gray-500">Found {auctions.length} active and upcoming auctions</p>
          </div>
          
          <div className="flex items-center p-1.5 bg-white border border-gray-200 rounded-xl shadow-sm">
            <button 
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                viewMode === 'grid' 
                ? 'bg-[#40C1C7] text-white shadow-md' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <List size={18} />
              List
            </button>
            <button 
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                viewMode === 'map' 
                ? 'bg-[#40C1C7] text-white shadow-md' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Map size={18} />
              Map
            </button>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8 sticky top-20 z-30">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <div className="col-span-1 md:col-span-2 relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by ID, City, or Name..." 
                className="w-full h-11 pr-10 pl-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none transition-all text-sm"
              />
            </div>
            
            <div className="relative group">
              <button className="w-full h-11 px-3 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-600">
                <span>Property Type</span>
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="relative group">
              <button className="w-full h-11 px-3 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-600">
                <span>Price Range</span>
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="relative group">
              <button className="w-full h-11 px-3 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-600">
                <span>City</span>
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="relative group">
              <button className="w-full h-11 px-3 flex items-center justify-between bg-white border border-gray-200 rounded-xl hover:border-[#40C1C7] transition-all text-sm text-gray-600">
                <span className="flex items-center gap-2">
                   <Filter size={16} />
                   Filter
                </span>
              </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {['All', 'Live Now', 'Soon', 'Ended', 'Residential', 'Commercial', 'Industrial'].map((tag, idx) => (
              <button key={idx} className={`flex-shrink-0 px-4 py-1.5 border border-gray-100 rounded-full text-xs font-bold transition-all ${idx === 0 ? 'bg-teal-50 text-[#40C1C7] border-[#40C1C7]' : 'bg-gray-50 text-gray-600 hover:bg-teal-50 hover:text-[#40C1C7]'}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main List */}
          <div className="md:col-span-12 lg:col-span-9">
            <div className="flex items-center justify-between mb-4">
               <h3 className="font-bold text-gray-800">Latest Auctions</h3>
               <div className="flex items-center gap-2 text-sm text-gray-500">
                 <span>Sort by:</span>
                 <select 
                   value={sortBy}
                   onChange={(e) => setSortBy(e.target.value)}
                   className="bg-transparent font-bold text-gray-900 outline-none cursor-pointer"
                 >
                   <option value="newest">Newest</option>
                   <option value="lowest_price">Lowest Price</option>
                   <option value="highest_price">Highest Price</option>
                   <option value="ending_soon">Ending Soon</option>
                 </select>
               </div>
            </div>

            {viewMode === 'map' ? (
              <div className="bg-gray-100 rounded-3xl h-[600px] overflow-hidden border border-gray-200 relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  title="Auctions Map"
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Riyadh%20Real%20Estate&t=&z=11&ie=UTF8&iwloc=B&output=embed"
                  className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                ></iframe>
                
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs z-10 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Auctions on Map</h4>
                    <p className="text-xs text-gray-500 mb-3">Explore auction locations in your city.</p>
                    <button className="text-xs text-[#40C1C7] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                      Expand Map <Maximize size={12} />
                    </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {auctions.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group">
                     
                     {/* 1. Top Section: Image & Badge */}
                     <div className="relative h-64 overflow-hidden bg-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        />
                        
                        {/* Floating Status Badge */}
                        <div className="absolute top-4 left-4 z-10">
                           <span className={`${item.statusColor} text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5`}>
                             <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                             {item.status}
                           </span>
                        </div>

                        {/* Price Overlay */}
                        <div className="absolute bottom-4 right-4 z-20 text-white text-right bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                           <p className="text-[10px] text-gray-200 mb-0.5">Current Bid</p>
                           <p className="text-xl font-bold font-mono flex items-center gap-1.5 text-shadow-lg">
                              {item.currentBid.toLocaleString()}
                              <span className="text-sm font-light">SAR</span>
                           </p>
                        </div>

                        {/* Quick Action Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                           <button 
                             onClick={() => onAuctionClick ? onAuctionClick(item) : onNavigate?.('auction-details')}
                             className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300"
                           >
                              <Eye size={16} /> Quick View
                           </button>
                        </div>
                     </div>

                     {/* 2. Content Section */}
                     <div className="p-5 flex-1 flex flex-col">
                        
                        {/* Header: Title */}
                        <div className="mb-4 text-left">
                           <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#40C1C7] transition-colors line-clamp-1">
                              {item.title}
                           </h3>
                           <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                              <MapPin size={14} className="text-[#40C1C7] flex-shrink-0" />
                              <span className="truncate">{item.location}</span>
                           </div>
                        </div>

                        {/* Specs (if Real Estate) */}
                        {(item.type === 'Real Estate' || item.type === 'Residential' || item.type === 'Commercial') ? (
                          <div className="flex items-center justify-between text-gray-500 text-xs mb-4 bg-gray-50 p-2 rounded-lg">
                             <div className="flex items-center gap-1">
                               <Maximize size={14} /> <span>{item.area} m²</span>
                             </div>
                             <div className="flex items-center gap-1">
                               <Bed size={14} /> <span>{item.specs?.beds || '-'}</span>
                             </div>
                             <div className="flex items-center gap-1">
                               <Bath size={14} /> <span>{item.specs?.baths || '-'}</span>
                             </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 mb-4">
                             {item.tags.map((tag, idx) => (
                               <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-md">{tag}</span>
                             ))}
                          </div>
                        )}

                        {/* Stats Row (Timer & Bidders) */}
                        <div className="flex items-center justify-between mb-6 mt-auto">
                           {/* Timer */}
                           <div className="flex items-center gap-2 bg-teal-50 text-[#40C1C7] px-3 py-1.5 rounded-lg text-xs font-medium">
                              <Clock size={14} />
                              <span className="font-mono pt-0.5">{item.timeLeft.split(' ')[0]} days left</span>
                           </div>

                           {/* Bidders */}
                           <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                              <span>{14 + item.id * 2} Bidders</span>
                              <User size={14} />
                           </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button 
                            onClick={() => onAuctionClick ? onAuctionClick(item) : onNavigate?.('auction-details')}
                            className="flex-1 py-2.5 bg-white border border-gray-200 text-gray-900 rounded-xl hover:bg-[#40C1C7] hover:text-white hover:border-[#40C1C7] transition-all duration-300 text-sm font-bold shadow-sm"
                          >
                             Details
                          </button>
                          <button 
                            onClick={() => onNavigate?.('live-auction')}
                            className="px-3 py-2.5 bg-red-50 text-red-600 border border-red-100 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 text-sm font-bold flex items-center justify-center"
                            title="Live Broadcast"
                          >
                             <Radio size={16} className="animate-pulse" />
                          </button>
                        </div>
                     </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
               <div className="flex items-center gap-2">
                 <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all disabled:opacity-50">
                    <ChevronDown className="rotate-90" size={20} />
                 </button>
                 <button className="w-10 h-10 rounded-xl bg-[#40C1C7] text-white flex items-center justify-center font-bold shadow-lg shadow-[#40C1C7]/30">1</button>
                 <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all">2</button>
                 <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all">3</button>
                 <span className="text-gray-400">...</span>
                 <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all">
                    <ChevronDown className="-rotate-90" size={20} />
                 </button>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
             {/* Trending Areas */}
             <div className="bg-white rounded-2xl border border-gray-100 p-5">
               <h3 className="font-bold text-gray-900 mb-4 text-left">Trending Areas</h3>
               <div className="space-y-3">
                 {[
                   { name: 'North Riyadh', count: 15 },
                   { name: 'East Riyadh', count: 12 },
                   { name: 'Central Jeddah', count: 8 },
                   { name: 'Khobar - Belt', count: 6 },
                   { name: 'Makkah', count: 5 },
                 ].map((area, idx) => (
                   <a key={idx} href="#" className="flex items-center justify-between text-sm group">
                      <span className="text-gray-600 group-hover:text-[#40C1C7] transition-colors">{area.name}</span>
                      <span className="text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md text-xs group-hover:bg-teal-50 group-hover:text-[#40C1C7] transition-colors">{area.count}</span>
                   </a>
                 ))}
               </div>
             </div>

             {/* Live Auctions Promo */}
             <div className="bg-red-50 rounded-2xl border border-red-100 p-5">
               <div className="flex items-center gap-2 mb-3">
                 <span className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                 </span>
                 <h3 className="font-bold text-red-900">Live Broadcast</h3>
               </div>
               <p className="text-xs text-red-800/70 mb-4 text-left">Watch live real estate auctions and participate from your place.</p>
               <button 
                 onClick={() => onNavigate?.('live-auction')}
                 className="w-full py-2.5 bg-white border border-red-200 text-red-600 rounded-xl font-bold text-sm hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2"
               >
                 <Radio size={16} /> Watch Now
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
