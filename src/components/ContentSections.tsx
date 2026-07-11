import React, { useEffect, useRef, useState } from 'react';

interface ContentSectionsProps {
  scrollProgress: number;
}

const EXPERTISE = [
  {
    category: 'WEB DEVELOPMENT',
    desc: 'Custom web architectures built for speed, responsiveness, and premium UX/UI.',
    pills: ['React / Next.js / Vue', 'Full-Stack SaaS Portals', 'Headless CMS Systems', 'E-Commerce Engines']
  },
  {
    category: 'APP DEVELOPMENT',
    desc: 'Native and hybrid mobile applications built for seamless cross-platform performance.',
    pills: ['iOS & Android Apps', 'React Native / Flutter', 'Interactive Prototyping', 'Real-Time Apps']
  },
  {
    category: 'AI AUTOMATION',
    desc: 'Intelligent automation systems that eliminate bottlenecks and multiply operational efficiency.',
    pills: ['Custom AI Agents & Bots', 'n8n & Zapier Pipelines', 'LLM Integrations', 'Automated Workflows']
  },
  {
    category: 'MARKETING & GROWTH',
    desc: 'Performance marketing across every major channel — Meta, Google, Email, WhatsApp, Social Media and beyond.',
    pills: ['Meta & Google Ads', 'Email & WhatsApp Marketing', 'Social Media Management', 'Landing Pages & CRO']
  }
];

const PROCESS = [
  {
    step: '01',
    title: 'Discovery & Scope',
    time: '1-2 Days',
    desc: 'We audit your existing software ecosystem, architecture, and workflows to pinpoint scalability bottlenecks and automation opportunities.',
    outputs: ['Software stack audit', 'Workflow diagnostics', 'Tech recommendations', 'Project roadmap']
  },
  {
    step: '02',
    title: 'Architecture & Design',
    time: '3-5 Days',
    desc: 'We design modern UI/UX prototypes, database schemas, integration pipelines, and AI agent logic tailored to your operational goals.',
    outputs: ['UI/UX mockup design', 'System architecture schema', 'API specs mapping', 'Milestone breakdown']
  },
  {
    step: '03',
    title: 'Rapid Development',
    time: 'Sprint-based',
    desc: 'Our engineers build in rapid iterations, delivering clean, tested code and integrating APIs, payment flows, and automated systems.',
    outputs: ['Clean frontend & backend', 'Custom database setups', 'API & SaaS integrations', 'Weekly dev updates']
  },
  {
    step: '04',
    title: 'Launch & Optimize',
    time: 'Ongoing',
    desc: 'We manage deployment, set up performance monitoring, and continuously optimize database speeds, workflow triggers, and features.',
    outputs: ['Production deployment', 'Post-launch support', 'API sync monitoring', 'Database scaling']
  }
];

const INDUSTRIES = [
  'SaaS & Tech', 'E-Commerce', 'Logistics', 'Healthcare', 'EdTech',
  'FinTech', 'Real Estate', 'Food Delivery', 'Travel Platforms', 'LegalTech',
  'B2B Enterprise', 'Gaming Systems'
];

const RESULTS = [
  {
    metric: '+312%',
    label: 'ROAS IMPROVEMENT',
    context: 'StyleHive — UK',
    desc: 'Meta Ads architecture, creative A/B testing, and precision audience layering strategy'
  },
  {
    metric: '6 WKS',
    label: 'SAAS MVP SHIPPED',
    context: 'AppNest — India',
    desc: 'Cross-platform React Native app from wireframe to App Store & Play Store production'
  },
  {
    metric: '25 HRS',
    label: 'SAVED WEEKLY',
    context: 'SaaSBridge — USA',
    desc: 'n8n + Claude AI pipeline replacing manual CRM sync, ticket routing, and operations'
  }
];

