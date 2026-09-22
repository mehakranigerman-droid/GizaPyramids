import React from 'react';
import { X, ExternalLink, ShieldCheck, AlertTriangle, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';
import { EvidenceRecord } from '../types';
import { EVIDENCE_LEVELS } from '../data/evidenceData';

interface EvidenceModalProps {
  record: EvidenceRecord | null;
  onClose: () => void;
}

export const EvidenceModal: React.FC<EvidenceModalProps> = ({ record, onClose }) => {
  if (!record) return null;

  const info = EVIDENCE_LEVELS[record.level] || EVIDENCE_LEVELS.UNKNOWN;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        id="evidence-modal-card"
        className="relative w-full max-w-2xl bg-[#F4EFE5] shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto text-[#171513]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex items-start justify-between gap-4 border-b border-[#D8C7A3] pb-4 mb-5">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
              Archival Evidence Dossier // {record.topic}
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#2B211B] mt-1 leading-snug">
              {record.claim}
            </h3>
          </div>
          <button
            id="evidence-modal-close-btn"
            onClick={onClose}
            className="p-1.5 text-[#2B211B] hover:text-[#8A4F3D] cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Epistemic Status Banner */}
        <div className="pb-4 mb-5 border-b border-[#D8C7A3]/60 flex items-start gap-3">
          <div className="mt-0.5">
            {record.level === 'ESTABLISHED' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
            {record.level === 'SUPPORTED' && <ShieldCheck className="w-5 h-5 text-sky-600" />}
            {record.level === 'DEBATED' && <AlertTriangle className="w-5 h-5 text-amber-600" />}
            {record.level === 'SPECULATIVE' && <AlertTriangle className="w-5 h-5 text-rose-600" />}
            {record.level === 'UNKNOWN' && <HelpCircle className="w-5 h-5 text-stone-500" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`font-mono text-xs uppercase tracking-wider font-bold ${info.badgeText}`}>
                Epistemic Status: {info.label}
              </span>
            </div>
            <p className="text-sm mt-1 text-[#2B211B]/80 leading-relaxed">
              {info.description}
            </p>
          </div>
        </div>

        {/* Synthesis Summary */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A4F3D] font-bold mb-2">
            Executive Summary
          </h4>
          <p className="text-base text-[#171513] leading-relaxed border-l-2 border-[#8A4F3D] pl-3 py-1">
            {record.summary}
          </p>
        </div>

        {/* Primary Evidence */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#2B211B] font-bold mb-2.5 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" /> Primary Empirical & Epigraphic Evidence
          </h4>
          <ul className="space-y-2">
            {record.primaryEvidence.map((item, idx) => (
              <li key={idx} className="text-sm leading-relaxed text-[#2B211B] flex items-start gap-2.5">
                <span className="font-mono text-xs font-bold text-[#8A4F3D] mt-0.5">{idx + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Limitations & Counterarguments */}
        <div className="mb-6 border-t border-[#D8C7A3]/60 pt-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A4F3D] font-bold mb-2.5 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#8A4F3D]" /> Known Limitations & Counterarguments
          </h4>
          <ul className="space-y-2">
            {record.limitationsAndCounterpoints.map((item, idx) => (
              <li key={idx} className="text-sm leading-relaxed text-[#2B211B]/85 flex items-start gap-2">
                <span className="text-[#8A4F3D] font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Primary Sources */}
        <div className="border-t border-[#D8C7A3] pt-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#2B211B] font-bold mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#B49A72]" /> Academic Citations & Archival Sources
          </h4>
          <div className="flex flex-wrap gap-2">
            {record.sources.map((source, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs font-mono border-b border-[#B49A72]/40 pb-0.5 text-[#2B211B]"
              >
                <ExternalLink className="w-3 h-3 text-[#8A4F3D]" />
                {source}
              </span>
            ))}
          </div>
        </div>

        {/* Dismiss Footer */}
        <div className="mt-8 flex justify-end">
          <button
            id="evidence-modal-dismiss-btn"
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-mono uppercase tracking-wider font-bold bg-[#2B211B] text-[#F4EFE5] hover:bg-[#8A4F3D] transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
