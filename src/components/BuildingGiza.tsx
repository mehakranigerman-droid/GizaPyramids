import React, { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';
import { IMAGES } from '../assets/images';

interface BuildingGizaProps {
  onSelectEvidence: (claimId: string) => void;
}

export const BuildingGiza: React.FC<BuildingGizaProps> = ({ onSelectEvidence }) => {
  const [activeTab, setActiveTab] = useState<'materials' | 'labor' | 'ramps'>('labor');
  const [selectedRampId, setSelectedRampId] = useState<'straight' | 'spiral' | 'internal'>('internal');

  const rampModels = {
    straight: {
      name: 'Linear External Ramp',
      author: 'Early 20th century classical model',
      status: 'DEBATED' as const,
      description: 'A straight earthen incline extending from the quarry to the pyramid summit.',
      limitations: 'At a practical 10% slope, reaching the 146m summit requires a 1.5 km ramp containing more material than the pyramid itself.',
      physicsVerdict: 'Feasible only for the lower 30–50 meters.'
    },
    spiral: {
      name: 'Exterior Wrap-Around Spiral',
      author: 'George Goyon, Dows Dunham (1970s)',
      status: 'SUPPORTED' as const,
      description: 'A masonry ramp wrapped continuously around the outer stepped tiers.',
      limitations: 'Covers exterior sightlines needed to check slope and corners; turning multi-ton blocks at 90-degree corners creates extreme friction.',
      physicsVerdict: 'Impractical for maneuvering 50-ton granite beams.'
    },
    internal: {
      name: 'Internal Spiraling Ramp',
      author: 'Jean-Pierre Houdin (2006)',
      status: 'SUPPORTED' as const,
      description: 'An external ramp for the base third, followed by an internal 7% corridor ramp spiraling behind the outer casing.',
      limitations: 'Awaits non-invasive endoscopic verification inside the masonry.',
      physicsVerdict: 'Supported by micro-gravimetry surveys showing internal spiral density anomalies and open corner notches.'
    }
  };

  return (
    <section id="construction" className="py-20 bg-[#F4EFE5] text-[#171513] border-b border-[#D8C7A3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="border-b border-[#D8C7A3] pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
                Chapter 03 // Engineering, Logistics & Society
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B211B] mt-1">
                A Machine Made of Stone
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('labor-not-slaves')} />
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#2B211B]/80 max-w-3xl mt-2 leading-relaxed">
            Extracting, transporting, and assembling 6 million tons of stone with copper chisels, wooden sledges, annual river floods, and national state logistics.
          </p>
        </div>

        {/* Tab Selector (Prominent Segmented Control) */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#2B211B]/10 border border-[#2B211B]/20 mb-8 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab('labor')}
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border ${
              activeTab === 'labor'
                ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs scale-102 ring-1 ring-[#8A4F3D]'
                : 'bg-white/60 text-[#2B211B] border-transparent hover:border-[#8A4F3D]/50 hover:bg-white'
            }`}
          >
            <span>I. Labor Force & Diet</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('materials')}
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border ${
              activeTab === 'materials'
                ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs scale-102 ring-1 ring-[#8A4F3D]'
                : 'bg-white/60 text-[#2B211B] border-transparent hover:border-[#8A4F3D]/50 hover:bg-white'
            }`}
          >
            <span>II. Stone Sourcing & Supply Lines</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ramps')}
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border ${
              activeTab === 'ramps'
                ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs scale-102 ring-1 ring-[#8A4F3D]'
                : 'bg-white/60 text-[#2B211B] border-transparent hover:border-[#8A4F3D]/50 hover:bg-white'
            }`}
          >
            <span>III. Ramp Engineering Hypotheses</span>
          </button>
        </div>

        {/* TAB 1: LABOR & SOCIAL ARCHAEOLOGY */}
        {activeTab === 'labor' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Visual Quarry & Hauling Scene (Clean, minimal frame) */}
            <div className="relative aspect-[16/7] sm:aspect-[2.4/1] overflow-hidden rounded-xs shadow-lg">
              <img
                src={IMAGES.quarryLabor}
                alt="Ancient Egyptian quarry workers cutting limestone and hauling megalithic blocks on wooden sledges"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#D8C7A3]">
                <span className="flex items-center gap-2 drop-shadow">
                  Quarry Reconstruction · Masons & Sledge Haulers at Giza (c. 2550 BCE)
                </span>
                <span className="hidden sm:inline-block text-[#B49A72] drop-shadow">
                  Corvée State Draft · Heit el-Ghurab
                </span>
              </div>
            </div>

            {/* The Myth vs Archaeological Reality (Open Comparative Columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
              {/* Myth Column */}
              <div>
                <div className="flex items-center justify-between border-b border-[#2B211B]/15 pb-2 mb-3">
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider">
                    The Hollywood & Herodotus Myth
                  </span>
                  <EvidenceBadge level="SPECULATIVE" onClick={() => onSelectEvidence('labor-not-slaves')} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#2B211B] mb-2">
                  100,000 Enslaved Captives Driven by Whips
                </h4>
                <p className="text-sm text-[#171513]/85 leading-relaxed">
                  Popularized by Herodotus (c. 450 BCE) and Hollywood cinema, imagining millions of foreign slaves beaten into erecting monuments under tyrannical whim.
                </p>
              </div>

              {/* Reality Column */}
              <div>
                <div className="flex items-center justify-between border-b border-[#2B211B]/15 pb-2 mb-3">
                  <span className="font-mono text-xs text-emerald-800 uppercase font-bold tracking-wider">
                    Archaeological Reality: Heit el-Ghurab
                  </span>
                  <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('labor-not-slaves')} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#2B211B] mb-2">
                  Conscripted Nationals & Skilled Guilds
                </h4>
                <p className="text-sm text-[#171513]/85 leading-relaxed">
                  Excavations by Mark Lehner confirm an organized national labor draft (corvée), supported by skilled stonecutters, architects, and state-supplied physicians.
                </p>
              </div>
            </div>

            {/* Empirical Excavation Proofs at Heit el-Ghurab (Open 3-Column Dossier) */}
            <div className="border-t border-[#2B211B]/15 pt-8">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B211B] mb-6">
                Excavation Evidence from the Worker Settlement (Heit el-Ghurab)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 1. Diet & Nutrition */}
                <div>
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider block mb-2">
                    01 // High-Protein Royal Diet
                  </span>
                  <p className="text-xs text-[#171513]/85 leading-relaxed">
                    Over 175,000 animal bone fragments confirm daily rations of prime young cattle and sheep—a luxury diet centrally provisioned by the royal estate to fuel heavy labor.
                  </p>
                </div>

                {/* 2. Medical Care & Skeletal Pathology */}
                <div>
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider block mb-2">
                    02 // Advanced Medical Care
                  </span>
                  <p className="text-xs text-[#171513]/85 leading-relaxed">
                    Worker skeletons reveal expertly set bone fractures, splints, and trepanations with full bone healing, demonstrating royal medical care for injured builders.
                  </p>
                </div>

                {/* 3. Social Organization & Graffiti */}
                <div>
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider block mb-2">
                    03 // Crew Identity & Honor
                  </span>
                  <p className="text-xs text-[#171513]/85 leading-relaxed">
                    Builders organized in phyles and signed stone blocks with red-ochre gang names like "Companions of Khufu," receiving tomb burials beside the royal pyramids.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STONE SOURCING & SUPPLY LINES */}
        {activeTab === 'materials' && (
          <div className="space-y-8 animate-fadeIn pt-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B211B] mb-2">
                Geological Sourcing Matrix // Three Distinct Materials
              </h3>
              <p className="text-sm text-[#2B211B]/80 mb-8 max-w-3xl leading-relaxed">
                Over 97% of the pyramid volume came from local plateau stone, while specialized casing and lintels required trans-regional river shipping.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 1. Local Limestone */}
                <div>
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider block mb-1">
                    Core Masonry // 97% of Volume
                  </span>
                  <h4 className="font-serif font-bold text-xl text-[#2B211B] mb-3">
                    Nummulitic Limestone
                  </h4>
                  <div className="text-xs space-y-2 text-[#2B211B]/85 leading-relaxed">
                    <p><strong>Origin:</strong> Giza plateau quarry pits (located 200–500m south of pyramids).</p>
                    <p><strong>Characteristics:</strong> Packed with fossilized foraminifera (nummulites). Coarse, dense, but easily split along bedding planes.</p>
                    <p><strong>Transport:</strong> Hauled on wooden sledges over lubricated gypsum mud ramps directly onto the site.</p>
                  </div>
                </div>

                {/* 2. Tura Casing */}
                <div>
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider block mb-1">
                    Exterior Cladding // High Polish
                  </span>
                  <h4 className="font-serif font-bold text-xl text-[#2B211B] mb-3">
                    Fine White Tura Limestone
                  </h4>
                  <div className="text-xs space-y-2 text-[#2B211B]/85 leading-relaxed">
                    <p><strong>Origin:</strong> Underground galleries at Tura & Maasara (east bank of Nile, ~13 km away).</p>
                    <p><strong>Characteristics:</strong> Pure, ultra-fine calcite grain capable of being polished to mirror smoothness with sub-millimeter joint tolerance (&lt;0.5 mm).</p>
                    <p><strong>Transport:</strong> Loaded on wooden river barges during the Nile flood season (Akhet) across to the Giza harbour.</p>
                  </div>
                </div>

                {/* 3. Aswan Granite */}
                <div>
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider block mb-1">
                    Structural Beams & Vaults
                  </span>
                  <h4 className="font-serif font-bold text-xl text-[#2B211B] mb-3">
                    Pink/Red Aswan Granite
                  </h4>
                  <div className="text-xs space-y-2 text-[#2B211B]/85 leading-relaxed">
                    <p><strong>Origin:</strong> Aswan quarries, 800+ kilometers south at the Nile’s First Cataract.</p>
                    <p><strong>Characteristics:</strong> Extremely hard igneous rock (Mohs hardness 6–7) containing quartz and feldspar. Used for King’s Chamber 50-ton roof beams.</p>
                    <p><strong>Transport:</strong> Carried on immense cargo barges drifting downstream during high water, a journey of several weeks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: THE RAMP HYPOTHESES */}
        {activeTab === 'ramps' && (
          <div className="space-y-8 animate-fadeIn pt-2">
            {/* Interactive Selector for Ramp Models */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {(['straight', 'spiral', 'internal'] as const).map((key) => {
                const model = rampModels[key];
                const isSelected = selectedRampId === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedRampId(key)}
                    className={`p-4 text-left cursor-pointer transition-all border-2 relative group shadow-xs ${
                      isSelected
                        ? 'bg-white border-[#8A4F3D] ring-2 ring-[#8A4F3D]/25 shadow-md -translate-y-0.5'
                        : 'bg-white/60 hover:bg-white border-[#2B211B]/15 hover:border-[#8A4F3D]/60 hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-[#8A4F3D] uppercase font-bold tracking-wider">
                        {isSelected ? '● Active Model' : 'Click to Evaluate'}
                      </span>
                      <EvidenceBadge level={model.status} size="sm" showLabel={false} as="span" />
                    </div>
                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#2B211B] group-hover:text-[#8A4F3D] transition-colors">
                      {model.name}
                    </h4>
                    <span className="font-mono text-[11px] text-[#8A4F3D] block mt-0.5">
                      {model.author}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Ramp Model Details (Clean 2-Column Evaluation) */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2B211B]/15 pb-3 mb-6">
                <div>
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase tracking-wider font-bold block">
                    Mechanical Feasibility Assessment
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B211B] mt-1">
                    {rampModels[selectedRampId].name}
                  </h3>
                </div>
                <EvidenceBadge level={rampModels[selectedRampId].status} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#171513] mb-6">
                <div>
                  <h5 className="font-mono text-xs font-bold text-[#8A4F3D] uppercase tracking-wider mb-2">
                    Proposed Mechanical Process
                  </h5>
                  <p className="leading-relaxed text-[#171513]/85">
                    {rampModels[selectedRampId].description}
                  </p>
                </div>

                <div>
                  <h5 className="font-mono text-xs font-bold text-[#8A4F3D] uppercase tracking-wider mb-2">
                    Physical & Structural Constraints
                  </h5>
                  <p className="leading-relaxed text-[#171513]/85">
                    {rampModels[selectedRampId].limitations}
                  </p>
                </div>
              </div>

              <div className="bg-[#2B211B] text-[#F4EFE5] p-5 border-l-4 border-[#8A4F3D]">
                <div className="text-xs font-mono leading-relaxed">
                  <span className="text-[#D8C7A3] font-bold uppercase tracking-wider block mb-1">
                    Archaeological Synthesis: Mixed Multi-Ramp Strategy
                  </span>
                  Current archaeological consensus concludes no single ramp type built the entire pyramid. Builders combined external straight ramps from local quarries for lower levels, temporary lateral ramps, and internal spiraling voids to complete the upper cap.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
