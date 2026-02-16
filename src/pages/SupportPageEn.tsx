import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  FileText, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Search
} from 'lucide-react';

interface SupportPageEnProps {
  onNavigate: (page: string) => void;
}

export const SupportPageEn: React.FC<SupportPageEnProps> = ({ onNavigate }) => {
  const [ticketStep, setTicketStep] = useState(1); // 1: Form, 2: Success
  const [activeTab, setActiveTab] = useState('new-ticket'); // 'new-ticket' or 'track-ticket'
  const [ticketId, setTicketId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setTicketStep(2);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div dir="ltr" className="min-h-screen bg-gray-50 pb-20 pt-40" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-gray-900 mb-2">Support & Complaints Center</h1>
          <p className="text-gray-500">We're here to help you and resolve any issues you may face</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:border-[#40C1C7] transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                 <Phone size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
              <p className="text-sm text-gray-400 mb-3">Available daily 8 AM - 10 PM</p>
              <a href="tel:920000000" className="text-blue-600 font-bold font-mono text-lg" dir="ltr">9200 00000</a>
           </div>

           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:border-[#40C1C7] transition-all group">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                 <MessageCircle size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-sm text-gray-400 mb-3">Instant reply during business hours</p>
              <a href="#" className="text-green-600 font-bold font-mono text-lg" dir="ltr">+966 55 123 4567</a>
           </div>

           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:border-[#40C1C7] transition-all group">
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                 <Mail size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-sm text-gray-400 mb-3">We'll respond within 24 hours</p>
              <a href="mailto:support@mzadat.sa" className="text-orange-600 font-bold font-mono text-lg">support@mzadat.sa</a>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
           {/* Tabs */}
           <div className="flex border-b border-gray-100">
              <button 
                onClick={() => setActiveTab('new-ticket')}
                className={`flex-1 py-4 text-center font-bold text-sm flex items-center justify-center gap-2 transition-colors ${activeTab === 'new-ticket' ? 'text-[#40C1C7] bg-teal-50 border-b-2 border-[#40C1C7]' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                 <FileText size={18} /> Open New Ticket
              </button>
              <button 
                onClick={() => setActiveTab('track-ticket')}
                className={`flex-1 py-4 text-center font-bold text-sm flex items-center justify-center gap-2 transition-colors ${activeTab === 'track-ticket' ? 'text-[#40C1C7] bg-teal-50 border-b-2 border-[#40C1C7]' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                 <Search size={18} /> Track Previous Ticket
              </button>
           </div>

           {/* Tab Content */}
           <div className="p-8">
              {activeTab === 'new-ticket' ? (
                ticketStep === 1 ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                        <input 
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40C1C7] focus:border-transparent outline-none"
                          placeholder="Ahmed Mohammed"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                        <input 
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40C1C7] focus:border-transparent outline-none"
                          placeholder="ahmed@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                        <input 
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40C1C7] focus:border-transparent outline-none"
                          placeholder="+966 55 123 4567"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                        <select 
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40C1C7] focus:border-transparent outline-none"
                          required
                        >
                          <option value="">Select a category</option>
                          <option value="auction-issue">Auction Issue</option>
                          <option value="payment-issue">Payment Issue</option>
                          <option value="account-issue">Account Issue</option>
                          <option value="technical-issue">Technical Issue</option>
                          <option value="complaint">Complaint</option>
                          <option value="suggestion">Suggestion</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                      <input 
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40C1C7] focus:border-transparent outline-none"
                        placeholder="Brief description of the issue"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                      <textarea 
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40C1C7] focus:border-transparent outline-none resize-none"
                        placeholder="Provide detailed information about your issue..."
                        required
                      />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <Paperclip size={20} className="text-gray-400" />
                      <input 
                        type="file"
                        multiple
                        className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-teal-50 file:text-[#0F766E] hover:file:bg-teal-100"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-[#0F766E] text-white rounded-xl font-bold hover:bg-[#0d655e] transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Send size={20} />
                      Submit Ticket
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Ticket Submitted Successfully!</h3>
                    <p className="text-gray-600 mb-2">
                      Your ticket number is: <span className="font-mono font-bold text-[#40C1C7]">#MZ-2024-{Math.floor(Math.random() * 10000)}</span>
                    </p>
                    <p className="text-gray-500 mb-8">
                      You will receive a response via email within 24 hours
                    </p>
                    <button 
                      onClick={() => setTicketStep(1)}
                      className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                    >
                      Submit Another Ticket
                    </button>
                  </div>
                )
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Ticket Number</label>
                    <div className="flex gap-3">
                      <input 
                        type="text"
                        value={ticketId}
                        onChange={(e) => setTicketId(e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#40C1C7] focus:border-transparent outline-none"
                        placeholder="#MZ-2024-1234"
                      />
                      <button className="px-6 py-3 bg-[#0F766E] text-white rounded-xl font-bold hover:bg-[#0d655e] transition-colors flex items-center gap-2">
                        <Search size={20} />
                        Search
                      </button>
                    </div>
                  </div>

                  {/* Mock Ticket Status */}
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl mb-4">
                      <Clock size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Enter your ticket number</h4>
                        <p className="text-sm text-gray-600">You can find your ticket number in the email confirmation we sent you</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
           </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            onClick={() => onNavigate('faq-en')}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all cursor-pointer group"
          >
            <FileText size={32} className="text-[#40C1C7] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
            <p className="text-sm text-gray-500">Find answers to common questions</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#40C1C7] transition-all cursor-pointer group">
            <AlertCircle size={32} className="text-[#40C1C7] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 mb-2">Report a Problem</h3>
            <p className="text-sm text-gray-500">Report technical issues or violations</p>
          </div>
        </div>
      </div>
    </div>
  );
};
