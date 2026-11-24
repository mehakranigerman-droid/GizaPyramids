import React, { useState } from 'react';
import { IMAGES } from '../assets/images';
import { PageId } from '../types';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenLegend?: () => void;
}

export type EpochMode = 'golden' | 'ancient' | 'celestial';

interface Hotspot {
  id: string;
  title: string;
  shortName: string;
  subLabel: string;
  ancientName: string;
  pharaoh: string;
  x: number;
  y: number;
  keyFact: string;
  targetPage: PageId;
  targetLabel: string;
  relativeScalePct?: number;
  metrics?: { label: string; value: string }[];
}

const GOLDEN_HOTSPOTS: Hotspot[] = [
  {
    id: 'menkaure',
    title: 'Pyramid of Menkaure',
    shortName: 'Menkaure',
    subLabel: '65.5 m original height',
    ancientName: 'Netjer-er-Menkaure',
    pharaoh: 'c. 2510 BCE',
    x: 14.5,
    y: 35.4,
    keyFact: 'Lower 16 courses clad in red Aswan granite hauled 800 km north.',
    targetPage: 'menkaure',
    targetLabel: 'Open Menkaure',
    relativeScalePct: 45,
    metrics: [
      { label: 'Original Height', value: '65.5 m' },
      { label: 'Base', value: '104.6 m' },
      { label: 'Slope', value: '51° 20′' },
      { label: 'Casing', value: '16 courses granite' },
    ],
  },
  {
    id: 'khafre',
    title: 'Pyramid of Khafre',
    shortName: 'Khafre',
    subLabel: '143.5 m original height',
    ancientName: 'Wer Khafre',
    pharaoh: 'c. 2540 BCE',
    x: 40.0,
    y: 22.9,
    keyFact: 'Built on a +10 m bedrock terrace with intact Tura limestone apex.',
    targetPage: 'khafre',
    targetLabel: 'Open Khafre',
    relativeScalePct: 98,
    metrics: [
      { label: 'Original Height', value: '143.5 m' },
      { label: 'Base', value: '215.25 m' },
      { label: 'Slope', value: '53° 10′' },
      { label: 'Apex', value: 'Intact Tura cap' },
    ],
  },
  {
    id: 'khufu',
    title: 'Great Pyramid of Khufu',
    shortName: 'Khufu (Great Pyramid)',
    subLabel: '146.6 m original height',
    ancientName: 'Akhet Khufu',
    pharaoh: 'c. 2570 BCE',
    x: 76.6,
    y: 22.4,
    keyFact: '2.3M stone blocks aligned within 3′ 38″ of true astronomical north.',
    targetPage: 'khufu',
    targetLabel: 'Open Khufu',
    relativeScalePct: 100,
    metrics: [
      { label: 'Original Height', value: '146.6 m' },
      { label: 'Base', value: '230.34 m' },
      { label: 'True North', value: '3′ 38″ dev.' },
      { label: 'Blocks', value: '2,300,000' },
    ],
  },
  {
    id: 'sphinx',
    title: 'The Great Sphinx of Giza',
    shortName: 'The Great Sphinx',
    subLabel: '73.5 m length',
    ancientName: 'Hor-em-akhet',
    pharaoh: 'c. 2540 BCE',
    x: 63.0,
    y: 64.0,
    keyFact: 'Monolithic statue carved from living Mokattam limestone facing due east.',
    targetPage: 'sphinx',
    targetLabel: 'Open Sphinx',
    relativeScalePct: 50,
    metrics: [
      { label: 'Length', value: '73.5 m' },
      { label: 'Height', value: '20.2 m' },
      { label: 'Facing', value: '089.5° East' },
      { label: 'Strata', value: 'Members I–III' },
    ],
  },
];

