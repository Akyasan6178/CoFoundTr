import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import HowItWorks from "./components/HowItWorks.tsx";
import ApplyCTA from "./components/ApplyCTA.tsx";
import WhyUs from "./components/WhyUs.tsx";
import Footer from "./components/Footer.tsx";
import TallyModal from "./components/TallyModal.tsx";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden selection:bg-red-500/30 text-zinc-100">
      <Navbar />
      <Hero onApply={openForm} />
      <HowItWorks />
      <ApplyCTA onApply={openForm} />
      <WhyUs onApply={openForm} />
      <Footer />
      <TallyModal isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
}
