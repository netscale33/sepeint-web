import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ThreeBackground } from './components/ThreeBackground';
import { Header } from './components/Header';
import { SidebarNav } from './components/SidebarNav';
import { MenuPanel } from './components/MenuPanel';
import { ContentSections } from './components/ContentSections';
import { ClientsPanel } from './components/ClientsPanel';

import { PageOrigin } from './pages/PageOrigin';
import { PageAbout } from './pages/PageAbout';
import { PageServices } from './pages/PageServices';
import { PageUseCases } from './pages/PageUseCases';
import { PageContact } from './pages/PageContact';
import { PagePrivacy } from './pages/PagePrivacy';
import { PageTerms } from './pages/PageTerms';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

const ANCHOR_MAP: Record<string, number> = {
  'origin-intro': 0.0,
  'origin-company': 0.094,
  'origin-services': 0.169,
  'about-intro': 0.305,
  'about-vision': 0.384,
  'about-essence': 0.431,
  'services-intro': 0.564,
  'services-stats': 0.631,
  'services-tunnel': 0.681,
  'usecases-intro': 0.812,
  'usecases-projects': 0.849,
  'contact-details': 0.971,
};

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [progressPercent, setProgressPercent] = useState(0);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Disable or enable main body scroll depending on if a page is open or loading
    if (activePage || loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activePage, loading]);

  useEffect(() => {
    const handleClickedUseCase = (e: Event) => {
      const customEvent = e as CustomEvent;
      const projectId = customEvent.detail?.arg;
      if (projectId) {
        const projectUrls: Record<string, string> = {
          'emerson': 'https://emerson.com',
          'mastercard': 'https://mastercard.com',
          'nike': 'https://nike.com',
          'kfc-loyalty': 'https://kfc.com',
          'de-rigo': 'https://derigo.com',
          'sara-assicurazioni': 'https://sara.it',
          'tmov': 'https://tmov.it',
          'italo-cescon': 'https://cescon.it',
          'promotica': 'https://promotica.it',
          'subaru': 'https://subaru.it',
          'reebok': 'https://reebok.com',
          'areas': 'https://areas.it',
          'rubensluciano': 'https://rubensluciano.com',
          'bruno-presezzi': 'https://brunopresezzi.com',
          'grana-padano': 'https://granapadano.it',
          'piacenti': 'https://piacenti.org',
          'omron': 'https://omron.com',
          'safe': 'https://safe.it',
          'kfc-ai': 'https://kfc.com',
          'mavive': 'https://mavive.com',
          'flatman': 'https://flatman.it',
          'noleggio-lorini': 'https://lorini.it',
          'cuzziol-grandivini': 'https://cuzziolgrandivini.it',
          'geopietra': 'https://geopietra.it',
          'italmill': 'https://italmill.it',
          'mu-burger': 'https://muburger.it',
        };
        const targetUrl = projectUrls[projectId] || `https://example.com/${projectId}`;
        window.open(targetUrl, '_blank');
      }
    };

    window.addEventListener('ClickedUseCase', handleClickedUseCase);
    return () => {
      window.removeEventListener('ClickedUseCase', handleClickedUseCase);
    };
  }, []);

  const handleLoadComplete = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => setContentReady(true), 700);
    }, 400);
  };

  useEffect(() => {
    if (!contentReady) return;

    const milestones = Object.values(ANCHOR_MAP).sort((a, b) => a - b);

    const trigger = ScrollTrigger.create({
      trigger: '.scroll-height-dummy',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.2,
      onUpdate: (self) => {
        const prog = self.progress;
        // Find the closest active milestone value
        let activeVal = 0;
        for (let i = 0; i < milestones.length; i++) {
          if (prog >= milestones[i]) {
            activeVal = milestones[i];
          }
        }
        setScrollProgress((prev) => {
          if (Math.abs(prev - activeVal) > 0.001) {
            return activeVal;
          }
          return prev;
        });
      }
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      trigger.kill();
      clearTimeout(timer);
    };
  }, [contentReady]);

  const handleAnchorClick = (anchorId: string) => {
    // Reset page panels if clicking the logo to go home
    if (anchorId === 'origin-intro') {
      setActivePage(null);
    }

    const targetProgress = ANCHOR_MAP[anchorId] ?? 0;
    
    // Calculate final scrollable pixel value
    const scrollableRange = document.documentElement.scrollHeight - window.innerHeight;
    const targetScrollTop = targetProgress * scrollableRange;

    window.scrollTo({
      top: targetScrollTop,
      behavior: anchorId === 'origin-intro' ? 'auto' : 'smooth'
    });
  };

  return (
    <>
      {/* Loading Mobius overlay — always in DOM to prevent flash */}
      <div className={`mobius-loader-overlay ${loading ? '' : 'hidden'}`}>
        <div className="mobius-loader-container">
          <div className="mobius-loader-ring-1" />
          <div className="mobius-loader-ring-2" />
          <div className="mobius-loader-dot" />
        </div>
        <div className="mobius-loader-text" style={{ fontSize: '0.75rem', letterSpacing: '0.25em' }}>
          {progressPercent < 50 ? "GOOD THINGS TAKE TIME" : "ENTERING IN ANOTHER WORLD"}
        </div>
        <div className="mobius-loader-subtitle" style={{ fontFamily: 'Space Mono', fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', marginTop: '8px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          {progressPercent < 25 && "INITIALIZING SYSTEM DYNAMICS..."}
          {progressPercent >= 25 && progressPercent < 50 && "CONNECTING CLOUD DATABASES..."}
          {progressPercent >= 50 && progressPercent < 75 && "COMPILING HIGH-CONTRAST TEXT SEGMENTS..."}
          {progressPercent >= 75 && "LAUNCHING SEPEINT UNIVERSE..."}
        </div>
        <div id="unity-progress-percent" className="mobius-loader-percent">{progressPercent}%</div>
        <div style={{ width: '200px', height: '2px', background: '#111', marginTop: '15px', overflow: 'hidden', borderRadius: '1px', border: '1px solid #222' }}>
          <div id="unity-progress-bar-full" style={{ width: `${progressPercent}%`, height: '100%', background: 'linear-gradient(90deg, #d946ef, #0ff5c0)', transition: 'width 0.2s' }} />
        </div>
      </div>

      {/* WebGL Canvas */}
      <ThreeBackground onLoadComplete={handleLoadComplete} onProgress={setProgressPercent} />

      <div className={`content-wrapper ${loading ? '' : 'visible'}`} style={{ opacity: loading ? 0 : undefined }}>
        {/* Persistent Navigation Layer */}
        <Header isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} onAnchorClick={handleAnchorClick} />

        {/* Menu Drawer */}
        <MenuPanel
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onPageSelect={(page) => setActivePage(page)}
        />

        {/* Interactive Sidebar Indicators */}
        <SidebarNav scrollProgress={scrollProgress} onAnchorClick={handleAnchorClick} />

        {/* Content sections overlays */}
        <ContentSections scrollProgress={scrollProgress} />



        {/* Bottom drawers */}
        <ClientsPanel onOpenPortfolio={() => setActivePage('usecases')} />

        {/* Floating direct WhatsApp trigger */}
        <a 
          className="chatbot-btn" 
          href="https://wa.me/918076129170?text=Hi%20Sepeint!%20I%20want%20to%20get%20in%20touch."
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
        >
          <span className="chatbot-icon" />
          <span>REACH US</span>
        </a>
      </div>

      {/* Separate Pages (Themed Overlay Panels) */}
      <PageOrigin isOpen={activePage === 'origin'} onClose={() => setActivePage(null)} onLogoClick={() => handleAnchorClick('origin-intro')} />
      <PageAbout isOpen={activePage === 'about'} onClose={() => setActivePage(null)} onLogoClick={() => handleAnchorClick('origin-intro')} />
      <PageServices isOpen={activePage === 'services'} onClose={() => setActivePage(null)} onLogoClick={() => handleAnchorClick('origin-intro')} />
      <PageUseCases isOpen={activePage === 'usecases'} onClose={() => setActivePage(null)} onLogoClick={() => handleAnchorClick('origin-intro')} />
      <PageContact isOpen={activePage === 'contact'} onClose={() => setActivePage(null)} onLogoClick={() => handleAnchorClick('origin-intro')} />
      <PagePrivacy isOpen={activePage === 'privacy'} onClose={() => setActivePage(null)} onLogoClick={() => handleAnchorClick('origin-intro')} />
      <PageTerms isOpen={activePage === 'terms'} onClose={() => setActivePage(null)} onLogoClick={() => handleAnchorClick('origin-intro')} />

      {/* Scroll Dummy Track to activate scroll events */}
      <div className="scroll-height-dummy" />

      {/* Contact WhatsApp badge */}
      <a 
        className="awwwards-badge" 
        href="https://wa.me/918076129170?text=Hi%20Sepeint!%20I%20want%20to%20get%20in%20touch%20for%20a%20project%20audit." 
        target="_blank" 
        rel="noopener noreferrer"
      >
        LET'S CONNECT
      </a>
    </>
  );
}

export default App;
