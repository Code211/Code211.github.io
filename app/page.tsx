"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventInfo from "@/components/EventInfo";
import WhatIsHackathon from "@/components/WhatIsHackathon";
import ImportantLinks from "@/components/ImportantLinks";
import Schedule from "@/components/Schedule";
import FAQs from "@/components/FAQs";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Hero />
            <EventInfo />
            <WhatIsHackathon />
            <ImportantLinks />
            <Schedule />
            <FAQs />
            <Sponsors />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
