import React, { useState } from 'react';
import { IMAGES } from '../assets/images';

interface HeroSectionProps {
  onBeginExploring: () => void;
  onOpenLegend: () => void;
}

export type EpochMode = 'golden' | 'ancient' | 'celestial';

interface Hotspot {
  id: string;
  title: string;
  shortName: string;
  subLabel: string;
  ancientName: string;
  translation: string;
  pharaoh: string;
  x: number; // percentage
  y: number; // percentage
  badgePlacement?: 'above' | 'below';
  keyFact: string;
  targetSectionId: string;
  chapterLabel: string;
  isSpecialHighlight?: boolean;
  extraStats?: { label: string; value: string }[];
  extendedDetails?: string[];
}

const GOLDEN_HOTSPOTS: Hotspot[] = [
  {
    id: 'menkaure',
    title: 'Pyramid of Menkaure',
    shortName: 'Pyramid of Menkaure',
    subLabel: '65.5m',
    ancientName: 'Netjer-er-Menkaure',
    translation: 'Divine is Menkaure',
    pharaoh: 'Menkaure • c. 2510 BCE',
    x: 14.5,
    y: 35.4,
    badgePlacement: 'above',
    keyFact: 'Standing 65.5m tall on the southwest ridge, Menkaure completes the Giza triad. Clad in 16 lower courses of red Aswan granite.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 01: The Three Giants',
    extraStats: [
      { label: 'Original Height', value: '65.5m (215 ft)' },
      { label: 'Base Dimensions', value: '102.2 × 104.6 m' },
      { label: 'Slope Angle', value: '51° 20′ 25″' },
      { label: 'Granite Casing', value: '16 courses Aswan granite' },
    ],
  },
  {
    id: 'khafre',
    title: 'Pyramid of Khafre',
    shortName: 'Pyramid of Khafre',
    subLabel: '143.5m',
    ancientName: 'Wr-Khafre',
    translation: 'Great is Khafre',
    pharaoh: 'Khafre • c. 2540 BCE',
    x: 40.0,
    y: 22.9,
    badgePlacement: 'above',
    keyFact: 'The central pyramid of Giza (143.5m), uniquely preserving original polished Tura limestone casing stones across its peak.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 01: The Three Giants',
    extraStats: [
      { label: 'Original Height', value: '143.5m (471 ft)' },
      { label: 'Base Dimensions', value: '215.25 × 215.25 m' },
      { label: 'Slope Angle', value: '53° 10′' },
      { label: 'Apex Summit', value: 'Intact Tura Casing Stones' },
    ],
  },
  {
    id: 'khufu',
    title: 'The Great Pyramid of Khufu',
    shortName: 'The Great Pyramid (Khufu)',
    subLabel: '146.6m',
    ancientName: 'Akhet Khufu',
    translation: 'The Horizon of Khufu',
    pharaoh: 'Khufu • c. 2570 BCE',
    x: 76.6,
    y: 22.4,
    badgePlacement: 'above',
    keyFact: 'The Great Pyramid standing on the right (146.6m), constructed from 2.3 million dressed limestone blocks aligned within 3 minutes of True North.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 01: The Three Giants',
    extraStats: [
      { label: 'Original Height', value: '146.6m (481 ft)' },
      { label: 'Base Dimensions', value: '230.34 × 230.34 m' },
      { label: 'Alignment', value: 'True North (Dev. 3′ 38″)' },
      { label: 'Internal Layout', value: 'Grand Gallery & 3 Chambers' },
    ],
  },
  {
    id: 'sphinx',
    title: 'The Great Sphinx of Giza',
    shortName: 'The Great Sphinx',
    subLabel: '73m Monolith',
    ancientName: 'Hor-em-akhet',
    translation: 'Horus on the Horizon',
    pharaoh: 'Attributed to Khafre • c. 2540 BCE',
    x: 63.0,
    y: 64.0,
    badgePlacement: 'above',
    keyFact: 'A colossal 73-meter monolith sculpted directly in situ from natural limestone bedrock, facing due east toward the equinox sunrise.',
    targetSectionId: 'sphinx',
    chapterLabel: 'Chapter 05: The Great Sphinx',
    extraStats: [
      { label: 'Dimensions', value: '73m length × 20m height' },
      { label: 'Alignment', value: '90° True East' },
      { label: 'Geology', value: 'Mokattam Formation Member II' },
      { label: 'Votive Marker', value: 'Dream Stele of Thutmose IV' },
    ],
  },
];

