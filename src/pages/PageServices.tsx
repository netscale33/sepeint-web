import React, { useState } from 'react';

interface PageServicesProps {
  isOpen: boolean;
  onClose: () => void;
  onLogoClick?: () => void;
}

const SERVICES = [
  {
    id: 'web-development',
    label: 'WEB DEVELOPMENT',
    tagline: 'Custom Code. Modern Frameworks.',
    desc: 'We construct server-side and client-side web architectures designed for rapid updates, ultra-low latency, and top-tier SEO. Clean, modular Next.js and React portals that handle heavy API usage effortlessly.',
    deliverables: [
      'Full-stack SaaS application development',
      'Next.js & React server-rendered frontends',
      'Node.js, Express, Go, and Python backends',
      'PostgreSQL, Redis, and MongoDB database tuning',
      'REST & GraphQL API infrastructure design',
      'Headless CMS content integrations',
      'Subscription platforms & payment portals',
      'Core Web Vitals audit & speed optimization',
    ],
    outcomes: ['Sub-second load times', 'Responsive SEO ready', 'Mobile-first layouts', 'Reusable component systems'],
    number: '01',
  },
  {
    id: 'app-development',
    label: 'APP DEVELOPMENT',
    tagline: 'Native Execution. Cross-Platform Speed.',
    desc: 'We develop high-fidelity mobile applications for iOS and Android. Using modern frameworks, we ship fast, stable apps that render beautifully on all device sizes and pass every store review.',
    deliverables: [
      'iOS & Android native application development',
      'React Native & Flutter cross-platform builds',
      'High-fidelity UI/UX interactive prototyping',
      'Custom backend API connection & auth',
      'Push notification configurations',
      'Offline-first database synchronization',
      'App Store & Play Store release management',
      'Runtime telemetry and crash diagnostics',
    ],
    outcomes: ['Smooth 60fps animations', 'Native system access', 'Offline caching ready', 'Store approval assured'],
    number: '02',
  },
  {
    id: 'ai-automation',
    label: 'AI & AUTOMATION',
    tagline: 'Intelligent Workflows. Zero Manual Labor.',
    desc: 'We program and deploy autonomous AI agents, LLM integrations, and custom workflow automations that sync platforms and eliminate operational bottlenecks at scale.',
    deliverables: [
      'Custom LLM agent logic (OpenAI, Anthropic, Gemini)',
      'n8n & Zapier webhook pipeline automation',
      'RAG document search systems',
      'Automated email triage & ticket routing',
      'CRM enrichment and sync pipelines',
      'Document parsing & structured data extraction',
      'Custom Slack bots and support agents',
      'Legacy software automation scripting',
    ],
    outcomes: ['25+ hours saved weekly', 'Zero manual copy-paste', 'Real-time data sync', 'AI-assisted operations'],
    number: '03',
  },
  {
    id: 'integrations',
    label: 'INTEGRATIONS & APIs',
    tagline: 'Unified Systems. Secure Pipelines.',
    desc: 'We map and build custom middleware connectors and APIs to connect all your business tools, databases, and third-party SaaS services into one seamless operational flow.',
    deliverables: [
      'Custom API architecture & documentation',
      'Stripe subscription portal configurations',
      'ERP & CRM backend sync systems',
      'Legacy database migrations',
      'Real-time event streaming (Kafka, WebSockets)',
      'Auth security layers (OAuth2, JWT, SSO, MFA)',
      'Webhook listener queues & retry infrastructure',
      'External developer portal setups',
    ],
    outcomes: ['Unified data pipelines', 'Encrypted API channels', 'Real-time sync records', 'Auto-retry on failure'],
    number: '04',
  },
  {
    id: 'marketing',
    label: 'MARKETING & GROWTH',
    tagline: 'Every Channel. Maximum ROI.',
    desc: 'We execute performance marketing campaigns across every major platform. From Meta Ads to email sequences — data-driven execution with real-time dashboards, transparent reporting, and relentless optimization for growth.',
    deliverables: [
      'Meta Ads (Facebook & Instagram) campaign management',
      'Google Ads — Search, Display, Shopping & YouTube',
      'LinkedIn Ads for B2B enterprise lead generation',
      'Email marketing automation & nurture sequences',
      'Social Media content creation & management',
      'TikTok organic strategy + paid advertising',
      'WhatsApp broadcast campaign automation',
      'Landing page design & conversion rate optimization',
    ],
    outcomes: ['340% average ROAS delivered', '98% client retention', '48hr campaign launch', 'Live performance dashboards'],
    number: '05',
  },
];

