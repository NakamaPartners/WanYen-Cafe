import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Our Story', id: 'story' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Catering', id: 'catering' },
    { name: 'Location', id: 'location' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-foreground' : 'text-white'
          }`}
          data-testid="link-home"
        >
          WanYen<span className="text-primary">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground/80' : 'text-white/90'
              }`}
              data-testid={`link-${link.id}`}
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://www.doordash.com/store/wanyen-cafe-salt-lake-city-34741881/77939394/?srsltid=AfmBOoqyyrqwtU_5K2dapTaGxsfSz-J6QRvOnAsal5_HOBH-zt9olKBG"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
            data-testid="button-order-nav"
          >
            Order Online
          </a>
        </nav>
        
        {/* Mobile menu button - just aesthetic for now to keep focus on scroll experience */}
        <button className="md:hidden text-2xl" aria-label="Menu">
          <span className={isScrolled ? 'text-foreground' : 'text-white'}>☰</span>
        </button>
      </div>
    </motion.header>
  );
}
