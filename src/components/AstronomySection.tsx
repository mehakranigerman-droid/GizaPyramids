import React, { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';

export const AstronomySection: React.FC = () => {
  const [alignmentMethod, setAlignmentMethod] = useState<'spence' | 'dash'>('spence');

  return (
    <section id="astronomy" className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              06 · Celestial Orientation
            </span>
            <EvidenceBadge level="ESTABLISHED" as="span" surface="dark" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            Archaeoastronomy
          </h1>
          <p className="text-sm sm:text-base text-[#D8C7A3] max-w-2xl mt-2.5 leading-relaxed">
            Khufu’s 230-meter base aligns within 3′ 38″ of true astronomical north.
          </p>
        </header>

        {/* ================= 3 KEY CONCEPTS ================= */}
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#B49A72]/20 pb-10 mb-10">
          <div>
            <dt className="font-mono text-xs text-[#E8C56E] uppercase font-bold tracking-wider">True North Precision</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">3′ 38″</dd>
            <dd className="text-xs text-[#D8C7A3] mt-1">Under 1/15th of a single degree.</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-[#E8C56E] uppercase font-bold tracking-wider">Imperishable Stars</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1">Ikhemu-sek</dd>
            <dd className="text-xs text-[#D8C7A3] mt-1">Circumpolar northern stars that never set.</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-[#E8C56E] uppercase font-bold tracking-wider">Southern Sky</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1">Sah & Sopdet</dd>
            <dd className="text-xs text-[#D8C7A3] mt-1">Orion (Osiris) and Sirius (Isis).</dd>
          </div>
        </dl>

        {/* ================= FINDING TRUE NORTH ================= */}
        <div className="border-b border-[#B49A72]/20 pb-10 mb-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-7">
            <h2 className="text-2xl font-serif font-bold text-[#F4EFE5]">
              How They Found True North
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
              <div className="space-y-3 text-sm text-[#E2D2B4] leading-relaxed">
                <span className="font-mono text-xs text-emerald-300 font-semibold uppercase tracking-wider block">
                  Dr. Kate Spence · Nature (2000)
                </span>
                <h3 className="font-serif text-xl font-bold text-[#F4EFE5]">
                  Kochab & Mizar Plumb Transit
                </h3>
                <p>
                  Sighting a vertical plumb cord across two opposite circumpolar stars—<strong className="text-[#F4EFE5]">Kochab</strong> and <strong className="text-[#F4EFE5]">Mizar</strong>—marked true north and explains tiny generational orientation drifts via precession.
                </p>
              </div>

              <div className="bg-[#140F0B] p-5 text-center">
                <svg viewBox="0 0 360 200" className="w-full h-auto mx-auto">
                  <circle cx="180" cy="100" r="74" stroke="#B49A72" strokeWidth="0.6" strokeDasharray="3 3" fill="none" />
                  <circle cx="180" cy="100" r="3" fill="#C97B63" />
                  <text x="190" y="103" fill="#C97B63" fontSize="9" fontFamily="monospace">Celestial Pole</text>
                  <line x1="180" y1="16" x2="180" y2="184" stroke="#D8C7A3" strokeWidth="1.5" />
                  <circle cx="180" cy="28" r="4" fill="#F3D37A" />
                  <text x="195" y="31" fill="#F4EFE5" fontSize="10" fontFamily="Cinzel" fontWeight="bold">MIZAR</text>
                  <circle cx="180" cy="172" r="4" fill="#F3D37A" />
                  <text x="195" y="175" fill="#F4EFE5" fontSize="10" fontFamily="Cinzel" fontWeight="bold">KOCHAB</text>
                </svg>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-3 text-sm text-[#E2D2B4] leading-relaxed">
                <span className="font-mono text-xs text-emerald-300 font-semibold uppercase tracking-wider block">
                  Glen Dash · JEA (2017)
                </span>
                <h3 className="font-serif text-xl font-bold text-[#F4EFE5]">
                  Autumnal Equinox Gnomon
                </h3>
                <p>
                  Connecting two intersections where a vertical rod’s shadow crosses a leveled circle at the equinox traces an east–west chord matching Giza’s slight counterclockwise rotation.
                </p>
              </div>

              <div className="bg-[#140F0B] p-5 text-center">
                <svg viewBox="0 0 360 200" className="w-full h-auto mx-auto">
                  <circle cx="180" cy="100" r="66" stroke="#B49A72" strokeWidth="0.8" fill="none" />
                  <circle cx="180" cy="100" r="5" fill="#F3D37A" />
                  <text x="180" y="86" fill="#D8C7A3" fontSize="9" fontFamily="monospace" textAnchor="middle">Gnomon</text>
                  <path d="M 90,130 Q 180,55 270,130" stroke="#C97B63" strokeWidth="2" fill="none" />
                  <line x1="90" y1="130" x2="270" y2="130" stroke="#D8C7A3" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="180" y="152" fill="#F4EFE5" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    East–West Equinox Chord
                  </text>
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* ================= ORION CORRELATION CRITIQUE ================= */}
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-6">
            <h2 className="text-2xl font-serif font-bold text-[#F4EFE5]">
              Orion Correlation Debate
            </h2>
            <EvidenceBadge level="DEBATED" as="span" surface="dark" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#E2D2B4] leading-relaxed">
            <div>
              <span className="font-mono text-xs text-[#E8C56E] uppercase font-bold tracking-wider block mb-1.5">
                Claim (Bauval, 1994)
              </span>
              <p>
                Suggests the offset trio of Khufu, Khafre, and Menkaure mirrors Orion’s three belt stars around 10,500 BCE.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-[#F3D37A] uppercase font-bold tracking-wider block mb-1.5">
                Astronomical Critique
              </span>
              <p>
                Matching Giza north-to-south to Orion flips sky and ground upside-down, lacks Old Kingdom textual proof, and ignores Djedefre’s move to Abu Rawash.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