const AUTOMATION_PRODUCTS = [
  {
    tag: 'DATA INTELLIGENCE',
    icon: '🕸️',
    name: 'UNLIMITED DATA SCRAPER',
    desc: 'Extract structured data from any website, marketplace, or platform at unlimited scale. Built for business intelligence, market research, and lead enrichment pipelines.',
    features: ['Multi-source parallel scraping', 'Export CSV / Sheets / JSON / DB', 'Scheduled automated runs', 'Anti-bot bypass systems'],
    accentColor: 'rgba(0, 245, 192, 0.12)'
  },
  {
    tag: 'SOCIAL AUTOMATION',
    icon: '📱',
    name: 'SOCIAL MEDIA MANAGER AUTOMATION',
    desc: 'AI-powered agent that schedules posts, monitors engagement, auto-replies to comments, and generates performance reports across all platforms on autopilot.',
    features: ['Multi-platform content scheduling', 'Auto-reply AI agents', 'Monthly analytics reports', 'Content calendar management'],
    accentColor: 'rgba(188, 19, 254, 0.1)'
  },
  {
    tag: 'EMAIL ENGINE',
    icon: '⚡',
    name: 'UNLIMITED AUTO MAIL SENDER',
    desc: 'Enterprise-grade email dispatch engine for unlimited sequences to segmented contact lists with smart throttling, open tracking, and deliverability optimization.',
    features: ['Unlimited contact lists', 'Drip sequence builder', 'Open & click tracking', 'Deliverability optimization'],
    accentColor: 'rgba(255, 165, 0, 0.08)'
  }
];

