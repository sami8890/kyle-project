
// Define the HeroSection type
export interface HeroSection {
  headline: string;
  subheadline: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  premiumBadgeText: string;
  features: Feature[];
}

interface Feature {
  text: string;
  icon: string; 
}
