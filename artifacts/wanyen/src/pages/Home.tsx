import React from 'react';
import { Hero } from '@/components/Hero';
import { Story } from '@/components/Story';
import { Menu } from '@/components/Menu';
import { Gallery } from '@/components/Gallery';
import { CTA } from '@/components/CTA';
import { Catering } from '@/components/Catering';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Story />
      <Menu />
      <Gallery />
      <CTA />
      <Catering />
      <Footer />
    </main>
  );
}