export const PageServices: React.FC<PageServicesProps> = ({ isOpen, onClose, onLogoClick }) => {
  const [activeService, setActiveService] = useState(0);
  const svc = SERVICES[activeService];

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
        {/* Header */}
        <div className="page-label" style={{ letterSpacing: '0.3em', marginBottom: '32px' }}>[ DEPLOYMENT SERVICES ]</div>
        <h1 className="page-h1" style={{ letterSpacing: '-0.01em', marginBottom: '45px' }}>
          WHAT WE<br />
          <span className="page-h1-stroke">BUILD</span><br />
          FOR YOU.
        </h1>

        {/* Services Navigator */}
        <div className="page-services-layout" style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>

          {/* Left Nav */}
          <div className="page-services-nav" style={{ minWidth: '220px', flex: '0 0 220px' }}>
            {SERVICES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveService(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  width: '100%',
                  padding: '18px 0',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  fontFamily: 'Space Mono',
                  fontSize: '0.65rem',
                  color: activeService === idx ? '#0ff5c0' : 'rgba(255,255,255,0.25)',
                  transition: 'color 0.2s',
                  minWidth: '22px'
                }}>{s.number}</span>
                <span style={{
                  fontFamily: 'Bebas Neue',
                  fontSize: '1rem',
                  color: activeService === idx ? '#fff' : 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.06em',
                  transition: 'color 0.2s',
                }}>{s.label}</span>
                {activeService === idx && (
                  <span style={{ marginLeft: 'auto', color: '#0ff5c0', fontSize: '0.7rem' }}>→</span>
                )}
              </button>
            ))}

            <div style={{ marginTop: '32px' }}>
              <a
                href="https://wa.me/918076129170"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#0ff5c0',
                  color: '#000',
                  padding: '14px 24px',
                  fontFamily: 'Space Mono',
                  fontWeight: 'bold',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  transition: 'background 0.2s'
                }}
              >
                START PROJECT →
              </a>
            </div>
          </div>

          {/* Right Detail Panel */}
          <div className="page-services-detail" style={{
            flex: '1 1 400px',
            background: 'rgba(255,255,255,0.018)',
            border: '1px solid rgba(255,255,255,0.06)',
            padding: '36px',
            borderRadius: '4px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Accent glow */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #0ff5c0, transparent)',
              opacity: 0.6
            }} />

            <div style={{ fontFamily: 'Space Mono', fontSize: '0.65rem', color: '#0ff5c0', letterSpacing: '0.1em', marginBottom: '12px' }}>
              {svc.number} / 05
            </div>
            <h2 style={{
              fontFamily: 'Bebas Neue',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              color: '#fff',
              letterSpacing: '0.04em',
              margin: '0 0 6px 0',
              lineHeight: 1.1
            }}>{svc.label}</h2>
            <div style={{ fontFamily: 'Space Mono', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', marginBottom: '20px' }}>
              {svc.tagline}
            </div>
            <p style={{ fontFamily: 'Space Mono', fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, letterSpacing: '0.04em', margin: '0 0 28px 0', textTransform: 'uppercase' }}>
              {svc.desc}
            </p>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0 0 24px 0' }} />

            {/* Deliverables */}
            <div style={{ fontFamily: 'Space Mono', fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em', marginBottom: '14px' }}>
              SYSTEM DELIVERABLES
            </div>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px', padding: 0, listStyle: 'none', marginBottom: '28px' }}>
              {svc.deliverables.map((d, i) => (
                <li key={i} style={{ fontFamily: 'Space Mono', fontSize: '0.65rem', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.04em', lineHeight: 1.5 }}>
                  <span style={{ color: '#0ff5c0', marginRight: '8px' }}>—</span>{d}
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0 0 24px 0' }} />

            {/* Outcomes */}
            <div style={{ fontFamily: 'Space Mono', fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em', marginBottom: '14px' }}>
              TARGET OUTCOMES
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {svc.outcomes.map((o, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  padding: '8px 14px',
                  borderRadius: '30px',
                  fontFamily: 'Space Mono',
                  fontSize: '0.62rem',
                  color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '0.04em'
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0ff5c0', display: 'inline-block', flexShrink: 0 }} />
                  {o}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automation Products Section */}
        <div style={{ marginTop: '60px', paddingTop: '50px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontFamily: 'Space Mono', fontSize: '0.6rem', color: '#0ff5c0', letterSpacing: '0.25em', marginBottom: '6px' }}>
            [ POWER TOOLS ]
          </div>
          <div style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', color: '#fff', letterSpacing: '0.04em', marginBottom: '30px' }}>
            AI AUTOMATION PRODUCTS
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {AUTOMATION_PRODUCTS.map((product) => (
              <div key={product.name} style={{
                background: product.accentColor,
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '30px',
                borderRadius: '4px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(0,245,192,0.4), transparent)'
                }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div style={{ fontFamily: 'Space Mono', fontSize: '0.6rem', color: '#0ff5c0', letterSpacing: '0.15em' }}>{product.tag}</div>
                  <span style={{ fontSize: '1.5rem' }}>{product.icon}</span>
                </div>
                <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.3rem', color: '#fff', letterSpacing: '0.04em', margin: '0 0 12px 0', lineHeight: 1.1 }}>
                  {product.name}
                </h3>
                <p style={{ fontFamily: 'Space Mono', fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {product.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {product.features.map((f) => (
                    <li key={f} style={{ fontFamily: 'Space Mono', fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>
                      <span style={{ color: '#0ff5c0', marginRight: '8px' }}>—</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="page-footer-row" style={{ marginTop: '50px' }}>
          <div className="page-footer-text">SEPEINT · BANGALORE, INDIA</div>
          <a
            href="https://wa.me/918076129170"
            target="_blank"
            rel="noopener noreferrer"
            className="page-footer-text"
            style={{ color: '#0ff5c0', textDecoration: 'none' }}
          >
            WHATSAPP US →
          </a>
        </div>
      </div>
    </div>
  );
};
