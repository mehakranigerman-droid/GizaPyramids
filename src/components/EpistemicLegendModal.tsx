import React from 'react';
import { EVIDENCE_LEVELS } from '../data/evidenceData';

interface EpistemicLegendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EpistemicLegendModal: React.FC<EpistemicLegendModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        id="epistemic-legend-modal-container"
        className="relative w-full max-w-2xl bg-[#F4EFE5] border-2 border-[#B49A72] p-6 md:p-8 text-[#171513] shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-[#D8C7A3] pb-4 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
              Archaeological Epistemic Standard
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#2B211B] mt-1">
              Scientific Evidence-Classification Framework
            </h3>
          </div>
          <button
            id="close-epistemic-legend-modal"
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-[#2B211B] hover:bg-[#D8C7A3]/50 transition-colors font-mono text-lg"
          >
            ✕
          </button>
        </div>

        <p className="text-sm text-[#2B211B] mb-6 leading-relaxed bg-[#EFE7DA] p-4 border-l-4 border-[#8A4F3D] font-serif-text">
          This investigation strictly distinguishes physical archaeological proof from working scholarly extrapolation, active peer disputes, and speculative lore. Every claim on the Giza plateau carries an explicit epistemic status:
        </p>

        <div className="space-y-4">
          {/* ESTABLISHED */}
          <div className="p-4 border border-emerald-700/40 bg-emerald-950/5 flex items-start gap-4">
            <span className="w-2.5 h-2.5 bg-emerald-700 mt-1.5 shrink-0" />
            <div>
              <span className="font-mono text-xs font-bold text-emerald-900 uppercase tracking-wider">
                ESTABLISHED
              </span>
              <p className="text-sm text-[#171513] mt-1 leading-relaxed font-serif-text">
                {EVIDENCE_LEVELS.ESTABLISHED.description}
              </p>
              <span className="block text-xs font-mono text-[#8A4F3D] mt-2">
                Examples: Khufu quarry marks, Heit el-Ghurab worker city, cardinal equinox orientation.
              </span>
            </div>
          </div>

          {/* SUPPORTED */}
          <div className="p-4 border border-sky-700/40 bg-sky-950/5 flex items-start gap-4">
            <span className="w-2.5 h-2.5 bg-sky-700 mt-1.5 shrink-0" />
            <div>
              <span className="font-mono text-xs font-bold text-sky-900 uppercase tracking-wider">
                SUPPORTED
              </span>
              <p className="text-sm text-[#171513] mt-1 leading-relaxed font-serif-text">
                {EVIDENCE_LEVELS.SUPPORTED.description}
              </p>
              <span className="block text-xs font-mono text-[#8A4F3D] mt-2">
                Examples: Ahramat water channel transport, Khafre association with the Sphinx, multi-ramp delivery systems.
              </span>
            </div>
          </div>

          {/* DEBATED */}
          <div className="p-4 border border-amber-700/40 bg-amber-950/5 flex items-start gap-4">
            <span className="w-2.5 h-2.5 bg-amber-700 mt-1.5 shrink-0" />
            <div>
              <span className="font-mono text-xs font-bold text-amber-900 uppercase tracking-wider">
                DEBATED
              </span>
              <p className="text-sm text-[#171513] mt-1 leading-relaxed font-serif-text">
                {EVIDENCE_LEVELS.DEBATED.description}
              </p>
              <span className="block text-xs font-mono text-[#8A4F3D] mt-2">
                Examples: Orion Correlation Theory, Sphinx precipitation weathering timeline, intentionality of Pi/Phi proportions.
              </span>
            </div>
          </div>

          {/* SPECULATIVE */}
          <div className="p-4 border border-rose-700/40 bg-rose-950/5 flex items-start gap-4">
            <span className="w-2.5 h-2.5 bg-rose-700 mt-1.5 shrink-0" />
            <div>
              <span className="font-mono text-xs font-bold text-rose-900 uppercase tracking-wider">
                SPECULATIVE
              </span>
              <p className="text-sm text-[#171513] mt-1 leading-relaxed font-serif-text">
                {EVIDENCE_LEVELS.SPECULATIVE.description}
              </p>
              <span className="block text-xs font-mono text-[#8A4F3D] mt-2">
                Examples: 10,500 BCE lost civilization claims, electromagnetic power-plant conjectures, non-human origins.
              </span>
            </div>
          </div>

          {/* UNKNOWN */}
          <div className="p-4 border border-stone-600/40 bg-stone-900/5 flex items-start gap-4">
            <span className="w-2.5 h-2.5 bg-stone-600 mt-1.5 shrink-0" />
            <div>
              <span className="font-mono text-xs font-bold text-stone-800 uppercase tracking-wider">
                UNKNOWN
              </span>
              <p className="text-sm text-[#171513] mt-1 leading-relaxed font-serif-text">
                {EVIDENCE_LEVELS.UNKNOWN.description}
              </p>
              <span className="block text-xs font-mono text-[#8A4F3D] mt-2">
                Examples: Internal contents and precise architectural role of the 30-meter Big Void.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#D8C7A3] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-[#2B211B] text-[#F4EFE5] text-xs font-mono uppercase tracking-wider font-bold hover:bg-[#8A4F3D] transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
