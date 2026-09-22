import React, { useState } from 'react';
import { DYNASTY_CHRONOLOGY } from '../data/pyramidsData';
import { EvidenceBadge } from './EvidenceBadge';
import { History, ArrowRight, MapPin, Calendar, BookOpen } from 'lucide-react';

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
          <p className="text-base text-[#2B211B]/80 max-w-3xl mt-3 leading-relaxed">
            Alternative theories often presume Giza was designed as a single synchronized masterplan. Archaeological reality reveals an evolving family succession of independent rulers across more than eight decades, with monarchs moving their burial locations across the Memphite landscape.
          </p>
        </div>

        {/* Interactive Succession Stepper Bar (Clean Horizontal Timeline Track) */}
        <div className="border-b border-[#2B211B]/15 pb-6 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {DYNASTY_CHRONOLOGY.map((gen, idx) => {
              const isSelected = selectedGenIdx === idx;
              return (
                <button
                  key={gen.pharaoh}
                  type="button"
                  onClick={() => setSelectedGenIdx(idx)}
                  className={`py-3 px-2 text-left cursor-pointer transition-all border-b-2 -mb-[25px] pb-4 ${
                    isSelected
                      ? 'border-[#8A4F3D] text-[#2B211B]'
                      : 'border-transparent text-[#2B211B]/50 hover:text-[#2B211B]'
                  }`}
                >
                  <span className="font-mono text-[10px] text-[#8A4F3D] uppercase tracking-wider block font-bold">
                    0{idx + 1} // {gen.reign.split(' ')[0]}
                  </span>
                  <h4 className="font-serif font-bold text-base sm:text-lg mt-0.5">
                    {gen.pharaoh}
                  </h4>
                  <p className="text-[11px] font-mono mt-0.5 truncate text-[#2B211B]/60">
                    {gen.location}
                  </p>
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
              <span className="font-mono text-xs text-[#8A4F3D] flex items-center gap-1 sm:justify-end mt-0.5">
                <MapPin className="w-3.5 h-3.5" /> {currentGen.location}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Historical Significance */}
            <div>
              <h4 className="font-mono text-xs font-bold text-[#8A4F3D] uppercase tracking-wider mb-2 flex items-center gap-2">
                <History className="w-4 h-4 text-[#8A4F3D]" /> Architectural Significance & Evolution
              </h4>
              <p className="text-sm text-[#171513]/90 leading-relaxed">
                {currentGen.significance}
              </p>
            </div>

            {/* Direct Archaeological Proof */}
            <div>
              <h4 className="font-mono text-xs font-bold text-[#8A4F3D] uppercase tracking-wider mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#8A4F3D]" /> Epigraphic & Material Evidence
              </h4>
              <p className="text-sm text-[#171513]/90 leading-relaxed">
                {currentGen.evidence}
              </p>
            </div>
          </div>

          {/* Chronological Breakdown Callout */}
          <div className="p-5 bg-[#2B211B] text-[#F4EFE5] text-xs font-mono leading-relaxed rounded-xs">
            <span className="text-[#D8C7A3] font-bold uppercase tracking-wider block mb-1">
              Archaeological Takeaway: The Djedefre & Shepseskaf Anomalies
            </span>
            Khufu’s direct son and immediate successor, <strong className="text-[#D8C7A3]">Djedefre</strong>, did not build at Giza at all—he chose Abu Rawash, 8 kilometers to the north. Later, Menkaure’s successor <strong className="text-[#D8C7A3]">Shepseskaf</strong> entirely abandoned Giza and rejected the pyramid form, constructing a giant sarcophagus-mastaba at South Saqqara. This geographical oscillation decisively refutes hypotheses claiming Giza was built as an inviolable tripartite astrological masterplan.
          </div>
        </div>

      </div>
    </section>
  );
};
