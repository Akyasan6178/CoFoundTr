import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import HowItWorks from "./components/HowItWorks.tsx";
import ApplyCTA from "./components/ApplyCTA.tsx";
import WhyUs from "./components/WhyUs.tsx";
import Footer from "./components/Footer.tsx";
import TallyModal from "./components/TallyModal.tsx";
import { getTallyFormUrl, type CtaSource } from "./config/site.ts";
import { useInView } from "./lib/useInView.ts";

export default function App() {
  // Formu açan CTA; null ise form kapalı.
  const [formSource, setFormSource] = useState<CtaSource | null>(null);
  const isFormOpen = formSource !== null;

  // Hero'nun birincil CTA'sı sabit navbarın arkasına geçince navbar CTA'sı görünür olur.
  const [heroCtaRef, isHeroCtaInView] = useInView<HTMLButtonElement>("-64px 0px 0px 0px");

  // Modal açıkken sayfa kaydırmasını kilitle.
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFormOpen]);

  const openForm = (source: CtaSource) => setFormSource(source);
  const closeForm = () => setFormSource(null);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen font-sans overflow-x-clip selection:bg-red-500/30 text-zinc-100">
        <Navbar onApply={openForm} showCta={!isHeroCtaInView} />
        <Hero onApply={openForm} ctaRef={heroCtaRef} />
        <HowItWorks />
        <WhyUs onApply={openForm} />
        <ApplyCTA onApply={openForm} />
        <Footer />
        <TallyModal src={formSource && getTallyFormUrl(formSource)} onClose={closeForm} />
      </div>
    </MotionConfig>
  );
}
