import React from 'react';
import { ArrowDown, ShieldAlert, Sparkles, Eye } from 'lucide-react';
import { EVIDENCE_LEVELS } from '../data/evidenceData';
import { EvidenceBadge } from './EvidenceBadge';

interface HeroSectionProps {
  onBeginExploring: () => void;
  onOpenLegend: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBeginExploring, onOpenLegend }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-between bg-[#2B211B] text-[#F4EFE5] overflow-hidden pt-24 pb-12 border-b-4 border-[#8A4F3D]"
    >
      {/* Background Architectural Vector Skyline & Geodesic Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        <svg 
          viewBox="0 0 1440 600" 
          className="w-full h-full object-cover" 
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          {/* Subtle celestial guide lines */}
          <line x1="200" y1="50" x2="200" y2="550" stroke="#D8C7A3" strokeWidth="0.5" strokeDasharray="4 8" />
          <line x1="720" y1="50" x2="720" y2="550" stroke="#D8C7A3" strokeWidth="0.5" strokeDasharray="4 8" />
          <line x1="1200" y1="50" x2="1200" y2="550" stroke="#D8C7A3" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="720" cy="180" r="140" stroke="#B49A72" strokeWidth="0.5" strokeDasharray="3 6" fill="none" />
          
          {/* Menkaure Silhouette (Left/Background) */}
          <polygon points="260,540 370,390 480,540" fill="#3D3027" stroke="#B49A72" strokeWidth="1" />
          
          {/* Khafre Silhouette (Center) with visible casing cap */}
          <polygon points="460,540 650,210 840,540" fill="#4A3B30" stroke="#D8C7A3" strokeWidth="1.2" />
          <polygon points="610,280 650,210 690,280" fill="#D8C7A3" opacity="0.8" />
          
          {/* Khufu Silhouette (Foreground Right) */}
          <polygon points="760,540 980,185 1200,540" fill="#362A22" stroke="#D8C7A3" strokeWidth="1.5" />
          
          {/* Great Sphinx Profile Outline at far right foot */}
          <path d="M1230,540 L1230,505 Q1240,490 1260,490 Q1275,470 1290,470 Q1305,485 1300,510 L1340,525 L1370,540 Z" fill="#241B16" stroke="#B49A72" strokeWidth="1" />
          
          {/* Plateau Bedrock Horizon */}
          <line x1="0" y1="540" x2="1440" y2="540" stroke="#B49A72" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 my-auto text-center z-10">
        {/* Primary Hero Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#F4EFE5] uppercase mb-4 leading-none">
          Giza Pyramids
        </h1>

        {/* Supporting Hook */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#D8C7A3] max-w-3xl mx-auto mb-6 leading-snug">
          Three monuments. One landscape. Thousands of questions.
        </p>

        {/* Thematic Axiom Box */}
        <div className="max-w-2xl mx-auto bg-[#171513]/80 border-l-2 border-[#8A4F3D] p-4 sm:p-5 text-left mb-8 backdrop-blur-sm">
          <p className="font-sans text-sm sm:text-base text-[#F4EFE5]/90 italic leading-relaxed">
            "Giza is not simply a collection of three enormous pyramids. It is a complex landscape where architecture, engineering, logistics, astronomy, landscape, belief and unanswered questions intersect."
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="hero-begin-exploring-btn"
            type="button"
            onClick={onBeginExploring}
            className="w-full sm:w-auto px-8 py-4 bg-[#8A4F3D] hover:bg-[#a15e4a] text-[#F4EFE5] font-mono font-bold text-sm tracking-widest uppercase transition-all duration-200 shadow-xl flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Begin Exploring</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            id="hero-evidence-key-btn"
            type="button"
            onClick={onOpenLegend}
            className="w-full sm:w-auto px-6 py-4 bg-transparent hover:bg-[#D8C7A3]/10 border border-[#B49A72] text-[#D8C7A3] hover:text-[#F4EFE5] font-mono text-sm tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldAlert className="w-4 h-4 text-[#8A4F3D]" />
            <span>The Evidence System</span>
          </button>
        </div>
      </div>

      {/* Epistemic Spectrum Strip at bottom of Hero */}
      <div className="relative max-w-5xl mx-auto w-full px-4 mt-8 z-10">
        <div className="bg-[#171513]/90 border border-[#B49A72]/40 p-3.5 sm:p-4 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
            <span className="text-[#D8C7A3] font-semibold tracking-wider uppercase flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#8A4F3D]" /> Epistemic Classification Tiers:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 px-2 py-0.5 border border-emerald-800/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Established
              </span>
              <span className="inline-flex items-center gap-1.5 text-sky-400 bg-sky-950/60 px-2 py-0.5 border border-sky-800/60">
                <span className="w-2 h-2 rounded-full bg-sky-400" /> Supported
              </span>
              <span className="inline-flex items-center gap-1.5 text-amber-400 bg-amber-950/60 px-2 py-0.5 border border-amber-800/60">
                <span className="w-2 h-2 rounded-full bg-amber-400" /> Debated
              </span>
              <span className="inline-flex items-center gap-1.5 text-rose-400 bg-rose-950/60 px-2 py-0.5 border border-rose-800/60">
                <span className="w-2 h-2 rounded-full bg-rose-400" /> Speculative
              </span>
              <span className="inline-flex items-center gap-1.5 text-stone-300 bg-stone-900/60 px-2 py-0.5 border border-stone-700/60">
                <span className="w-2 h-2 rounded-full bg-stone-400" /> Unknown
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
