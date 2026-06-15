'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from '@/components/layout';
import { Navbar, Footer } from '@/components/layout';
import {
  HeroSection,
  ProblemSection,
  FeaturesSection,
  AICareerTestSection,
  CareerPathwaySection,
  ScholarshipSection,
  CommunitySection,
  SuccessStoriesSection,
  AppPreviewSection,
} from '@/components/sections';

// Constant initial state — same on server and client, no mismatch
const INITIAL_DARK = false;
const INITIAL_LOADING = true;

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(INITIAL_DARK);
  const [loading, setLoading] = useState(INITIAL_LOADING);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => setDarkMode((p) => !p);

  return (
    // suppressHydrationWarning on the root div so the opacity/background
    // transition that differs between server (loading=true) and first client
    // paint doesn't produce a hard hydration error.
    <div suppressHydrationWarning>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={() => {}} />}
      </AnimatePresence>

      <div
        suppressHydrationWarning
        style={{
          background: darkMode ? '#060b18' : '#fafbff',
          minHeight: '100vh',
          fontFamily: 'Inter, sans-serif',
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.6s ease, background 0.4s ease',
        }}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <HeroSection darkMode={darkMode} />
          <ProblemSection darkMode={darkMode} />
          <FeaturesSection darkMode={darkMode} />
          <AICareerTestSection darkMode={darkMode} />
          <CareerPathwaySection darkMode={darkMode} />
          <ScholarshipSection darkMode={darkMode} />
          <CommunitySection darkMode={darkMode} />
          <SuccessStoriesSection darkMode={darkMode} />
          <AppPreviewSection darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
