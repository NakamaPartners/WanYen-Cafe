import React from 'react';
import { motion } from 'framer-motion';

const menuCategories = [
  {
    title: "Small-Batch Ice Cream",
    description: "Made entirely from scratch, in-house.",
    items: ["Matcha Tea", "Coconut", "Dreamy Strawberry", "Mango", "Thai Tea"],
    image: "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/02cb5272-2d71-4c81-b6be-9b2b962d6c1b/wanyen_11.jpeg",
    color: "bg-amber-100",
    imageAlt: "Mango plate with sorbet scoops"
  },
  {
    title: "Signature Desserts",
    description: "The flavors you miss, reimagined.",
    items: ["Mango Sticky Rice", "Thai Tea Ice Cream Float", "Grass Jelly", "Strawberry Shortcake Parfait", "Fruit dessert with rosemary"],
    image: "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/44e3d8aa-2f22-4e16-b347-ce3371074cb5/WanYenR2_27.jpeg",
    color: "bg-rose-100",
    imageAlt: "Strawberry shortcake parfait"
  },
  {
    title: "Crafted Drinks",
    description: "Refreshing, rich, and unforgettable.",
    items: ["Coconut Pudding Frappe", "Mango Yogurt Frappe", "Matcha Drinks", "Iced coffee with ice cream"],
    image: "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/b7b1ee40-75a6-43d3-abd4-9d856e44186f/wanyen_28+%281%29.jpg",
    color: "bg-sky-100",
    imageAlt: "Tall coconut drink"
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-secondary text-secondary-foreground relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
          >
            The Menu
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif leading-tight"
          >
            Flavors inspired by <span className="text-primary italic">night markets</span> and nostalgia.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group flex flex-col h-full"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                <img 
                  src={category.image}
                  alt={category.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-60" />
              </div>
              
              <h4 className="text-2xl font-serif text-white mb-2">{category.title}</h4>
              <p className="text-white/60 text-sm mb-6 pb-6 border-b border-white/10">{category.description}</p>
              
              <ul className="space-y-3 flex-grow">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start text-white/80">
                    <span className="text-primary mr-3 mt-1.5 text-xs">✦</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="https://www.wanyenslc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
            data-testid="button-order-menu"
          >
            View Full Menu
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
