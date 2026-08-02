import React from 'react';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif text-secondary mb-6 leading-tight"
        >
          Share the sweetness.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-secondary/80 max-w-2xl mx-auto mb-12"
        >
          Treat someone special to the flavors of WanYen, or bring the party to you.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://www.wanyenslc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary/90 transition-transform hover:scale-105 active:scale-95 text-center"
            data-testid="button-gift-cards"
          >
            Buy Gift Cards
          </a>
          <a 
            href="https://www.instagram.com/wanyen.slc/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border-2 border-secondary text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary/10 transition-transform hover:scale-105 active:scale-95 text-center"
            data-testid="button-instagram-cta"
          >
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
