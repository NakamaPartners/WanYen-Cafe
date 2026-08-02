import React from 'react';
import { motion } from 'framer-motion';

const springConf = { type: "spring", stiffness: 300, damping: 20 };

export function CTA() {
  return (
    <section className="py-32 md:py-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      
      {/* Decorative stars / confetti */}
      <motion.svg animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-20 left-10 text-white/30" width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z"/></motion.svg>
      <motion.svg animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-20 right-10 text-white/30" width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z"/></motion.svg>
      <motion.svg animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-1/2 left-[80%] text-white/40" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></motion.svg>
      <motion.svg animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute bottom-1/3 left-1/4 text-white/40" width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" transform="rotate(45 12 12)"/></motion.svg>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={springConf}
          className="text-7xl md:text-9xl font-display text-white mb-8 leading-tight drop-shadow-xl"
        >
          Share the sweetness.
        </motion.h2>
        
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...springConf, delay: 0.1 }}
          className="text-2xl md:text-3xl text-white font-extrabold max-w-3xl mx-auto mb-16 drop-shadow-md"
        >
          Treat someone special to the flavors of WanYen, or bring the party to you. 🥳
        </motion.p>
        
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...springConf, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.wanyenslc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-full text-xl font-black shadow-[0_8px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_0_rgba(0,0,0,0.1)] hover:translate-y-1 transition-all text-center"
            data-testid="button-gift-cards"
          >
            Buy Gift Cards
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/wanyen.slc/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border-4 border-white text-white px-10 py-5 rounded-full text-xl font-black hover:bg-white/10 shadow-[0_8px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_0_rgba(0,0,0,0.1)] hover:translate-y-1 transition-all text-center backdrop-blur-sm"
            data-testid="button-instagram-cta"
          >
            Follow on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
