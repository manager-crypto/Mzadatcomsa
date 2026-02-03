import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart3, Megaphone } from 'lucide-react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show after a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setPreferences({ essential: true, analytics: true, marketing: true });
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible && !showSettings) return null;

  return (
    <>
      {/* Banner */}
      {isVisible && !showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-gray-100 z-50 animate-in slide-in-from-bottom-full duration-500">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-teal-50 p-3 rounded-full hidden md:block">
                  <Cookie className="text-[#40C1C7] w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">نحن نحترم خصوصيتك</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                    نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا، وتحليل حركة المرور، وتخصيص المحتوى والإعلانات. 
                    بالضغط على "قبول الكل"، فإنك توافق على استخدام جميع ملفات تعريف الارتباط.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                 {/* Settings Button */}
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 hover:border-gray-300 transition-all text-sm min-w-[120px]"
                >
                  الإعدادات
                </button>

                {/* Accept All Button */}
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-[#40C1C7] text-white font-bold hover:bg-[#35a3a8] transition-all shadow-lg shadow-teal-500/20 text-sm min-w-[120px]"
                >
                  قبول الكل
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      <Dialog open={showSettings} onOpenChange={(open) => {
        setShowSettings(open);
        if (!open && !localStorage.getItem('cookie-consent')) {
          setIsVisible(true);
        }
      }}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white gap-0 rounded-3xl" dir="rtl">
          <div className="p-6 border-b border-gray-100">
            <DialogHeader className="text-right">
              <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Cookie className="text-[#40C1C7]" />
                إعدادات ملفات الارتباط
              </DialogTitle>
              <DialogDescription className="text-gray-500 text-right mt-2">
                يمكنك تخصيص تفضيلات ملفات تعريف الارتباط الخاصة بك أدناه. يرجى ملاحظة أن حظر بعض أنواع ملفات تعريف الارتباط قد يؤثر على تجربتك في الموقع.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Essential */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#40C1C7]" />
                  <Label htmlFor="essential" className="text-base font-bold text-gray-900">ضرورية للغاية</Label>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  هذه الملفات ضرورية لعمل الموقع بشكل صحيح ولا يمكن تعطيلها. تتضمن ميزات الأمان وتسجيل الدخول وحفظ تفضيلاتك.
                </p>
              </div>
              <Switch id="essential" checked={true} disabled className="mt-1" />
            </div>

            {/* Analytics */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#40C1C7]/30 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-gray-500" />
                  <Label htmlFor="analytics" className="text-base font-bold text-gray-900 cursor-pointer">التحليلات والأداء</Label>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  تساعدنا هذه الملفات في فهم كيفية تفاعل الزوار مع الموقع، مما يتيح لنا تحسين الأداء وتطوير تجربة المستخدم.
                </p>
              </div>
              <Switch 
                id="analytics" 
                checked={preferences.analytics} 
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: checked }))}
                className="mt-1 data-[state=checked]:bg-[#40C1C7]" 
              />
            </div>

            {/* Marketing */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#40C1C7]/30 transition-colors">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Megaphone className="w-4 h-4 text-gray-500" />
                  <Label htmlFor="marketing" className="text-base font-bold text-gray-900 cursor-pointer">التسويق والإعلانات</Label>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  تستخدم هذه الملفات لتقديم إعلانات ذات صلة باهتماماتك وتتبع فعالية حملاتنا الإعلانية.
                </p>
              </div>
              <Switch 
                id="marketing" 
                checked={preferences.marketing} 
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: checked }))}
                className="mt-1 data-[state=checked]:bg-[#40C1C7]" 
              />
            </div>
          </div>

          <DialogFooter className="p-6 border-t border-gray-100 bg-gray-50/50 flex-row gap-3 sm:justify-start">
            <button
              onClick={handleSavePreferences}
              className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-[#40C1C7] text-white font-bold hover:bg-[#35a3a8] transition-all shadow-lg shadow-teal-500/20 text-sm"
            >
              حفظ التفضيلات
            </button>
            <button
              onClick={() => {
                setShowSettings(false);
                setIsVisible(true);
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-white hover:border-gray-300 transition-all text-sm"
            >
              إلغاء
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