const ANCIENT_HOTSPOTS: Hotspot[] = [
  {
    id: 'electrum_capstone',
    title: 'Electrum Pyramidion',
    shortName: 'Electrum Capstone',
    subLabel: 'Khufu Apex',
    ancientName: 'Benbenet',
    pharaoh: 'c. 2560 BCE',
    x: 76.5,
    y: 22.0,
    keyFact: 'Gilded capstone crowning Khufu’s polished white Tura limestone facade.',
    targetPage: 'khufu',
    targetLabel: 'Open Khufu',
  },
  {
    id: 'tura_casing',
    title: 'Polished Tura Casing',
    shortName: 'Tura Casing',
    subLabel: 'Khafre Facade',
    ancientName: 'Inbu-Hedj',
    pharaoh: '13 km East Bank',
    x: 40.0,
    y: 28.0,
    keyFact: 'White calcite casing stones dressed to sub-millimeter mortar joints.',
    targetPage: 'construction',
    targetLabel: 'Open Building Giza',
  },
  {
    id: 'menkaure_granite',
    title: 'Menkaure Red Granite',
    shortName: 'Aswan Granite',
    subLabel: '16 Courses',
    ancientName: 'Netjer-er-Menkaure',
    pharaoh: '800 km South',
    x: 14.0,
    y: 38.0,
    keyFact: 'Lower 16 courses clad in red granite shipped from the First Cataract.',
    targetPage: 'menkaure',
    targetLabel: 'Open Menkaure',
  },
  {
    id: 'causeway_khafre',
    title: 'Khafre Causeway',
    shortName: 'Khafre Causeway',
    subLabel: '494 m Axis',
    ancientName: 'Wat-Netjer',
    pharaoh: 'c. 2540 BCE',
    x: 52.0,
    y: 60.0,
    keyFact: 'Covered limestone avenue connecting the Valley Temple harbour to Khafre.',
    targetPage: 'sphinx',
    targetLabel: 'Open Sphinx',
  },
  {
    id: 'nile_ahramat',
    title: 'Ahramat Nile Harbour',
    shortName: 'Ahramat Harbour',
    subLabel: '64 km Channel',
    ancientName: 'Iteru Ahramat',
    pharaoh: '2024 Radar Map',
    x: 65.0,
    y: 82.0,
    keyFact: 'Extinct navigable Nile branch carrying stone barges straight to Giza.',
    targetPage: 'construction',
    targetLabel: 'Open Building Giza',
  },
];

