import React from 'react';

interface PageAboutProps {
  isOpen: boolean;
  onClose: () => void;
  onLogoClick?: () => void;
}

export const PageAbout: React.FC<PageAboutProps> = ({ isOpen, onClose, onLogoClick }) => {
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
        <div className="page-label" style={{ letterSpacing: '0.3em', marginBottom: '32px' }}>[ CAPABILITIES & METRICS ]</div>

        <h1 className="page-h1" style={{ letterSpacing: '-0.01em', marginBottom: '45px' }}>
          WE BUILD<br />
          <span className="page-h1-stroke">SYSTEMS</span><br />
          THAT SCALE.
        </h1>

        <div className="page-divider" style={{ margin: '45px 0' }} />

        {/* Who we are */}
        <div className="page-two-col" style={{ gap: '80px' }}>
          <div className="page-col-left" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div className="page-section-tag" style={{ letterSpacing: '0.2em', marginBottom: '8px' }}>WHO WE ARE</div>
            <p className="page-body" style={{ letterSpacing: '0.08em', lineHeight: '1.9', color: 'rgba(255,255,255,0.85)', marginBottom: '16px' }}>
              Sepeint is a senior-level technology studio focused on custom software systems, interactive web architectures, native mobile apps, and custom workflow automations. We are a senior engineering team that delivers product-grade software with absolute speed and reliability.
            </p>
            <p className="page-body" style={{ letterSpacing: '0.08em', lineHeight: '1.9', color: 'rgba(255,255,255,0.55)' }}>
              Based in Bangalore, India, we service scaling tech teams, SaaS startups, and digital brands worldwide. We translate complex product requirements into robust, high-performance web systems.
            </p>
          </div>

          <div className="page-col-right" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '48px', display: 'flex', flexDirection: 'column', gap: '35px' }}>
            <div className="page-stat-block" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div className="page-stat-number" style={{ color: '#0ff5c0', fontSize: '3.5rem', marginBottom: '6px' }}>98%</div>
              <div className="page-stat-label" style={{ letterSpacing: '0.12em' }}>CLIENT RETENTION RATE</div>
            </div>
            <div className="page-stat-block" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div className="page-stat-number" style={{ color: '#0ff5c0', fontSize: '3.5rem', marginBottom: '6px' }}>48hr</div>
              <div className="page-stat-label" style={{ letterSpacing: '0.12em' }}>AVG WORKFLOW SYNC SPEED</div>
            </div>
            <div className="page-stat-block" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div className="page-stat-number" style={{ color: '#0ff5c0', fontSize: '3.5rem', marginBottom: '6px' }}>24/7</div>
              <div className="page-stat-label" style={{ letterSpacing: '0.12em' }}>PRODUCTION ECOSYSTEM RUNTIME</div>
            </div>
          </div>
        </div>

        <div className="page-divider" style={{ margin: '50px 0' }} />

        {/* Expertise columns */}
        <div className="page-section-tag" style={{ letterSpacing: '0.2em', marginBottom: '36px' }}>OUR SYSTEM CAPABILITIES</div>
        <div className="page-expertise-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
          {[
            {
              title: 'WEB DEVELOPMENT',
              desc: 'Custom web architectures built for speed, responsiveness, and premium UX/UI.',
              items: ['React / Next.js / Vue', 'Full-Stack SaaS Portals', 'Headless CMS Systems', 'E-Commerce Engines']
            },
            {
              title: 'APP DEVELOPMENT',
              desc: 'Native and hybrid mobile applications built for seamless cross-platform performance.',
              items: ['iOS & Android Apps', 'React Native / Flutter', 'Interactive Prototyping', 'Real-Time Apps']
            },
            {
              title: 'AI AUTOMATION',
              desc: 'Intelligent automation systems that eliminate bottlenecks and multiply operational efficiency.',
              items: ['Custom AI Agents & Bots', 'n8n & Zapier Pipelines', 'LLM Integrations', 'Automated Workflows']
            },
            {
              title: 'INTEGRATIONS & APIs',
              desc: 'Seamless connections between your business systems and custom APIs.',
              items: ['API Design & Development', 'ERP / CRM Syncing', 'Stripe & Payment Gateways', 'Legacy System Migrations']
            },
            {
              title: 'MARKETING & GROWTH',
              desc: 'Performance marketing across every major channel — Meta, Google, Email, WhatsApp, Social Media and beyond.',
              items: ['Meta & Google Ads', 'Email & WhatsApp Marketing', 'Social Media Management', 'Landing Pages & CRO']
            },
          ].map((item) => (
            <div key={item.title} className="page-expertise-col" style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%)',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '28px',
              borderRadius: '2px'
            }}>
              <div className="page-expertise-title" style={{ fontFamily: 'Bebas Neue', fontSize: '1.4rem', color: '#fff', letterSpacing: '0.05em', marginBottom: '10px' }}>{item.title}</div>
              <p className="page-expertise-desc" style={{ fontFamily: 'Space Mono', fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, textTransform: 'uppercase', marginBottom: '18px' }}>{item.desc}</p>
              <ul className="page-expertise-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {item.items.map((it) => (
                  <li key={it} style={{ fontFamily: 'Space Mono', fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    <span style={{ color: '#0ff5c0', marginRight: '8px' }}>—</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="page-divider" />

        {/* Industries */}
        <div className="page-section-tag" style={{ letterSpacing: '0.2em', marginBottom: '16px' }}>INDUSTRIES WE SERVE</div>
        <div className="page-tags-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '0' }}>
          {['SaaS & Tech', 'E-Commerce', 'Logistics', 'Healthcare', 'EdTech', 'FinTech', 'Real Estate', 'Food Delivery', 'Travel Platforms', 'B2B Enterprise', 'Gaming Systems', 'LegalTech'].map((ind) => (
            <span key={ind} className="page-tag" style={{
              padding: '10px 18px',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.03)',
              color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Space Mono',
              fontSize: '0.65rem',
              borderRadius: '2px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}>{ind}</span>
          ))}
        </div>

        <div className="page-footer-row">
          <div className="page-footer-text">SEPEINT · BANGALORE, INDIA</div>
          <div className="page-footer-text">contact.sepeint@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
