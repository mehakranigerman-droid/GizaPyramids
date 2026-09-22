import React, { useState } from 'react';
import { EVIDENCE_RECORDS, EVIDENCE_LEVELS } from '../data/evidenceData';
import { EvidenceRecord, EvidenceLevel } from '../types';
import { EvidenceBadge } from './EvidenceBadge';
import { Search, Filter, ShieldCheck, HelpCircle, Layers, CheckCircle2 } from 'lucide-react';

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

        {/* Epistemic Distribution Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          <button
            type="button"
            onClick={() => setSelectedLevel(selectedLevel === 'ESTABLISHED' ? 'ALL' : 'ESTABLISHED')}
            className={`p-3.5 border text-left transition-all cursor-pointer ${
              selectedLevel === 'ESTABLISHED'
                ? 'border-emerald-700 bg-emerald-950/20 shadow-md ring-2 ring-emerald-600'
                : 'border-emerald-800/40 bg-emerald-950/5 hover:bg-emerald-950/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#22c55e]" />
              <span className="font-serif text-2xl font-bold text-emerald-800">{counts.ESTABLISHED}</span>
            </div>
            <span className="font-mono text-xs uppercase font-bold text-emerald-900 block mt-1">
              Established
            </span>
            <span className="text-[10px] font-mono text-[#2B211B]/60 block truncate">Direct physical proof</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedLevel(selectedLevel === 'SUPPORTED' ? 'ALL' : 'SUPPORTED')}
            className={`p-3.5 border text-left transition-all cursor-pointer ${
              selectedLevel === 'SUPPORTED'
                ? 'border-sky-700 bg-sky-950/20 shadow-md ring-2 ring-sky-600'
                : 'border-sky-800/40 bg-sky-950/5 hover:bg-sky-950/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
              <span className="font-serif text-2xl font-bold text-sky-800">{counts.SUPPORTED}</span>
            </div>
            <span className="font-mono text-xs uppercase font-bold text-sky-900 block mt-1">
              Supported
            </span>
            <span className="text-[10px] font-mono text-[#2B211B]/60 block truncate">Strong consensus</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedLevel(selectedLevel === 'DEBATED' ? 'ALL' : 'DEBATED')}
            className={`p-3.5 border text-left transition-all cursor-pointer ${
              selectedLevel === 'DEBATED'
                ? 'border-amber-700 bg-amber-950/20 shadow-md ring-2 ring-amber-600'
                : 'border-amber-800/40 bg-amber-950/5 hover:bg-amber-950/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_6px_#eab308]" />
              <span className="font-serif text-2xl font-bold text-amber-800">{counts.DEBATED}</span>
            </div>
            <span className="font-mono text-xs uppercase font-bold text-amber-900 block mt-1">
              Debated
            </span>
            <span className="text-[10px] font-mono text-[#2B211B]/60 block truncate">Competing models</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedLevel(selectedLevel === 'SPECULATIVE' ? 'ALL' : 'SPECULATIVE')}
            className={`p-3.5 border text-left transition-all cursor-pointer ${
              selectedLevel === 'SPECULATIVE'
                ? 'border-rose-700 bg-rose-950/20 shadow-md ring-2 ring-rose-600'
                : 'border-rose-800/40 bg-rose-950/5 hover:bg-rose-950/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_6px_#ef4444]" />
              <span className="font-serif text-2xl font-bold text-rose-800">{counts.SPECULATIVE}</span>
            </div>
            <span className="font-mono text-xs uppercase font-bold text-rose-900 block mt-1">
              Speculative
            </span>
            <span className="text-[10px] font-mono text-[#2B211B]/60 block truncate">Lacks proof / refuted</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedLevel(selectedLevel === 'UNKNOWN' ? 'ALL' : 'UNKNOWN')}
            className={`p-3.5 border text-left transition-all cursor-pointer ${
              selectedLevel === 'UNKNOWN'
                ? 'border-stone-700 bg-stone-900/20 shadow-md ring-2 ring-stone-600'
                : 'border-stone-600/40 bg-stone-900/5 hover:bg-stone-900/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-400 shadow-[0_0_6px_#a8a29e]" />
              <span className="font-serif text-2xl font-bold text-stone-700">{counts.UNKNOWN}</span>
            </div>
            <span className="font-mono text-xs uppercase font-bold text-stone-800 block mt-1">
              Unknown
            </span>
            <span className="text-[10px] font-mono text-[#2B211B]/60 block truncate">Awaiting discovery</span>
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row gap-3 mb-6 bg-[#EFE7DA] p-3.5 border border-[#D8C7A3]">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-[#8A4F3D]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search claims, evidence, or keywords..."
              className="w-full pl-9 pr-4 py-2 bg-[#F4EFE5] border border-[#D8C7A3] text-xs font-mono text-[#171513] placeholder-[#171513]/50 focus:outline-none focus:border-[#8A4F3D]"
            />
          </div>

          {/* Topic Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#8A4F3D] uppercase font-bold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Topic:
            </span>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-3 py-2 bg-[#F4EFE5] border border-[#D8C7A3] text-xs font-mono text-[#171513] focus:outline-none focus:border-[#8A4F3D]"
            >
              {topics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Claims Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filteredRecords.map((record) => (
            <div
              key={record.id}
              onClick={() => onSelectRecord(record)}
              className="bg-[#EFE7DA] border border-[#B49A72] p-5 flex flex-col justify-between hover:border-[#8A4F3D] hover:shadow-md transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-[#8A4F3D] uppercase font-bold">
                    {record.topic}
                  </span>
                  <EvidenceBadge level={record.level} size="sm" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#2B211B] group-hover:text-[#8A4F3D] transition-colors mb-2">
                  {record.claim}
                </h4>
                <p className="text-xs text-[#171513]/80 leading-relaxed mb-4 line-clamp-3">
                  {record.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D8C7A3] flex items-center justify-between text-[11px] font-mono text-[#8A4F3D]">
                <span>Inspect Evidence Sources →</span>
                <span className="text-[#2B211B]/60">{record.primaryEvidence.length} primary proofs</span>
              </div>
            </div>
          ))}
        </div>

        {filteredRecords.length === 0 && (
          <div className="text-center py-12 bg-[#EFE7DA] border border-[#D8C7A3] font-mono text-xs text-[#2B211B]">
            No claims matched your search criteria. Reset filters to view all entries.
          </div>
        )}

      </div>
    </section>
  );
};
