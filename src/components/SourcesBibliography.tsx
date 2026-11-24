import React, { useState } from 'react';
import { SOURCES_REGISTRY } from '../data/sourcesData';
import { SourceItem } from '../types';

export const SourcesBibliography: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const disciplineCategories = [
    { name: 'Archaeology', color: '#E8C56E' },
    { name: 'Geology', color: '#C97B63' },
    { name: 'Astronomy', color: '#F4EFE5' },
    { name: 'Engineering', color: '#B49A72' },
    { name: 'Epigraphy', color: '#84B89A' },
    { name: 'Muon Radiography', color: '#8AB2C7' },
  ];

  const categories = ['ALL', ...disciplineCategories.map((d) => d.name)];

  const filteredSources = SOURCES_REGISTRY.filter(
    (s: SourceItem) => activeCategory === 'ALL' || s.category === activeCategory
  );

  return (
    <section id="sources" className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/15 pb-6 mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E8C56E] font-medium block mb-2">
            09 · Primary Literature
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            Sources & Biblio
          </h1>
          <p className="font-serif-text italic text-base sm:text-lg text-[#D8C7A3] mt-1.5">
            {SOURCES_REGISTRY.length} peer-reviewed surveys, geological cores, papyri, and muon scans
          </p>
        </header>

        {/* ================= DISCIPLINE BREAKDOWN INFOGRAPHIC ================= */}
        <div className="mb-8">
          <div className="h-[3px] flex overflow-hidden bg-[#2B211B] mb-4">
            {disciplineCategories.map((d) => {
              const count = SOURCES_REGISTRY.filter((s) => s.category === d.name).length;
              if (count === 0) return null;
              return (
                <div
                  key={d.name}
                  onClick={() => setActiveCategory(d.name)}
                  className="cursor-pointer transition-opacity hover:opacity-80"
                  style={{
                    width: `${(count / SOURCES_REGISTRY.length) * 100}%`,
                    backgroundColor: d.color,
                  }}
                  title={`${d.name}: ${count}`}
                />
              );
            })}
          </div>

          {/* ================= CATEGORY FILTERS ================= */}
          <div className="flex flex-wrap gap-5 border-b border-[#B49A72]/20 pb-3 text-xs font-mono">
            {categories.map((cat) => {
              const count =
                cat === 'ALL'
                  ? SOURCES_REGISTRY.length
                  : SOURCES_REGISTRY.filter((s) => s.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap tabular-nums ${
                    activeCategory === cat
                      ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                      : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= MINIMAL CITATION LIST ================= */}
        <div className="divide-y divide-[#B49A72]/15">
          {filteredSources.map((source: SourceItem) => (
            <article key={source.id} className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline">
              <div className="md:col-span-3 font-mono text-xs">
                <span className="text-[#E8C56E] font-bold uppercase">{source.category}</span>
                <span className="text-[#D8C7A3]/75 ml-2 tabular-nums">{source.year}</span>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-serif font-bold text-base text-[#F4EFE5] leading-snug">
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
