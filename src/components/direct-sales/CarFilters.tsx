import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Car, 
  Settings2,
  Calendar,
  Gauge,
  Fuel,
  Info,
  DollarSign,
  Filter
} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

interface CarFiltersProps {
  className?: string;
  onFilterChange?: (filters: any) => void;
}

export const CarFilters: React.FC<CarFiltersProps> = ({ className, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  
  // Handlers would normally update parent state
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    // onFilterChange(...)
  };

  return (
    <div className={`space-y-6 ${className}`} dir="rtl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <Filter size={20} className="text-[#40C1C7]" />
          فلترة النتائج
        </h3>
        <button className="text-sm text-gray-400 hover:text-[#40C1C7] font-medium transition-colors">
          إعادة تعيين
        </button>
      </div>

      <Accordion type="multiple" defaultValue={['offer-type', 'brand', 'price', 'year', 'city']} className="w-full">
        
        {/* 1. نوع العرض */}
        <AccordionItem value="offer-type">
          <AccordionTrigger className="text-right font-bold text-gray-800 hover:text-[#40C1C7] hover:no-underline">
            نوع العرض
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="direct-sale" defaultChecked />
                <Label htmlFor="direct-sale" className="text-sm cursor-pointer">بيع مباشر</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="transfer" />
                <Label htmlFor="transfer" className="text-sm cursor-pointer">تنازل</Label>
              </div>

            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 2. الماركة والموديل */}
        <AccordionItem value="brand">
          <AccordionTrigger className="text-right font-bold text-gray-800 hover:text-[#40C1C7] hover:no-underline">
            الماركة والموديل
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              <div className="space-y-1.5">
                <Label className="text-xs text-gray-500">الماركة</Label>
                <Select onValueChange={setSelectedMake}>
                  <SelectTrigger className="w-full text-right text-sm">
                    <SelectValue placeholder="اختر الماركة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="toyota">تويوتا</SelectItem>
                    <SelectItem value="mercedes">مرسيدس بنز</SelectItem>
                    <SelectItem value="hyundai">هيونداي</SelectItem>
                    <SelectItem value="ford">فورد</SelectItem>
                    <SelectItem value="nissan">نيسان</SelectItem>
                    <SelectItem value="lexus">لكزس</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1.5">
                <Label className="text-xs text-gray-500">الموديل</Label>
                <Select disabled={!selectedMake}>
                  <SelectTrigger className="w-full text-right text-sm">
                    <SelectValue placeholder="اختر الموديل" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedMake === 'toyota' && (
                      <>
                        <SelectItem value="landcruiser">لاندكروزر</SelectItem>
                        <SelectItem value="camry">كامري</SelectItem>
                        <SelectItem value="corolla">كورولا</SelectItem>
                        <SelectItem value="hilux">هايلكس</SelectItem>
                      </>
                    )}
                    {selectedMake === 'mercedes' && (
                      <>
                        <SelectItem value="s-class">S-Class</SelectItem>
                        <SelectItem value="e-class">E-Class</SelectItem>
                        <SelectItem value="c-class">C-Class</SelectItem>
                        <SelectItem value="g-class">G-Class</SelectItem>
                      </>
                    )}
                     <SelectItem value="other">أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 3. السنة */}
        <AccordionItem value="year">
          <AccordionTrigger className="text-right font-bold text-gray-800 hover:text-[#40C1C7] hover:no-underline">
            سنة الصنع
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center gap-2 pt-2">
               <div className="flex-1 space-y-1.5">
                <Label className="text-xs text-gray-500">من</Label>
                <Select>
                  <SelectTrigger className="w-full text-right text-sm">
                    <SelectValue placeholder="2010" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 16 }, (_, i) => 2010 + i).map(year => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
               </div>
               <div className="flex-1 space-y-1.5">
                <Label className="text-xs text-gray-500">إلى</Label>
                <Select>
                  <SelectTrigger className="w-full text-right text-sm">
                    <SelectValue placeholder="2025" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 16 }, (_, i) => 2010 + i).reverse().map(year => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
               </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 4. السعر */}
        <AccordionItem value="price">
          <AccordionTrigger className="text-right font-bold text-gray-800 hover:text-[#40C1C7] hover:no-underline">
            السعر (ر.س)
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-4 px-1 pb-2">
              <Slider
                defaultValue={[0, 500000]}
                max={1000000}
                step={5000}
                value={priceRange}
                onValueChange={handlePriceChange}
                className="mb-6"
              />
              <div className="flex items-center gap-2">
                 <div className="flex-1 relative">
                    <input 
                      type="number" 
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange([Number(e.target.value), priceRange[1]])}
                      className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#40C1C7] text-left"
                    />
                    <span className="absolute right-2 top-1.5 text-xs text-gray-400">من</span>
                 </div>
                 <div className="flex-1 relative">
                    <input 
                      type="number" 
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange([priceRange[0], Number(e.target.value)])}
                      className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#40C1C7] text-left"
                    />
                    <span className="absolute right-2 top-1.5 text-xs text-gray-400">إلى</span>
                 </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 5. المدينة */}
        <AccordionItem value="city">
          <AccordionTrigger className="text-right font-bold text-gray-800 hover:text-[#40C1C7] hover:no-underline">
            المدينة
          </AccordionTrigger>
          <AccordionContent>
             <Select>
              <SelectTrigger className="w-full text-right text-sm mt-2">
                <SelectValue placeholder="كل المدن" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">كل المدن</SelectItem>
                <SelectItem value="riyadh">الرياض</SelectItem>
                <SelectItem value="jeddah">جدة</SelectItem>
                <SelectItem value="dammam">الدمام</SelectItem>
                <SelectItem value="makkah">مكة المكرمة</SelectItem>
                <SelectItem value="madinah">المدينة المنورة</SelectItem>
                <SelectItem value="khobar">الخبر</SelectItem>
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>

        {/* 6. الممشى */}
        <AccordionItem value="mileage">
          <AccordionTrigger className="text-right font-bold text-gray-800 hover:text-[#40C1C7] hover:no-underline">
             الممشى (كم)
          </AccordionTrigger>
          <AccordionContent>
             <RadioGroup defaultValue="all" className="pt-2 space-y-2">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="all" id="km-all" />
                  <Label htmlFor="km-all" className="text-sm cursor-pointer">الكل</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="0-50" id="km-50" />
                  <Label htmlFor="km-50" className="text-sm cursor-pointer">أقل من 50,000 كم</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="50-100" id="km-100" />
                  <Label htmlFor="km-100" className="text-sm cursor-pointer">50,000 - 100,000 كم</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="100-150" id="km-150" />
                  <Label htmlFor="km-150" className="text-sm cursor-pointer">100,000 - 150,000 كم</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="150+" id="km-plus" />
                  <Label htmlFor="km-plus" className="text-sm cursor-pointer">أكثر من 150,000 كم</Label>
                </div>
             </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        {/* 7. المواصفات الإقليمية */}
        <AccordionItem value="regional-specs">
          <AccordionTrigger className="text-right font-bold text-gray-800 hover:text-[#40C1C7] hover:no-underline">
             المواصفات الإقليمية
          </AccordionTrigger>
          <AccordionContent>
             <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="spec-saudi" />
                  <Label htmlFor="spec-saudi" className="text-sm cursor-pointer">سعودي</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="spec-gulf" />
                  <Label htmlFor="spec-gulf" className="text-sm cursor-pointer">خليجي</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="spec-american" />
                  <Label htmlFor="spec-american" className="text-sm cursor-pointer">أمريكي</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="spec-other" />
                  <Label htmlFor="spec-other" className="text-sm cursor-pointer">مستورد آخر</Label>
                </div>
             </div>
          </AccordionContent>
        </AccordionItem>

        {/* 8. حالة البدي */}
        <AccordionItem value="body-condition">
          <AccordionTrigger className="text-right font-bold text-gray-800 hover:text-[#40C1C7] hover:no-underline">
             حالة البدي
          </AccordionTrigger>
          <AccordionContent>
             <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="body-original" />
                  <Label htmlFor="body-original" className="text-sm cursor-pointer">وكالة (بودي بلد)</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="body-cosmetic" />
                  <Label htmlFor="body-cosmetic" className="text-sm cursor-pointer">رش تجميلي</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="body-light" />
                  <Label htmlFor="body-light" className="text-sm cursor-pointer">صدمات خفيفة / معدل</Label>
                </div>
             </div>
          </AccordionContent>
        </AccordionItem>
        
        {/* 9. نوع الوقود */}
        <AccordionItem value="fuel">
          <AccordionTrigger className="text-right font-bold text-gray-800 hover:text-[#40C1C7] hover:no-underline">
             نوع الوقود
          </AccordionTrigger>
          <AccordionContent>
             <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="fuel-petrol" />
                  <Label htmlFor="fuel-petrol" className="text-sm cursor-pointer">بنزين</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="fuel-diesel" />
                  <Label htmlFor="fuel-diesel" className="text-sm cursor-pointer">ديزل</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="fuel-hybrid" />
                  <Label htmlFor="fuel-hybrid" className="text-sm cursor-pointer">هايبرد</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="fuel-electric" />
                  <Label htmlFor="fuel-electric" className="text-sm cursor-pointer">كهرباء</Label>
                </div>
             </div>
          </AccordionContent>
        </AccordionItem>

        {/* 10. حالة السيارة */}
        <AccordionItem value="condition">
          <AccordionTrigger className="text-right font-bold text-gray-800 hover:text-[#40C1C7] hover:no-underline">
             حالة السيارة
          </AccordionTrigger>
          <AccordionContent>
             <RadioGroup defaultValue="used" className="pt-2 space-y-2">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="new" id="cond-new" />
                  <Label htmlFor="cond-new" className="text-sm cursor-pointer">جديد</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="used" id="cond-used" />
                  <Label htmlFor="cond-used" className="text-sm cursor-pointer">مستعمل</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="damaged" id="cond-damaged" />
                  <Label htmlFor="cond-damaged" className="text-sm cursor-pointer">مصدوم / تشليح</Label>
                </div>
             </RadioGroup>
          </AccordionContent>
        </AccordionItem>
        
        {/* 11. الجير */}
        <AccordionItem value="gear">
          <AccordionTrigger className="text-right font-bold text-gray-800 hover:text-[#40C1C7] hover:no-underline">
             ناقل الحركة (الجير)
          </AccordionTrigger>
          <AccordionContent>
             <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="gear-auto" />
                  <Label htmlFor="gear-auto" className="text-sm cursor-pointer">أوتوماتيك</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id="gear-manual" />
                  <Label htmlFor="gear-manual" className="text-sm cursor-pointer">عادي</Label>
                </div>
             </div>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
      
      <Button className="w-full bg-[#40C1C7] hover:bg-[#35a4a9] text-white font-bold py-6 rounded-xl shadow-lg shadow-teal-500/20">
        تطبيق الفلترة (25 نتيجة)
      </Button>
    </div>
  );
};
