import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  Key, 
  Banknote, 
  CheckCircle2, 
  Loader2, 
  AlertCircle,
  Calculator,
  Briefcase,
  Wallet,
  Landmark
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FinanceEligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyPrice: number;
}

type FinanceType = 'murabaha' | 'ijara' | 'personal';
type Step = 'input' | 'otp' | 'processing' | 'result';

const banks = [
  { id: 'rajhi', name: 'مصرف الراجحي', color: '#1A4F9C', textColor: 'text-white' },
  { id: 'snb', name: 'البنك الأهلي', color: '#3A7D40', textColor: 'text-white' },
  { id: 'riyad', name: 'بنك الرياض', color: '#005931', textColor: 'text-white' },
  { id: 'inma', name: 'مصرف الإنماء', color: '#6F4E37', textColor: 'text-white' },
  { id: 'bilad', name: 'بنك البلاد', color: '#D68910', textColor: 'text-white' },
  { id: 'anb', name: 'البنك العربي', color: '#006C35', textColor: 'text-white' },
];

export const FinanceEligibilityModal = ({ isOpen, onClose, propertyPrice }: FinanceEligibilityModalProps) => {
  const [activeTab, setActiveTab] = useState<FinanceType>('murabaha');
  const [step, setStep] = useState<Step>('input');
  const [formData, setFormData] = useState({
    salary: '',
    obligations: '',
    sector: 'government',
    idNumber: '',
    phone: '',
    bankId: 'rajhi'
  });
  const [result, setResult] = useState<any>(null);

  if (!isOpen) return null;

  const handleCalculate = () => {
    // Simulate API call validation
    if (!formData.salary || !formData.idNumber) return;
    setStep('otp');
  };

  const handleVerifyOtp = () => {
    setStep('processing');
    
    // Simulate API processing delay
    setTimeout(() => {
      const salary = parseInt(formData.salary);
      const obligations = parseInt(formData.obligations) || 0;
      const netSalary = salary - obligations;
      
      // Simple mock calculation logic
      let maxLoan = 0;
      let eligible = false;

      if (activeTab === 'murabaha') {
        // Purchase: ~60x net salary
        maxLoan = netSalary * 60; 
      } else if (activeTab === 'ijara') {
         // Rent/Lease: ~65x net salary (usually higher risk tolerance or different structure)
         maxLoan = netSalary * 65;
      } else {
         // Personal: ~18x net salary
         maxLoan = netSalary * 18;
      }

      eligible = maxLoan >= (activeTab === 'personal' ? 50000 : propertyPrice * 0.8); // 20% downpayment assumption

      setResult({
        eligible,
        maxLoan,
        monthlyInstallment: netSalary * 0.45, // 45% DBR
        profitRate: 3.5 // 3.5% assumption
      });
      setStep('result');
    }, 2000);
  };

  const reset = () => {
    setStep('input');
    setResult(null);
  };

  const selectedBank = banks.find(b => b.id === formData.bankId) || banks[0];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Calculator className="text-[#40C1C7]" />
              التحقق من الأهلية التمويلية
            </h2>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <CheckCircle2 size={12} className="text-green-500" />
              بوابة تمويلية آمنة - اختر البنك المناسب
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-6">
          <div className="flex p-1 bg-gray-100 rounded-xl">
            <button 
              onClick={() => { setActiveTab('murabaha'); reset(); }}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${activeTab === 'murabaha' ? 'bg-white text-[#40C1C7] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Building2 size={16} />
              شراء عقار (مرابحة)
            </button>
            <button 
              onClick={() => { setActiveTab('ijara'); reset(); }}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${activeTab === 'ijara' ? 'bg-white text-[#40C1C7] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Key size={16} />
              إيجار منتهي بالتمليك
            </button>
            <button 
              onClick={() => { setActiveTab('personal'); reset(); }}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${activeTab === 'personal' ? 'bg-white text-[#40C1C7] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Banknote size={16} />
              تمويل شخصي (كاش)
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: INPUT */}
            {step === 'input' && (
              <motion.div 
                key="input"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6">
                  <h4 className="font-bold text-blue-900 text-sm mb-2">بيانات التمويل المقترحة</h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-700">قيمة العقار المستهدف:</span>
                    <span className="font-mono font-bold text-blue-900">{propertyPrice.toLocaleString()} ر.س</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Bank Selection */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                      <Landmark size={14} className="text-[#40C1C7]" />
                      البنك الممول
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {banks.map((bank) => (
                        <button
                          key={bank.id}
                          onClick={() => setFormData({...formData, bankId: bank.id})}
                          className={`p-2 rounded-xl text-sm font-bold border transition-all flex items-center justify-center text-center h-12 ${formData.bankId === bank.id ? 'border-[#40C1C7] bg-[#40C1C7]/5 text-[#40C1C7] ring-1 ring-[#40C1C7]' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                        >
                          {bank.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">الراتب الشهري (شامل البدلات)</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all pl-12"
                        placeholder="مثال: 15000"
                        value={formData.salary}
                        onChange={(e) => setFormData({...formData, salary: e.target.value})}
                      />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">ر.س</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-700">الالتزامات الشهرية الحالية</label>
                     <div className="relative">
                      <input 
                        type="number" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all pl-12"
                        placeholder="مثال: 2500"
                        value={formData.obligations}
                        onChange={(e) => setFormData({...formData, obligations: e.target.value})}
                      />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">ر.س</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">جهة العمل</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all bg-white"
                      value={formData.sector}
                      onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    >
                      <option value="government">قطاع حكومي / عسكري</option>
                      <option value="private_listed">قطاع خاص (شركات كبرى)</option>
                      <option value="private">قطاع خاص (شركات ناشئة)</option>
                      <option value="pensioner">متقاعد</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">رقم الهوية الوطنية</label>
                    <input 
                      type="text" 
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40C1C7] focus:ring-2 focus:ring-[#40C1C7]/20 outline-none transition-all"
                      placeholder="1xxxxxxxxx"
                      value={formData.idNumber}
                      onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={handleCalculate}
                    className="w-full py-4 bg-[#40C1C7] hover:bg-[#3bb1b6] text-white rounded-xl font-bold shadow-lg shadow-[#40C1C7]/20 transition-all flex items-center justify-center gap-2"
                  >
                    التحقق من الأهلية
                    <ArrowLeft size={20} />
                  </button>
                  <p className="text-[10px] text-gray-400 text-center mt-3">
                    من خلال النقر على "التحقق"، فإنك توافق على الاستعلام عن سجلك الائتماني لدى سمة (SIMAH).
                  </p>
                </div>
              </motion.div>
            )}

            {/* STEP 2: OTP */}
            {step === 'otp' && (
               <motion.div 
                 key="otp"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="text-center py-8"
               >
                 <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#40C1C7]">
                    <Key size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">التحقق من الهوية</h3>
                 <p className="text-gray-500 mb-6">أدخل رمز التحقق المرسل إلى جوالك المسجل في أبشر</p>
                 
                 <div className="flex justify-center gap-2 mb-8 dir-ltr">
                    {[1,2,3,4].map((_, i) => (
                      <input 
                        key={i} 
                        type="text" 
                        maxLength={1}
                        className="w-12 h-14 rounded-xl border-2 border-gray-200 text-center text-2xl font-bold focus:border-[#40C1C7] focus:ring-4 focus:ring-[#40C1C7]/10 outline-none transition-all"
                      />
                    ))}
                 </div>

                 <button 
                    onClick={handleVerifyOtp}
                    className="w-full py-4 bg-[#40C1C7] hover:bg-[#3bb1b6] text-white rounded-xl font-bold shadow-lg shadow-[#40C1C7]/20 transition-all"
                  >
                    تأكيد
                  </button>
               </motion.div>
            )}

            {/* STEP 3: PROCESSING */}
            {step === 'processing' && (
              <motion.div 
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <Loader2 size={48} className="text-[#40C1C7] animate-spin mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">جاري الاتصال بـ {selectedBank.name}...</h3>
                <p className="text-gray-400 text-sm">يتم الآن تحليل ملاءتك المالية وحساب الحد الأقصى للتمويل</p>
              </motion.div>
            )}

            {/* STEP 4: RESULT */}
            {step === 'result' && result && (
               <motion.div 
                 key="result"
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="text-center"
               >
                 {result.eligible ? (
                    <div className="space-y-6">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 animate-in zoom-in duration-300">
                        <CheckCircle2 size={40} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">مبروك! أنت مؤهل للتمويل</h3>
                        <p className="text-gray-500 flex items-center justify-center gap-1">
                            عرض مبدئي مقدم من 
                            <span className="font-bold" style={{color: selectedBank.color}}>{selectedBank.name}</span>
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                         <div className="grid grid-cols-2 gap-6 text-center">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">الحد الأقصى للتمويل</p>
                              <p className="text-2xl font-bold text-[#40C1C7] font-mono">{result.maxLoan.toLocaleString()}</p>
                              <p className="text-[10px] text-gray-400">ريال سعودي</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">القسط الشهري التقديري</p>
                              <p className="text-xl font-bold text-gray-900 font-mono">{result.monthlyInstallment.toLocaleString()}</p>
                              <p className="text-[10px] text-gray-400">ريال سعودي</p>
                            </div>
                         </div>
                      </div>

                      {activeTab !== 'personal' && result.maxLoan < propertyPrice && (
                         <div className="bg-amber-50 text-amber-800 p-4 rounded-xl text-sm border border-amber-100 flex items-start gap-2 text-right">
                           <AlertCircle size={18} className="shrink-0 mt-0.5" />
                           <p>مبلغ التمويل المتاح أقل من قيمة العقار. ستحتاج لدفعة مقدمة قدرها <span className="font-bold font-mono">{(propertyPrice - result.maxLoan).toLocaleString()} ر.س</span></p>
                         </div>
                      )}

                      <div className="flex gap-3">
                         <button 
                            className="flex-1 py-3 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:opacity-90"
                            style={{ backgroundColor: selectedBank.color }}
                        >
                           تقديم طلب عبر {selectedBank.name}
                         </button>
                         <button 
                           onClick={reset}
                           className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-all"
                         >
                           حساب جديد
                         </button>
                      </div>
                    </div>
                 ) : (
                    <div className="space-y-6 py-4">
                       <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-600">
                        <X size={40} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">عذراً، غير مؤهل حالياً</h3>
                        <p className="text-gray-500">بناءً على البيانات، لا يمكن إتمام التمويل لدى {selectedBank.name} لهذا المبلغ.</p>
                      </div>
                      <button 
                         onClick={reset}
                         className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-all"
                       >
                         المحاولة ببيانات مختلفة
                       </button>
                    </div>
                 )}
               </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

// Helper Icon
const ArrowLeft = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 12H5"/>
    <path d="M12 19l-7-7 7-7"/>
  </svg>
);
