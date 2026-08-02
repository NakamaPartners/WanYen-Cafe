import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/b1c1af03-74ba-4172-8a12-242d90a56ea2/WanYenR2_3.jpeg",
  "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/2064e9f1-130a-4715-9ee9-861a58d73eea/WanYenR2_7.jpeg",
  "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/4ec312ce-4236-4b04-8b0a-1425c81067c4/WanYenR2_30.jpeg",
  "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/e1a185ee-7b70-4e41-a966-46da866ec92f/WanYenR2_31.jpeg",
  "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/a0a06f29-ab83-4257-8d5b-489c09da2262/IMG_1954.JPG",
  "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/5fdc4765-b98b-45a5-bc75-a7607751af95/WanYenR2_19.jpeg",
  "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/de3fc37a-2fe5-492e-802d-4cb2daf82ed9/WanYenR2_14.jpeg",
];

const springConf = { type: "spring", stiffness: 300, damping: 20 };

export function Gallery() {
  const firstRow = [...images, ...images];
  const secondRow = [...images].reverse();
  const doubleSecondRow = [...secondRow, ...secondRow];

  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden relative border-t-8 border-dashed border-secondary/30">
      
      <div className="container mx-auto px-6 md:px-12 mb-16 relative z-10 text-center">
        <motion.div 
          initial={{ scale: 0, rotate: -5 }}
          whileInView={{ scale: 1, rotate: 2 }}
          viewport={{ once: true }}
          transition={springConf}
          className="inline-block bg-primary text-white font-extrabold text-lg px-8 py-4 rounded-full shadow-[4px_4px_0_#FFD23F] mb-6"
        >
          Made fresh, every single day. ✨
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConf}
          className="text-6xl md:text-8xl font-display text-foreground"
        >
          A feast for the eyes.
        </motion.h2>
      </div>

      <div className="relative w-full flex flex-col gap-6 overflow-hidden py-10 rotate-1 scale-105">
        
        {/* Row 1 */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 18, repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-6 px-3"
        >
          {firstRow.map((src, idx) => (
            <motion.div 
              whileHover={{ scale: 1.05, rotateZ: idx % 2 === 0 ? 3 : -3, zIndex: 10 }}
              key={`row1-${idx}`} 
              className={`relative overflow-hidden rounded-3xl flex-shrink-0 border-4 border-white shadow-xl shadow-primary/10 ${
                idx % 2 === 0 ? 'w-[300px] md:w-[400px] aspect-[4/5]' : 'w-[250px] md:w-[350px] aspect-square'
              }`}
            >
              <img 
                src={src} 
                alt="WanYen Cafe dessert" 
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 (Reverse) */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 22, repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-6 px-3"
        >
          {doubleSecondRow.map((src, idx) => (
            <motion.div 
              whileHover={{ scale: 1.05, rotateZ: idx % 2 === 0 ? -3 : 3, zIndex: 10 }}
              key={`row2-${idx}`} 
              className={`relative overflow-hidden rounded-3xl flex-shrink-0 border-4 border-white shadow-xl shadow-secondary/10 ${
                idx % 2 === 0 ? 'w-[250px] md:w-[350px] aspect-square' : 'w-[300px] md:w-[400px] aspect-[4/5]'
              }`}
            >
              <img 
                src={src} 
                alt="WanYen Cafe dessert" 
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
