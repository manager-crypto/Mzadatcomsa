import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Gavel, 
  ShoppingBag, 
  Wallet, 
  User, 
  ShieldCheck 
} from 'lucide-react';

interface FAQPageEnProps {
  onNavigate: (page: string) => void;
}

export const FAQPageEn: React.FC<FAQPageEnProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All', icon: HelpCircle },
    { id: 'auctions', name: 'Auctions', icon: Gavel },
    { id: 'direct-sales', name: 'Direct Purchase', icon: ShoppingBag },
    { id: 'payments', name: 'Payments', icon: Wallet },
    { id: 'account', name: 'Account & Security', icon: User },
  ];

  const faqs = [
    {
      category: 'auctions',
      question: 'How can I participate in an auction?',
      answer: 'To participate in an auction, you must first log in and verify your identity via Nafath. Then, load your wallet with the required deposit amount for the auction. Once you pay the deposit, you can enter the auction page and start bidding.'
    },
    {
      category: 'auctions',
      question: 'What happens to the deposit if I don\'t win the auction?',
      answer: 'If you don\'t win the auction, the deposit amount is automatically returned to your wallet in the app after the auction ends. You can use the balance in other auctions or request a refund to your bank account.'
    },
    {
      category: 'direct-sales',
      question: 'Are the prices in "Direct Purchase" final?',
      answer: 'Yes, the prices displayed in the Direct Purchase section are fixed and set by the seller. However, you can contact the seller to inquire or negotiate if they accept it outside the platform.'
    },
    {
      category: 'payments',
      question: 'What payment methods are available?',
      answer: 'We accept payment via Mada, credit cards (Visa/Mastercard), and Apple Pay. You can also do a direct bank transfer to our approved accounts.'
    },
    {
      category: 'account',
      question: 'How do I verify my identity?',
      answer: 'Identity verification is done through the Nafath service provided by the National Information Center. Simply click on "Login with Nafath" and follow the instructions on your registered Nafath mobile app.'
    },
    {
      category: 'auctions',
      question: 'Can I cancel my bid after placing it?',
      answer: 'No, bids are binding and cannot be canceled once submitted. Please make sure to review all auction details and property information before placing your bid.'
    },
    {
      category: 'direct-sales',
      question: 'Is there a warranty on direct purchase properties?',
      answer: 'The warranty depends on the type of property and the agreement between the buyer and seller. We recommend requesting a comprehensive property inspection report before completing the purchase.'
    },
    {
      category: 'payments',
      question: 'How long does it take to refund the deposit?',
      answer: 'The deposit is returned to your wallet immediately after the auction ends. If you request a bank refund, it may take 3-5 business days depending on your bank.'
    },
    {
      category: 'account',
      question: 'Can I have multiple accounts?',
      answer: 'No, according to our terms, each user can only have one active account linked to their National ID via Nafath.'
    },
    {
      category: 'auctions',
      question: 'What are the auction participation fees?',
      answer: 'There are no participation fees. You only need to pay the auction deposit which is refundable if you don\'t win. A commission is only paid by the winning bidder.'
    },
  ];

  const filteredFAQs = faqs.filter(faq => {
    const categoryMatch = activeCategory === 'all' || faq.category === activeCategory;
    const searchMatch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div dir="ltr" className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50/30 pt-32 pb-20 px-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-teal-100 rounded-full">
            <HelpCircle className="text-[#0F766E]" size={20} />
            <span className="text-sm font-bold text-[#0F766E]">Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Can We Help You?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about auctions, purchases, and account management
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for a question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#40C1C7] focus:border-transparent outline-none transition-all text-left"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all ${
                activeCategory === category.id
                  ? 'bg-[#0F766E] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <category.icon size={18} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => setOpenQuestionIndex(openQuestionIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  {openQuestionIndex === index ? (
                    <ChevronUp className="text-[#40C1C7] flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>
                
                {openQuestionIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="mx-auto text-gray-300 mb-4" size={64} />
              <h3 className="text-xl font-bold text-gray-400 mb-2">No results found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>

        {/* Contact Support CTA */}
        <div className="mt-12 bg-gradient-to-br from-[#0F766E] to-[#40C1C7] rounded-3xl p-8 text-white text-center">
          <ShieldCheck className="mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold mb-2">Still Need Help?</h3>
          <p className="text-white/90 mb-6">Our support team is here to assist you 24/7</p>
          <button 
            onClick={() => onNavigate('support-en')}
            className="px-8 py-3 bg-white text-[#0F766E] rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};
