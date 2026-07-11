import React from 'react';

interface PageOriginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogoClick?: () => void;
}

export const PageOrigin: React.FC<PageOriginProps> = ({ isOpen, onClose, onLogoClick }) => {
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
        {/* Label */}
        <div className="page-label" style={{ letterSpacing: '0.3em', marginBottom: '32px' }}>[ THE TIMELINE & PHILOSOPHY ]</div>

        {/* Hero Statement */}
        <h1 className="page-h1" style={{ letterSpacing: '-0.01em', marginBottom: '45px' }}>
          THE STORY<br />
          <span className="page-h1-stroke">BEHIND</span><br />
          SEPEINT.
        </h1>

        <div className="page-divider" style={{ margin: '45px 0' }} />

        {/* Origin Story Grid */}
        <div className="page-two-col" style={{ gap: '80px' }}>
          <div className="page-col-left" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div className="page-section-tag" style={{ letterSpacing: '0.2em', marginBottom: '8px' }}>HOW IT STARTED</div>
            <p className="page-body" style={{ letterSpacing: '0.08em', lineHeight: '1.9', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '16px' }}>
              Sepeint was founded with a single obsession: to engineer software and digital systems that work at scale — not just in demos, but in real production environments under real business pressure.
            </p>
            <p className="page-body" style={{ letterSpacing: '0.08em', lineHeight: '1.9', color: 'rgba(255, 255, 255, 0.65)' }}>
              We saw companies struggling with outdated tools, slow development cycles, broken integrations, and teams too stretched to move fast. We built Sepeint to change that — from the inside out.
            </p>
          </div>

          <div className="page-col-right" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: '48px', display: 'flex', flexDirection: 'column', gap: '35px' }}>
            <div className="page-stat-block" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div className="page-stat-number" style={{ color: '#0ff5c0', fontSize: '3.5rem', marginBottom: '6px' }}>2020</div>
              <div className="page-stat-label" style={{ letterSpacing: '0.12em' }}>ESTABLISHED IN INDIA</div>
            </div>
            <div className="page-stat-block" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div className="page-stat-number" style={{ color: '#0ff5c0', fontSize: '3.5rem', marginBottom: '6px' }}>50+</div>
              <div className="page-stat-label" style={{ letterSpacing: '0.12em' }}>SYSTEMS DEPLOYED</div>
            </div>
            <div className="page-stat-block" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <div className="page-stat-number" style={{ color: '#0ff5c0', fontSize: '3.5rem', marginBottom: '6px' }}>100%</div>
              <div className="page-stat-label" style={{ letterSpacing: '0.12em' }}>SENIOR ENGINEERING TEAM</div>
            </div>
          </div>
        </div>

        <div className="page-divider" style={{ margin: '50px 0' }} />

        {/* Mission quote panel */}
        <div className="page-wide-section" style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '48px',
          borderRadius: '4px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(5px)'
        }}>
          <div className="page-section-tag" style={{ letterSpacing: '0.2em', marginBottom: '24px' }}>CORE MISSION</div>
          <blockquote className="page-blockquote" style={{ letterSpacing: '-0.01em', lineHeight: 1.4, fontSize: 'clamp(1.4rem, 2.5vw, 2.5rem)' }}>
            "To be the engineering partner that modern digital companies deserve — fast, precise, and built for scale from day one."
          </blockquote>
        </div>

        <div className="page-divider" style={{ margin: '50px 0' }} />

        {/* Philosophy pillars */}
        <div className="page-section-tag" style={{ letterSpacing: '0.2em', marginBottom: '36px' }}>ENGINEERING PRINCIPLES</div>
        <div className="page-pillars" style={{ gap: '30px' }}>
          {[
            { n: '01', title: 'CODE QUALITY FIRST', desc: 'Clean, documented, testable code is not optional. It is the only way to ship systems that last.' },
            { n: '02', title: 'SPEED WITHOUT COMPROMISE', desc: 'Rapid iteration and production-grade quality are not opposites. We prove it on every project.' },
            { n: '03', title: 'FULL OWNERSHIP', desc: 'We do not outsource, subcontract, or hand off. Every line of code is written, tested, and deployed by our team.' },
            { n: '04', title: 'CONTINUOUS SYSTEMS THINKING', desc: 'We build for tomorrow, not just today. Architecture decisions are made with long-term scale in mind.' },
          ].map((p) => (
            <div key={p.n} className="page-pillar-card" style={{
              background: 'rgba(255,255,255,0.015)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderTop: '2px solid #0ff5c0',
              padding: '35px 24px',
              borderRadius: '4px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
            }}>
              <div className="page-pillar-n" style={{ color: '#0ff5c0', fontFamily: 'Space Mono', fontWeight: 'bold', fontSize: '0.72rem', letterSpacing: '0.1em' }}>{p.n}</div>
              <div className="page-pillar-title" style={{ marginTop: '12px', fontSize: '1.25rem', fontFamily: 'Bebas Neue', letterSpacing: '0.05em' }}>{p.title}</div>
              <p className="page-pillar-desc" style={{ marginTop: '12px', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', fontSize: '0.7rem', textTransform: 'uppercase', fontFamily: 'Space Mono', letterSpacing: '0.04em' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer Row */}
        <div className="page-footer-row" style={{ marginTop: '80px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
          <div className="page-footer-text">SEPEINT · BANGALORE, INDIA</div>
          <div className="page-footer-text">contact.sepeint@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
