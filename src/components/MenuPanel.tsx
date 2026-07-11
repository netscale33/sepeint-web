import React, { useState } from 'react';

interface MenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onPageSelect: (pageId: string) => void;
}

interface MenuItemInfo {
  label: string;
  target: string;
  bgUrl: string;
}

const MENU_ITEMS: MenuItemInfo[] = [
  {
    label: 'ORIGIN',
    target: 'origin',
    bgUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop'
  },
  {
    label: 'ABOUT',
    target: 'about',
    bgUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
  },
  {
    label: 'SERVICES',
    target: 'services',
    bgUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop'
  },
  {
    label: 'PORTFOLIO',
    target: 'usecases',
    bgUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop'
  },
  {
    label: 'CONTACT',
    target: 'contact',
    bgUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop'
  }
];

export const MenuPanel: React.FC<MenuPanelProps> = ({ isOpen, onClose, onPageSelect }) => {
  const [hoveredBg, setHoveredBg] = useState<string>('');

  const handleLinkClick = (target: string) => {
    if (target === 'usecases') {
      window.open(
        'https://wa.me/918076129170?text=Hi%20Sepeint!%20I%20want%20to%20get%20in%20touch%20for%20a%20project%20audit.',
        '_blank',
        'noopener,noreferrer'
      );
    } else {
      onPageSelect(target);
    }
    onClose();
  };

  return (
    <div className={`menu-panel ${isOpen ? 'open' : ''}`}>
      {/* Background preview based on hovered menu item */}
      <div 
        className="menu-bg-preview"
        style={{ 
          backgroundImage: hoveredBg ? `url(${hoveredBg})` : 'none',
          opacity: hoveredBg ? 0.25 : 0 
        }}
      />

      <div className="menu-panel-content">
        <ul className="menu-links">
          {MENU_ITEMS.map((item) => (
            <li 
              key={item.target}
              className="menu-item"
              onMouseEnter={() => setHoveredBg(item.bgUrl)}
              onMouseLeave={() => setHoveredBg('')}
            >
              <a 
                href={`#${item.target}`}
                className="menu-link-anchor"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.target);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <span className="menu-company-profile" style={{ opacity: 0.5, cursor: 'default' }}>
              COMPANY PROFILE
            </span>
          </li>
        </ul>

        <div className="menu-footer">
          <div className="menu-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">LN</a>
            <a href="https://instagram.com/growzivo" target="_blank" rel="noopener noreferrer" className="social-btn">IG</a>
          </div>

          <div className="menu-policies">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); onPageSelect('privacy'); onClose(); }}>PRIVACY POLICY</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); onPageSelect('terms'); onClose(); }}>TERMS OF SERVICE</a>
          </div>

          <div className="menu-address">
            SEPEINT &bull; BANGALORE, INDIA
          </div>
        </div>
      </div>
    </div>
  );
};
