import React, { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';
import { Hammer, Users, Truck, ArrowRight, ShieldCheck, CheckCircle2, Box, Info } from 'lucide-react';

interface BuildingGizaProps {
  onSelectEvidence: (claimId: string) => void;
}

export const BuildingGiza: React.FC<BuildingGizaProps> = ({ onSelectEvidence }) => {
  const [activeTab, setActiveTab] = useState<'materials' | 'labor' | 'ramps'>('labor');
  const [selectedRampId, setSelectedRampId] = useState<'straight' | 'spiral' | 'internal'>('internal');

  const rampModels = {
    straight: {
      name: 'Single Linear External Ramp',
      author: 'Early 20th century classical model',
      status: 'DEBATED' as const,
      description: 'A colossal straight incline extending from the quarry to the pyramid summit.',
      limitations: 'Mathematically impossible for upper levels. At a practical 10% slope (1:10), reaching the 146.6m summit requires a ramp 1.5 kilometers long, containing over 3 million cubic meters of material—more than the Great Pyramid itself!',
      physicsVerdict: 'Feasible only for the lower 30–50 meters of masonry.'
    },
    spiral: {
      name: 'Exterior Wrap-Around Spiral Ramp',
      author: 'George Goyon, Dows Dunham (1970s)',
      status: 'SUPPORTED' as const,
      description: 'A masonry ramp wrapped continuously around the outer stepped tiers of the rising pyramid.',
      limitations: 'Covers the four corners and exterior surfaces, preventing the master architects from using optical sighting lines to maintain the exact 51°50\' inclination and true square geometry. Turning 2.5-ton blocks at sharp 90-degree corners presents extreme mechanical friction.',
      physicsVerdict: 'Leaves little room for maneuvering heavy Aswan 50-ton granite blocks.'
    },
    internal: {
      name: 'Internal Spiraling Ramp (Houdin Model)',
      author: 'Jean-Pierre Houdin (2006)',
      status: 'SUPPORTED' as const,
      description: 'A steep external straight ramp was used for the lower third (70% of total stone volume). Once the base was established, an internal corridor ramp with a 7% slope was integrated directly into the core masonry, spiraling up behind the casing.',
      limitations: 'Awaiting formal permission from the Egyptian Supreme Council of Antiquities for non-invasive endoscopic verification inside the masonry.',
      physicsVerdict: 'Supported by 1986 Électricité de France (EDF) micro-gravimetry surveys showing a continuous spiral low-density band inside the pyramid walls, and open corner notches (the Bob Brier notch at 82m) for pivoting blocks.'
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
          <p className="text-base text-[#2B211B]/80 max-w-3xl mt-3 leading-relaxed">
            How does an early Bronze/Copper-Age state extract, transport, and assemble over 6 million tons of stone without iron tools, wheeled vehicles, or pulleys? The answer lies in state logistics, seasonal river navigation, and disciplined human organization.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 border-b border-[#B49A72] pb-4 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('labor')}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'labor'
                ? 'bg-[#8A4F3D] text-[#F4EFE5] shadow-sm'
                : 'bg-[#EFE7DA] text-[#2B211B] hover:bg-[#D8C7A3]'
            }`}
          >
            <Users className="w-4 h-4" /> The Builders (Labor & Diet)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('materials')}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'materials'
                ? 'bg-[#8A4F3D] text-[#F4EFE5] shadow-sm'
                : 'bg-[#EFE7DA] text-[#2B211B] hover:bg-[#D8C7A3]'
            }`}
          >
            <Box className="w-4 h-4" /> Stone Sourcing & Supply Lines
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ramps')}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'ramps'
                ? 'bg-[#8A4F3D] text-[#F4EFE5] shadow-sm'
                : 'bg-[#EFE7DA] text-[#2B211B] hover:bg-[#D8C7A3]'
            }`}
          >
            <Hammer className="w-4 h-4" /> The Ramp Engineering Debate
          </button>
        </div>

        {/* TAB 1: LABOR & SOCIAL ARCHAEOLOGY */}
        {activeTab === 'labor' && (
          <div className="space-y-8 animate-fadeIn">
            {/* The Myth vs Archaeological Reality */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Myth Column */}
              <div className="bg-[#EFE7DA] p-6 border-l-4 border-[#8A4F3D]">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold">
                    The Hollywood & Herodotus Myth
                  </span>
                  <EvidenceBadge level="SPECULATIVE" onClick={() => onSelectEvidence('labor-not-slaves')} />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#2B211B] mb-2">
                  100,000 Enslaved Captives Driven by Whips
                </h4>
                <p className="text-sm text-[#171513] leading-relaxed">
                  Popularized by Greek historian Herodotus (writing in 450 BCE, two millennia after construction) and cemented by 1950s Hollywood cinema. This narrative imagined millions of starving foreign slaves beaten into erecting monuments under tyrannical whim.
                </p>
              </div>

              {/* Reality Column */}
              <div className="bg-[#EFE7DA] p-6 border-l-4 border-emerald-600">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-emerald-800 uppercase font-bold">
                    Archaeological Reality: Heit el-Ghurab
                  </span>
                  <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('labor-not-slaves')} />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#2B211B] mb-2">
                  Conscripted Nationals & Skilled Guilds
                </h4>
                <p className="text-sm text-[#171513] leading-relaxed">
                  Excavated by Mark Lehner and Zahi Hawass, the "Lost City of the Pyramids" proves workers were organized in patriotic rotational state drafts (corvée labor), supported by specialized stonecutters, architects, scribes, and doctors who received royal medical care.
                </p>
              </div>
            </div>

            {/* Empirical Excavation Proofs at Heit el-Ghurab */}
            <div className="bg-[#EFE7DA] border border-[#B49A72] p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2B211B] mb-6">
                Excavation Evidence from the Worker Settlement (Heit el-Ghurab)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Diet & Nutrition */}
                <div className="bg-[#F4EFE5] p-5 border border-[#D8C7A3]">
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold block mb-2">
                    01 // High-Calorie Royal Rations
                  </span>
                  <p className="text-xs text-[#171513] leading-relaxed">
                    Zooarchaeologist Richard Redding analyzed over 175,000 animal bone fragments, revealing daily slaughter of thousands of kilos of young male cattle and sheep. This high-protein diet was luxury food in ancient Egypt, distributed by the central royal palace to fuel heavy physical labor.
                  </p>
                </div>

                {/* 2. Medical Care & Skeletal Pathology */}
                <div className="bg-[#F4EFE5] p-5 border border-[#D8C7A3]">
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold block mb-2">
                    02 // Advanced Medical Treatment
                  </span>
                  <p className="text-xs text-[#171513] leading-relaxed">
                    Anthropologist Azza Sarry el-Din examined hundreds of worker skeletons in the upper cemetery. Remains show cleanly set bone fractures with splints, successful cranial trepanation, and amputations with full bone remodeling—proving patients survived and received elite surgical care.
                  </p>
                </div>

                {/* 3. Social Organization & Graffiti */}
                <div className="bg-[#F4EFE5] p-5 border border-[#D8C7A3]">
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold block mb-2">
                    03 // Crew Identity & Competition
                  </span>
                  <p className="text-xs text-[#171513] leading-relaxed">
                    Builders were divided into phyles (approx 200 men) and zha (20 men) with proudly inscribed gang names in red ochre: "The Companions of Khufu" and "The Drunkards of Menkaure". They were buried with grave goods right in the shadow of the pyramids.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STONE SOURCING & SUPPLY LINES */}
        {activeTab === 'materials' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-[#EFE7DA] border border-[#B49A72] p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2B211B] mb-2">
                Geological Sourcing Matrix // Three Distinct Materials
              </h3>
              <p className="text-sm text-[#2B211B]/80 mb-6">
                Over 97% of the pyramid volume came from local plateau stone, while specialized casing and lintels required trans-regional river shipping.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Local Limestone */}
                <div className="bg-[#F4EFE5] p-5 border-t-4 border-[#B49A72]">
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold block">
                    Core Masonry // 97% of Volume
                  </span>
                  <h4 className="font-serif font-bold text-lg text-[#2B211B] mt-1 mb-2">
                    Nummulitic Limestone
                  </h4>
                  <div className="text-xs space-y-1.5 text-[#2B211B]">
                    <p><strong>Origin:</strong> Giza plateau quarry pits (located 200–500m south of pyramids).</p>
                    <p><strong>Characteristics:</strong> Packed with fossilized foraminifera (nummulites). Coarse, dense, but easily split along bedding planes.</p>
                    <p><strong>Transport:</strong> Hauled on wooden sledges over lubricated gypsum mud ramps directly onto the site.</p>
                  </div>
                </div>

                {/* 2. Tura Casing */}
                <div className="bg-[#F4EFE5] p-5 border-t-4 border-[#D8C7A3]">
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold block">
                    Exterior Cladding // High Polish
                  </span>
                  <h4 className="font-serif font-bold text-lg text-[#2B211B] mt-1 mb-2">
                    Fine White Tura Limestone
                  </h4>
                  <div className="text-xs space-y-1.5 text-[#2B211B]">
                    <p><strong>Origin:</strong> Underground galleries at Tura & Maasara (east bank of Nile, ~13 km away).</p>
                    <p><strong>Characteristics:</strong> Pure, ultra-fine calcite grain capable of being polished to mirror smoothness with sub-millimeter joint tolerance (&lt;0.5 mm).</p>
                    <p><strong>Transport:</strong> Loaded on wooden river barges during the Nile flood season (Akhet) across to the Giza harbour.</p>
                  </div>
                </div>

                {/* 3. Aswan Granite */}
                <div className="bg-[#F4EFE5] p-5 border-t-4 border-[#8A4F3D]">
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold block">
                    Structural Beams & Vaults
                  </span>
                  <h4 className="font-serif font-bold text-lg text-[#2B211B] mt-1 mb-2">
                    Pink/Red Aswan Granite
                  </h4>
                  <div className="text-xs space-y-1.5 text-[#2B211B]">
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
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              {(['straight', 'spiral', 'internal'] as const).map((key) => {
                const model = rampModels[key];
                const isSelected = selectedRampId === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedRampId(key)}
                    className={`p-4 text-left border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#8A4F3D] bg-[#EFE7DA] shadow-md'
                        : 'border-[#D8C7A3] bg-[#F4EFE5] hover:bg-[#EFE7DA]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-base text-[#2B211B]">
                        {model.name}
                      </h4>
                      <EvidenceBadge level={model.status} size="sm" showLabel={false} />
                    </div>
                    <span className="font-mono text-[11px] text-[#8A4F3D] block mt-1">
                      {model.author}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Ramp Model Details */}
            <div className="bg-[#EFE7DA] border border-[#B49A72] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8C7A3] pb-4 mb-4">
                <div>
                  <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold">
                    Mechanical Feasibility Assessment
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#2B211B] mt-1">
                    {rampModels[selectedRampId].name}
                  </h3>
                </div>
                <EvidenceBadge level={rampModels[selectedRampId].status} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#171513]">
                <div>
                  <h5 className="font-mono text-xs font-bold text-[#2B211B] uppercase tracking-wider mb-2">
                    Proposed Mechanical Process
                  </h5>
                  <p className="leading-relaxed bg-[#F4EFE5] p-4 border border-[#D8C7A3]">
                    {rampModels[selectedRampId].description}
                  </p>
                </div>

                <div>
                  <h5 className="font-mono text-xs font-bold text-[#8A4F3D] uppercase tracking-wider mb-2">
                    Physical & Structural Constraints
                  </h5>
                  <p className="leading-relaxed bg-[#F4EFE5] p-4 border border-[#D8C7A3]">
                    {rampModels[selectedRampId].limitations}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8C7A3] flex items-start gap-3 bg-[#2B211B] text-[#F4EFE5] p-4">
                <Info className="w-5 h-5 text-[#8A4F3D] shrink-0 mt-0.5" />
                <div className="text-xs font-mono leading-relaxed">
                  <span className="text-[#D8C7A3] font-bold uppercase block mb-1">
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
