import React, { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';

interface AstronomySectionProps {
  onSelectEvidence: (claimId: string) => void;
}

export const AstronomySection: React.FC<AstronomySectionProps> = ({ onSelectEvidence }) => {
  const [alignmentMethod, setAlignmentMethod] = useState<'spence' | 'dash'>('spence');
  const [orionPerspective, setOrionPerspective] = useState<'ground' | 'sky'>('ground');

  return (
    <section id="astronomy" className="py-20 bg-[#2B211B] bg-surveyor-grid-dark text-[#F4EFE5] border-b border-[#8A4F3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="border-b border-[#B49A72]/40 pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
                Chapter 06 & 07 // Archaeoastronomy & Celestial Geometry
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F4EFE5] mt-1">
                Look Up: The Celestial Alignment
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('cardinal-alignment')} />
              <EvidenceBadge level="DEBATED" onClick={() => onSelectEvidence('orion-correlation-theory')} />
            </div>
          </div>
          <p className="text-base text-[#D8C7A3] max-w-3xl mt-3 leading-relaxed">
            The Great Pyramid features the most precise cardinal orientation of any ancient stone structure on Earth. How was this achieved, and does the terrestrial layout reflect a deliberate stellar map of the constellation Orion?
          </p>
        </div>

        {/* 1. Cardinal Precision Statistics (Clean Open Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#B49A72]/20 pb-10 mb-12">
          <div>
            <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider block mb-1">
              Astronomical Precision
            </span>
            <div className="text-3xl font-serif font-bold text-[#F4EFE5] my-1">
              3' 38" of Arc
            </div>
            <p className="text-xs text-[#D8C7A3] leading-relaxed font-mono mt-2">
              The baseline deviates from true astronomical north by less than 4 minutes of arc—a discrepancy under <strong>1/15th of a single degree</strong>.
            </p>
          </div>

          <div>
            <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider block mb-1">
              The "Imperishable Stars"
            </span>
            <div className="text-2xl font-serif font-bold text-[#F4EFE5] my-1">
              Ikhemu-sek
            </div>
            <p className="text-xs text-[#D8C7A3] leading-relaxed mt-2">
              Egyptian religious cosmology venerated the northern circumpolar stars that never dip below the horizon as the eternal resting place of the Pharaoh's soul.
            </p>
          </div>

          <div>
            <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider block mb-1">
              Southern Sky Deity
            </span>
            <div className="text-2xl font-serif font-bold text-[#F4EFE5] my-1">
              Sah & Sopdet
            </div>
            <p className="text-xs text-[#D8C7A3] leading-relaxed mt-2">
              Sah was the divine celestial embodiment of Osiris (Orion), lord of rebirth and eternity; Sopdet was Isis (Sirius), whose morning rising heralded the Nile flood.
            </p>
          </div>
        </div>

        {/* 2. Alignment Methods Comparison: Spence vs Dash (Open Layout) */}
        <div className="border-b border-[#B49A72]/20 pb-14 mb-14">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-4 mb-8">
            <div>
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-widest">
                Scientific Observational Modeling
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4EFE5] mt-1">
                How Did Egyptian Priests Find True North?
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 p-1 bg-[#1C1613] border border-[#B49A72]/30 shadow-xs">
              <button
                type="button"
                onClick={() => setAlignmentMethod('spence')}
                className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border ${
                  alignmentMethod === 'spence'
                    ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs scale-102 ring-1 ring-[#8A4F3D]'
                    : 'bg-transparent text-[#D8C7A3] border-transparent hover:border-[#8A4F3D]/50 hover:bg-white/5'
                }`}
              >
                Stellar Simultaneous Transit (Spence)
              </button>
              <button
                type="button"
                onClick={() => setAlignmentMethod('dash')}
                className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border ${
                  alignmentMethod === 'dash'
                    ? 'bg-[#8A4F3D] text-[#F4EFE5] border-[#8A4F3D] font-bold shadow-xs scale-102 ring-1 ring-[#8A4F3D]'
                    : 'bg-transparent text-[#D8C7A3] border-transparent hover:border-[#8A4F3D]/50 hover:bg-white/5'
                }`}
              >
                Solar Gnomon Method (Dash)
              </button>
            </div>
          </div>

          {alignmentMethod === 'spence' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fadeIn">
              <div className="space-y-4 text-sm text-[#D8C7A3] leading-relaxed">
                <span className="inline-block text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                  Published in Nature (2000) · Dr. Kate Spence (Cambridge)
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#F4EFE5]">
                  The Kochab & Mizar Vertical Transit
                </h4>
                <p>
                  In 2500 BCE, Polaris was not the North Star (Thuban in Draco was near the pole, but too faint for high precision).
                </p>
                <p>
                  Spence demonstrated that ancient astronomers sighted a weighted plumb line (merkhet) suspended between two bright circumpolar stars on opposite sides of the true celestial pole: <strong>Kochab</strong> (in Ursa Minor) and <strong>Mizar</strong> (in Ursa Major).
                </p>
                <p className="border-l-2 border-[#8A4F3D] pl-4 py-1 text-xs font-mono text-[#F4EFE5]">
                  When a vertical plumb line aligned both stars simultaneously, the line pointed with astonishing accuracy to true celestial north.
                </p>
              </div>

              {/* Diagram */}
              <div className="bg-[#1C1613] p-6 rounded-xs text-center">
                <svg viewBox="0 0 360 220" className="w-full h-auto mx-auto">
                  <circle cx="180" cy="110" r="80" stroke="#B49A72" strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
                  <circle cx="180" cy="110" r="3" fill="#8A4F3D" />
                  <text x="190" y="113" fill="#8A4F3D" fontSize="9" fontFamily="monospace">True Celestial Pole</text>

                  {/* Vertical Plumb Line */}
                  <line x1="180" y1="20" x2="180" y2="200" stroke="#D8C7A3" strokeWidth="1.5" />
                  
                  {/* Star Mizar */}
                  <circle cx="180" cy="35" r="4" fill="#F4EFE5" />
                  <text x="195" y="38" fill="#F4EFE5" fontSize="10" fontFamily="Cinzel" fontWeight="bold">MIZAR</text>

                  {/* Star Kochab */}
                  <circle cx="180" cy="185" r="4" fill="#F4EFE5" />
                  <text x="195" y="188" fill="#F4EFE5" fontSize="10" fontFamily="Cinzel" fontWeight="bold">KOCHAB</text>
                </svg>
                <span className="text-[11px] font-mono text-[#D8C7A3]/70 block mt-2">
                  Simultaneous vertical transit sighting across the North Celestial Pole
                </span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fadeIn">
              <div className="space-y-4 text-sm text-[#D8C7A3] leading-relaxed">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  Published in Journal of Egyptian Archaeology (2017) by Glen Dash
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#F4EFE5]">
                  The Indian Circle / Autumnal Equinox Method
                </h4>
                <p>
                  Archaeologist and engineer Glen Dash demonstrated that a simple vertical wooden rod (gnomon) placed on a leveled platform during the autumnal equinox casts a shadow whose tip traces a smooth hyperbolic curve.
                </p>
                <p>
                  Connecting two equal-radius points where the shadow intersects a circle creates an almost flawless east-west line.
                </p>
                <p className="border-l-2 border-[#8A4F3D] pl-4 py-1 text-xs font-mono text-[#F4EFE5]">
                  Crucially, this method naturally produces the exact minute counterclockwise error (approx 3 to 4 minutes of arc) observed on all three Giza pyramids.
                </p>
              </div>

              {/* Diagram */}
              <div className="bg-[#1C1613] p-6 rounded-xs text-center">
                <svg viewBox="0 0 360 220" className="w-full h-auto mx-auto">
                  <circle cx="180" cy="110" r="70" stroke="#B49A72" strokeWidth="0.8" fill="none" />
                  <circle cx="180" cy="110" r="5" fill="#D8C7A3" />
                  <text x="180" y="100" fill="#D8C7A3" fontSize="9" fontFamily="monospace" textAnchor="middle">Gnomon Rod</text>
                  
                  {/* Shadow curve */}
                  <path d="M 90,140 Q 180,60 270,140" stroke="#8A4F3D" strokeWidth="2" fill="none" />
                  <line x1="90" y1="140" x2="270" y2="140" stroke="#D8C7A3" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="180" y="160" fill="#F4EFE5" fontSize="10" fontFamily="monospace" textAnchor="middle">True East-West Equinox Baseline</text>
                </svg>
                <span className="text-[11px] font-mono text-[#D8C7A3]/70 block mt-2">
                  Shadow intersection method explaining the slight counterclockwise rotation
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 3. Orion: Pattern or Intention? (The Orion Correlation Theory - Open Layout) */}
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-4 mb-8">
            <div>
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-widest">
                Chapter 07 // Astronomical Investigation
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4EFE5] mt-1">
                Orion: Pattern or Intention?
              </h3>
            </div>
            <EvidenceBadge level="DEBATED" onClick={() => onSelectEvidence('orion-correlation-theory')} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
            {/* The Claim */}
            <div>
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-wider block mb-2">
                The Orion Correlation Hypothesis (Bauval & Gilbert, 1994)
              </span>
              <p className="text-sm text-[#D8C7A3] leading-relaxed mb-4">
                Proposes that the relative positioning and brightness of the three Giza pyramids correspond directly to the three belt stars of Orion (Alnitak, Alnilam, and Mintaka). Because Menkaure is smaller and offset from the Khufu-Khafre axis—just as Mintaka is dimmer and offset from the other two stars—proponents argue it constitutes an intentional astrological map.
              </p>
              <div className="border-l-2 border-[#8A4F3D] pl-4 py-1 text-xs font-mono text-[#F4EFE5]">
                Later claimed to match the sky as it appeared at its lowest precessional point in <strong>10,500 BCE</strong>.
              </div>
            </div>

            {/* The Rigorous Astronomical & Textual Critique */}
            <div>
              <span className="font-mono text-xs text-amber-400 uppercase font-bold tracking-wider block mb-2">
                Scientific & Egyptological Critiques
              </span>
              <div className="space-y-4 text-xs text-[#D8C7A3] leading-relaxed">
                <div>
                  <strong className="text-[#F4EFE5] block">1. The Spatial Inversion (The Krupp Critique):</strong>
                  As astronomer Dr. Edwin Krupp demonstrated, when facing south to view Orion in the sky, Mintaka is on the right (West). But on the Giza plateau, Menkaure is in the Southwest. To make the map overlay the stars, one must flip the constellation upside-down or invert North and South.
                </div>
                <div>
                  <strong className="text-[#F4EFE5] block">2. Complete Lack of Old Kingdom Textual Evidence:</strong>
                  While Orion (Sah) is associated with Osiris in later Pyramid Texts (Dynasty 5/6), zero 4th Dynasty inscriptions identify the three pyramids as an earthly representation of the three belt stars.
                </div>
                <div>
                  <strong className="text-[#F4EFE5] block">3. Djedefre's Missing Pyramid:</strong>
                  If Giza was built as an inviolable three-star map, why did Khufu's direct successor Djedefre abandon Giza and build at Abu Rawash?
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#B49A72]/20 text-xs font-mono text-[#D8C7A3] flex items-center gap-3">
            <span className="text-[#8A4F3D] text-lg font-bold">!</span>
            <span>
              <strong>Editorial Guidance:</strong> Visual similarity alone does not constitute intentional design. In the absence of contemporary textual corroboration and given the severe spatial inversions, the Orion Correlation Theory remains classified as <strong>DEBATED / UNPROVEN</strong>.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
