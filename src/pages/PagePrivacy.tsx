import React from 'react';

interface PagePrivacyProps {
  isOpen: boolean;
  onClose: () => void;
  onLogoClick?: () => void;
}

export const PagePrivacy: React.FC<PagePrivacyProps> = ({ isOpen, onClose, onLogoClick }) => {
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
        <div className="page-label" style={{ letterSpacing: '0.3em', marginBottom: '32px' }}>[ REGULATORY COMPLIANCE ]</div>

        <h1 className="page-h1" style={{ letterSpacing: '-0.01em', marginBottom: '45px' }}>
          PRIVACY<br />
          <span className="page-h1-stroke">POLICY</span>
        </h1>

        <div className="page-divider" style={{ margin: '45px 0' }} />

        <div className="page-two-col" style={{ gap: '80px' }}>
          <div className="page-col-left" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div className="page-section-tag" style={{ letterSpacing: '0.2em', marginBottom: '8px' }}>DATA PROTECTION SUMMARY</div>
            <p className="page-body" style={{ letterSpacing: '0.08em', color: 'rgba(255,255,255,0.85)', lineHeight: '1.8' }}>
              Sepeint ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy details how we collect, process, and protect your personal information when you use our website, custom SaaS tools, or contract our software development services.
            </p>
            <p className="page-body" style={{ letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)' }}>
              We operate strictly in compliance with global data protection frameworks, including the General Data Protection Regulation (GDPR) and regional IT compliance rules of Bangalore, India.
            </p>

            <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.5rem', color: '#fff', marginTop: '20px', letterSpacing: '0.05em' }}>1. INFORMATION WE COLLECT</h3>
            <p className="page-body" style={{ letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>
              We only collect information that you explicitly send us through contact forms, email requests, or custom software specification questionnaires. This includes:
              <br />— Name, Company, and Email Address.
              <br />— Project metadata and API scope requirements.
              <br />— System configurations and database connection scopes (under strict NDA).
            </p>

            <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.5rem', color: '#fff', marginTop: '20px', letterSpacing: '0.05em' }}>2. HOW WE USE YOUR DATA</h3>
            <p className="page-body" style={{ letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>
              Your data is processed strictly to:
              <br />— Respond to development bids and custom integration designs.
              <br />— Deliver software, portals, and AI agents.
              <br />— Provide backend telemetry monitoring under client SLA agreements.
            </p>

            <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.5rem', color: '#fff', marginTop: '20px', letterSpacing: '0.05em' }}>3. DATA RETENTION & SECURITY</h3>
            <p className="page-body" style={{ letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>
              We implement advanced AES-256 encryption on all stored developer scopes and system designs. Sepeint does not share or sell your corporate or personal records.
            </p>
          </div>

          <div className="page-col-right" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '48px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="page-section-tag" style={{ letterSpacing: '0.2em', marginBottom: '8px' }}>LEGAL PROFILE</div>
            <div className="page-stat-block" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div className="page-stat-number" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '4px' }}>SEPEINT</div>
              <div className="page-stat-label" style={{ letterSpacing: '0.12em' }}>BANGALORE, INDIA</div>
            </div>
            <div className="page-stat-block" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div className="page-stat-number" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '4px' }}>REGISTRATION</div>
              <div className="page-stat-label" style={{ letterSpacing: '0.12em' }}>IT REGULATORY COMPLIANT</div>
            </div>
            <div className="page-stat-block" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div className="page-stat-number" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '4px' }}>CONTACT</div>
              <div className="page-stat-label" style={{ letterSpacing: '0.12em' }}>contact.sepeint@gmail.com</div>
            </div>
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
