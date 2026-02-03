import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AuctionsPage } from './pages/AuctionsPage';
import { CarAuctionsPage } from './pages/CarAuctionsPage';
import { CarDetailsPage } from './pages/CarDetailsPage';
import { LiveCarAuctionPage } from './pages/LiveCarAuctionPage';
import { BidNowPage } from './pages/BidNowPage';
import { OtherAuctionsPage } from './pages/OtherAuctionsPage';
import { CarPlatesAuctionsPage } from './pages/CarPlatesAuctionsPage';
import { LuxuryRealEstateAuctionsPage } from './pages/LuxuryRealEstateAuctionsPage';
import { LuxuryAuctionDetailsPage } from './pages/LuxuryAuctionDetailsPage';
import { PlateDetailsPage } from './pages/PlateDetailsPage';
import { AdvertisersPage } from './pages/AdvertisersPage';
import { CitySalePage } from './components/pages/CitySalePage';
import { PropertyDetailsPage } from './components/pages/PropertyDetailsPage';
import { WalletPage } from './pages/WalletPage';
import { TrainingPage } from './pages/TrainingPage';
import { CareersPage } from './pages/CareersPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ReportVulnerabilityPage } from './pages/ReportVulnerabilityPage';
import { NafathLoginPage } from './pages/NafathLoginPage';
import { NafathVerificationPage } from './pages/NafathVerificationPage';

import { ReportAdIssuePage } from './components/pages/ReportAdIssuePage';
import { ReportComplaintPage } from './components/pages/ReportComplaintPage';
import { SmartAdvisor } from './components/chat/SmartAdvisor';
import { AuthGuard } from './components/auth/AuthGuard';
import { CookieConsent } from './components/layout/CookieConsent';

