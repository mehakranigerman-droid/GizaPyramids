import React from 'react';
import { EVIDENCE_LEVELS } from '../data/evidenceData';
import { EvidenceLevel } from '../types';

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({
  level,
  onClick,
  size = 'md',
  showLabel = true,
  className = ''
}) => {
  const info = EVIDENCE_LEVELS[level] || EVIDENCE_LEVELS.UNKNOWN;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-1 gap-2',
    lg: 'text-sm px-3 py-1.5 gap-2.5'
  }[size];

  return (
    <button
      type="button"
      id={`evidence-badge-${level.toLowerCase()}`}
      onClick={onClick}
      title={`${info.label}: ${info.description} (Click to inspect evidence)`}
      className={`inline-flex items-center rounded-full font-mono font-medium tracking-wide uppercase transition-all duration-200 border cursor-pointer select-none ${info.badgeBg} ${info.badgeBorder} ${info.badgeText} hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-[#8A4F3D]/50 ${sizeClasses} ${className}`}
    >
      <span
        className="inline-block rounded-full animate-pulse"
        style={{
          width: size === 'sm' ? 6 : size === 'md' ? 8 : 10,
          height: size === 'sm' ? 6 : size === 'md' ? 8 : 10,
          backgroundColor: info.dotColor,
          boxShadow: `0 0 8px ${info.dotColor}80`
        }}
      />
      {showLabel && <span>{info.label}</span>}
    </button>
  );
};
