import React from "react";
import { HeroSection } from "./components/HeroSection";
import { ChallengeSection } from "./components/ChallengeSection";
import { SolutionSection } from "./components/SolutionSection";
import { ProductSection } from "./components/ProductSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { CTASection } from "./components/CTASection";

interface LandingPageProps {
  onNavigateToStudio: () => void;
}

export default function LandingPage({ onNavigateToStudio }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        <HeroSection onNavigateToStudio={onNavigateToStudio} />
        <ChallengeSection />
        <SolutionSection />
        <ProductSection />
        <FeaturesSection />
        <CTASection onNavigateToStudio={onNavigateToStudio} />
      </div>
    </div>
  );
}
