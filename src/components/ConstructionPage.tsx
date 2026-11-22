import React, { useState } from 'react';
import { IMAGES } from '../assets/images';
import { EvidenceBadge } from './EvidenceBadge';

export const ConstructionPage: React.FC = () => {
  const [selectedRampId, setSelectedRampId] = useState<'straight' | 'spiral' | 'internal'>('internal');
  const [activeLogDay, setActiveLogDay] = useState<number>(0);

  const rampModels = {
    straight: {
      name: 'Linear External',
      status: 'DEBATED' as const,
      summary:
        'A straight earthen ramp from quarry to summit. Requires a ~1.5 km ramp holding more volume than the pyramid itself.',
    },
    spiral: {
      name: 'Exterior Spiral',
      status: 'SUPPORTED' as const,
      summary:
        'A stepped masonry ramp wrapping around the outer faces. Obscures corner sightlines needed to track pyramid slope.',
    },
    internal: {
      name: 'Internal Spiral',
      status: 'SUPPORTED' as const,
      summary:
        'External ramp for the lower ~43 m, then an internal 7% spiral tunnel inside the masonry with corner turning notches.',
    },
  };

  const mererLogEntries = [
    {
      day: 'Day 1 · Tura',
      quote: '“Spent the day loading fine white stone in South Tura under Prince Ankhhaf.”',
    },
    {
      day: 'Day 2 · Ahramat',
      quote: '“Sailed towards Akhet-Khufu laden with stone during the high flood.”',
    },
    {
      day: 'Day 3 · Harbour',
      quote: '“Moored at Ro-She Khufu; unloaded the casing blocks at the royal basin.”',
    },
    {
      day: 'Day 4 · Return',
      quote: '“Cast off in the morning from Ro-She Khufu; sailed south to Tura with the north wind.”',
    },
  ];

  return (
    <section id="construction" className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              05 · Engineering & Logistics
            </span>
            <EvidenceBadge level="ESTABLISHED" as="span" surface="dark" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            Building Giza & Nile
          </h1>
          <p className="text-sm sm:text-base text-[#D8C7A3] max-w-2xl mt-2.5 leading-relaxed">
            State citizen crews, regional quarries, multi-stage ramps, and an extinct Nile branch adjacent to the plateau.
          </p>
        </header>

        {/* ================= I. LABOR FORCE ================= */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-[#F4EFE5] border-b border-[#B49A72]/20 pb-3 mb-7">
            I. Workforce (Heit el-Ghurab)
          </h2>

          <figure className="mb-8">
            <div className="aspect-[16/7] sm:aspect-[2.4/1] overflow-hidden bg-[#140F0B]">
              <img
                src={IMAGES.quarryLabor}
                alt="Ancient Egyptian quarry workers cutting limestone and hauling blocks on wooden sledges"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </figure>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-[#B49A72]/20">
            <div>
              <span className="font-mono text-xs text-[#C97B63] uppercase font-bold tracking-wider block mb-1.5">
                Myth · Herodotus
              </span>
              <p className="text-sm text-[#E2D2B4] leading-relaxed">
                5th-century BCE claims of 100,000 enslaved captives carry zero contemporary physical evidence.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-emerald-300 uppercase font-bold tracking-wider block mb-1.5">
                Excavated Reality
              </span>
              <p className="text-sm text-[#E2D2B4] leading-relaxed">
                Barracks for 10,000–20,000 rotating citizens provisioned with state livestock, bakeries, medical care, and adjacent cemetery tombs.
              </p>
            </div>
          </div>
        </div>

        {/* ================= II. STONE SUPPLY CHAINS ================= */}
        <div className="mb-12 pb-10 border-b border-[#B49A72]/20">
          <h2 className="text-2xl font-serif font-bold text-[#F4EFE5] mb-6">
            II. Stone Sourcing
          </h2>
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <dt className="font-mono text-xs text-[#E8C56E] uppercase font-bold">Local Plateau (97%)</dt>
              <dd className="text-lg font-serif font-bold text-[#F4EFE5] mt-1">Nummulitic Limestone</dd>
              <dd className="text-xs text-[#D8C7A3] mt-1">Quarried 200–500 m south; hauled on silt-lubricated sledges.</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-[#E8C56E] uppercase font-bold">13 km East Bank</dt>
              <dd className="text-lg font-serif font-bold text-[#F4EFE5] mt-1">White Tura Limestone</dd>
              <dd className="text-xs text-[#D8C7A3] mt-1">Exterior casing dressed to sub-millimeter joints.</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-[#E8C56E] uppercase font-bold">800 km South</dt>
              <dd className="text-lg font-serif font-bold text-[#F4EFE5] mt-1">Red Aswan Granite</dd>
              <dd className="text-xs text-[#D8C7A3] mt-1">50-ton ceiling beams barged north during high flood.</dd>
            </div>
          </dl>
        </div>

        {/* ================= III. RAMP MODELS ================= */}
        <div className="mb-12 pb-10 border-b border-[#B49A72]/20">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-6">
            <h2 className="text-2xl font-serif font-bold text-[#F4EFE5]">
              III. Ramp Hypotheses
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

          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-xl font-serif font-bold text-[#F4EFE5]">
              {rampModels[selectedRampId].name}
            </h3>
            <EvidenceBadge level={rampModels[selectedRampId].status} as="span" surface="dark" />
          </div>
          <p className="text-sm text-[#E2D2B4] max-w-3xl leading-relaxed">
            {rampModels[selectedRampId].summary}
          </p>
        </div>

        {/* ================= IV. AHRAMAT NILE BRANCH & DIARY OF MERER ================= */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-[#F4EFE5] mb-5">
            IV. Ahramat Nile Branch & Merer’s Logbook
          </h2>

          <figure className="mb-6">
            <div className="aspect-[16/7] sm:aspect-[2.4/1] overflow-hidden bg-[#140F0B]">
              <img
                src={IMAGES.ancientNileBranch}
                alt="Historical reconstruction of the Ahramat branch of the Nile carrying stone barges directly to Giza harbours"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </figure>

          <p className="text-sm text-[#E2D2B4] max-w-3xl leading-relaxed mb-8">
            Mapped by radar in 2024, the <strong className="text-[#F4EFE5]">64 km extinct Ahramat branch</strong> flowed directly beside Giza, turning valley temples into harbour quays recorded in Inspector Merer’s Year 26 papyri.
          </p>

          <div className="flex flex-wrap gap-5 text-xs font-mono border-b border-[#B49A72]/20 pb-3 mb-5">
            {mererLogEntries.map((entry, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveLogDay(idx)}
                className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap ${
                  activeLogDay === idx
                    ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                    : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                }`}
              >
                {entry.day}
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
