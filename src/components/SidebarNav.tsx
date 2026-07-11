import React from 'react';

interface SidebarNavProps {
  scrollProgress: number;
  onAnchorClick: (anchor: string) => void;
}

interface SectionInfo {
  id: string;
  name: string;
  desc: string;
  progressStart: number;
  progressEnd: number;
  subitems: { name: string; target: string; progress: number }[];
}

const SECTIONS: SectionInfo[] = [
  {
    id: 'origin',
    name: 'ORIGIN',
    desc: 'Custom software & tech development. Web architectures, native apps, and automation workflows.',
    progressStart: 0,
    progressEnd: 0.305,
    subitems: [
      { name: 'Intro', target: 'origin-intro', progress: 0.0 },
      { name: 'About', target: 'origin-company', progress: 0.094 },
      { name: 'Services', target: 'origin-services', progress: 0.169 },
    ]
  },
  {
    id: 'about',
    name: 'ABOUT',
    desc: 'From Scope to Production. Our systematic software engineering engine built to scale.',
    progressStart: 0.305,
    progressEnd: 0.564,
    subitems: [
      { name: 'Process', target: 'about-intro', progress: 0.305 },
      { name: 'Metrics', target: 'about-vision', progress: 0.384 },
      { name: 'Industries', target: 'about-essence', progress: 0.431 },
    ]
  },
  {
    id: 'services',
    name: 'SERVICES',
    desc: 'Client feedback, custom integration blueprints, and answers to engineering queries.',
    progressStart: 0.564,
    progressEnd: 0.812,
    subitems: [
      { name: 'Feedback', target: 'services-intro', progress: 0.564 },
      { name: "Let's Connect", target: 'services-stats', progress: 0.631 },
      { name: 'FAQs', target: 'services-tunnel', progress: 0.681 },
    ]
  },
  {
    id: 'usecases',
    name: 'USE CASES',
    desc: 'Case studies, technical playbooks, and strategic software intelligence.',
    progressStart: 0.812,
    progressEnd: 0.971,
    subitems: [
      { name: 'Insights', target: 'usecases-intro', progress: 0.812 },
    ]
  },
  {
    id: 'contact',
    name: 'CONTACT',
    desc: 'Connect with Sepeint directly to build something unstoppable.',
    progressStart: 0.971,
    progressEnd: 1.0,
    subitems: [
      { name: 'Get In Touch', target: 'contact-details', progress: 0.971 },
    ]
  }
];

export const SidebarNav: React.FC<SidebarNavProps> = ({ scrollProgress, onAnchorClick }) => {
  // Find which section is currently active
  const activeSection = SECTIONS.find(
    (sec) => scrollProgress >= sec.progressStart && scrollProgress <= sec.progressEnd
  ) || SECTIONS[0];

  const activeIdx = SECTIONS.findIndex((sec) => sec.id === activeSection.id);
  const prevSection = activeIdx > 0 ? SECTIONS[activeIdx - 1] : null;
  const nextSection = activeIdx < SECTIONS.length - 1 ? SECTIONS[activeIdx + 1] : null;

  return (
    <nav className="lateralMenu visible desktop-only">
      <ul>
        {prevSection && (
          <li className="prevSection">
            <a
              href={`#${prevSection.subitems[0].target}`}
              onClick={(e) => {
                e.preventDefault();
                onAnchorClick(prevSection.subitems[0].target);
              }}
            >
              {prevSection.name}
            </a>
          </li>
        )}

        <li>
          <div className="sceneName">{activeSection.name}</div>
          <span>{activeSection.desc}</span>
        </li>

        {activeSection.subitems.map((sub, idx) => {
          // Check if subitem is active based on progress range
          const isSubActive =
            idx === activeSection.subitems.length - 1
              ? scrollProgress >= sub.progress
              : scrollProgress >= sub.progress && scrollProgress < activeSection.subitems[idx + 1].progress;

          return (
            <li
              key={sub.target}
              className={isSubActive ? 'active' : ''}
            >
              <a
                href={`#${sub.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  onAnchorClick(sub.target);
                }}
              >
                {sub.name}
              </a>
            </li>
          );
        })}

        {nextSection && (
          <li className="nextSection">
            <a
              href={`#${nextSection.subitems[0].target}`}
              onClick={(e) => {
                e.preventDefault();
                onAnchorClick(nextSection.subitems[0].target);
              }}
            >
              {nextSection.name}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
