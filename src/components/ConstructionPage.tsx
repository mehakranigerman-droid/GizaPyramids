import React, { useState } from 'react';
import { IMAGES } from '../assets/images';
import { EvidenceBadge } from './EvidenceBadge';

export const ConstructionPage: React.FC = () => {
  const [selectedRampId, setSelectedRampId] = useState<'straight' | 'spiral' | 'internal'>('internal');
  const [activeLogDay, setActiveLogDay] = useState<number>(0);

  const rampModels = {
    internal: {
      name: 'Internal Spiral',
      status: 'SUPPORTED' as const,
      summary: 'External ramp up to ~43 m, followed by an interior 7% spiral tunnel with open corner turning shafts.',
    },
    spiral: {
      name: 'Exterior Spiral',
      status: 'SUPPORTED' as const,
      summary: 'Masonry ramp wrapping around outer faces; reduces material volume but hides corner sightlines.',
    },
    straight: {
      name: 'Linear External',
      status: 'DEBATED' as const,
      summary: 'Single ~1.5 km straight earth ramp requiring more fill volume than the pyramid itself.',
    },
  };

  const mererLogEntries = [
    {
      day: 'Day 1 · Tura',
      stop: 'South Tura Quarry',
      quote: '“Spent the day loading fine white stone in South Tura under Prince Ankhhaf.”',
    },
    {
      day: 'Day 2 · Ahramat',
      stop: 'Ahramat Branch',
      quote: '“Sailed towards Akhet-Khufu laden with stone during the high flood.”',
    },
    {
      day: 'Day 3 · Harbour',
      stop: 'Ro-She Khufu Basin',
      quote: '“Moored at Ro-She Khufu; unloaded the casing blocks at the royal basin.”',
    },
    {
      day: 'Day 4 · Return',
      stop: 'Southward Return',
      quote: '“Cast off in the morning from Ro-She Khufu; sailed south to Tura with the north wind.”',
    },
  ];

  return (
    <section id="construction" className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-6 mb-9">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              06 · Engineering & Logistics
            </span>
            <EvidenceBadge level="ESTABLISHED" as="span" surface="dark" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            Building Giza & Nile
          </h1>
          <p className="font-serif-text italic text-base sm:text-lg text-[#D8C7A3] mt-1.5">
            Citizen labor crews, three regional quarries, ramp mechanics, and the 64 km Ahramat Nile channel
          </p>
        </header>

        {/* ================= I. WORKFORCE INFOGRAPHIC ================= */}
        <div className="mb-12 pb-10 border-b border-[#B49A72]/20">
          <h2 className="text-2xl font-serif font-bold text-[#F4EFE5] mb-6">
            I. Workforce Composition (Heit el-Ghurab)
          </h2>

          <figure className="mb-7">
            <div className="relative aspect-[16/7] sm:aspect-[2.5/1] overflow-hidden bg-[#140F0B]">
              <img
                src={IMAGES.quarryLabor}
                alt="Ancient Egyptian quarry workers cutting limestone and hauling blocks on wooden sledges"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1510]/60 via-transparent to-[#1C1510]/20 pointer-events-none" />
            </div>
          </figure>

          {/* Workforce split bar */}
          <div className="mb-6">
            <div className="flex justify-between font-mono text-xs mb-2">
              <span className="text-[#E8C56E] font-medium">Rotating Citizen Levy (~75%)</span>
              <span className="text-[#F4EFE5] font-medium">Master Stone Guilds (~25%)</span>
            </div>
            <div className="h-[3px] flex bg-[#2B211B] overflow-hidden">
              <div className="bg-[#B49A72]" style={{ width: '75%' }} />
              <div className="bg-[#E8C56E]" style={{ width: '25%' }} />
            </div>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div>
              <dt className="font-mono text-[#E8C56E] uppercase font-bold">10,000–20,000 Crew</dt>
              <dd className="text-[#E2D2B4] mt-1">State-fed rotating shifts, disproving Herodotus’ 100,000 slave claim.</dd>
            </div>
            <div>
              <dt className="font-mono text-[#E8C56E] uppercase font-bold">175k+ Livestock Bones</dt>
              <dd className="text-[#E2D2B4] mt-1">Prime beef, bakeries, and brewers provisioned workers daily.</dd>
            </div>
            <div>
              <dt className="font-mono text-[#E8C56E] uppercase font-bold">Healed Skeletal Care</dt>
              <dd className="text-[#E2D2B4] mt-1">Adjacent artisan tombs reveal set fractures and named work gangs.</dd>
            </div>
          </dl>
        </div>

        {/* ================= II. STONE SOURCING FLOW SVG ================= */}
        <div className="mb-12 pb-10 border-b border-[#B49A72]/20">
          <h2 className="text-2xl font-serif font-bold text-[#F4EFE5] mb-5">
            II. Three-Quarry Logistics
          </h2>

          <div className="bg-[#140F0B] p-5 mb-6">
            <svg viewBox="0 0 820 120" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
              <line x1="70" y1="54" x2="750" y2="54" stroke="#B49A72" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Giza Local */}
              <circle cx="110" cy="54" r="16" fill="#B49A72" />
              <text x="110" y="58" fill="#1C1510" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">94%</text>
              <text x="110" y="90" fill="#F4EFE5" fontSize="11" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">Giza Core</text>
              <text x="110" y="106" fill="#D8C7A3" fontSize="10" fontFamily="monospace" textAnchor="middle">0.3 km South</text>

              {/* Tura */}
              <circle cx="410" cy="54" r="14" fill="#F4EFE5" />
              <text x="410" y="58" fill="#1C1510" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">5%</text>
              <text x="410" y="90" fill="#F4EFE5" fontSize="11" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">Tura Casing</text>
              <text x="410" y="106" fill="#D8C7A3" fontSize="10" fontFamily="monospace" textAnchor="middle">13 km East Bank</text>

              {/* Aswan */}
              <circle cx="710" cy="54" r="13" fill="#C97B63" />
              <text x="710" y="58" fill="#F4EFE5" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">1%</text>
              <text x="710" y="90" fill="#F4EFE5" fontSize="11" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">Aswan Granite</text>
              <text x="710" y="106" fill="#D8C7A3" fontSize="10" fontFamily="monospace" textAnchor="middle">800 km Flood Barge</text>
            </svg>
          </div>
        </div>

        {/* ================= III. RAMP HYPOTHESES + SVG SCHEMATICS ================= */}
        <div className="mb-12 pb-10 border-b border-[#B49A72]/20">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-6">
            <h2 className="text-2xl font-serif font-bold text-[#F4EFE5]">
              III. Ramp Mechanics
            </h2>
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
              {(['internal', 'spiral', 'straight'] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedRampId(key)}
                  className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap ${
                    selectedRampId === key
                      ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                      : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                  }`}
                >
                  {rampModels[key].name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 bg-[#140F0B] p-4">
              <svg viewBox="0 0 280 150" className="w-full h-auto">
                <line x1="20" y1="130" x2="260" y2="130" stroke="#B49A72" strokeWidth="1" />
                <polygon points="75,130 155,25 235,130" fill="#2A1F18" stroke="#B49A72" strokeWidth="1.2" />
                {selectedRampId === 'internal' && (
                  <>
                    <path d="M 30,130 L 105,85" stroke="#E8C56E" strokeWidth="2.5" />
                    <path d="M 105,85 L 185,68 L 130,52 L 168,39" fill="none" stroke="#F3D37A" strokeWidth="2" strokeDasharray="4 2" />
                  </>
                )}
                {selectedRampId === 'spiral' && (
                  <path d="M 65,130 L 220,105 L 105,78 L 185,55 L 150,35" fill="none" stroke="#F3D37A" strokeWidth="2.2" />
                )}
                {selectedRampId === 'straight' && (
                  <polygon points="15,130 155,25 155,130" fill="#C97B63" fillOpacity="0.35" stroke="#C97B63" strokeWidth="1.8" />
                )}
              </svg>
            </div>

            <div className="md:col-span-7 space-y-2.5">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-serif font-bold text-[#F4EFE5]">
                  {rampModels[selectedRampId].name}
                </h3>
                <EvidenceBadge level={rampModels[selectedRampId].status} as="span" surface="dark" />
              </div>
              <p className="text-sm text-[#E2D2B4] leading-relaxed">
                {rampModels[selectedRampId].summary}
              </p>
            </div>
          </div>
        </div>

        {/* ================= IV. AHRAMAT NILE ROUTE & MERER ================= */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-[#F4EFE5] mb-5">
            IV. Ahramat Nile Branch & Merer’s Logbook
          </h2>

          <figure className="mb-6">
            <div className="relative aspect-[16/7] sm:aspect-[2.5/1] overflow-hidden bg-[#140F0B]">
              <img
                src={IMAGES.ancientNileBranch}
                alt="Historical reconstruction of the Ahramat branch of the Nile carrying stone barges directly to Giza harbours"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1510]/60 via-transparent to-[#1C1510]/20 pointer-events-none" />
            </div>
          </figure>

          <p className="text-sm text-[#E2D2B4] max-w-3xl leading-relaxed mb-6">
            Satellite radar (2024) confirmed the <strong className="text-[#F4EFE5]">64 km extinct Ahramat channel</strong> directly east of Giza—matching Inspector Merer’s Year 26 limestone barge logbooks.
          </p>

          {/* 4-Stop Visual Route Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-[#B49A72]/20 pb-4 mb-5">
            {mererLogEntries.map((entry, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveLogDay(idx)}
                className={`text-left pb-2 border-b-2 transition-colors cursor-pointer ${
                  activeLogDay === idx
                    ? 'border-[#E8C56E] text-[#F3D37A]'
                    : 'border-transparent text-[#D8C7A3]/75 hover:text-[#F4EFE5]'
                }`}
              >
                <span className="font-mono text-[11px] font-bold block">{entry.day}</span>
                <span className="text-xs text-[#E2D2B4]/80">{entry.stop}</span>
              </button>
            ))}
          </div>

          <blockquote className="text-[#F4EFE5] font-serif-text italic text-lg leading-relaxed max-w-3xl">
            {mererLogEntries[activeLogDay].quote}
          </blockquote>
        </div>
      </div>
    </section>
  );
};
