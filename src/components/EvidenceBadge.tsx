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
  surface?: 'light' | 'dark';
}

const LIGHT_TEXT_COLORS: Record<EvidenceLevel, string> = {
  ESTABLISHED: 'text-emerald-800',
  SUPPORTED: 'text-sky-800',
  DEBATED: 'text-amber-800',
  SPECULATIVE: 'text-rose-800',
  UNKNOWN: 'text-stone-700',
};

const DARK_TEXT_COLORS: Record<EvidenceLevel, string> = {
  ESTABLISHED: 'text-[#84B89A]',
  SUPPORTED: 'text-[#8AB2C7]',
  DEBATED: 'text-[#E8C56E]',
  SPECULATIVE: 'text-[#D6856C]',
  UNKNOWN: 'text-[#B8AC99]',
};

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({
  level,
  onClick,
  size = 'md',
  showLabel = true,
  className = '',
  as,
  surface = 'light',
}) => {
  const info = EVIDENCE_LEVELS[level] || EVIDENCE_LEVELS.UNKNOWN;
  const textColor = surface === 'dark' ? DARK_TEXT_COLORS[level] : LIGHT_TEXT_COLORS[level];

  const sizeClasses = {
    sm: 'text-[11px] tracking-[0.14em]',
    md: 'text-[11px] tracking-[0.15em]',
    lg: 'text-xs tracking-[0.18em]',
  }[size];

  const isButton = as === 'button' || (as !== 'span' && Boolean(onClick));

  const content = (
    <>
      <span
        className="inline-block w-1.5 h-1.5 rotate-45 shrink-0"
        style={{ backgroundColor: info.dotColor }}
      />
      {showLabel && <span className="font-medium">{info.label}</span>}
      {isButton && (
        <span className="text-[11px] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform">
          →
        </span>
      )}
    </>
  );

  const baseClasses = `inline-flex items-center gap-1.5 font-mono uppercase transition-colors duration-150 select-none whitespace-nowrap shrink-0 ${textColor} ${sizeClasses} ${className}`;

  if (isButton) {
    return (
      <button
        type="button"
        id={`evidence-badge-${level.toLowerCase()}`}
        onClick={onClick}
        title={`${info.label}: ${info.description}`}
        className={`${baseClasses} group cursor-pointer hover:underline underline-offset-4 focus:outline-none`}
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