const CELESTIAL_HOTSPOTS: Hotspot[] = [
  {
    id: 'north_meridian',
    title: 'True North Meridian',
    shortName: 'True North Axis',
    subLabel: '3′ 38″ Dev.',
    ancientName: 'Ikhemu-sek',
    pharaoh: 'Circumpolar Axis',
    x: 76.5,
    y: 22.4,
    keyFact: 'Khufu’s baseline deviates under 1/15th of a degree from true north.',
    targetPage: 'astronomy',
    targetLabel: 'Open Astronomy',
  },
  {
    id: 'orion_correlation',
    title: 'Orion Alignment Debate',
    shortName: 'Orion Alignment Debate',
    subLabel: 'Plateau Diagonal',
    ancientName: 'Sah',
    pharaoh: 'Debated Hypothesis',
    x: 40.0,
    y: 19.0,
    keyFact: 'Tests whether the plateau layout mirrors Orion or local bedrock ridges.',
    targetPage: 'astronomy',
    targetLabel: 'Open Astronomy',
  },
  {
    id: 'seked_slope',
    title: '28:22 Seked Slope',
    shortName: 'Seked 5½ Palms',
    subLabel: '51° 50′ 40″',
    ancientName: 'Seked 28:22',
    pharaoh: 'Rhind Papyrus',
    x: 71.0,
    y: 35.0,
    keyFact: 'Modular rise-to-run ratio naturally generating the 22/7 perimeter geometry.',
    targetPage: 'theories',
    targetLabel: 'Open Theories',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [epoch, setEpoch] = useState<EpochMode>('golden');
  const [activeHotspotId, setActiveHotspotId] = useState<string>('khufu');

  const currentHotspots =
    epoch === 'ancient'
      ? ANCIENT_HOTSPOTS
      : epoch === 'celestial'
      ? CELESTIAL_HOTSPOTS
      : GOLDEN_HOTSPOTS;

  const activeHotspot =
    currentHotspots.find((h) => h.id === activeHotspotId) || currentHotspots[0];

  const handlePinSelect = (hotspot: Hotspot) => {
    setActiveHotspotId(hotspot.id);
  };

  const scrollToExplorer = () => {
    const el = document.getElementById('panorama-explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="bg-transparent text-[#F4EFE5]">
      {/* ================= FULL-SCREEN CARVED LIMESTONE HERO (FIRST SCREEN ONLY) ================= */}
      <div className="relative overflow-hidden bg-[#1C1510] min-h-[calc(100svh-44px)] lg:min-h-screen flex flex-col justify-between">
        <img
          src={IMAGES.amberLimestoneHero}
          alt="Carved limestone relief of the three Giza pyramids illuminated in warm amber light"
          className="absolute inset-0 w-full h-full object-cover object-[center_72%] sm:object-[center_62%] lg:object-center pointer-events-none select-none"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#1C1510]/65 via-[#1C1510]/20 to-transparent pointer-events-none"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1C1510] via-[#1C1510]/40 to-transparent pointer-events-none"
        />

        {/* Monumental Ivory Title & Minimal Tagline in Upper Dark Stone */}
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 lg:pt-24 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#E8C56E]/90 mb-3.5 [text-shadow:0_1px_8px_rgba(12,8,5,0.9)]">
            Fourth Dynasty · c. 2570–2510 BCE
          </p>
          <h1 className="font-serif text-[2.85rem] sm:text-[4.5rem] md:text-[5.25rem] lg:text-[5.75rem] font-bold tracking-[0.06em] text-[#F4EFE5] uppercase leading-[0.98] [text-shadow:0_4px_24px_rgba(12,8,5,0.92)]">
            Giza Pyramids
          </h1>
          <p className="font-serif-text italic text-lg sm:text-2xl text-[#E2D2B4]/95 font-light tracking-wide mt-4 [text-shadow:0_2px_10px_rgba(12,8,5,0.9)]">
            Three pyramids and the Great Sphinx along the desert horizon
          </p>
        </div>

        {/* Compact Explore the Giza Plateau Button Centered Near Bottom of Hero */}
        <div className="relative z-10 pb-9 sm:pb-12 flex justify-center px-4">
          <button
            type="button"
            onClick={scrollToExplorer}
            className="px-6 py-2.5 bg-[#1C1510]/70 hover:bg-[#1C1510]/90 border border-[#F4EFE5]/45 hover:border-[#E8C56E]/80 text-[#F4EFE5] hover:text-[#F3D37A] font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer backdrop-blur-xs"
          >
            Explore the Giza Plateau ↓
          </button>
        </div>
      </div>

      {/* ================= SCENE TABS & INTERACTIVE PANORAMA (BELOW THE FOLD) ================= */}
      <div id="panorama-explorer" className="max-w-5xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-14">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 border-b border-[#B49A72]/20 mb-3">
          <button
            type="button"
            onClick={() => {
              setEpoch('golden');
              setActiveHotspotId('khufu');
            }}
            className={`pb-2.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap shrink-0 cursor-pointer transition-colors border-b-2 -mb-px ${
              epoch === 'golden'
                ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                : 'border-transparent text-[#E2D2B4]/80 hover:text-[#F4EFE5]'
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
            className={`pb-2.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap shrink-0 cursor-pointer transition-colors border-b-2 -mb-px ${
              epoch === 'ancient'
                ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                : 'border-transparent text-[#E2D2B4]/80 hover:text-[#F4EFE5]'
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
            className={`pb-2.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap shrink-0 cursor-pointer transition-colors border-b-2 -mb-px ${
              epoch === 'celestial'
                ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                : 'border-transparent text-[#E2D2B4]/80 hover:text-[#F4EFE5]'
            }`}
          >
            Orion Transit
          </button>
        </div>

        <p className="text-center font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#E2D2B4]/90 mb-3">
          Select a monument to explore
        </p>

        {/* Interactive Panorama Stage */}
        <div className="relative aspect-[16/10] sm:aspect-[2.35/1] overflow-hidden bg-[#140F0B] mb-5 sm:mb-6">
          <img
            src={
              epoch === 'ancient'
                ? IMAGES.ancientReconstruction
                : epoch === 'celestial'
                ? IMAGES.nightCelestial
                : IMAGES.monumentGoldenHour
            }
            alt="Panoramic view of Giza: Menkaure (left), Khafre (center), Great Pyramid of Khufu (right), and the Great Sphinx"
            className="w-full h-full object-cover object-center transition-opacity duration-500"
            referrerPolicy="no-referrer"
          />

          {epoch === 'celestial' && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 450"
              preserveAspectRatio="none"
            >
              <line
                x1="765"
                y1="20"
                x2="765"
                y2="430"
                stroke="#B49A72"
                strokeWidth="1.2"
                strokeDasharray="4,4"
                opacity="0.9"
              />
              <circle cx="765" cy="100" r="16" fill="none" stroke="#D8C7A3" strokeWidth="1.2" opacity="0.8" />
              <line x1="765" y1="100" x2="685" y2="210" stroke="#C97B63" strokeWidth="1.5" opacity="0.9" />
              <line x1="140" y1="160" x2="400" y2="103" stroke="#D8C7A3" strokeWidth="1" strokeDasharray="3,3" opacity="0.7" />
              <line x1="400" y1="103" x2="765" y2="100" stroke="#D8C7A3" strokeWidth="1" strokeDasharray="3,3" opacity="0.7" />
            </svg>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1510]/80 via-transparent to-[#1C1510]/15 pointer-events-none" />

          {currentHotspots.map((hotspot) => {
            const isSelected = activeHotspotId === hotspot.id;
            const isMenkaure = hotspot.id === 'menkaure' || hotspot.id === 'menkaure_granite';
            const isKhufu =
              hotspot.id === 'khufu' ||
              hotspot.id === 'electrum_capstone' ||
              hotspot.id === 'north_meridian';

            const labelAlign = isMenkaure
              ? 'items-start -translate-x-2 sm:items-center sm:-translate-x-1/2'
              : isKhufu
              ? 'items-end -translate-x-[calc(100%-8px)] sm:items-center sm:-translate-x-1/2'
              : 'items-center -translate-x-1/2';

            return (
              <div
                key={hotspot.id}
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  type="button"
                  onClick={() => handlePinSelect(hotspot)}
                  onMouseEnter={() => setActiveHotspotId(hotspot.id)}
                  className="group relative flex flex-col items-center p-2 -m-2 cursor-pointer focus:outline-none touch-manipulation"
                  aria-label={`Select ${hotspot.title}`}
                  aria-pressed={isSelected}
                >
                  <span
                    className={`absolute bottom-9 sm:bottom-10 left-1/2 ${labelAlign} flex flex-col transition-transform duration-200 group-hover:-translate-y-0.5 [text-shadow:0_1px_4px_rgba(15,11,8,0.8)]`}
                  >
                    <span
                      className={`font-serif text-[10px] sm:text-sm font-bold whitespace-nowrap tracking-wide transition-colors ${
                        isSelected
                          ? 'text-[#F3D37A] underline underline-offset-4 decoration-[#E8C56E]'
                          : 'text-[#F4EFE5] group-hover:text-[#F3D37A]'
                      }`}
                    >
                      {hotspot.shortName}
                    </span>
                    <span
                      className={`font-mono text-[8px] sm:text-[10px] whitespace-nowrap transition-colors ${
                        isSelected ? 'text-[#E8C56E]' : 'text-[#E2D2B4]/90'
                      }`}
                    >
                      {hotspot.subLabel}
                    </span>
                  </span>

                  <span
                    className={`w-px h-3.5 sm:h-4 mb-0.5 block transition-colors ${
                      isSelected ? 'bg-[#E8C56E]' : 'bg-[#E2D2B4]/80 group-hover:bg-[#E8C56E]'
                    }`}
                  />

                  <span
                    className={`w-2.5 h-2.5 rounded-full block transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#E8C56E] ring-2 ring-[#E8C56E]/40 scale-125'
                        : 'bg-[#F4EFE5] ring-1 ring-[#1C1510]/85 group-hover:bg-[#E8C56E] group-hover:scale-115'
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Mobile Tappable Monument Strip */}
        <div className="md:hidden flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pb-4 border-b border-[#B49A72]/15">
          {currentHotspots.map((hotspot) => {
            const isSelected = activeHotspotId === hotspot.id;
            return (
              <button
                key={hotspot.id}
                type="button"
                onClick={() => handlePinSelect(hotspot)}
                className={`py-1.5 text-xs font-serif whitespace-nowrap cursor-pointer border-b-2 transition-colors ${
                  isSelected
                    ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                    : 'border-transparent text-[#E2D2B4]/85 hover:text-[#F4EFE5]'
                }`}
              >
                {hotspot.shortName}
              </button>
            );
          })}
        </div>

        {/* Active Monument Infographic Spotlight */}
        {activeHotspot && (
          <div className="pt-6 border-t border-[#B49A72]/15">
            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-baseline gap-2.5 font-mono text-[11px] mb-1.5">
                  <span className="text-[#E8C56E] font-medium uppercase tracking-[0.16em]">
                    {activeHotspot.ancientName}
                  </span>
                  <span className="text-[#D8C7A3]/65">· {activeHotspot.pharaoh}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4EFE5]">
                  {activeHotspot.title}
                </h2>
                <p className="text-base text-[#E2D2B4]/90 mt-1.5 font-serif-text max-w-2xl leading-relaxed">
                  {activeHotspot.keyFact}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onNavigate(activeHotspot.targetPage)}
                className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#F3D37A] hover:text-[#F4EFE5] underline underline-offset-4 decoration-[#E8C56E]/80 decoration-1 cursor-pointer whitespace-nowrap self-start lg:self-end transition-colors"
              >
                {activeHotspot.targetLabel} →
              </button>
            </div>

            {activeHotspot.metrics && (
              <div className="mt-6 pt-5 border-t border-[#B49A72]/12 space-y-5">
                <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {activeHotspot.metrics.map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-[10px] font-mono uppercase text-[#D8C7A3]/70 tracking-[0.14em]">
                        {stat.label}
                      </dt>
                      <dd className="text-base font-mono font-semibold text-[#F4EFE5] mt-1 tabular-nums">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {activeHotspot.relativeScalePct && (
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.14em] text-[#D8C7A3]/70 mb-1.5">
                      <span>Scale vs. Great Pyramid Peak</span>
                      <span className="tabular-nums text-[#E8C56E]">{activeHotspot.relativeScalePct}%</span>
                    </div>
                    <div className="h-[2px] bg-[#2B211B] overflow-hidden">
                      <div
                        className="h-full bg-[#E8C56E] transition-all duration-300"
                        style={{ width: `${activeHotspot.relativeScalePct}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
