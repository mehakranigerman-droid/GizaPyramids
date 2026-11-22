import React from 'react';
import { EVIDENCE_LEVELS } from '../data/evidenceData';
import { EvidenceLevel } from '../types';

interface EpistemicLegendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LEVEL_EXAMPLES: Record<EvidenceLevel, string> = {
  ESTABLISHED: 'Examples: Khufu quarry marks, Heit el-Ghurab worker city, cardinal equinox alignment.',
  SUPPORTED: 'Examples: Ahramat harbour logistics, Khafre association with the Sphinx, internal spiraling ramp model.',
  DEBATED: 'Examples: Orion Correlation Theory, Sphinx rainfall weathering timeline, intentionality of Pi/Phi proportions.',
  SPECULATIVE: 'Examples: 10,500 BCE lost civilization claims, Giza power-plant conjectures, non-human origins.',
  UNKNOWN: 'Examples: Internal contents and precise architectural role of the 30-meter Big Void.',
};

export const EpistemicLegendModal: React.FC<EpistemicLegendModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="epistemic-legend-modal-container"
        className="relative w-full max-w-2xl bg-[#1C1510] border border-[#B49A72]/25 p-6 md:p-8 text-[#F4EFE5] shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-[#B49A72]/20 pb-4 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8C56E] font-bold">
              Archaeological Epistemic Standard
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#F4EFE5] mt-1">
              Scientific Evidence Classification
            </h3>
          </div>
          <button
            id="close-epistemic-legend-modal"
            type="button"
            onClick={onClose}
            className="text-[#E2D2B4] hover:text-[#F4EFE5] font-mono text-lg cursor-pointer px-1"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <p className="text-sm text-[#E2D2B4] mb-6 leading-relaxed font-serif-text border-b border-[#B49A72]/20 pb-5">
          Every claim carries an explicit evidentiary classification separating settled physical evidence from scholarly modeling, peer disputes, speculative lore, and unresolved questions.
        </p>

        <div className="divide-y divide-[#B49A72]/15">
          {(['ESTABLISHED', 'SUPPORTED', 'DEBATED', 'SPECULATIVE', 'UNKNOWN'] as EvidenceLevel[]).map(
            (lvl) => {
              const info = EVIDENCE_LEVELS[lvl];
              return (
                <div key={lvl} className="py-4 first:pt-0 last:pb-0 flex items-start gap-3.5">
                  <span
                    className="w-2.5 h-2.5 mt-1.5 shrink-0"
                    style={{ backgroundColor: info.dotColor }}
                  />
                  <div>
                    <span className="font-mono text-xs font-bold text-[#F4EFE5] uppercase tracking-wider">
                      {info.label}
                    </span>
                    <p className="text-sm text-[#E2D2B4] mt-1 leading-relaxed font-serif-text">
                      {info.description}
                    </p>
                    <span className="block text-xs font-mono text-[#E8C56E]/90 mt-1.5">
                      {LEVEL_EXAMPLES[lvl]}
                    </span>
                  </div>
                </div>
              );
            }
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-[#B49A72]/20 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider font-bold text-[#F3D37A] hover:text-[#F4EFE5] underline underline-offset-4 cursor-pointer"
          >
            Close Key →
          </button>
        </div>
      </div>
    </div>
  );
};
