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
    <section id="sources" className="py-20 bg-[#2B211B] bg-surveyor-grid-dark text-[#F4EFE5] border-b border-[#8A4F3D]">
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

        {/* Filter & Search Toolbar (Open Clean Layout) */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 pb-4 border-b border-[#B49A72]/20">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-0 top-2.5 text-[#8A4F3D]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by author (e.g. Lehner, Tallet, Spence) or title..."
              className="w-full pl-6 pr-4 py-2 bg-transparent border-b border-[#B49A72]/30 text-xs font-mono text-[#F4EFE5] placeholder-[#D8C7A3]/40 focus:outline-none focus:border-[#8A4F3D]"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="py-2 bg-transparent border-b border-[#B49A72]/30 text-xs font-mono text-[#D8C7A3] focus:outline-none focus:border-[#8A4F3D] cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-[#1C1613] text-[#F4EFE5]">{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Sources Grid (Open Border-T Rail) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredSources.map((source: SourceItem) => (
            <div
              key={source.id}
              className="border-t border-[#B49A72]/30 pt-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-[#8A4F3D] uppercase font-bold tracking-wider">
                    {source.category}
                  </span>
                  <span className="font-mono text-xs text-[#D8C7A3]/70">
                    {source.year}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-base text-[#F4EFE5] mb-1.5 leading-snug">
                  {source.title}
                </h4>
                <p className="text-xs font-mono text-[#D8C7A3] mb-2">
                  {source.author}
                </p>
                <p className="text-xs text-[#F4EFE5]/75 leading-relaxed font-sans mb-4">
                  {source.note}
                </p>
              </div>

              <div className="pt-2 border-t border-[#B49A72]/15 text-[11px] font-mono text-[#8A4F3D] flex items-center justify-between">
                <span className="truncate pr-2 text-[#D8C7A3]/80">{source.publication}</span>
                <span className="text-emerald-400 shrink-0 text-[10px] font-mono">
                  ● Peer-Reviewed
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Colophon / Student Master's Statement (Open Layout) */}
        <div className="border-t border-[#B49A72]/30 pt-10">
          <div className="flex items-center gap-3 border-b border-[#B49A72]/20 pb-4 mb-6">
            <GraduationCap className="w-6 h-6 text-[#8A4F3D]" />
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#F4EFE5]">
                Academic Colophon & Methodological Statement
              </h3>
              <p className="font-mono text-xs text-[#D8C7A3]/70 mt-0.5">
                Master of Visual and Communication Design // Academic Assignment 2
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans text-[#D8C7A3] leading-relaxed">
            <div className="space-y-4">
              <p>
                <strong className="text-[#F4EFE5] block mb-1">Epistemic Design Philosophy:</strong> This interactive data story was created to resolve the growing polarization between dry academic excavation reports and viral sensationalism. By translating peer-reviewed archaeological datasets into visual hierarchies, users can directly explore both what is scientifically verified and what remains genuinely unresolved.
              </p>
              <p>
                <strong className="text-[#F4EFE5] block mb-1">Visual Aesthetic Discipline:</strong> Built adhering to natural physical materials of the Giza Plateau: aged Nummulitic limestone, desert sand, ancient Nile mud silt, Tura calcite, and terracotta ceramic sealings. Intentionally banished are commercial AI gradients, neon turquoise Egyptian stereotypes, and glassmorphic tropes.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono font-bold text-[#F4EFE5] block uppercase text-[11px] tracking-wider">
                Editorial Integrity Charter
              </span>
              <ul className="space-y-2 list-disc list-inside text-[#D8C7A3]/90 font-mono text-[11px]">
                <li>Zero invented dates, dimensions, or attributions.</li>
                <li>Strict epistemic separation of facts from hypotheses.</li>
                <li>Attribution based on primary epigraphic evidence (Diary of Merer, worker graffiti, Dream Stela).</li>
                <li>Incorporation of the latest 2023–2024 peer-reviewed discoveries (Ghoneim Ahramat branch; ScanPyramids North Face Corridor).</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#B49A72]/20 text-center font-mono text-xs text-[#D8C7A3]/50">
            © Giza Pyramids Data Story // Built for Educational & Scholarly Research
          </div>
        </div>

      </div>
    </section>
  );
};
