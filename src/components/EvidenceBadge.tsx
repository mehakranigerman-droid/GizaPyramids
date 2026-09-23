import React from 'react';
import { EVIDENCE_LEVELS } from '../data/evidenceData';
import { EvidenceLevel } from '../types';

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
  as?: 'button' | 'span';
}

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({
  level,
  onClick,
  size = 'md',
  showLabel = true,
  className = '',
  as
}) => {
  const info = EVIDENCE_LEVELS[level] || EVIDENCE_LEVELS.UNKNOWN;

  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1 tracking-wider',
    lg: 'text-xs sm:text-sm px-3 py-1.5 tracking-widest'
  }[size];

  const isButton = as === 'button' || (as !== 'span' && Boolean(onClick));

  const content = (
    <>
      <span
        className="inline-block w-1.5 h-1.5 shrink-0"
        style={{ backgroundColor: info.dotColor }}
      />
      {showLabel && <span className="font-semibold">{info.label}</span>}
      {isButton && (
        <span className="text-[10px] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform">
          →
        </span>
      )}
    </>
  );

  const baseClasses = `inline-flex items-center gap-1.5 border font-mono uppercase transition-all duration-200 select-none ${info.badgeBg} ${info.badgeBorder} ${info.badgeText} ${sizeClasses} ${className}`;

  if (isButton) {
    return (
      <button
        type="button"
        id={`evidence-badge-${level.toLowerCase()}`}
        onClick={onClick}
        title={`${info.label}: ${info.description} (Click to inspect evidence dossier)`}
        className={`${baseClasses} group cursor-pointer hover:brightness-105 active:scale-98 shadow-xs focus:outline-none`}
      >
        {content}
      </button>
    );
  }

  return (
    <span
      id={`evidence-badge-${level.toLowerCase()}`}
      title={`${info.label}: ${info.description}`}
      className={`${baseClasses} cursor-default`}
    >
      {content}
    </span>
  );
};

