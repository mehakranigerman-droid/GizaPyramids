import React, { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';

export const AstronomySection: React.FC = () => {
  const [alignmentMethod, setAlignmentMethod] = useState<'spence' | 'dash'>('spence');

  return (
    <section id="astronomy" className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-6 mb-9">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              07 · Celestial Orientation
            </span>
            <EvidenceBadge level="ESTABLISHED" as="span" surface="dark" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            Archaeoastronomy
          </h1>
          <p className="font-serif-text italic text-base sm:text-lg text-[#D8C7A3] mt-1.5">
            True astronomical north alignment within 0.06° across 230 meters of masonry
          </p>
        </header>

        {/* ================= TRUE NORTH ANGULAR PRECISION + 3 KPIs ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[#B49A72]/20 pb-10 mb-10">
          <div className="md:col-span-5 bg-[#140F0B] p-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#E8C56E] block mb-1.5">
              Angular Offset Visualization (Exaggerated)
            </span>
            <svg viewBox="0 0 280 140" className="w-full h-auto">
              {/* True North axis */}
              <line x1="140" y1="125" x2="140" y2="15" stroke="#B49A72" strokeWidth="1" strokeDasharray="3 3" />
              <text x="140" y="12" fill="#D8C7A3" fontSize="9" fontFamily="monospace" textAnchor="middle">True North (0°)</text>
              {/* Khufu Axis */}
              <line x1="140" y1="125" x2="128" y2="20" stroke="#F3D37A" strokeWidth="2.2" />
              <circle cx="140" cy="125" r="3" fill="#E8C56E" />
              <path d="M 140,65 A 60,60 0 0 0 133,66" fill="none" stroke="#C97B63" strokeWidth="2" />
              <text x="116" y="45" fill="#F3D37A" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="end">3′ 38″ W</text>
              <text x="116" y="58" fill="#E2D2B4" fontSize="9" fontFamily="monospace" textAnchor="end">&lt; 24 cm / 230 m</text>
            </svg>
          </div>

          <dl className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <dt className="font-mono text-[11px] text-[#E8C56E] uppercase font-bold tracking-wider">North Error</dt>
              <dd className="text-3xl font-serif font-bold text-[#F3D37A] mt-1 tabular-nums">3′ 38″</dd>
              <dd className="text-xs text-[#D8C7A3] mt-1">1/15th of a single degree.</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] text-[#E8C56E] uppercase font-bold tracking-wider">Northern Sky</dt>
              <dd className="text-2xl font-serif font-bold text-[#F4EFE5] mt-1">Ikhemu-sek</dd>
              <dd className="text-xs text-[#D8C7A3] mt-1">Undying circumpolar stars.</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] text-[#E8C56E] uppercase font-bold tracking-wider">Southern Sky</dt>
              <dd className="text-2xl font-serif font-bold text-[#F4EFE5] mt-1">Sah & Sopdet</dd>
              <dd className="text-xs text-[#D8C7A3] mt-1">Orion (Osiris) & Sirius (Isis).</dd>
            </div>
          </dl>
        </div>

        {/* ================= FINDING TRUE NORTH ================= */}
        <div className="border-b border-[#B49A72]/20 pb-10 mb-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-7">
            <h2 className="text-2xl font-serif font-bold text-[#F4EFE5]">
              Survey Methods
            </h2>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
              <button
                type="button"
                onClick={() => setAlignmentMethod('spence')}
                className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap ${
                  alignmentMethod === 'spence'
                    ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                    : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                }`}
              >
                Stellar Transit (Spence)
              </button>
              <button
                type="button"
                onClick={() => setAlignmentMethod('dash')}
                className={`pb-1 cursor-pointer border-b-2 transition-colors whitespace-nowrap ${
                  alignmentMethod === 'dash'
                    ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                    : 'border-transparent text-[#E2D2B4]/75 hover:text-[#F4EFE5]'
                }`}
              >
                Solar Gnomon (Dash)
              </button>
            </div>
          </div>

          {alignmentMethod === 'spence' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-2.5 text-sm text-[#E2D2B4] leading-relaxed">
                <span className="font-mono text-[11px] text-[#84B89A] font-medium uppercase tracking-[0.14em] block">
                  Kate Spence · Nature (2000)
                </span>
                <h3 className="font-serif text-xl font-bold text-[#F4EFE5]">
                  Kochab & Mizar Plumb Transit
                </h3>
                <p>
                  Sighting a plumb line across <strong className="text-[#F4EFE5]">Kochab</strong> and <strong className="text-[#F4EFE5]">Mizar</strong> pinpoints true north and predicts generational pyramid drift via precession.
                </p>
              </div>

              <div className="bg-[#140F0B] p-5 text-center">
                <svg viewBox="0 0 360 190" className="w-full h-auto mx-auto">
                  <circle cx="180" cy="95" r="70" stroke="#B49A72" strokeWidth="0.6" strokeDasharray="3 3" fill="none" />
                  <circle cx="180" cy="95" r="3" fill="#C97B63" />
                  <text x="190" y="98" fill="#C97B63" fontSize="9" fontFamily="monospace">Celestial Pole</text>
                  <line x1="180" y1="15" x2="180" y2="175" stroke="#D8C7A3" strokeWidth="1.5" />
                  <circle cx="180" cy="27" r="4" fill="#F3D37A" />
                  <text x="195" y="30" fill="#F4EFE5" fontSize="10" fontFamily="Cinzel" fontWeight="bold">MIZAR</text>
                  <circle cx="180" cy="163" r="4" fill="#F3D37A" />
                  <text x="195" y="166" fill="#F4EFE5" fontSize="10" fontFamily="Cinzel" fontWeight="bold">KOCHAB</text>
                </svg>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-2.5 text-sm text-[#E2D2B4] leading-relaxed">
                <span className="font-mono text-[11px] text-[#84B89A] font-medium uppercase tracking-[0.14em] block">
                  Glen Dash · JEA (2017)
                </span>
                <h3 className="font-serif text-xl font-bold text-[#F4EFE5]">
                  Autumnal Equinox Gnomon
                </h3>
                <p>
                  Linking shadow intersections across a leveled circle on the equinox yields an east–west chord matching Giza’s slight rotation.
                </p>
              </div>

              <div className="bg-[#140F0B] p-5 text-center">
                <svg viewBox="0 0 360 190" className="w-full h-auto mx-auto">
                  <circle cx="180" cy="95" r="64" stroke="#B49A72" strokeWidth="0.8" fill="none" />
                  <circle cx="180" cy="95" r="5" fill="#F3D37A" />
                  <text x="180" y="80" fill="#D8C7A3" fontSize="9" fontFamily="monospace" textAnchor="middle">Gnomon</text>
                  <path d="M 90,125 Q 180,52 270,125" stroke="#C97B63" strokeWidth="2" fill="none" />
                  <line x1="90" y1="125" x2="270" y2="125" stroke="#D8C7A3" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="180" y="148" fill="#F4EFE5" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    East–West Equinox Chord
                  </text>
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* ================= ORION SPATIAL INVERSION SVG ================= */}
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-6">
            <h2 className="text-2xl font-serif font-bold text-[#F4EFE5]">
              Orion Correlation Debate
            </h2>
            <EvidenceBadge level="DEBATED" as="span" surface="dark" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 bg-[#140F0B] p-5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#E8C56E] block mb-2">
                Krupp Spatial Inversion Critique
              </span>
              <svg viewBox="0 0 380 145" className="w-full h-auto">
                {/* Left: Giza Ground */}
                <text x="90" y="18" fill="#E8C56E" fontSize="10" fontFamily="monospace" textAnchor="middle">GIZA GROUND (N↑)</text>
                <rect x="65" y="34" width="16" height="16" fill="#F3D37A" />
                <text x="90" y="45" fill="#F4EFE5" fontSize="9" fontFamily="monospace">Khufu (N)</text>
                <rect x="52" y="68" width="14" height="14" fill="#B49A72" />
                <text x="74" y="79" fill="#D8C7A3" fontSize="9" fontFamily="monospace">Khafre</text>
                <rect x="44" y="102" width="10" height="10" fill="#C97B63" />
                <text x="64" y="111" fill="#D8C7A3" fontSize="9" fontFamily="monospace">Menkaure (S)</text>

                {/* Divider */}
                <line x1="190" y1="15" x2="190" y2="130" stroke="#B49A72" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

                {/* Right: Orion Sky */}
                <text x="290" y="18" fill="#C97B63" fontSize="10" fontFamily="monospace" textAnchor="middle">ORION BELT (INVERTED)</text>
                <circle cx="265" cy="108" r="5" fill="#F3D37A" />
                <text x="278" y="111" fill="#F4EFE5" fontSize="9" fontFamily="monospace">Alnitak (S)</text>
                <circle cx="288" cy="75" r="5" fill="#B49A72" />
                <text x="301" y="78" fill="#D8C7A3" fontSize="9" fontFamily="monospace">Alnilam</text>
                <circle cx="310" cy="40" r="4" fill="#C97B63" />
                <text x="321" y="44" fill="#D8C7A3" fontSize="9" fontFamily="monospace">Mintaka (N)</text>
              </svg>
            </div>

            <div className="md:col-span-6 space-y-3 text-sm text-[#E2D2B4] leading-relaxed">
              <p>
                <strong className="text-[#E8C56E] font-mono text-xs uppercase tracking-wider block">Claim (Bauval, 1994)</strong>
                Proposes Giza mirrors Orion’s Belt stars c. 10,500 BCE.
              </p>
              <p>
                <strong className="text-[#C97B63] font-mono text-xs uppercase tracking-wider block">Astronomical Flaw</strong>
                Matching Khufu (north) to Alnitak (south) flips north/south upside-down and ignores Djedefre’s move to Abu Rawash.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
