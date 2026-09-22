import React, { useState } from 'react';
import { KHUFU_CHAMBERS } from '../data/khufuInteriorData';
import { ChamberItem } from '../types';
import { EvidenceBadge } from './EvidenceBadge';
import { Eye, Info, Layers, Compass, HelpCircle, Camera } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface KhufuInteriorProps {
  onSelectEvidence: (claimId: string) => void;
}

export const KhufuInterior: React.FC<KhufuInteriorProps> = ({ onSelectEvidence }) => {
  const [selectedChamberId, setSelectedChamberId] = useState<string>('grand-gallery');
  const [filterType, setFilterType] = useState<'all' | 'known' | 'detected' | 'shafts'>('all');

  const selectedChamber = KHUFU_CHAMBERS.find((c) => c.id === selectedChamberId) || KHUFU_CHAMBERS[0];

  const filteredChambers = KHUFU_CHAMBERS.filter((c) => {
    if (filterType === 'known') return c.status === 'KNOWN_STRUCTURE' && c.iconType !== 'shaft';
    if (filterType === 'detected') return c.status === 'DETECTED_SPACE';
    if (filterType === 'shafts') return c.iconType === 'shaft';
    return true;
  });

  return (
    <section id="interior" className="py-20 bg-[#F4EFE5] text-[#171513] border-b border-[#D8C7A3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="border-b border-[#D8C7A3] pb-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A4F3D] font-bold">
                Chapter 08 // Architectural Anatomy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B211B] mt-1">
                Inside the Great Pyramid
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <EvidenceBadge level="ESTABLISHED" onClick={() => onSelectEvidence('khufu-authorship')} />
              <EvidenceBadge level="UNKNOWN" onClick={() => onSelectEvidence('big-void-purpose')} />
            </div>
          </div>
          <p className="text-base text-[#2B211B]/80 max-w-3xl mt-3 leading-relaxed">
            Unlike Khafre and Menkaure, whose burial vaults are cut primarily into the subterranean bedrock, Khufu’s Great Pyramid contains three distinct chamber levels elevated deep inside the stone mass. Click any chamber on the architectural cross-section to explore its dimensions, materials, and archaeological status.
          </p>
        </div>

        {/* Filter Toolbar (Clean Underline Tabs) */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#2B211B]/15 pb-3 mb-8">
          <div className="flex flex-wrap items-baseline gap-6">
            <span className="text-xs font-mono font-bold text-[#8A4F3D] uppercase tracking-wider">Highlight:</span>
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`pb-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border-b-2 -mb-3.5 ${
                filterType === 'all' ? 'border-[#8A4F3D] text-[#2B211B] font-bold' : 'border-transparent text-[#2B211B]/60 hover:text-[#2B211B]'
              }`}
            >
              All Features (14)
            </button>
            <button
              type="button"
              onClick={() => setFilterType('known')}
              className={`pb-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border-b-2 -mb-3.5 ${
                filterType === 'known' ? 'border-[#8A4F3D] text-[#2B211B] font-bold' : 'border-transparent text-[#2B211B]/60 hover:text-[#2B211B]'
              }`}
            >
              Known Chambers
            </button>
            <button
              type="button"
              onClick={() => setFilterType('detected')}
              className={`pb-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border-b-2 -mb-3.5 ${
                filterType === 'detected' ? 'border-[#8A4F3D] text-[#2B211B] font-bold' : 'border-transparent text-[#2B211B]/60 hover:text-[#2B211B]'
              }`}
            >
              ScanPyramids Voids
            </button>
            <button
              type="button"
              onClick={() => setFilterType('shafts')}
              className={`pb-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border-b-2 -mb-3.5 ${
                filterType === 'shafts' ? 'border-[#8A4F3D] text-[#2B211B] font-bold' : 'border-transparent text-[#2B211B]/60 hover:text-[#2B211B]'
              }`}
            >
              Passages & Shafts
            </button>
          </div>

          <div className="text-xs font-mono text-[#8A4F3D] flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" /> Interactive Hotspots Active
          </div>
        </div>

        {/* Interactive Architectural Cutaway Stage (Open Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* SVG Cutaway Diagram (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1C1613] p-4 sm:p-6 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-[#D8C7A3]/70 border-b border-[#B49A72]/20 pb-2 mb-4">
              <span>KHUFU CROSS-SECTION (NORTH → SOUTH)</span>
              <span>DATUM 0.0m = BEDROCK</span>
            </div>

            <div className="relative w-full aspect-[4/3] bg-[#171513]">
              <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                  {/* Masonry Pattern */}
                  <pattern id="masonry" width="20" height="10" patternUnits="userSpaceOnUse">
                    <rect width="20" height="10" fill="#241B16" />
                    <line x1="0" y1="10" x2="20" y2="10" stroke="#33261F" strokeWidth="0.8" />
                    <line x1="20" y1="0" x2="20" y2="10" stroke="#33261F" strokeWidth="0.8" />
                  </pattern>
                </defs>

                {/* Pyramid Exterior Masonry Silhouette */}
                {/* Base from X=80 to X=720 (640px = 230m). Apex at X=400, Y=80 (400px height = 146m). Ground at Y=480 */}
                <polygon points="80,480 400,80 720,480" fill="url(#masonry)" stroke="#B49A72" strokeWidth="2" />
                
                {/* Weathered flattened apex line */}
                <line x1="390" y1="98" x2="410" y2="98" stroke="#8A4F3D" strokeWidth="2" />

                {/* Subterranean Bedrock Zone */}
                <rect x="0" y="480" width="800" height="120" fill="#1C1410" stroke="#B49A72" strokeWidth="1" />
                <text x="30" y="505" fill="#B49A72" fontSize="11" fontFamily="monospace">NATIVE BEDROCK (0.0 m)</text>
                <text x="30" y="580" fill="#8A4F3D" fontSize="10" fontFamily="monospace">-30 m LEVEL</text>

                {/* 1. Descending Passage: Entrance at X=300, Y=440 to X=460, Y=560 */}
                <line x1="300" y1="440" x2="460" y2="560" stroke="#D8C7A3" strokeWidth="4" />
                <line x1="460" y1="560" x2="495" y2="560" stroke="#D8C7A3" strokeWidth="4" />

                {/* 2. Subterranean Chamber: at X=495, Y=550 to X=555, Y=575 */}
                <rect x="495" y="545" width="60" height="30" fill="#45352B" stroke="#D8C7A3" strokeWidth="2" />

                {/* 3. Ascending Passage: from X=340, Y=470 up to X=400, Y=415 */}
                <line x1="340" y1="470" x2="400" y2="415" stroke="#D8C7A3" strokeWidth="4" />
                {/* Granite Plugs at base of ascending */}
                <line x1="340" y1="470" x2="350" y2="460" stroke="#8A4F3D" strokeWidth="5" />

                {/* 4. Well Shaft: connects from X=400, Y=415 down through grotto to X=420, Y=530 */}
                <path d="M 400,415 Q 370,460 380,480 Q 375,510 420,530" stroke="#8A4F3D" strokeWidth="2" strokeDasharray="3 3" fill="none" />

                {/* 5. Horizontal corridor to Queen's Chamber */}
                <line x1="400" y1="415" x2="400" y2="395" stroke="#D8C7A3" strokeWidth="3" />
                <rect x="385" y="380" width="30" height="25" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="2" />

                {/* 6. Grand Gallery: climbs from X=400, Y=415 to X=480, Y=330 */}
                <line x1="400" y1="415" x2="480" y2="330" stroke="#D8C7A3" strokeWidth="8" />

                {/* 7. ScanPyramids Big Void: hovering parallel above Grand Gallery */}
                <rect 
                  x="410" y="270" width="80" height="35" rx="4"
                  fill="#8A4F3D" fillOpacity="0.4"
                  stroke="#8A4F3D" strokeWidth="2" strokeDasharray="4 4"
                />
                <text x="450" y="292" fill="#F4EFE5" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  BIG VOID
                </text>

                {/* 8. ScanPyramids North Face Corridor: behind entrance chevron */}
                <rect 
                  x="305" y="420" width="30" height="15" 
                  fill="#8A4F3D" fillOpacity="0.5" 
                  stroke="#8A4F3D" strokeWidth="1.5" strokeDasharray="2 2" 
                />

                {/* 9. Antechamber & King's Chamber */}
                <rect x="480" y="330" width="15" height="18" fill="#45352B" stroke="#D8C7A3" strokeWidth="1.5" />
                <rect x="495" y="325" width="45" height="25" fill="#8A4F3D" stroke="#F4EFE5" strokeWidth="2" />

                {/* 10. Relieving Chambers (5 tiers stacked above King's Chamber) */}
                <rect x="495" y="315" width="45" height="6" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="0.8" />
                <rect x="495" y="306" width="45" height="6" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="0.8" />
                <rect x="495" y="297" width="45" height="6" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="0.8" />
                <rect x="495" y="288" width="45" height="6" fill="#5C4A3E" stroke="#D8C7A3" strokeWidth="0.8" />
                <polygon points="495,285 517,270 540,285" fill="#8A4F3D" stroke="#D8C7A3" strokeWidth="1" />

                {/* 11. King's Chamber Shafts */}
                {/* North Shaft (32°): from X=495, Y=335 to X=280, Y=200 */}
                <line x1="495" y1="335" x2="280" y2="200" stroke="#B49A72" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* South Shaft (45°): from X=540, Y=335 to X=680, Y=195 */}
                <line x1="540" y1="335" x2="680" y2="195" stroke="#B49A72" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* 12. Queen's Chamber Shafts (blind) */}
                <line x1="385" y1="390" x2="260" y2="285" stroke="#B49A72" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="415" y1="390" x2="560" y2="275" stroke="#B49A72" strokeWidth="1" strokeDasharray="2 2" />

                {/* Interactive Clickable Hotspots for Chambers */}
                {filteredChambers.map((c) => {
                  const isSelected = selectedChamberId === c.id;
                  // Position coordinates map roughly to graphic
                  const coordMap: Record<string, { x: number; y: number }> = {
                    'original-entrance': { x: 295, y: 440 },
                    'north-face-corridor': { x: 320, y: 425 },
                    'descending-passage': { x: 420, y: 525 },
                    'subterranean-chamber': { x: 525, y: 560 },
                    'well-shaft-grotto': { x: 380, y: 470 },
                    'ascending-passage': { x: 370, y: 440 },
                    'queens-chamber': { x: 400, y: 390 },
                    'queens-shafts': { x: 320, y: 340 },
                    'grand-gallery': { x: 440, y: 370 },
                    'big-void': { x: 450, y: 285 },
                    'antechamber': { x: 488, y: 340 },
                    'kings-chamber': { x: 517, y: 337 },
                    'relieving-chambers': { x: 517, y: 295 },
                    'kings-shafts': { x: 610, y: 265 }
                  };

                  const pos = coordMap[c.id] || { x: 400, y: 300 };

                  return (
                    <g 
                      key={c.id}
                      onClick={() => setSelectedChamberId(c.id)}
                      className="cursor-pointer group"
                    >
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isSelected ? 10 : 6}
                        fill={
                          c.status === 'DETECTED_SPACE'
                            ? '#8A4F3D'
                            : isSelected
                            ? '#F4EFE5'
                            : '#D8C7A3'
                        }
                        stroke="#171513"
                        strokeWidth="2"
                        className="transition-all duration-200"
                      />
                      {isSelected && (
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={16}
                          fill="none"
                          stroke="#8A4F3D"
                          strokeWidth="2"
                          className="animate-ping opacity-75"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#D8C7A3]/70">
              <span>● White/Gold = Known Architecture</span>
              <span>● Terracotta = Detected Void (ScanPyramids)</span>
            </div>
          </div>

          {/* Chamber Inspector Dossier (Open Editorial Layout) */}
          <div className="lg:col-span-5 text-[#171513]">
            <div className="border-b border-[#2B211B]/20 pb-4 mb-4">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-mono text-xs uppercase font-bold text-[#8A4F3D]">
                  {selectedChamber.status.replace('_', ' ')}
                </span>
                <EvidenceBadge level={selectedChamber.evidenceLevel} size="sm" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2B211B]">
                {selectedChamber.name}
              </h3>
            </div>

            <div className="space-y-2 text-xs font-mono text-[#2B211B] mb-5">
              <div className="flex justify-between border-b border-[#2B211B]/10 pb-1">
                <span className="font-bold">Elevation:</span>
                <span>{selectedChamber.elevationMeters > 0 ? `+${selectedChamber.elevationMeters}m above bedrock` : `${selectedChamber.elevationMeters}m below bedrock`}</span>
              </div>
              <div className="flex justify-between border-b border-[#2B211B]/10 pb-1">
                <span className="font-bold">Dimensions:</span>
                <span className="text-right">{selectedChamber.dimensions}</span>
              </div>
              <div className="flex justify-between border-b border-[#2B211B]/10 pb-1">
                <span className="font-bold">Materials:</span>
                <span className="text-right">{selectedChamber.material}</span>
              </div>
            </div>

            {/* Visual Photographic Survey Embed */}
            <div className="mb-5 overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES.grandGallery}
                  alt="Interior photograph looking up the soaring corbelled vault of the Grand Gallery"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#D8C7A3]">
                  <span className="bg-[#171513]/90 px-2 py-0.5 flex items-center gap-1.5">
                    <Camera className="w-3 h-3 text-[#8A4F3D]" /> Grand Gallery Corbelled Vault (8.6m)
                  </span>
                  <span className="text-[#D8C7A3]/90 bg-[#171513]/80 px-2 py-0.5">
                    26° Ascending Slope
                  </span>
                </div>
              </div>
              <p className="text-[11px] font-mono text-[#2B211B]/70 pt-2 leading-relaxed">
                {selectedChamber.id === 'grand-gallery'
                  ? 'Active photographic survey: 47-meter ascending corbelled gallery with 8 overlapping tiers of limestone.'
                  : 'Architectural Context: Grand Gallery interior masonry ascending toward the King\'s Chamber.'}
              </p>
            </div>

            <div className="border-t border-[#2B211B]/15 pt-4 mb-4">
              <h5 className="font-mono text-xs font-bold text-[#8A4F3D] uppercase tracking-wider mb-1.5">
                Architectural Description
              </h5>
              <p className="text-sm text-[#171513]/90 leading-relaxed">
                {selectedChamber.description}
              </p>
            </div>

            <div className="border-t border-[#2B211B]/15 pt-4">
              <h5 className="font-mono text-xs font-bold text-[#2B211B] uppercase tracking-wider mb-1.5">
                Archaeological Discovery & Context
              </h5>
              <p className="text-xs text-[#2B211B]/80 leading-relaxed">
                {selectedChamber.archaeologicalDiscovery}
              </p>
            </div>

            {selectedChamber.debatedAspects && (
              <div className="mt-4 pt-3 border-t border-[#2B211B]/15">
                <span className="font-mono text-xs font-bold text-amber-800 uppercase block mb-1">
                  ⚠ Unresolved Question / Debated Aspect:
                </span>
                <p className="text-xs text-[#171513] italic border-l-2 border-amber-700/60 pl-3 py-1">
                  {selectedChamber.debatedAspects}
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
