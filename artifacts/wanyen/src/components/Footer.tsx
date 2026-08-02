import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="location" className="bg-secondary text-secondary-foreground pt-24 pb-12 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 border-b border-white/10 pb-20">
          
          <div className="lg:col-span-1 space-y-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white">
              WanYen<span className="text-primary">.</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Utah's first Asian-inspired ice cream and dessert cafe. Made in-house from scratch.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest">Visit Us</h3>
            <div className="space-y-2 text-white/80">
              <p>Downtown Salt Lake City, UT</p>
              <p className="text-sm text-white/50 pt-2">(Check Yelp/Google for exact address)</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest">Hours</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex justify-between max-w-xs">
                <span>Sun–Thu</span>
                <span>12pm – 9pm</span>
              </li>
              <li className="flex justify-between max-w-xs">
                <span>Fri–Sat</span>
                <span>12pm – 10pm</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest">Join the Club</h3>
            <p className="text-sm text-white/70">
              Sign up for exclusive flavors, events & sweet deals.
            </p>
            <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white/5 border border-white/20 rounded-l-full px-4 py-3 w-full text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors text-sm"
                required
              />
              <button 
                type="submit"
                className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded-r-full hover:bg-primary/90 transition-colors text-sm"
              >
                Sign Up
              </button>
            </form>
            
            <div className="flex gap-4 pt-4">
              <a href="https://www.instagram.com/wanyen.slc/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@wanyen.slc" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                TikTok
              </a>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} WanYen Cafe. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
