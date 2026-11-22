import React, { useState } from 'react';
import { PYRAMIDS, DYNASTY_CHRONOLOGY } from '../data/pyramidsData';
import { KHUFU_CHAMBERS } from '../data/khufuInteriorData';
import { IMAGES } from '../assets/images';
import { EvidenceBadge } from './EvidenceBadge';
import { InlineEvidenceBlock } from './InlineEvidenceBlock';

export const KhufuPage: React.FC = () => {
  const khufu = PYRAMIDS.find((p) => p.id === 'khufu') || PYRAMIDS[0];
  const dynastyContext = DYNASTY_CHRONOLOGY.filter(
    (g) => g.pharaoh === 'Sneferu' || g.pharaoh === 'Khufu'
  );

  const [metricUnit, setMetricUnit] = useState<'meters' | 'feet'>('meters');
  const [filterType, setFilterType] = useState<'all' | 'known' | 'detected' | 'shafts'>('all');
  const [selectedChamberId, setSelectedChamberId] = useState<string>('grand-gallery');
  const [simulationStep, setSimulationStep] = useState<'cosmic' | 'detector' | 'discovery'>('discovery');

  const mToFt = (m: number) => (m * 3.28084).toFixed(1);

  const filteredChambers = KHUFU_CHAMBERS.filter((c) => {
    if (filterType === 'known') return c.status === 'KNOWN_STRUCTURE' && c.iconType !== 'shaft';
    if (filterType === 'detected') return c.status === 'DETECTED_SPACE';
    if (filterType === 'shafts') return c.iconType === 'shaft';
    return true;
  });

  const selectedChamber =
    KHUFU_CHAMBERS.find((c) => c.id === selectedChamberId) || KHUFU_CHAMBERS[0];

  const coordMap: Record<string, { x: number; y: number }> = {
    'original-entrance': { x: 295, y: 440 },
    'north-face-corridor': { x: 320, y: 425 },
    'descending-passage': { x: 420, y: 525 },
    'subterranean-chamber': { x: 525, y: 560 },
    'well-shaft-grotto': { x: 380, y: 470 },
    'ascending-passage': { x: 370, y: 440 },
    'queens-chamber': { x: 400, y: 390 },
    'queens-shafts': { x: 320, y: 340 },
    'grand-gallery': { x: 440, y: 370 },
    'big-void': { x: 450, y: 285 },
    antechamber: { x: 488, y: 340 },
    'kings-chamber': { x: 517, y: 337 },
    'relieving-chambers': { x: 517, y: 295 },
    'kings-shafts': { x: 610, y: 265 },
  };

  return (
    <section className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ================= PAGE HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-7 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              01 · {khufu.reignPeriod}
            </span>
            <div className="flex items-center gap-4">
              <EvidenceBadge level="ESTABLISHED" as="span" surface="dark" />
              <EvidenceBadge level="UNKNOWN" as="span" surface="dark" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            Great Pyramid (Khufu)
          </h1>
          <p className="font-serif-text italic text-lg text-[#E2D2B4] mt-1">
            {khufu.arabicName}
          </p>
          <p className="text-sm sm:text-base text-[#D8C7A3] max-w-3xl mt-3 leading-relaxed">
            {khufu.notableFeatures}
          </p>
        </header>

        {/* ================= PART I: SCALE & ENGINEERING PROFILE ================= */}
        <div className="mb-14">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-7">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EFE5]">
              I. Scale & Engineering Profile
            </h2>
            <div className="flex items-center gap-5 text-xs font-mono">
              <button
                type="button"
                onClick={() => setMetricUnit('meters')}
                className={`pb-1 cursor-pointer border-b-2 transition-colors ${
                  metricUnit === 'meters'
                    ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                    : 'border-transparent text-[#E2D2B4]/70 hover:text-[#F4EFE5]'
                }`}
              >
                Metric (m)
              </button>
              <button
                type="button"
                onClick={() => setMetricUnit('feet')}
                className={`pb-1 cursor-pointer border-b-2 transition-colors ${
                  metricUnit === 'feet'
                    ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                    : 'border-transparent text-[#E2D2B4]/70 hover:text-[#F4EFE5]'
                }`}
              >
                Imperial (ft)
              </button>
            </div>
          </div>

          {/* Open Scale Silhouette Highlighting Khufu */}
          <div className="bg-[#140F0B] p-5 mb-10">
            <div className="flex items-center justify-between text-xs font-mono text-[#D8C7A3]/80 pb-3 mb-4 border-b border-[#B49A72]/20">
              <span>RELATIVE GIZA SCALE · KHUFU HIGHLIGHTED</span>
              <span className="tabular-nums">2,583,283 m³ · ~5.75M TONS</span>
            </div>
            <div className="w-full overflow-x-auto">
              <svg viewBox="0 0 900 320" className="w-full min-w-[640px] h-auto" preserveAspectRatio="xMidYMid meet">
                <line x1="20" y1="265" x2="880" y2="265" stroke="#B49A72" strokeWidth="1.5" />

                <polygon points="62,265 200,89 338,265" fill="#B49A72" stroke="#F4EFE5" strokeWidth="2" />
                <text x="200" y="290" fill="#F3D37A" fontSize="13" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                  KHUFU (ACTIVE)
                </text>
                <text x="200" y="307" fill="#E2D2B4" fontSize="11" fontFamily="monospace" textAnchor="middle">
                  {metricUnit === 'meters' ? '146.6 m × 230.3 m' : `${mToFt(146.6)} ft × ${mToFt(230.34)} ft`}
                </text>

                <polygon points="381,265 510,93 639,265" fill="#2E231C" stroke="#B49A72" strokeWidth="1" opacity="0.55" />
                <text x="510" y="290" fill="#D8C7A3" fontSize="12" fontFamily="Cinzel" textAnchor="middle" opacity="0.65">
                  Khafre
                </text>

                <polygon points="698,265 760,187 822,265" fill="#271D17" stroke="#B49A72" strokeWidth="1" opacity="0.55" />
                <text x="760" y="290" fill="#D8C7A3" fontSize="12" fontFamily="Cinzel" textAnchor="middle" opacity="0.65">
                  Menkaure
                </text>
              </svg>
            </div>
          </div>

          {/* Open 3-Column Metrics & Specs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="font-mono text-xs text-[#E8C56E] uppercase tracking-wider font-bold mb-3">
                Dimensional Footprint
              </h3>
              <dl className="divide-y divide-[#B49A72]/15 text-sm">
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Original Height</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">
                    {metricUnit === 'meters' ? `${khufu.originalHeightM} m` : `${mToFt(khufu.originalHeightM)} ft`}
                  </dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Current Height</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">
                    {metricUnit === 'meters' ? `${khufu.currentHeightM} m` : `${mToFt(khufu.currentHeightM)} ft`}
                  </dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Base Length</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">
                    {metricUnit === 'meters' ? `${khufu.baseLengthM} m` : `${mToFt(khufu.baseLengthM)} ft`}
                  </dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Slope & Seked</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">{khufu.slopeAngleDeg}° (28:22)</dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Estimated Blocks</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">{khufu.estimatedStoneBlocks.toLocaleString()}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-mono text-xs text-[#E8C56E] uppercase tracking-wider font-bold mb-3">
                Materials & Quarry Origins
              </h3>
              <div className="space-y-4 text-xs leading-relaxed text-[#E2D2B4]">
                <div>
                  <span className="font-mono font-bold text-[#F4EFE5] block mb-0.5">Exterior Casing</span>
                  <p>{khufu.casingMaterial}</p>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#F4EFE5] block mb-0.5">Core Masonry</span>
                  <p>{khufu.coreMaterial}</p>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#F4EFE5] block mb-0.5">Internal Layout</span>
                  <p>{khufu.internalComplexity}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs text-[#E8C56E] uppercase tracking-wider font-bold mb-3">
                Key Architectural Innovations
              </h3>
              <ul className="space-y-2.5 text-xs leading-relaxed text-[#E2D2B4]">
                {khufu.architecturalInnovations.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#E8C56E] font-bold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dynastic Context: Sneferu -> Khufu */}
          <div className="border-t border-[#B49A72]/20 pt-8">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#E8C56E] font-bold mb-4">
              Dynasty 4 Lineage (Sneferu → Khufu)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dynastyContext.map((gen) => (
                <div key={gen.pharaoh} className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-serif text-xl font-bold text-[#F4EFE5]">{gen.pharaoh}</h4>
                    <span className="font-mono text-xs text-[#E8C56E]">{gen.reign}</span>
                  </div>
                  <p className="text-xs font-mono text-[#D8C7A3]/80">{gen.monument} · {gen.location}</p>
                  <p className="text-sm text-[#E2D2B4] leading-relaxed pt-1">{gen.significance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= PART II: INTERIOR ARCHITECTURE (14 CHAMBERS) ================= */}
        <div className="border-t border-[#B49A72]/20 pt-10 mb-14">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-4 mb-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EFE5]">
              II. Interior Architecture (14 Features)
            </h2>
            <div className="flex flex-wrap items-center gap-5 text-xs font-mono">
              {(
                [
                  { id: 'all', label: 'All (14)' },
                  { id: 'known', label: 'Chambers' },
                  { id: 'detected', label: 'ScanPyramids Voids' },
                  { id: 'shafts', label: 'Passages & Shafts' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilterType(tab.id)}
                  className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                    filterType === tab.id
                      ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                      : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 pb-5 mb-8 border-b border-[#B49A72]/15">
            {filteredChambers.map((c) => {
              const isSelected = c.id === selectedChamberId;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedChamberId(c.id)}
                  className={`text-xs font-mono py-1 cursor-pointer transition-colors border-b-2 ${
                    isSelected
                      ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                      : 'border-transparent text-[#D8C7A3]/80 hover:text-[#F4EFE5]'
                  }`}
                >
                  {c.name}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 bg-[#140F0B] p-5">
              <div className="flex items-center justify-between text-xs font-mono text-[#D8C7A3]/75 border-b border-[#B49A72]/20 pb-2 mb-4">
                <span>NORTH → SOUTH CROSS-SECTION</span>
                <span>0.0 m = BEDROCK</span>
              </div>

              <div className="relative w-full aspect-[4/3] bg-[#120D0A]">
                <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <pattern id="khufuMasonry" width="20" height="10" patternUnits="userSpaceOnUse">
                      <rect width="20" height="10" fill="#241B16" />
                      <line x1="0" y1="10" x2="20" y2="10" stroke="#33261F" strokeWidth="0.8" />
                      <line x1="20" y1="0" x2="20" y2="10" stroke="#33261F" strokeWidth="0.8" />
                    </pattern>
                  </defs>

                  <polygon points="80,480 400,80 720,480" fill="url(#khufuMasonry)" stroke="#B49A72" strokeWidth="2" />
                  <line x1="390" y1="98" x2="410" y2="98" stroke="#C97B63" strokeWidth="2" />

                  <rect x="0" y="480" width="800" height="120" fill="#18120E" stroke="#B49A72" strokeWidth="1" />
                  <text x="30" y="505" fill="#B49A72" fontSize="11" fontFamily="monospace">NATIVE BEDROCK (0.0 m)</text>
                  <text x="30" y="580" fill="#C97B63" fontSize="10" fontFamily="monospace">-30 m LEVEL</text>

                  <line x1="300" y1="440" x2="460" y2="560" stroke="#D8C7A3" strokeWidth="4" />
                  <line x1="460" y1="560" x2="495" y2="560" stroke="#D8C7A3" strokeWidth="4" />
                  <rect x="495" y="545" width="60" height="30" fill="#45352B" stroke="#D8C7A3" strokeWidth="2" />
                  <line x1="340" y1="470" x2="400" y2="415" stroke="#D8C7A3" strokeWidth="4" />
                  <line x1="340" y1="470" x2="350" y2="460" stroke="#C97B63" strokeWidth="5" />
                  <path d="M 400,415 Q 370,460 380,480 Q 375,510 420,530" stroke="#C97B63" strokeWidth="2" strokeDasharray="3 3" fill="none" />
                  <line x1="400" y1="415" x2="400" y2="395" stroke="#D8C7A3" strokeWidth="3" />
                  <rect x="385" y="380" width="30" height="25" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="2" />
                  <line x1="400" y1="415" x2="480" y2="330" stroke="#D8C7A3" strokeWidth="8" />

                  <rect
                    x="410" y="270" width="80" height="35" rx="4"
                    fill="#C97B63" fillOpacity="0.35"
                    stroke="#C97B63" strokeWidth="2" strokeDasharray="4 4"
                  />
                  <text x="450" y="292" fill="#F4EFE5" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                    BIG VOID
                  </text>
                  <rect
                    x="305" y="420" width="30" height="15"
                    fill="#C97B63" fillOpacity="0.45"
                    stroke="#C97B63" strokeWidth="1.5" strokeDasharray="2 2"
                  />

                  <rect x="480" y="330" width="15" height="18" fill="#45352B" stroke="#D8C7A3" strokeWidth="1.5" />
                  <rect x="495" y="325" width="45" height="25" fill="#8A4F3D" stroke="#F4EFE5" strokeWidth="2" />

                  <rect x="495" y="315" width="45" height="6" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="0.8" />
                  <rect x="495" y="306" width="45" height="6" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="0.8" />
                  <rect x="495" y="297" width="45" height="6" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="0.8" />
                  <rect x="495" y="288" width="45" height="6" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="0.8" />
                  <polygon points="495,285 517,270 540,285" fill="#8A4F3D" stroke="#D8C7A3" strokeWidth="1" />

                  <line x1="495" y1="335" x2="280" y2="200" stroke="#B49A72" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="540" y1="335" x2="680" y2="195" stroke="#B49A72" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="385" y1="390" x2="260" y2="285" stroke="#B49A72" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="415" y1="390" x2="560" y2="275" stroke="#B49A72" strokeWidth="1" strokeDasharray="2 2" />

                  {filteredChambers.map((c) => {
                    const isSelected = selectedChamberId === c.id;
                    const pos = coordMap[c.id] || { x: 400, y: 300 };
                    return (
                      <g key={c.id} onClick={() => setSelectedChamberId(c.id)} className="cursor-pointer">
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={isSelected ? 9 : 6}
                          fill={
                            c.status === 'DETECTED_SPACE'
                              ? '#C97B63'
                              : isSelected
                              ? '#F3D37A'
                              : '#D8C7A3'
                          }
                          stroke="#140F0B"
                          strokeWidth="2"
                        />
                        {isSelected && (
                          <circle cx={pos.x} cy={pos.y} r={14} fill="none" stroke="#F3D37A" strokeWidth="1.5" />
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#D8C7A3]/80">
                <span>Gold = Known Chambers</span>
                <span>Terracotta = Detected Voids</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border-b border-[#B49A72]/20 pb-3 mb-4">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-xs uppercase font-bold text-[#E8C56E]">
                    {selectedChamber.status.replace('_', ' ')}
                  </span>
                  <EvidenceBadge level={selectedChamber.evidenceLevel} as="span" surface="dark" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#F4EFE5]">
                  {selectedChamber.name}
                </h3>
              </div>

              <dl className="divide-y divide-[#B49A72]/15 text-xs font-mono mb-5">
                <div className="py-2 flex justify-between gap-4">
                  <dt className="font-bold text-[#D8C7A3]/80">Elevation</dt>
                  <dd className="text-right tabular-nums text-[#F4EFE5]">
                    {selectedChamber.elevationMeters > 0
                      ? `+${selectedChamber.elevationMeters} m above bedrock`
                      : `${selectedChamber.elevationMeters} m below bedrock`}
                  </dd>
                </div>
                <div className="py-2 flex justify-between gap-4">
                  <dt className="font-bold text-[#D8C7A3]/80">Dimensions</dt>
                  <dd className="text-right text-[#F4EFE5]">{selectedChamber.dimensions}</dd>
                </div>
                <div className="py-2 flex justify-between gap-4">
                  <dt className="font-bold text-[#D8C7A3]/80">Material</dt>
                  <dd className="text-right text-[#F4EFE5]">{selectedChamber.material}</dd>
                </div>
              </dl>

              <figure className="mb-5">
                <div className="aspect-[16/10] overflow-hidden bg-[#140F0B]">
                  <img
                    src={IMAGES.grandGallery}
                    alt="Interior of the Grand Gallery showing corbelled limestone tiers"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <figcaption className="text-[11px] font-mono text-[#D8C7A3]/75 pt-2">
                  Grand Gallery corbelled vault (46.7 m long · 8.6 m high · 26° incline)
                </figcaption>
              </figure>

              <div className="space-y-3 text-sm leading-relaxed text-[#E2D2B4]">
                <p>{selectedChamber.description}</p>
                <p className="text-xs text-[#D8C7A3]">
                  <strong className="text-[#F4EFE5]">Discovery:</strong> {selectedChamber.archaeologicalDiscovery}
                </p>
                {selectedChamber.debatedAspects && (
                  <p className="text-xs font-mono text-[#E8C56E] border-t border-[#B49A72]/20 pt-3">
                    Open Question: {selectedChamber.debatedAspects}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ================= PART III: SCANPYRAMIDS MUON TOMOGRAPHY ================= */}
        <div className="border-t border-[#B49A72]/20 pt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EFE5]">
              III. ScanPyramids Muon Tomography (2017 & 2023)
            </h2>
            <div className="flex flex-wrap gap-6 text-xs font-mono">
              {(
                [
                  { id: 'cosmic', label: '1. Cosmic Flux' },
                  { id: 'detector', label: '2. Mass Absorption' },
                  { id: 'discovery', label: '3. Void Detected' },
                ] as const
              ).map((step) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setSimulationStep(step.id)}
                  className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                    simulationStep === step.id
                      ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                      : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 bg-[#140F0B] p-5">
              <svg viewBox="0 0 500 320" className="w-full h-auto">
                <polygon points="50,280 250,50 450,280" fill="#2B211B" stroke="#B49A72" strokeWidth="1.5" />
                <line x1="20" y1="280" x2="480" y2="280" stroke="#B49A72" strokeWidth="1.5" />
                <line x1="240" y1="230" x2="280" y2="180" stroke="#D8C7A3" strokeWidth="6" />
                <rect x="230" y="225" width="16" height="10" fill="#38bdf8" stroke="#F4EFE5" strokeWidth="1" />
                <text x="210" y="248" fill="#38bdf8" fontSize="9" fontFamily="monospace">
                  Detectors (Queen’s Chamber)
                </text>

                <g stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 4" opacity="0.65">
                  <line x1="120" y1="20" x2="235" y2="225" />
                  <line x1="180" y1="20" x2="236" y2="225" />
                  <line x1="250" y1="20" x2="238" y2="225" />
                  <line x1="310" y1="20" x2="242" y2="225" />
                  <line x1="380" y1="20" x2="245" y2="225" />
                </g>

                {simulationStep === 'discovery' && (
                  <g>
                    <rect
                      x="235" y="130" width="70" height="28" rx="4"
                      fill="#C97B63" fillOpacity="0.7"
                      stroke="#F4EFE5" strokeWidth="2"
                    />
                    <text x="270" y="148" fill="#F4EFE5" fontSize="10" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                      BIG VOID
                    </text>
                  </g>
                )}
              </svg>
            </div>

            <div className="lg:col-span-6 space-y-4 text-sm leading-relaxed text-[#E2D2B4]">
              {simulationStep === 'cosmic' && (
                <>
                  <h3 className="font-serif text-2xl font-bold text-[#F4EFE5]">
                    Naturally Occurring Cosmic Muons
                  </h3>
                  <p>
                    Galactic cosmic rays striking Earth’s upper atmosphere create continuous showers of subatomic muons that penetrate hundreds of meters of solid limestone.
                  </p>
                </>
              )}
              {simulationStep === 'detector' && (
                <>
                  <h3 className="font-serif text-2xl font-bold text-[#F4EFE5]">
                    Differential Density Attenuation
                  </h3>
                  <p>
                    Dense masonry absorbs muons proportionally to its mass, while hidden internal cavities let excess muons reach emulsion plates and gas detectors placed inside.
                  </p>
                </>
              )}
              {simulationStep === 'discovery' && (
                <>
                  <h3 className="font-serif text-2xl font-bold text-[#F4EFE5]">
                    Confirmed Geometry, Unknown Purpose
                  </h3>
                  <p>
                    Three independent physics teams confirmed a 30-meter anomaly above the Grand Gallery beyond 5-sigma certainty in 2017. In 2023, an endoscope imaged the separate 9-meter North Face Corridor behind the entrance chevrons.
                  </p>
                  <p className="text-xs font-mono text-[#E8C56E]">
                    Whether the 30-meter Big Void is a structural relieving space, sealed corridor, or ramp cavity remains unverified.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <InlineEvidenceBlock
          claimIds={['khufu-authorship', 'scanpyramids-void', 'big-void-purpose']}
          surface="dark"
        />
      </div>
    </section>
  );
};
