import React, { useState } from 'react';
import { KHUFU_CHAMBERS } from '../data/khufuInteriorData';
import { IMAGES } from '../assets/images';
import { EvidenceBadge } from './EvidenceBadge';

type FilterKind = 'all' | 'chambers' | 'passages' | 'voids';

export const InteriorArchitecturePage: React.FC = () => {
  const [filterType, setFilterType] = useState<FilterKind>('all');
  const [selectedChamberId, setSelectedChamberId] = useState<string>('grand-gallery');
  const [muonStep, setMuonStep] = useState<'cosmic' | 'detector' | 'discovery'>('discovery');

  const counts = {
    all: KHUFU_CHAMBERS.length,
    chambers: KHUFU_CHAMBERS.filter((c) => c.iconType === 'chamber').length,
    passages: KHUFU_CHAMBERS.filter((c) => c.iconType === 'corridor' || c.iconType === 'shaft').length,
    voids: KHUFU_CHAMBERS.filter((c) => c.status === 'DETECTED_SPACE').length,
  };

  const filteredChambers = KHUFU_CHAMBERS.filter((c) => {
    if (filterType === 'chambers') return c.iconType === 'chamber';
    if (filterType === 'passages') return c.iconType === 'corridor' || c.iconType === 'shaft';
    if (filterType === 'voids') return c.status === 'DETECTED_SPACE';
    return true;
  });

  const selectedIndex = filteredChambers.findIndex((c) => c.id === selectedChamberId);
  const selectedChamber =
    (selectedIndex >= 0 ? filteredChambers[selectedIndex] : filteredChambers[0]) || KHUFU_CHAMBERS[0];
  const activeIdx = selectedIndex >= 0 ? selectedIndex : 0;

  const handleFilterChange = (nextFilter: FilterKind) => {
    setFilterType(nextFilter);
    const nextList = KHUFU_CHAMBERS.filter((c) => {
      if (nextFilter === 'chambers') return c.iconType === 'chamber';
      if (nextFilter === 'passages') return c.iconType === 'corridor' || c.iconType === 'shaft';
      if (nextFilter === 'voids') return c.status === 'DETECTED_SPACE';
      return true;
    });
    if (nextList.length > 0 && !nextList.some((c) => c.id === selectedChamberId)) {
      setSelectedChamberId(nextList[0].id);
    }
  };

  const stepChamber = (delta: number) => {
    if (filteredChambers.length === 0) return;
    const nextIdx = (activeIdx + delta + filteredChambers.length) % filteredChambers.length;
    setSelectedChamberId(filteredChambers[nextIdx].id);
  };

  const coordMap: Record<string, { x: number; y: number; shortLabel: string; labelDx?: number; labelDy?: number }> = {
    'original-entrance': { x: 252, y: 404, shortLabel: 'Entrance', labelDx: -14, labelDy: -14 },
    'north-face-corridor': { x: 282, y: 390, shortLabel: 'North Corridor', labelDx: 0, labelDy: -16 },
    'descending-passage': { x: 356, y: 472, shortLabel: 'Descending', labelDx: -18, labelDy: 18 },
    'subterranean-chamber': { x: 468, y: 515, shortLabel: 'Subterranean Pit', labelDx: 0, labelDy: 22 },
    'well-shaft-grotto': { x: 344, y: 425, shortLabel: 'Well Shaft', labelDx: -20, labelDy: -12 },
    'ascending-passage': { x: 344, y: 394, shortLabel: 'Ascending', labelDx: -18, labelDy: -14 },
    'queens-chamber': { x: 430, y: 368, shortLabel: "Queen's Chamber", labelDx: 0, labelDy: 20 },
    'queens-shafts': { x: 372, y: 326, shortLabel: "Queen's Shafts", labelDx: -16, labelDy: -14 },
    'grand-gallery': { x: 446, y: 318, shortLabel: 'Grand Gallery', labelDx: -16, labelDy: -16 },
    'big-void': { x: 454, y: 235, shortLabel: 'Big Void', labelDx: 0, labelDy: -18 },
    antechamber: { x: 500, y: 288, shortLabel: 'Antechamber', labelDx: -8, labelDy: 20 },
    'kings-chamber': { x: 544, y: 284, shortLabel: "King's Chamber", labelDx: 16, labelDy: 20 },
    'relieving-chambers': { x: 544, y: 234, shortLabel: 'Relieving Tiers', labelDx: 18, labelDy: -16 },
    'kings-shafts': { x: 616, y: 222, shortLabel: "King's Shafts", labelDx: 14, labelDy: -14 },
  };

  const isAnomalySelected =
    selectedChamber.id === 'big-void' || selectedChamber.id === 'north-face-corridor';

  const getTypeLabel = (iconType: string, status: string) => {
    if (status === 'DETECTED_SPACE') return 'Muon Void';
    if (iconType === 'chamber') return 'Chamber';
    if (iconType === 'shaft') return 'Shaft';
    return 'Passage';
  };

  return (
    <section id="interior" className="py-10 sm:py-14 bg-transparent text-[#F4EFE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-5 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-1.5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              02 · Great Pyramid of Khufu
            </span>
            <div className="flex items-center gap-4">
              <EvidenceBadge level="ESTABLISHED" as="span" surface="dark" />
              <EvidenceBadge level="UNKNOWN" as="span" surface="dark" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#F4EFE5]">
            Interior Architecture
          </h1>
          <p className="text-sm sm:text-base text-[#D8C7A3] max-w-3xl mt-2 leading-relaxed">
            Select any structure on the left or click inside the cross-section to inspect its elevation, dimensions, and discovery record.
          </p>
        </header>

        {/* ================= UNBOXED FILTER UNDERLINE BAR & STEPPING CONTROLS ================= */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-7">
          <div className="flex flex-wrap items-center gap-5 sm:gap-8">
            {(
              [
                { id: 'all', label: `All Features (${counts.all})` },
                { id: 'chambers', label: `Chambers (${counts.chambers})` },
                { id: 'passages', label: `Passages & Shafts (${counts.passages})` },
                { id: 'voids', label: `Muon Voids (${counts.voids})` },
              ] as const
            ).map((tab) => {
              const isActive = filterType === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleFilterChange(tab.id)}
                  className={`pb-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors border-b-2 -mb-[13px] whitespace-nowrap ${
                    isActive
                      ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                      : 'border-transparent text-[#E2D2B4]/80 hover:text-[#F4EFE5]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <button
              type="button"
              onClick={() => stepChamber(-1)}
              className="text-[#E2D2B4] hover:text-[#F3D37A] hover:underline underline-offset-4 cursor-pointer transition-colors"
            >
              ← Prev
            </button>
            <span className="text-[#D8C7A3]/75 tabular-nums">
              {activeIdx + 1} / {filteredChambers.length}
            </span>
            <button
              type="button"
              onClick={() => stepChamber(1)}
              className="text-[#E2D2B4] hover:text-[#F3D37A] hover:underline underline-offset-4 cursor-pointer transition-colors"
            >
              Next →
            </button>
          </div>
        </div>

        {/* ================= SIDE-BY-SIDE LAYOUT: NAMES ON LEFT | DIAGRAM + INFO ON RIGHT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: Chamber Names (All visible at once, zero boxes) */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between border-b border-[#B49A72]/20 pb-2 mb-1">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#E8C56E] font-bold">
                Chambers & Passages
              </span>
              <span className="font-mono text-[11px] text-[#D8C7A3]/75">Elevation</span>
            </div>

            <div className="divide-y divide-[#B49A72]/15">
              {filteredChambers.map((c, idx) => {
                const isSelected = c.id === selectedChamber.id;
                const elevText =
                  c.elevationMeters > 0 ? `+${c.elevationMeters} m` : `${c.elevationMeters} m`;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedChamberId(c.id)}
                    className="w-full py-2.5 flex items-baseline justify-between gap-3 text-left transition-colors cursor-pointer group"
                  >
                    <span className="flex items-baseline gap-2.5 min-w-0">
                      <span
                        className={`font-mono text-[11px] tabular-nums shrink-0 ${
                          c.status === 'DETECTED_SPACE'
                            ? 'text-[#C97B63] font-bold'
                            : isSelected
                            ? 'text-[#E8C56E] font-bold'
                            : 'text-[#D8C7A3]/65 group-hover:text-[#E2D2B4]'
                        }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`font-serif text-sm sm:text-[15px] leading-snug transition-colors ${
                          isSelected
                            ? 'font-bold text-[#F3D37A] underline underline-offset-4 decoration-[#E8C56E] decoration-2'
                            : 'text-[#E2D2B4] group-hover:text-[#F4EFE5]'
                        }`}
                      >
                        {c.name}
                      </span>
                    </span>

                    <span
                      className={`font-mono text-xs tabular-nums shrink-0 ${
                        isSelected ? 'text-[#F3D37A] font-bold' : 'text-[#D8C7A3]/70'
                      }`}
                    >
                      {elevText}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Diagram on Top + Selected Chamber Information Directly Below */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Cross-Section Diagram */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#D8C7A3]/80 border-b border-[#B49A72]/20 pb-2 mb-3">
                <span>NORTH ← CROSS-SECTION → SOUTH</span>
                <span>0.0 m = NATIVE BEDROCK</span>
              </div>

              <div className="relative w-full aspect-[16/10] bg-[#140F0B]">
                <svg viewBox="0 0 860 540" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <pattern id="interiorMasonry" width="22" height="11" patternUnits="userSpaceOnUse">
                      <rect width="22" height="11" fill="#211813" />
                      <line x1="0" y1="11" x2="22" y2="11" stroke="#30241C" strokeWidth="0.8" />
                      <line x1="22" y1="0" x2="22" y2="11" stroke="#30241C" strokeWidth="0.8" />
                    </pattern>
                  </defs>

                  {/* Horizontal Elevation Guides */}
                  <line x1="20" y1="234" x2="840" y2="234" stroke="#B49A72" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.3" />
                  <text x="24" y="228" fill="#D8C7A3" fontSize="10" fontFamily="monospace" opacity="0.6">+55 m RELIEVING</text>

                  <line x1="20" y1="288" x2="840" y2="288" stroke="#B49A72" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.3" />
                  <text x="24" y="282" fill="#D8C7A3" fontSize="10" fontFamily="monospace" opacity="0.6">+43 m KING&apos;S LEVEL</text>

                  <line x1="20" y1="368" x2="840" y2="368" stroke="#B49A72" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.3" />
                  <text x="24" y="362" fill="#D8C7A3" fontSize="10" fontFamily="monospace" opacity="0.6">+22 m QUEEN&apos;S LEVEL</text>

                  {/* Pyramid Silhouette */}
                  <polygon points="90,455 430,52 770,455" fill="url(#interiorMasonry)" stroke="#B49A72" strokeWidth="2" />
                  <text x="430" y="38" fill="#E8C56E" fontSize="12" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    146.6 m ORIGINAL SUMMIT
                  </text>

                  {/* Bedrock Floor */}
                  <rect x="0" y="455" width="860" height="85" fill="#18120E" stroke="#B49A72" strokeWidth="1" />
                  <text x="24" y="476" fill="#B49A72" fontSize="10" fontFamily="monospace">BEDROCK DATUM (0.0 m)</text>
                  <text x="24" y="528" fill="#C97B63" fontSize="10" fontFamily="monospace">-30 m SUBTERRANEAN PIT</text>

                  {/* Passages & Shafts */}
                  <line x1="252" y1="404" x2="438" y2="515" stroke="#D8C7A3" strokeWidth="4.5" />
                  <rect x="438" y="498" width="60" height="28" fill="#45352B" stroke="#D8C7A3" strokeWidth="1.8" />
                  <line x1="305" y1="435" x2="395" y2="368" stroke="#D8C7A3" strokeWidth="4.5" />
                  <path d="M 395,368 Q 345,412 344,435 Q 342,462 385,484" stroke="#C97B63" strokeWidth="2" strokeDasharray="3 3" fill="none" />
                  <line x1="395" y1="368" x2="414" y2="368" stroke="#D8C7A3" strokeWidth="3.5" />
                  <rect x="414" y="355" width="32" height="24" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="1.8" />
                  <line x1="395" y1="368" x2="492" y2="288" stroke="#D8C7A3" strokeWidth="8.5" />

                  {/* Air / Stellar Shafts */}
                  <line x1="414" y1="364" x2="262" y2="256" stroke="#B49A72" strokeWidth="1.4" strokeDasharray="3 3" />
                  <line x1="446" y1="364" x2="598" y2="256" stroke="#B49A72" strokeWidth="1.4" strokeDasharray="3 3" />
                  <line x1="514" y1="286" x2="288" y2="164" stroke="#B49A72" strokeWidth="1.8" strokeDasharray="4 3" />
                  <line x1="564" y1="286" x2="682" y2="176" stroke="#B49A72" strokeWidth="1.8" strokeDasharray="4 3" />

                  {/* ScanPyramids Voids */}
                  <rect
                    x="408" y="218" width="92" height="34" rx="3"
                    fill="#C97B63" fillOpacity="0.32"
                    stroke="#C97B63" strokeWidth="1.8" strokeDasharray="4 4"
                  />
                  <rect
                    x="266" y="382" width="32" height="15"
                    fill="#C97B63" fillOpacity="0.45"
                    stroke="#C97B63" strokeWidth="1.4" strokeDasharray="2 2"
                  />

                  {/* Antechamber, King's Chamber & 5 Relieving Tiers */}
                  <rect x="492" y="280" width="16" height="17" fill="#45352B" stroke="#D8C7A3" strokeWidth="1.4" />
                  <rect x="514" y="274" width="50" height="24" fill="#8A4F3D" stroke="#F4EFE5" strokeWidth="1.8" />
                  <rect x="514" y="264" width="50" height="5" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="0.7" />
                  <rect x="514" y="256" width="50" height="5" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="0.7" />
                  <rect x="514" y="248" width="50" height="5" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="0.7" />
                  <rect x="514" y="240" width="50" height="5" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="0.7" />
                  <polygon points="514,237 539,221 564,237" fill="#8A4F3D" stroke="#D8C7A3" strokeWidth="1" />

                  {/* Interactive Hotspots */}
                  {filteredChambers.map((c) => {
                    const isSelected = c.id === selectedChamber.id;
                    const meta = coordMap[c.id] || { x: 430, y: 280, shortLabel: c.name, labelDx: 0, labelDy: -16 };
                    const fillColor =
                      c.status === 'DETECTED_SPACE'
                        ? '#C97B63'
                        : isSelected
                        ? '#F3D37A'
                        : '#D8C7A3';

                    return (
                      <g
                        key={c.id}
                        onClick={() => setSelectedChamberId(c.id)}
                        className="cursor-pointer"
                      >
                        <circle cx={meta.x} cy={meta.y} r={18} fill="transparent" />

                        {isSelected && (
                          <circle
                            cx={meta.x}
                            cy={meta.y}
                            r={14}
                            fill="none"
                            stroke="#F3D37A"
                            strokeWidth="1.8"
                          />
                        )}

                        <circle
                          cx={meta.x}
                          cy={meta.y}
                          r={isSelected ? 8 : 5.5}
                          fill={fillColor}
                          stroke="#140F0B"
                          strokeWidth="2"
                        />

                        {(isSelected ||
                          c.id === 'kings-chamber' ||
                          c.id === 'queens-chamber' ||
                          c.id === 'grand-gallery' ||
                          c.id === 'subterranean-chamber' ||
                          c.id === 'big-void') && (
                          <text
                            x={meta.x + (meta.labelDx ?? 0)}
                            y={meta.y + (meta.labelDy ?? -16)}
                            fill={isSelected ? '#F3D37A' : '#E2D2B4'}
                            fontSize={isSelected ? '12' : '10'}
                            fontFamily="monospace"
                            fontWeight={isSelected ? 'bold' : 'normal'}
                            textAnchor={
                              (meta.labelDx ?? 0) > 6
                                ? 'start'
                                : (meta.labelDx ?? 0) < -6
                                ? 'end'
                                : 'middle'
                            }
                            opacity={isSelected ? 1 : 0.8}
                            pointerEvents="none"
                          >
                            {meta.shortLabel}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="mt-2.5 flex flex-wrap items-center gap-5 text-[11px] font-mono text-[#D8C7A3]/80">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F3D37A] inline-block" /> Selected
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D8C7A3] inline-block" /> Known Structure
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C97B63] inline-block" /> Muon Void
                </span>
              </div>
            </div>

            {/* INFORMATION DIRECTLY BELOW THE DIAGRAM */}
            <div className="border-t border-[#B49A72]/25 pt-5 space-y-5">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
                    {getTypeLabel(selectedChamber.iconType, selectedChamber.status)}
                  </span>
                  <EvidenceBadge level={selectedChamber.evidenceLevel} as="span" surface="dark" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EFE5]">
                  {selectedChamber.name}
                </h2>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-[#B49A72]/20 py-3.5 text-xs font-mono">
                <div>
                  <dt className="text-[#D8C7A3]/75 uppercase tracking-wider text-[10px]">Elevation</dt>
                  <dd className="font-bold text-[#F3D37A] mt-1 tabular-nums">
                    {selectedChamber.elevationMeters > 0
                      ? `+${selectedChamber.elevationMeters} m above bedrock`
                      : `${selectedChamber.elevationMeters} m below bedrock`}
                  </dd>
                </div>
                <div>
                  <dt className="text-[#D8C7A3]/75 uppercase tracking-wider text-[10px]">Dimensions</dt>
                  <dd className="text-[#F4EFE5] mt-1 leading-snug">{selectedChamber.dimensions}</dd>
                </div>
                <div>
                  <dt className="text-[#D8C7A3]/75 uppercase tracking-wider text-[10px]">Stonework</dt>
                  <dd className="text-[#F4EFE5] mt-1 leading-snug">{selectedChamber.material}</dd>
                </div>
              </dl>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-7 space-y-3 text-sm text-[#E2D2B4] leading-relaxed">
                  <p>{selectedChamber.description}</p>
                  <p className="text-xs text-[#D8C7A3]">
                    <strong className="text-[#F4EFE5]">Discovery: </strong>
                    {selectedChamber.archaeologicalDiscovery}
                  </p>
                  {selectedChamber.debatedAspects && (
                    <p className="text-xs font-mono text-[#F3D37A] border-t border-[#B49A72]/20 pt-2.5 leading-relaxed">
                      Open Question: {selectedChamber.debatedAspects}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-5">
                  {isAnomalySelected ? (
                    <div className="space-y-2.5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#B49A72]/20 pb-1.5">
                        <span className="font-mono text-[11px] uppercase font-bold text-[#E8C56E]">
                          Muon Scan
                        </span>
                        <div className="flex gap-2.5 text-[10px] font-mono">
                          {(
                            [
                              { id: 'cosmic', label: '1. Flux' },
                              { id: 'detector', label: '2. Sensors' },
                              { id: 'discovery', label: '3. Void' },
                            ] as const
                          ).map((st) => (
                            <button
                              key={st.id}
                              type="button"
                              onClick={() => setMuonStep(st.id)}
                              className={`pb-0.5 border-b cursor-pointer transition-colors ${
                                muonStep === st.id
                                  ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                                  : 'border-transparent text-[#D8C7A3]/70 hover:text-[#F4EFE5]'
                              }`}
                            >
                              {st.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <svg viewBox="0 0 460 230" className="w-full h-auto bg-[#140F0B]">
                        <polygon points="50,210 230,30 410,210" fill="#2B211B" stroke="#B49A72" strokeWidth="1.5" />
                        <line x1="20" y1="210" x2="440" y2="210" stroke="#B49A72" strokeWidth="1.5" />
                        <line x1="220" y1="175" x2="260" y2="135" stroke="#D8C7A3" strokeWidth="6" />
                        <rect x="210" y="170" width="16" height="10" fill="#38bdf8" stroke="#F4EFE5" strokeWidth="1" />
                        <g stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 4" opacity="0.65">
                          <line x1="115" y1="10" x2="215" y2="170" />
                          <line x1="175" y1="10" x2="216" y2="170" />
                          <line x1="230" y1="10" x2="218" y2="170" />
                          <line x1="285" y1="10" x2="222" y2="170" />
                          <line x1="345" y1="10" x2="225" y2="170" />
                        </g>
                        {muonStep === 'discovery' && (
                          <g>
                            <rect
                              x="215" y="96" width="70" height="24" rx="3"
                              fill="#C97B63" fillOpacity="0.75"
                              stroke="#F4EFE5" strokeWidth="1.6"
                            />
                            <text x="250" y="112" fill="#F4EFE5" fontSize="9.5" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                              BIG VOID
                            </text>
                          </g>
                        )}
                      </svg>

                      <p className="text-[11px] font-mono text-[#D8C7A3]/80 leading-relaxed">
                        {muonStep === 'cosmic' && 'Cosmic-ray muons penetrate hundreds of meters of solid masonry.'}
                        {muonStep === 'detector' && 'Air cavities let excess muons hit internal detectors.'}
                        {muonStep === 'discovery' && 'Verified above 5-sigma certainty by 3 physics teams.'}
                      </p>
                    </div>
                  ) : (
                    <figure>
                      <div className="aspect-[16/10] overflow-hidden bg-[#140F0B]">
                        <img
                          src={IMAGES.grandGallery}
                          alt="Interior of the Grand Gallery showing corbelled limestone tiers"
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <figcaption className="text-[11px] font-mono text-[#D8C7A3]/75 pt-2">
                        Corbelled Tura limestone gallery ascending toward the King&apos;s Chamber.
                      </figcaption>
                    </figure>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
