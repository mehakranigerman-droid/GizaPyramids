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
  ancientName: string;
  translation: string;
  pharaoh: string;
  x: number; // percentage
  y: number; // percentage
  keyFact: string;
  targetSectionId: string;
  chapterLabel: string;
  isSpecialHighlight?: boolean;
  extraStats?: { label: string; value: string }[];
  extendedDetails?: string[];
}

const GOLDEN_HOTSPOTS: Hotspot[] = [
  {
    id: 'sphinx',
    title: 'The Great Sphinx of Giza',
    ancientName: 'Hor-em-akhet // Abu al-Hol',
    translation: 'Horus on the Horizon // Father of Dread',
    pharaoh: 'Attributed to Pharaoh Khafre • c. 2540 BCE (4th Dynasty)',
    x: 76,
    y: 68,
    keyFact: 'A colossal 73-meter-long monolith carved in situ directly from living limestone bedrock. Positioned facing precisely 90° True East toward the equinox sunrise, flanked by the 18th-Dynasty Dream Stele of Thutmose IV resting between its lion paws.',
    targetSectionId: 'sphinx',
    chapterLabel: 'Chapter 05: The Great Sphinx & Weathering',
    isSpecialHighlight: true,
    extraStats: [
      { label: 'Total Dimensions', value: '73m length × 20m height (240 × 66 ft)' },
      { label: 'Astronomical Alignment', value: '90° True East (Equinoctial Sunrise)' },
      { label: 'Geological Layer', value: 'Mokattam Formation Member II (Limestone)' },
      { label: 'Votive Monument', value: 'Dream Stele of Thutmose IV (c. 1401 BCE)' },
    ],
    extendedDetails: [
      'Sculpted directly in situ from a natural bedrock knoll surrounded by an excavated U-shaped quarry trench, providing the megalithic core blocks for the adjacent Sphinx Temple.',
      'Constructed as an integral part of Khafre’s monumental complex, connecting via a 494m covered causeway to the Valley Temple and upper Mortuary Sanctuary.',
      'Center of the intense geo-archaeological weathering debate: Dr. Robert Schoch’s precipitation runoff hypothesis vs. established consensus of salt haloclasty and episodic desert flash floods.',
    ],
  },
  {
    id: 'khufu',
    title: 'The Great Pyramid of Khufu',
    ancientName: 'Akhet Khufu',
    translation: 'The Horizon of Khufu',
    pharaoh: 'Khufu (Cheops) • c. 2570 BCE',
    x: 59,
    y: 35,
    keyFact: '146.6m original height built from 2.3 million dressed blocks, leveled within 1.5 cm across 13 acres with four cardinal faces oriented to within 3 minutes of True North.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 01: The Three Giants',
  },
  {
    id: 'khafre',
    title: 'Pyramid of Khafre',
    ancientName: 'Wr-Khafre',
    translation: 'Great is Khafre',
    pharaoh: 'Khafre (Chephren) • c. 2540 BCE',
    x: 38,
    y: 40,
    keyFact: 'Built on a 10m bedrock rise with a steeper 53° slope, retaining its gleaming polished Tura casing stones at the apex and aligned with the Sphinx causeway.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 01: Scale & Geometry',
  },
  {
    id: 'menkaure',
    title: 'Pyramid of Menkaure (The Third Pyramid)',
    ancientName: 'Netjer-er-Menkaure',
    translation: 'Divine is Menkaure',
    pharaoh: 'Menkaure (Mykerinos) • c. 2510 BCE (4th Dynasty)',
    x: 17,
    y: 52,
    keyFact: 'Standing 65m tall, Menkaure completes the Giza triad on the southwest ridge, uniquely sheathed in 16 courses of red Aswan granite.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 02: Dynastic Succession',
    isSpecialHighlight: true,
    extraStats: [
      { label: 'Original Height', value: '65.5m (215 ft)' },
      { label: 'Base Dimensions', value: '102.2 × 104.6 m' },
      { label: 'Slope Angle', value: '51° 20′ 25″' },
      { label: 'Granite Casing', value: '16 courses Aswan granite' },
    ],
    extendedDetails: [
      'Offset southwest from the Khufu-Khafre diagonal line, completing the triad layout.',
      'Constructed with exceptional speed; some granite blocks left unfinished upon the pharaoh\'s death.',
      'Basalt sarcophagus discovered in 1837; lost at sea off Spain aboard the Beatrice in 1838.',
    ],
  },
  {
    id: 'harbor',
    title: 'The Khufu Harbor Basin',
    ancientName: 'Mert-Khufu',
    translation: 'Harbor of the Horizon',
    pharaoh: 'Extinct Ahramat Branch of the Nile',
    x: 32,
    y: 82,
    keyFact: 'Where Inspector Merer moored his 30-ton limestone transport barges, confirmed by 2024 radar satellite discoveries of the lost Ahramat river branch.',
    targetSectionId: 'landscape',
    chapterLabel: 'Chapter 04: The Lost Riverway',
  },
];

