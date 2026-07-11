import React from 'react';

interface PageUseCasesProps {
  isOpen: boolean;
  onClose: () => void;
  onLogoClick?: () => void;
}

const PORTFOLIO = [
  {
    title: 'THE HIM TRAIL',
    client: 'Travel Agency — India',
    category: 'WEB DESIGN & DEVELOPMENT',
    tag: 'TRAVEL PLATFORM',
    desc: 'Custom-built travel booking website with immersive destination experiences, itinerary showcases, and seamless inquiry flows for a premium adventure travel brand.',
    techs: ['React', 'Responsive Design', 'CMS Integration', 'Booking Flow'],
    link: 'https://thehimtrail.netlify.app/',
    accent: 'rgba(0, 180, 120, 0.07)'
  },
  {
    title: 'LOZENTICA',
    client: 'Premium Brand — India',
    category: 'PREMIUM WEB EXPERIENCE',
    tag: 'LUXURY WEBSITE',
    desc: 'A high-end premium brand website featuring fluid animations, editorial-quality typography, and sophisticated visual design that communicates luxury at every scroll.',
    techs: ['Next.js', 'GSAP Animations', 'Typography Design', 'Premium UI'],
    link: 'https://lozenticasample.netlify.app/',
    accent: 'rgba(180, 80, 255, 0.07)'
  },
  {
    title: 'ASTRIX GYM',
    client: 'Fitness Brand — India',
    category: 'FITNESS & LIFESTYLE WEB',
    tag: 'GYM WEBSITE',
    desc: 'Bold, high-energy gym and fitness website with class scheduling, trainer profiles, membership packages, and powerful CTA design optimized for conversions.',
    techs: ['React', 'CSS Animations', 'Booking System', 'Mobile-first'],
    link: 'https://astrixgymsample.netlify.app/',
    accent: 'rgba(255, 80, 40, 0.06)'
  },
  {
    title: 'NEXUS INTELLIGENCE',
    client: 'Tech Intelligence — India',
    category: 'AI & TECH PLATFORM WEB',
    tag: 'AI PLATFORM',
    desc: 'A futuristic AI intelligence platform website with dark tech aesthetics, feature breakdowns, dynamic data visualizations, and enterprise-grade positioning.',
    techs: ['Next.js', 'Three.js', 'Dark UI', 'Data Visualization'],
    link: 'https://nexusintelsample.netlify.app/',
    accent: 'rgba(0, 200, 255, 0.06)'
  },
  {
    title: 'AETHER AUTOMATIONS',
    client: 'Global Logistics Brand',
    category: 'AI AUTOMATIONS & WORKFLOWS',
    tag: 'INTEGRATION BLUEPRINT',
    desc: 'Autonomous multi-agent customer pipeline connecting Stripe triggers, n8n automations, OpenAI models, and automated developer WhatsApp dispatch routines.',
    techs: ['n8n workflow', 'OpenAI API', 'Stripe Hooks', 'WhatsApp API'],
    link: 'https://wa.me/918076129170?text=Hi%20Sepeint!%20I%20want%20to%20know%20more%20about%20Aether%20Automations.',
    accent: 'rgba(217, 70, 239, 0.08)'
  },
];

export const PageUseCases: React.FC<PageUseCasesProps> = ({ isOpen, onClose, onLogoClick }) => {
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
        <div className="page-label" style={{ letterSpacing: '0.3em', marginBottom: '32px' }}>[ OUR PORTFOLIO ]</div>

        <h1 className="page-h1" style={{ letterSpacing: '-0.01em', marginBottom: '36px' }}>
          WORK WE'VE<br />
          <span className="page-h1-stroke">SHIPPED</span><br />
          FOR CLIENTS.
        </h1>

        <p style={{
          fontFamily: 'Space Mono',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.08em',
          lineHeight: 1.8,
          maxWidth: '560px',
          textTransform: 'uppercase',
          marginBottom: '50px'
        }}>
          Live sample builds across industries — from travel platforms to AI-powered enterprise products.
        </p>

        <div className="page-divider" style={{ margin: '45px 0' }} />

        <div className="page-usecases-grid">
          {PORTFOLIO.map((item, idx) => (
            <div key={idx} style={{
              background: item.accent,
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '32px',
              borderRadius: '4px',
              textAlign: 'left',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0,245,192,0.4), transparent)'
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                <span style={{ fontFamily: 'Space Mono', fontSize: '0.6rem', color: '#0ff5c0', letterSpacing: '0.1em' }}>{item.tag}</span>
                <span style={{ fontFamily: 'Space Mono', fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em' }}>{String(idx + 1).padStart(2, '0')}</span>
              </div>

              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '1.9rem', color: '#fff', letterSpacing: '0.04em', margin: '0 0 5px 0', lineHeight: 1 }}>{item.title}</h2>
              <div style={{ fontFamily: 'Space Mono', fontSize: '0.62rem', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.08em', marginBottom: '5px' }}>{item.client}</div>
              <div style={{ fontFamily: 'Space Mono', fontSize: '0.6rem', color: '#0ff5c0', letterSpacing: '0.06em', marginBottom: '18px' }}>{item.category}</div>

              <p style={{ fontFamily: 'Space Mono', fontSize: '0.68rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {item.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                {item.techs.map((t) => (
                  <span key={t} style={{
                    fontSize: '0.6rem',
                    fontFamily: 'Space Mono',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'rgba(255,255,255,0.55)',
                    padding: '5px 10px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    letterSpacing: '0.04em'
                  }}>{t}</span>
                ))}
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'Space Mono',
                  fontSize: '0.65rem',
                  fontWeight: 'bold',
                  color: '#0ff5c0',
                  textDecoration: 'none',
                  letterSpacing: '0.12em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                VIEW LIVE SITE ↗
              </a>
            </div>
          ))}
        </div>

        <div className="page-divider" style={{ marginTop: '50px' }} />

        <div className="page-footer-row">
          <div className="page-footer-text">SEPEINT · BANGALORE, INDIA</div>
          <a
            href="https://wa.me/918076129170"
            target="_blank"
            rel="noopener noreferrer"
            className="page-footer-text"
            style={{ color: '#0ff5c0', textDecoration: 'none' }}
          >
            START YOUR PROJECT →
          </a>
        </div>
      </div>
    </div>
  );
};
