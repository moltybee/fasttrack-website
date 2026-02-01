import Benefits from "@/components/Benefits";
import CourseSection from "@/components/CourseSection";
import CTASection from "@/components/CTASection";
import ExpertSessions from "@/components/ExpertSessions";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import QuickFeatures from "@/components/QuickFeatures";
import SeeWhatsWorking from "@/components/SeeWhatsWorking";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickFeatures />
      <SeeWhatsWorking />
      <Testimonials />
      <Benefits />
      <CourseSection />
      <ExpertSessions />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  );
}
