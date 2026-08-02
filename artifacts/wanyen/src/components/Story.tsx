import React from 'react';
import { motion } from 'framer-motion';

export function Story() {
  return (
    <section id="story" className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] max-w-md shadow-2xl shadow-secondary/10 mx-auto lg:mx-0">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/33add41b-80ee-42d3-937c-519716a795d6/IMG_1949.JPG"
                alt="WanYen Ice Cream in paper bags"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-10 -right-4 lg:-right-12 z-20 w-2/3 rounded-2xl overflow-hidden aspect-square shadow-xl border-8 border-background"
            >
              <img 
                src="https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/2d42afc8-c4d1-4a8a-909f-de4bcb80dae7/IMG_1951.JPG"
                alt="Assorted ice cream flavors"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-foreground leading-tight">
                From a craving to a <span className="italic text-accent">community.</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                We began as a small side hustle while our founder was still working in tech. She was craving really good matcha ice cream and couldn't find it anywhere in Utah — so she started making her own.
              </p>
              <p>
                That craving turned into WanYen. We spent our early days at pop-ups, events, and festivals before opening our first shop in Downtown Salt Lake City. 
              </p>
              <p>
                Today, we make our ice cream, desserts, and drinks in-house from scratch using premium ingredients, with flavors inspired by Asia and the memories of 'home.'
              </p>
              <p className="font-medium text-foreground text-xl font-serif italic pt-4">
                If you miss being in Asia — or just love trying something new — WanYen is here to welcome you.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
