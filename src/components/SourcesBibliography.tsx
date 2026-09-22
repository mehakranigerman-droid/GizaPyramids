import React, { useState } from 'react';
import { SOURCES_REGISTRY } from '../data/sourcesData';
import { SourceItem } from '../types';
import { BookOpen, ExternalLink, GraduationCap, Search, CheckCircle2, ShieldCheck } from 'lucide-react';

export const SourcesBibliography: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'ALL',
    'Archaeology',
    'Geology',
    'Astronomy',
    'Engineering',
    'Epigraphy',
    'Muon Radiography'
  ];

  const filteredSources = SOURCES_REGISTRY.filter((s: SourceItem) => {
    const matchesCat = activeCategory === 'ALL' || s.category === activeCategory;
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.publication.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="sources" className="py-20 bg-[#2B211B] text-[#F4EFE5] border-b border-[#8A4F3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="border-b border-[#B49A72]/40 pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#8A4F3D]" /> Academic Registry // Research Package
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F4EFE5] mt-1">
                Sources & Scholarly Bibliography
              </h2>
            </div>
            <span className="text-xs font-mono text-[#D8C7A3]">
              {SOURCES_REGISTRY.length} Primary Citations Cataloged
            </span>
          </div>
          <p className="text-base text-[#D8C7A3] max-w-3xl mt-3 leading-relaxed">
            Every factual measurement, historical date, labor metric, and geological finding presented in this visual data story is grounded in peer-reviewed scientific literature and field excavation reports.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="flex flex-col md:flex-row gap-3 mb-8 bg-[#171513] p-3.5 border border-[#B49A72]/40">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-[#8A4F3D]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by author (e.g. Lehner, Tallet, Spence) or title..."
              className="w-full pl-9 pr-4 py-2 bg-[#241B16] border border-[#B49A72]/30 text-xs font-mono text-[#F4EFE5] placeholder-[#D8C7A3]/50 focus:outline-none focus:border-[#8A4F3D]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="px-3 py-2 bg-[#241B16] border border-[#B49A72]/30 text-xs font-mono text-[#D8C7A3] focus:outline-none focus:border-[#8A4F3D]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filteredSources.map((source: SourceItem) => (
            <div
              key={source.id}
              className="bg-[#171513] border border-[#B49A72]/30 p-5 flex flex-col justify-between hover:border-[#8A4F3D] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-[#8A4F3D] uppercase font-bold">
                    {source.category}
                  </span>
                  <span className="font-mono text-xs text-[#D8C7A3]">
                    {source.year}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-base text-[#F4EFE5] mb-2 leading-snug">
                  {source.title}
                </h4>
                <p className="text-xs font-mono text-[#D8C7A3] mb-3">
                  {source.author}
                </p>
                <p className="text-xs text-[#F4EFE5]/80 leading-relaxed font-sans border-t border-[#B49A72]/20 pt-2 mb-3">
                  {source.note}
                </p>
              </div>

              <div className="pt-2 text-[11px] font-mono text-[#8A4F3D] flex items-center justify-between">
                <span className="truncate pr-2">{source.publication}</span>
                <span className="text-emerald-400 shrink-0 text-[10px] border border-emerald-800/60 bg-emerald-950/40 px-1.5 py-0.5">
                  Peer-Reviewed
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Colophon / Student Master's Statement */}
        <div className="bg-[#171513] border-2 border-[#B49A72] p-6 sm:p-8">
          <div className="flex items-center gap-3 border-b border-[#B49A72]/40 pb-4 mb-4">
            <GraduationCap className="w-6 h-6 text-[#8A4F3D]" />
            <div>
              <h3 className="font-serif text-xl font-bold text-[#F4EFE5]">
                Academic Colophon & Methodological Statement
              </h3>
              <p className="font-mono text-xs text-[#D8C7A3]">
                Master of Visual and Communication Design // Academic Assignment 2
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans text-[#D8C7A3] leading-relaxed">
            <div className="space-y-3">
              <p>
                <strong>Epistemic Design Philosophy:</strong> This interactive data story was created to resolve the growing polarization between dry academic excavation reports and viral sensationalism. By translating peer-reviewed archaeological datasets into visual hierarchies, users can directly explore both what is scientifically verified and what remains genuinely unresolved.
              </p>
              <p>
                <strong>Visual Aesthetic Discipline:</strong> Built adhering to natural physical materials of the Giza Plateau: aged Nummulitic limestone, desert sand, ancient Nile mud silt, Tura calcite, and terracotta ceramic sealings. Intentionally banished are commercial AI gradients, neon turquoise Egyptian stereotypes, and glassmorphic tropes.
              </p>
            </div>

            <div className="space-y-3 bg-[#241B16] p-4 border border-[#B49A72]/30">
              <span className="font-mono font-bold text-[#F4EFE5] block uppercase text-[11px]">
                Editorial Integrity Charter
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-[#D8C7A3]/90 font-mono text-[11px]">
                <li>Zero invented dates, dimensions, or attributions.</li>
                <li>Strict epistemic separation of facts from hypotheses.</li>
                <li>Attribution based on primary epigraphic evidence (Diary of Merer, worker graffiti, Dream Stela).</li>
                <li>Incorporation of the latest 2023–2024 peer-reviewed discoveries (Ghoneim Ahramat branch; ScanPyramids North Face Corridor).</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#B49A72]/30 text-center font-mono text-xs text-[#D8C7A3]/60">
            © Giza Pyramids Data Story // Built for Educational & Scholarly Research
          </div>
        </div>

      </div>
    </section>
  );
};