import { LiveAuctionPage } from './pages/LiveAuctionPage';
import { AuctionDetailsPage } from './pages/AuctionDetailsPage';
import { RegisterNowPage } from './pages/RegisterNowPage';
import { RegistrationFlowPage } from './pages/RegistrationFlowPage';
import { AddAdPage } from './pages/AddAdPage';
import { AddAdIntroPage } from './pages/AddAdIntroPage';
import { AddAuctionPage } from './pages/AddAuctionPage';
import { DirectSalesPage } from './components/direct-sales/DirectSalesPage';
import { DirectSaleDetailsPage } from './components/direct-sales/DirectSaleDetailsPage';
import { FAQPage } from './pages/FAQPage';
import { SupportPage } from './pages/SupportPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { AuctionGuidePage } from './components/pages/AuctionGuidePage';
import { BrokerageGuidePage } from './components/pages/BrokerageGuidePage';
import { RequestBrokeragePage } from './components/pages/RequestBrokeragePage';
import { AIEvaluationPage } from './components/pages/AIEvaluationPage';
import { DashboardPage } from './pages/DashboardPage';
import { RentalsPage } from './pages/RentalsPage';
import { DailyRentPage } from './components/pages/DailyRentPage';
import { BookingPage } from './pages/BookingPage';
import { RequestsPage } from './pages/RequestsPage';
import { CreateRequestPage } from './pages/CreateRequestPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [selectedAuction, setSelectedAuction] = useState<any>(null);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [selectedDirectSaleItem, setSelectedDirectSaleItem] = useState<any>(null);
  const [selectedCity, setSelectedCity] = useState<string>('riyadh');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // AI Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Cursor State
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Custom Cursor Logic
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      });
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, input, select, .cursor-pointer');
      setCursorVariant(isClickable ? "hover" : "default");
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  // Auto-scroll chat
  // removed auto-scroll effect as it is handled in SmartAdvisor

  // Handle Page Navigation
  const handleNavigate = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const handleCitySelect = (cityId: string) => {
    setSelectedCity(cityId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage('city-sale');
  };

  const handlePropertyClick = (property: any) => {
    setSelectedProperty(property);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage('property-details');
  };

  const handleAuctionClick = (auction: any) => {
    setSelectedAuction(auction);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage('auction-details');
  };

  const handleCarClick = (car: any) => {
    setSelectedCar(car);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage('car-details');
  };

  const handleDirectSaleItemClick = (item: any) => {
    setSelectedDirectSaleItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage('direct-sale-details');
  };

  // Chat Function removed as it is handled in SmartAdvisor

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 text-gray-900 selection:bg-[#40C1C7] selection:text-white cursor-none" style={{ fontFamily: "'Noto Kufi Arabic', system-ui, -apple-system, sans-serif" }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap');
          
          /* Custom Scrollbar */
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #f1f1f1; }
          ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #40C1C7; }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          
          /* AI Chat Animation */
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-slide-in {
            animation: slideIn 0.3s ease-out forwards;
          }

          /* Infinite Scroll Animation */
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .ltr-track {
            direction: ltr;
          }

          a, button, input, select, .cursor-pointer {
            cursor: none;
          }
        `}
      </style>

      {/* --- CUSTOM CURSOR --- */}
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-[#40C1C7] rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          transform: `translate(${cursorPosition.x - 6}px, ${cursorPosition.y - 6}px) scale(${cursorVariant === 'hover' ? 0 : 1})`
        }}
      />
      <div 
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out border border-[#40C1C7] ${cursorVariant === 'hover' ? 'w-12 h-12 bg-[#40C1C7]/10 border-[#40C1C7]' : 'w-8 h-8 border-[#40C1C7]/50'}`}
        style={{
          transform: `translate(${cursorPosition.x - (cursorVariant === 'hover' ? 24 : 16)}px, ${cursorPosition.y - (cursorVariant === 'hover' ? 24 : 16)}px)`
        }}
      />
      
      {currentPage !== 'login' && (
        <Header 
          onNavigate={handleNavigate} 
          currentPage={currentPage} 
          onOpenLogin={() => handleNavigate('login')}
          isLoggedIn={isLoggedIn}
        />
      )}

      {/* Page Content */}
      <main>
        {currentPage === 'home' && (
          <HomePage 
            onOpenChat={() => setIsChatOpen(true)} 
            cursorPosition={cursorPosition} 
            onCitySelect={handleCitySelect}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'auctions' && <AuctionsPage onNavigate={handleNavigate} onAuctionClick={handleAuctionClick} />}
        {currentPage === 'live-auction' && <LiveAuctionPage onNavigate={handleNavigate} />}
        {currentPage === 'auction-details' && <AuctionDetailsPage onNavigate={handleNavigate} auction={selectedAuction} />}
        {currentPage === 'car-auctions' && <CarAuctionsPage onNavigate={handleNavigate} onCarClick={handleCarClick} />}
        {currentPage === 'car-details' && <CarDetailsPage onNavigate={handleNavigate} car={selectedCar} />}
        {currentPage === 'bid-now' && <BidNowPage onNavigate={handleNavigate} />}
        {currentPage === 'live-car-auction' && <LiveCarAuctionPage onNavigate={handleNavigate} />}
        {currentPage === 'car-plates-auctions' && <CarPlatesAuctionsPage onNavigate={handleNavigate} />}
        {currentPage === 'luxury-real-estate-auctions' && <LuxuryRealEstateAuctionsPage onNavigate={handleNavigate} />}
        {currentPage === 'luxury-auction-details' && <LuxuryAuctionDetailsPage onNavigate={handleNavigate} />}
        {currentPage === 'plate-details' && <PlateDetailsPage onNavigate={handleNavigate} />}
        {currentPage === 'register-now' && <RegisterNowPage onNavigate={handleNavigate} />}
        {currentPage === 'registration-flow' && <RegistrationFlowPage onNavigate={handleNavigate} />}
        {currentPage === 'add-ad' && (
          <AuthGuard isLoggedIn={isLoggedIn} onOpenLogin={() => handleNavigate('login')} onNavigate={handleNavigate} mode="ad">
            <AddAdPage onNavigate={handleNavigate} />
          </AuthGuard>
        )}
        {currentPage === 'add-auction' && (
           <AuthGuard isLoggedIn={isLoggedIn} onOpenLogin={() => handleNavigate('login')} onNavigate={handleNavigate} mode="auction">
             <AddAuctionPage onNavigate={handleNavigate} />
           </AuthGuard>
        )}
        {currentPage === 'auction-guide' && <AuctionGuidePage onNavigate={handleNavigate} />}
        {currentPage === 'brokerage-guide' && <BrokerageGuidePage onNavigate={handleNavigate} />}
        {currentPage === 'request-brokerage' && <RequestBrokeragePage onNavigate={handleNavigate} />}
        {currentPage === 'rentals' && <RentalsPage onNavigate={handleNavigate} />}
        {currentPage === 'daily-rent' && <DailyRentPage onBack={() => handleNavigate('rentals')} onNavigate={handleNavigate} />}
        {currentPage === 'dashboard' && <DashboardPage onNavigate={handleNavigate} />}
        
        {/* Direct Sales Routes */}
        {currentPage === 'direct-sale-real-estate' && <DirectSalesPage category="real-estate" onNavigate={handleNavigate} onItemClick={handleDirectSaleItemClick} />}
        {currentPage === 'direct-sale-cars' && <DirectSalesPage category="cars" onNavigate={handleNavigate} onItemClick={handleDirectSaleItemClick} />}
        {currentPage === 'direct-sale-plates' && <DirectSalesPage category="plates" onNavigate={handleNavigate} onItemClick={handleDirectSaleItemClick} />}
        {currentPage === 'direct-sale-other' && <DirectSalesPage category="other" onNavigate={handleNavigate} onItemClick={handleDirectSaleItemClick} />}
        {currentPage === 'direct-sale-details' && (
          <DirectSaleDetailsPage 
             item={selectedDirectSaleItem} 
             onNavigate={handleNavigate} 
             onBack={() => {
                // Return to the correct category based on the item type or a default
                if (selectedDirectSaleItem?.category === 'real-estate' || selectedDirectSaleItem?.id.startsWith('re')) handleNavigate('direct-sale-real-estate');
                else if (selectedDirectSaleItem?.category === 'cars' || selectedDirectSaleItem?.id.startsWith('car')) handleNavigate('direct-sale-cars');
                else if (selectedDirectSaleItem?.category === 'plates' || selectedDirectSaleItem?.isPlate) handleNavigate('direct-sale-plates');
                else handleNavigate('direct-sale-other');
             }}
          />
        )}

        {currentPage === 'other-auctions' && <OtherAuctionsPage onNavigate={handleNavigate} />}
        
        {currentPage === 'faq' && <FAQPage onNavigate={handleNavigate} />}
        {currentPage === 'support' && <SupportPage onNavigate={handleNavigate} />}
        {currentPage === 'privacy-policy' && <PrivacyPolicyPage onNavigate={handleNavigate} />}
        {currentPage === 'terms' && <TermsPage onNavigate={handleNavigate} />}
        {currentPage === 'advertisers' && <AdvertisersPage />}
        {currentPage === 'city-sale' && <CitySalePage cityId={selectedCity} onPropertyClick={handlePropertyClick} onNavigate={handleNavigate} />}
        {currentPage === 'riyadh-sale' && <CitySalePage cityId="riyadh" onPropertyClick={handlePropertyClick} onNavigate={handleNavigate} />}
        {currentPage === 'property-details' && (
          <PropertyDetailsPage 
            property={selectedProperty} 
            onBack={() => setCurrentPage('city-sale')} 
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'booking' && (
          <BookingPage 
            onNavigate={handleNavigate} 
            property={selectedProperty} 
          />
        )}
        {currentPage === 'ai-evaluation' && (
          <AIEvaluationPage 
            propertyTitle={selectedProperty?.title}
            onBack={() => setCurrentPage('property-details')} 
          />
        )}
        {currentPage === 'wallet' && <WalletPage onNavigate={handleNavigate} />}
        {currentPage === 'training' && <TrainingPage />}
        {currentPage === 'my-requests' && <RequestsPage onNavigate={handleNavigate} />}
        {currentPage === 'create-request' && <CreateRequestPage onNavigate={handleNavigate} />}
        {currentPage === 'careers' && <CareersPage />}
        {currentPage === 'login' && <LoginPage onNavigate={handleNavigate} onLogin={() => setIsLoggedIn(true)} />}
        {currentPage === 'signup' && <SignupPage onNavigate={handleNavigate} />}
        {currentPage === 'nafath-login' && <NafathLoginPage onNavigate={handleNavigate} />}
        {currentPage === 'nafath-verification' && <NafathVerificationPage onNavigate={handleNavigate} />}
        {currentPage === 'report-vulnerability' && <ReportVulnerabilityPage />}
        {currentPage === 'report-ad-issue' && (
          <ReportAdIssuePage 
            property={selectedProperty} 
            onBack={() => setCurrentPage('property-details')} 
          />
        )}
        {currentPage === 'report-complaint' && (
          <ReportComplaintPage 
            property={selectedProperty} 
            onBack={() => setCurrentPage('property-details')} 
          />
        )}
      </main>

      {currentPage !== 'login' && <Footer onNavigate={handleNavigate} />}

      {/* --- AI ASSISTANT WIDGET --- */}
      <SmartAdvisor 
        isOpen={isChatOpen}
        onOpen={() => setIsChatOpen(true)}
        onClose={() => setIsChatOpen(false)}
      />

      <CookieConsent />

    </div>
  );
};

export default App;
