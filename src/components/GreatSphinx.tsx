import React, { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';
import { IMAGES } from '../assets/images';

export const GreatSphinx: React.FC = () => {
  const [activeStratum, setActiveStratum] = useState<'m1' | 'm2' | 'm3'>('m2');
  const [debateSide, setDebateSide] = useState<'mainstream' | 'waterHypothesis'>('mainstream');

  const strataData = {
    m1: {
      name: 'Member I · Base & Paws',
      rockType: 'Dense reef limestone (Rosetau bed)',
      notes: 'Forms the ditch floor and lower paws; durable stone that resisted weathering.',
    },
    m2: {
      name: 'Member II · Body & Flanks',
      rockType: 'Alternating soft marl and hard dolomitic limestone',
      notes:
        'Soft marl layers crumble under salt crystallization and seasonal runoff, creating coved horizontal bands.',
    },
    m3: {
      name: 'Member III · Head & Headdress',
      rockType: 'Pure dense Mokattam limestone',
      notes: 'Carved from a harder limestone knoll, preserving finer detail than the body.',
    },
  };

  return (
    <section id="sphinx" className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              05 · Hor-em-akhet
            </span>
            <EvidenceBadge level="SUPPORTED" as="span" surface="dark" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            The Great Sphinx
          </h1>
          <p className="text-sm sm:text-base text-[#D8C7A3] max-w-2xl mt-2.5 leading-relaxed">
            Monolithic limestone statue sculpted inside Khafre’s quarry ditch along Giza’s east-facing axis.
          </p>
        </header>

        {/* ================= 4 KEY DIMENSIONS ================= */}
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-[#B49A72]/20 pb-8 mb-10">
          <div>
            <dt className="font-mono text-xs text-[#E8C56E] uppercase font-bold tracking-wider">Length</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">73.5 m</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-[#E8C56E] uppercase font-bold tracking-wider">Height</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">20.2 m</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-[#E8C56E] uppercase font-bold tracking-wider">Width</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">19.3 m</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-[#E8C56E] uppercase font-bold tracking-wider">Axis</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">089.5° E</dd>
          </div>
        </dl>

        {/* ================= PHOTOGRAPH ================= */}
        <figure className="mb-12">
          <div className="aspect-[16/7] sm:aspect-[2.4/1] overflow-hidden bg-[#140F0B]">
            <img
              src={IMAGES.greatSphinx}
              alt="The Great Sphinx of Giza facing east in its limestone enclosure with Khafre's pyramid behind"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        </figure>

        {/* ================= BEDROCK STRATA ================= */}
        <div className="border-t border-[#B49A72]/20 pt-9 mb-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-7">
            <h2 className="text-2xl font-serif font-bold text-[#F4EFE5]">
              Bedrock Strata
            </h2>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveStratum('m3')}
                className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap ${
                  activeStratum === 'm3'
                    ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                    : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                }`}
              >
                Member III · Head
              </button>
              <button
                type="button"
                onClick={() => setActiveStratum('m2')}
                className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap ${
                  activeStratum === 'm2'
                    ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                    : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                }`}
              >
                Member II · Body
              </button>
              <button
                type="button"
                onClick={() => setActiveStratum('m1')}
                className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap ${
                  activeStratum === 'm1'
                    ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                    : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                }`}
              >
                Member I · Base
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 bg-[#140F0B] p-4">
              <svg viewBox="0 0 500 260" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                <g onClick={() => setActiveStratum('m3')} className="cursor-pointer">
                  <rect
                    x="240" y="20" width="120" height="58" rx="3"
                    fill={activeStratum === 'm3' ? '#8A4F3D' : '#5C4A3E'}
                    stroke="#D8C7A3" strokeWidth="1.5"
                  />
                  <text x="300" y="54" fill="#F4EFE5" fontSize="11" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    MEMBER III
                  </text>
                </g>

                <g onClick={() => setActiveStratum('m2')} className="cursor-pointer">
                  <path
                    d="M 60,100 Q 100,95 150,100 Q 200,85 260,95 L 420,95 Q 450,105 470,150 L 470,210 L 50,210 L 50,150 Z"
                    fill={activeStratum === 'm2' ? '#B49A72' : '#45352B'}
                    stroke={activeStratum === 'm2' ? '#F3D37A' : '#D8C7A3'}
                    strokeWidth="2"
                  />
                  <text x="255" y="158" fill={activeStratum === 'm2' ? '#171513' : '#F4EFE5'} fontSize="12" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    MEMBER II · BODY
                  </text>
                </g>

                <g onClick={() => setActiveStratum('m1')} className="cursor-pointer">
                  <rect
                    x="30" y="215" width="450" height="32"
                    fill={activeStratum === 'm1' ? '#8A4F3D' : '#33261F'}
                    stroke="#D8C7A3" strokeWidth="1.5"
                  />
                  <text x="255" y="236" fill="#F4EFE5" fontSize="11" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    MEMBER I · PAWS & BASE
                  </text>
                </g>
              </svg>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <h3 className="text-xl font-serif font-bold text-[#F4EFE5]">
                {strataData[activeStratum].name}
              </h3>
              <p className="text-xs font-mono text-[#E8C56E]">
                {strataData[activeStratum].rockType}
              </p>
              <p className="text-sm text-[#E2D2B4] leading-relaxed">
                {strataData[activeStratum].notes}
              </p>
            </div>
          </div>
        </div>

        {/* ================= DATING & EROSION DEBATE ================= */}
        <div className="border-t border-[#B49A72]/20 pt-9">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-6">
            <h2 className="text-2xl font-serif font-bold text-[#F4EFE5]">
              Age & Weathering Debate
            </h2>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
              <button
                type="button"
                onClick={() => setDebateSide('mainstream')}
                className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap ${
                  debateSide === 'mainstream'
                    ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                    : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                }`}
              >
                4th Dynasty (c. 2540 BCE)
              </button>
              <button
                type="button"
                onClick={() => setDebateSide('waterHypothesis')}
                className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap ${
                  debateSide === 'waterHypothesis'
                    ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                    : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                }`}
              >
                Water Erosion (5000+ BCE)
              </button>
            </div>
          </div>

          {debateSide === 'mainstream' ? (
            <div className="space-y-3 max-w-3xl text-sm text-[#E2D2B4] leading-relaxed">
              <div className="flex items-center gap-3">
                <EvidenceBadge level="SUPPORTED" as="span" surface="dark" />
                <span className="font-mono text-xs text-[#D8C7A3]">Reader · Lehner · Gauri</span>
              </div>
              <p>
                Core sampling matches the megaliths of Khafre’s temples directly to the Sphinx quarry ditch. Subsurface salt crystallization (haloclasty) in soft Member II marl accounts for the deep horizontal weathering.
              </p>
            </div>
          ) : (
            <div className="space-y-3 max-w-3xl text-sm text-[#E2D2B4] leading-relaxed">
              <div className="flex items-center gap-3">
                <EvidenceBadge level="DEBATED" as="span" surface="dark" />
                <span className="font-mono text-xs text-[#D8C7A3]">Robert Schoch · John Anthony West</span>
              </div>
              <p>
                Attributes vertical fissures on the enclosure walls to heavy early Holocene rainfall prior to 5000 BCE, though zero pre-dynastic settlements or quarrying tools exist to corroborate an earlier culture.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
