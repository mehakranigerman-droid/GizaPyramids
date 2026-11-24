import React, { useState } from 'react';
import { PYRAMIDS } from '../data/pyramidsData';
import { PageId } from '../types';
import { EvidenceBadge } from './EvidenceBadge';

interface KhufuPageProps {
  onNavigate?: (page: PageId) => void;
}

export const KhufuPage: React.FC<KhufuPageProps> = ({ onNavigate }) => {
  const khufu = PYRAMIDS.find((p) => p.id === 'khufu') || PYRAMIDS[0];
  const [metricUnit, setMetricUnit] = useState<'meters' | 'feet'>('meters');
  const mToFt = (m: number) => (m * 3.28084).toFixed(1);

  return (
    <section className="py-12 sm:py-16 bg-transparent text-[#F4EFE5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <header className="border-b border-[#B49A72]/20 pb-6 mb-9">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold">
              01 · {khufu.reignPeriod}
            </span>
            <EvidenceBadge level="ESTABLISHED" as="span" surface="dark" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE5]">
            Great Pyramid (Khufu)
          </h1>
          <p className="font-serif-text italic text-base sm:text-lg text-[#D8C7A3] mt-1.5">
            Akhet Khufu (“Horizon of Khufu”) · Largest stone monument of antiquity
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
              {metricUnit === 'meters' ? '146.6 m' : `${mToFt(146.6)} ft`}
            </dd>
            <dd className="text-[11px] font-mono text-[#D8C7A3]/65 mt-0.5">
              Now {metricUnit === 'meters' ? '138.5 m' : `${mToFt(138.5)} ft`}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] text-[#D8C7A3]/80 uppercase tracking-wider">Base Side</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">
              {metricUnit === 'meters' ? '230.3 m' : `${mToFt(230.34)} ft`}
            </dd>
            <dd className="text-[11px] font-mono text-[#D8C7A3]/65 mt-0.5">53,056 m² footprint</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] text-[#D8C7A3]/80 uppercase tracking-wider">Slope Angle</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">51° 50′</dd>
            <dd className="text-[11px] font-mono text-[#D8C7A3]/65 mt-0.5">Seked 28:22 ratio</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] text-[#D8C7A3]/80 uppercase tracking-wider">True North Error</dt>
            <dd className="text-3xl font-serif font-bold text-[#F4EFE5] mt-1 tabular-nums">3′ 38″</dd>
            <dd className="text-[11px] font-mono text-[#D8C7A3]/65 mt-0.5">~2.3M stone blocks</dd>
          </div>
        </dl>

        {/* ================= INFOGRAPHIC 1: RELATIVE SCALE SILHOUETTE ================= */}
        <div className="bg-[#140F0B] p-5 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#D8C7A3]/80 pb-3 mb-4 border-b border-[#B49A72]/20">
            <span>GIZA PLATEAU VOLUME COMPARISON</span>
            <span className="tabular-nums text-[#E8C56E]">2,583,283 m³ · 5.75M TONS</span>
          </div>
          <div className="w-full overflow-x-auto">
            <svg viewBox="0 0 900 280" className="w-full min-w-[600px] h-auto" preserveAspectRatio="xMidYMid meet">
              <line x1="20" y1="225" x2="880" y2="225" stroke="#B49A72" strokeWidth="1.5" />

              {/* Khufu */}
              <polygon points="62,225 200,49 338,225" fill="#B49A72" stroke="#F3D37A" strokeWidth="2" />
              <line x1="200" y1="49" x2="200" y2="225" stroke="#1C1510" strokeWidth="1" strokeDasharray="3 3" />
              <text x="200" y="250" fill="#F3D37A" fontSize="13" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                KHUFU · 100% VOLUME
              </text>
              <text x="200" y="266" fill="#E2D2B4" fontSize="11" fontFamily="monospace" textAnchor="middle">
                {metricUnit === 'meters' ? '146.6 m × 230.3 m' : `${mToFt(146.6)} ft × ${mToFt(230.34)} ft`}
              </text>

              {/* Khafre */}
              <polygon points="381,225 510,53 639,225" fill="#2E231C" stroke="#B49A72" strokeWidth="1" opacity="0.6" />
              <text x="510" y="250" fill="#D8C7A3" fontSize="12" fontFamily="Cinzel" textAnchor="middle" opacity="0.7">
                Khafre · 85%
              </text>

              {/* Menkaure */}
              <polygon points="698,225 760,147 822,225" fill="#271D17" stroke="#B49A72" strokeWidth="1" opacity="0.6" />
              <text x="760" y="250" fill="#D8C7A3" fontSize="12" fontFamily="Cinzel" textAnchor="middle" opacity="0.7">
                Menkaure · 9%
              </text>
            </svg>
          </div>
        </div>

        {/* ================= INFOGRAPHIC 2: MATERIAL COMPOSITION & SLOPE GEOMETRY ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-[#B49A72]/20 pb-10 mb-10 items-center">
          <div className="md:col-span-7 space-y-6">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold mb-3">
                Stone Mass Composition
              </h2>
              <div className="h-[3px] flex overflow-hidden bg-[#2B211B] mb-3.5">
                <div className="bg-[#B49A72]" style={{ width: '94%' }} title="94% Local Core Limestone" />
                <div className="bg-[#F4EFE5]" style={{ width: '5%' }} title="5% White Tura Casing" />
                <div className="bg-[#C97B63]" style={{ width: '1%' }} title="1% Red Aswan Granite" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[#E8C56E] font-bold block">~94% Core</span>
                  <span className="text-[#D8C7A3]/80">Giza Limestone</span>
                </div>
                <div>
                  <span className="text-[#F4EFE5] font-bold block">~5% Casing</span>
                  <span className="text-[#D8C7A3]/80">Tura White (13 km)</span>
                </div>
                <div>
                  <span className="text-[#C97B63] font-bold block">~1% Vaults</span>
                  <span className="text-[#D8C7A3]/80">Aswan Granite (800 km)</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#B49A72]/15 pt-5">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#E8C56E] font-bold mb-3">
                Dynasty 4 Structural Leap
              </h2>
              <div className="grid grid-cols-2 gap-6 text-xs">
                <div>
                  <span className="font-serif text-base font-bold text-[#F4EFE5] block">Sneferu · c. 2613 BCE</span>
                  <span className="text-[#D8C7A3]/80 font-mono">Meidum, Bent & Red Pyramids</span>
                </div>
                <div>
                  <span className="font-serif text-base font-bold text-[#F3D37A] block">Khufu · c. 2589 BCE</span>
                  <span className="text-[#D8C7A3]/80 font-mono">Elevated 3-level interior vaults</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seked Geometry SVG Diagram */}
          <div className="md:col-span-5 bg-[#140F0B] p-5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#E8C56E] font-bold block mb-2">
              Seked 28:22 Slope Triangle
            </span>
            <svg viewBox="0 0 300 180" className="w-full h-auto">
              <polygon points="50,145 215,145 215,35" fill="#2A1F18" stroke="#E8C56E" strokeWidth="1.8" />
              <line x1="215" y1="35" x2="215" y2="145" stroke="#F4EFE5" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 88,145 A 38,38 0 0 0 80,125" fill="none" stroke="#C97B63" strokeWidth="2" />
              <text x="98" y="135" fill="#F3D37A" fontSize="11" fontFamily="monospace" fontWeight="bold">51° 50′</text>
              <text x="132" y="164" fill="#E2D2B4" fontSize="10" fontFamily="monospace" textAnchor="middle">22 fingers run</text>
              <text x="225" y="95" fill="#E2D2B4" fontSize="10" fontFamily="monospace">28 rise</text>
            </svg>
          </div>
        </div>

        {/* ================= DIRECT LINK TO DEDICATED CHAPTER 02 & PROOF SUMMARY ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#B49A72]/20 pb-8 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#E8C56E] font-bold block">
              Proof of Authorship · c. 2560 BCE
            </span>
            <p className="text-sm text-[#D8C7A3] mt-1 max-w-2xl">
              Confirmed by red-ochre quarry marks in Campbell’s Chamber and Inspector Merer’s Year 26 Nile logbooks.
            </p>
          </div>

          {onNavigate && (
            <button
              type="button"
              onClick={() => onNavigate('interior')}
              className="text-[#F3D37A] hover:text-[#F4EFE5] underline underline-offset-4 decoration-[#E8C56E] decoration-2 font-mono text-xs uppercase tracking-wider font-bold cursor-pointer transition-colors whitespace-nowrap shrink-0"
            >
              Open 02 Interior Architecture →
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
