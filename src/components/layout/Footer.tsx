import React from 'react';
import logoImage from 'figma:asset/5e22340af7acdd84062b7c0e5a965693e0eca858.png';
import falImage from 'figma:asset/196b4e239f5eb25ae700c088f021bfb6c7561d83.png';
import brokerageLicenseImage from 'figma:asset/196b4e239f5eb25ae700c088f021bfb6c7561d83.png';
import saipImage from 'figma:asset/a763854baca7616bc0338428ebeeacbc83280940.png';
import licensesImage from 'figma:asset/85b8dec9b4a9023ca72458d8b97402e13e1828fd.png';
import platformLicensesImage from 'figma:asset/82aec4d130a2649c02d499e6ea0935bdeb3cf24e.png';
import {  
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Globe, 
  Phone, 
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import { XIcon } from '../icons/XIcon';
import { SnapchatIcon } from '../icons/SnapchatIcon';

export const Footer = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const handleLinkClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (!onNavigate) return;
    
    if (link === 'الرئيسية') onNavigate('home');
    if (link === 'المزادات العلنية') onNavigate('auctions');
    if (link === 'الأسئلة الشائعة') onNavigate('faq');
    if (link === 'سياسة الخصوصية') onNavigate('privacy-policy');
    if (link === 'الشروط والأحكام') onNavigate('terms');
    if (link === 'تواصل معنا') onNavigate('support');
    if (link === 'الإبلاغ عن ثغرة') onNavigate('report-vulnerability');
    // Add other links mappings as needed
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
       <div className="w-full max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
             <div>
                <div className="flex items-center gap-2 mb-6">
                  <img src={logoImage} alt="Mzadat Logo" className="h-12 w-auto object-contain" />
                </div>
                <p className="text-gray-500 text-sm mb-6">
                  المنصة الرقمية الأولى للمزادات العقارية في المملكة، مرخصة وموثوقة لضمان أفضل تجربة بيع وشراء.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all cursor-pointer">
                    <XIcon size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#E1306C] hover:text-white transition-all cursor-pointer">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1877F2] hover:text-white transition-all cursor-pointer">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#FFFC00] hover:text-black transition-all cursor-pointer">
                    <SnapchatIcon size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A66C2] hover:text-white transition-all cursor-pointer">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#FF0000] hover:text-white transition-all cursor-pointer">
                    <Youtube size={18} />
                  </a>
                </div>
             </div>
             
             <div>
               <h4 className="text-black mb-6 text-lg">الوصول السريع</h4>
               <ul className="space-y-4 text-sm text-gray-500">
                 {['الرئيسية', 'المزادات العلنية', 'الوساطة العقارية', 'إضافة إعلان جديد'].map(link => (
                   <li 
                     key={link} 
                     onClick={(e) => handleLinkClick(link, e)}
                     className="hover:text-[#40C1C7] hover:translate-x-[-5px] transition-all cursor-pointer block w-fit"
                   >
                     {link}
                   </li>
                 ))}
               </ul>
             </div>

             <div>
               <h4 className="text-black mb-6 text-lg">الدعم والمساعدة</h4>
               <ul className="space-y-4 text-sm text-gray-500">
                 {['الأسئلة الشائعة', 'سياسة الخصوصية', 'الشروط والأحكام', 'تواصل معنا'].map(link => (
                   <li 
                    key={link} 
                    onClick={(e) => handleLinkClick(link, e)}
                    className="hover:text-[#40C1C7] hover:translate-x-[-5px] transition-all cursor-pointer block w-fit"
                   >
                    {link}
                   </li>
                 ))}
               </ul>
             </div>

             <div>
               <h4 className="text-black mb-6 text-lg">حول المنصة</h4>
               <ul className="space-y-4 text-sm text-gray-500">
                 {['عن مزادات', 'تقييم المنصة', 'المقترحات', 'الإبلاغ عن ثغرة'].map(link => (
                   <li 
                    key={link} 
                    onClick={(e) => handleLinkClick(link, e)}
                    className="hover:text-[#40C1C7] hover:translate-x-[-5px] transition-all cursor-pointer block w-fit"
                   >
                    {link}
                   </li>
                 ))}
               </ul>
             </div>

             <div>
               <h4 className="text-black mb-6 text-lg font-bold">تراخيص مزادات</h4>
               <a href="https://drive.google.com/file/d/1phIczxTTKuAja4kwu3Er3NlZwCtsodES/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity mb-4">
                 <img src={platformLicensesImage} alt="تراخيص مزادات" className="w-full h-auto object-contain rounded-lg" />
               </a>
             </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm text-gray-600">
               <button onClick={() => onNavigate && onNavigate('terms')} className="hover:text-[#40C1C7] transition-colors">شروط الإستخدام وإخلاء المسئولية</button>
               <span className="text-gray-300">|</span>
               <button onClick={() => onNavigate && onNavigate('privacy-policy')} className="hover:text-[#40C1C7] transition-colors">سياسة الخصوصية وسرية المعلومات</button>
               <span className="text-gray-300">|</span>
               <button onClick={() => onNavigate && onNavigate('terms')} className="hover:text-[#40C1C7] transition-colors">سياسة الاسترجاع</button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500">
               <span className="hover:text-[#40C1C7] cursor-pointer transition-colors">الإقرار الضريبي</span>
               <span className="text-gray-300">|</span>
               <span className="hover:text-[#40C1C7] cursor-pointer transition-colors">السجل التجاري</span>
               <span className="text-gray-300">|</span>
               <span className="hover:text-[#40C1C7] cursor-pointer transition-colors">هيئة الزكاة والضريبة والجمارك</span>
            </div>

            <p className="text-xs text-gray-400 mt-2">جميع حقوق الملكية &copy; 2025 مؤسسة مزادات للتسويق، سجل رقم: 7021666073</p>
          </div>
       </div>
    </footer>
  );
};