const FAQS = [
  {
    q: "What technologies does Sepeint specialize in?",
    a: "We work with modern stacks including React, Next.js, Node.js, Python, PostgreSQL, and AWS, along with standard automation platforms like n8n and Zapier."
  },
  {
    q: "How fast can you develop a custom SaaS platform?",
    a: "Most MVP builds take 4 to 8 weeks depending on complexity. We focus on launching quickly so you can start validating features with actual users."
  },
  {
    q: "Do you integrate with existing databases and legacy software?",
    a: "Yes. We build custom API layers and middleware systems to sync databases, CRMs, ERPs, and legacy applications seamlessly."
  },
  {
    q: "Can you build custom AI models or just standard integrations?",
    a: "We build custom LLM pipelines, autonomous AI agents, and RAG systems tailored to your company's data and workflows."
  }
];

const BLOGS = [
  {
    category: "🤖 AI AGENTS",
    date: "Jun 16",
    title: "How to Build Custom n8n AI Agents for Business Operations",
    desc: "A complete developer's guide to creating automated AI pipelines to triage emails, draft documents, and sync CRM records."
  },
  {
    category: "💻 NEXT.JS",
    date: "Jun 14",
    title: "Optimizing SaaS Platform Load Speeds: Next.js Best Practices",
    desc: "Learn server component strategies, edge middleware rules, and API routes designs to get sub-second load times."
  },
  {
    category: "🔗 INTEGRATIONS",
    date: "Jun 12",
    title: "Stripe Subscriptions & Webhooks: Bulletproof Database Sync",
    desc: "Avoid sync issues. Build a secure, scalable webhook receiver to keep customer access permissions aligned in real-time."
  }
];

interface OverlayDef {
  id?: string;
  pos: 'left' | 'right' | 'center';
  enter: number;
  exit: number;
  h2?: string;
  p?: string | string[];
  children?: React.ReactNode;
}

