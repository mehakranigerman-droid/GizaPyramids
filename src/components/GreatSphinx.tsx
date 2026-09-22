import React, { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';
import { Layers, Mountain, AlertCircle, HelpCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

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

        {/* Physical Scale & Dimensions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#EFE7DA] p-4 border border-[#D8C7A3]">
            <span className="font-mono text-xs text-[#8A4F3D] uppercase block font-bold">Length</span>
            <span className="text-2xl font-serif font-bold text-[#2B211B]">73.5 meters</span>
            <span className="text-[11px] font-mono text-[#2B211B]/70 block">241 feet from paws to tail</span>
          </div>
          <div className="bg-[#EFE7DA] p-4 border border-[#D8C7A3]">
            <span className="font-mono text-xs text-[#8A4F3D] uppercase block font-bold">Height</span>
            <span className="text-2xl font-serif font-bold text-[#2B211B]">20.2 meters</span>
            <span className="text-[11px] font-mono text-[#2B211B]/70 block">66 feet to crown of head</span>
          </div>
          <div className="bg-[#EFE7DA] p-4 border border-[#D8C7A3]">
            <span className="font-mono text-xs text-[#8A4F3D] uppercase block font-bold">Width</span>
            <span className="text-2xl font-serif font-bold text-[#2B211B]">19.3 meters</span>
            <span className="text-[11px] font-mono text-[#2B211B]/70 block">63 feet across haunches</span>
          </div>
          <div className="bg-[#EFE7DA] p-4 border border-[#D8C7A3]">
            <span className="font-mono text-xs text-[#8A4F3D] uppercase block font-bold">Quarry Context</span>
            <span className="text-2xl font-serif font-bold text-[#2B211B]">In-Situ Bedrock</span>
            <span className="text-[11px] font-mono text-[#2B211B]/70 block">Carved within deep ditch cut</span>
          </div>
        </div>

        {/* Geological Stratigraphy Visualizer */}
        <div className="bg-[#2B211B] text-[#F4EFE5] border-2 border-[#B49A72] p-6 sm:p-8 mb-12 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#B49A72]/40 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-widest flex items-center gap-2">
                <Mountain className="w-4 h-4 text-[#8A4F3D]" /> Geological Stratigraphy // Giza Mokattam Formation
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#F4EFE5] mt-1">
                The Three Members of the Sphinx Bedrock
              </h3>
            </div>
            <span className="text-xs font-mono text-[#D8C7A3]">Select Stratum to Inspect</span>
          </div>

          {/* Interactive Stratigraphy Layer Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* SVG Visual Representation of the 3 strata */}
            <div className="lg:col-span-6 bg-[#171513] p-4 border border-[#B49A72]/30">
              <svg viewBox="0 0 500 280" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                {/* Stratum 3: Head (Member III) */}
                <g 
                  onClick={() => setActiveStratum('m3')} 
                  className="cursor-pointer transition-opacity hover:opacity-90"
                >
                  <rect 
                    x="240" y="30" width="120" height="60" rx="6" 
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

            {/* Stratum Details Card */}
            <div className="lg:col-span-6 bg-[#171513] p-5 border border-[#B49A72]/40">
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold block mb-1">
                Selected Geological Horizon
              </span>
              <h4 className="text-xl font-serif font-bold text-[#F4EFE5] mb-2">
                {strataData[activeStratum].name}
              </h4>
              <div className="space-y-2 text-xs font-mono text-[#D8C7A3] mb-4">
                <p><strong>Lithology:</strong> {strataData[activeStratum].rockType}</p>
                <p><strong>Thickness:</strong> {strataData[activeStratum].depth}</p>
                <p><strong>Weathering Profile:</strong> {strataData[activeStratum].erosionPattern}</p>
              </div>
              <p className="text-sm text-[#F4EFE5] bg-[#241B16] p-3.5 border-l-2 border-[#8A4F3D] leading-relaxed">
                {strataData[activeStratum].notes}
              </p>
            </div>
          </div>
        </div>

        {/* The Age & Erosion Debate: Mainstream vs Water-Weathering */}
        <div className="bg-[#EFE7DA] border border-[#B49A72] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8C7A3] pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#8A4F3D] uppercase tracking-widest font-bold">
                Scientific Controversy Dossier // Chapter 10
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B211B] mt-1">
                How Old Is the Sphinx?
              </h3>
            </div>
            <EvidenceBadge level="DEBATED" onClick={() => onSelectEvidence('sphinx-water-erosion')} />
          </div>

          <div className="flex gap-2 mb-6">
            <button
              type="button"
              onClick={() => setDebateSide('mainstream')}
              className={`px-4 py-2 text-xs font-mono uppercase font-bold tracking-wider transition-colors cursor-pointer ${
                debateSide === 'mainstream'
                  ? 'bg-[#2B211B] text-[#F4EFE5]'
                  : 'bg-[#F4EFE5] text-[#2B211B] hover:bg-[#D8C7A3]'
              }`}
            >
              Mainstream Geological & Archaeological Consensus (c. 2540 BCE)
            </button>
            <button
              type="button"
              onClick={() => setDebateSide('waterHypothesis')}
              className={`px-4 py-2 text-xs font-mono uppercase font-bold tracking-wider transition-colors cursor-pointer ${
                debateSide === 'waterHypothesis'
                  ? 'bg-[#8A4F3D] text-[#F4EFE5]'
                  : 'bg-[#F4EFE5] text-[#2B211B] hover:bg-[#D8C7A3]'
              }`}
            >
              Water Erosion Alternative Hypothesis (Schoch & West, 5000–9000+ BCE)
            </button>
          </div>

          {debateSide === 'mainstream' ? (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-[#F4EFE5] p-5 border-l-4 border-emerald-700">
                <span className="font-mono text-xs font-bold text-emerald-800 uppercase block mb-1">
                  Supported Consensus // Colin Reader, Mark Lehner, K. Lal Gauri, Zahi Hawass
                </span>
                <h4 className="font-serif text-lg font-bold text-[#2B211B] mb-2">
                  4th Dynasty Construction Under Khafre (c. 2558–2532 BCE)
                </h4>
                <div className="space-y-2.5 text-sm text-[#171513] leading-relaxed">
                  <p>
                    <strong>1. Direct Quarry & Temple Integration:</strong> Petrological core matching demonstrates that the 50-to-100 ton limestone megaliths used to build Khafre's Sphinx Temple and Valley Temple came directly from the ditch dug out around the Sphinx. The temples and Sphinx are an indivisible single construction phase.
                  </p>
                  <p>
                    <strong>2. Salt Haloclasty & Episodic Rains:</strong> Geologist K. Lal Gauri proved that subsurface capillary moisture drawing dew and groundwater into Member II limestone causes salt crystals to repeatedly expand and burst the soft marl stone (haloclasty). Combined with periodic torrential desert flash floods during the Old Kingdom, this rapidly creates undulating rounded fissures within centuries.
                  </p>
                  <p>
                    <strong>3. Absolute Total Absence of Pre-Dynastic Urbanism:</strong> If the Sphinx was carved between 7,000 and 10,000 BCE, where are the settlements, copper tools, pottery kilns, and cemeteries of the massive population required to quarry it? In 8,000 BCE, Egypt was inhabited purely by Epipalaeolithic hunter-gatherer bands.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-[#F4EFE5] p-5 border-l-4 border-amber-600">
                <span className="font-mono text-xs font-bold text-amber-800 uppercase block mb-1">
                  Alternative Hypothesis // Robert Schoch (Boston University), John Anthony West
                </span>
                <h4 className="font-serif text-lg font-bold text-[#2B211B] mb-2">
                  Precipitation-Induced Water Weathering (5,000–9,000+ BCE)
                </h4>
                <div className="space-y-2.5 text-sm text-[#171513] leading-relaxed">
                  <p>
                    <strong>1. Undulating Vertical Runoff Profiles:</strong> Schoch argues that the rounded, undulating vertical gullying visible on the Sphinx enclosure wall and flanks could only be produced by prolonged, heavy rainfall sheet-wash, which last occurred in Egypt during the African Humid Period prior to the mid-4th millennium BCE.
                  </p>
                  <p>
                    <strong>2. Subsurface Seismic Wave Velocity:</strong> Shallow seismic refraction surveys conducted by Thomas Dobecki showed deeper subsurface weathering depth at the front and sides of the Sphinx than behind its rump, interpreted by Schoch as evidence that the front was carved thousands of years earlier.
                  </p>
                  <p className="bg-[#EFE7DA] p-3 text-xs font-mono text-[#8A4F3D]">
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