const ANCIENT_HOTSPOTS: Hotspot[] = [
  {
    id: 'electrum_capstone',
    title: 'Electrum Pyramidion (Benbenet)',
    shortName: 'Electrum Capstone',
    subLabel: 'Khufu Apex (2560 BCE)',
    ancientName: 'Benbenet',
    translation: 'The Primal Mound of Creation',
    pharaoh: 'Khufu • 4th Dynasty',
    x: 76.5,
    y: 22.0,
    badgePlacement: 'above',
    keyFact: 'Solid electrum (gold-silver alloy) capstone that caught the first rays of dawn, acting as a beacon visible for 30 km down the Nile valley.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 01: Khufu Apex Anatomy',
  },
  {
    id: 'tura_casing',
    title: 'Polished Tura Limestone Envelope',
    shortName: 'Polished Tura Casing',
    subLabel: 'Khafre Stepped Envelope',
    ancientName: 'Inbu-Hedj',
    translation: 'The White Wall Facade',
    pharaoh: 'Royal Quarrymen at Tura',
    x: 40.0,
    y: 28.0,
    badgePlacement: 'above',
    keyFact: 'Over 115,000 precision-cut white casing blocks fitted with joint clearances under 0.2mm, polished to a mirror finish that reflected solar heat.',
    targetSectionId: 'building',
    chapterLabel: 'Chapter 03: Precision Masonry',
  },
  {
    id: 'menkaure_granite',
    title: 'Menkaure Red Granite Cladding',
    shortName: 'Aswan Granite Cladding',
    subLabel: 'Menkaure Lower Envelope',
    ancientName: 'Netjer-er-Menkaure',
    translation: 'Divine Foundation',
    pharaoh: 'Menkaure • c. 2510 BCE',
    x: 14.0,
    y: 38.0,
    badgePlacement: 'above',
    keyFact: 'Sixteen bottom courses faced in hard red granite shipped 800 km north down the Nile from Aswan.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 02: Dynastic Cladding',
  },
  {
    id: 'causeway_khafre',
    title: 'Khafre Causeway & Harbor Temple',
    shortName: 'Khafre Causeway',
    subLabel: '494m Covered Processional',
    ancientName: 'Wat-Netjer',
    translation: 'The Sacred Way',
    pharaoh: 'Khafre • c. 2540 BCE',
    x: 52.0,
    y: 60.0,
    badgePlacement: 'above',
    keyFact: 'A 494m covered limestone processional causeway connecting the monumental Valley Temple to the Upper Mortuary Sanctuary.',
    targetSectionId: 'sphinx',
    chapterLabel: 'Chapter 05: Valley Complex',
  },
  {
    id: 'nile_ahramat',
    title: 'Ahramat Branch & Royal Port',
    shortName: 'Ahramat Nile Port',
    subLabel: '64km Navigable Waterway',
    ancientName: 'Iteru Ahramat',
    translation: 'The River of the Pyramids',
    pharaoh: 'Old Kingdom Navigation Fleet',
    x: 65.0,
    y: 82.0,
    badgePlacement: 'above',
    keyFact: 'A 64-kilometer navigable waterway passing directly alongside the pyramid plateau, carrying tens of thousands of tons of high-grade stone.',
    targetSectionId: 'landscape',
    chapterLabel: 'Chapter 04: The Lost Riverway',
  },
];

