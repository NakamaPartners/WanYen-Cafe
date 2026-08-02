import React from 'react';
import { motion } from 'framer-motion';

export function Catering() {
  return (
    <section id="catering" className="py-24 md:py-40 bg-accent text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-8"
        >
          <h2 className="text-sm font-bold text-white/80 uppercase tracking-widest">Events & Wholesale</h2>
          <h3 className="text-5xl md:text-7xl font-serif leading-tight">
            Bring WanYen to your next event.
          </h3>
          <p className="text-xl text-white/90 max-w-lg font-light leading-relaxed">
            Whether it's a wedding, corporate gathering, or wholesale inquiry for your restaurant, we'd love to share our small-batch ice cream and signature desserts with your guests.
          </p>
          <button 
            className="bg-white text-accent px-8 py-4 rounded-full text-lg font-bold hover:bg-white/90 transition-transform hover:scale-105 active:scale-95 inline-flex items-center gap-2 mt-4"
            onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 relative"
        >
          <div className="relative rounded-t-full rounded-b-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto border-8 border-white/20 shadow-2xl">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/e1a185ee-7b70-4e41-a966-46da866ec92f/WanYenR2_31.jpeg"
              alt="Iced coffee with caramel scoop"
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
