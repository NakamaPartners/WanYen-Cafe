import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const springConf = { type: "spring", stiffness: 300, damping: 20 };
const floatAnim = {
  y: [0, -15, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-center bg-primary">
      
      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col md:flex-row z-0">
        <div className="w-full md:w-[55%] h-full bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
          {/* Confetti / star SVGs */}
          <svg className="absolute top-20 left-20 text-white/30 animate-[spin_10s_linear_infinite]" width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/></svg>
          <svg className="absolute bottom-40 right-20 text-white/20 animate-bounce" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
          <svg className="absolute top-1/2 left-10 text-white/30 animate-pulse" width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z"/></svg>
        </div>
        <div className="w-full md:w-[45%] h-full relative" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}>
          <motion.img
            style={{ y }}
            src="https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/d82a5590-219f-44a7-98d7-e5a403e6bc07/wanyen_1.jpg"
            alt="WanYen Cafe Interior"
            className="absolute inset-0 w-full h-full object-cover object-center"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center md:items-start text-center md:text-left mt-20">
        
        <motion.div animate={floatAnim}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ...springConf, delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full bg-white shadow-xl shadow-black/10 border-2 border-white/20"
          >
            <span className="text-xl">🍦</span>
            <span className="text-primary font-extrabold text-sm tracking-wide uppercase">Utah's First Asian Ice Cream Cafe</span>
          </motion.div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springConf, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-[7.5rem] font-extrabold text-white leading-[1.1]"
          style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}
        >
          Scoop the <br/> 
          <motion.span 
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: -4 }}
            transition={{ ...springConf, delay: 0.4 }}
            className="inline-block text-secondary font-display mt-2"
            style={{ textShadow: '6px 6px 0px #FF4D8D' }}
          >
            Happiness.
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConf, delay: 0.3 }}
          className="mt-8 text-xl md:text-2xl text-white max-w-xl font-bold drop-shadow-md"
        >
          Asian inspired Ice cream & Dessert Cafe. <br className="hidden md:block" /> Made in-house from scratch, inspired by the memories of home.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springConf, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <motion.button 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary px-10 py-5 rounded-full text-xl font-black shadow-[0_8px_0_#FFD23F] hover:shadow-[0_4px_0_#FFD23F] hover:translate-y-1 transition-all"
            data-testid="button-explore-menu"
          >
            Explore Menu
          </motion.button>
          <motion.a 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/wanyen.slc/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-white border-4 border-white px-10 py-5 rounded-full text-xl font-black hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2 backdrop-blur-sm"
            data-testid="button-instagram-hero"
          >
            <span className="text-secondary text-2xl drop-shadow-md">✦</span> Follow @wanyen.slc
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={floatAnim}
        className="absolute bottom-10 left-1/2 md:left-24 -translate-x-1/2 md:translate-x-0 flex flex-col items-center gap-2 text-white z-10"
      >
        <span className="text-sm font-black uppercase tracking-widest drop-shadow-md">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-2 bg-white text-primary rounded-full p-2 shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
