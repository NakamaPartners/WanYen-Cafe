import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-secondary">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/d82a5590-219f-44a7-98d7-e5a403e6bc07/wanyen_1.jpg"
          alt="WanYen Cafe Interior"
          className="w-full h-full object-cover object-center"
          crossOrigin="anonymous"
        />
        {/* Dark warm overlay to make text pop and feel like a summer evening */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/40 to-background" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-background/10 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-white/90 text-sm font-medium tracking-wide uppercase">Downtown Salt Lake City, UT</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white max-w-4xl leading-[1.1]"
        >
          Scoop the <br/> <span className="text-primary italic">Happiness.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl font-light"
        >
          Asian inspired Ice cream & Dessert Cafe. <br className="hidden md:block" /> Made in-house from scratch, inspired by the memories of home.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
            data-testid="button-explore-menu"
          >
            Explore Menu
          </button>
          <a 
            href="https://www.doordash.com/store/wanyen-cafe-salt-lake-city-34741881/77939394/?srsltid=AfmBOoqyyrqwtU_5K2dapTaGxsfSz-J6QRvOnAsal5_HOBH-zt9olKBG"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-base font-bold hover:bg-white/20 transition-transform hover:scale-105 active:scale-95 text-center"
            data-testid="button-order-hero"
          >
            Order Delivery
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
