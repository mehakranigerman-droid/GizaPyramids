import React, { useState } from 'react';
import { THEORIES_DOSSIER } from '../data/theoriesData';
import { TheoryItem, EvidenceLevel } from '../types';
import { EvidenceBadge } from './EvidenceBadge';
import { AlertOctagon, HelpCircle, CheckCircle2, ShieldAlert, Sparkles, Filter } from 'lucide-react';

interface TheoriesSectionProps {
  onSelectEvidence: (claimId: string) => void;
}

export const TheoriesSection: React.FC<TheoriesSectionProps> = ({ onSelectEvidence }) => {
  const [selectedTheoryId, setSelectedTheoryId] = useState<string>(THEORIES_DOSSIER[0].id);
  const [filterLevel, setFilterLevel] = useState<'ALL' | 'DEBATED' | 'SPECULATIVE'>('ALL');

  const filteredTheories = THEORIES_DOSSIER.filter((t) => {
    if (filterLevel === 'ALL') return true;
    return t.consensusStatus === filterLevel;
  });

  const selectedTheory = THEORIES_DOSSIER.find((t) => t.id === selectedTheoryId) || THEORIES_DOSSIER[0];

  return (
    <section id="theories" className="py-20 bg-[#EFE7DA] text-[#171513] border-b border-[#D8C7A3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="border-b border-[#D8C7A3] pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
                Chapter 11 // Critical Analysis & Pseudoscience
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B211B] mt-1">
                Extraordinary Claims: A Critical Dossier
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#8A4F3D] font-bold uppercase">Scientific Epistemology</span>
              <EvidenceBadge level="SPECULATIVE" size="sm" />
            </div>
          </div>
          <p className="text-base text-[#2B211B]/80 max-w-3xl mt-3 leading-relaxed">
            Carl Sagan famously stated: <em>“Extraordinary claims require extraordinary evidence.”</em> Rather than ridiculing sensational hypotheses, this interactive dossier tests each famous alternative claim against the empirical record: What is asserted? What evidence is cited? What refutes it? And what crucial physical evidence is completely missing?
          </p>
        </div>

        {/* Filter Bar (Clean Underline Tabs) */}
        <div className="flex flex-wrap items-baseline gap-6 border-b border-[#2B211B]/15 pb-3 mb-8">
          <span className="text-xs font-mono font-bold text-[#8A4F3D] flex items-center gap-1.5 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" /> Filter Claims:
          </span>
          <button
            type="button"
            onClick={() => setFilterLevel('ALL')}
            className={`pb-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border-b-2 -mb-3.5 ${
              filterLevel === 'ALL' ? 'border-[#8A4F3D] text-[#2B211B] font-bold' : 'border-transparent text-[#2B211B]/60 hover:text-[#2B211B]'
            }`}
          >
            All Claims ({THEORIES_DOSSIER.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterLevel('DEBATED')}
            className={`pb-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border-b-2 -mb-3.5 ${
              filterLevel === 'DEBATED' ? 'border-[#8A4F3D] text-[#2B211B] font-bold' : 'border-transparent text-[#2B211B]/60 hover:text-[#2B211B]'
            }`}
          >
            Debated / Mathematical
          </button>
          <button
            type="button"
            onClick={() => setFilterLevel('SPECULATIVE')}
            className={`pb-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border-b-2 -mb-3.5 ${
              filterLevel === 'SPECULATIVE' ? 'border-rose-800 text-rose-900 font-bold' : 'border-transparent text-[#2B211B]/60 hover:text-[#2B211B]'
            }`}
          >
            Speculative Hypotheses
          </button>
        </div>

        {/* Theory Item Selector (Clean Minimal Horizontal Rail) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {filteredTheories.map((t) => {
            const isSelected = selectedTheoryId === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedTheoryId(t.id)}
                className={`py-3 px-3 text-left transition-all cursor-pointer border-t-2 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#8A4F3D] bg-[#2B211B]/5'
                    : 'border-[#2B211B]/15 hover:border-[#2B211B]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <EvidenceBadge level={t.consensusStatus} size="sm" showLabel={false} as="span" />
                    <span className="font-mono text-[10px] text-[#2B211B]/50 uppercase">{t.consensusStatus}</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#2B211B]">
                    {t.claim}
                  </h4>
                </div>
                <p className="font-mono text-[11px] text-[#8A4F3D] mt-2 truncate">
                  {t.proponents}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Theory Critical Dissection Dossier (Open Editorial Layout) */}
        <div className="border-t border-[#2B211B]/15 pt-8">
          {/* Header */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2B211B]/15 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider">
                Investigative Dossier
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B211B] mt-1">
                {selectedTheory.claim}
              </h3>
              <p className="text-xs font-mono text-[#2B211B]/70 mt-1">
                Primary Proponent(s): <strong className="text-[#2B211B]">{selectedTheory.proponents}</strong>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#2B211B]/60 uppercase">Epistemic Status:</span>
              <EvidenceBadge level={selectedTheory.consensusStatus} />
            </div>
          </div>

          {/* Claim vs Purported Evidence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h5 className="font-mono text-xs font-bold text-[#8A4F3D] uppercase tracking-wider mb-2">
                The Central Claim
              </h5>
              <p className="text-sm text-[#171513]/85 leading-relaxed">
                {selectedTheory.whatItSays}
              </p>
            </div>

            <div>
              <h5 className="font-mono text-xs font-bold text-[#2B211B] uppercase tracking-wider mb-2">
                Purported Evidence Cited
              </h5>
              <ul className="space-y-2 text-sm text-[#171513]/85 leading-relaxed list-disc list-inside">
                {selectedTheory.evidencePresented.map((ev, idx) => (
                  <li key={idx}>{ev}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scientific Counter-Evidence */}
          <div className="border-t border-[#2B211B]/15 pt-6 mb-8">
            <h5 className="font-mono text-xs font-bold text-rose-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 text-rose-800" /> Scientific & Archaeological Refutation
            </h5>
            <ul className="space-y-2 text-sm text-[#171513]/85 leading-relaxed">
              {selectedTheory.scientificCritique.map((crit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-800 font-bold">•</span>
                  <span>{crit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Status Summary */}
          <div className="border-t border-[#2B211B]/15 pt-6">
            <h5 className="font-mono text-xs font-bold text-[#8A4F3D] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#8A4F3D]" /> Academic Consensus & Status Summary
            </h5>
            <p className="text-sm text-[#2B211B] font-mono leading-relaxed mb-3">
              {selectedTheory.statusSummary}
            </p>
            <div className="text-xs font-mono text-[#2B211B]/60 italic">
              Key Scholarly References: {selectedTheory.keySources.join('; ')}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
