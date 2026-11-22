import React, { useState } from 'react';
import { PYRAMIDS, DYNASTY_CHRONOLOGY } from '../data/pyramidsData';
import { EvidenceBadge } from './EvidenceBadge';
import { InlineEvidenceBlock } from './InlineEvidenceBlock';

interface PyramidProfilePageProps {
  pyramidId: 'khafre' | 'menkaure';
}

export const PyramidProfilePage: React.FC<PyramidProfilePageProps> = ({ pyramidId }) => {
  const [metricUnit, setMetricUnit] = useState<'meters' | 'feet'>('meters');
  const pyramid = PYRAMIDS.find((p) => p.id === pyramidId) || PYRAMIDS[1];

  const pageNumber = pyramidId === 'khafre' ? '03' : '04';
  const dynastyFilter =
    pyramidId === 'khafre' ? ['Djedefre', 'Khafre'] : ['Menkaure', 'Shepseskaf'];
  const dynastyContext = DYNASTY_CHRONOLOGY.filter((g) => dynastyFilter.includes(g.pharaoh));

  const mToFt = (m: number) => (m * 3.28084).toFixed(1);

  return (
    <section className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-7 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              {pageNumber} · {pyramid.reignPeriod}
            </span>
            <EvidenceBadge level="ESTABLISHED" as="span" surface="dark" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            {pyramid.name}
          </h1>
          <p className="font-serif-text italic text-lg text-[#E2D2B4] mt-1">
            {pyramid.arabicName}
          </p>
          <p className="text-sm sm:text-base text-[#D8C7A3] max-w-3xl mt-3 leading-relaxed">
            {pyramid.notableFeatures}
          </p>
        </header>

        {/* ================= SCALE VISUALIZER ================= */}
        <div className="mb-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EFE5]">
              I. Relative Scale & Geometry
            </h2>
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

          <div className="bg-[#140F0B] p-5 mb-10">
            <div className="flex items-center justify-between text-xs font-mono text-[#D8C7A3]/80 pb-3 mb-4 border-b border-[#B49A72]/20">
              <span>RELATIVE GIZA SCALE · {pyramid.pharaoh.toUpperCase()} HIGHLIGHTED</span>
              <span className="tabular-nums">
                {pyramid.volumeM3.toLocaleString()} m³ · {(pyramid.estimatedWeightTons / 1000000).toFixed(2)}M TONS
              </span>
            </div>
            <div className="w-full overflow-x-auto">
              <svg viewBox="0 0 900 320" className="w-full min-w-[640px] h-auto" preserveAspectRatio="xMidYMid meet">
                <line x1="20" y1="265" x2="880" y2="265" stroke="#B49A72" strokeWidth="1.5" />

                <polygon points="62,265 200,89 338,265" fill="#2A1F18" stroke="#B49A72" strokeWidth="1" opacity="0.55" />
                <text x="200" y="290" fill="#D8C7A3" fontSize="12" fontFamily="Cinzel" textAnchor="middle" opacity="0.65">
                  Khufu (146.6 m)
                </text>

                <polygon
                  points="381,265 510,93 639,265"
                  fill={pyramidId === 'khafre' ? '#B49A72' : '#2E231C'}
                  stroke={pyramidId === 'khafre' ? '#F4EFE5' : '#B49A72'}
                  strokeWidth={pyramidId === 'khafre' ? 2 : 1}
                  opacity={pyramidId === 'khafre' ? 1 : 0.55}
                />
                <polygon points="492,117 510,93 528,117" fill="#E8C56E" opacity={pyramidId === 'khafre' ? 0.95 : 0.4} />
                <text
                  x="510"
                  y="290"
                  fill={pyramidId === 'khafre' ? '#F3D37A' : '#D8C7A3'}
                  fontSize={pyramidId === 'khafre' ? '13' : '12'}
                  fontFamily="Cinzel"
                  fontWeight={pyramidId === 'khafre' ? 'bold' : 'normal'}
                  textAnchor="middle"
                  opacity={pyramidId === 'khafre' ? 1 : 0.65}
                >
                  {pyramidId === 'khafre' ? 'KHAFRE (ACTIVE)' : 'Khafre (143.5 m)'}
                </text>
                {pyramidId === 'khafre' && (
                  <text x="510" y="307" fill="#E2D2B4" fontSize="11" fontFamily="monospace" textAnchor="middle">
                    {metricUnit === 'meters' ? '143.5 m × 215.25 m' : `${mToFt(143.5)} ft × ${mToFt(215.25)} ft`}
                  </text>
                )}

                <polygon
                  points="698,265 760,187 822,265"
                  fill={pyramidId === 'menkaure' ? '#B49A72' : '#2A1F18'}
                  stroke={pyramidId === 'menkaure' ? '#F4EFE5' : '#B49A72'}
                  strokeWidth={pyramidId === 'menkaure' ? 2 : 1}
                  opacity={pyramidId === 'menkaure' ? 1 : 0.55}
                />
                <polygon
                  points="698,265 710,250 810,250 822,265"
                  fill="#C97B63"
                  opacity={pyramidId === 'menkaure' ? 0.9 : 0.45}
                />
                <text
                  x="760"
                  y="290"
                  fill={pyramidId === 'menkaure' ? '#F3D37A' : '#D8C7A3'}
                  fontSize={pyramidId === 'menkaure' ? '13' : '12'}
                  fontFamily="Cinzel"
                  fontWeight={pyramidId === 'menkaure' ? 'bold' : 'normal'}
                  textAnchor="middle"
                  opacity={pyramidId === 'menkaure' ? 1 : 0.65}
                >
                  {pyramidId === 'menkaure' ? 'MENKAURE (ACTIVE)' : 'Menkaure (65.5 m)'}
                </text>
                {pyramidId === 'menkaure' && (
                  <text x="760" y="307" fill="#E2D2B4" fontSize="11" fontFamily="monospace" textAnchor="middle">
                    {metricUnit === 'meters' ? '65.5 m × 104.6 m' : `${mToFt(65.5)} ft × ${mToFt(104.6)} ft`}
                  </text>
                )}
              </svg>
            </div>
          </div>

          {/* 3-Column Engineering Specs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-mono text-xs text-[#E8C56E] uppercase tracking-wider font-bold mb-3">
                Dimensional Footprint
              </h3>
              <dl className="divide-y divide-[#B49A72]/15 text-sm">
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Original Height</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">
                    {metricUnit === 'meters' ? `${pyramid.originalHeightM} m` : `${mToFt(pyramid.originalHeightM)} ft`}
                  </dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Current Height</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">
                    {metricUnit === 'meters' ? `${pyramid.currentHeightM} m` : `${mToFt(pyramid.currentHeightM)} ft`}
                  </dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Base Length</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">
                    {metricUnit === 'meters' ? `${pyramid.baseLengthM} m` : `${mToFt(pyramid.baseLengthM)} ft`}
                  </dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Slope Angle</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">{pyramid.slopeAngleDeg}°</dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Seked Ratio</dt>
                  <dd className="font-bold text-right text-[#F4EFE5]">{pyramid.sekedRatio}</dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Estimated Blocks</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">{pyramid.estimatedStoneBlocks.toLocaleString()}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-mono text-xs text-[#E8C56E] uppercase tracking-wider font-bold mb-3">
                Materials & Internal Layout
              </h3>
              <div className="space-y-4 text-xs leading-relaxed text-[#E2D2B4]">
                <div>
                  <span className="font-mono font-bold text-[#F4EFE5] block mb-0.5">Exterior Casing</span>
                  <p>{pyramid.casingMaterial}</p>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#F4EFE5] block mb-0.5">Core Masonry</span>
                  <p>{pyramid.coreMaterial}</p>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#F4EFE5] block mb-0.5">Interior Chambers</span>
                  <p>{pyramid.internalComplexity}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs text-[#E8C56E] uppercase tracking-wider font-bold mb-3">
                Architectural Innovations
              </h3>
              <ul className="space-y-2.5 text-xs leading-relaxed text-[#E2D2B4]">
                {pyramid.architecturalInnovations.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#E8C56E] font-bold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ================= DYNASTIC SUCCESSION CONTEXT ================= */}
        <div className="border-t border-[#B49A72]/20 pt-10">
          <div className="border-b border-[#B49A72]/20 pb-3 mb-7">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EFE5]">
              II. Dynastic Succession & Context
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
            {dynastyContext.map((gen) => (
              <div key={gen.pharaoh} className="space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl font-bold text-[#F4EFE5]">{gen.pharaoh}</h3>
                  <span className="font-mono text-xs text-[#E8C56E]">{gen.reign}</span>
                </div>
                <p className="text-xs font-mono text-[#D8C7A3]/80">
                  {gen.relationship} · {gen.monument} ({gen.location})
                </p>
                <p className="text-sm text-[#E2D2B4] leading-relaxed pt-1">{gen.significance}</p>
                <p className="text-xs text-[#D8C7A3]/85 leading-relaxed">
                  <strong className="text-[#F4EFE5]">Evidence:</strong> {gen.evidence}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs font-mono text-[#E8C56E]/90 border-t border-[#B49A72]/20 pt-4 leading-relaxed">
            Archaeological Note: Successors shifted burial sites outside Giza—Djedefre to Abu Rawash and Shepseskaf to South Saqqara—showing Giza evolved reign by reign.
          </p>
        </div>

        <InlineEvidenceBlock
          claimIds={pyramidId === 'khafre' ? ['sphinx-khafre', 'khufu-authorship'] : ['khufu-authorship']}
          surface="dark"
        />
      </div>
    </section>
  );
};
