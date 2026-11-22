import React, { useEffect, useState } from 'react';
import { LeftSidebarNav, PAGES } from './components/LeftSidebarNav';
import { HeroSection } from './components/HeroSection';
import { KhufuPage } from './components/KhufuPage';
import { PyramidProfilePage } from './components/PyramidProfilePage';
import { GreatSphinx } from './components/GreatSphinx';
import { ConstructionPage } from './components/ConstructionPage';
import { AstronomySection } from './components/AstronomySection';
import { TheoriesAndEvidencePage } from './components/TheoriesAndEvidencePage';
import { SourcesBibliography } from './components/SourcesBibliography';
import { EpistemicLegendModal } from './components/EpistemicLegendModal';
import { PageId } from './types';

const VALID_PAGE_IDS = new Set<PageId>(PAGES.map((p) => p.id));

function getInitialPage(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId;
  return VALID_PAGE_IDS.has(hash) ? hash : 'overview';
}

export function App() {
  const [activePage, setActivePage] = useState<PageId>(getInitialPage);
  const [isLegendOpen, setIsLegendOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGE_IDS.has(hash)) {
        setActivePage(hash);
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const currentIndex = PAGES.findIndex((p) => p.id === activePage);
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;
  return (
    <div className="min-h-screen bg-[#1C1510] bg-limestone-grain text-[#F4EFE5] selection:bg-[#8A4F3D] selection:text-[#F4EFE5] font-sans antialiased">
      <LeftSidebarNav
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenLegend={() => setIsLegendOpen(true)}
      />

      <div className="pt-11 lg:pt-0 lg:pl-64 min-h-screen flex flex-col">
        <main className="flex-1">
          {activePage === 'overview' && (
            <HeroSection
              onNavigate={handleNavigate}
              onOpenLegend={() => setIsLegendOpen(true)}
            />
          )}
          {activePage === 'khufu' && <KhufuPage />}
          {activePage === 'khafre' && <PyramidProfilePage pyramidId="khafre" />}
          {activePage === 'menkaure' && <PyramidProfilePage pyramidId="menkaure" />}
          {activePage === 'sphinx' && <GreatSphinx />}
          {activePage === 'construction' && <ConstructionPage />}
          {activePage === 'astronomy' && <AstronomySection />}
          {activePage === 'theories' && <TheoriesAndEvidencePage />}
          {activePage === 'sources' && <SourcesBibliography />}
        </main>

        {/* Clean Unboxed Bottom Page Navigation */}
        <footer className="border-t border-[#B49A72]/20 bg-[#1C1510]/80 text-[#E2D2B4] py-7 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div>
              {prevPage ? (
                <button
                  type="button"
                  onClick={() => handleNavigate(prevPage.id)}
                  className="hover:text-[#F4EFE5] hover:underline underline-offset-4 cursor-pointer"
                >
                  ← {prevPage.number} {prevPage.title}
                </button>
              ) : (
                <span className="opacity-50">00 Overview</span>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsLegendOpen(true)}
              className="uppercase tracking-wider text-[#E2D2B4] hover:text-[#F4EFE5] hover:underline underline-offset-4 cursor-pointer"
            >
              Evidence Key
            </button>

            <div>
              {nextPage ? (
                <button
                  type="button"
                  onClick={() => handleNavigate(nextPage.id)}
                  className="text-[#F3D37A] hover:text-[#F4EFE5] hover:underline underline-offset-4 cursor-pointer font-semibold"
                >
                  {nextPage.number} {nextPage.title} →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleNavigate('overview')}
                  className="hover:text-[#F4EFE5] hover:underline underline-offset-4 cursor-pointer"
                >
                  Return to Overview →
                </button>
              )}
            </div>
          </div>
        </footer>
      </div>

      <EpistemicLegendModal
        isOpen={isLegendOpen}
        onClose={() => setIsLegendOpen(false)}
      />
    </div>
  );
}

export default App;
