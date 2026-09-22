import React from 'react';
import { X, CheckCircle2, ShieldCheck, AlertTriangle, HelpCircle } from 'lucide-react';
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
              Data Story Epistemic Framework
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#2B211B] mt-1">
              Evidence-Status System
            </h3>
          </div>
          <button
            id="close-epistemic-legend-modal"
            type="button"
            onClick={onClose}
            className="p-1 text-[#2B211B] hover:bg-[#D8C7A3]/50 rounded transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-sm text-[#2B211B] mb-6 leading-relaxed bg-[#EFE7DA] p-4 border-l-4 border-[#8A4F3D]">
          This project strictly separates factual archaeological data from extrapolation, unresolved academic debate, and speculative alternative lore. Every major assertion throughout the experience carries an explicit epistemic badge:
        </p>

        <div className="space-y-4">
          {/* ESTABLISHED */}
          <div className="p-4 border border-emerald-700/50 bg-emerald-950/10 flex items-start gap-4">
            <div className="mt-1">
              <span className="inline-block w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_8px_#22c55e]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  🟢 ESTABLISHED
                </span>
              </div>
              <p className="text-sm text-[#171513] mt-1 leading-relaxed">
                {EVIDENCE_LEVELS.ESTABLISHED.description}
              </p>
              <span className="block text-xs font-mono text-[#8A4F3D] mt-2">
                Example: Khufu authorship, Heit el-Ghurab labor village, cardinal alignment.
              </span>
            </div>
          </div>

          {/* SUPPORTED */}
          <div className="p-4 border border-sky-700/50 bg-sky-950/10 flex items-start gap-4">
            <div className="mt-1">
              <span className="inline-block w-4 h-4 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sky-800 uppercase tracking-wider">
                  🔵 SUPPORTED
                </span>
              </div>
              <p className="text-sm text-[#171513] mt-1 leading-relaxed">
                {EVIDENCE_LEVELS.SUPPORTED.description}
              </p>
              <span className="block text-xs font-mono text-[#8A4F3D] mt-2">
                Example: Khafre association with Great Sphinx, Ahramat canal transport, internal spiral ramps.
              </span>
            </div>
          </div>

          {/* DEBATED */}
          <div className="p-4 border border-amber-700/50 bg-amber-950/10 flex items-start gap-4">
            <div className="mt-1">
              <span className="inline-block w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_8px_#eab308]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-amber-800 uppercase tracking-wider">
                  🟡 DEBATED
                </span>
              </div>
              <p className="text-sm text-[#171513] mt-1 leading-relaxed">
                {EVIDENCE_LEVELS.DEBATED.description}
              </p>
              <span className="block text-xs font-mono text-[#8A4F3D] mt-2">
                Example: Orion Correlation Theory, Sphinx water weathering debate, Pi/Phi intentionality.
              </span>
            </div>
          </div>

          {/* SPECULATIVE */}
          <div className="p-4 border border-rose-700/50 bg-rose-950/10 flex items-start gap-4">
            <div className="mt-1">
              <span className="inline-block w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_8px_#ef4444]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-rose-800 uppercase tracking-wider">
                  🔴 SPECULATIVE
                </span>
              </div>
              <p className="text-sm text-[#171513] mt-1 leading-relaxed">
                {EVIDENCE_LEVELS.SPECULATIVE.description}
              </p>
              <span className="block text-xs font-mono text-[#8A4F3D] mt-2">
                Example: 10,500 BCE civilization claims, acoustic power plant hypotheses, ancient astronauts.
              </span>
            </div>
          </div>

          {/* UNKNOWN */}
          <div className="p-4 border border-stone-600/50 bg-stone-900/10 flex items-start gap-4">
            <div className="mt-1">
              <span className="inline-block w-4 h-4 rounded-full bg-stone-400 shadow-[0_0_8px_#a8a29e]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-stone-700 uppercase tracking-wider">
                  ⚪ UNKNOWN
                </span>
              </div>
              <p className="text-sm text-[#171513] mt-1 leading-relaxed">
                {EVIDENCE_LEVELS.UNKNOWN.description}
              </p>
              <span className="block text-xs font-mono text-[#8A4F3D] mt-2">
                Example: Precise purpose and contents of the 30-meter Big Void, exact primary stellar sighting instrument.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#D8C7A3] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-[#2B211B] text-[#F4EFE5] text-xs font-mono uppercase tracking-wider font-bold hover:bg-[#8A4F3D] transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
