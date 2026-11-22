import React, { useState } from 'react';
import { SOURCES_REGISTRY } from '../data/sourcesData';
import { SourceItem } from '../types';

export const SourcesBibliography: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'Archaeology',
    'Geology',
    'Astronomy',
    'Engineering',
    'Epigraphy',
    'Muon Radiography',
  ];

  const filteredSources = SOURCES_REGISTRY.filter(
    (s: SourceItem) => activeCategory === 'ALL' || s.category === activeCategory
  );

  return (
    <section id="sources" className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-6 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold block mb-2">
            08 · Primary Literature
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            Sources & Biblio
          </h1>
        </header>

        {/* ================= CATEGORY FILTERS ================= */}
        <div className="flex flex-wrap gap-5 border-b border-[#B49A72]/20 pb-3 mb-6 text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                  : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= MINIMAL CITATION LIST ================= */}
        <div className="divide-y divide-[#B49A72]/15">
          {filteredSources.map((source: SourceItem) => (
            <article key={source.id} className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline">
              <div className="md:col-span-3 font-mono text-xs">
                <span className="text-[#E8C56E] font-bold uppercase">{source.category}</span>
                <span className="text-[#D8C7A3]/75 ml-2 tabular-nums">{source.year}</span>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-serif font-bold text-base sm:text-lg text-[#F4EFE5] leading-snug">
                  {source.title}
                </h2>
                <p className="text-xs font-mono text-[#D8C7A3]/80 mt-0.5">
                  {source.author} · {source.publication}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
