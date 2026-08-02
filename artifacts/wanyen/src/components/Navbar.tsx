import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import logo from '@assets/image_1785686573989.png';

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.button 
          whileHover={{ rotate: [-5, 5, -5, 5, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="z-50"
          data-testid="link-home"
        >
          <img
            src={logo}
            alt="WanYen Cafe"
            className="h-16 w-auto drop-shadow-md"
          />
        </motion.button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-lg font-extrabold tracking-wide transition-colors ${
                isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-secondary drop-shadow-md'
              }`}
              data-testid={`link-${link.id}`}
            >
              {link.name}
            </motion.button>
          ))}
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.wanyenslc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3 rounded-full text-lg font-black transition-all ml-4 ${
              isScrolled 
                ? 'bg-primary text-white shadow-[0_4px_0_#cc0052] hover:shadow-[0_2px_0_#cc0052] hover:translate-y-[2px]' 
                : 'bg-white text-primary shadow-[0_4px_0_#FFD23F] hover:shadow-[0_2px_0_#FFD23F] hover:translate-y-[2px]'
            }`}
            data-testid="button-order-nav"
          >
            Order Online
          </motion.a>
        </nav>
        
        {/* Mobile menu button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className={`md:hidden text-3xl p-2 rounded-full shadow-md z-50 ${
            isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'
          }`}
          aria-label="Menu"
        >
          ☰
        </motion.button>
      </div>
    </motion.header>
  );
}