const CELESTIAL_HOTSPOTS: Hotspot[] = [
  {
    id: 'north_meridian',
    title: 'True Astronomical North Meridian',
    shortName: 'True North Axis',
    subLabel: 'Khufu Meridian Alignment (3′ 38″)',
    ancientName: 'Ikhemu-sek',
    translation: 'The Indestructible Circumpolar Stars',
    pharaoh: 'Aligned using Kochab & Mizar',
    x: 76.5,
    y: 22.4,
    badgePlacement: 'above',
    keyFact: 'Khufu is aligned with True North to within 3 minutes and 38 seconds of arc (1/15th of a degree), an accuracy exceeding modern architectural tolerances.',
    targetSectionId: 'astronomy',
    chapterLabel: 'Chapter 06: Archaeoastronomy',
  },
  {
    id: 'orion_correlation',
    title: 'Orion Belt Meridian Transit',
    shortName: 'Orion Belt Correlation',
    subLabel: 'Triad Diagonal Vector',
    ancientName: 'Sah',
    translation: 'The Celestial Embodiment of Osiris',
    pharaoh: 'Bauwals Archaeoastronomy Theory',
    x: 40.0,
    y: 19.0,
    badgePlacement: 'above',
    keyFact: 'The three pyramids align along a diagonal vector mirroring the relative angles and minor offset of Mintaka in Orion’s Belt.',
    targetSectionId: 'astronomy',
    chapterLabel: 'Chapter 07: Orion Correlation',
  },
  {
    id: 'seked_slope',
    title: 'The Golden Seked (51° 50′ 40″)',
    shortName: 'Khufu Seked Incline',
    subLabel: '51° 50′ 40″ Slope (seked 28:22)',
    ancientName: 'Seked 5½ Palms',
    translation: 'The Sacred Rise-to-Run Ratio',
    pharaoh: 'Rhind Mathematical Papyrus',
    x: 71.0,
    y: 35.0,
    badgePlacement: 'above',
    keyFact: 'A rise of 1 cubit (28 digits) for every 22 digits run, producing a perimeter-to-height ratio equal to 2π with remarkable mathematical harmony.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 01: Geometric Proofs',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onBeginExploring, onOpenLegend }) => {
  const [epoch, setEpoch] = useState<EpochMode>('golden');
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>('sphinx');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const currentHotspots = 
    epoch === 'ancient' ? ANCIENT_HOTSPOTS :
    epoch === 'celestial' ? CELESTIAL_HOTSPOTS :
    GOLDEN_HOTSPOTS;

  const activeHotspot = currentHotspots.find((h) => h.id === activeHotspotId) || currentHotspots[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseOffset({ x: nx * 6, y: ny * 4 });
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[98vh] flex flex-col justify-between bg-[#15110E] text-[#F4EFE5] overflow-hidden pt-10 sm:pt-14 pb-12 border-b-2 border-[#8A4F3D]/50"
    >
      {/* ================= POWERFUL FULL-BLEED MONUMENTAL BACKGROUND ================= */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0) scale(1.05)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* State 1: Present Day Golden Hour Majesty */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            epoch === 'golden' ? 'opacity-95' : 'opacity-0'
          }`}
        >
          <img
            src={IMAGES.monumentGoldenHour}
            alt="The Great Sphinx and Giza Pyramids bathed in radiant golden hour desert sunset"
            className="w-full h-full object-cover object-[center_36%] filter brightness-[0.98] contrast-[1.08] saturate-[1.12]"
            referrerPolicy="no-referrer"
          />
          {/* Luminous Warm Amber Sun Radiance & Golden Desert Atmospheric Scrim */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_35%,rgba(245,158,11,0.22)_0%,rgba(138,79,61,0.08)_50%,transparent_80%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15110E] via-[#15110E]/50 to-[#15110E]/75" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#15110E]/30 to-[#15110E]" />
        </div>

        {/* State 2: 2560 BCE Old Kingdom Reconstruction (Tura Limestone & Electrum Pyramidion) */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            epoch === 'ancient' ? 'opacity-90' : 'opacity-0'
          }`}
        >
          <img
            src={IMAGES.ancientReconstruction}
            alt=""
            className="w-full h-full object-cover object-[center_35%]"
            referrerPolicy="no-referrer"
          />
          {/* Dawn Radiance & Atmospheric Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#15110E] via-[#15110E]/50 to-[#15110E]/75" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#15110E]/35 to-[#15110E]" />
          
          {/* Subtle Radiant Glimmer over the Khufu Apex */}
          <div className="absolute top-[32%] left-[63%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#E2D2B4]/25 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* State 3: Sah Midnight Celestial Horizon (Orion & Milky Way) */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            epoch === 'celestial' ? 'opacity-90' : 'opacity-0'
          }`}
        >
          <img
            src={IMAGES.nightCelestial}
            alt=""
            className="w-full h-full object-cover object-[center_30%]"
            referrerPolicy="no-referrer"
          />
          {/* Deep Indigo Night Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#15110E] via-[#15110E]/60 to-[#15110E]/85" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0907]/45 to-[#15110E]" />
        </div>

        {/* High-Precision Archaeological Surveyor Grid Overlay */}
        <div className="absolute inset-0 bg-surveyor-grid-dark opacity-35 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10 w-full">
        {/* Top Survey Header Coordinates */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#B49A72]/20 pb-3 mb-6 text-[11px] font-mono tracking-widest text-[#D8C7A3]/75 backdrop-blur-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#8A4F3D] inline-block" />
            <span>GIZA NECROPOLIS // 29°58′45″N 31°08′03″E</span>
          </div>
          <div className="flex items-center gap-4 text-[#D8C7A3]/60">
            <span className="text-[#E2D2B4]">
              EPOCH: {epoch === 'ancient' ? '2560 BCE OLD KINGDOM' : epoch === 'celestial' ? 'VERNAL MERIDIAN TRANSIT' : 'PRESENT SURVEY'}
            </span>
            <span className="hidden sm:inline-block">DATUM: C. 2570 BCE</span>
          </div>
        </div>

        {/* Monumental Headline */}
        <div className="text-center max-w-4xl mx-auto mb-4">
          <span className="text-xs font-mono tracking-[0.28em] text-[#8A4F3D] uppercase font-bold block mb-2 drop-shadow-sm">
            An Interactive Archaeological Investigation
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#F4EFE5] uppercase leading-none mb-3 drop-shadow-md">
            Giza Pyramids
          </h1>
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#E2D2B4] font-light tracking-wide drop-shadow-sm">
            Three monuments. One sacred landscape. 4,500 years of inquiry.
          </p>
        </div>

        {/* Horizon Perspective Switcher */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#1C1613]/95 border-2 border-[#B49A72]/50 shadow-2xl backdrop-blur-md">
            <button
              type="button"
              onClick={() => {
                setEpoch('golden');
                setActiveHotspotId('khufu');
              }}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer border ${
                epoch === 'golden'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#F4EFE5]/40 font-bold shadow-lg scale-102 ring-1 ring-[#8A4F3D]'
                  : 'bg-[#15110E]/80 text-[#D8C7A3] border-[#B49A72]/30 hover:border-[#D8C7A3] hover:text-[#F4EFE5] hover:bg-[#281F1A]'
              }`}
            >
              Golden Hour
            </button>

            <button
              type="button"
              onClick={() => {
                setEpoch('ancient');
                setActiveHotspotId('electrum_capstone');
              }}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer border ${
                epoch === 'ancient'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#F4EFE5]/40 font-bold shadow-lg scale-102 ring-1 ring-[#8A4F3D]'
                  : 'bg-[#15110E]/80 text-[#D8C7A3] border-[#B49A72]/30 hover:border-[#D8C7A3] hover:text-[#F4EFE5] hover:bg-[#281F1A]'
              }`}
            >
              Khufu's Horizon (2560 BCE)
            </button>

            <button
              type="button"
              onClick={() => {
                setEpoch('celestial');
                setActiveHotspotId('north_meridian');
              }}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer border ${
                epoch === 'celestial'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#F4EFE5]/40 font-bold shadow-lg scale-102 ring-1 ring-[#8A4F3D]'
                  : 'bg-[#15110E]/80 text-[#D8C7A3] border-[#B49A72]/30 hover:border-[#D8C7A3] hover:text-[#F4EFE5] hover:bg-[#281F1A]'
              }`}
            >
              Orion Transit
            </button>
          </div>
        </div>

        {/* ================= INTERACTIVE LIVING PANORAMA (SYNCHRONIZED STAGE) ================= */}
        <div className="relative max-w-5xl mx-auto mb-8 shadow-2xl">
          {/* Panoramic Stage Container */}
          <div className="relative aspect-[21/10] sm:aspect-[2.3/1] overflow-hidden bg-[#171513] border-2 border-[#B49A72]/50 group shadow-2xl">
            {/* Photographic Layer Synchronized to Selected Epoch */}
            <img
              src={
                epoch === 'ancient'
                  ? IMAGES.ancientReconstruction
                  : epoch === 'celestial'
                  ? IMAGES.nightCelestial
                  : IMAGES.monumentGoldenHour
              }
              alt="Panoramic survey of the Giza Plateau: Menkaure (left), Khafre (center), and The Great Pyramid of Khufu (right) with the Great Sphinx"
              className="w-full h-full object-cover object-center transition-all duration-700 brightness-[1.02] contrast-[1.06] saturate-[1.08]"
              referrerPolicy="no-referrer"
            />

            {/* Celestial Meridian Overlay (When in Celestial View) */}
            {epoch === 'celestial' && (
              <div className="absolute inset-0 pointer-events-none">
                {/* Simulated Starfield vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#0e0b09]/80" />
                
                {/* SVG Astronomical Alignment Vectors */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 450" preserveAspectRatio="none">
                  {/* True Astronomical North Meridian Line through Khufu's exact apex (76.5%) */}
                  <line 
                    x1="765" y1="20" x2="765" y2="430" 
                    stroke="#B49A72" strokeWidth="1.2" strokeDasharray="4,4" opacity="0.9" 
                  />
                  
                  {/* Circumpolar Target Ring over Khufu Apex (x=765, y=100) */}
                  <circle cx="765" cy="100" r="18" fill="none" stroke="#D8C7A3" strokeWidth="1.2" opacity="0.8" />
                  <circle cx="765" cy="100" r="4" fill="#F4EFE5" />
                  
                  {/* 51° 50' 40" Angle Indicator on Khufu's West Flank */}
                  <line x1="765" y1="100" x2="685" y2="210" stroke="#8A4F3D" strokeWidth="1.5" opacity="0.9" />
                  
                  {/* Orion Belt Correlation Vector across all three summits */}
                  <line 
                    x1="140" y1="160" x2="400" y2="103" 
                    stroke="#D8C7A3" strokeWidth="1" strokeDasharray="3,3" opacity="0.75" 
                  />
                  <line 
                    x1="400" y1="103" x2="765" y2="100" 
                    stroke="#D8C7A3" strokeWidth="1" strokeDasharray="3,3" opacity="0.75" 
                  />
                  <circle cx="140" cy="160" r="3" fill="#D8C7A3" />
                  <circle cx="400" cy="103" r="3" fill="#D8C7A3" />
                  
                  {/* Polar Star Alignment Labels */}
                  <text x="775" y="45" fill="#D8C7A3" fontSize="11" fontFamily="monospace" opacity="0.95" fontWeight="bold">
                    TRUE NORTH AXIS (DEV. 3′ 38″)
                  </text>
                  <text x="775" y="65" fill="#B49A72" fontSize="9.5" fontFamily="monospace" opacity="0.85">
                    KOCHAB ↔ MIZAR MERIDIAN TRANSIT
                  </text>
                  <text x="680" y="200" fill="#D8C7A3" fontSize="10" fontFamily="monospace">
                    SLOPE: 51° 50′ 40″
                  </text>
                </svg>
              </div>
            )}

            {/* Gradient Mask for Vignette & Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/90 via-transparent to-transparent pointer-events-none" />

            {/* Interactive Story Hotspots & Callout Name Badges Just Upon Each Pyramid */}
            {currentHotspots.map((hotspot) => {
              const isSelected = activeHotspotId === hotspot.id;
              const isKhufu = hotspot.id === 'khufu' || hotspot.id === 'electrum_capstone' || hotspot.id === 'north_meridian';
              const isSphinx = hotspot.id === 'sphinx';
              const isMenkaure = hotspot.id === 'menkaure' || hotspot.id === 'menkaure_granite';

              // Responsive positioning offset for badges near image edges
              const horizontalAlignment = 
                isMenkaure
                  ? '-translate-x-[20%] sm:-translate-x-1/2'
                  : isKhufu
                  ? '-translate-x-[80%] sm:-translate-x-1/2'
                  : '-translate-x-1/2';

              return (
                <div
                  key={hotspot.id}
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
                >
                  {/* ================= CALLOUT CARD RIGHT UPON THE MONUMENT ================= */}
                  <div
                    className={`absolute bottom-6 sm:bottom-7 left-1/2 ${horizontalAlignment} flex flex-col items-center pointer-events-auto transition-all duration-200`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveHotspotId(hotspot.id)}
                      className={`px-2.5 py-1 sm:px-3 sm:py-1.5 border transition-all duration-200 shadow-2xl backdrop-blur-md cursor-pointer text-center group/card ${
                        isSelected
                          ? 'bg-[#27170F]/95 border-amber-300 ring-2 ring-amber-400 shadow-amber-950/70 scale-105 z-30'
                          : isKhufu
                          ? 'bg-[#18110D]/90 border-amber-500/70 hover:border-amber-300 hover:bg-[#251A13] hover:scale-102 z-25'
                          : isSphinx
                          ? 'bg-[#1A130E]/90 border-amber-400/60 hover:border-amber-300 hover:bg-[#281C15] hover:scale-102 z-25'
                          : 'bg-[#15110E]/90 border-[#B49A72]/60 hover:border-amber-300 hover:bg-[#221610] hover:scale-102 z-20'
                      }`}
                      aria-label={`Inspect ${hotspot.title}`}
                    >
                      {/* Name of the Pyramid / Monument */}
                      <div className="flex items-center justify-center gap-1.5">
                        <span 
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSelected 
                              ? 'bg-amber-300 animate-pulse' 
                              : isKhufu 
                              ? 'bg-amber-400' 
                              : isSphinx
                              ? 'bg-amber-300'
                              : 'bg-[#B49A72]'
                          }`} 
                        />
                        <span
                          className={`font-mono text-[9px] sm:text-[11px] uppercase tracking-wider font-bold whitespace-nowrap ${
                            isSelected 
                              ? 'text-amber-200' 
                              : isKhufu 
                              ? 'text-[#F4EFE5]' 
                              : isSphinx 
                              ? 'text-amber-200' 
                              : 'text-[#F4EFE5]'
                          }`}
                        >
                          {hotspot.shortName || hotspot.title}
                        </span>
                      </div>
                    </button>

                    {/* Downward Pointer Triangle Anchored Straight to Peak */}
                    <div
                      className={`w-2 h-2 -mt-1 rotate-45 border-r border-b transition-colors shadow-xs ${
                        isSelected
                          ? 'bg-[#27170F] border-amber-300'
                          : isKhufu
                          ? 'bg-[#18110D] border-amber-500/70'
                          : isSphinx
                          ? 'bg-[#1A130E] border-amber-400/60'
                          : 'bg-[#15110E] border-[#B49A72]/60'
                      }`}
                    />
                  </div>

                  {/* ================= SUMMIT PIN MARKER ================= */}
                  <button
                    type="button"
                    onClick={() => setActiveHotspotId(hotspot.id)}
                    className="relative flex items-center justify-center cursor-pointer focus:outline-none"
                    aria-label={`Summit pin for ${hotspot.title}`}
                  >
                    {/* Outer Pulsing Target Ring */}
                    <span 
                      className={`absolute inset-0 rounded-full border transition-transform duration-300 ${
                        isSelected 
                          ? 'border-amber-300 scale-150 animate-ping opacity-90 -m-1.5' 
                          : isKhufu
                          ? 'border-amber-400/70 scale-125 animate-pulse opacity-75 -m-1'
                          : isSphinx
                          ? 'border-amber-400/70 scale-125 animate-pulse opacity-75 -m-1'
                          : 'border-[#B49A72] opacity-50 -m-1'
                      }`} 
                    />
                    
                    {/* Hotspot Core Pin */}
                    <span 
                      className={`relative flex items-center justify-center rounded-full font-mono text-[9px] font-bold transition-all shadow-xl ${
                        isSphinx ? 'w-6 h-6' : 'w-5 h-5 sm:w-5.5 sm:h-5.5'
                      } ${
                        isSelected 
                          ? isSphinx
                            ? 'bg-[#B49A72] text-[#15110E] ring-2 ring-amber-300'
                            : 'bg-[#8A4F3D] text-[#F4EFE5] ring-2 ring-amber-300' 
                          : isKhufu
                          ? 'bg-[#2A1810] text-amber-300 border border-amber-400 hover:bg-[#8A4F3D] hover:text-[#F4EFE5]'
                          : isSphinx
                          ? 'bg-[#2A1D16] text-amber-300 border border-amber-400 hover:bg-amber-500 hover:text-black'
                          : 'bg-[#1C1613]/90 text-[#D8C7A3] border border-[#B49A72]/60 hover:bg-[#8A4F3D] hover:text-[#F4EFE5]'
                      }`}
                    >
                      {isSphinx ? '★' : isKhufu ? '▲' : '▲'}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Active Hotspot Story Dossier */}
          {activeHotspot && (
            <div className="mt-2 bg-[#201814] border-t-2 border-[#8A4F3D] p-4 sm:p-6 text-[#F4EFE5] transition-all shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Identity & Historical Overview */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#8A4F3D] uppercase tracking-wider">
                      {activeHotspot.ancientName}
                    </span>
                    <span className="text-xs text-[#D8C7A3]/70 font-serif-text italic">
                      — "{activeHotspot.translation}"
                    </span>
                    <span className="text-[10px] font-mono text-[#B49A72] border border-[#B49A72]/40 px-2 py-0.5 bg-[#17120F]">
                      {activeHotspot.pharaoh}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F4EFE5] mb-2">
                    {activeHotspot.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D8C7A3] leading-relaxed max-w-3xl mb-4 font-serif-text">
                    {activeHotspot.keyFact}
                  </p>

                  {/* Archaeological Metrics Grid */}
                  {activeHotspot.extraStats && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2 p-3 bg-[#17120F] border border-[#B49A72]/30">
                      {activeHotspot.extraStats.map((stat) => (
                        <div key={stat.label} className="border-l-2 border-[#8A4F3D] pl-2 py-0.5">
                          <div className="text-[10px] font-mono uppercase text-[#B49A72] tracking-wider">
                            {stat.label}
                          </div>
                          <div className="text-xs font-mono font-semibold text-[#F4EFE5]">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Direct Chapter Link CTA */}
                <div className="shrink-0 flex items-center">
                  <button
                    type="button"
                    onClick={() => scrollToSection(activeHotspot.targetSectionId)}
                    className="px-6 py-3.5 bg-[#8A4F3D] hover:bg-[#a15e4a] text-[#F4EFE5] text-xs font-mono uppercase tracking-wider flex items-center gap-2.5 transition-all cursor-pointer group shadow-xl border border-[#F4EFE5]/30 hover:scale-102 active:scale-98"
                  >
                    <span className="font-bold">{activeHotspot.chapterLabel}</span>
                    <span className="text-[#E2D2B4] group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            id="hero-begin-exploring-btn"
            type="button"
            onClick={onBeginExploring}
            className="w-full sm:w-auto px-8 py-4 bg-[#8A4F3D] hover:bg-[#9c5844] text-[#F4EFE5] font-mono text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-3 cursor-pointer group shadow-2xl border-2 border-[#D8C7A3]/40 hover:border-[#F4EFE5] hover:scale-102 active:scale-98"
          >
            <span className="font-bold">Begin The Investigation</span>
            <span className="text-amber-300 group-hover:translate-y-0.5 transition-transform">↓</span>
          </button>

          <button
            id="hero-evidence-key-btn"
            type="button"
            onClick={onOpenLegend}
            className="w-full sm:w-auto px-7 py-4 text-[#F4EFE5] bg-[#1E1713]/90 hover:bg-[#2B211B] border-2 border-[#B49A72]/60 hover:border-[#D8C7A3] font-mono text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-md shadow-xl hover:scale-102 active:scale-98"
          >
            <span className="font-semibold">Evidence Key</span>
            <span className="text-amber-400 text-xs">→</span>
          </button>
        </div>
      </div>

      {/* Epistemic Spectrum Baseline at Bottom of Hero (Clickable to open Evidence Key) */}
      <div className="relative max-w-5xl mx-auto w-full px-4 z-10 border-t border-[#B49A72]/30 pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
          <button
            type="button"
            onClick={onOpenLegend}
            className="text-[#B49A72] hover:text-[#F4EFE5] uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors group text-left"
            title="Click to view scientific evidence key"
          >
            <span className="font-semibold underline underline-offset-4 decoration-[#8A4F3D]">Scientific Classification Standard:</span>
            <span className="text-[10px] text-[#D8C7A3]/70 group-hover:text-amber-300">(Click to view key)</span>
          </button>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#D8C7A3]">
            <button
              type="button"
              onClick={onOpenLegend}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/30 hover:bg-emerald-950/60 cursor-pointer transition-all uppercase text-[11px]"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400" /> Established
            </button>
            <button
              type="button"
              onClick={onOpenLegend}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-sky-500/40 hover:border-sky-400 bg-sky-950/30 hover:bg-sky-950/60 cursor-pointer transition-all uppercase text-[11px]"
            >
              <span className="w-1.5 h-1.5 bg-sky-400" /> Supported
            </button>
            <button
              type="button"
              onClick={onOpenLegend}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-amber-500/40 hover:border-amber-400 bg-amber-950/30 hover:bg-amber-950/60 cursor-pointer transition-all uppercase text-[11px]"
            >
              <span className="w-1.5 h-1.5 bg-amber-400" /> Debated
            </button>
            <button
              type="button"
              onClick={onOpenLegend}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-rose-500/40 hover:border-rose-400 bg-rose-950/30 hover:bg-rose-950/60 cursor-pointer transition-all uppercase text-[11px]"
            >
              <span className="w-1.5 h-1.5 bg-rose-400" /> Speculative
            </button>
            <button
              type="button"
              onClick={onOpenLegend}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-stone-500/40 hover:border-stone-400 bg-stone-900/40 hover:bg-stone-900/70 cursor-pointer transition-all uppercase text-[11px]"
            >
              <span className="w-1.5 h-1.5 bg-stone-400" /> Unknown
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

