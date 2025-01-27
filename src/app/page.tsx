import HeroSection from "@/components/ui/hero-section"
import ImpactSection from "@/components/stats"
import ProcessSection from "@/components/ui/process-section"
import FAQSection from "@/components/ui/Faqs-section"
import CTAVideoSection from "@/components/ui/vidoo-testimonial-section-call-to-action"

export default function Home() {
  return (
    <main className="mx-auto ">
      <HeroSection />
      <ProcessSection/>
      <ImpactSection/>
      <CTAVideoSection/>
      <FAQSection/>
    </main>
  )
}

