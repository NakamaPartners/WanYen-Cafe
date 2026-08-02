import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYelp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

const springConf = { type: "spring", stiffness: 300, damping: 20 };

export function Footer() {
  return (
    <footer id="location" className="bg-[#5c0029] text-white pt-24 pb-12 relative overflow-hidden">
      
      {/* Decorative Wavy Lines SVG Top */}
      <svg className="absolute top-0 left-0 w-full text-[#E6F9F5]" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20C240 60 480 -20 720 20C960 60 1200 -20 1440 20V0H0V20Z" fill="currentColor"/>
      </svg>

      <div className="container mx-auto px-6 md:px-12 relative z-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 border-b-2 border-white/10 pb-20">
          
          <div className="lg:col-span-1 space-y-6">
            <h2 className="font-display text-5xl tracking-tight text-white drop-shadow-md">
              WanYen<span className="text-secondary">.</span>
            </h2>
            <p className="text-white/80 text-lg font-bold leading-relaxed max-w-xs">
              Utah's first Asian-inspired ice cream and dessert cafe. Made in-house from scratch. 🍨
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-black text-secondary uppercase tracking-widest bg-secondary/10 inline-block px-3 py-1 rounded-lg">Visit Us</h3>
            <div className="space-y-2 text-white text-xl font-bold">
              <p>378 W Broadway, Suite 115</p>
              <p className="text-base text-white/60 pt-2 font-medium">Salt Lake City, UT 84101</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-black text-secondary uppercase tracking-widest bg-secondary/10 inline-block px-3 py-1 rounded-lg">Hours</h3>
            <div className="space-y-3 text-white text-xl font-bold">
              <p>Check our Instagram for current hours</p>
              <a 
                href="https://www.instagram.com/wanyen.slc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-primary bg-white px-4 py-2 rounded-full hover:bg-secondary hover:text-foreground transition-colors shadow-md"
              >
                @wanyen.slc
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-black text-secondary uppercase tracking-widest bg-secondary/10 inline-block px-3 py-1 rounded-lg">Join the Club</h3>
            <p className="text-lg text-white font-bold">
              Sign up for exclusive flavors, events & sweet deals.
            </p>
            <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white/10 border-2 border-white/20 rounded-l-full px-5 py-4 w-full text-white placeholder:text-white/50 focus:outline-none focus:border-secondary transition-colors text-lg font-bold"
                required
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-primary text-white font-black px-8 py-4 rounded-r-full hover:bg-primary/90 transition-colors text-lg shadow-[4px_0_0_rgba(0,0,0,0.2)]"
              >
                Sign Up
              </motion.button>
            </form>
            
            <div className="flex gap-3 pt-4">
              <motion.a
                href="https://www.instagram.com/wanyen.slc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/15 hover:bg-primary flex items-center justify-center transition-colors text-white text-2xl"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@wanyen.slc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/15 hover:bg-primary flex items-center justify-center transition-colors text-white text-2xl"
              >
                <FaTiktok />
              </motion.a>
              <motion.a
                href="https://www.yelp.com/biz/wanyen-cafe-salt-lake-city?osq=Wanyen+Cafe&dd_referrer=https%3A%2F%2Fwww.wanyenslc.com%2F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/15 hover:bg-[#FF1A1A] flex items-center justify-center transition-colors text-white text-2xl"
              >
                <FaYelp />
              </motion.a>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-white/60 text-base font-bold">
          <p>&copy; {new Date().getFullYear()} WanYen Cafe. All rights reserved. 💖</p>
          <a 
            href="https://www.wanyenslc.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 hover:text-white transition-colors underline decoration-2 underline-offset-4"
          >
            wanyenslc.com
          </a>
        </div>
      </div>
    </footer>
  );
}
