import React, { useState } from 'react';
import { DYNASTY_CHRONOLOGY } from '../data/pyramidsData';
import { EvidenceBadge } from './EvidenceBadge';

interface TimelineGenerationsProps {
  onSelectEvidence: (claimId: string) => void;
}

export const TimelineGenerations: React.FC<TimelineGenerationsProps> = ({ onSelectEvidence }) => {
  const [selectedGenIdx, setSelectedGenIdx] = useState<number>(1); // default Khufu

  const currentGen = DYNASTY_CHRONOLOGY[selectedGenIdx];

  return (
    <section id="generations" className="py-20 bg-[#EFE7DA] text-[#171513] border-b border-[#D8C7A3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="border-b border-[#D8C7A3] pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
                Chapter 02 // Dynastic Chronology & Royal Succession
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B211B] mt-1">
                Three Generations, Not One Blueprint
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('khufu-authorship')} />
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#2B211B]/80 max-w-3xl mt-2 leading-relaxed">
            An evolving family succession spanning over eight decades, shifting royal burial sites across the Memphite necropolis rather than adhering to a single masterplan.
          </p>
        </div>

        {/* Interactive Succession Stepper Bar (Chronological Sequence Cards) */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8A4F3D] animate-ping" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A4F3D] font-bold">
              Select 4th Dynasty Pharaoh to Inspect Reign & Monument:
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {DYNASTY_CHRONOLOGY.map((gen, idx) => {
              const isSelected = selectedGenIdx === idx;
              return (
                <button
                  key={gen.pharaoh}
                  type="button"
                  onClick={() => setSelectedGenIdx(idx)}
                  className={`p-3 text-left cursor-pointer transition-all border-2 relative group shadow-xs ${
                    isSelected
                      ? 'bg-white border-[#8A4F3D] ring-2 ring-[#8A4F3D]/25 shadow-md -translate-y-1'
                      : 'bg-white/60 hover:bg-white border-[#2B211B]/15 hover:border-[#8A4F3D]/60 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#8A4F3D] uppercase tracking-wider font-bold">
                      0{idx + 1}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#8A4F3D]' : 'bg-transparent'}`} />
                  </div>
                  <h4 className="font-serif font-bold text-base mt-1 text-[#2B211B] group-hover:text-[#8A4F3D] transition-colors">
                    {gen.pharaoh}
                  </h4>
                  <p className="text-[10px] font-mono mt-0.5 truncate text-[#2B211B]/70 font-semibold">
                    {gen.reign.split(' ')[0]}
                  </p>
                  <div className="mt-2 pt-1.5 border-t border-[#2B211B]/10 flex items-center justify-between text-[9px] font-mono text-[#8A4F3D]">
                    <span className="font-bold">{isSelected ? '● Active' : 'Inspect'}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform text-xs">›</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Generation Architectural & Historic Deep Dive (Open Layout) */}
        <div className="pt-2">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2B211B]/15 pb-4 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#8A4F3D] font-bold block">
                Pharaonic Profile // {currentGen.reign}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B211B] mt-1">
                {currentGen.pharaoh}
              </h3>
              <p className="text-sm font-sans text-[#8A4F3D] font-semibold mt-0.5">
                {currentGen.relationship}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="font-mono text-xs text-[#2B211B]/60 uppercase block">Primary Monument</span>
              <span className="font-serif text-xl font-bold text-[#2B211B] block">
                {currentGen.monument}
              </span>
              <span className="font-mono text-xs text-[#8A4F3D] sm:text-right block mt-0.5">
                Site: {currentGen.location}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Historical Significance */}
            <div>
              <h4 className="font-mono text-xs font-bold text-[#8A4F3D] uppercase tracking-wider mb-2">
                I. ARCHITECTURAL SIGNIFICANCE & EVOLUTION
              </h4>
              <p className="text-sm text-[#171513]/90 leading-relaxed font-serif-text text-base">
                {currentGen.significance}
              </p>
            </div>

            {/* Direct Archaeological Proof */}
            <div>
              <h4 className="font-mono text-xs font-bold text-[#8A4F3D] uppercase tracking-wider mb-2">
                II. EPIGRAPHIC & MATERIAL EVIDENCE
              </h4>
              <p className="text-sm text-[#171513]/90 leading-relaxed font-serif-text text-base">
                {currentGen.evidence}
              </p>
            </div>
          </div>

          {/* Chronological Breakdown Callout */}
          <div className="p-4 bg-[#2B211B] text-[#F4EFE5] text-xs font-mono leading-relaxed rounded-xs">
            <span className="text-[#D8C7A3] font-bold uppercase tracking-wider block mb-1">
              Archaeological Takeaway
            </span>
            Khufu’s son <strong className="text-[#D8C7A3]">Djedefre</strong> built at Abu Rawash (8 km north), while Menkaure’s successor <strong className="text-[#D8C7A3]">Shepseskaf</strong> built a mastaba at South Saqqara. This geographical shift directly refutes a synchronized tripartite masterplan.
          </div>
        </div>

      </div>
    </section>
  );
};
