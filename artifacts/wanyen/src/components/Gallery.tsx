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

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground text-center">
          A feast for the eyes.
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden py-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-6 px-3"
        >
          {/* Double the array for seamless looping */}
          {[...images, ...images].map((src, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-2xl flex-shrink-0 ${
                idx % 2 === 0 ? 'w-[300px] md:w-[400px] aspect-[4/5]' : 'w-[250px] md:w-[350px] aspect-square'
              }`}
            >
              <img 
                src={src} 
                alt="WanYen Cafe dessert" 
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