const ANCIENT_HOTSPOTS: Hotspot[] = [
  {
    id: 'electrum_capstone',
    title: 'Electrum Pyramidion (Benbenet)',
    ancientName: 'Benbenet',
    translation: 'The Primal Mound of Creation',
    pharaoh: 'Khufu • 4th Dynasty',
    x: 62,
    y: 28,
    keyFact: 'Solid electrum (gold-silver alloy) capstone that caught the first rays of dawn, acting as a beacon visible for 30 km down the Nile valley.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 01: Khufu Apex Anatomy',
  },
  {
    id: 'tura_casing',
    title: 'Polished Tura Limestone Envelope',
    ancientName: 'Inbu-Hedj',
    translation: 'The White Wall Facade',
    pharaoh: 'Royal Quarrymen at Tura',
    x: 52,
    y: 52,
    keyFact: 'Over 115,000 precision-cut white casing blocks fitted with joint clearances under 0.2mm, polished to a mirror finish that reflected solar heat.',
    targetSectionId: 'building',
    chapterLabel: 'Chapter 03: Precision Masonry',
  },
  {
    id: 'nile_ahramat',
    title: 'Ahramat Branch & Royal Port',
    ancientName: 'Iteru Ahramat',
    translation: 'The River of the Pyramids',
    pharaoh: 'Old Kingdom Navigation Fleet',
    x: 78,
    y: 72,
    keyFact: 'A 64-kilometer navigable waterway passing directly alongside the pyramid plateau, carrying tens of thousands of tons of high-grade stone.',
    targetSectionId: 'landscape',
    chapterLabel: 'Chapter 04: The Lost Riverway',
  },
  {
    id: 'causeway_khafre',
    title: 'Khafre Causeway & Harbor Temple',
    ancientName: 'Wat-Netjer',
    translation: 'The Sacred Way',
    pharaoh: 'Khafre • c. 2540 BCE',
    x: 35,
    y: 65,
    keyFact: 'A 494m covered limestone processional causeway connecting the monumental Valley Temple to the Upper Mortuary Sanctuary.',
    targetSectionId: 'sphinx',
    chapterLabel: 'Chapter 05: Valley Complex',
  },
];

