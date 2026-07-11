import React, { useState, useRef, useEffect } from 'react';

interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'ai' | 'reach'>('ai');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: "Hello! I'm Sepeint's digital agent. Ask me anything about our services, projects, or consulting capabilities!" }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '', gdpr: false });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const togglePanel = () => setIsOpen(!isOpen);

  const handleSendMsg = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = inputVal.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInputVal('');

    // Simulated Bot Responses based on keywords
    setTimeout(() => {
      let reply = "I signal into the void. Sepeint transforms ideas into future success through human-centered strategies, custom AI coding, and advanced 3D WebGL development.";
      const query = userMsg.toLowerCase();
      
      if (query.includes('services') || query.includes('work') || query.includes('do')) {
        reply = "We offer expertise across: 1. CODING (Web Dev, AI Custom Solutions, Apps) 2. DESIGN (UX/UI, 3D, branding) 3. CONSULTING (tech governance, digital strategy) 4. MARKETING.";
      } else if (query.includes('price') || query.includes('cost') || query.includes('charge')) {
        reply = "Our projects are fully tailored to custom specifications. Switch to the 'Reach Us' tab above to message our team directly for custom quotes!";
      } else if (query.includes('hello') || query.includes('hi')) {
        reply = "Hi there! How can I assist you with your digital transition today?";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 1000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.gdpr) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: '', email: '', message: '', gdpr: false });
      setIsSubmitted(false);
      setIsOpen(false);
    }, 3000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button className="chatbot-btn" onClick={togglePanel}>
        <div className="chatbot-icon"></div>
        <span>{isOpen ? 'Close' : 'Reach Us'}</span>
      </button>

      {/* Slide-up Chat Panel */}
      <div className={`chatbot-panel ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-tabs">
            <button 
              className={`chatbot-tab ${activeTab === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveTab('ai')}
            >
              Talk to AI
            </button>
            <button 
              className={`chatbot-tab ${activeTab === 'reach' ? 'active' : ''}`}
              onClick={() => setActiveTab('reach')}
            >
              Reach Us
            </button>
          </div>
          <button style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }} onClick={togglePanel}>
            [x]
          </button>
        </div>

        {activeTab === 'ai' ? (
          <>
            <div className="chatbot-body">
              {messages.map((msg, idx) => (
                <div key={idx} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-footer">
              <form className="chat-input-form" onSubmit={handleSendMsg}>
                <textarea 
                  className="chat-textarea"
                  placeholder="Ask anything..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMsg(e);
                    }
                  }}
                />
                <button type="submit" className="chat-send-btn">
                  SEND
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="chatbot-body" style={{ display: 'block' }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', margin: '40% 0', color: '#BC13FE', fontWeight: 'bold' }}>
                THANKS.<br />WE'LL BE IN TOUCH VERY SOON.
              </div>
            ) : (
              <form className="reachus-form" onSubmit={handleContactSubmit}>
                <input 
                  type="text" 
                  placeholder="NAME & SURNAME" 
                  required 
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
                <input 
                  type="email" 
                  placeholder="YOUR E-MAIL" 
                  required 
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
                <textarea 
                  placeholder="YOUR MESSAGE" 
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                />
                <label>
                  <input 
                    type="checkbox" 
                    required 
                    checked={contactForm.gdpr}
                    onChange={(e) => setContactForm({ ...contactForm, gdpr: e.target.checked })}
                  />
                  <span>I accept the privacy policy</span>
                </label>
                <button type="submit">SEND MESSAGE</button>
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );
};
