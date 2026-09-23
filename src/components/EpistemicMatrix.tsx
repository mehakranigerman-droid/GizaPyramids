import React, { useState } from 'react';
import { EVIDENCE_RECORDS, EVIDENCE_LEVELS } from '../data/evidenceData';
import { EvidenceRecord, EvidenceLevel } from '../types';
import { EvidenceBadge } from './EvidenceBadge';

interface EpistemicMatrixProps {
  onSelectRecord: (record: EvidenceRecord) => void;
}

export const EpistemicMatrix: React.FC<EpistemicMatrixProps> = ({ onSelectRecord }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<EvidenceLevel | 'ALL'>('ALL');
  const [selectedTopic, setSelectedTopic] = useState<string>('ALL');

  const topics = [
    'ALL',
    'Attribution',
    'Labor & Society',
    'Hydrology & Transport',
    'Archaeoastronomy',
    'Internal Architecture',
    'Particle Physics',
    'Geology & Geochronology',
    'Alternative Hypotheses'
  ];

  const filteredRecords = EVIDENCE_RECORDS.filter((rec: EvidenceRecord) => {
    const matchesSearch =
      rec.claim.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.primaryEvidence.some((e: string) => e.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLevel = selectedLevel === 'ALL' || rec.level === selectedLevel;
    const matchesTopic = selectedTopic === 'ALL' || rec.topic === selectedTopic;

    return matchesSearch && matchesLevel && matchesTopic;
  });

  // Count metrics
  const counts = {
    ESTABLISHED: EVIDENCE_RECORDS.filter((r) => r.level === 'ESTABLISHED').length,
    SUPPORTED: EVIDENCE_RECORDS.filter((r) => r.level === 'SUPPORTED').length,
    DEBATED: EVIDENCE_RECORDS.filter((r) => r.level === 'DEBATED').length,
    SPECULATIVE: EVIDENCE_RECORDS.filter((r) => r.level === 'SPECULATIVE').length,
    UNKNOWN: EVIDENCE_RECORDS.filter((r) => r.level === 'UNKNOWN').length,
  };

  return (
    <section id="epistemic" className="py-20 bg-[#F4EFE5] text-[#171513] border-b border-[#D8C7A3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="border-b border-[#D8C7A3] pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
                Chapter 12 // Epistemic Synthesis
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B211B] mt-1">
                What We Know, What We Don't
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold">Full Claim Registry</span>
            </div>
          </div>
          <p className="text-base text-[#2B211B]/80 max-w-3xl mt-3 leading-relaxed">
            Science does not divide historical understanding into simple "true" or "false" binaries. Instead, knowledge exists along a structured spectrum of evidentiary confidence. Explore the complete registry of archaeological, historical, and geological claims analyzed throughout this project.
          </p>
        </div>

        {/* Epistemic Distribution Counters (Interactive Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 border-b border-[#D8C7A3] pb-8 mb-8">
          <button
            type="button"
            onClick={() => setSelectedLevel(selectedLevel === 'ESTABLISHED' ? 'ALL' : 'ESTABLISHED')}
            className={`p-3.5 text-left transition-all cursor-pointer border-2 shadow-xs ${
              selectedLevel === 'ESTABLISHED'
                ? 'bg-white border-emerald-700 ring-2 ring-emerald-700/20 shadow-sm scale-102'
                : 'bg-white/60 border-[#D8C7A3] hover:border-emerald-700 hover:bg-white hover:-translate-y-0.5'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-serif text-3xl font-bold text-emerald-800 leading-none">{counts.ESTABLISHED}</span>
              <span className="w-2.5 h-2.5 bg-emerald-700 shrink-0" />
            </div>
            <span className="font-mono text-xs uppercase font-bold text-emerald-950 block">
              Established
            </span>
            <span className="text-[10px] font-mono text-[#2B211B]/70 block truncate mt-0.5">
              {selectedLevel === 'ESTABLISHED' ? 'Filtering active' : 'Direct physical proof'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedLevel(selectedLevel === 'SUPPORTED' ? 'ALL' : 'SUPPORTED')}
            className={`p-3.5 text-left transition-all cursor-pointer border-2 shadow-xs ${
              selectedLevel === 'SUPPORTED'
                ? 'bg-white border-sky-700 ring-2 ring-sky-700/20 shadow-sm scale-102'
                : 'bg-white/60 border-[#D8C7A3] hover:border-sky-700 hover:bg-white hover:-translate-y-0.5'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-serif text-3xl font-bold text-sky-800 leading-none">{counts.SUPPORTED}</span>
              <span className="w-2.5 h-2.5 bg-sky-700 shrink-0" />
            </div>
            <span className="font-mono text-xs uppercase font-bold text-sky-950 block">
              Supported
            </span>
            <span className="text-[10px] font-mono text-[#2B211B]/70 block truncate mt-0.5">
              {selectedLevel === 'SUPPORTED' ? 'Filtering active' : 'Strong consensus'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedLevel(selectedLevel === 'DEBATED' ? 'ALL' : 'DEBATED')}
            className={`p-3.5 text-left transition-all cursor-pointer border-2 shadow-xs ${
              selectedLevel === 'DEBATED'
                ? 'bg-white border-amber-700 ring-2 ring-amber-700/20 shadow-sm scale-102'
                : 'bg-white/60 border-[#D8C7A3] hover:border-amber-700 hover:bg-white hover:-translate-y-0.5'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-serif text-3xl font-bold text-amber-800 leading-none">{counts.DEBATED}</span>
              <span className="w-2.5 h-2.5 bg-amber-700 shrink-0" />
            </div>
            <span className="font-mono text-xs uppercase font-bold text-amber-950 block">
              Debated
            </span>
            <span className="text-[10px] font-mono text-[#2B211B]/70 block truncate mt-0.5">
              {selectedLevel === 'DEBATED' ? 'Filtering active' : 'Competing models'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedLevel(selectedLevel === 'SPECULATIVE' ? 'ALL' : 'SPECULATIVE')}
            className={`p-3.5 text-left transition-all cursor-pointer border-2 shadow-xs ${
              selectedLevel === 'SPECULATIVE'
                ? 'bg-white border-rose-700 ring-2 ring-rose-700/20 shadow-sm scale-102'
                : 'bg-white/60 border-[#D8C7A3] hover:border-rose-700 hover:bg-white hover:-translate-y-0.5'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-serif text-3xl font-bold text-rose-800 leading-none">{counts.SPECULATIVE}</span>
              <span className="w-2.5 h-2.5 bg-rose-700 shrink-0" />
            </div>
            <span className="font-mono text-xs uppercase font-bold text-rose-950 block">
              Speculative
            </span>
            <span className="text-[10px] font-mono text-[#2B211B]/70 block truncate mt-0.5">
              {selectedLevel === 'SPECULATIVE' ? 'Filtering active' : 'Lacks proof / refuted'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedLevel(selectedLevel === 'UNKNOWN' ? 'ALL' : 'UNKNOWN')}
            className={`p-3.5 text-left transition-all cursor-pointer border-2 shadow-xs ${
              selectedLevel === 'UNKNOWN'
                ? 'bg-white border-stone-700 ring-2 ring-stone-700/20 shadow-sm scale-102'
                : 'bg-white/60 border-[#D8C7A3] hover:border-stone-700 hover:bg-white hover:-translate-y-0.5'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-serif text-3xl font-bold text-stone-700 leading-none">{counts.UNKNOWN}</span>
              <span className="w-2.5 h-2.5 bg-stone-700 shrink-0" />
            </div>
            <span className="font-mono text-xs uppercase font-bold text-stone-900 block">
              Unknown
            </span>
            <span className="text-[10px] font-mono text-[#2B211B]/70 block truncate mt-0.5">
              {selectedLevel === 'UNKNOWN' ? 'Filtering active' : 'Awaiting discovery'}
            </span>
          </button>
        </div>

        {/* Search & Category Filter Bar (Open Clean Layout) */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-4 border-b border-[#D8C7A3]">
          {/* Search Input */}
          <div className="relative flex-1">
            <span className="text-xs font-mono text-[#8A4F3D] absolute left-0 top-2.5 uppercase font-bold">
              SEARCH:
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search claims, evidence, or keywords..."
              className="w-full pl-18 pr-4 py-2 bg-transparent border-b border-[#D8C7A3] text-xs font-mono text-[#171513] placeholder-[#171513]/40 focus:outline-none focus:border-[#8A4F3D]"
            />
          </div>

          {/* Topic Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#8A4F3D] uppercase font-bold">
              TOPIC:
            </span>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="py-2 bg-transparent border-b border-[#D8C7A3] text-xs font-mono text-[#171513] focus:outline-none focus:border-[#8A4F3D] cursor-pointer uppercase font-semibold"
            >
              {topics.map((t) => (
                <option key={t} value={t} className="bg-[#F4EFE5]">{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Claims Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredRecords.map((record) => (
            <div
              key={record.id}
              onClick={() => onSelectRecord(record)}
              className="p-5 bg-white border-2 border-[#D8C7A3] hover:border-[#8A4F3D] hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between relative shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-[#8A4F3D] uppercase font-bold tracking-wider">
                    {record.topic}
                  </span>
                  <EvidenceBadge level={record.level} size="sm" as="span" />
                </div>
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#2B211B] group-hover:text-[#8A4F3D] transition-colors mb-2 leading-snug">
                  {record.claim}
                </h4>
                <p className="text-xs text-[#171513]/75 leading-relaxed mb-4 line-clamp-3">
                  {record.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D8C7A3]/60 flex items-center justify-between text-xs font-mono text-[#8A4F3D] font-bold">
                <span className="group-hover:translate-x-0.5 transition-transform">
                  Inspect Archival Dossier →
                </span>
                <span className="text-[#2B211B]/60 text-[10px] font-normal">{record.primaryEvidence.length} citations</span>
              </div>
            </div>
          ))}
        </div>

        {filteredRecords.length === 0 && (
          <div className="text-center py-12 font-mono text-xs text-[#2B211B]/70 border-t border-[#D8C7A3]">
            No claims matched your search criteria. Reset filters to view all entries.
          </div>
        )}

      </div>
    </section>
  );
};
