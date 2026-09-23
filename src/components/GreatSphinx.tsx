import React, { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';
import { IMAGES } from '../assets/images';

interface GreatSphinxProps {
  onSelectEvidence: (claimId: string) => void;
}

export const GreatSphinx: React.FC<GreatSphinxProps> = ({ onSelectEvidence }) => {
  const [activeStratum, setActiveStratum] = useState<'m1' | 'm2' | 'm3'>('m2');
  const [debateSide, setDebateSide] = useState<'mainstream' | 'waterHypothesis'>('mainstream');

  const strataData = {
    m1: {
      name: 'Member I (Lowest Base & Paws)',
      rockType: 'Dense, hard reef limestone (Rosetau bed)',
      depth: 'Bottom 2.5 meters above ditch floor',
      erosionPattern: 'Very low natural weathering; brittle, solid base.',
      notes: 'Forms the bedrock floor of the Sphinx ditch and lower paws. Highly durable limestone that resisted erosion.'
    },
    m2: {
      name: 'Member II (Body, Flanks & Chest)',
      rockType: 'Alternating beds of soft porous marl and hard dolomitic limestone',
      depth: 'Middle ~12–15 meters (the entire lion body)',
      erosionPattern: 'Deep horizontal coved banding, undulating rounded vertical fissures, and severe flaking.',
      notes: 'The focal point of geological debate. The soft marl layers crumble under subsurface salt crystallization (haloclasty) and episodic heavy rain runoff, while harder beds project outward.'
    },
    m3: {
      name: 'Member III (Head & Royal Nemes Headdress)',
      rockType: 'Dense, pure Mokattam formation limestone',
      depth: 'Top ~5–6 meters (human head)',
      erosionPattern: 'Significantly less weathered than the body; preserved fine facial features.',
      notes: 'Carved from an exceptionally hard natural bedrock knoll. Because the head limestone was far more durable than the body, it eroded at a fraction of the rate.'
    }
  };

  return (
    <section id="sphinx" className="py-20 bg-[#F4EFE5] text-[#171513] border-b border-[#D8C7A3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="border-b border-[#D8C7A3] pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
                Chapter 05 & 10 // Geology, Context & Chronology
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B211B] mt-1">
                The Face in the Rock & The Erosion Debate
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <EvidenceBadge level="SUPPORTED" onClick={() => onSelectEvidence('sphinx-khafre')} />
              <EvidenceBadge level="DEBATED" onClick={() => onSelectEvidence('sphinx-water-erosion')} />
            </div>
          </div>
          <p className="text-base text-[#2B211B]/80 max-w-3xl mt-3 leading-relaxed">
            The Great Sphinx is not built from stacked masonry blocks. It was sculpted directly from a living natural limestone outcrop (yardang) left behind on the quarry floor. Examining its three distinct rock strata unlocks both its 4th Dynasty context and the long-running geological dating debate.
          </p>
        </div>

        {/* Physical Scale & Dimensions (Clean Minimal Columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-[#2B211B]/15 pb-8 mb-10">
          <div>
            <span className="font-mono text-xs text-[#8A4F3D] uppercase block font-bold tracking-wider">Length</span>
            <span className="text-3xl font-serif font-bold text-[#2B211B] block mt-1">73.5 m</span>
            <span className="text-xs font-mono text-[#2B211B]/60 block mt-0.5">241 ft paws to tail</span>
          </div>
          <div>
            <span className="font-mono text-xs text-[#8A4F3D] uppercase block font-bold tracking-wider">Height</span>
            <span className="text-3xl font-serif font-bold text-[#2B211B] block mt-1">20.2 m</span>
            <span className="text-xs font-mono text-[#2B211B]/60 block mt-0.5">66 ft to crown</span>
          </div>
          <div>
            <span className="font-mono text-xs text-[#8A4F3D] uppercase block font-bold tracking-wider">Width</span>
            <span className="text-3xl font-serif font-bold text-[#2B211B] block mt-1">19.3 m</span>
            <span className="text-xs font-mono text-[#2B211B]/60 block mt-0.5">63 ft across haunches</span>
          </div>
          <div>
            <span className="font-mono text-xs text-[#8A4F3D] uppercase block font-bold tracking-wider">Quarry Context</span>
            <span className="text-3xl font-serif font-bold text-[#2B211B] block mt-1">In-Situ</span>
            <span className="text-xs font-mono text-[#2B211B]/60 block mt-0.5">Living limestone outcrop</span>
          </div>
        </div>

        {/* Featured Great Sphinx Geological Photograph (Clean Frame) */}
        <div className="relative aspect-[16/7] sm:aspect-[2.4/1] overflow-hidden rounded-xs shadow-lg mb-12">
          <img
            src={IMAGES.greatSphinx}
            alt="The Great Sphinx of Giza facing east in its limestone enclosure with Khafre's pyramid behind"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613]/90 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#D8C7A3]">
            <span className="drop-shadow">
              The Great Sphinx of Giza · In-Situ Yardang Carved from Member I, II, & III Mokattam Limestone
            </span>
            <span className="hidden sm:inline-block text-[#B49A72] drop-shadow">
              East-Facing Cardinal Orientation (089.5°)
            </span>
          </div>
        </div>

        {/* Geological Stratigraphy Visualizer */}
        <div className="border-t border-[#2B211B]/15 pt-8 mb-16">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2B211B]/15 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-widest">
                Geological Stratigraphy · Giza Mokattam Formation
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B211B] mt-1">
                The Three Members of the Sphinx Bedrock
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8A4F3D] font-bold">Select Strata Horizon To Inspect</span>
          </div>

          {/* Quick-Select Strata Buttons */}
          <div className="flex flex-wrap gap-2.5 mb-6 p-2 bg-[#2B211B]/5 border border-[#2B211B]/15">
            <button
              type="button"
              onClick={() => setActiveStratum('m3')}
              className={`px-3 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border ${
                activeStratum === 'm3'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs scale-102 ring-1 ring-[#8A4F3D]'
                  : 'bg-white/70 text-[#2B211B] border-transparent hover:border-[#8A4F3D]/50 hover:bg-white'
              }`}
            >
              Member III: Mokattam Head (Durable)
            </button>
            <button
              type="button"
              onClick={() => setActiveStratum('m2')}
              className={`px-3 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border ${
                activeStratum === 'm2'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs scale-102 ring-1 ring-[#8A4F3D]'
                  : 'bg-white/70 text-[#2B211B] border-transparent hover:border-[#8A4F3D]/50 hover:bg-white'
              }`}
            >
              Member II: Soft Marl & Body (Severe Erosion)
            </button>
            <button
              type="button"
              onClick={() => setActiveStratum('m1')}
              className={`px-3 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border ${
                activeStratum === 'm1'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs scale-102 ring-1 ring-[#8A4F3D]'
                  : 'bg-white/70 text-[#2B211B] border-transparent hover:border-[#8A4F3D]/50 hover:bg-white'
              }`}
            >
              Member I: Ditch Floor & Paws (Dense)
            </button>
          </div>

          {/* Interactive Stratigraphy Layer Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* SVG Visual Representation of the 3 strata */}
            <div className="lg:col-span-6 bg-[#1C1613] p-4 rounded-xs">
              <svg viewBox="0 0 500 280" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                {/* Stratum 3: Head (Member III) */}
                <g 
                  onClick={() => setActiveStratum('m3')} 
                  className="cursor-pointer transition-opacity hover:opacity-90"
                >
                  <rect 
                    x="240" y="30" width="120" height="60" rx="4" 
                    fill={activeStratum === 'm3' ? '#8A4F3D' : '#5C4A3E'} 
                    stroke="#D8C7A3" strokeWidth="1.5" 
                  />
                  <text x="300" y="65" fill="#F4EFE5" fontSize="12" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    MEMBER III (HEAD)
                  </text>
                  <text x="300" y="78" fill="#D8C7A3" fontSize="9" fontFamily="monospace" textAnchor="middle">
                    Hard Mokattam Bedrock
                  </text>
                </g>

                {/* Stratum 2: Body (Member II) - with coved undulating erosion */}
                <g 
                  onClick={() => setActiveStratum('m2')} 
                  className="cursor-pointer transition-opacity hover:opacity-90"
                >
                  <path 
                    d="M 60,110 
                       Q 100,105 150,110 Q 200,95 260,105 L 420,105 Q 450,115 470,160 
                       L 470,220 L 50,220 L 50,160 Z" 
                    fill={activeStratum === 'm2' ? '#B49A72' : '#45352B'} 
                    stroke={activeStratum === 'm2' ? '#F4EFE5' : '#D8C7A3'} 
                    strokeWidth="2" 
                  />
                  {/* Undulating horizontal fissures */}
                  <path d="M 70,135 Q 160,145 280,135 Q 380,142 450,135" stroke="#2B211B" strokeWidth="2" strokeDasharray="5 5" fill="none" />
                  <path d="M 60,165 Q 180,172 310,165 Q 400,170 460,165" stroke="#2B211B" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
                  <path d="M 65,195 Q 170,200 300,195 Q 390,202 465,195" stroke="#2B211B" strokeWidth="2" strokeDasharray="5 5" fill="none" />
                  <text x="250" y="155" fill="#171513" fontSize="13" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    MEMBER II (BODY & FLANKS)
                  </text>
                  <text x="250" y="180" fill="#2B211B" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    Soft Clay/Marl + Hard Limestone Alternations
                  </text>
                </g>

                {/* Stratum 1: Base (Member I) */}
                <g 
                  onClick={() => setActiveStratum('m1')} 
                  className="cursor-pointer transition-opacity hover:opacity-90"
                >
                  <rect 
                    x="30" y="225" width="450" height="35" 
                    fill={activeStratum === 'm1' ? '#8A4F3D' : '#33261F'} 
                    stroke="#D8C7A3" strokeWidth="1.5" 
                  />
                  <text x="255" y="247" fill="#F4EFE5" fontSize="11" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                    MEMBER I (DITCH FLOOR & LOWER PAWS)
                  </text>
                </g>
              </svg>
            </div>

            {/* Stratum Details */}
            <div className="lg:col-span-6">
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider block mb-1">
                Selected Geological Horizon
              </span>
              <h4 className="text-2xl font-serif font-bold text-[#2B211B] mb-3">
                {strataData[activeStratum].name}
              </h4>
              <div className="space-y-2 text-xs font-mono text-[#2B211B]/80 mb-4 border-y border-[#2B211B]/10 py-3">
                <p><strong className="text-[#2B211B]">Lithology:</strong> {strataData[activeStratum].rockType}</p>
                <p><strong className="text-[#2B211B]">Thickness:</strong> {strataData[activeStratum].depth}</p>
                <p><strong className="text-[#2B211B]">Weathering Profile:</strong> {strataData[activeStratum].erosionPattern}</p>
              </div>
              <p className="text-sm text-[#171513]/90 leading-relaxed">
                {strataData[activeStratum].notes}
              </p>
            </div>
          </div>
        </div>

        {/* The Age & Erosion Debate: Mainstream vs Water-Weathering (Open Layout) */}
        <div className="border-t border-[#2B211B]/15 pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2B211B]/15 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#8A4F3D] uppercase tracking-widest font-bold">
                Scientific Controversy Dossier // Chapter 10
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B211B] mt-1">
                How Old Is the Sphinx?
              </h3>
            </div>
            <EvidenceBadge level="DEBATED" onClick={() => onSelectEvidence('sphinx-water-erosion')} />
          </div>

          <div className="flex flex-wrap gap-2 p-1.5 bg-[#2B211B]/10 border border-[#2B211B]/20 mb-8 shadow-xs">
            <button
              type="button"
              onClick={() => setDebateSide('mainstream')}
              className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border flex-1 text-center ${
                debateSide === 'mainstream'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs scale-102 ring-1 ring-[#8A4F3D]'
                  : 'bg-white/60 text-[#2B211B] border-transparent hover:border-[#8A4F3D]/50 hover:bg-white'
              }`}
            >
              Mainstream Archaeological Consensus (c. 2540 BCE)
            </button>
            <button
              type="button"
              onClick={() => setDebateSide('waterHypothesis')}
              className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border flex-1 text-center ${
                debateSide === 'waterHypothesis'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs scale-102 ring-1 ring-[#8A4F3D]'
                  : 'bg-white/60 text-[#2B211B] border-transparent hover:border-[#8A4F3D]/50 hover:bg-white'
              }`}
            >
              Water Erosion Hypothesis (5000–9000+ BCE)
            </button>
          </div>

          {debateSide === 'mainstream' ? (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <span className="font-mono text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  Supported Consensus // Colin Reader, Mark Lehner, K. Lal Gauri, Zahi Hawass
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#2B211B] mb-3">
                  4th Dynasty Construction Under Khafre (c. 2558–2532 BCE)
                </h4>
                <div className="space-y-3 text-sm text-[#171513]/85 leading-relaxed">
                  <p>
                    <strong className="text-[#2B211B]">1. Direct Quarry & Temple Integration:</strong> Petrological core matching demonstrates that the 50-to-100 ton limestone megaliths used to build Khafre's Sphinx Temple and Valley Temple came directly from the ditch dug out around the Sphinx. The temples and Sphinx are an indivisible single construction phase.
                  </p>
                  <p>
                    <strong className="text-[#2B211B]">2. Salt Haloclasty & Episodic Rains:</strong> Geologist K. Lal Gauri proved that subsurface capillary moisture drawing dew and groundwater into Member II limestone causes salt crystals to repeatedly expand and burst the soft marl stone (haloclasty). Combined with periodic torrential desert flash floods during the Old Kingdom, this rapidly creates undulating rounded fissures within centuries.
                  </p>
                  <p>
                    <strong className="text-[#2B211B]">3. Absolute Total Absence of Pre-Dynastic Urbanism:</strong> If the Sphinx was carved between 7,000 and 10,000 BCE, where are the settlements, copper tools, pottery kilns, and cemeteries of the massive population required to quarry it? In 8,000 BCE, Egypt was inhabited purely by Epipalaeolithic hunter-gatherer bands.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <span className="font-mono text-xs font-bold text-[#8A4F3D] uppercase tracking-wider block mb-1">
                  Alternative Hypothesis // Robert Schoch (Boston University), John Anthony West
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#2B211B] mb-3">
                  Precipitation-Induced Water Weathering (5,000–9,000+ BCE)
                </h4>
                <div className="space-y-3 text-sm text-[#171513]/85 leading-relaxed">
                  <p>
                    <strong className="text-[#2B211B]">1. Undulating Vertical Runoff Profiles:</strong> Schoch argues that the rounded, undulating vertical gullying visible on the Sphinx enclosure wall and flanks could only be produced by prolonged, heavy rainfall sheet-wash, which last occurred in Egypt during the African Humid Period prior to the mid-4th millennium BCE.
                  </p>
                  <p>
                    <strong className="text-[#2B211B]">2. Subsurface Seismic Wave Velocity:</strong> Shallow seismic refraction surveys conducted by Thomas Dobecki showed deeper subsurface weathering depth at the front and sides of the Sphinx than behind its rump, interpreted by Schoch as evidence that the front was carved thousands of years earlier.
                  </p>
                  <p className="border-t border-b border-[#2B211B]/15 py-3 text-xs font-mono text-[#8A4F3D]">
                    <strong>Critical Archaeological Limitation:</strong> This hypothesis relies purely on geomorphology while ignoring the total absence of contemporary 7000 BCE artifacts, carbon-14 dates, or inscriptions anywhere in the Nile Valley.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
