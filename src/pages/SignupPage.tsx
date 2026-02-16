import React, { useState } from 'react';
import { 
  ArrowRight,
  Globe,
  Building2,
  Flag,
  CheckCircle2,
  ChevronLeft,
  User,
  Briefcase,
  Upload,
  ChevronDown,
  Mail,
  Phone
} from 'lucide-react';
import { allCountries } from '../utils/countries';
import { allCountryCodes } from '../utils/phoneCodes';

interface SignupPageProps {
  onNavigate: (page: string) => void;
}

type NationalityType = 'saudi' | 'gcc' | 'other';
type AccountType = 'individual' | 'business';

export const SignupPage: React.FC<SignupPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [nationality, setNationality] = useState<NationalityType>('saudi');
  const [accountType, setAccountType] = useState<AccountType>('individual');
  
  // Common Contact Info
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('+966');

  // Step 3 State (Individual)
  const [fullName, setFullName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [residencyLocation, setResidencyLocation] = useState('');
  const [userNationality, setUserNationality] = useState('');
  const [idFile, setIdFile] = useState<File | null>(null);

  // Step 3 State (Business)
  const [companyName, setCompanyName] = useState('');
  const [crNumber, setCrNumber] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyNationality, setCompanyNationality] = useState('');
  const [crFile, setCrFile] = useState<File | null>(null);

  const countryCodes = allCountryCodes;

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // Proceed to Step 4
      if (accountType === 'individual') {
         console.log('Proceed to step 4 (Individual)', { 
           fullName, email, mobile: `${countryCode}${mobile}`, idNumber, residencyLocation, userNationality, idFile 
         });
      } else {
         console.log('Proceed to step 4 (Business)', { 
           companyName, email, mobile: `${countryCode}${mobile}`, crNumber, companyLocation, companyNationality, crFile 
         });
      }
      setStep(4);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onNavigate('login');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'id' | 'cr') => {
    if (e.target.files && e.target.files[0]) {
      if (type === 'id') setIdFile(e.target.files[0]);
      if (type === 'cr') setCrFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row" dir="rtl">
      
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 lg:py-0 bg-[#FDFDFD] order-1 lg:order-1">
        <div className="w-full max-w-lg mx-auto">
          
          {/* Step Indicator */}
          {step > 1 && (
             <div className="flex justify-between items-center mb-8">
               <span className="text-gray-400 text-sm font-medium">خطوة {step} من 5</span>
             </div>
          )}

          {/* STEP 1: Nationality Selection */}
          {step === 1 && (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-black text-gray-900 mb-3 font-sans">حالة الإقامة والجنسية</h1>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                  يرجى تحديد ما إذا كنت سعودياً أو مقيماً داخل المملكة، أو أجنبياً من خارجها.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {/* Option 1: Saudi */}
                <label 
                  className={`relative flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 group ${
                    nationality === 'saudi' 
                      ? 'border-[#0F766E] bg-teal-50/10' 
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="mt-1">
                     <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${nationality === 'saudi' ? 'border-[#0F766E] bg-[#0F766E]' : 'border-gray-300 bg-white'}`}>
                        {nationality === 'saudi' && <div className="w-2 h-2 rounded-full bg-white" />}
                     </div>
                     <input 
                       type="radio" 
                       name="nationality" 
                       value="saudi" 
                       checked={nationality === 'saudi'}
                       onChange={() => setNationality('saudi')}
                       className="hidden"
                     />
                  </div>
                  <div className="flex-1 text-right">
                     <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-900 mb-1">سعودي أو مقيم بالسعودية</h3>
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                           <Flag size={16} fill="currentColor" />
                        </div>
                     </div>
                     <p className="text-xs text-gray-500 leading-relaxed">سوف تكون طرفاً في كل المزادات.</p>
                  </div>
                </label>

                {/* Option 2: GCC */}
                <label 
                  className={`relative flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 group ${
                    nationality === 'gcc' 
                      ? 'border-[#0F766E] bg-teal-50/10' 
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="mt-1">
                     <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${nationality === 'gcc' ? 'border-[#0F766E] bg-[#0F766E]' : 'border-gray-300 bg-white'}`}>
                        {nationality === 'gcc' && <div className="w-2 h-2 rounded-full bg-white" />}
                     </div>
                     <input 
                       type="radio" 
                       name="nationality" 
                       value="gcc" 
                       onChange={() => setNationality('gcc')}
                       className="hidden"
                     />
                  </div>
                  <div className="flex-1 text-right">
                     <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-900 mb-1">مواطن أو مقيم في دول مجلس التعاون الخليجي</h3>
                        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                           <Building2 size={16} />
                        </div>
                     </div>
                     <p className="text-xs text-gray-500 leading-relaxed">ستشارك في جميع المزادات - بالنسبة للمزادات العقارية، تطبق شروط وأحكام الهيئة العامة للعقار...</p>
                  </div>
                </label>

                {/* Option 3: Other */}
                <label 
                  className={`relative flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 group ${
                    nationality === 'other' 
                      ? 'border-[#0F766E] bg-teal-50/10' 
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="mt-1">
                     <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${nationality === 'other' ? 'border-[#0F766E] bg-[#0F766E]' : 'border-gray-300 bg-white'}`}>
                        {nationality === 'other' && <div className="w-2 h-2 rounded-full bg-white" />}
                     </div>
                     <input 
                       type="radio" 
                       name="nationality" 
                       value="other" 
                       onChange={() => setNationality('other')}
                       className="hidden"
                     />
                  </div>
                  <div className="flex-1 text-right">
                     <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-900 mb-1">دول أخرى</h3>
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                           <Globe size={16} />
                        </div>
                     </div>
                     <p className="text-xs text-gray-500 leading-relaxed">ستشارك في جميع المزادات، تطبق شروط وأحكام الهيئة العامة للعقار</p>
                  </div>
                </label>
              </div>
            </>
          )}

          {/* STEP 2: Account Type Selection */}
          {step === 2 && (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-black text-gray-900 mb-3 font-sans">اختر نوع حسابك</h1>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                  هل تود المشاركة كمستخدم فردي أم تمثل شركة أو نشاطاً تجارياً؟
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {/* Individual */}
                <label 
                  className={`relative flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 group ${
                    accountType === 'individual' 
                      ? 'border-[#0F766E] bg-teal-50/10' 
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="mt-1">
                     <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${accountType === 'individual' ? 'border-[#0F766E] bg-[#0F766E]' : 'border-gray-300 bg-white'}`}>
                        {accountType === 'individual' && <div className="w-2 h-2 rounded-full bg-white" />}
                     </div>
                     <input 
                       type="radio" 
                       name="accountType" 
                       value="individual" 
                       checked={accountType === 'individual'}
                       onChange={() => setAccountType('individual')}
                       className="hidden"
                     />
                  </div>
                  <div className="flex-1 text-right">
                     <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-900 mb-1">افراد</h3>
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-[#0F766E]">
                           <User size={18} />
                        </div>
                     </div>
                     <p className="text-xs text-gray-500 leading-relaxed">رحلتك تبدأ هنا، حيث الفرص المميزة في المزادات.</p>
                  </div>
                </label>

                {/* Business */}
                <label 
                  className={`relative flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 group ${
                    accountType === 'business' 
                      ? 'border-[#0F766E] bg-teal-50/10' 
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="mt-1">
                     <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${accountType === 'business' ? 'border-[#0F766E] bg-[#0F766E]' : 'border-gray-300 bg-white'}`}>
                        {accountType === 'business' && <div className="w-2 h-2 rounded-full bg-white" />}
                     </div>
                     <input 
                       type="radio" 
                       name="accountType" 
                       value="business" 
                       onChange={() => setAccountType('business')}
                       className="hidden"
                     />
                  </div>
                  <div className="flex-1 text-right">
                     <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-900 mb-1">اعمال</h3>
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                           <Building2 size={18} />
                        </div>
                     </div>
                     <p className="text-xs text-gray-500 leading-relaxed">معاً نحو تعاون يحقق القيمة ويعزز نجاحكم في سوق المزادات.</p>
                  </div>
                </label>
              </div>
            </>
          )}

          {/* STEP 3: Information Input */}
          {step === 3 && (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-black text-gray-900 mb-3 font-sans">نتطلع للتعرف عليك</h1>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                  نسعد بانضمامك إلى منصتنا ونترقب مشاركتك المميزة.
                </p>
              </div>

              {accountType === 'individual' ? (
                // Individual Form
                <div className="space-y-5 mb-8">
                  <div className="space-y-1.5">
                     <label className="text-sm font-bold text-gray-700 block text-right">الاسم بالكامل</label>
                     <input 
                       type="text" 
                       value={fullName}
                       onChange={(e) => setFullName(e.target.value)}
                       className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all placeholder:text-gray-400"
                       placeholder="ادخل الاسم بالكامل"
                     />
                  </div>
                  
                  {/* Mobile & Email Fields for Individual */}
                  <div className="space-y-1.5">
                     <label className="text-sm font-bold text-gray-700 block text-right">رقم الجوال</label>
                     <div className="flex gap-2" dir="ltr">
                        <div className="relative w-32">
                          <select
                             value={countryCode}
                             onChange={(e) => setCountryCode(e.target.value)}
                             className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg pl-3 pr-8 text-sm font-medium appearance-none cursor-pointer focus:outline-none focus:border-[#0F766E] text-gray-900"
                          >
                            {countryCodes.map((c) => (
                               <option key={`${c.code}-${c.name}`} value={c.code}>{c.flag} {c.code}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                        </div>
                        <input 
                          type="tel"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          className="flex-1 h-12 bg-white border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all placeholder:text-gray-400"
                          placeholder="5XXXXXXXX"
                          dir="rtl"
                        />
                     </div>
                  </div>

                  <div className="space-y-1.5">
                     <label className="text-sm font-bold text-gray-700 block text-right">البريد الإلكتروني</label>
                     <input 
                       type="email" 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all placeholder:text-gray-400"
                       placeholder="example@email.com"
                     />
                  </div>

                  <div className="space-y-1.5">
                     <label className="text-sm font-bold text-gray-700 block text-right">رقم الهوية أو الجواز</label>
                     <input 
                       type="text" 
                       value={idNumber}
                       onChange={(e) => setIdNumber(e.target.value)}
                       className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all placeholder:text-gray-400"
                       placeholder="ادخل رقم الهوية أو الجواز"
                     />
                  </div>
                  <div className="space-y-1.5">
                     <label className="text-sm font-bold text-gray-700 block text-right">صورة الهوية أو الجواز</label>
                     <div className="relative">
                        <input 
                          type="file" 
                          id="id_upload" 
                          className="hidden" 
                          onChange={(e) => handleFileChange(e, 'id')}
                          accept=".pdf,.png,.jpg,.jpeg"
                        />
                        <label 
                          htmlFor="id_upload"
                          className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                           <span className="text-gray-400 text-sm truncate">
                             {idFile ? idFile.name : 'الملفات المسموح بها: PDF, PNG, JPG'}
                           </span>
                           <div className="flex items-center gap-2 text-[#0F766E] font-medium text-sm">
                              <span>رفع الملف</span>
                              <Upload size={16} />
                           </div>
                        </label>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                       <label className="text-sm font-bold text-gray-700 block text-right">مكان الإقامة</label>
                       <div className="relative">
                         <select 
                           value={residencyLocation}
                           onChange={(e) => setResidencyLocation(e.target.value)}
                           className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all appearance-none cursor-pointer"
                         >
                           <option value="" disabled>اختر مكان الإقامة</option>
                           {nationality === 'gcc' ? (
                             <>
                               <option value="saudi">المملكة العربية السعودية</option>
                               <option value="uae">الإمارات العربية المتحدة</option>
                               <option value="kuwait">الكويت</option>
                               <option value="bahrain">البحرين</option>
                               <option value="qatar">قطر</option>
                               <option value="oman">سلطنة عمان</option>
                               {allCountries.map((country) => (
                                 <option key={country} value={country}>{country}</option>
                               ))}
                             </>
                           ) : nationality === 'other' ? (
                             <>
                               {allCountries.map((country) => (
                                 <option key={country} value={country}>{country}</option>
                               ))}
                             </>
                           ) : (
                             <>
                               <option value="riyadh">الرياض</option>
                               <option value="jeddah">جدة</option>
                               <option value="dammam">الدمام</option>
                             </>
                           )}
                         </select>
                         <ChevronDown className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                       </div>
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-sm font-bold text-gray-700 block text-right">الجنسية</label>
                       <div className="relative">
                         <select 
                           value={userNationality}
                           onChange={(e) => setUserNationality(e.target.value)}
                           className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all appearance-none cursor-pointer"
                         >
                           <option value="" disabled>اختر الجنسية</option>
                           <option value="saudi">سعودي</option>
                           <option value="emirati">إماراتي</option>
                           <option value="kuwaiti">كويتي</option>
                           <option value="bahraini">بحريني</option>
                           <option value="qatari">قطري</option>
                           <option value="omani">عماني</option>
                           {allCountries.map((country) => (
                             <option key={country} value={country}>{country}</option>
                           ))}
                         </select>
                         <ChevronDown className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                       </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Business Form
                <div className="space-y-5 mb-8">
                  <div className="space-y-1.5">
                     <label className="text-sm font-bold text-gray-700 block text-right">اسم المنشأة</label>
                     <input 
                       type="text" 
                       value={companyName}
                       onChange={(e) => setCompanyName(e.target.value)}
                       className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all placeholder:text-gray-400"
                       placeholder="ادخل اسم المنشأة"
                     />
                  </div>
                  
                  {/* Mobile & Email Fields for Business */}
                  <div className="space-y-1.5">
                     <label className="text-sm font-bold text-gray-700 block text-right">رقم الجوال الرسمي</label>
                     <div className="flex gap-2" dir="ltr">
                        <div className="relative w-32">
                          <select
                             value={countryCode}
                             onChange={(e) => setCountryCode(e.target.value)}
                             className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg pl-3 pr-8 text-sm font-medium appearance-none cursor-pointer focus:outline-none focus:border-[#0F766E] text-gray-900"
                          >
                            {countryCodes.map((c) => (
                               <option key={`${c.code}-${c.name}`} value={c.code}>{c.flag} {c.code}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                        </div>
                        <input 
                          type="tel"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          className="flex-1 h-12 bg-white border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all placeholder:text-gray-400"
                          placeholder="5XXXXXXXX"
                          dir="rtl"
                        />
                     </div>
                  </div>

                  <div className="space-y-1.5">
                     <label className="text-sm font-bold text-gray-700 block text-right">البريد الإلكتروني الرسمي</label>
                     <input 
                       type="email" 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all placeholder:text-gray-400"
                       placeholder="info@company.com"
                     />
                  </div>

                  <div className="space-y-1.5">
                     <label className="text-sm font-bold text-gray-700 block text-right">رقم السجل التجاري</label>
                     <input 
                       type="text" 
                       value={crNumber}
                       onChange={(e) => setCrNumber(e.target.value)}
                       className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all placeholder:text-gray-400"
                       placeholder="ادخل رقم السجل التجاري"
                     />
                  </div>
                  <div className="space-y-1.5">
                     <label className="text-sm font-bold text-gray-700 block text-right">صورة السجل التجاري</label>
                     <div className="relative">
                        <input 
                          type="file" 
                          id="cr_upload" 
                          className="hidden" 
                          onChange={(e) => handleFileChange(e, 'cr')}
                          accept=".pdf,.png,.jpg,.jpeg"
                        />
                        <label 
                          htmlFor="cr_upload"
                          className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                           <span className="text-gray-400 text-sm truncate">
                             {crFile ? crFile.name : 'الملفات المسموح بها: PDF, PNG, JPG'}
                           </span>
                           <div className="flex items-center gap-2 text-[#0F766E] font-medium text-sm">
                              <span>رفع الملف</span>
                              <Upload size={16} />
                           </div>
                        </label>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                       <label className="text-sm font-bold text-gray-700 block text-right">المقر الرئيسي للشركة</label>
                       <div className="relative">
                         <select 
                           value={companyLocation}
                           onChange={(e) => setCompanyLocation(e.target.value)}
                           className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all appearance-none cursor-pointer"
                         >
                           <option value="" disabled>اختر المقر الرئيسي للشركة</option>
                           {nationality === 'gcc' ? (
                             <>
                               <option value="saudi">المملكة العربية السعودية</option>
                               <option value="uae">الإمارات العربية المتحدة</option>
                               <option value="kuwait">الكويت</option>
                               <option value="bahrain">البحرين</option>
                               <option value="qatar">قطر</option>
                               <option value="oman">سلطنة عمان</option>
                               {allCountries.map((country) => (
                                 <option key={country} value={country}>{country}</option>
                               ))}
                             </>
                           ) : nationality === 'other' ? (
                             <>
                               {allCountries.map((country) => (
                                 <option key={country} value={country}>{country}</option>
                               ))}
                             </>
                           ) : (
                             <>
                               <option value="riyadh">الرياض</option>
                               <option value="jeddah">جدة</option>
                               <option value="dammam">الدمام</option>
                             </>
                           )}
                         </select>
                         <ChevronDown className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                       </div>
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-sm font-bold text-gray-700 block text-right">جنسية الشركة</label>
                       <div className="relative">
                         <select 
                           value={companyNationality}
                           onChange={(e) => setCompanyNationality(e.target.value)}
                           className="w-full h-12 bg-white border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all appearance-none cursor-pointer"
                         >
                           <option value="" disabled>اختر جنسية الشركة</option>
                           {nationality === 'gcc' ? (
                             <>
                               <option value="saudi">المملكة العربية السعودية</option>
                               <option value="uae">الإمارات العربية المتحدة</option>
                               <option value="kuwait">الكويت</option>
                               <option value="bahrain">البحرين</option>
                               <option value="qatar">قطر</option>
                               <option value="oman">سلطنة عمان</option>
                               <option value="multiple">متعددة</option>
                             </>
                           ) : nationality === 'other' ? (
                             <>
                               {allCountries.map((country) => (
                                 <option key={country} value={country}>{country}</option>
                               ))}
                             </>
                           ) : (
                             <>
                               <option value="saudi">سعودي</option>
                               <option value="other">أخرى</option>
                             </>
                           )}
                         </select>
                         <ChevronDown className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                       </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Navigation Buttons */}
          <div className="space-y-3">
             <button
                onClick={() => step === 3 ? onNavigate('home') : handleNext()}
                className="w-full h-14 bg-[#0F766E] text-white rounded-lg font-bold hover:bg-[#0d655e] transition-all shadow-lg shadow-teal-900/10 flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                {step === 3 ? 'إتمام التسجيل' : 'التالي'}
              </button>
              
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="w-full h-14 bg-[#FFFBF0] border border-[#FDE68A] text-amber-700 rounded-lg font-bold hover:bg-[#FFF7E1] transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  السابق
                </button>
              )}
          </div>
          
          {/* Footer for Step 1 Only */}
          {step === 1 && (
             <div className="text-center mt-6">
                 <span className="text-gray-400 text-sm">هل لديك حساب بالفعل؟ </span>
                 <button 
                   onClick={() => onNavigate('login')}
                   className="text-[#0F766E] hover:underline font-bold text-sm transition-colors"
                 >
                   قم بتسجيل الدخول لحسابك
                 </button>
             </div>
          )}
          
          <div className="flex justify-center gap-6 mt-16 text-sm text-[#0F766E] font-bold opacity-80">
            <button onClick={() => onNavigate('privacy-policy')} className="hover:opacity-100 transition-opacity">سياسة الخصوصية</button>
            <button onClick={() => onNavigate('terms')} className="hover:opacity-100 transition-opacity">الشروط والأحكام</button>
          </div>

        </div>
      </div>

      {/* Image Side */}
      <div className="hidden lg:block w-1/2 relative order-2 lg:order-2">
        <div className="absolute inset-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1694018359679-49465b4c0d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbCUyMEZhaXNhbGlhaCUyMFRvd2VyJTIwUml5YWRoJTIwdmVydGljYWwlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc2ODMyODcxOXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Al Faisaliah Tower" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        {/* Language Switcher */}
        <div className="absolute top-8 left-8 z-10">
           <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-white/30 transition-all">
             En
           </button>
        </div>
      </div>

    </div>
  );
};