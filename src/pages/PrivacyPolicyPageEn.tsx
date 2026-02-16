import React from 'react';
import { ShieldCheck, FileText, Lock, Eye, Database, UserCheck, Scale, AlertCircle } from 'lucide-react';

interface PrivacyPolicyPageEnProps {
  onNavigate: (page: string) => void;
}

export const PrivacyPolicyPageEn: React.FC<PrivacyPolicyPageEnProps> = ({ onNavigate }) => {
  return (
    <div dir="ltr" className="min-h-screen bg-gray-50 pt-32 pb-20 px-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-teal-100 rounded-full">
            <ShieldCheck className="text-[#0F766E]" size={20} />
            <span className="text-sm font-bold text-[#0F766E]">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last Updated: February 6, 2026</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Mzadat Platform ("the Platform") is committed to protecting and respecting your privacy. This privacy policy explains how we collect, use, and protect your personal information when you use our auction and real estate services.
            </p>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Personal Information:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>Name and National ID Number (via Nafath)</li>
                  <li>Email address and phone number</li>
                  <li>Home address and billing information</li>
                  <li>Bank account details for transactions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Usage Information:</h3>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>Browsing history on the Platform</li>
                  <li>Bidding history and participation in auctions</li>
                  <li>Device information and IP address</li>
                  <li>Location data (with your permission)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed mr-4">
              <li>Providing and improving our auction and real estate services</li>
              <li>Processing transactions and managing payments</li>
              <li>Verifying your identity through Nafath</li>
              <li>Sending notifications about auctions and updates</li>
              <li>Communicating with you regarding your account and support</li>
              <li>Complying with legal and regulatory requirements</li>
              <li>Detecting and preventing fraud and abuse</li>
              <li>Analyzing usage patterns to improve user experience</li>
            </ul>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Information Protection</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed mr-4">
              <li>End-to-end encryption for sensitive data</li>
              <li>Secure servers and regular security audits</li>
              <li>Access control and employee training</li>
              <li>Regular backups and disaster recovery plans</li>
              <li>Compliance with Saudi Arabia's data protection regulations</li>
            </ul>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Sharing Your Information</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed mr-4">
              <li><strong>Service Providers:</strong> Third parties that help us provide our services (payment processors, hosting providers)</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our legal rights</li>
              <li><strong>Auction Participants:</strong> Limited information necessary for auction transactions (name, bid amount)</li>
              <li><strong>Business Partners:</strong> With your explicit consent for specific purposes</li>
            </ul>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed mr-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
              <li><strong>Restriction:</strong> Request limitation of data processing</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to certain types of data processing</li>
            </ul>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar technologies to improve your experience on the Platform. You can control cookie settings through your browser. Essential cookies are required for the Platform to function properly, while optional cookies help us analyze usage and personalize your experience.
            </p>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Changes to This Policy</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any significant changes via email or through a notice on the Platform. Your continued use of the Platform after such changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-[#40C1C7]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this privacy policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p className="text-gray-700"><strong>Email:</strong> privacy@mzadat.sa</p>
              <p className="text-gray-700"><strong>Phone:</strong> 9200 00000</p>
              <p className="text-gray-700"><strong>Address:</strong> Riyadh, Kingdom of Saudi Arabia</p>
            </div>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={() => onNavigate('terms-en')}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all text-left group"
          >
            <Scale size={32} className="text-[#40C1C7] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2">Terms & Conditions</h3>
            <p className="text-sm text-gray-500">Read our terms of service</p>
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