const CELESTIAL_HOTSPOTS: Hotspot[] = [
  {
    id: 'north_meridian',
    title: 'True Astronomical North Meridian',
    ancientName: 'Ikhemu-sek',
    translation: 'The Indestructible Circumpolar Stars',
    pharaoh: 'Aligned using Kochab & Mizar',
    x: 64,
    y: 35,
    keyFact: 'Aligned with True North to within 3 minutes and 38 seconds of arc (1/15th of a degree), an accuracy exceeding modern architectural tolerances.',
    targetSectionId: 'astronomy',
    chapterLabel: 'Chapter 06: Archaeoastronomy',
  },
  {
    id: 'orion_correlation',
    title: 'Orion Belt Meridian Transit',
    ancientName: 'Sah',
    translation: 'The Celestial Embodiment of Osiris',
    pharaoh: 'Bauwals Archaeoastronomy Theory',
    x: 38,
    y: 22,
    keyFact: 'The three pyramids align along a diagonal vector mirroring the relative angles and minor offset of Mintaka in Orion’s Belt.',
    targetSectionId: 'astronomy',
    chapterLabel: 'Chapter 07: Orion Correlation',
  },
  {
    id: 'seked_slope',
    title: 'The Golden Seked (51° 50′ 40″)',
    ancientName: 'Seked 5½ Palms',
    translation: 'The Sacred Rise-to-Run Ratio',
    pharaoh: 'Rhind Mathematical Papyrus',
    x: 55,
    y: 56,
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

        {/* ================= ORIGINAL EPOCH HORIZON CONTROLLER ================= */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#D8C7A3]/80 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-[#8A4F3D]" />
            <span>Plateau Horizon Reconstruction:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#1C1613]/95 border-2 border-[#B49A72]/50 shadow-2xl backdrop-blur-md">
            <button
              type="button"
              onClick={() => {
                setEpoch('golden');
                setActiveHotspotId('sphinx');
              }}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer border ${
                epoch === 'golden'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#F4EFE5]/40 font-bold shadow-lg scale-102 ring-1 ring-[#8A4F3D]'
                  : 'bg-[#15110E]/80 text-[#D8C7A3] border-[#B49A72]/30 hover:border-[#D8C7A3] hover:text-[#F4EFE5] hover:bg-[#281F1A]'
              }`}
            >
              Present Survey · Golden Hour
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
              2560 BCE · Khufu's Horizon
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
              Sah Midnight · Orion Transit
            </button>
          </div>

          {/* Quick Landmark Sighting Focus (Especially featuring the Great Sphinx) */}
          {epoch === 'golden' && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5 p-1.5 bg-[#171310]/80 border border-[#B49A72]/30">
              <span className="text-[11px] font-mono tracking-wider text-[#B49A72] uppercase px-1 font-semibold">
                SELECT LANDMARK:
              </span>
              {GOLDEN_HOTSPOTS.map((spot) => {
                const isActive = activeHotspotId === spot.id;
                const isSphinx = spot.id === 'sphinx';
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveHotspotId(spot.id)}
                    className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer border-2 ${
                      isActive
                        ? isSphinx
                          ? 'bg-[#B49A72] text-[#15110E] border-[#F4EFE5] font-bold shadow-lg ring-2 ring-amber-300 scale-105'
                          : 'bg-[#8A4F3D] text-[#F4EFE5] border-[#E2D2B4] font-bold shadow-md scale-105'
                        : isSphinx
                        ? 'bg-[#281C15] text-amber-300 border-amber-500/80 hover:border-amber-400 hover:bg-[#38261C] font-semibold'
                        : 'bg-[#1C1613] text-[#D8C7A3] border-[#B49A72]/40 hover:border-[#D8C7A3] hover:text-[#F4EFE5] hover:bg-[#281F1A]'
                    }`}
                  >
                    <span>{isSphinx ? 'The Great Sphinx' : spot.title.replace('The Great Pyramid of Khufu', 'Khufu').replace('Pyramid of ', '')}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ================= INTERACTIVE LIVING PANORAMA (SYNCHRONIZED STAGE) ================= */}
        <div className="relative max-w-5xl mx-auto mb-8 shadow-2xl">
          {/* Panoramic Stage Container */}
          <div className="relative aspect-[21/10] sm:aspect-[2.3/1] overflow-hidden bg-[#171513] border border-[#B49A72]/40 group">
            {/* Photographic Layer Synchronized to Selected Epoch */}
            <img
              src={
                epoch === 'ancient'
                  ? IMAGES.ancientReconstruction
                  : epoch === 'celestial'
                  ? IMAGES.nightCelestial
                  : IMAGES.monumentGoldenHour
              }
              alt="Panoramic survey of the Giza Plateau and Great Sphinx"
              className="w-full h-full object-cover object-center transition-all duration-700 brightness-[1.02] contrast-[1.06] saturate-[1.08]"
              referrerPolicy="no-referrer"
            />

            {/* Direct Quick Spotlight Badge for the Great Sphinx */}
            <button
              type="button"
              onClick={() => {
                setEpoch('golden');
                setActiveHotspotId('sphinx');
              }}
              className={`absolute top-3 right-3 z-20 flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider cursor-pointer backdrop-blur-md transition-all shadow-xl border ${
                activeHotspotId === 'sphinx' && epoch === 'golden'
                  ? 'bg-[#B49A72] text-[#15110E] border-[#F4EFE5] font-bold ring-2 ring-amber-400'
                  : 'bg-[#171513]/90 hover:bg-[#2A1D16] text-[#E2D2B4] border-[#B49A72]/50 hover:border-amber-400'
              }`}
            >
              <span className="w-2 h-2 bg-amber-400 inline-block" />
              <span className="font-bold text-amber-300">Spotlight:</span>
              <span>The Great Sphinx</span>
            </button>

            {/* Celestial Meridian Overlay (When in Celestial View) */}
            {epoch === 'celestial' && (
              <div className="absolute inset-0 pointer-events-none">
                {/* Simulated Starfield vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#0e0b09]/80" />
                
                {/* SVG Astronomical Alignment Vectors */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 450" preserveAspectRatio="none">
                  {/* True Astronomical North Meridian Line through Khufu */}
                  <line 
                    x1="640" y1="20" x2="640" y2="430" 
                    stroke="#B49A72" strokeWidth="1" strokeDasharray="4,4" opacity="0.85" 
                  />
                  
                  {/* Circumpolar Target Ring over Khufu Apex */}
                  <circle cx="640" cy="180" r="18" fill="none" stroke="#D8C7A3" strokeWidth="1" opacity="0.6" />
                  <circle cx="640" cy="180" r="4" fill="#F4EFE5" />
                  
                  {/* 51° 50' 40" Angle Indicator on Khufu's West Flank */}
                  <line x1="640" y1="180" x2="520" y2="340" stroke="#8A4F3D" strokeWidth="1.5" opacity="0.9" />
                  
                  {/* Orion Belt Correlation Vector across the three monuments */}
                  <line 
                    x1="180" y1="225" x2="640" y2="180" 
                    stroke="#D8C7A3" strokeWidth="0.75" strokeDasharray="2,3" opacity="0.5" 
                  />
                  
                  {/* Polar Star Alignment Labels */}
                  <text x="648" y="55" fill="#D8C7A3" fontSize="11" fontFamily="monospace" opacity="0.9">
                    TRUE NORTH AXIS (DEV. 3' 38")
                  </text>
                  <text x="648" y="75" fill="#B49A72" fontSize="9" fontFamily="monospace" opacity="0.75">
                    KOCHAB ↔ MIZAR MERIDIAN TRANSIT
                  </text>
                  <text x="515" y="325" fill="#D8C7A3" fontSize="10" fontFamily="monospace">
                    SLOPE: 51° 50' 40"
                  </text>
                </svg>

                <div className="absolute top-3 left-4 bg-[#171513]/85 px-2.5 py-1 border border-[#B49A72]/40 text-[11px] font-mono text-[#D8C7A3]">
                  <span className="text-[#8A4F3D] font-bold">ASTRONOMICAL MERIDIAN:</span> SPENCE SIMULTANEOUS TRANSIT
                </div>
              </div>
            )}

            {/* Gradient Mask for Vignette & Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/90 via-transparent to-transparent pointer-events-none" />

            {/* Interactive Story Hotspots on Stage */}
            {currentHotspots.map((hotspot) => {
              const isSelected = activeHotspotId === hotspot.id;
              const isSphinx = hotspot.id === 'sphinx';
              return (
                <button
                  key={hotspot.id}
                  type="button"
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer z-20 focus:outline-none"
                  aria-label={`Inspect ${hotspot.title}`}
                >
                  {/* Outer Pulsing Ring */}
                  <span 
                    className={`absolute inset-0 rounded-full border transition-transform duration-300 ${
                      isSelected 
                        ? isSphinx 
                          ? 'border-amber-300 scale-150 animate-ping opacity-90 -m-2' 
                          : 'border-[#F4EFE5] scale-150 animate-ping opacity-75 -m-1.5' 
                        : isSphinx
                        ? 'border-amber-400/80 scale-125 animate-pulse opacity-85 -m-2'
                        : 'border-[#8A4F3D] group-hover/pin:scale-125 opacity-60 -m-1.5'
                    }`} 
                  />
                  
                  {/* Hotspot Core Pin */}
                  <span 
                    className={`relative flex items-center justify-center rounded-full font-mono text-[10px] font-bold transition-all shadow-lg ${
                      isSphinx ? 'w-7 h-7' : 'w-6 h-6'
                    } ${
                      isSelected 
                        ? isSphinx
                          ? 'bg-[#B49A72] text-[#15110E] ring-2 ring-amber-300'
                          : 'bg-[#8A4F3D] text-[#F4EFE5] ring-2 ring-[#F4EFE5]' 
                        : isSphinx
                        ? 'bg-[#2A1D16] text-amber-300 border-2 border-amber-400 group-hover/pin:bg-amber-500 group-hover/pin:text-black'
                        : 'bg-[#1C1613]/90 text-[#D8C7A3] border border-[#B49A72]/60 group-hover/pin:bg-[#8A4F3D] group-hover/pin:text-[#F4EFE5]'
                    }`}
                  >
                    {isSphinx ? '★' : '+'}
                  </span>

                  {/* Hover/Active Tooltip Tag */}
                  <span 
                    className={`absolute left-1/2 -translate-x-1/2 bottom-8 whitespace-nowrap px-2 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[9px] sm:text-[10px] tracking-wider uppercase pointer-events-none transition-all duration-200 shadow-xl border ${
                      isSelected 
                        ? isSphinx
                          ? 'bg-[#251A13] text-amber-200 border-amber-400 opacity-100 ring-1 ring-amber-400/50 scale-105'
                          : 'bg-[#1C1613] text-[#F4EFE5] border-[#B49A72] opacity-100 scale-105' 
                        : isSphinx
                        ? 'bg-[#1C1613]/95 text-amber-300 border-amber-500/60 opacity-100'
                        : hotspot.id === 'menkaure'
                        ? 'bg-[#1C1613]/90 text-amber-200 border-[#8A4F3D]/80 opacity-95 group-hover/pin:opacity-100'
                        : 'bg-[#1C1613]/85 text-[#D8C7A3] border border-[#B49A72]/40 opacity-80 sm:opacity-95 group-hover/pin:opacity-100'
                    }`}
                  >
                    {isSphinx ? 'The Great Sphinx' : hotspot.id === 'menkaure' ? 'Menkaure (3rd Pyramid)' : hotspot.title.replace('The Great Pyramid of Khufu', 'Khufu').replace('Pyramid of ', '')}
                  </span>
                </button>
              );
            })}

            {/* Bottom Status Bar on Photo */}
            <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#D8C7A3]/90 pointer-events-none">
              <span className="flex items-center gap-1.5 drop-shadow">
                <span className="text-[#8A4F3D] font-bold">●</span>
                Select any landmark pin to inspect archaeological datum
              </span>
              <span className="hidden sm:inline-block text-[#B49A72]/90">
                {currentHotspots.length} Sighting Points Available
              </span>
            </div>
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
                    {activeHotspot.isSpecialHighlight && (
                      <span className="text-[10px] font-mono text-amber-300 border border-amber-500/60 px-2 py-0.5 bg-amber-950/40 uppercase font-bold">
                        Featured Monument
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F4EFE5] mb-2">
                    {activeHotspot.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D8C7A3] leading-relaxed max-w-3xl mb-4 font-serif-text">
                    {activeHotspot.keyFact}
                  </p>

                  {/* Extra Archaeological Metrics Grid if present */}
                  {activeHotspot.extraStats && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 p-3 bg-[#17120F] border border-[#B49A72]/30">
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

                  {/* Extended Bullet Insights if present */}
                  {activeHotspot.extendedDetails && (
                    <div className="space-y-1.5 border-t border-[#B49A72]/20 pt-3">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#B49A72] mb-1">
                        Archaeological & Geological Notes:
                      </div>
                      <ul className="space-y-1 text-xs text-[#D8C7A3]/90 font-serif-text">
                        {activeHotspot.extendedDetails.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#8A4F3D] font-mono font-bold mt-0.5">—</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Direct Chapter Link CTA */}
                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-2">
                  <button
                    type="button"
                    onClick={() => scrollToSection(activeHotspot.targetSectionId)}
                    className="px-6 py-3.5 bg-[#8A4F3D] hover:bg-[#a15e4a] text-[#F4EFE5] text-xs font-mono uppercase tracking-wider flex items-center gap-2.5 transition-all cursor-pointer group shadow-xl border border-[#F4EFE5]/30 hover:scale-102 active:scale-98"
                  >
                    <span className="font-bold">{activeHotspot.chapterLabel}</span>
                    <span className="text-[#E2D2B4] group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <span className="text-[10px] font-mono text-[#E2D2B4]/80 tracking-wider font-semibold">
                    EXPLORE FIELD REPORT ↓
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Primary Action Buttons */}
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
            <span className="font-semibold">Evidence Classification Standard</span>
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

