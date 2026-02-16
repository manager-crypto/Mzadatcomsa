import React from 'react';
import { Scale, FileText, Gavel, AlertTriangle, CheckCircle, Shield, UserCheck, CreditCard } from 'lucide-react';

interface TermsPageEnProps {
  onNavigate: (page: string) => void;
}

export const TermsPageEn: React.FC<TermsPageEnProps> = ({ onNavigate }) => {
  return (
    <div dir="ltr" className="min-h-screen bg-gray-50 pt-32 pb-20 px-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-teal-100 rounded-full">
            <Scale className="text-[#0F766E]" size={20} />
            <span className="text-sm font-bold text-[#0F766E]">Terms & Conditions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600">Last Updated: February 6, 2026</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using the Mzadat Platform ("the Platform"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Platform. These terms constitute a legally binding agreement between you and Mzadat.
            </p>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Account Registration</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>To participate in auctions or use certain features, you must:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>Be at least 18 years old and legally capable</li>
                <li>Verify your identity through the Nafath National Authentication system</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain one account per person (duplicate accounts are prohibited)</li>
                <li>Keep your account credentials secure and confidential</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Gavel className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Auction Rules</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Participation:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>All bids are binding and cannot be withdrawn</li>
                  <li>A refundable deposit is required to participate</li>
                  <li>Bids must meet the minimum increment specified for each auction</li>
                  <li>The Platform reserves the right to cancel or postpone auctions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Winning Bid:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>The highest bidder at auction close wins the item</li>
                  <li>Winner must complete payment within the specified timeframe</li>
                  <li>Failure to pay may result in forfeiture of deposit and account suspension</li>
                  <li>Sale completion is subject to property verification and legal requirements</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Payments and Fees</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p><strong>Auction Deposits:</strong> Required for participation, fully refundable if you don't win</p>
              <p><strong>Service Fees:</strong> A commission percentage is charged to the winning bidder</p>
              <p><strong>Payment Methods:</strong> Mada, Visa, Mastercard, Apple Pay, and bank transfer</p>
              <p><strong>Refunds:</strong> Processed within 3-5 business days to the original payment method</p>
              <p><strong>Currency:</strong> All transactions are in Saudi Riyal (SAR)</p>
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Property Information and Warranties</h2>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-900 font-bold mb-2">Important Notice:</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    All property information is provided by sellers. While we verify listings, buyers are responsible for conducting their own due diligence, including property inspections and legal reviews before bidding.
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed mr-4">
              <li>The Platform acts as an intermediary and does not own or guarantee properties</li>
              <li>Property descriptions are based on seller information</li>
              <li>Physical inspection is recommended before bidding</li>
              <li>Legal ownership transfer follows Saudi real estate laws</li>
              <li>All properties are sold "as is" unless otherwise specified</li>
            </ul>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Prohibited Activities</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              The following activities are strictly prohibited:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed mr-4">
              <li>Fraudulent bidding or bid manipulation</li>
              <li>Creating multiple accounts to circumvent rules</li>
              <li>Misrepresenting property information</li>
              <li>Harassing other users or staff</li>
              <li>Attempting to bypass the Platform for direct transactions</li>
              <li>Using automated bidding tools or bots</li>
              <li>Listing illegal or restricted items</li>
              <li>Money laundering or other illegal activities</li>
            </ul>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Liability and Disclaimers</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The Platform provides services on an "as is" basis. We make no warranties regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>Accuracy or completeness of property listings</li>
                <li>Uninterrupted or error-free service</li>
                <li>Results or outcomes of transactions</li>
                <li>Actions of other platform users</li>
              </ul>
              <p>
                We are not liable for indirect, incidental, or consequential damages arising from your use of the Platform. Our total liability is limited to the amount of fees paid by you in the past 12 months.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Dispute Resolution</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>In case of disputes:</p>
              <ol className="list-decimal list-inside space-y-2 mr-4">
                <li>Contact our support team to resolve the issue amicably</li>
                <li>If unresolved, disputes may be escalated to mediation</li>
                <li>Final disputes are subject to the jurisdiction of Saudi Arabian courts</li>
                <li>These terms are governed by the laws of the Kingdom of Saudi Arabia</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Account Termination</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these terms. You may also request account deletion at any time, subject to completion of any pending transactions and legal obligations.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Changes to Terms</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We may update these terms from time to time. Significant changes will be communicated via email or platform notification. Continued use after changes constitutes acceptance of the updated terms.
            </p>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={() => onNavigate('privacy-policy-en')}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all text-left group"
          >
            <Shield size={32} className="text-[#40C1C7] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2">Privacy Policy</h3>
            <p className="text-sm text-gray-500">Learn how we protect your data</p>
          </button>

          <button 
            onClick={() => onNavigate('support-en')}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all text-left group"
          >
            <FileText size={32} className="text-[#40C1C7] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2">Contact Support</h3>
            <p className="text-sm text-gray-500">Get help with your account</p>
          </button>
        </div>
      </div>
    </div>
  );
};
