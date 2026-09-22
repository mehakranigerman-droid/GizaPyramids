import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PyramidComparison } from './components/PyramidComparison';
import { TimelineGenerations } from './components/TimelineGenerations';
import { BuildingGiza } from './components/BuildingGiza';
import { AncientLandscape } from './components/AncientLandscape';
import { GreatSphinx } from './components/GreatSphinx';
import { AstronomySection } from './components/AstronomySection';
import { KhufuInterior } from './components/KhufuInterior';
import { TheVoidSection } from './components/TheVoidSection';
import { TheoriesSection } from './components/TheoriesSection';
import { EpistemicMatrix } from './components/EpistemicMatrix';
import { SourcesBibliography } from './components/SourcesBibliography';
import { EvidenceModal } from './components/EvidenceModal';
import { EpistemicLegendModal } from './components/EpistemicLegendModal';
import { EVIDENCE_RECORDS } from './data/evidenceData';
import { EvidenceRecord } from './types';

export function App() {
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<EvidenceRecord | null>(null);

  const handleSelectEvidenceById = (claimId: string) => {
    const record = EVIDENCE_RECORDS.find((r) => r.id === claimId);
    if (record) {
      setSelectedRecord(record);
    } else {
      // Fallback to legend if not a specific claim
      setIsLegendOpen(true);
    }
  };

  const handleScrollToFirstSection = () => {
    const el = document.getElementById('pyramids');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4EFE5] text-[#171513] selection:bg-[#8A4F3D] selection:text-[#F4EFE5] font-sans antialiased">
      {/* Navigation Header */}
      <Navbar onOpenLegend={() => setIsLegendOpen(true)} />

      <main>
        {/* Hero Section */}
        <HeroSection
          onBeginExploring={handleScrollToFirstSection}
          onOpenLegend={() => setIsLegendOpen(true)}
        />

        {/* Chapter 01: The Three Giants (Pyramid Scale & Geometry) */}
        <PyramidComparison onSelectEvidence={handleSelectEvidenceById} />

        {/* Chapter 02: Three Generations (Dynastic Succession) */}
        <TimelineGenerations onSelectEvidence={handleSelectEvidenceById} />

        {/* Chapter 03: A Machine Made of Stone (Labor, Materials, Ramps) */}
        <BuildingGiza onSelectEvidence={handleSelectEvidenceById} />

        {/* Chapter 04: The River That Disappeared (Ahramat Branch & Diary of Merer) */}
        <AncientLandscape onSelectEvidence={handleSelectEvidenceById} />

        {/* Chapter 05 & 10: The Great Sphinx & The Erosion Debate */}
        <GreatSphinx onSelectEvidence={handleSelectEvidenceById} />

        {/* Chapter 06 & 07: Archaeoastronomy & Orion Correlation */}
        <AstronomySection onSelectEvidence={handleSelectEvidenceById} />

        {/* Chapter 08: Inside the Great Pyramid (Khufu Architectural Anatomy) */}
        <KhufuInterior onSelectEvidence={handleSelectEvidenceById} />

        {/* Chapter 09: The Void (ScanPyramids Cosmic Muons) */}
        <TheVoidSection onSelectEvidence={handleSelectEvidenceById} />

        {/* Chapter 11: Extraordinary Claims (Critical Dossier) */}
        <TheoriesSection onSelectEvidence={handleSelectEvidenceById} />

        {/* Chapter 12: What We Know, What We Don't (The Evidence Matrix) */}
        <EpistemicMatrix onSelectRecord={(rec) => setSelectedRecord(rec)} />

        {/* Chapter 13: Sources & Scholarly Bibliography */}
        <SourcesBibliography />
      </main>

      {/* Epistemic Legend Modal */}
      <EpistemicLegendModal
        isOpen={isLegendOpen}
        onClose={() => setIsLegendOpen(false)}
      />

      {/* Claim-Specific Evidence Modal */}
      <EvidenceModal
        record={selectedRecord}
        onClose={() => setSelectedRecord(null)}
      />
    </div>
  );
}

export default App;
