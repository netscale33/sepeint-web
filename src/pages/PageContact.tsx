import React, { useState } from 'react';

interface PageContactProps {
  isOpen: boolean;
  onClose: () => void;
  onLogoClick?: () => void;
}

export const PageContact: React.FC<PageContactProps> = ({ isOpen, onClose, onLogoClick }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open(`mailto:contact.sepeint@gmail.com?subject=Development Inquiry&body=${encodeURIComponent(message || 'Hello, I would like to start a software development project with Sepeint. Please contact me at ' + email)}`);
      setSubmitted(true);
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className={`page-panel ${isOpen ? 'open' : ''}`}>
      <div className="page-panel-header">
        <button className="page-watermark-logo" onClick={onLogoClick || onClose}>
          SEPEINT
        </button>
        <button className="page-panel-close" onClick={onClose} aria-label="Close">
          <span>CLOSE</span>
          <span className="page-panel-close-x">✕</span>
        </button>
      </div>

      <div className="page-panel-inner" style={{ marginTop: '50px' }}>
        <div className="page-label" style={{ letterSpacing: '0.3em', marginBottom: '32px' }}>[ DEPLOYMENT CHANNELS ]</div>

        <h1 className="page-h1" style={{ letterSpacing: '-0.01em', marginBottom: '45px' }}>
          LET'S BUILD<br />
          <span className="page-h1-stroke">SOMETHING</span><br />
          UNSTOPPABLE.
        </h1>

        <div className="page-divider" style={{ margin: '45px 0' }} />

        <div className="page-two-col" style={{ gap: '80px' }}>
          {/* Left Column — Contact Info */}
          <div className="page-col-left" style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
            <div className="page-section-tag" style={{ letterSpacing: '0.2em', marginBottom: '8px' }}>CONNECT DIRECTLY</div>
            <p className="page-body" style={{ letterSpacing: '0.08em', color: 'rgba(255, 255, 255, 0.7)' }}>
              Have an idea for a SaaS platform, a mobile application project, or custom API integration workflows? Drop us a line below. Our engineers reply within 24 hours.
            </p>

            <div className="page-contact-info-block" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
              <div className="page-contact-label" style={{ letterSpacing: '0.15em' }}>EMAIL</div>
              <a href="mailto:contact.sepeint@gmail.com" className="page-contact-value" style={{ color: '#0ff5c0', fontSize: '1rem', fontWeight: 'bold', textDecoration: 'none' }}>
                contact.sepeint@gmail.com
              </a>
            </div>

            <div className="page-contact-info-block" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
              <div className="page-contact-label" style={{ letterSpacing: '0.15em' }}>WHATSAPP</div>
              <a href="https://wa.me/918076129170" target="_blank" rel="noopener noreferrer" className="page-contact-value" style={{ color: '#0ff5c0', fontSize: '1rem', fontWeight: 'bold', textDecoration: 'none' }}>
                +91 80761 29170
              </a>
            </div>

            <div className="page-contact-info-block" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
              <div className="page-contact-label" style={{ letterSpacing: '0.15em' }}>HEADQUARTERS</div>
              <p className="page-contact-value-text" style={{ margin: 0, textTransform: 'none', color: '#fff', fontSize: '0.85rem', lineHeight: 1.6, opacity: 0.8, fontFamily: 'Space Mono' }}>
                Sepeint<br />
                Bangalore, India
              </p>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div className="page-col-right" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0) 100%)',
            border: '1px solid rgba(255,255,255,0.05)',
            padding: '40px',
            borderRadius: '4px'
          }}>
            <form onSubmit={handleSubmit} className="page-contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="page-form-group">
                <label className="page-form-label" style={{ letterSpacing: '0.1em' }}>YOUR EMAIL ADDRESS</label>
                <input
                  type="email"
                  className="page-form-input"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '14px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.8rem',
                    letterSpacing: '0.05em'
                  }}
                  required
                />
              </div>

              <div className="page-form-group">
                <label className="page-form-label" style={{ letterSpacing: '0.1em' }}>PROJECT SPECIFICATIONS</label>
                <textarea
                  className="page-form-textarea"
                  rows={5}
                  placeholder="Tell us what you want to build (SaaS portal, Next.js web application, n8n automations, iOS/Android apps...)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '14px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.8rem',
                    letterSpacing: '0.05em',
                    resize: 'none'
                  }}
                />
              </div>

              <button type="submit" className="page-form-submit-btn" style={{
                background: '#0ff5c0',
                color: '#000',
                border: 'none',
                padding: '16px 30px',
                fontWeight: 'bold',
                fontFamily: 'Space Mono',
                cursor: 'pointer',
                letterSpacing: '0.1em',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                borderRadius: '2px',
                transition: 'background 0.2s'
              }}>
                {submitted ? 'MESSAGE COMPILED ✓' : 'SEND SPECIFICATIONS →'}
              </button>
            </form>
          </div>
        </div>

        <div className="page-divider" style={{ margin: '45px 0' }} />

        <div className="page-footer-row">
          <div className="page-footer-text">SEPEINT · BANGALORE, INDIA</div>
          <div className="page-footer-text">contact.sepeint@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
