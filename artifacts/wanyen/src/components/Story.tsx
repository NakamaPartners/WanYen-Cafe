import React from 'react';
import { motion } from 'framer-motion';

const springConf = { type: "spring", stiffness: 300, damping: 20 };

export function Story() {
  return (
    <section id="story" className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      {/* SVG Decorations */}
      <svg className="absolute top-32 left-[10%] text-primary opacity-50" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z"/></svg>
      <svg className="absolute bottom-32 right-[10%] text-secondary opacity-80" width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConf}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 border-[12px] border-secondary shadow-xl shadow-secondary/20">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/33add41b-80ee-42d3-937c-519716a795d6/IMG_1949.JPG"
                alt="WanYen Ice Cream in paper bags"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
            <motion.div 
              initial={{ scale: 0, rotate: 20 }}
              whileInView={{ scale: 1, rotate: 6 }}
              whileHover={{ scale: 1.05, rotate: 10 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springConf, delay: 0.2 }}
              className="absolute -bottom-10 -right-4 lg:-right-12 z-20 w-2/3 rounded-3xl overflow-hidden aspect-square border-[12px] border-primary shadow-xl shadow-primary/20 bg-primary"
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
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConf}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <div className="inline-block bg-accent text-white font-extrabold px-4 py-2 rounded-full mb-6 transform -rotate-2">Our Story</div>
              <h3 className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.1]">
                From a craving to a <br/><span className="text-primary font-display text-6xl md:text-8xl inline-block mt-2" style={{ textShadow: '4px 4px 0px #FFD23F' }}>community.</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-foreground/80 text-xl font-medium leading-relaxed">
              <p>
                We began as a small side hustle while our founder was still working in tech. She was craving really good matcha ice cream and couldn't find it anywhere in Utah — so she started making her own.
              </p>
              <p>
                That craving turned into WanYen. We spent our early days at pop-ups, events, and festivals before opening our first shop in Downtown Salt Lake City. 
              </p>
              <p>
                Today, we make our ice cream, desserts, and drinks in-house from scratch using premium ingredients, with flavors inspired by Asia and the memories of 'home.'
              </p>
              <motion.p 
                whileHover={{ scale: 1.02 }}
                className="font-display text-primary text-3xl pt-6 leading-relaxed bg-white/50 p-6 rounded-2xl border-4 border-dashed border-primary/20"
              >
                If you miss being in Asia — or just love trying something new — WanYen is here to welcome you. 💖
              </motion.p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
