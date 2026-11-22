import React from 'react';
import { EvidenceRecord } from '../types';
import { EVIDENCE_LEVELS } from '../data/evidenceData';
import { EvidenceBadge } from './EvidenceBadge';

interface EvidenceModalProps {
  record: EvidenceRecord | null;
  onClose: () => void;
}

export const EvidenceModal: React.FC<EvidenceModalProps> = ({ record, onClose }) => {
  if (!record) return null;

  const info = EVIDENCE_LEVELS[record.level] || EVIDENCE_LEVELS.UNKNOWN;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="evidence-modal-card"
        className="relative w-full max-w-2xl bg-[#F4EFE5] shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto text-[#171513]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#2B211B]/15 pb-4 mb-5">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
              Archival Evidence · {record.topic}
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#2B211B] mt-1 leading-snug">
              {record.claim}
            </h3>
          </div>
          <button
            id="evidence-modal-close-btn"
            type="button"
            onClick={onClose}
            className="text-[#2B211B]/70 hover:text-[#2B211B] font-mono text-lg cursor-pointer px-1"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="pb-4 mb-5 border-b border-[#2B211B]/15 space-y-2">
          <EvidenceBadge level={record.level} as="span" surface="light" />
          <p className="text-sm text-[#2B211B]/80 leading-relaxed font-serif-text">
            {info.description}
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A4F3D] font-bold mb-2">
            Summary
          </h4>
          <p className="text-base text-[#171513] leading-relaxed font-serif-text">
            {record.summary}
          </p>
        </div>

        <div className="mb-6 border-t border-[#2B211B]/15 pt-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#2B211B] font-bold mb-2.5">
            Primary Empirical & Epigraphic Evidence
          </h4>
          <ul className="space-y-2">
            {record.primaryEvidence.map((item, idx) => (
              <li key={idx} className="text-sm leading-relaxed text-[#2B211B] flex items-start gap-2.5 font-serif-text">
                <span className="font-mono text-xs font-bold text-[#8A4F3D] mt-0.5">{idx + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 border-t border-[#2B211B]/15 pt-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A4F3D] font-bold mb-2.5">
            Known Limitations & Counterpoints
          </h4>
          <ul className="space-y-2">
            {record.limitationsAndCounterpoints.map((item, idx) => (
              <li key={idx} className="text-sm leading-relaxed text-[#2B211B]/85 flex items-start gap-2 font-serif-text">
                <span className="text-[#8A4F3D] font-bold">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[#2B211B]/15 pt-4 text-xs font-mono text-[#2B211B]/70">
          Sources: {record.sources.join(' · ')}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            id="evidence-modal-dismiss-btn"
            type="button"
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider font-bold text-[#8A4F3D] hover:text-[#2B211B] underline underline-offset-4 cursor-pointer"
          >
            Close Dossier →
          </button>
        </div>
      </div>
    </div>
  );
};
