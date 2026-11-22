import React, { useState } from 'react';
import { PageId } from '../types';

export interface PageNavItem {
  id: PageId;
  number: string;
  title: string;
}

export const PAGES: PageNavItem[] = [
  { id: 'overview', number: '00', title: 'Overview' },
  { id: 'khufu', number: '01', title: 'Great Pyramid (Khufu)' },
  { id: 'interior', number: '02', title: 'Interior Architecture' },
  { id: 'khafre', number: '03', title: 'Pyramid of Khafre' },
  { id: 'menkaure', number: '04', title: 'Pyramid of Menkaure' },
  { id: 'sphinx', number: '05', title: 'The Great Sphinx' },
  { id: 'construction', number: '06', title: 'Building Giza & Nile' },
  { id: 'astronomy', number: '07', title: 'Archaeoastronomy' },
  { id: 'theories', number: '08', title: 'Theories & Evidence' },
  { id: 'sources', number: '09', title: 'Sources & Biblio' },
];

interface LeftSidebarNavProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenLegend: () => void;
}

export const LeftSidebarNav: React.FC<LeftSidebarNavProps> = ({
  activePage,
  onNavigate,
  onOpenLegend,
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  const handleSelectPage = (id: PageId) => {
    onNavigate(id);
    setMobileDrawerOpen(false);
  };

  const currentIndex = PAGES.findIndex((p) => p.id === activePage);
  const activePageData = PAGES[currentIndex >= 0 ? currentIndex : 0];

  const goToPrevious = () => {
    if (currentIndex > 0) {
      handleSelectPage(PAGES[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < PAGES.length - 1) {
      handleSelectPage(PAGES[currentIndex + 1].id);
    }
  };

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#1C1613]/95 border-b border-[#B49A72]/25 px-4 py-3 flex items-center justify-between backdrop-blur-md">
        <button
          type="button"
          onClick={() => setMobileDrawerOpen(true)}
          className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#E2D2B4] hover:text-[#F4EFE5] cursor-pointer whitespace-nowrap"
          aria-label="Open chapters menu"
        >
          <span className="text-[#E8C56E]">☰</span>
          <span>Chapters</span>
          <span className="text-[#D8C7A3]/80">({activePageData.number})</span>
        </button>

        <span className="text-xs font-serif text-[#F4EFE5] truncate max-w-[150px]">
          {activePageData.title}
        </span>

        <button
          type="button"
          onClick={onOpenLegend}
          className="text-xs font-mono uppercase text-[#E2D2B4] hover:text-[#F4EFE5] cursor-pointer whitespace-nowrap"
        >
          Evidence Key
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />

          <div className="relative w-72 max-w-[82vw] h-full bg-[#1C1613] text-[#F4EFE5] border-r border-[#B49A72]/25 shadow-2xl flex flex-col z-10">
            <div className="px-6 py-5 border-b border-[#B49A72]/20 flex items-center justify-between">
              <div>
                <span className="font-serif text-sm font-semibold tracking-wider uppercase text-[#F4EFE5] block">
                  Giza Pyramids
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[#E2D2B4]/85 uppercase block mt-0.5">
                  Chapters
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(false)}
                className="text-[#E2D2B4] hover:text-[#F4EFE5] p-1 font-mono text-base cursor-pointer"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
              {PAGES.map((page) => {
                const isActive = activePage === page.id;
                return (
                  <button
                    key={page.id}
                    type="button"
                    onClick={() => handleSelectPage(page.id)}
                    className={`w-full flex items-center gap-3 py-2.5 px-2 text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#F4EFE5] font-semibold'
                        : 'text-[#E2D2B4]/90 hover:text-[#F4EFE5]'
                    }`}
                  >
                    <span className={`font-mono text-xs w-6 shrink-0 tabular-nums ${isActive ? 'text-[#E8C56E] font-bold' : 'text-[#D8C7A3]/85'}`}>
                      {page.number}
                    </span>
                    <span className={`font-serif text-sm truncate ${isActive ? 'underline underline-offset-4 decoration-[#E8C56E]' : ''}`}>
                      {page.title}
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="px-5 py-4 border-t border-[#B49A72]/20 flex items-center justify-between text-xs font-mono text-[#E2D2B4]">
              <button
                type="button"
                onClick={goToPrevious}
                disabled={currentIndex <= 0}
                className="hover:text-[#F4EFE5] disabled:opacity-30 cursor-pointer"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileDrawerOpen(false);
                  onOpenLegend();
                }}
                className="text-[#E2D2B4] hover:text-[#F4EFE5] cursor-pointer"
              >
                Evidence Key
              </button>
              <button
                type="button"
                onClick={goToNext}
                disabled={currentIndex >= PAGES.length - 1}
                className="hover:text-[#F4EFE5] disabled:opacity-30 cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside
        id="desktop-left-sidebar"
        className="hidden lg:flex fixed top-0 left-0 h-screen w-64 z-40 bg-[#1C1613] text-[#F4EFE5] border-r border-[#B49A72]/20 flex-col"
      >
        <div className="px-6 py-7 border-b border-[#B49A72]/15">
          <button
            type="button"
            onClick={() => handleSelectPage('overview')}
            className="block text-left group focus:outline-none cursor-pointer"
          >
            <span className="font-serif text-base font-semibold tracking-wider uppercase text-[#F4EFE5] block group-hover:text-[#E2D2B4] transition-colors">
              Giza Pyramids
            </span>
          </button>
        </div>

        <nav
          aria-label="Chapter Navigation"
          className="flex-1 overflow-y-auto py-6 px-5 space-y-1.5 focus:outline-none"
        >
          {PAGES.map((page) => {
            const isActive = activePage === page.id;
            return (
              <button
                key={page.id}
                type="button"
                onClick={() => handleSelectPage(page.id)}
                className={`w-full flex items-center gap-3 py-2 text-left transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#F4EFE5] font-semibold'
                    : 'text-[#E2D2B4]/85 hover:text-[#F4EFE5]'
                }`}
              >
                <span className={`font-mono text-xs w-6 shrink-0 tabular-nums ${isActive ? 'text-[#E8C56E] font-bold' : 'text-[#D8C7A3]/85'}`}>
                  {page.number}
                </span>
                <span className={`font-serif text-[13px] tracking-wide truncate ${isActive ? 'underline underline-offset-4 decoration-[#E8C56E] decoration-2' : ''}`}>
                  {page.title}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="px-5 py-5 border-t border-[#B49A72]/15 space-y-3">
          <button
            type="button"
            onClick={onOpenLegend}
            className="block text-xs font-mono uppercase tracking-wider text-[#E2D2B4] hover:text-[#F4EFE5] hover:underline underline-offset-4 cursor-pointer transition-colors"
          >
            Evidence Key →
          </button>

          <div className="flex items-center justify-between text-xs font-mono text-[#E2D2B4]/90 pt-1">
            <button
              type="button"
              onClick={goToPrevious}
              disabled={currentIndex <= 0}
              className="hover:text-[#F4EFE5] disabled:opacity-30 cursor-pointer transition-colors"
            >
              ← Prev
            </button>
            <span className="text-[11px] text-[#D8C7A3]/80 tabular-nums">
              {currentIndex + 1} / {PAGES.length}
            </span>
            <button
              type="button"
              onClick={goToNext}
              disabled={currentIndex >= PAGES.length - 1}
              className="hover:text-[#F4EFE5] disabled:opacity-30 cursor-pointer transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
