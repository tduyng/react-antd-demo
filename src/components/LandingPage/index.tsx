import React from 'react';
import { About } from './About';
import { Hero } from './Hero';
import { FAQ } from './FAQ';
import { Contact } from './Contact';
import { Feature } from './Feature';
import { Pricing } from './Pricing';
import { Work } from './Work';

export const LandingPage = () => {
  return (
    <div className="home-main">
      <Hero />
      <About />
      <Feature />
      <Work />
      <FAQ />
      <Pricing />
      <Contact />
    </div>
  );
};
