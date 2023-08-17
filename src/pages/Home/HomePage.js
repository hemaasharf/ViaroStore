import React from 'react';
import { Testimonials, FeatureProducts, Faq, Hero} from './';
export function HomePage() {
  return (
    <div>
      <Hero />
      <FeatureProducts />
      <Testimonials />
      <Faq />
    </div>
  );
}

