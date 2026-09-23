import React, { useState } from 'react';
import { PYRAMIDS } from '../data/pyramidsData';
import { PyramidData } from '../types';
import { EvidenceBadge } from './EvidenceBadge';
import { IMAGES } from '../assets/images';

interface PyramidComparisonProps {
  onSelectEvidence: (claimId: string) => void;
}

export const PyramidComparison: React.FC<PyramidComparisonProps> = ({ onSelectEvidence }) => {
  const [selectedPyramidId, setSelectedPyramidId] = useState<'khufu' | 'khafre' | 'menkaure'>('khufu');
  const [viewMode, setViewMode] = useState<'sideBySide' | 'overlay' | 'dataBars' | 'photo'>('sideBySide');
  const [metricUnit, setMetricUnit] = useState<'meters' | 'feet'>('meters');

  const selectedPyramid = PYRAMIDS.find((p) => p.id === selectedPyramidId) || PYRAMIDS[0];

  const mToFt = (m: number) => (m * 3.28084).toFixed(1);

  // Math scaling: max base is Khufu 230.34m, max height is Khufu 146.6m
  // SVG Canvas: width 800, height 360, baseline at Y=320
  const scale = 1.0; // scale factor
  const baseY = 300;

  return (
    <section id="pyramids" className="py-20 bg-[#F4EFE5] text-[#171513] border-b border-[#D8C7A3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="border-b border-[#D8C7A3] pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
                Chapter 01 // Structural Scale & Geometry
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B211B] mt-1">
                The Three Giants
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('khufu-authorship')} />
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#2B211B]/80 max-w-3xl mt-2 leading-relaxed">
            Three distinct Old Kingdom projects of differing scale, geometry, and internal architecture built across multiple generations.
          </p>
        </div>

        {/* View Mode & Unit Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-[#2B211B]/15 pb-4">
          <div className="flex flex-wrap items-center gap-1.5 bg-[#2B211B]/5 p-1 border border-[#2B211B]/15">
            <span className="text-xs font-mono uppercase text-[#8A4F3D] font-bold px-2">
              PERSPECTIVE:
            </span>
            <button
              type="button"
              onClick={() => setViewMode('sideBySide')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                viewMode === 'sideBySide'
                  ? 'bg-[#2B211B] text-[#F4EFE5] border-[#2B211B] font-bold shadow-xs scale-102'
                  : 'bg-white/50 text-[#2B211B] border-transparent hover:border-[#2B211B]/30 hover:bg-white'
              }`}
            >
              Side-by-Side Scale
            </button>
            <button
              type="button"
              onClick={() => setViewMode('overlay')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                viewMode === 'overlay'
                  ? 'bg-[#2B211B] text-[#F4EFE5] border-[#2B211B] font-bold shadow-xs scale-102'
                  : 'bg-white/50 text-[#2B211B] border-transparent hover:border-[#2B211B]/30 hover:bg-white'
              }`}
            >
              Silhouette Overlay
            </button>
            <button
              type="button"
              onClick={() => setViewMode('dataBars')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                viewMode === 'dataBars'
                  ? 'bg-[#2B211B] text-[#F4EFE5] border-[#2B211B] font-bold shadow-xs scale-102'
                  : 'bg-white/50 text-[#2B211B] border-transparent hover:border-[#2B211B]/30 hover:bg-white'
              }`}
            >
              Volume & Weight
            </button>
            <button
              type="button"
              onClick={() => setViewMode('photo')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                viewMode === 'photo'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs scale-102'
                  : 'bg-white/50 text-[#2B211B] border-transparent hover:border-[#8A4F3D]/50 hover:bg-white'
              }`}
            >
              Field Photography
            </button>
          </div>

          <div className="flex items-center gap-1.5 bg-[#2B211B]/5 p-1 border border-[#2B211B]/15">
            <span className="text-xs font-mono text-[#2B211B]/70 px-1 font-semibold">Units:</span>
            <button
              type="button"
              onClick={() => setMetricUnit('meters')}
              className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border ${
                metricUnit === 'meters'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs'
                  : 'bg-white/50 text-[#2B211B]/80 border-transparent hover:text-[#2B211B] hover:bg-white'
              }`}
            >
              Metric (m)
            </button>
            <button
              type="button"
              onClick={() => setMetricUnit('feet')}
              className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border ${
                metricUnit === 'feet'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs'
                  : 'bg-white/50 text-[#2B211B]/80 border-transparent hover:text-[#2B211B] hover:bg-white'
              }`}
            >
              Imperial (ft)
            </button>
          </div>
        </div>

        {/* Dynamic Scale Visualization Stage */}
        <div className="bg-[#241B16] text-[#F4EFE5] p-4 sm:p-6 mb-10 shadow-xl relative overflow-hidden rounded-xs">
          <div className="flex items-center justify-between border-b border-[#B49A72]/20 pb-3 mb-4 text-xs font-mono text-[#D8C7A3]">
            <span className="tracking-wider">GEOMETRIC SCALE VISUALIZER // TRUE RELATIVE ELEVATION</span>
            <span className="text-[#B49A72]/70 hidden sm:inline">BASE LINE ZERO = GIZA BEDROCK DATUM</span>
          </div>

          {/* SVG Canvas for True Scale Comparison */}
          {viewMode === 'sideBySide' && (
            <div className="w-full overflow-x-auto">
              <svg viewBox="0 0 900 360" className="w-full min-w-[700px] h-[340px]" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D8C7A3" strokeWidth="0.3" opacity="0.15" />
                  </pattern>
                </defs>
                <rect width="900" height="360" fill="#241B16" />
                <rect width="900" height="360" fill="url(#grid)" />

                {/* Ground Bedrock Line */}
                <line x1="20" y1={baseY} x2="880" y2={baseY} stroke="#B49A72" strokeWidth="2" />
                <text x="30" y={baseY + 20} fill="#B49A72" fontSize="11" fontFamily="monospace">
                  Giza Plateau Bedrock Datum (0.0 m)
                </text>

                {/* KHUFU (Left: Center ~200) */}
                {/* 230.34m base -> ~276px, 146.6m height -> ~176px */}
                <g 
                  onClick={() => setSelectedPyramidId('khufu')} 
                  className="cursor-pointer transition-opacity hover:opacity-95"
                >
                  <polygon
                    points="62,300 200,124 338,300"
                    fill={selectedPyramidId === 'khufu' ? '#B49A72' : '#45352B'}
                    stroke={selectedPyramidId === 'khufu' ? '#F4EFE5' : '#D8C7A3'}
                    strokeWidth={selectedPyramidId === 'khufu' ? 2.5 : 1}
                  />
                  {/* Current weathered height line (138.5m) */}
                  <line x1="192" y1="134" x2="208" y2="134" stroke="#8A4F3D" strokeWidth="2" strokeDasharray="2 2" />
                  {/* Label */}
                  <text x="200" y="325" fill="#F4EFE5" fontSize="13" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    KHUFU
                  </text>
                  <text x="200" y="342" fill="#D8C7A3" fontSize="11" fontFamily="monospace" textAnchor="middle">
                    {metricUnit === 'meters' ? '146.6 m / 230.3 m' : `${mToFt(146.6)} ft / ${mToFt(230.34)} ft`}
                  </text>
                  <text x="200" y="112" fill="#D8C7A3" fontSize="11" fontFamily="monospace" textAnchor="middle">
                    51°50' (seked 28:22)
                  </text>
                </g>

                {/* KHAFRE (Center: Center ~510) */}
                {/* 215.25m base -> ~258px, 143.5m height -> ~172px */}
                <g 
                  onClick={() => setSelectedPyramidId('khafre')} 
                  className="cursor-pointer transition-opacity hover:opacity-95"
                >
                  <polygon
                    points="381,300 510,128 639,300"
                    fill={selectedPyramidId === 'khafre' ? '#B49A72' : '#3E2E25'}
                    stroke={selectedPyramidId === 'khafre' ? '#F4EFE5' : '#D8C7A3'}
                    strokeWidth={selectedPyramidId === 'khafre' ? 2.5 : 1}
                  />
                  {/* Original Casing Cap still intact at apex */}
                  <polygon points="492,152 510,128 528,152" fill="#D8C7A3" opacity="0.9" />
                  {/* Label */}
                  <text x="510" y="325" fill="#F4EFE5" fontSize="13" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    KHAFRE
                  </text>
                  <text x="510" y="342" fill="#D8C7A3" fontSize="11" fontFamily="monospace" textAnchor="middle">
                    {metricUnit === 'meters' ? '143.5 m / 215.2 m' : `${mToFt(143.5)} ft / ${mToFt(215.25)} ft`}
                  </text>
                  <text x="510" y="116" fill="#D8C7A3" fontSize="11" fontFamily="monospace" textAnchor="middle">
                    53°10' (seked 4:3)
                  </text>
                </g>

                {/* MENKAURE (Right: Center ~760) */}
                {/* 104.6m base -> ~125px, 65.5m height -> ~78px */}
                <g 
                  onClick={() => setSelectedPyramidId('menkaure')} 
                  className="cursor-pointer transition-opacity hover:opacity-95"
                >
                  <polygon
                    points="698,300 760,222 822,300"
                    fill={selectedPyramidId === 'menkaure' ? '#B49A72' : '#352720'}
                    stroke={selectedPyramidId === 'menkaure' ? '#F4EFE5' : '#D8C7A3'}
                    strokeWidth={selectedPyramidId === 'menkaure' ? 2.5 : 1}
                  />
                  {/* Granite lower courses indication */}
                  <polygon points="698,300 710,285 810,285 822,300" fill="#8A4F3D" opacity="0.8" />
                  {/* Label */}
                  <text x="760" y="325" fill="#F4EFE5" fontSize="13" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    MENKAURE
                  </text>
                  <text x="760" y="342" fill="#D8C7A3" fontSize="11" fontFamily="monospace" textAnchor="middle">
                    {metricUnit === 'meters' ? '65.5 m / 104.6 m' : `${mToFt(65.5)} ft / ${mToFt(104.6)} ft`}
                  </text>
                  <text x="760" y="210" fill="#D8C7A3" fontSize="11" fontFamily="monospace" textAnchor="middle">
                    51°20' (1/10th Vol.)
                  </text>
                </g>
              </svg>
            </div>
          )}

          {/* Silhouette Overlay Mode */}
          {viewMode === 'overlay' && (
            <div className="w-full overflow-x-auto">
              <svg viewBox="0 0 800 360" className="w-full min-w-[600px] h-[340px]" preserveAspectRatio="xMidYMid meet">
                <rect width="800" height="360" fill="#241B16" />
                <line x1="40" y1="300" x2="760" y2="300" stroke="#B49A72" strokeWidth="2" />
                
                {/* Center X = 400 */}
                {/* Khufu: Base 276 (262 to 538), height 176 (300 to 124) */}
                <polygon
                  points="262,300 400,124 538,300"
                  fill="#45352B"
                  fillOpacity="0.4"
                  stroke="#D8C7A3"
                  strokeWidth="2"
                />
                
                {/* Khafre: Base 258 (271 to 529), height 172 (300 to 128) */}
                <polygon
                  points="271,300 400,128 529,300"
                  fill="#B49A72"
                  fillOpacity="0.3"
                  stroke="#B49A72"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Menkaure: Base 125 (338 to 463), height 78 (300 to 222) */}
                <polygon
                  points="338,300 400,222 463,300"
                  fill="#8A4F3D"
                  fillOpacity="0.5"
                  stroke="#8A4F3D"
                  strokeWidth="2"
                />

                <circle cx="400" cy="124" r="3" fill="#D8C7A3" />
                <circle cx="400" cy="128" r="3" fill="#B49A72" />
                <circle cx="400" cy="222" r="3" fill="#8A4F3D" />

                {/* Legend in top corner */}
                <g transform="translate(60, 40)">
                  <rect width="200" height="90" fill="#171513" stroke="#B49A72" opacity="0.9" />
                  <line x1="20" y1="25" x2="50" y2="25" stroke="#D8C7A3" strokeWidth="2" />
                  <text x="60" y="29" fill="#F4EFE5" fontSize="11" fontFamily="monospace">Khufu (146.6m)</text>

                  <line x1="20" y1="50" x2="50" y2="50" stroke="#B49A72" strokeWidth="2" strokeDasharray="3 3" />
                  <text x="60" y="54" fill="#F4EFE5" fontSize="11" fontFamily="monospace">Khafre (143.5m)</text>

                  <line x1="20" y1="75" x2="50" y2="75" stroke="#8A4F3D" strokeWidth="2" />
                  <text x="60" y="79" fill="#F4EFE5" fontSize="11" fontFamily="monospace">Menkaure (65.5m)</text>
                </g>
              </svg>
            </div>
          )}

          {/* Volume & Weight Data Bars Mode */}
          {viewMode === 'dataBars' && (
            <div className="py-6 px-4 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono text-[#D8C7A3] mb-1">
                  <span>MASONRY VOLUME (Meters³)</span>
                  <span>KHUFU = 2.58M m³ // KHAFRE = 2.21M m³ // MENKAURE = 0.235M m³</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="font-bold text-[#F4EFE5]">Khufu</span>
                      <span>2,583,283 m³ (100%)</span>
                    </div>
                    <div className="w-full bg-[#171513] h-5 border border-[#B49A72]/40">
                      <div className="bg-[#D8C7A3] h-full" style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="font-bold text-[#F4EFE5]">Khafre</span>
                      <span>2,211,096 m³ (85.6%)</span>
                    </div>
                    <div className="w-full bg-[#171513] h-5 border border-[#B49A72]/40">
                      <div className="bg-[#B49A72] h-full" style={{ width: '85.6%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="font-bold text-[#F4EFE5]">Menkaure</span>
                      <span>235,183 m³ (9.1%)</span>
                    </div>
                    <div className="w-full bg-[#171513] h-5 border border-[#B49A72]/40">
                      <div className="bg-[#8A4F3D] h-full" style={{ width: '9.1%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#B49A72]/30">
                <div className="flex justify-between text-xs font-mono text-[#D8C7A3] mb-1">
                  <span>ESTIMATED WEIGHT (Metric Tons)</span>
                  <span>KHUFU: 5.75M Tons // KHAFRE: 4.88M Tons // MENKAURE: 0.56M Tons</span>
                </div>
                <p className="text-xs text-[#D8C7A3]/70 font-mono">
                  Menkaure’s volume is less than one-tenth of Khufu’s, reflecting a dramatic architectural shift from brute scale to precious cladding (16 courses of red Aswan granite).
                </p>
              </div>
            </div>
          )}

          {/* Field Photography Mode */}
          {viewMode === 'photo' && (
            <div className="relative aspect-[21/9] sm:aspect-[2.5/1] overflow-hidden bg-[#171513]">
              <img
                src={IMAGES.heroPlateau}
                alt="Giza Plateau field photograph showing Khufu, Khafre, and Menkaure"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Interactive Monument Markers on the Panorama */}
              <div className="absolute inset-0 p-4 flex items-end justify-around pb-6 pointer-events-none">
                {/* Khufu Marker */}
                <button
                  type="button"
                  onClick={() => setSelectedPyramidId('khufu')}
                  className={`pointer-events-auto px-3 py-1.5 border text-xs font-mono uppercase tracking-wider backdrop-blur-md cursor-pointer transition-all ${
                    selectedPyramidId === 'khufu'
                      ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#F4EFE5] shadow-lg scale-105'
                      : 'bg-[#171513]/80 text-[#D8C7A3] border-[#B49A72]/50 hover:bg-[#171513]'
                  }`}
                >
                  <span className="font-bold block">1. Khufu (Great Pyramid)</span>
                  <span className="text-[10px] opacity-80">146.6m // 2.58M m³</span>
                </button>

                {/* Khafre Marker */}
                <button
                  type="button"
                  onClick={() => setSelectedPyramidId('khafre')}
                  className={`pointer-events-auto px-3 py-1.5 border text-xs font-mono uppercase tracking-wider backdrop-blur-md cursor-pointer transition-all ${
                    selectedPyramidId === 'khafre'
                      ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#F4EFE5] shadow-lg scale-105'
                      : 'bg-[#171513]/80 text-[#D8C7A3] border-[#B49A72]/50 hover:bg-[#171513]'
                  }`}
                >
                  <span className="font-bold block">2. Khafre</span>
                  <span className="text-[10px] opacity-80">143.5m // Casing Cap</span>
                </button>

                {/* Menkaure Marker */}
                <button
                  type="button"
                  onClick={() => setSelectedPyramidId('menkaure')}
                  className={`pointer-events-auto px-3 py-1.5 border text-xs font-mono uppercase tracking-wider backdrop-blur-md cursor-pointer transition-all ${
                    selectedPyramidId === 'menkaure'
                      ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#F4EFE5] shadow-lg scale-105'
                      : 'bg-[#171513]/80 text-[#D8C7A3] border-[#B49A72]/50 hover:bg-[#171513]'
                  }`}
                >
                  <span className="font-bold block">3. Menkaure</span>
                  <span className="text-[10px] opacity-80">65.5m // Granite Base</span>
                </button>
              </div>

              {/* Photo Legend */}
              <div className="absolute top-2 right-2 bg-[#171513]/85 border border-[#B49A72]/40 px-2.5 py-1 text-[11px] font-mono text-[#D8C7A3]">
                ARCHIVAL SURVEY · SELECT MONUMENT TO INSPECT
              </div>
            </div>
          )}
        </div>

        {/* Interactive Selector Tabs (Clear Interactive Cards) */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#8A4F3D]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A4F3D] font-bold">
              Select Pyramid Architectural Profile:
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PYRAMIDS.map((p) => {
              const isSelected = selectedPyramidId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPyramidId(p.id)}
                  className={`p-4 text-left cursor-pointer transition-all border-2 relative group shadow-xs ${
                    isSelected
                      ? 'bg-white border-[#8A4F3D] ring-2 ring-[#8A4F3D]/20 shadow-md -translate-y-0.5'
                      : 'bg-[#F4EFE5]/70 hover:bg-white border-[#2B211B]/20 hover:border-[#8A4F3D]/60 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[11px] text-[#8A4F3D] font-bold tracking-wider uppercase">
                      {p.estimatedBCE}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 border ${
                      isSelected
                        ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold'
                        : 'bg-white/80 text-[#2B211B]/70 border-[#2B211B]/20 group-hover:border-[#8A4F3D]'
                    }`}>
                      {isSelected ? 'Active Profile' : 'Click to View →'}
                    </span>
                  </div>
                  <span className="font-serif font-bold text-lg sm:text-xl block text-[#2B211B] group-hover:text-[#8A4F3D] transition-colors">
                    {p.pharaoh}
                  </span>
                  <div className="flex items-center justify-between text-xs font-mono text-[#2B211B]/70 mt-1">
                    <span>{metricUnit === 'meters' ? `${p.originalHeightM}m original height` : `${mToFt(p.originalHeightM)}ft original height`}</span>
                    <span className="text-[#8A4F3D] font-semibold">{p.slopeAngleDeg}° slope</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Pyramid Detailed Architectural Dossier (Open Editorial Layout) */}
        <div className="py-2">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2B211B]/15 pb-4 mb-8">
            <div>
              <span className="font-mono text-xs text-[#8A4F3D] uppercase tracking-widest block font-bold">
                Royal Monument Dossier // {selectedPyramid.reignPeriod}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B211B] mt-1">
                {selectedPyramid.name}
              </h3>
              <p className="font-serif italic text-sm text-[#8A4F3D] mt-0.5">
                {selectedPyramid.arabicName}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="font-mono text-xs text-[#2B211B]/60 uppercase block">Slope & Seked</span>
              <span className="font-mono text-base font-bold text-[#2B211B] block">
                {selectedPyramid.slopeAngleDeg}° ({selectedPyramid.sekedRatio})
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Metric Column 1 */}
            <div>
              <span className="block font-mono text-xs text-[#8A4F3D] uppercase tracking-wider font-bold mb-3">
                Dimensional Footprint
              </span>
              <div className="space-y-2 text-sm text-[#2B211B]">
                <div className="flex justify-between border-b border-[#2B211B]/10 pb-1.5">
                  <span className="font-mono text-xs text-[#2B211B]/70">Original Height</span>
                  <span className="font-bold">{metricUnit === 'meters' ? `${selectedPyramid.originalHeightM} m` : `${mToFt(selectedPyramid.originalHeightM)} ft`}</span>
                </div>
                <div className="flex justify-between border-b border-[#2B211B]/10 pb-1.5">
                  <span className="font-mono text-xs text-[#2B211B]/70">Current Height</span>
                  <span className="font-bold">{metricUnit === 'meters' ? `${selectedPyramid.currentHeightM} m` : `${mToFt(selectedPyramid.currentHeightM)} ft`}</span>
                </div>
                <div className="flex justify-between border-b border-[#2B211B]/10 pb-1.5">
                  <span className="font-mono text-xs text-[#2B211B]/70">Base Length</span>
                  <span className="font-bold">{metricUnit === 'meters' ? `${selectedPyramid.baseLengthM} m` : `${mToFt(selectedPyramid.baseLengthM)} ft`}</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="font-mono text-xs text-[#2B211B]/70">Base Area</span>
                  <span className="font-bold">{selectedPyramid.baseAreaM2.toLocaleString()} m²</span>
                </div>
              </div>
            </div>

            {/* Metric Column 2 */}
            <div>
              <span className="block font-mono text-xs text-[#8A4F3D] uppercase tracking-wider font-bold mb-3">
                Materials & Sourcing
              </span>
              <div className="space-y-3 text-xs text-[#2B211B]">
                <div>
                  <span className="font-mono font-bold text-[#8A4F3D] block mb-0.5">Exterior Casing</span>
                  <p className="leading-relaxed text-[#2B211B]/85">{selectedPyramid.casingMaterial}</p>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#8A4F3D] block mb-0.5">Core Masonry</span>
                  <p className="leading-relaxed text-[#2B211B]/85">{selectedPyramid.coreMaterial}</p>
                </div>
              </div>
            </div>

            {/* Metric Column 3 */}
            <div>
              <span className="block font-mono text-xs text-[#8A4F3D] uppercase tracking-wider font-bold mb-3">
                Internal Architecture
              </span>
              <p className="text-xs leading-relaxed text-[#2B211B]/85">
                {selectedPyramid.internalComplexity}
              </p>
            </div>
          </div>

          {/* Architectural Innovations */}
          <div className="border-t border-[#2B211B]/15 pt-6 mb-4">
            <h4 className="font-mono text-xs font-bold text-[#8A4F3D] uppercase tracking-wider mb-3">
              Key Engineering Innovations & Distinctives
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2B211B]">
              {selectedPyramid.architecturalInnovations.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[#8A4F3D] font-bold">—</span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
