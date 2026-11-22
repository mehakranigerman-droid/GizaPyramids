import React, { useState } from 'react';
import { THEORIES_DOSSIER } from '../data/theoriesData';
import { EVIDENCE_RECORDS, EVIDENCE_LEVELS } from '../data/evidenceData';
import { EvidenceLevel, EvidenceRecord } from '../types';
import { EvidenceBadge } from './EvidenceBadge';

export const TheoriesAndEvidencePage: React.FC = () => {
  const [selectedTheoryId, setSelectedTheoryId] = useState<string>(THEORIES_DOSSIER[0].id);
  const [selectedLevel, setSelectedLevel] = useState<EvidenceLevel | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRecordId, setExpandedRecordId] = useState<string | null>(EVIDENCE_RECORDS[0].id);

  const selectedTheory =
    THEORIES_DOSSIER.find((t) => t.id === selectedTheoryId) || THEORIES_DOSSIER[0];

  const filteredRecords = EVIDENCE_RECORDS.filter((rec: EvidenceRecord) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      rec.claim.toLowerCase().includes(q) ||
      rec.topic.toLowerCase().includes(q) ||
      rec.summary.toLowerCase().includes(q);
    const matchesLevel = selectedLevel === 'ALL' || rec.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <section id="theories" className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              08 · Claims & Evidence
            </span>
            <EvidenceBadge level="ESTABLISHED" as="span" surface="dark" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            Theories & Evidence
          </h1>
          <p className="text-sm sm:text-base text-[#D8C7A3] max-w-2xl mt-2.5 leading-relaxed">
            Alternative hypotheses weighed directly against radiocarbon dates, stratigraphy, and primary inscriptions.
          </p>
        </header>

        {/* ================= PART I: SELECTED ALTERNATIVE CLAIMS ================= */}
        <div className="mb-12 pb-10 border-b border-[#B49A72]/20">
          <h2 className="text-2xl font-serif font-bold text-[#F4EFE5] mb-5">
            I. Popular Hypotheses
          </h2>

          <div className="flex flex-wrap gap-x-5 gap-y-2 border-b border-[#B49A72]/20 pb-4 mb-6 text-xs font-mono">
            {THEORIES_DOSSIER.map((t) => {
              const isSelected = selectedTheory.id === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTheoryId(t.id)}
                  className={`pb-1 cursor-pointer border-b-2 transition-colors text-left ${
                    isSelected
                      ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                      : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                  }`}
                >
                  {t.claim}
                </button>
              );
            })}
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F4EFE5]">
                {selectedTheory.claim}
              </h3>
              <EvidenceBadge level={selectedTheory.consensusStatus} as="span" surface="dark" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#E2D2B4] leading-relaxed pt-1">
              <div>
                <span className="font-mono text-xs font-bold text-[#E8C56E] uppercase tracking-wider block mb-1.5">
                  The Claim
                </span>
                <p>{selectedTheory.whatItSays}</p>
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-rose-300 uppercase tracking-wider block mb-1.5">
                  Empirical Assessment
                </span>
                <p>{selectedTheory.scientificCritique[0]}</p>
                <p className="text-xs font-mono text-[#D8C7A3]/85 mt-3">
                  Verdict: {selectedTheory.statusSummary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PART II: CONCISE EVIDENCE REGISTRY ================= */}
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-4 mb-6">
            <h2 className="text-2xl font-serif font-bold text-[#F4EFE5]">
              II. Evidence Registry ({filteredRecords.length})
            </h2>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter claims..."
              className="w-full sm:w-64 py-1 bg-transparent border-b border-[#B49A72]/30 text-xs font-mono text-[#F4EFE5] placeholder-[#D8C7A3]/45 focus:outline-none focus:border-[#E8C56E]"
            />
          </div>

          <div className="flex flex-wrap gap-5 border-b border-[#B49A72]/15 pb-3 mb-4 text-xs font-mono">
            <button
              type="button"
              onClick={() => setSelectedLevel('ALL')}
              className={`pb-1 cursor-pointer border-b-2 transition-colors ${
                selectedLevel === 'ALL'
                  ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                  : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
              }`}
            >
              All ({EVIDENCE_RECORDS.length})
            </button>
            {(['ESTABLISHED', 'SUPPORTED', 'DEBATED', 'SPECULATIVE', 'UNKNOWN'] as EvidenceLevel[]).map(
              (lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedLevel(lvl)}
                  className={`pb-1 cursor-pointer border-b-2 transition-colors ${
                    selectedLevel === lvl
                      ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                      : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                  }`}
                >
                  {EVIDENCE_LEVELS[lvl].label}
                </button>
              )
            )}
          </div>

          <div className="divide-y divide-[#B49A72]/15">
            {filteredRecords.map((rec) => {
              const isExpanded = expandedRecordId === rec.id;
              return (
                <div key={rec.id} className="py-4">
                  <button
                    type="button"
                    onClick={() => setExpandedRecordId(isExpanded ? null : rec.id)}
                    className="w-full flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-left cursor-pointer group"
                  >
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#F4EFE5] group-hover:text-[#F3D37A] transition-colors flex-1">
                      {rec.claim}
                    </h3>
                    <div className="flex items-center gap-4 shrink-0">
                      <EvidenceBadge level={rec.level} as="span" surface="dark" />
                      <span className="font-mono text-xs text-[#E8C56E]">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-[#B49A72]/10 space-y-2.5 text-sm text-[#E2D2B4] max-w-3xl leading-relaxed">
                      <p>{rec.summary}</p>
                      <p className="text-xs text-[#D8C7A3]">
                        <strong className="text-[#E8C56E]">Primary Proof:</strong> {rec.primaryEvidence[0]}
                      </p>
                      <p className="text-[11px] font-mono text-[#D8C7A3]/65">
                        Sources: {rec.sources.join(' · ')}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
