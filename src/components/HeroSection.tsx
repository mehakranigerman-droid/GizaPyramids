import React, { useState } from 'react';
import { 
  ArrowDown, 
  ShieldAlert, 
  Eye, 
  Compass, 
  Sparkles, 
  Moon, 
  Sun, 
  ChevronRight,
  MapPin,
  Layers,
  History
} from 'lucide-react';
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
}

const GOLDEN_HOTSPOTS: Hotspot[] = [
  {
    id: 'khufu',
    title: 'The Great Pyramid',
    ancientName: 'Akhet Khufu',
    translation: 'The Horizon of Khufu',
    pharaoh: 'Khufu (Cheops) • c. 2570 BCE',
    x: 64,
    y: 40,
    keyFact: '146.6m original height built from 2.3 million dressed blocks, leveled within 1.5 cm across 13 acres.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 01: The Three Giants',
  },
  {
    id: 'khafre',
    title: 'Pyramid of Khafre',
    ancientName: 'Wr-Khafre',
    translation: 'Great is Khafre',
    pharaoh: 'Khafre (Chephren) • c. 2540 BCE',
    x: 40,
    y: 36,
    keyFact: 'Built on a 10m bedrock rise with a steeper 53° slope, retaining its polished Tura casing stones at the apex.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 01: Scale & Geometry',
  },
  {
    id: 'menkaure',
    title: 'Pyramid of Menkaure',
    ancientName: 'Netjer-er-Menkaure',
    translation: 'Divine is Menkaure',
    pharaoh: 'Menkaure (Mykerinos) • c. 2510 BCE',
    x: 18,
    y: 50,
    keyFact: 'Standing 65m tall with lower courses sheathed in costly pink Aswan granite transported 800 km down the Nile.',
    targetSectionId: 'pyramids',
    chapterLabel: 'Chapter 02: Dynastic Succession',
  },
  {
    id: 'sphinx',
    title: 'The Great Sphinx',
    ancientName: 'Hor-em-akhet',
    translation: 'Horus on the Horizon',
    pharaoh: 'Attributed to Khafre • 4th Dynasty',
    x: 82,
    y: 68,
    keyFact: '73m long colossus sculpted directly from living limestone bedrock within the lower member of the Mokattam Formation.',
    targetSectionId: 'sphinx',
    chapterLabel: 'Chapter 05: The Great Sphinx',
  },
  {
    id: 'harbor',
    title: 'The Khufu Harbor Basin',
    ancientName: 'Mert-Khufu',
    translation: 'Harbor of the Horizon',
    pharaoh: 'Extinct Ahramat Branch of the Nile',
    x: 32,
    y: 78,
    keyFact: 'Where Inspector Merer moored his 30-ton limestone barges, confirmed by 2024 radar satellite discoveries.',
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
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>('khufu');
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
            epoch === 'golden' ? 'opacity-85' : 'opacity-0'
          }`}
        >
          <img
            src={IMAGES.monumentGoldenHour}
            alt=""
            className="w-full h-full object-cover object-[center_35%]"
            referrerPolicy="no-referrer"
          />
          {/* Warm Amber Desert Vignette & Contrast Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#15110E] via-[#15110E]/60 to-[#15110E]/80" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#15110E]/40 to-[#15110E]" />
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
            <Compass className="w-3.5 h-3.5 text-[#8A4F3D]" />
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

        {/* Thematic Axiom Block */}
        <div className="max-w-3xl mx-auto mb-6 text-center px-4">
          <p className="font-serif-text text-sm sm:text-base text-[#D8C7A3]/90 italic leading-relaxed">
            "Giza is not simply a collection of three enormous pyramids. It is a complex landscape where architecture, engineering, logistics, astronomy, landscape, belief and unanswered questions intersect."
          </p>
        </div>

        {/* ================= ORIGINAL EPOCH HORIZON CONTROLLER ================= */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#1C1613]/90 border border-[#B49A72]/40 rounded-none shadow-2xl backdrop-blur-md">
            <button
              type="button"
              onClick={() => {
                setEpoch('golden');
                setActiveHotspotId('khufu');
              }}
              className={`px-3 py-1.5 flex items-center gap-2 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                epoch === 'golden'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] font-bold shadow-md'
                  : 'text-[#D8C7A3]/75 hover:text-[#F4EFE5] hover:bg-[#281F1A]'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-[#E2D2B4]" />
              <span>Golden Hour // Present</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setEpoch('ancient');
                setActiveHotspotId('electrum_capstone');
              }}
              className={`px-3 py-1.5 flex items-center gap-2 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                epoch === 'ancient'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] font-bold shadow-md'
                  : 'text-[#D8C7A3]/75 hover:text-[#F4EFE5] hover:bg-[#281F1A]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E2D2B4]" />
              <span>2560 BCE // Khufu Horizon</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setEpoch('celestial');
                setActiveHotspotId('north_meridian');
              }}
              className={`px-3 py-1.5 flex items-center gap-2 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                epoch === 'celestial'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] font-bold shadow-md'
                  : 'text-[#D8C7A3]/75 hover:text-[#F4EFE5] hover:bg-[#281F1A]'
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-[#E2D2B4]" />
              <span>Sah Midnight // Orion</span>
            </button>
          </div>

          {/* Epoch Archaeology Subtitle Badge */}
          <div className="mt-2 text-[11px] font-mono text-[#D8C7A3]/85 tracking-wide text-center px-4">
            {epoch === 'golden' && (
              <span>SURVEY MODE: 4,500-year weathered limestone megaliths under raking equinox desert sunlight</span>
            )}
            {epoch === 'ancient' && (
              <span>RECONSTRUCTION: Mirror-polished white Tura casing stones with a solid electrum pyramidion</span>
            )}
            {epoch === 'celestial' && (
              <span>ASTRONOMY: Orion belt alignment & Kochab-Mizar polar transit (True North dev. 3′ 38″)</span>
            )}
          </div>
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
              alt="Panoramic survey of the Giza Plateau"
              className="w-full h-full object-cover object-center transition-all duration-700 brightness-95 contrast-105"
              referrerPolicy="no-referrer"
            />

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
                    className={`absolute inset-0 -m-1.5 rounded-full border transition-transform duration-300 ${
                      isSelected 
                        ? 'border-[#F4EFE5] scale-150 animate-ping opacity-75' 
                        : 'border-[#8A4F3D] group-hover/pin:scale-125 opacity-60'
                    }`} 
                  />
                  
                  {/* Hotspot Core Pin */}
                  <span 
                    className={`relative flex items-center justify-center w-6 h-6 rounded-full font-mono text-[10px] font-bold transition-all shadow-lg ${
                      isSelected 
                        ? 'bg-[#8A4F3D] text-[#F4EFE5] ring-2 ring-[#F4EFE5]' 
                        : 'bg-[#1C1613]/90 text-[#D8C7A3] border border-[#B49A72]/60 group-hover/pin:bg-[#8A4F3D] group-hover/pin:text-[#F4EFE5]'
                    }`}
                  >
                    +
                  </span>

                  {/* Hover/Active Tooltip Tag */}
                  <span 
                    className={`absolute left-1/2 -translate-x-1/2 bottom-7 whitespace-nowrap px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase pointer-events-none transition-all duration-200 shadow-md ${
                      isSelected 
                        ? 'bg-[#1C1613] text-[#F4EFE5] border border-[#B49A72] opacity-100' 
                        : 'bg-[#1C1613]/80 text-[#D8C7A3] border border-[#B49A72]/30 opacity-0 group-hover/pin:opacity-100'
                    }`}
                  >
                    {hotspot.title}
                  </span>
                </button>
              );
            })}

            {/* Bottom Status Bar on Photo */}
            <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#D8C7A3]/90 pointer-events-none">
              <span className="flex items-center gap-1.5 drop-shadow">
                <MapPin className="w-3 h-3 text-[#8A4F3D]" />
                Select any landmark pin to inspect archaeological datum
              </span>
              <span className="hidden sm:inline-block text-[#B49A72]/90">
                {currentHotspots.length} Sighting Points Available
              </span>
            </div>
          </div>

          {/* Active Hotspot Story Dossier (Open Minimal Drawer) */}
          {activeHotspot && (
            <div className="mt-2 bg-[#201814] border-t-2 border-[#8A4F3D] p-4 sm:p-5 text-[#F4EFE5] transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Identity & Historical Epithet */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#8A4F3D] uppercase tracking-wider">
                      {activeHotspot.ancientName}
                    </span>
                    <span className="text-xs text-[#D8C7A3]/70 font-serif-text italic">
                      — "{activeHotspot.translation}"
                    </span>
                    <span className="text-[10px] font-mono text-[#B49A72] border border-[#B49A72]/30 px-1.5 py-0.5">
                      {activeHotspot.pharaoh}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F4EFE5] mb-1.5">
                    {activeHotspot.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D8C7A3] leading-relaxed max-w-3xl">
                    {activeHotspot.keyFact}
                  </p>
                </div>

                {/* Direct Chapter Link Button */}
                <div className="shrink-0 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollToSection(activeHotspot.targetSectionId)}
                    className="px-4 py-2 bg-[#8A4F3D] hover:bg-[#a15e4a] text-[#F4EFE5] text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer group shadow"
                  >
                    <span>{activeHotspot.chapterLabel}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
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
            className="w-full sm:w-auto px-8 py-3.5 bg-[#8A4F3D] hover:bg-[#a15e4a] text-[#F4EFE5] font-mono text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer group shadow-lg"
          >
            <span>Begin The Investigation</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            id="hero-evidence-key-btn"
            type="button"
            onClick={onOpenLegend}
            className="w-full sm:w-auto px-6 py-3.5 text-[#D8C7A3] hover:text-[#F4EFE5] border border-[#B49A72]/40 hover:border-[#B49A72] font-mono text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#8A4F3D]" />
            <span>The Evidence System</span>
          </button>
        </div>
      </div>

      {/* Epistemic Spectrum Baseline at Bottom of Hero */}
      <div className="relative max-w-5xl mx-auto w-full px-4 z-10 border-t border-[#B49A72]/20 pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
          <span className="text-[#B49A72] uppercase tracking-wider flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-[#8A4F3D]" /> Scientific Classification Standard:
          </span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[#D8C7A3]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Established
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" /> Supported
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Debated
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" /> Speculative
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-stone-400" /> Unknown
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

