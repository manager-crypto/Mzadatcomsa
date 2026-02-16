import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Loader2, 
  Sparkles, 
  MessageCircle, 
  User, 
  ChevronDown,
  Headset,
  MessageSquareText
} from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  type?: 'text' | 'options' | 'listing';
  options?: string[];
}

interface SmartAdvisorProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  isLoggedIn?: boolean;
  onOpenLogin?: () => void;
  isEnglish?: boolean;
}

export const SmartAdvisor: React.FC<SmartAdvisorProps> = ({ isOpen, onClose, onOpen, isLoggedIn = false, onOpenLogin = () => {}, isEnglish = false }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      role: 'model', 
      text: isEnglish 
        ? 'Welcome to Auctions! 🏠 I am your smart assistant. How can I help you today?' 
        : 'مرحباً بك في مزادات! 🏠 أنا مساعدك الذكي. كيف يمكنني خدمتك اليوم؟', 
      timestamp: new Date(),
      type: 'options',
      options: isEnglish 
        ? ['Search for property', 'Auction inquiry', 'How to register', 'Contact support']
        : ['بحث عن عقار', 'استفسار عن مزاد', 'كيفية التسجيل', 'تواصل مع الدعم']
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Update initial message when language changes
  useEffect(() => {
    setMessages([
      { 
        id: '1', 
        role: 'model', 
        text: isEnglish 
          ? 'Welcome to Auctions! 🏠 I am your smart assistant. How can I help you today?' 
          : 'مرحباً بك في مزادات! 🏠 أنا مساعدك الذكي. كيف يمكنني خدمتك اليوم؟', 
        timestamp: new Date(),
        type: 'options',
        options: isEnglish 
          ? ['Search for property', 'Auction inquiry', 'How to register', 'Contact support']
          : ['بحث عن عقار', 'استفسار عن مزاد', 'كيفية التسجيل', 'تواصل مع الدعم']
      }
    ]);
  }, [isEnglish]);

  const generateResponse = (userText: string) => {
    setIsTyping(true);
    
    // Simple rule-based logic for demo purposes
    let responseText = '';
    let responseOptions: string[] | undefined = undefined;

    const lowerText = userText.toLowerCase();

    if (lowerText.includes('بحث') || lowerText.includes('عقار') || lowerText.includes('search') || lowerText.includes('property')) {
      responseText = isEnglish ? 'I can help you search for properties. What type of property are you looking for?' : 'يمكنني مساعدتك في البحث عن عقارات. ما هو نوع العقار الذي تبحث عنه؟';
      responseOptions = isEnglish ? ['Residential Land', 'Villas', 'Commercial Properties', 'Apartments'] : ['أراضي سكنية', 'فلل', 'عقارات تجارية', 'شقق'];
    } else if (lowerText.includes('مزاد') || lowerText.includes('auction')) {
      responseText = isEnglish ? 'We have many active auctions currently. You can browse the Auctions page to see the details. Do you want to know how to participate?' : 'لدينا العديد من المزادات النشطة حالياً. يمكنك تصفح صفحة المزادات لرؤية التفاصيل. هل تود معرفة كيفية المشاركة؟';
      responseOptions = isEnglish ? ['Yes, how do I participate?', 'Show current auctions'] : ['نعم، كيف أشارك؟', 'عرض المزادات الحالية'];
    } else if (lowerText.includes('تسجيل') || lowerText.includes('حساب') || lowerText.includes('register') || lowerText.includes('account')) {
      responseText = isEnglish ? 'Registering on the Auctions platform is easy and simple. You can click on the user icon in the top menu and choose "Create Account". You will need an ID number and activate the national e-payment.' : 'التسجيل في منصة مزادات سهل وبسيط. يمكنك النقر على أيقونة المستخدم في القائمة العلوية واختيار "إنشاء حساب". ستحتاج إلى رقم الهوية وتفعيل النفاذ الوطني.';
    } else if (lowerText.includes('دعم') || lowerText.includes('مسعدة') || lowerText.includes('support') || lowerText.includes('help')) {
      responseText = isEnglish ? 'Our support team is available to serve you around the clock. You can contact us or leave a message here.' : 'فريق الدعم لدينا متواجد لخدمتك على مدار الساعة. يمكنك الاتصال بنا أو ترك رسالة هنا.';
    } else {
      responseText = isEnglish ? 'Thank you for your inquiry. I will forward your request to the experts or you can choose from the menu below.' : 'شكراً لاستفسارك. سأقوم بتحويل طلبك للمختصين أو يمكنك الاختيار من القائمة أدناه.';
      responseOptions = isEnglish ? ['Search for Property', 'Ask about Auction', 'Help'] : ['بحث عن عقار', 'استفسار عن مزاد', 'المساعدة'];
    }

    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date(),
        type: responseOptions ? 'options' : 'text',
        options: responseOptions
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    if (!isLoggedIn) {
       onOpenLogin();
       return;
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    generateResponse(inputValue);
  };

  const handleOptionClick = (option: string) => {
    if (!isLoggedIn) {
       onOpenLogin();
       return;
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: option,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    generateResponse(option);
  };

  // Render minimized state (Button)
  if (!isOpen) {
    return (
      <>
        <a 
          href="https://wa.me/966500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 left-6 z-[100] group flex items-center gap-3 px-5 py-3 rounded-full shadow-xl bg-[#B54B48] text-white hover:bg-[#a04240] transition-all duration-300 animate-fade-up hover:-translate-y-1"
        >
          <span className="text-sm font-bold hidden md:block">
            {isEnglish ? 'Chat with us' : 'تحدث معنا'}
          </span>
          <MessageSquareText size={24} />
        </a>

        <button 
          onClick={onOpen}
          className="fixed bottom-6 left-6 z-[100] group flex items-center gap-3 px-5 py-4 rounded-full shadow-2xl bg-[#40C1C7] text-white hover:bg-[#2daeb4] transition-all duration-300 animate-fade-up"
        >
          <span className="text-sm font-bold hidden md:block">
            {isEnglish ? 'Ask our Smart Advisor' : 'اسأل مستشارنا الذكي'}
          </span>
          <Sparkles size={24} className="animate-pulse" />
        </button>
      </>
    );
  }

  // Render open state (Chat Window)
  return (
    <div className="fixed bottom-6 left-6 z-[100] w-[350px] md:w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-slide-in flex flex-col max-h-[600px] h-[500px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#40C1C7] to-[#35a4a9] p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
            <Bot size={24} />
          </div>
          <div>
            <h4 className="font-bold">{isEnglish ? 'Auctions Advisor' : 'مستشار مزادات'}</h4>
            <div className="flex items-center gap-1.5 opacity-90">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse border border-white/50"></span>
              <span className="text-xs">{isEnglish ? 'Online now' : 'متصل الآن'}</span>
            </div>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="hover:bg-white/20 p-2 rounded-full transition-colors"
        >
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50/50 space-y-4 scroll-smooth">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
          >
            {msg.role === 'model' && (
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-[#40C1C7] ml-2 flex-shrink-0 border border-teal-200">
                <Bot size={16} />
              </div>
            )}
            
            <div className={`max-w-[80%] space-y-2`}>
              <div className={`p-3.5 text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-gray-900 text-white rounded-2xl rounded-br-none' 
                  : 'bg-white text-gray-700 border border-gray-100 rounded-2xl rounded-bl-none'
              }`}>
                {msg.text}
              </div>
              
              {/* Options Chips */}
              {msg.type === 'options' && msg.options && (
                <div className="flex flex-wrap gap-2 justify-end">
                  {msg.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(opt)}
                      className="text-xs bg-white border border-[#40C1C7] text-[#40C1C7] px-3 py-1.5 rounded-full hover:bg-[#40C1C7] hover:text-white transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
              
              <span className="text-[10px] text-gray-400 block px-1 opacity-70">
                {msg.timestamp.toLocaleTimeString(isEnglish ? 'en-US' : 'ar-SA', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-2 flex-shrink-0">
                <User size={16} />
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-end">
            <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex items-center gap-1">
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="relative flex items-center gap-2">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={isEnglish ? 'Type your question here...' : 'اكتب استفسارك هنا...'} 
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#40C1C7] focus:ring-1 focus:ring-[#40C1C7] transition-all"
            disabled={isTyping}
          />
          <button 
            onClick={handleSend}
            disabled={isTyping || !inputValue.trim()}
            className="p-3 bg-[#40C1C7] text-white rounded-xl hover:bg-[#2daeb4] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-teal-500/20 active:scale-95"
          >
            <Send size={18} className={isTyping ? 'opacity-0' : 'opacity-100'} />
            {isTyping && <Loader2 size={18} className="animate-spin absolute inset-0 m-auto" />}
          </button>
        </div>
        <div className="text-center mt-3">
          <p className="text-[10px] text-gray-400 flex items-center justify-center gap-1.5 bg-gray-50 py-1 px-3 rounded-full w-fit mx-auto">
            <Sparkles size={10} className="text-[#40C1C7]" />
            {isEnglish ? 'Powered by AI to answer your questions' : 'مدعوم بالذكاء الاصطناعي للإجابة على استفساراتك'}
          </p>
        </div>
      </div>
    </div>
  );
};