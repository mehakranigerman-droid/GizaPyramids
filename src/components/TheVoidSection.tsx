import React, { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';
import { Sparkles, Camera, ShieldCheck, HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react';

interface TheVoidSectionProps {
  onSelectEvidence: (claimId: string) => void;
}

export const TheVoidSection: React.FC<TheVoidSectionProps> = ({ onSelectEvidence }) => {
  const [simulationStep, setSimulationStep] = useState<'cosmic' | 'detector' | 'discovery'>('discovery');

  return (
    <section id="void" className="py-20 bg-[#2B211B] bg-surveyor-grid-dark text-[#F4EFE5] border-b border-[#8A4F3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="border-b border-[#B49A72]/40 pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
                Chapter 09 // Particle Physics Meets Archaeology
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F4EFE5] mt-1">
                The Void: Cosmic Muons at Giza
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('scanpyramids-void')} />
              <EvidenceBadge level="UNKNOWN" onClick={() => onSelectEvidence('big-void-purpose')} />
            </div>
          </div>
          <p className="text-base text-[#D8C7A3] max-w-3xl mt-3 leading-relaxed">
            In November 2017, the international ScanPyramids mission published a peer-reviewed paper in <em>Nature</em> announcing the discovery of a massive 30-meter-long void sealed deep inside the Great Pyramid. What is this structure, how did particle physics detect it, and what remains unknown?
          </p>
        </div>

        {/* The Dual Epistemic Reality (Clean Open Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-[#B49A72]/20 pb-12 mb-12">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                What Is Confirmed (Nature, 2017)
              </span>
              <EvidenceBadge level="ESTABLISHED" size="sm" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#F4EFE5] mb-2">
              Physical Existence of a 30m+ Anomaly
            </h4>
            <p className="text-xs text-[#D8C7A3] leading-relaxed">
              Confirmed independently by three separate particle physics institutions using three distinct technologies (Nagoya nuclear emulsions, KEK scintillator bars, CEA micromegas gas chambers). The statistical significance exceeded 5 sigma (standard in particle physics discovery).
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-stone-400 uppercase tracking-wider">
                What Remains Unknown
              </span>
              <EvidenceBadge level="UNKNOWN" size="sm" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#F4EFE5] mb-2">
              Function, Contents & Internal Configuration
            </h4>
            <p className="text-xs text-[#D8C7A3] leading-relaxed">
              Muon radiography only measures bulk rock density deficit; it cannot distinguish between an empty chamber, a construction ramp corridor, a series of internal relieving spaces, or a structural counterweight gallery. No human eye has seen inside the Big Void.
            </p>
          </div>
        </div>

        {/* Interactive Cosmic Muon Radiography Simulator (Clean Open Layout) */}
        <div className="mb-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B49A72]/20 pb-4 mb-8">
            <div>
              <span className="font-mono text-xs text-[#8A4F3D] uppercase font-bold tracking-widest">
                Scientific Instrumentation
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4EFE5] mt-1">
                How Muon Tomography "X-Rays" a Pyramid
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-6 border-b border-[#B49A72]/20 sm:border-0">
              <button
                type="button"
                onClick={() => setSimulationStep('cosmic')}
                className={`pb-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border-b-2 -mb-px ${
                  simulationStep === 'cosmic' ? 'border-[#8A4F3D] text-[#F4EFE5] font-bold' : 'border-transparent text-[#D8C7A3]/60 hover:text-[#F4EFE5]'
                }`}
              >
                1. Cosmic Flux
              </button>
              <button
                type="button"
                onClick={() => setSimulationStep('detector')}
                className={`pb-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border-b-2 -mb-px ${
                  simulationStep === 'detector' ? 'border-[#8A4F3D] text-[#F4EFE5] font-bold' : 'border-transparent text-[#D8C7A3]/60 hover:text-[#F4EFE5]'
                }`}
              >
                2. Density Absorption
              </button>
              <button
                type="button"
                onClick={() => setSimulationStep('discovery')}
                className={`pb-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border-b-2 -mb-px ${
                  simulationStep === 'discovery' ? 'border-[#8A4F3D] text-[#F4EFE5] font-bold' : 'border-transparent text-[#D8C7A3]/60 hover:text-[#F4EFE5]'
                }`}
              >
                3. The Big Void Detected
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* SVG Visual Stage */}
            <div className="lg:col-span-7 bg-[#1C1613] p-6 rounded-xs">
              <svg viewBox="0 0 500 320" className="w-full h-auto">
                {/* Pyramid Contour */}
                <polygon points="50,280 250,50 450,280" fill="#2B211B" stroke="#B49A72" strokeWidth="1.5" />
                <line x1="20" y1="280" x2="480" y2="280" stroke="#B49A72" strokeWidth="1.5" />

                {/* Grand Gallery */}
                <line x1="240" y1="230" x2="280" y2="180" stroke="#D8C7A3" strokeWidth="6" />

                {/* Detectors positioned in Queen's Chamber */}
                <rect x="230" y="225" width="16" height="10" fill="#38bdf8" stroke="#F4EFE5" strokeWidth="1" />
                <text x="210" y="245" fill="#38bdf8" fontSize="8" fontFamily="monospace">Detectors (Queen's Ch.)</text>

                {/* Step 1: Cosmic ray shower from sky */}
                {(simulationStep === 'cosmic' || simulationStep === 'detector' || simulationStep === 'discovery') && (
                  <g stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 4" opacity="0.6">
                    <line x1="120" y1="20" x2="235" y2="225" />
                    <line x1="180" y1="20" x2="236" y2="225" />
                    <line x1="250" y1="20" x2="238" y2="225" />
                    <line x1="310" y1="20" x2="242" y2="225" />
                    <line x1="380" y1="20" x2="245" y2="225" />
                  </g>
                )}

                {/* Step 3: Big Void highlighted */}
                {simulationStep === 'discovery' && (
                  <g>
                    <rect 
                      x="235" y="130" width="70" height="28" rx="4"
                      fill="#8A4F3D" fillOpacity="0.7" 
                      stroke="#F4EFE5" strokeWidth="2" 
                    />
                    <text x="270" y="148" fill="#F4EFE5" fontSize="10" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">
                      BIG VOID
                    </text>
                    <text x="270" y="188" fill="#F4EFE5" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      Grand Gallery
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Explanation Details */}
            <div className="lg:col-span-5 space-y-4 text-xs font-mono text-[#D8C7A3] leading-relaxed">
              {simulationStep === 'cosmic' && (
                <div className="space-y-2 animate-fadeIn">
                  <h5 className="font-serif text-lg font-bold text-[#F4EFE5]">
                    Naturally Occurring Cosmic Rays
                  </h5>
                  <p>
                    Galactic cosmic rays continuously strike Earth’s upper atmosphere, generating a continuous cascade of subatomic particles called <strong>muons</strong>.
                  </p>
                  <p>
                    Muons travel near the speed of light and can penetrate hundreds of meters of solid rock before either passing through or decaying.
                  </p>
                </div>
              )}

              {simulationStep === 'detector' && (
                <div className="space-y-2 animate-fadeIn">
                  <h5 className="font-serif text-lg font-bold text-[#F4EFE5]">
                    Differential Mass Attenuation
                  </h5>
                  <p>
                    When muons pass through solid limestone, they are scattered and absorbed in direct proportion to the mass of the rock.
                  </p>
                  <p>
                    If an empty cavity exists in the rock, muons pass through it with zero resistance. A detector placed below records an excess count of muons coming from that specific angle.
                  </p>
                </div>
              )}

              {simulationStep === 'discovery' && (
                <div className="space-y-2 animate-fadeIn">
                  <h5 className="font-serif text-lg font-bold text-[#F4EFE5]">
                    The 2017 & 2023 Confirmations
                  </h5>
                  <p>
                    Detectors in the Queen's Chamber and outside the pyramid recorded a massive statistically unassailable muon excess hovering directly above the Grand Gallery: the <strong>Big Void</strong> (minimum 30m long).
                  </p>
                  <p className="border-l-2 border-[#8A4F3D] pl-4 py-1 text-[#F4EFE5]">
                    In <strong>March 2023</strong>, an endoscope camera pushed through the northern entrance stones successfully photographed the "North Face Corridor": a 9m long vaulted passage.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
