"use client"
import Navbar from "../components/layout/nav-bar"
import HeroSection from "../components/main/hero-section"
import ProcessSection from "../components/main/process-section"
import TrustSection from "../components/main/trust-section"
import FrameworkSection from "../components/main/framework-section"
import ContentBacklinksSection from "../components/main/content-backlinks-section"
import TechnicalSEOSection from "../components/main/technical-seo-section"
import PricingSection from "../components/main/pricing-section"
import DifferenceSection from "../components/main/difference-section"
import ResultsSection from "../components/main/results-section"
import CTASection from "../components/main/cta-section"
import VideoSection from "@/components/main/video-section"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <FrameworkSection />
      <VideoSection/>

      <TrustSection />
      <ProcessSection />
      <ContentBacklinksSection />
      <TechnicalSEOSection />
      <PricingSection />
      <DifferenceSection />

      <ResultsSection />

      <CTASection />
    </main>
  )
}

