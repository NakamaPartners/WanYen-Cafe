import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import logo from '@assets/image_1785686573989.png';
import { links } from '@/lib/wanyen-content';

const navLinks = [
  { label: 'Story', href: '/story' },
  { label: 'Menu', href: '/menu' },
  { label: 'Catering', href: '/catering' },
  { label: 'Visit', href: '/visit' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { scrollY } = useScroll();
  const onHomeHero = location === '/' && !isScrolled;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 48);
  });

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          onHomeHero
            ? 'border-transparent bg-transparent py-4 text-white md:py-5'
            : 'border-[#2f1621]/15 bg-[#fff9f1]/95 py-2 text-[#2f1621] backdrop-blur-xl md:py-3'
        }`}
      >
        <div className="page-wrap flex items-center justify-between">
          <Link href="/" className="relative z-50" aria-label="WanYen Cafe home">
            <img
              src={logo}
              alt="WanYen Cafe"
              className={`h-16 w-16 object-contain transition-all md:h-[4.75rem] md:w-[4.75rem] ${
                onHomeHero ? 'brightness-0 invert drop-shadow-sm' : ''
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navLinks.map((item) => {
              const active = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] transition-colors ${
                    active
                      ? 'border-current'
                      : 'border-transparent hover:border-current/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={links.order}
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-3 border px-6 py-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition-colors ${
                onHomeHero
                  ? 'border-white bg-white text-[#d92a6f] hover:bg-transparent hover:text-white'
                  : 'border-[#2f1621] bg-[#2f1621] text-white hover:bg-transparent hover:text-[#2f1621]'
              }`}
            >
              Order online
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-50 flex h-11 w-11 items-center justify-center border border-current lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex bg-[#5c1736] px-8 pb-12 pt-28 text-white lg:hidden"
          >
            <nav className="flex w-full flex-col justify-between" aria-label="Mobile navigation">
              <div className="border-t border-white/30">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="border-b border-white/30"
                  >
                    <Link
                      href={item.href}
                      className="flex items-baseline justify-between py-5 font-editorial text-4xl font-light"
                    >
                      {item.label}
                      <span className="font-sans text-[0.65rem] tracking-[0.2em]">0{index + 1}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <a
                href={links.order}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-white pb-3 text-xs font-bold uppercase tracking-[0.18em]"
              >
                Order online <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
