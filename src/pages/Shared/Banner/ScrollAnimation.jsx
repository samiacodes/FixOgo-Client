"use client";

import { HeroParallax } from "../../../components/ui/hero-parallax";
import { aboutData } from "../../../data/about";


export function HeroParallaxDemo() {
  return <HeroParallax products={aboutData} />;
}
