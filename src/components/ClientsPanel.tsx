import React from 'react';

interface ClientsPanelProps {
  onOpenPortfolio: () => void;
}

export const ClientsPanel: React.FC<ClientsPanelProps> = ({ onOpenPortfolio }) => {
  return (
    <div
      className="clients-marquee-trigger"
      onClick={onOpenPortfolio}
      style={{ cursor: 'pointer' }}
      role="button"
      aria-label="Explore Portfolio"
    >
      <div className="clients-trigger-line" />
      <span style={{ display: 'flex', alignItems: 'center', gap: '12px', letterSpacing: '0.12em' }}>
        <span style={{ color: '#0ff5c0', animation: 'pulse-dot 1.5s infinite' }}>●</span>
        EXPLORE PORTFOLIO — OUR WORK & SYSTEMS
        <span style={{ color: '#0ff5c0' }}>→</span>
      </span>
      <div className="clients-trigger-line" />
    </div>
  );
};
