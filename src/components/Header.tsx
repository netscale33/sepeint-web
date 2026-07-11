import React from 'react';

interface HeaderProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onAnchorClick: (anchor: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, onMenuToggle, onAnchorClick }) => {
  return (
    <header className="site-header">
      <a href="#origin" className="logo-link" onClick={(e) => { e.preventDefault(); onAnchorClick('origin-intro'); }}>
        SEPEINT
      </a>

      <button className="menu-toggle-btn" onClick={onMenuToggle}>
        {isMenuOpen ? 'CLOSE' : 'MENU'} <span className="menu-dot" />
      </button>
    </header>
  );
};
