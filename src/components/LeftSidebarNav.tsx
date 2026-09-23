import React, { useState, useEffect } from 'react';

export interface ChapterItem {
  id: string;
  number: string;
  title: string;
}

export const CHAPTERS: ChapterItem[] = [
  { id: 'hero', number: '00', title: 'Overview' },
  { id: 'pyramids', number: '01', title: 'The Three Giants' },
  { id: 'generations', number: '02', title: 'Three Generations' },
  { id: 'construction', number: '03', title: 'Building Giza' },
  { id: 'landscape', number: '04', title: 'Lost Nile Branch' },
  { id: 'sphinx', number: '05', title: 'The Great Sphinx' },
  { id: 'astronomy', number: '06', title: 'Archaeoastronomy' },
  { id: 'interior', number: '07', title: 'Inside Khufu' },
  { id: 'void', number: '08', title: 'The Great Void' },
  { id: 'theories', number: '09', title: 'Alternative Theories' },
  { id: 'epistemic', number: '10', title: 'Evidence Matrix' },
  { id: 'sources', number: '11', title: 'Sources & Biblio' },
];

interface LeftSidebarNavProps {
  onOpenLegend: () => void;
}

export const LeftSidebarNav: React.FC<LeftSidebarNavProps> = ({ onOpenLegend }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveSection(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0, 0.2, 0.5, 0.8],
    });

    CHAPTERS.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
    setMobileDrawerOpen(false);
  };

  const currentIndex = CHAPTERS.findIndex((c) => c.id === activeSection);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      scrollToChapter(CHAPTERS[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < CHAPTERS.length - 1) {
      scrollToChapter(CHAPTERS[currentIndex + 1].id);
    }
  };

  const activeChapterData = CHAPTERS[currentIndex >= 0 ? currentIndex : 0];

  return (
    <>
      {/* Top Global Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-[#171513]/40 pointer-events-none">
        <div
          className="h-full bg-[#8A4F3D] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* MOBILE MINIMAL TOP BAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#1C1613]/95 border-b border-[#B49A72]/20 px-4 py-2.5 flex items-center justify-between backdrop-blur-md">
        <button
          type="button"
          onClick={() => setMobileDrawerOpen(true)}
          className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#D8C7A3] hover:text-[#F4EFE5] cursor-pointer"
        >
          <span className="text-[#8A4F3D] font-bold">☰</span>
          <span>Index</span>
          <span className="text-[#8A4F3D] font-bold">({activeChapterData.number})</span>
        </button>

        <span className="text-xs font-serif text-[#F4EFE5]/90 truncate max-w-[140px]">
          {activeChapterData.title}
        </span>

        <button
          type="button"
          onClick={onOpenLegend}
          className="text-xs font-mono uppercase text-[#B49A72] hover:text-[#F4EFE5] cursor-pointer"
        >
          Evidence
        </button>
      </div>

      {/* MOBILE MINIMAL LEFT DRAWER */}
      {mobileDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />

          <div className="relative w-72 max-w-[80vw] h-full bg-[#1C1613] text-[#F4EFE5] border-r border-[#B49A72]/20 shadow-2xl flex flex-col z-10">
            {/* Header */}
            <div className="p-5 border-b border-[#B49A72]/15 flex items-center justify-between">
              <div>
                <span className="font-serif text-sm font-semibold tracking-wider uppercase text-[#F4EFE5] block">
                  Giza Pyramids
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[#B49A72]/70 uppercase block mt-0.5">
                  Chapters
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(false)}
                className="text-[#D8C7A3]/70 hover:text-[#F4EFE5] p-1 font-mono text-base"
                aria-label="Close index"
              >
                ✕
              </button>
            </div>

            {/* Chapter Links */}
            <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
              {CHAPTERS.map((ch) => {
                const isActive = activeSection === ch.id;
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => scrollToChapter(ch.id)}
                    className={`w-full flex items-center py-2 px-3 text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'border-l-2 border-[#8A4F3D] text-[#F4EFE5] font-semibold bg-white/[0.04]'
                        : 'border-l-2 border-transparent text-[#D8C7A3]/70 hover:text-[#F4EFE5] hover:bg-white/[0.02]'
                    }`}
                  >
                    <span className="font-mono text-xs text-[#B49A72]/70 w-7 shrink-0">
                      {ch.number}
                    </span>
                    <span className="font-serif text-sm truncate">
                      {ch.title}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-[#B49A72]/15 flex items-center justify-between text-xs font-mono text-[#D8C7A3]/80">
              <button
                type="button"
                onClick={goToPrevious}
                disabled={currentIndex <= 0}
                className="hover:text-[#F4EFE5] disabled:opacity-20 cursor-pointer"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileDrawerOpen(false);
                  onOpenLegend();
                }}
                className="text-[#B49A72] hover:text-[#F4EFE5] cursor-pointer"
              >
                Evidence Key
              </button>
              <button
                type="button"
                onClick={goToNext}
                disabled={currentIndex >= CHAPTERS.length - 1}
                className="hover:text-[#F4EFE5] disabled:opacity-20 cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP MINIMAL LEFT SIDEBAR */}
      <aside
        id="desktop-left-sidebar"
        className="hidden lg:flex fixed top-0 left-0 h-screen w-64 z-40 bg-[#1C1613] text-[#F4EFE5] border-r border-[#B49A72]/20 flex-col"
      >
        {/* Clean Typographic Header */}
        <div className="px-6 py-6 border-b border-[#B49A72]/15">
          <a href="#hero" className="block group focus:outline-none">
            <span className="font-serif text-sm font-semibold tracking-wider uppercase text-[#F4EFE5] block group-hover:text-[#D8C7A3] transition-colors">
              Giza Pyramids
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#B49A72]/70 block mt-0.5">
              Interactive Story
            </span>
          </a>
        </div>

        {/* Minimal Chapter Options (No nested card boxes, no icons) */}
        <nav
          aria-label="Chapter Index"
          className="flex-1 overflow-y-auto py-4 px-3 space-y-1 focus:outline-none"
        >
          {CHAPTERS.map((ch) => {
            const isActive = activeSection === ch.id;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => scrollToChapter(ch.id)}
                className={`w-full flex items-center justify-between py-2 px-3 text-left transition-all cursor-pointer rounded-xs ${
                  isActive
                    ? 'border-l-2 border-[#8A4F3D] text-[#F4EFE5] font-semibold bg-white/[0.08] shadow-xs'
                    : 'border-l-2 border-transparent text-[#D8C7A3]/75 hover:text-[#F4EFE5] hover:bg-white/[0.04] hover:border-[#8A4F3D]/50'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="font-mono text-xs text-[#B49A72] w-6 shrink-0 font-semibold">
                    {ch.number}
                  </span>
                  <span className="font-serif text-xs tracking-wide truncate">
                    {ch.title}
                  </span>
                </div>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#8A4F3D] shrink-0" />}
              </button>
            );
          })}
        </nav>

        {/* Clean, Understated Footer */}
        <div className="px-4 py-4 border-t border-[#B49A72]/15 flex items-center justify-between text-xs font-mono text-[#D8C7A3]">
          <button
            type="button"
            onClick={goToPrevious}
            disabled={currentIndex <= 0}
            className="px-2 py-1 border border-[#B49A72]/20 hover:border-[#B49A72]/50 hover:bg-white/5 hover:text-[#F4EFE5] disabled:opacity-20 cursor-pointer transition-all rounded-xs"
          >
            ← Prev
          </button>

          <button
            type="button"
            onClick={onOpenLegend}
            className="px-2.5 py-1 text-xs font-mono uppercase bg-[#8A4F3D] hover:bg-[#a15e4a] text-[#F4EFE5] border border-[#8A4F3D] rounded-xs transition-all shadow-xs cursor-pointer font-semibold"
          >
            Evidence Key
          </button>

          <button
            type="button"
            onClick={goToNext}
            disabled={currentIndex >= CHAPTERS.length - 1}
            className="px-2 py-1 border border-[#B49A72]/20 hover:border-[#B49A72]/50 hover:bg-white/5 hover:text-[#F4EFE5] disabled:opacity-20 cursor-pointer transition-all rounded-xs"
          >
            Next →
          </button>
        </div>
      </aside>
    </>
  );
};
