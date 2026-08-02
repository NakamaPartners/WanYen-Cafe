import React from 'react';
import { motion } from 'framer-motion';

const springConf = { type: "spring" as const, stiffness: 300, damping: 20 };

const menuCategories = [
  {
    title: "Small-Batch Ice Cream",
    description: "Made entirely from scratch, in-house.",
    items: ["Matcha Tea", "Coconut", "Dreamy Strawberry", "Mango", "Thai Tea"],
    image: "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/02cb5272-2d71-4c81-b6be-9b2b962d6c1b/wanyen_11.jpeg",
    bgColor: "bg-[#FFF0F5]",
    borderColor: "border-[#FF4D8D]",
    shadowColor: "hover:shadow-[0_12px_0_#FF4D8D]",
    bulletColor: "bg-[#FF4D8D]",
    imageAlt: "Mango plate with sorbet scoops"
  },
  {
    title: "Signature Desserts",
    description: "The flavors you miss, reimagined.",
    items: ["Mango Sticky Rice", "Thai Tea Ice Cream Float", "Grass Jelly", "Strawberry Shortcake Parfait", "Fruit dessert with rosemary"],
    image: "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/44e3d8aa-2f22-4e16-b347-ce3371074cb5/WanYenR2_27.jpeg",
    bgColor: "bg-[#FFFFF0]",
    borderColor: "border-[#FFD23F]",
    shadowColor: "hover:shadow-[0_12px_0_#FFD23F]",
    bulletColor: "bg-[#FFD23F]",
    imageAlt: "Strawberry shortcake parfait"
  },
  {
    title: "Crafted Drinks",
    description: "Refreshing, rich, and unforgettable.",
    items: ["Coconut Pudding Frappe", "Mango Yogurt Frappe", "Matcha Drinks", "Iced coffee with ice cream"],
    image: "https://images.squarespace-cdn.com/content/v1/6917b0e60fe0b45457ea8578/b7b1ee40-75a6-43d3-abd4-9d856e44186f/wanyen_28+%281%29.jpg",
    bgColor: "bg-[#E6F9F5]",
    borderColor: "border-[#00C9A7]",
    shadowColor: "hover:shadow-[0_12px_0_#00C9A7]",
    bulletColor: "bg-[#00C9A7]",
    imageAlt: "Tall coconut drink"
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Decorative Wavy Lines SVG */}
      <svg className="absolute top-0 left-0 w-full" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20C240 60 480 -20 720 20C960 60 1200 -20 1440 20V0H0V20Z" fill="hsl(38 100% 98%)"/>
      </svg>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={springConf}
            className="inline-block bg-secondary text-foreground font-extrabold px-6 py-3 rounded-full mb-8 transform rotate-2 shadow-md"
          >
            The Menu
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConf, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight text-foreground"
          >
            Flavors inspired by <br/>
            <span className="text-primary font-display inline-block mt-2" style={{ textShadow: '4px 4px 0px #00C9A7' }}>night markets</span> & nostalgia.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {menuCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springConf, delay: idx * 0.1 }}
              whileHover={{ y: -10, rotateZ: idx % 2 === 0 ? 2 : -2 }}
              className={`group flex flex-col h-full rounded-3xl ${category.bgColor} border-t-8 ${category.borderColor} shadow-lg ${category.shadowColor} transition-all duration-300 p-6`}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-8 border-4 border-white shadow-md">
                <img 
                  src={category.image}
                  alt={category.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
              </div>
              
              <h4 className="text-3xl font-extrabold text-foreground mb-3">{category.title}</h4>
              <p className="text-foreground/70 text-lg font-medium mb-6 pb-6 border-b-2 border-foreground/10">{category.description}</p>
              
              <ul className="space-y-4 flex-grow">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center text-foreground font-bold text-lg">
                    <span className={`w-3 h-3 rounded-full ${category.bulletColor} mr-4 flex-shrink-0 shadow-sm`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ ...springConf, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <motion.a 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.wanyenslc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 bg-primary text-white px-12 py-6 rounded-full text-2xl font-black shadow-[0_8px_0_#cc0052] hover:shadow-[0_4px_0_#cc0052] hover:translate-y-1 transition-all"
            data-testid="button-order-menu"
          >
            View Full Menu 🍦
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
