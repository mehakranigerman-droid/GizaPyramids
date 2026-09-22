import React from 'react';
import { ArrowDown, ShieldAlert, Sparkles, Eye, Camera } from 'lucide-react';
import { EVIDENCE_LEVELS } from '../data/evidenceData';
import { EvidenceBadge } from './EvidenceBadge';
import { IMAGES } from '../assets/images';

interface HeroSectionProps {
  onBeginExploring: () => void;
  onOpenLegend: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBeginExploring, onOpenLegend }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex flex-col justify-between bg-[#2B211B] text-[#F4EFE5] overflow-hidden pt-12 sm:pt-16 pb-12 border-b-4 border-[#8A4F3D]"
    >
      {/* Background Photographic Landscape & Atmospheric Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={IMAGES.heroPlateau}
          alt="Giza Plateau at Sunset"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B] via-[#2B211B]/85 to-[#2B211B]/60" />
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

        {/* Thematic Axiom Block */}
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="font-serif text-base sm:text-lg text-[#D8C7A3]/90 italic leading-relaxed">
            "Giza is not simply a collection of three enormous pyramids. It is a complex landscape where architecture, engineering, logistics, astronomy, landscape, belief and unanswered questions intersect."
          </p>
        </div>

        {/* Featured Photographic Vista */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative aspect-[21/9] sm:aspect-[2.4/1] overflow-hidden rounded-xs shadow-2xl">
            <img
              src={IMAGES.heroPlateau}
              alt="Panoramic view of the Giza Plateau during sunset with Khufu and Khafre"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#D8C7A3]">
              <span className="flex items-center gap-2 drop-shadow">
                <Camera className="w-3.5 h-3.5 text-[#8A4F3D]" /> Giza Necropolis Plateau // Khufu & Khafre at Sunset
              </span>
              <span className="hidden sm:inline-block text-[#B49A72] tracking-wider drop-shadow">
                29°58′45″N 31°08′03″E
              </span>
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="hero-begin-exploring-btn"
            type="button"
            onClick={onBeginExploring}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#8A4F3D] hover:bg-[#a15e4a] text-[#F4EFE5] font-mono text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Begin Exploring</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            id="hero-evidence-key-btn"
            type="button"
            onClick={onOpenLegend}
            className="w-full sm:w-auto px-6 py-3.5 text-[#D8C7A3] hover:text-[#F4EFE5] font-mono text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#8A4F3D]" />
            <span>The Evidence System</span>
          </button>
        </div>
      </div>

      {/* Epistemic Spectrum Row at bottom of Hero (Minimal, border-free) */}
      <div className="relative max-w-4xl mx-auto w-full px-4 mt-8 z-10 border-t border-[#B49A72]/20 pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
          <span className="text-[#B49A72] uppercase tracking-wider flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-[#8A4F3D]" /> Classification System:
          </span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[#D8C7A3]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Established
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" /> Supported
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Debated
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" /> Speculative
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-stone-400" /> Unknown
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
