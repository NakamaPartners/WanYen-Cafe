import React from 'react';
import { motion } from 'framer-motion';

const springConf = { type: "spring" as const, stiffness: 300, damping: 20 };

export function Catering() {
  return (
    <section id="catering" className="py-24 md:py-40 bg-[#E6F9F5] text-foreground relative overflow-hidden border-b-8 border-dashed border-accent/20">
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        
        <motion.div 
          initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springConf}
          className="md:w-1/2 relative order-2 md:order-1"
        >
          <div className="relative rounded-[3rem] overflow-hidden aspect-[3/4] max-w-md mx-auto border-[12px] border-white shadow-2xl shadow-accent/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/e1a185ee-7b70-4e41-a966-46da866ec92f/WanYenR2_31.jpeg"
              alt="Iced coffee with caramel scoop"
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
          {/* Fun little floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-secondary text-foreground font-black text-xl px-6 py-4 rounded-full border-4 border-white shadow-lg rotate-12"
          >
            Party Time! 🎉
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springConf}
          className="md:w-1/2 space-y-8 order-1 md:order-2"
        >
          <div className="inline-block bg-accent text-white font-extrabold px-5 py-2 rounded-full transform rotate-2 shadow-sm text-lg">
            Events & Wholesale
          </div>
          <h3 className="text-6xl md:text-8xl font-extrabold leading-none text-foreground">
            Bring WanYen <br/>to your next <span className="text-accent font-display inline-block mt-2">event.</span>
          </h3>
          <p className="text-2xl text-foreground/80 max-w-lg font-bold leading-relaxed">
            Whether it's a wedding, corporate gathering, or wholesale inquiry for your restaurant, we'd love to share our small-batch ice cream and signature desserts with your guests.
          </p>
          <motion.button 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-10 py-5 rounded-full text-xl font-black shadow-[0_8px_0_#00A388] hover:shadow-[0_4px_0_#00A388] hover:translate-y-1 transition-all inline-flex items-center gap-3 mt-4"
            onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
