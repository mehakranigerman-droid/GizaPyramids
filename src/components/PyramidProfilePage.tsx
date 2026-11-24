import React, { useState } from 'react';
import { PYRAMIDS, DYNASTY_CHRONOLOGY } from '../data/pyramidsData';
import { EvidenceBadge } from './EvidenceBadge';

interface PyramidProfilePageProps {
  pyramidId: 'khafre' | 'menkaure';
}

export const PyramidProfilePage: React.FC<PyramidProfilePageProps> = ({ pyramidId }) => {
  const [metricUnit, setMetricUnit] = useState<'meters' | 'feet'>('meters');
  const pyramid = PYRAMIDS.find((p) => p.id === pyramidId) || PYRAMIDS[1];

  const isKhafre = pyramidId === 'khafre';
  const pageNumber = isKhafre ? '03' : '04';
  const dynastyFilter = isKhafre ? ['Djedefre', 'Khafre'] : ['Menkaure', 'Shepseskaf'];
  const dynastyContext = DYNASTY_CHRONOLOGY.filter((g) => dynastyFilter.includes(g.pharaoh));

  const mToFt = (m: number) => (m * 3.28084).toFixed(1);
  const volumeSharePct = isKhafre ? '85%' : '9%';

  return (
    <section className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-6 mb-9">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              {pageNumber} · {pyramid.reignPeriod}
            </span>
            <EvidenceBadge level="ESTABLISHED" as="span" surface="dark" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            {pyramid.name}
          </h1>
          <p className="font-serif-text italic text-base sm:text-lg text-[#D8C7A3] mt-1.5">
            {pyramid.arabicName} ·{' '}
            {isKhafre
              ? 'Elevated +10 m bedrock knoll & intact Tura apex cap'
              : 'Stepped scale shift toward red Aswan granite cladding'}
          </p>
        </header>

        {/* ================= HERO KPI STRIP ================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-7">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
            Key Measurements
          </span>
          <div className="flex items-center gap-5 text-xs font-mono">
            <button
              type="button"
              onClick={() => setMetricUnit('meters')}
              className={`pb-1 cursor-pointer border-b-2 transition-colors ${
                metricUnit === 'meters'
                  ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                  : 'border-transparent text-[#E2D2B4]/70 hover:text-[#F4EFE5]'
              }`}
            >
              Metric (m)
            </button>
            <button
              type="button"
              onClick={() => setMetricUnit('feet')}
              className={`pb-1 cursor-pointer border-b-2 transition-colors ${
                metricUnit === 'feet'
                  ? 'border-[#E8C56E] text-[#F3D37A] font-bold'
                  : 'border-transparent text-[#E2D2B4]/70 hover:text-[#F4EFE5]'
              }`}
            >
              Imperial (ft)
            </button>
          </div>
        </div>

        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-[#B49A72]/20 pb-8 mb-10">
          <div>
            <dt className="font-mono text-[11px] text-[#D8C7A3]/80 uppercase tracking-wider">Original Height</dt>
            <dd className="text-3xl font-serif font-bold text-[#F3D37A] mt-1 tabular-nums">
              {metricUnit === 'meters' ? `${pyramid.originalHeightM} m` : `${mToFt(pyramid.originalHeightM)} ft`}
            </dd>
            <dd className="text-[11px] font-mono text-[#D8C7A3]/65 mt-0.5">
              Now {metricUnit === 'meters' ? `${pyramid.currentHeightM} m` : `${mToFt(pyramid.currentHeightM)} ft`}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] text-[#D8C7A3]/80 uppercase tracking-wider">Base Side</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">
              {metricUnit === 'meters' ? `${pyramid.baseLengthM} m` : `${mToFt(pyramid.baseLengthM)} ft`}
            </dd>
            <dd className="text-[11px] font-mono text-[#D8C7A3]/65 mt-0.5">
              {pyramid.baseAreaM2.toLocaleString()} m² footprint
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] text-[#D8C7A3]/80 uppercase tracking-wider">Slope Angle</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">
              {isKhafre ? '53° 10′' : '51° 20′'}
            </dd>
            <dd className="text-[11px] font-mono text-[#D8C7A3]/65 mt-0.5">
              {isKhafre ? 'Seked 5p 1f (4:3)' : 'Seked 5p 2f (28:22)'}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] text-[#D8C7A3]/80 uppercase tracking-wider">Volume vs. Khufu</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">{volumeSharePct}</dd>
            <dd className="text-[11px] font-mono text-[#D8C7A3]/65 mt-0.5">
              ~{(pyramid.estimatedStoneBlocks / 1000).toLocaleString()}k blocks
            </dd>
          </div>
        </dl>

        {/* ================= INFOGRAPHIC 1: RELATIVE SCALE SILHOUETTE ================= */}
        <div className="bg-[#140F0B] p-5 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#D8C7A3]/80 pb-3 mb-4 border-b border-[#B49A72]/20">
            <span>GIZA PLATEAU SCALE · {pyramid.pharaoh.toUpperCase()} ACTIVE</span>
            <span className="tabular-nums text-[#E8C56E]">
              {pyramid.volumeM3.toLocaleString()} m³ · {(pyramid.estimatedWeightTons / 1000000).toFixed(2)}M TONS
            </span>
          </div>
          <div className="w-full overflow-x-auto">
            <svg viewBox="0 0 900 280" className="w-full min-w-[600px] h-auto" preserveAspectRatio="xMidYMid meet">
              <line x1="20" y1="225" x2="880" y2="225" stroke="#B49A72" strokeWidth="1.5" />

              {/* Khufu */}
              <polygon points="62,225 200,49 338,225" fill="#2A1F18" stroke="#B49A72" strokeWidth="1" opacity="0.55" />
              <text x="200" y="250" fill="#D8C7A3" fontSize="12" fontFamily="Cinzel" textAnchor="middle" opacity="0.7">
                Khufu · 100%
              </text>

              {/* Khafre */}
              <polygon
                points="381,225 510,53 639,225"
                fill={isKhafre ? '#B49A72' : '#2E231C'}
                stroke={isKhafre ? '#F3D37A' : '#B49A72'}
                strokeWidth={isKhafre ? 2 : 1}
                opacity={isKhafre ? 1 : 0.55}
              />
              <polygon points="492,77 510,53 528,77" fill="#E8C56E" opacity={isKhafre ? 0.95 : 0.4} />
              <text
                x="510"
                y="250"
                fill={isKhafre ? '#F3D37A' : '#D8C7A3'}
                fontSize={isKhafre ? '13' : '12'}
                fontFamily="Cinzel"
                fontWeight={isKhafre ? 'bold' : 'normal'}
                textAnchor="middle"
                opacity={isKhafre ? 1 : 0.7}
              >
                {isKhafre ? 'KHAFRE · 85% VOL' : 'Khafre · 85%'}
              </text>
              {isKhafre && (
                <text x="510" y="267" fill="#E2D2B4" fontSize="11" fontFamily="monospace" textAnchor="middle">
                  {metricUnit === 'meters' ? '143.5 m × 215.25 m' : `${mToFt(143.5)} ft × ${mToFt(215.25)} ft`}
                </text>
              )}

              {/* Menkaure */}
              <polygon
                points="698,225 760,147 822,225"
                fill={!isKhafre ? '#B49A72' : '#2A1F18'}
                stroke={!isKhafre ? '#F3D37A' : '#B49A72'}
                strokeWidth={!isKhafre ? 2 : 1}
                opacity={!isKhafre ? 1 : 0.55}
              />
              <polygon
                points="698,225 718,200 802,200 822,225"
                fill="#C97B63"
                opacity={!isKhafre ? 0.92 : 0.45}
              />
              <text
                x="760"
                y="250"
                fill={!isKhafre ? '#F3D37A' : '#D8C7A3'}
                fontSize={!isKhafre ? '13' : '12'}
                fontFamily="Cinzel"
                fontWeight={!isKhafre ? 'bold' : 'normal'}
                textAnchor="middle"
                opacity={!isKhafre ? 1 : 0.7}
              >
                {!isKhafre ? 'MENKAURE · 9% VOL' : 'Menkaure · 9%'}
              </text>
              {!isKhafre && (
                <text x="760" y="267" fill="#E2D2B4" fontSize="11" fontFamily="monospace" textAnchor="middle">
                  {metricUnit === 'meters' ? '65.5 m × 104.6 m' : `${mToFt(65.5)} ft × ${mToFt(104.6)} ft`}
                </text>
              )}
            </svg>
          </div>
        </div>

        {/* ================= INFOGRAPHIC 2: SIGNATURE ARCHITECTURAL EFFECT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-[#B49A72]/20 pb-10 mb-10 items-center">
          <div className="md:col-span-6 bg-[#140F0B] p-5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#E8C56E] font-bold block mb-3">
              {isKhafre
                ? 'Optical Elevation Effect (+10 m Bedrock Shelf)'
                : 'Aswan Granite Cladding Ratio (Lower 1/3)'}
            </span>

            {isKhafre ? (
              <svg viewBox="0 0 360 190" className="w-full h-auto">
                {/* Plateau Horizon */}
                <line x1="15" y1="155" x2="345" y2="155" stroke="#B49A72" strokeWidth="1" opacity="0.5" />
                {/* Khufu Reference */}
                <polygon points="35,155 95,55 155,155" fill="#2A1F18" stroke="#B49A72" strokeWidth="1" opacity="0.65" />
                <line x1="95" y1="55" x2="320" y2="55" stroke="#D8C7A3" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
                <text x="95" y="172" fill="#D8C7A3" fontSize="10" fontFamily="monospace" textAnchor="middle">
                  Khufu 146.6 m
                </text>

                {/* +10m Bedrock Shelf */}
                <rect x="195" y="138" width="125" height="17" fill="#45352B" stroke="#E8C56E" strokeWidth="1" />
                <text x="257" y="150" fill="#F3D37A" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  +10 m Bedrock
                </text>

                {/* Khafre on shelf */}
                <polygon points="200,138 257,41 314,138" fill="#B49A72" stroke="#F3D37A" strokeWidth="1.8" />
                <polygon points="246,60 257,41 268,60" fill="#F4EFE5" />
                <text x="257" y="172" fill="#F3D37A" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  Khafre Crest (+7 m apparent)
                </text>
              </svg>
            ) : (
              <svg viewBox="0 0 360 190" className="w-full h-auto">
                <line x1="20" y1="155" x2="340" y2="155" stroke="#B49A72" strokeWidth="1" opacity="0.6" />
                {/* Upper 2/3 Tura */}
                <polygon points="102,113 180,35 258,113" fill="#B49A72" stroke="#F4EFE5" strokeWidth="1.5" />
                <text x="180" y="92" fill="#1C1510" fontSize="10" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                  TURA WHITE (2/3)
                </text>
                {/* Lower 1/3 Granite */}
                <polygon points="60,155 102,113 258,113 300,155" fill="#C97B63" stroke="#F3D37A" strokeWidth="1.8" />
                <text x="180" y="138" fill="#F4EFE5" fontSize="10" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                  16 GRANITE COURSES (1/3)
                </text>
                <text x="180" y="174" fill="#E2D2B4" fontSize="10" fontFamily="monospace" textAnchor="middle">
                  Shipped 800 km north from Aswan
                </text>
              </svg>
            )}
          </div>

          <div className="md:col-span-6 space-y-6">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold mb-3">
                Key Architectural Distinctions
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#E2D2B4] leading-relaxed">
                {pyramid.architecturalInnovations.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#E8C56E] font-bold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#B49A72]/15 pt-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#E8C56E] font-bold block mb-1">
                Interior Plan
              </span>
              <p className="text-xs text-[#D8C7A3] leading-relaxed">
                {isKhafre
                  ? 'Dual descending entrances merge into a bedrock chamber housing Khafre’s sunken black granite sarcophagus.'
                  : 'Subterranean chamber complex featuring Palace Façade paneling, a six-niche annex, and a barrel-vaulted granite crypt.'}
              </p>
            </div>
          </div>
        </div>

        {/* ================= DYNASTIC SUCCESSION ================= */}
        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold mb-5">
            Dynastic Sequence · Immediate Context
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#B49A72]/20 pb-8 mb-6">
            {dynastyContext.map((gen) => (
              <div key={gen.pharaoh} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl font-bold text-[#F4EFE5]">{gen.pharaoh}</h3>
                  <span className="font-mono text-xs text-[#E8C56E]">{gen.reign}</span>
                </div>
                <p className="text-xs font-mono text-[#D8C7A3]/80">
                  {gen.monument} · {gen.location}
                </p>
                <p className="text-xs sm:text-sm text-[#E2D2B4] leading-relaxed pt-1">
                  {gen.significance}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs font-mono text-[#D8C7A3]/85 leading-relaxed">
            Archaeological Proof: Successors built outside Giza (Djedefre at Abu Rawash; Shepseskaf at Saqqara)—confirming Giza evolved reign by reign.
          </p>
        </div>
      </div>
    </section>
  );
};
