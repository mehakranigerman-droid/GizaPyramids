import React, { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';
import { IMAGES } from '../assets/images';

export const GreatSphinx: React.FC = () => {
  const [activeStratum, setActiveStratum] = useState<'m1' | 'm2' | 'm3'>('m2');
  const [debateSide, setDebateSide] = useState<'mainstream' | 'waterHypothesis'>('mainstream');

  const strataData = {
    m3: {
      name: 'Member III · Head & Headdress',
      rockType: 'Pure dense Mokattam limestone',
      resistancePct: 88,
      notes: 'Hard upper knoll preserved sharp facial carving above the softer torso.',
    },
    m2: {
      name: 'Member II · Body & Flanks',
      rockType: 'Alternating soft marl & dolomite layers',
      resistancePct: 26,
      notes: 'Soft marl bands crumble under subsurface salt crystallization, carving deep horizontal coves.',
    },
    m1: {
      name: 'Member I · Paws & Quarry Floor',
      rockType: 'Dense reef limestone (Rosetau bed)',
      resistancePct: 92,
      notes: 'Durable base bedrock anchoring the enclosure floor and massive masonry paws.',
    },
  };

  return (
    <section id="sphinx" className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-6 mb-9">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              05 · Hor-em-akhet
            </span>
            <EvidenceBadge level="SUPPORTED" as="span" surface="dark" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            The Great Sphinx
          </h1>
          <p className="font-serif-text italic text-base sm:text-lg text-[#D8C7A3] mt-1.5">
            Monolithic limestone sculpture carved directly inside Khafre’s east quarry ditch
          </p>
        </header>

        {/* ================= KPI + MONOLITH PROPORTION GRAPHIC ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[#B49A72]/20 pb-8 mb-10">
          <dl className="md:col-span-7 grid grid-cols-2 gap-6">
            <div>
              <dt className="font-mono text-[11px] text-[#D8C7A3]/80 uppercase tracking-wider">Length</dt>
              <dd className="text-3xl font-serif font-bold text-[#F3D37A] mt-1 tabular-nums">73.5 m</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] text-[#D8C7A3]/80 uppercase tracking-wider">Height</dt>
              <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">20.2 m</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] text-[#D8C7A3]/80 uppercase tracking-wider">Width</dt>
              <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">19.3 m</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] text-[#D8C7A3]/80 uppercase tracking-wider">Axis</dt>
              <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">089.5° E</dd>
            </div>
          </dl>

          <div className="md:col-span-5 bg-[#140F0B] p-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#E8C56E] block mb-1.5">
              Outcrop Proportion · 3.6 : 1 Aspect
            </span>
            <svg viewBox="0 0 320 110" className="w-full h-auto">
              <line x1="20" y1="88" x2="300" y2="88" stroke="#B49A72" strokeWidth="1" />
              {/* Sphinx side profile silhouette */}
              <path
                d="M 45,88 L 45,62 Q 55,54 85,54 L 185,54 L 195,28 L 222,28 L 228,50 L 235,72 L 280,72 L 280,88 Z"
                fill="#B49A72"
                fillOpacity="0.35"
                stroke="#E8C56E"
                strokeWidth="1.5"
              />
              {/* Length arrow */}
              <line x1="45" y1="98" x2="280" y2="98" stroke="#E2D2B4" strokeWidth="1" />
              <text x="162" y="108" fill="#F3D37A" fontSize="9" fontFamily="monospace" textAnchor="middle">
                73.5 m (241 ft) East–West
              </text>
              {/* Height marker */}
              <line x1="30" y1="28" x2="30" y2="88" stroke="#C97B63" strokeWidth="1" />
              <text x="24" y="60" fill="#C97B63" fontSize="9" fontFamily="monospace" textAnchor="end">
                20.2 m
              </text>
            </svg>
          </div>
        </div>

        {/* ================= PHOTOGRAPH ================= */}
        <figure className="mb-12">
          <div className="relative aspect-[16/7] sm:aspect-[2.4/1] overflow-hidden bg-[#140F0B]">
            <img
              src={IMAGES.greatSphinx}
              alt="The Great Sphinx of Giza facing east in its limestone enclosure with Khafre's pyramid behind"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1510]/60 via-transparent to-[#1C1510]/20 pointer-events-none" />
          </div>
        </figure>

        {/* ================= BEDROCK STRATA + WEATHERING RESISTANCE ================= */}
        <div className="border-t border-[#B49A72]/20 pt-9 mb-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-7">
            <h2 className="text-2xl font-serif font-bold text-[#F4EFE5]">
              Bedrock Strata & Durability
            </h2>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
              {(['m3', 'm2', 'm1'] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveStratum(key)}
                  className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap ${
                    activeStratum === key
                      ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                      : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                  }`}
                >
                  {key === 'm3' ? 'Member III · Head' : key === 'm2' ? 'Member II · Body' : 'Member I · Base'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 bg-[#140F0B] p-4">
              <svg viewBox="0 0 500 245" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                <g onClick={() => setActiveStratum('m3')} className="cursor-pointer">
                  <rect
                    x="240" y="16" width="120" height="56" rx="2"
                    fill={activeStratum === 'm3' ? '#8A4F3D' : '#5C4A3E'}
                    stroke="#D8C7A3" strokeWidth="1.5"
                  />
                  <text x="300" y="49" fill="#F4EFE5" fontSize="11" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    MEMBER III
                  </text>
                </g>

                <g onClick={() => setActiveStratum('m2')} className="cursor-pointer">
                  <path
                    d="M 60,94 Q 100,89 150,94 Q 200,79 260,89 L 420,89 Q 450,99 470,144 L 470,198 L 50,198 L 50,144 Z"
                    fill={activeStratum === 'm2' ? '#B49A72' : '#45352B'}
                    stroke={activeStratum === 'm2' ? '#F3D37A' : '#D8C7A3'}
                    strokeWidth="2"
                  />
                  <text x="255" y="150" fill={activeStratum === 'm2' ? '#171513' : '#F4EFE5'} fontSize="12" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    MEMBER II · BODY
                  </text>
                </g>

                <g onClick={() => setActiveStratum('m1')} className="cursor-pointer">
                  <rect
                    x="30" y="204" width="450" height="30"
                    fill={activeStratum === 'm1' ? '#8A4F3D' : '#33261F'}
                    stroke="#D8C7A3" strokeWidth="1.5"
                  />
                  <text x="255" y="224" fill="#F4EFE5" fontSize="11" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    MEMBER I · PAWS & BASE
                  </text>
                </g>
              </svg>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#F4EFE5]">
                  {strataData[activeStratum].name}
                </h3>
                <p className="text-xs font-mono text-[#E8C56E] mt-1">
                  {strataData[activeStratum].rockType}
                </p>
                <p className="text-sm text-[#E2D2B4] leading-relaxed mt-2">
                  {strataData[activeStratum].notes}
                </p>
              </div>

              {/* Weathering Resistance Comparative Bars */}
              <div className="space-y-2.5 pt-2 border-t border-[#B49A72]/15">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#D8C7A3]/80 block">
                  Geological Erosion Resistance
                </span>
                {(['m3', 'm2', 'm1'] as const).map((k) => (
                  <div key={k} className="space-y-1">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span className={activeStratum === k ? 'text-[#F3D37A] font-bold' : 'text-[#D8C7A3]/80'}>
                        {k === 'm3' ? 'Member III (Head)' : k === 'm2' ? 'Member II (Body)' : 'Member I (Base)'}
                      </span>
                      <span className="tabular-nums text-[#E2D2B4]">{strataData[k].resistancePct}%</span>
                    </div>
                    <div className="h-[3px] bg-[#2B211B] overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          k === 'm2' ? 'bg-[#C97B63]' : 'bg-[#E8C56E]'
                        }`}
                        style={{ width: `${strataData[k].resistancePct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= AGE & WEATHERING TIMELINE ================= */}
        <div className="border-t border-[#B49A72]/20 pt-9">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-6">
            <h2 className="text-2xl font-serif font-bold text-[#F4EFE5]">
              Age & Weathering Comparison
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
            <div className="space-y-2.5 max-w-3xl text-sm text-[#E2D2B4] leading-relaxed">
              <div className="flex items-center gap-3">
                <EvidenceBadge level="SUPPORTED" as="span" surface="dark" />
                <span className="font-mono text-xs text-[#D8C7A3]">Reader · Lehner · Gauri</span>
              </div>
              <p>
                Quarry matching ties Sphinx ditch stone to Khafre’s temples, while salt crystallization (haloclasty) explains the eroded Member II flanks.
              </p>
            </div>
          ) : (
            <div className="space-y-2.5 max-w-3xl text-sm text-[#E2D2B4] leading-relaxed">
              <div className="flex items-center gap-3">
                <EvidenceBadge level="DEBATED" as="span" surface="dark" />
                <span className="font-mono text-xs text-[#D8C7A3]">Schoch · West</span>
              </div>
              <p>
                Attributes vertical enclosure fissures to early Holocene rains, though no pre-dynastic settlements or quarry tools exist at Giza.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
