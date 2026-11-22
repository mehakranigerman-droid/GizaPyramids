import React, { useState } from 'react';
import { PYRAMIDS, DYNASTY_CHRONOLOGY } from '../data/pyramidsData';
import { PageId } from '../types';
import { EvidenceBadge } from './EvidenceBadge';
import { InlineEvidenceBlock } from './InlineEvidenceBlock';

interface KhufuPageProps {
  onNavigate?: (page: PageId) => void;
}

export const KhufuPage: React.FC<KhufuPageProps> = ({ onNavigate }) => {
  const khufu = PYRAMIDS.find((p) => p.id === 'khufu') || PYRAMIDS[0];
  const dynastyContext = DYNASTY_CHRONOLOGY.filter(
    (g) => g.pharaoh === 'Sneferu' || g.pharaoh === 'Khufu'
  );

  const [metricUnit, setMetricUnit] = useState<'meters' | 'feet'>('meters');
  const mToFt = (m: number) => (m * 3.28084).toFixed(1);

  return (
    <section className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ================= PAGE HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-7 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              01 · {khufu.reignPeriod}
            </span>
            <EvidenceBadge level="ESTABLISHED" as="span" surface="dark" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            Great Pyramid (Khufu)
          </h1>
          <p className="font-serif-text italic text-lg text-[#E2D2B4] mt-1">
            {khufu.arabicName}
          </p>
          <p className="text-sm sm:text-base text-[#D8C7A3] max-w-3xl mt-3 leading-relaxed">
            {khufu.notableFeatures}
          </p>
        </header>

        {/* ================= PART I: SCALE & ENGINEERING PROFILE ================= */}
        <div className="mb-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-3 mb-7">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EFE5]">
              Scale & Engineering Profile
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

          {/* Open Scale Silhouette Highlighting Khufu */}
          <div className="bg-[#140F0B] p-5 mb-10">
            <div className="flex items-center justify-between text-xs font-mono text-[#D8C7A3]/80 pb-3 mb-4 border-b border-[#B49A72]/20">
              <span>RELATIVE GIZA SCALE · KHUFU HIGHLIGHTED</span>
              <span className="tabular-nums">2,583,283 m³ · ~5.75M TONS</span>
            </div>
            <div className="w-full overflow-x-auto">
              <svg viewBox="0 0 900 320" className="w-full min-w-[640px] h-auto" preserveAspectRatio="xMidYMid meet">
                <line x1="20" y1="265" x2="880" y2="265" stroke="#B49A72" strokeWidth="1.5" />

                <polygon points="62,265 200,89 338,265" fill="#B49A72" stroke="#F4EFE5" strokeWidth="2" />
                <text x="200" y="290" fill="#F3D37A" fontSize="13" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                  KHUFU (ACTIVE)
                </text>
                <text x="200" y="307" fill="#E2D2B4" fontSize="11" fontFamily="monospace" textAnchor="middle">
                  {metricUnit === 'meters' ? '146.6 m × 230.3 m' : `${mToFt(146.6)} ft × ${mToFt(230.34)} ft`}
                </text>

                <polygon points="381,265 510,93 639,265" fill="#2E231C" stroke="#B49A72" strokeWidth="1" opacity="0.55" />
                <text x="510" y="290" fill="#D8C7A3" fontSize="12" fontFamily="Cinzel" textAnchor="middle" opacity="0.65">
                  Khafre
                </text>

                <polygon points="698,265 760,187 822,265" fill="#271D17" stroke="#B49A72" strokeWidth="1" opacity="0.55" />
                <text x="760" y="290" fill="#D8C7A3" fontSize="12" fontFamily="Cinzel" textAnchor="middle" opacity="0.65">
                  Menkaure
                </text>
              </svg>
            </div>
          </div>

          {/* Open 3-Column Metrics & Specs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="font-mono text-xs text-[#E8C56E] uppercase tracking-wider font-bold mb-3">
                Dimensional Footprint
              </h3>
              <dl className="divide-y divide-[#B49A72]/15 text-sm">
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Original Height</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">
                    {metricUnit === 'meters' ? `${khufu.originalHeightM} m` : `${mToFt(khufu.originalHeightM)} ft`}
                  </dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Current Height</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">
                    {metricUnit === 'meters' ? `${khufu.currentHeightM} m` : `${mToFt(khufu.currentHeightM)} ft`}
                  </dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Base Length</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">
                    {metricUnit === 'meters' ? `${khufu.baseLengthM} m` : `${mToFt(khufu.baseLengthM)} ft`}
                  </dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Slope & Seked</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">{khufu.slopeAngleDeg}° (28:22)</dd>
                </div>
                <div className="py-2 flex justify-between">
                  <dt className="font-mono text-xs text-[#D8C7A3]/80">Estimated Blocks</dt>
                  <dd className="font-bold tabular-nums text-[#F4EFE5]">{khufu.estimatedStoneBlocks.toLocaleString()}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-mono text-xs text-[#E8C56E] uppercase tracking-wider font-bold mb-3">
                Materials & Quarry Origins
              </h3>
              <div className="space-y-4 text-xs leading-relaxed text-[#E2D2B4]">
                <div>
                  <span className="font-mono font-bold text-[#F4EFE5] block mb-0.5">Exterior Casing</span>
                  <p>{khufu.casingMaterial}</p>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#F4EFE5] block mb-0.5">Core Masonry</span>
                  <p>{khufu.coreMaterial}</p>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#F4EFE5] block mb-0.5">Internal Layout</span>
                  <p>{khufu.internalComplexity}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs text-[#E8C56E] uppercase tracking-wider font-bold mb-3">
                Key Architectural Innovations
              </h3>
              <ul className="space-y-2.5 text-xs leading-relaxed text-[#E2D2B4]">
                {khufu.architecturalInnovations.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#E8C56E] font-bold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Direct Chapter Link to Dedicated Interior Architecture */}
          {onNavigate && (
            <div className="border-t border-[#B49A72]/20 pt-6 pb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#E8C56E] font-bold block">
                  Chapter 02 · Interactive Cutaway & Chambers
                </span>
                <p className="text-sm text-[#D8C7A3] mt-1">
                  Inspect all 14 chambers, passages, shafts, and ScanPyramids voids inside Khufu.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('interior')}
                className="text-[#F3D37A] hover:text-[#F4EFE5] underline underline-offset-4 decoration-[#E8C56E] decoration-2 font-mono text-xs uppercase tracking-wider font-bold cursor-pointer transition-colors whitespace-nowrap"
              >
                Open Interior Architecture →
              </button>
            </div>
          )}

          {/* Dynastic Context: Sneferu -> Khufu */}
          <div className="border-t border-[#B49A72]/20 pt-8">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#E8C56E] font-bold mb-4">
              Dynasty 4 Lineage (Sneferu → Khufu)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dynastyContext.map((gen) => (
                <div key={gen.pharaoh} className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-serif text-xl font-bold text-[#F4EFE5]">{gen.pharaoh}</h4>
                    <span className="font-mono text-xs text-[#E8C56E]">{gen.reign}</span>
                  </div>
                  <p className="text-xs font-mono text-[#D8C7A3]/80">{gen.monument} · {gen.location}</p>
                  <p className="text-sm text-[#E2D2B4] leading-relaxed pt-1">{gen.significance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <InlineEvidenceBlock
          claimIds={['khufu-authorship']}
          surface="dark"
        />
      </div>
    </section>
  );
};
