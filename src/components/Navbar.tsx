import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenLegend: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLegend }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Pyramids', href: '#pyramids' },
    { label: 'Generations', href: '#generations' },
    { label: 'Construction', href: '#construction' },
    { label: 'Waterways', href: '#landscape' },
    { label: 'The Sphinx', href: '#sphinx' },
    { label: 'Astronomy', href: '#astronomy' },
    { label: 'Inside Khufu', href: '#interior' },
    { label: 'The Void', href: '#void' },
    { label: 'Theories', href: '#theories' },
    { label: 'Evidence Matrix', href: '#epistemic' },
    { label: 'Sources', href: '#sources' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-[#2B211B]/20">
        <div
          className="h-full bg-[#8A4F3D] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        id="main-navigation-bar"
        className={`fixed top-1 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2B211B]/95 text-[#F4EFE5] backdrop-blur-md shadow-md py-3 border-b border-[#B49A72]/30'
            : 'bg-[#2B211B] text-[#F4EFE5] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand / Title */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            id="nav-logo-link"
          >
            <div className="w-8 h-8 rounded-none border border-[#B49A72] flex items-center justify-center bg-[#8A4F3D]/20 text-[#D8C7A3] group-hover:border-[#8A4F3D] transition-colors">
              <span className="font-serif font-black text-sm">G</span>
            </div>
            <div>
              <span className="block font-serif text-sm md:text-base font-bold tracking-wider text-[#F4EFE5] uppercase">
                Giza Pyramids
              </span>
              <span className="block font-mono text-[10px] text-[#B49A72] tracking-widest uppercase">
                Archaeological Data Story
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 py-1.5 text-xs font-mono tracking-wider text-[#D8C7A3] hover:text-[#F4EFE5] hover:bg-[#8A4F3D]/30 transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-3">
            {/* Epistemic Legend Button */}
            <button
              id="open-epistemic-legend-btn"
              type="button"
              onClick={onOpenLegend}
              className="px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider bg-[#8A4F3D] hover:bg-[#a15e4a] text-[#F4EFE5] border border-[#B49A72]/40 transition-all shadow-sm focus:outline-none cursor-pointer"
              title="Open Epistemic Evidence Scale Legend"
            >
              Evidence Standard
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-nav-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#D8C7A3] hover:text-[#F4EFE5] focus:outline-none font-mono text-xl"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#2B211B] border-t border-[#B49A72]/30 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto shadow-2xl animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-mono text-[#D8C7A3] hover:text-[#F4EFE5] hover:bg-[#8A4F3D]/30 border border-[#B49A72]/20 uppercase"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#B49A72]/30 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLegend();
                }}
                className="w-full py-2.5 bg-[#8A4F3D] text-[#F4EFE5] text-xs font-mono uppercase font-bold text-center border border-[#B49A72]/40"
              >
                View Evidence Standard
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
