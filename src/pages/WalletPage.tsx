import React, { useState } from 'react';
import { 
  Wallet, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  History, 
  Building2, 
  Plus, 
  Download,
  AlertCircle,
  ChevronLeft,
  Search,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

interface WalletPageProps {
  onNavigate?: (page: string) => void;
}

export const WalletPage = ({ onNavigate }: WalletPageProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'deposit' | 'withdraw' | 'transactions'>('overview');
  const [isWithdrawSuccess, setIsWithdrawSuccess] = useState(false);

  // Mock Transactions Data
  const transactions = [
    { id: 'TRX-99281', type: 'deposit', amount: 50000, date: '2025-02-15', status: 'completed', desc: 'إيداع بنكي - مصرف الراجحي' },
    { id: 'TRX-99282', type: 'block', amount: 25000, date: '2025-02-14', status: 'pending', desc: 'حجز مبلغ للمزاد #8821' },
    { id: 'TRX-99283', type: 'withdraw', amount: 10000, date: '2025-02-10', status: 'completed', desc: 'استرداد مبلغ للمحفظة البنكية' },
    { id: 'TRX-99284', type: 'deposit', amount: 100000, date: '2025-02-01', status: 'completed', desc: 'إيداع بنكي - البنك الأهلي' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-36 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <div className="p-2 bg-[#40C1C7]/10 rounded-xl text-[#40C1C7]">
                <Wallet size={32} />
              </div>
              المحفظة المالية
            </h1>
            <p className="text-gray-500 mt-2 text-sm">إدارة رصيدك، عمليات الإيداع والسحب، ومتابعة العمليات المالية.</p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => setActiveTab('deposit')}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#40C1C7] text-white rounded-xl font-bold shadow-lg shadow-teal-500/20 hover:bg-[#35a4a9] transition-all"
            >
              <Plus size={18} /> شحن المحفظة
            </button>
            <button 
              onClick={() => setActiveTab('withdraw')}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 hover:border-[#40C1C7] hover:text-[#40C1C7] transition-all"
            >
              <ArrowDownLeft size={18} /> سحب الرصيد
            </button>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Balance */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-gray-400 text-sm font-medium mb-1">الرصيد الكلي</p>
              <h2 className="text-4xl font-bold mb-4" dir="ltr">115,000 <span className="text-lg text-gray-400 font-normal">SAR</span></h2>
              <div className="flex items-center gap-2 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-lg w-fit">
                <ArrowUpRight size={14} />
                <span>آخر تحديث: قبل دقيقة</span>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#40C1C7]/20 rounded-full blur-3xl translate-x-10 translate-y-10"></div>
          </div>

          {/* Available Balance */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                <CreditCard size={24} />
              </div>
            </div>
            <p className="text-gray-500 text-sm font-medium mb-1">الرصيد المتاح للمزايدة</p>
            <h2 className="text-3xl font-bold text-gray-900" dir="ltr">90,000 <span className="text-sm text-gray-400 font-normal">SAR</span></h2>
            <p className="text-xs text-gray-400 mt-2">يمكنك استخدام هذا الرصيد للدخول في المزادات</p>
          </div>

          {/* Blocked Balance */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
             <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                <Building2 size={24} />
              </div>
            </div>
            <p className="text-gray-500 text-sm font-medium mb-1">المبالغ المحجوزة</p>
            <h2 className="text-3xl font-bold text-gray-900" dir="ltr">25,000 <span className="text-sm text-gray-400 font-normal">SAR</span></h2>
            <p className="text-xs text-gray-400 mt-2">مبالغ تأمين المزادات الحالية</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'overview', label: 'ملخص المحفظة', icon: Wallet },
              { id: 'transactions', label: 'سجل العمليات', icon: History },
              { id: 'deposit', label: 'شحن الرصيد', icon: Plus },
              { id: 'withdraw', label: 'سحب الرصيد', icon: ArrowDownLeft },
              { id: 'accounts', label: 'الحسابات البنكية', icon: Building2 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white text-[#40C1C7] shadow-sm border border-gray-100' 
                    : 'text-gray-500 hover:bg-white hover:text-gray-700'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 min-h-[400px]">
              
              {/* Transactions Tab */}
              {(activeTab === 'overview' || activeTab === 'transactions') && (
                <div className="p-6">
                   <div className="flex items-center justify-between mb-6">
                     <h3 className="text-lg font-bold text-gray-900">سجل العمليات الأخيرة</h3>
                     <div className="flex gap-2">
                       <button className="p-2 text-gray-400 hover:text-[#40C1C7] hover:bg-gray-50 rounded-lg transition-colors">
                         <Filter size={18} />
                       </button>
                       <button className="p-2 text-gray-400 hover:text-[#40C1C7] hover:bg-gray-50 rounded-lg transition-colors">
                         <Download size={18} />
                       </button>
                     </div>
                   </div>

                   <div className="overflow-x-auto">
                     <table className="w-full text-right">
                       <thead className="bg-gray-50 text-gray-500 text-sm">
                         <tr>
                           <th className="px-4 py-3 rounded-r-xl">نوع العملية</th>
                           <th className="px-4 py-3">المبلغ</th>
                           <th className="px-4 py-3">التاريخ</th>
                           <th className="px-4 py-3">التفاصيل</th>
                           <th className="px-4 py-3 rounded-l-xl">الحالة</th>
                         </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-50">
                         {transactions.map((trx) => (
                           <tr key={trx.id} className="hover:bg-gray-50/50 transition-colors">
                             <td className="px-4 py-4">
                               <div className="flex items-center gap-3">
                                 <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                   trx.type === 'deposit' ? 'bg-green-100 text-green-600' :
                                   trx.type === 'withdraw' ? 'bg-red-100 text-red-600' :
                                   'bg-orange-100 text-orange-600'
                                 }`}>
                                   {trx.type === 'deposit' ? <ArrowDownLeft size={16} /> : 
                                    trx.type === 'withdraw' ? <ArrowUpRight size={16} /> :
                                    <CreditCard size={16} />}
                                 </div>
                                 <span className="font-medium text-gray-900">
                                   {trx.type === 'deposit' ? 'إيداع' : 
                                    trx.type === 'withdraw' ? 'سحب' : 'حجز'}
                                 </span>
                               </div>
                             </td>
                             <td className="px-4 py-4 font-bold" dir="ltr">
                               {trx.amount.toLocaleString()} SAR
                             </td>
                             <td className="px-4 py-4 text-gray-500 text-sm">
                               {trx.date}
                             </td>
                             <td className="px-4 py-4 text-gray-500 text-sm">
                               {trx.desc}
                             </td>
                             <td className="px-4 py-4">
                               <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                                 trx.status === 'completed' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                               }`}>
                                 {trx.status === 'completed' ? 'مكتملة' : 'قيد المعالجة'}
                               </span>
                             </td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                </div>
              )}

              {/* Deposit Tab */}
              {activeTab === 'deposit' && (
                <div className="p-8 max-w-2xl mx-auto text-center">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">شحن المحفظة</h3>
                  <p className="text-gray-500 mb-8">اختر طريقة الدفع المناسبة لإضافة رصيد إلى محفظتك</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <button className="border-2 border-[#40C1C7] bg-teal-50 p-4 rounded-xl flex flex-col items-center gap-2">
                       <Building2 className="text-[#40C1C7]" size={24} />
                       <span className="font-bold text-[#40C1C7]">تحويل بنكي</span>
                    </button>
                    <button className="border border-gray-200 p-4 rounded-xl flex flex-col items-center gap-2 hover:border-gray-300 transition-colors">
                       <CreditCard className="text-gray-400" size={24} />
                       <span className="font-medium text-gray-600">بطاقة مدى / فيزا</span>
                    </button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl text-right mb-6">
                    <h4 className="font-bold text-sm mb-3">الحسابات البنكية للمنصة:</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-200">
                         <div className="flex items-center gap-2">
                           <div className="w-8 h-8 bg-blue-900 rounded-md"></div>
                           <span className="font-medium text-sm">مصرف الراجحي</span>
                         </div>
                         <button className="text-xs text-[#40C1C7] font-bold">نسخ الآيبان</button>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-200">
                         <div className="flex items-center gap-2">
                           <div className="w-8 h-8 bg-green-700 rounded-md"></div>
                           <span className="font-medium text-sm">البنك الأهلي SNB</span>
                         </div>
                         <button className="text-xs text-[#40C1C7] font-bold">نسخ الآيبان</button>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-[#40C1C7] text-white py-3 rounded-xl font-bold hover:bg-[#35a4a9] transition-all">
                    أرفق إيصال التحويل
                  </button>
                </div>
              )}

              {/* Withdraw Tab */}
              {activeTab === 'withdraw' && (
                isWithdrawSuccess ? (
                  <div className="p-8 max-w-2xl mx-auto text-center animate-in fade-in zoom-in duration-300">
                     <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <CheckCircle2 size={40} />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-2">تم تأكيد طلب السحب بنجاح</h3>
                     <p className="text-gray-500 mb-8 max-w-md mx-auto">تم استلام طلبك وسيتم تحويل المبلغ إلى حسابك البنكي خلال 24-48 ساعة عمل.</p>
                     
                     <div className="space-y-3 max-w-md mx-auto">
                        <button 
                           onClick={() => onNavigate?.('auction-details')}
                           className="w-full bg-[#40C1C7] text-white py-3.5 rounded-xl font-bold hover:bg-[#35a4a9] transition-all shadow-lg shadow-teal-500/20"
                        >
                           العودة للمزاد المسجل فيه
                        </button>
                        
                        <button 
                           onClick={() => onNavigate?.('live-auction')}
                           className="w-full bg-white border border-gray-200 text-gray-700 py-3.5 rounded-xl font-bold hover:bg-gray-50 hover:text-[#40C1C7] transition-all"
                        >
                           متابعة عمليات المزاد الجارية
                        </button>
                     </div>
                  </div>
                ) : (
                  <div className="p-8 max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowDownLeft size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">سحب الرصيد</h3>
                    <p className="text-gray-500 mb-8">قم بإدخال المبلغ المطلوب سحبه إلى حسابك البنكي المسجل</p>
                    
                    <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl text-right mb-6 flex items-start gap-3">
                      <AlertCircle className="text-orange-500 shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-orange-700">تستغرق عملية التحويل من 24 إلى 48 ساعة عمل. يجب أن يكون الحساب البنكي باسم صاحب المحفظة.</p>
                    </div>

                    <div className="text-right space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">المبلغ المراد سحبه</label>
                        <div className="relative">
                          <input 
                            type="number" 
                            placeholder="0.00" 
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none"
                          />
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">SAR</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">الرصيد المتاح للسحب: <span dir="ltr">90,000 SAR</span></p>
                      </div>

                      <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">اختر الحساب البنكي</label>
                         <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] outline-none text-gray-600">
                           <option>مصرف الراجحي - SA59 0000...</option>
                           <option>البنك الأهلي - SA88 1000...</option>
                         </select>
                      </div>

                      <button 
                        onClick={() => setIsWithdrawSuccess(true)}
                        className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-all mt-4"
                      >
                        تأكيد طلب السحب
                      </button>
                    </div>
                  </div>
                )
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
