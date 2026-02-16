import React from 'react';
import logoImage from 'figma:asset/5e22340af7acdd84062b7c0e5a965693e0eca858.png';
import platformLicensesImage from 'figma:asset/82aec4d130a2649c02d499e6ea0935bdeb3cf24e.png';
import {  
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { XIcon } from '../icons/XIcon';
import { SnapchatIcon } from '../icons/SnapchatIcon';

export const FooterEn = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const handleLinkClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (!onNavigate) return;
    
    if (link === 'Home') onNavigate('home-en');
    if (link === 'Public Auctions') onNavigate('auctions-en');
    if (link === 'FAQ') onNavigate('faq');
    if (link === 'Privacy Policy') onNavigate('privacy-policy');
    if (link === 'Terms & Conditions') onNavigate('terms');
    if (link === 'Contact Us') onNavigate('support');
    if (link === 'Report Vulnerability') onNavigate('report-vulnerability');
  };

  return (
    <footer className="bg-[#2B3D50] border-t border-white/10 pt-20 pb-10 font-sans text-white" dir="ltr" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
       <div className="w-full max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
             {/* Column 1: About */}
             <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  {/* Invert brightness for dark background if needed, or keep as is if logo is white. 
                      Assuming logo is same as Header, let's use brightness-0 invert to make it white if it's black. */}
                  <img src={logoImage} alt="Mzadat Logo" className="h-12 w-auto object-contain brightness-0 invert" />
                </div>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  The premier digital platform for real estate auctions in the Kingdom, licensed and trusted to ensure the best buying and selling experience.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-black hover:text-white transition-all cursor-pointer">
                    <XIcon size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#E1306C] hover:text-white transition-all cursor-pointer">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] hover:text-white transition-all cursor-pointer">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#FFFC00] hover:text-black transition-all cursor-pointer">
                    <SnapchatIcon size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#0A66C2] hover:text-white transition-all cursor-pointer">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#FF0000] hover:text-white transition-all cursor-pointer">
                    <Youtube size={18} />
                  </a>
                </div>
             </div>
             
             {/* Column 2: Quick Access */}
             <div>
               <h4 className="text-white mb-6 text-lg font-bold">Quick Access</h4>
               <ul className="space-y-4 text-sm text-gray-300">
                 {['Home', 'Public Auctions', 'Real Estate Brokerage', 'Add New Ad'].map(link => (
                   <li 
                     key={link} 
                     onClick={(e) => handleLinkClick(link, e)}
                     className="hover:text-[#47CCD0] hover:translate-x-1 transition-all cursor-pointer block w-fit"
                   >
                     {link}
                   </li>
                 ))}
               </ul>
             </div>

             {/* Column 3: Support */}
             <div>
               <h4 className="text-white mb-6 text-lg font-bold">Support & Help</h4>
               <ul className="space-y-4 text-sm text-gray-300">
                 {['FAQ', 'Privacy Policy', 'Terms & Conditions', 'Contact Us'].map(link => (
                   <li 
                    key={link} 
                    onClick={(e) => handleLinkClick(link, e)}
                    className="hover:text-[#47CCD0] hover:translate-x-1 transition-all cursor-pointer block w-fit"
                   >
                    {link}
                   </li>
                 ))}
               </ul>
             </div>

             {/* Column 4: About Platform */}
             <div>
               <h4 className="text-white mb-6 text-lg font-bold">About Platform</h4>
               <ul className="space-y-4 text-sm text-gray-300">
                 {['About Mzadat', 'Platform Rating', 'Suggestions', 'Report Vulnerability'].map(link => (
                   <li 
                    key={link} 
                    onClick={(e) => handleLinkClick(link, e)}
                    className="hover:text-[#47CCD0] hover:translate-x-1 transition-all cursor-pointer block w-fit"
                   >
                    {link}
                   </li>
                 ))}
               </ul>
             </div>

             {/* Column 5: Licenses */}
             <div>
               <h4 className="text-white mb-6 text-lg font-bold">Mzadat Licenses</h4>
               <a href="#" className="block hover:opacity-80 transition-opacity mb-4">
                 <img src={platformLicensesImage} alt="Mzadat Licenses" className="w-full h-auto object-contain rounded-lg bg-white p-1" />
               </a>
             </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm text-gray-300">
               <button onClick={() => onNavigate && onNavigate('terms')} className="hover:text-[#47CCD0] transition-colors">Terms of Use & Disclaimer</button>
               <span className="text-gray-600">|</span>
               <button onClick={() => onNavigate && onNavigate('privacy-policy')} className="hover:text-[#47CCD0] transition-colors">Privacy Policy</button>
               <span className="text-gray-600">|</span>
               <button onClick={() => onNavigate && onNavigate('terms')} className="hover:text-[#47CCD0] transition-colors">Refund Policy</button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
               <span className="hover:text-[#47CCD0] cursor-pointer transition-colors">Tax Declaration</span>
               <span className="text-gray-600">|</span>
               <span className="hover:text-[#47CCD0] cursor-pointer transition-colors">Commercial Registration</span>
               <span className="text-gray-600">|</span>
               <span className="hover:text-[#47CCD0] cursor-pointer transition-colors">Zakat, Tax and Customs Authority</span>
            </div>

            <p className="text-xs text-gray-500 mt-2">All rights reserved &copy; 2025 Mzadat Marketing Est. CR: 7021666073</p>
          </div>
       </div>
    </footer>
  );
};