/* ─── Channels Section ─── */
const ChannelsSection: React.FC = () => {
  return (
    <div className="channels-grid">
      {EXPERTISE.map((item, idx) => (
        <div key={idx} className="channels-grid-col">
          <div className="channels-grid-title">{item.category}</div>
          <p className="channels-grid-desc">{item.desc}</p>
          <ul className="channels-grid-list">
            {item.pills.map((pill, pIdx) => (
              <li key={pIdx} className="channels-grid-item">— {pill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

/* ─── Contact Section ─── */
const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open(`mailto:contact.sepeint@gmail.com?subject=Inquiry&body=Hello, please contact me at ${email} regarding custom development.`);
      setEmail('');
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-cta-grid">
        <a
          href="https://wa.me/918076129170"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-cta-card"
        >
          <div className="contact-cta-card-inner">
            <div className="contact-cta-title">TALK TO US</div>
            <div className="contact-cta-sub">[ WhatsApp Chat ]</div>
          </div>
          <div className="contact-cta-arrow">→</div>
        </a>
        <a
          href="mailto:contact.sepeint@gmail.com"
          className="contact-cta-card"
        >
          <div className="contact-cta-card-inner">
            <div className="contact-cta-title">REACH US</div>
            <div className="contact-cta-sub">[ Email Inquiry ]</div>
          </div>
          <div className="contact-cta-arrow">→</div>
        </a>
      </div>

      <div className="contact-keep-in-touch">
        <div className="contact-kit-label">Keep In Touch</div>
        <form className="contact-kit-form" onSubmit={handleEmailSubmit}>
          <input
            type="email"
            className="contact-kit-input"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="contact-kit-submit">→</button>
        </form>
      </div>
    </div>
  );
};

/* ─── Main Component ─── */
export const ContentSections: React.FC<ContentSectionsProps> = () => {
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);
  const roasRef = useRef<HTMLDivElement>(null);
  const retentionRef = useRef<HTMLDivElement>(null);
  const launchRef = useRef<HTMLDivElement>(null);

  const statsAnimated = useRef(false);

  const animateStats = () => {
    let clients = 0;
    let roas = 0;
    let retention = 0;
    let launch = 0;

    const interval = setInterval(() => {
      clients = Math.min(clients + 2, 50);
      roas = Math.min(roas + 10, 340);
      retention = Math.min(retention + 2, 98);
      launch = Math.min(launch + 2, 48);

      if (clientsRef.current) clientsRef.current.textContent = `${clients}+`;
      if (roasRef.current) roasRef.current.textContent = `${roas}%`;
      if (retentionRef.current) retentionRef.current.textContent = `${retention}%`;
      if (launchRef.current) launchRef.current.textContent = `${launch}hr`;

      if (clients === 50 && roas === 340 && retention === 98 && launch === 48) {
        clearInterval(interval);
      }
    }, 20);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

      const children = containerRef.current.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        const enter = parseFloat(child.dataset.enter || '0');
        const exit = parseFloat(child.dataset.exit || '0');

        const inRange = progress >= enter && progress < exit;
        const pastEnd = progress >= exit;

        if (inRange) {
          child.classList.add('visible');
          child.classList.remove('afterScroll');
        } else if (pastEnd) {
          child.classList.remove('visible');
          child.classList.add('afterScroll');
        } else {
          child.classList.remove('visible');
          child.classList.remove('afterScroll');
        }
      }

      // Stats trigger logic
      if (progress >= 0.35 && progress < 0.50) {
        if (!statsAnimated.current) {
          statsAnimated.current = true;
          animateStats();
        }
      } else {
        if (statsAnimated.current) {
          statsAnimated.current = false;
          if (clientsRef.current) clientsRef.current.textContent = '0+';
          if (roasRef.current) roasRef.current.textContent = '0%';
          if (retentionRef.current) retentionRef.current.textContent = '0%';
          if (launchRef.current) launchRef.current.textContent = '0hr';
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set state correctly
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const overlays: OverlayDef[] = [
    // --- INTRO ---
    { pos: 'center', enter: 240 / 12767, exit: 390 / 12767, h2: 'WE ENGINEER HIGH-PERFORMANCE\nSOFTWARE & WORKFLOWS' },
    { pos: 'center', enter: 400 / 12767, exit: 550 / 12767, p: 'Full stack execution, zero compromise. We build scalable web platforms, automate complex operations, and design premium SaaS architectures.' },
    { pos: 'right', enter: 685 / 12767, exit: 835 / 12767, h2: 'DEVELOP BEFORE YOU RUN', p: 'Focusing on robust architecture, clean codebase, and modern APIs to build high-performance products.' },
    { pos: 'right', enter: 950 / 12767, exit: 1100 / 12767, h2: 'THE TECH PARTNER\nBUILT TO EXECUTE', p: 'Sepeint was born with a single obsession: to code, automate, and build products faster and more robustly than standard dev teams.' },
    { pos: 'center', enter: 1430 / 12767, exit: 1580 / 12767, h2: 'IMPROVE YOUR\nPERSPECTIVE' },
    { pos: 'center', enter: 1600 / 12767, exit: 1750 / 12767, p: "From early startups to scaling enterprises, we build scalable web architectures, custom APIs, and AI integrations." },
    { pos: 'right', enter: 2070 / 12767, exit: 2200 / 12767, h2: 'RHYTHM IN CODE.\nORDER IN OPERATION.', p: 'All platforms. Custom logic. We navigate engineering complexity to build structured software systems.' },

    // --- CHANNELS ---
    {
      pos: 'center', enter: 2160 / 12767, exit: 3260 / 12767, h2: 'WHAT WE DO',
      children: <ChannelsSection />
    },

    // --- ABOUT ---
    {
      pos: 'center', enter: 3890 / 12767, exit: 4150 / 12767,
      h2: 'SEPEINT:\nBUILT TO EXECUTE',
      p: 'We build fast, scalable, and premium web apps, native apps, software integrations, and workflow automations tailored for modern tech companies.'
    },
    {
      pos: 'center', enter: 4351 / 12767, exit: 4800 / 12767, h2: 'FROM SCOPE TO\nPRODUCTION',
      children: (
        <div className="process-grid">
          {PROCESS.map((p, idx) => (
            <div key={idx} className="process-step-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontFamily: 'Space Mono', letterSpacing: '0.1em' }}>{p.step}</span>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', fontFamily: 'Space Mono' }}>{p.time}</span>
              </div>
              <h4 style={{ color: '#fff', marginBottom: '10px', fontFamily: 'Bebas Neue', fontSize: '1.2rem', letterSpacing: '-0.02em' }}>{p.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', lineHeight: 1.6, marginBottom: '15px' }}>{p.desc}</p>
              <div className="process-step-outputs" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px' }}>
                {p.outputs.map((out, oIdx) => (
                  <div key={oIdx} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', marginBottom: '4px', letterSpacing: '0.05em' }}>— {out}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    },

    // --- STATS ---
    {
      pos: 'center', enter: 4900 / 12767, exit: 5350 / 12767, h2: 'ENGINEERING\nMETRICS',
      children: (
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number" ref={clientsRef}>0+</div>
            <div className="stat-label">Product Deployments</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" ref={roasRef}>0%</div>
            <div className="stat-label">Development Speedup</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" ref={retentionRef}>0%</div>
            <div className="stat-label">Client Retention Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" ref={launchRef}>0hr</div>
            <div className="stat-label">Avg Integration Speed</div>
          </div>
        </div>
      )
    },

    // --- INDUSTRIES ---
    {
      id: 'industries-empower',
      pos: 'center', enter: 5500 / 12767, exit: 6000 / 12767, h2: 'INDUSTRIES WE EMPOWER',
      children: (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '30px' }}>
          {INDUSTRIES.map((ind, idx) => (
            <span key={idx} style={{
              padding: '10px 20px',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(0,0,0,0.68)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              fontFamily: 'Space Mono',
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              borderRadius: '2px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              transition: 'all 0.2s ease'
            }}>{ind}</span>
          ))}
        </div>
      )
    },

    // --- RESULTS ---
    {
      pos: 'center', enter: 6140 / 12767, exit: 7100 / 12767, h2: 'RESULTS WE DELIVER',
      children: (
        <div className="results-grid-container">
          {RESULTS.map((item, idx) => (
            <div key={idx} className="results-card">
              <div style={{ color: '#0ff5c0', fontFamily: 'Bebas Neue', fontSize: 'clamp(2.8rem, 4vw, 3.8rem)', letterSpacing: '0.02em', marginBottom: '8px', lineHeight: 1 }}>{item.metric}</div>
              <div style={{ color: '#fff', fontFamily: 'Space Mono', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.2em', marginBottom: '10px', textTransform: 'uppercase' }}>{item.label}</div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Space Mono', fontSize: '0.6rem', marginBottom: '16px', letterSpacing: '0.05em' }}>{item.context}</div>
              <p className="results-card-desc" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', lineHeight: 1.7, margin: 0, fontFamily: 'Space Mono', textTransform: 'uppercase' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      )
    },

    // --- SERVICES CTA ---
    { pos: 'center', enter: 7200 / 12767, exit: 8000 / 12767, h2: 'WHERE CODE AND\nOPERATIONS ALIGN' },
    {
      pos: 'left', enter: 8060 / 12767, exit: 8600 / 12767, h2: 'BUILD ROBUST PRODUCTS FASTER',
      children: (
        <>
          <p style={{ marginBottom: '30px', color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', lineHeight: 1.7 }}>
            Bring your web development, mobile apps, and custom integrations to production with our senior engineering team.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              style={{ background: '#0ff5c0', color: '#000', border: 'none', padding: '14px 28px', fontWeight: 'bold', fontFamily: 'Space Mono', cursor: 'pointer', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.75rem', borderRadius: '2px' }}
              onClick={() => document.getElementById('contact-details')?.scrollIntoView({ behavior: 'smooth' })}
            >
              START DEVELOPMENT
            </button>
            <a
              href="https://wa.me/918076129170"
              target="_blank"
              rel="noopener noreferrer"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '14px 28px', textDecoration: 'none', fontWeight: 'bold', letterSpacing: '0.08em', fontSize: '0.75rem', fontFamily: 'Space Mono', textTransform: 'uppercase', borderRadius: '2px' }}
            >
              WHATSAPP US
            </a>
          </div>
        </>
      )
    },

    // --- FAQS ---
    {
      pos: 'center', enter: 8690 / 12767, exit: 9350 / 12767, h2: 'ENGINEERING FAQS',
      children: (
        <div style={{ marginTop: '30px', textAlign: 'left', width: '100%' }}>
          {FAQS.map((faq, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', padding: '16px 0', color: '#fff', fontFamily: 'Space Mono', fontSize: '0.75rem', letterSpacing: '0.03em', lineHeight: 1.5 }}
                onClick={() => setActiveFaqIdx(activeFaqIdx === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <span style={{ marginLeft: '20px', flexShrink: 0, color: 'rgba(255,255,255,0.5)' }}>{activeFaqIdx === idx ? '−' : '+'}</span>
              </div>
              {activeFaqIdx === idx && (
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', lineHeight: 1.7, paddingBottom: '16px' }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      )
    },

    // --- BLOGS ---
    {
      pos: 'center', enter: 9480 / 12767, exit: 10200 / 12767, h2: 'LATEST INSIGHTS\n& DEVELOPER GUIDES',
      children: (
        <div className="insights-grid-container">
          {BLOGS.map((blog, idx) => (
            <div key={idx} className="insights-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#0ff5c0', marginBottom: '12px', fontSize: '0.65rem', fontFamily: 'Space Mono', letterSpacing: '0.05em' }}>
                <span>{blog.category}</span>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>{blog.date}</span>
              </div>
              <h4 style={{ color: '#fff', marginBottom: '10px', fontFamily: 'Bebas Neue', fontSize: '1.2rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{blog.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', lineHeight: 1.6 }}>{blog.desc}</p>
            </div>
          ))}
        </div>
      )
    },

    // --- CLOSING ---
    {
      pos: 'center', enter: 10370 / 12767, exit: 12300 / 12767,
      h2: 'PERSPECTIVE,\nPERCEPTION, FUTURE',
    },

    // --- CONTACT ---
    {
      id: 'contact-details',
      pos: 'center',
      enter: 12400 / 12767,
      exit: 2.00,
      h2: "LET'S BUILD SOMETHING\nUNSTOPPABLE",
      children: (
        <>
          <div className="contact-details-grid">
            <div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', fontFamily: 'Space Mono', letterSpacing: '0.15em', marginBottom: '8px' }}>HEADQUARTERS</div>
              <p style={{ textTransform: 'none', color: '#fff', fontFamily: 'Space Mono', fontSize: '0.75rem', lineHeight: 1.6 }}>SEPEINT<br />Bangalore, India</p>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem', fontFamily: 'Space Mono', letterSpacing: '0.15em', marginBottom: '8px' }}>INQUIRIES</div>
              <p style={{ textTransform: 'none', color: '#fff', fontFamily: 'Space Mono', fontSize: '0.75rem', lineHeight: 1.6 }}>contact.sepeint@gmail.com<br />+91 80761 29170</p>
            </div>
          </div>
          <ContactSection />
        </>
      )
    }
  ];

  return (
    <div ref={containerRef}>
      {overlays.map((o, i) => (
        <div
          key={i}
          id={o.id}
          className={`scroll-overlay-text ${o.pos}`}
          data-enter={o.enter}
          data-exit={o.exit}
        >
          {o.h2 && <h2 style={{ whiteSpace: 'pre-line' }}>{o.h2}</h2>}
          {o.p && (Array.isArray(o.p) ? o.p.map((t, j) => <p key={j}>{t}</p>) : <p>{o.p}</p>)}
          {o.children}
        </div>
      ))}
    </div>
  );
};
