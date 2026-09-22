import React, { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';
import { Waves, Calendar, FileText, ArrowRight, Anchor, Navigation } from 'lucide-react';

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

        {/* 2024 Discovery Spotlight: The Ahramat Branch */}
        <div className="bg-[#F4EFE5] border-2 border-[#B49A72] p-6 sm:p-8 mb-10 shadow-md">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#D8C7A3] pb-4 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 font-bold flex items-center gap-1.5">
                <Waves className="w-4 h-4" /> 2024 Geophysical Breakthrough // Nature Communications Earth & Environment
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B211B] mt-1">
                The Ahramat ("Pyramids") Branch
              </h3>
            </div>
            <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('ahramat-waterway')} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 text-sm text-[#171513] space-y-3 leading-relaxed">
              <p>
                In May 2024, a team of geoscientists led by Dr. Eman Ghoneim published radar satellite imagery and deep sediment cores establishing the existence of a <strong>64-kilometer extinct river branch</strong> running from Lisht to Giza.
              </p>
              <p>
                During Dynasty 4, this branch had a width ranging from <strong>200 to 700 meters</strong> and a depth exceeding 5 meters during the annual inundation (Akhet). It flowed immediately alongside the western desert margins, directly bordering the 31 pyramids of the Old and Middle Kingdoms.
              </p>
              <p className="bg-[#EFE7DA] p-3.5 border-l-4 border-[#8A4F3D] text-xs font-mono">
                The terminal ends of Giza’s causeways and valley temples are not random dead-ends; they were water-gate harbours and quays where boats docked directly at the foot of the desert plateau.
              </p>
            </div>

            <div className="bg-[#2B211B] text-[#F4EFE5] p-5 border border-[#B49A72] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold block mb-2">
                  Hydrological Specifications
                </span>
                <div className="space-y-2 text-xs font-mono text-[#D8C7A3]">
                  <div className="flex justify-between border-b border-[#B49A72]/30 pb-1">
                    <span>Length:</span>
                    <span className="text-[#F4EFE5]">64 km (39.7 mi)</span>
                  </div>
                  <div className="flex justify-between border-b border-[#B49A72]/30 pb-1">
                    <span>Width:</span>
                    <span className="text-[#F4EFE5]">0.2 – 0.7 km</span>
                  </div>
                  <div className="flex justify-between border-b border-[#B49A72]/30 pb-1">
                    <span>Active Period:</span>
                    <span className="text-[#F4EFE5]">c. 2700 – 1900 BCE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Desiccation:</span>
                    <span className="text-[#F4EFE5]">Late Holocene Megadrought</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#B49A72]/30 text-[11px] font-mono text-[#D8C7A3]/70">
                Source: Ghoneim et al., Communications Earth & Environment (2024)
              </div>
            </div>
          </div>
        </div>

        {/* Primary Eyewitness Text: Diary of Merer (Papyrus Jarf) */}
        <div className="bg-[#2B211B] text-[#F4EFE5] border-2 border-[#8A4F3D] p-6 sm:p-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#B49A72]/40 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#8A4F3D] uppercase tracking-widest font-bold flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#8A4F3D]" /> The World's Oldest Written Papyrus // Discovered 2013
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EFE5] mt-1">
                The Diary of Inspector Merer (Papyrus Jarf)
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#D8C7A3]">Primary Source Document</span>
              <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('khufu-authorship')} />
            </div>
          </div>

          <p className="text-sm text-[#D8C7A3] max-w-3xl mb-6 leading-relaxed">
            In 2013, French archaeologist Pierre Tallet uncovered rolls of hieratic papyri in the Red Sea port of Wadi al-Jarf. Dating to <strong>Year 26 of Khufu’s reign</strong>, they contain the personal daily operations log of Inspector Merer, an official commanding a team of 40 boatmen delivering Tura limestone casing to Khufu's pyramid.
          </p>

          {/* Interactive Logbook Day Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {mererLogEntries.map((entry, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveLogDay(idx)}
                className={`p-3 text-left border transition-all cursor-pointer ${
                  activeLogDay === idx
                    ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#D8C7A3] font-bold'
                    : 'bg-[#171513] text-[#D8C7A3] border-[#B49A72]/30 hover:bg-[#241B16]'
                }`}
              >
                <span className="font-mono text-[10px] text-[#F4EFE5]/80 block uppercase">
                  Logbook Stage {idx + 1}
                </span>
                <span className="font-serif text-xs sm:text-sm font-bold block mt-0.5">
                  {entry.day}
                </span>
              </button>
            ))}
          </div>

          {/* Active Day Dossier */}
          <div className="bg-[#171513] border border-[#B49A72]/40 p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-[#B49A72]/30 pb-3 mb-3">
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5" /> {mererLogEntries[activeLogDay].action}
              </span>
              <span className="font-mono text-xs text-[#D8C7A3]">
                Location: {mererLogEntries[activeLogDay].location}
              </span>
            </div>

            <p className="text-sm text-[#F4EFE5] leading-relaxed mb-4">
              {mererLogEntries[activeLogDay].text}
            </p>

            <blockquote className="border-l-2 border-[#8A4F3D] pl-4 py-2 bg-[#241B16] text-[#D8C7A3] font-serif italic text-sm">
              {mererLogEntries[activeLogDay].quote}
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
};
