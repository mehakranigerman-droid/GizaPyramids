import React, { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';
import { Waves, Calendar, FileText, ArrowRight, Anchor, Navigation, Image as ImageIcon } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface AncientLandscapeProps {
  onSelectEvidence: (claimId: string) => void;
}

export const AncientLandscape: React.FC<AncientLandscapeProps> = ({ onSelectEvidence }) => {
  const [activeLogDay, setActiveLogDay] = useState<number>(0);

  const mererLogEntries = [
    {
      day: 'Day 1 // Morning',
      action: 'Departing the Tura South Quarries',
      text: 'Inspector Merer embarks with his crew of 40 elite boatmen from the royal port. The cargo boats are loaded with high-grade white limestone blocks cut from the underground galleries of Tura.',
      location: 'Tura Quarry Harbour (East Bank of the Nile)',
      quote: '“Spent the day loading stone in the quarries of South Tura; sailed to the Great Pyramid of Khufu under the direction of Prince Ankhhaf...”'
    },
    {
      day: 'Day 2 // Transit',
      action: 'Navigating the Ahramat Nile Channel',
      text: 'The heavy wooden barges navigate through the high-water channels of the annual Nile flood (Akhet), entering the Ahramat Branch flowing directly northwest alongside the desert edge.',
      location: 'Ahramat Waterway Branch',
      quote: '“Sailed towards Akhet-Khufu laden with stone... rested overnight at the royal basin.”'
    },
    {
      day: 'Day 3 // Delivery',
      action: 'Docking at the Ro-She Khufu Harbour Basin',
      text: 'Arrival at the artificial harbour basin excavated at the eastern foot of the Giza Plateau (Ro-She Khufu). Blocks are unloaded directly onto the landing quays to be transferred to sledges.',
      location: 'Giza Central Harbour Basin (Ro-She Khufu)',
      quote: '“Moored at Ro-She Khufu; unloaded the blocks under the inspection of the royal overseer of works...”'
    },
    {
      day: 'Day 4 // Return',
      action: 'Empty Return Voyage to Tura',
      text: 'With empty barges traveling light, the crew rows upstream and sails south back toward Tura to prepare for the next multi-ton load of casing stones.',
      location: 'Return Upstream to Tura',
      quote: '“Cast off in the morning from Ro-She Khufu; sailed south to Tura with the north wind to repeat the cargo count.”'
    }
  ];

  return (
    <section id="landscape" className="py-20 bg-[#EFE7DA] text-[#171513] border-b border-[#D8C7A3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="border-b border-[#D8C7A3] pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
                Chapter 04 // Ancient Hydrology & Transport
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B211B] mt-1">
                The River That Disappeared
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('ahramat-waterway')} />
            </div>
          </div>
          <p className="text-base text-[#2B211B]/80 max-w-3xl mt-3 leading-relaxed">
            Today, the Giza plateau towers over dry desert sand several kilometers west of the modern Nile. But four thousand five hundred years ago, a massive natural branch of the Nile flowed directly against the foot of the plateau.
          </p>
        </div>

        {/* 2024 Discovery Spotlight: The Ahramat Branch (Open Layout) */}
        <div className="mb-16">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2B211B]/15 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-emerald-700" /> 2024 Geophysical Breakthrough // Nature Communications
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B211B] mt-1">
                The Ahramat ("Pyramids") Branch
              </h3>
            </div>
            <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('ahramat-waterway')} />
          </div>

          {/* Visual Reconstruction of the Ahramat Waterway */}
          <div className="relative aspect-[16/7] sm:aspect-[2.4/1] overflow-hidden rounded-xs shadow-lg mb-8">
            <img
              src={IMAGES.ancientNileBranch}
              alt="Historical reconstruction of the Ahramat branch of the Nile River carrying Tura limestone barges to Giza"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#D8C7A3]">
              <span className="flex items-center gap-2 drop-shadow">
                <ImageIcon className="w-3.5 h-3.5 text-[#8A4F3D]" /> Historical Landscape // The Ahramat Branch & Giza Plateau Harbours (c. 2550 BCE)
              </span>
              <span className="hidden sm:inline-block text-[#B49A72] drop-shadow">
                Confirmed May 2024 // Radar Satellite & Deep Sediment Cores
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 text-sm text-[#171513]/85 space-y-4 leading-relaxed">
              <p>
                In May 2024, a team of geoscientists led by Dr. Eman Ghoneim published radar satellite imagery and deep sediment cores establishing the existence of a <strong className="text-[#2B211B]">64-kilometer extinct river branch</strong> running from Lisht to Giza.
              </p>
              <p>
                During Dynasty 4, this branch had a width ranging from <strong className="text-[#2B211B]">200 to 700 meters</strong> and a depth exceeding 5 meters during the annual inundation (Akhet). It flowed immediately alongside the western desert margins, directly bordering the 31 pyramids of the Old and Middle Kingdoms.
              </p>
              <p className="border-t border-b border-[#2B211B]/15 py-3 text-xs font-mono text-[#8A4F3D]">
                The terminal ends of Giza’s causeways and valley temples are not random dead-ends; they were water-gate harbours and quays where boats docked directly at the foot of the desert plateau.
              </p>
            </div>

            <div className="pt-1">
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider block mb-3">
                Hydrological Specifications
              </span>
              <div className="space-y-2 text-xs font-mono text-[#2B211B]">
                <div className="flex justify-between border-b border-[#2B211B]/10 pb-1.5">
                  <span className="text-[#2B211B]/70">Length</span>
                  <span className="font-bold">64 km (39.7 mi)</span>
                </div>
                <div className="flex justify-between border-b border-[#2B211B]/10 pb-1.5">
                  <span className="text-[#2B211B]/70">Channel Width</span>
                  <span className="font-bold">0.2 – 0.7 km</span>
                </div>
                <div className="flex justify-between border-b border-[#2B211B]/10 pb-1.5">
                  <span className="text-[#2B211B]/70">Active Period</span>
                  <span className="font-bold">c. 2700 – 1900 BCE</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-[#2B211B]/70">Desiccation</span>
                  <span className="font-bold">Late Holocene Megadrought</span>
                </div>
              </div>
              <div className="mt-4 text-[11px] font-mono text-[#2B211B]/50 italic">
                Source: Ghoneim et al., Communications Earth & Environment (2024)
              </div>
            </div>
          </div>
        </div>

        {/* Primary Eyewitness Text: Diary of Merer (Papyrus Jarf) */}
        <div className="border-t border-[#2B211B]/15 pt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2B211B]/15 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#8A4F3D] uppercase tracking-widest font-bold flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#8A4F3D]" /> The World's Oldest Written Papyrus // Discovered 2013
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B211B] mt-1">
                The Diary of Inspector Merer (Papyrus Jarf)
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#2B211B]/60">Primary Source Document</span>
              <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('khufu-authorship')} />
            </div>
          </div>

          <p className="text-sm text-[#171513]/85 max-w-3xl mb-8 leading-relaxed">
            In 2013, French archaeologist Pierre Tallet uncovered rolls of hieratic papyri in the Red Sea port of Wadi al-Jarf. Dating to <strong className="text-[#2B211B]">Year 26 of Khufu’s reign</strong>, they contain the personal daily operations log of Inspector Merer, an official commanding a team of 40 boatmen delivering Tura limestone casing to Khufu's pyramid.
          </p>

          {/* Interactive Logbook Day Selector (Clean Underline Tabs) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#2B211B]/15 mb-6">
            {mererLogEntries.map((entry, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveLogDay(idx)}
                className={`py-3 px-2 text-left cursor-pointer transition-all border-b-2 -mb-px ${
                  activeLogDay === idx
                    ? 'border-[#8A4F3D] text-[#2B211B]'
                    : 'border-transparent text-[#2B211B]/60 hover:text-[#2B211B]'
                }`}
              >
                <span className="font-mono text-[10px] text-[#8A4F3D] block uppercase font-bold">
                  Stage 0{idx + 1}
                </span>
                <span className="font-serif text-sm font-bold block mt-0.5">
                  {entry.day}
                </span>
              </button>
            ))}
          </div>

          {/* Active Day Dossier (Clean Editorial Reading Layout) */}
          <div className="py-2">
            <div className="flex flex-wrap items-baseline justify-between border-b border-[#2B211B]/10 pb-3 mb-4 gap-2">
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-[#8A4F3D]" /> {mererLogEntries[activeLogDay].action}
              </span>
              <span className="font-mono text-xs text-[#2B211B]/60">
                Location: {mererLogEntries[activeLogDay].location}
              </span>
            </div>

            <p className="text-sm text-[#171513]/90 leading-relaxed mb-6">
              {mererLogEntries[activeLogDay].text}
            </p>

            <blockquote className="border-l-2 border-[#8A4F3D] pl-4 py-1 text-[#2B211B] font-serif italic text-base leading-relaxed">
              {mererLogEntries[activeLogDay].quote}
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
};
