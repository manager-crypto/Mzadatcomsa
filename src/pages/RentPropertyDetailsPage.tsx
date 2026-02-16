import React, { useState } from 'react';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Maximize,
  Home,
  Phone,
  MessageCircle,
  Mail,
  Share2,
  Heart,
  Calendar,
  Clock,
  CheckCircle2,
  DollarSign,
  Building2,
  Sparkles,
  Shield,
  Key,
  Users,
  Car,
  Wind,
  Sofa,
  Zap,
  ChevronRight,
  ChevronLeft,
  Star,
  Check,
  X as XIcon,
  AlertCircle,
  Download,
  Eye,
  Navigation,
  Info
} from 'lucide-react';

interface PropertyDetails {
  id: number;
  title: string;
  location: string;
  district: string;
  price: number;
  priceType: 'monthly' | 'yearly';
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  featured: boolean;
  verified: boolean;
  rating: number;
  type: string;
  furnished: boolean;
  amenities: string[];
  description?: string;
  ownerName?: string;
  ownerPhone?: string;
  viewsCount?: number;
  postedDate?: string;
}

interface RentPropertyDetailsPageProps {
  onNavigate: (page: string) => void;
  property?: PropertyDetails;
  onBack: () => void;
}

export const RentPropertyDetailsPage: React.FC<RentPropertyDetailsPageProps> = ({ 
  onNavigate, 
  property: propProperty,
  onBack 
}) => {
  // Default property if none is provided
  const defaultProperty: PropertyDetails = {
    id: 1,
    title: 'شقة فاخرة في حي الملقا',
    location: 'الرياض',
    district: 'الملقا',
    price: 45000,
    priceType: 'yearly',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    images: [
      'https://images.unsplash.com/photo-1646662521253-5b9253b1a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjByaXlhZGglMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA0MDI3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1738168279272-c08d6dd22002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3MDMxNDY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMzg1NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1625578782042-3f2ad4f42956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMzU0MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1646662521253-5b9253b1a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwc2F1ZGklMjBhcmFiaWF8ZW58MXx8fHwxNzcwNDAyNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    featured: true,
    verified: true,
    rating: 4.8,
    type: 'شقة',
    furnished: true,
    amenities: ['مسبح', 'موقف سيارات', 'أمن 24/7', 'صالة رياضية'],
    description: 'شقة فاخرة مفروشة بالكامل في موقع استراتيجي بحي الملقا. تتميز بتصميم عصري وإطلالة رائعة. قريبة من جميع الخدمات والمرافق الأساسية. مثالية للعائلات والباحثين عن السكن الراقي.',
    ownerName: 'مكتب العقارات المميزة',
    ownerPhone: '+966 50 123 4567',
    viewsCount: 342,
    postedDate: 'منذ 3 أيام'
  };

  const property = propProperty || defaultProperty;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `شاهد هذا العقار المميز: ${property.title}`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#40C1C7] transition-colors"
          >
            <ChevronRight size={20} />
            <span className="font-bold">العودة للعقارات</span>
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative h-[600px] bg-black">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Gallery Controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white font-bold">
          {currentImageIndex + 1} / {property.images.length}
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          {property.images.slice(0, 4).map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                currentImageIndex === idx ? 'border-[#40C1C7]' : 'border-white/50'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
          {property.images.length > 4 && (
            <div className="w-16 h-16 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-sm font-bold">
              +{property.images.length - 4}
            </div>
          )}
        </div>

        {/* Top Actions */}
        <div className="absolute top-6 right-6 flex gap-3">
          {property.featured && (
            <div className="bg-[#40C1C7] text-white px-4 py-2 rounded-full font-bold flex items-center gap-2">
              <Star size={16} className="fill-white" />
              مميز
            </div>
          )}
          {property.verified && (
            <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2">
              <Shield size={16} />
              موثق
            </div>
          )}
        </div>

        <div className="absolute top-6 left-6 flex gap-3">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all"
          >
            <Heart
              size={20}
              className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'}
            />
          </button>
          <button
            onClick={handleShare}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all"
          >
            <Share2 size={20} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Info Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">{property.title}</h1>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={20} className="text-[#40C1C7]" />
                    <span className="text-lg">{property.district}، {property.location}</span>
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-4xl font-bold text-[#40C1C7] mb-1">
                    {property.price.toLocaleString('ar-SA')}
                  </div>
                  <div className="text-sm text-gray-600">
                    ريال {property.priceType === 'monthly' ? '/ شهرياً' : '/ سنوياً'}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 py-6 border-y border-gray-200">
                <div className="text-center">
                  <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Bed size={24} className="text-[#40C1C7]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600">غرف نوم</div>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Bath size={24} className="text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">حمامات</div>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Maximize size={24} className="text-purple-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                  <div className="text-sm text-gray-600">متر مربع</div>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star size={24} className="text-yellow-500 fill-yellow-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{property.rating}</div>
                  <div className="text-sm text-gray-600">التقييم</div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">وصف العقار</h3>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Property Features */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">مميزات العقار</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Sofa size={20} className="text-green-600" />
                    </div>
                    <span className="font-bold text-gray-700">
                      {property.furnished ? 'مفروش بالكامل' : 'غير مفروش'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building2 size={20} className="text-blue-600" />
                    </div>
                    <span className="font-bold text-gray-700">{property.type}</span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">المرافق والخدمات</h3>
                <div className="grid grid-cols-2 gap-3">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 size={20} className="text-green-500" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                  <Eye size={20} className="text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">عدد المشاهدات</div>
                    <div className="text-lg font-bold text-gray-900">{property.viewsCount}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                  <Calendar size={20} className="text-purple-600" />
                  <div>
                    <div className="text-sm text-gray-600">تاريخ النشر</div>
                    <div className="text-lg font-bold text-gray-900">{property.postedDate}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Navigation size={24} className="text-[#40C1C7]" />
                الموقع
              </h3>
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">خريطة الموقع</p>
                  <p className="text-sm text-gray-500 mt-1">{property.district}، {property.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">تواصل مع المعلن</h3>

              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-[#40C1C7] rounded-full flex items-center justify-center">
                    <Building2 size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{property.ownerName}</div>
                    <div className="text-sm text-gray-600">معلن موثوق</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#40C1C7] text-white rounded-xl font-bold hover:bg-[#359aa0] transition-all">
                  <Phone size={20} />
                  <span>اتصل الآن</span>
                </button>

                <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all">
                  <MessageCircle size={20} />
                  <span>واتساب</span>
                </button>

                <button
                  onClick={() => setShowScheduleModal(true)}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all"
                >
                  <Calendar size={20} />
                  <span>جدولة معاينة</span>
                </button>

                <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all">
                  <Mail size={20} />
                  <span>إرسال رسالة</span>
                </button>
              </div>

              {/* Safety Tips */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-yellow-900 mb-2">نصائح السلامة</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• لا تدفع أي مبالغ قبل المعاينة</li>
                      <li>• تحقق من هوية المعلن</li>
                      <li>• اطلب عقد إيجار رسمي</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Report Button */}
              <button className="w-full mt-4 text-red-600 hover:text-red-700 font-bold text-sm transition-colors">
                <div className="flex items-center justify-center gap-2">
                  <Info size={16} />
                  <span>الإبلاغ عن مشكلة</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Properties */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">عقارات مشابهة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-48">
                <img
                  src={property.images[item % property.images.length]}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 right-3 bg-white/95 px-3 py-1.5 rounded-lg">
                  <span className="text-sm font-bold text-[#40C1C7]">
                    {(property.price * 0.9).toLocaleString('ar-SA')} ريال
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">شقة مشابهة في {property.district}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Bed size={16} /> {property.bedrooms}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={16} /> {property.bathrooms}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize size={16} /> {property.area}م²
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">جدولة معاينة</h3>
              <button
                onClick={() => setShowScheduleModal(false)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all"
              >
                <XIcon size={20} />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              اختر الوقت المناسب لمعاينة العقار وسنتواصل معك لتأكيد الموعد
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">التاريخ</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#40C1C7] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">الوقت</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#40C1C7] focus:outline-none">
                  <option>9:00 صباحاً</option>
                  <option>12:00 ظهراً</option>
                  <option>3:00 عصراً</option>
                  <option>6:00 مساءً</option>
                </select>
              </div>
              <button className="w-full px-6 py-4 bg-[#40C1C7] text-white rounded-xl font-bold hover:bg-[#359aa0] transition-all">
                تأكيد الموعد
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
