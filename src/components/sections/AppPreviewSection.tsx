'use client';

import { useRef } from "react";
import { motion, useInView } from 'motion/react';
import {
  Smartphone, Download, Apple, Play, Star,
  Bell, Map, BrainCircuit, Trophy, Users
} from "lucide-react";

interface AppPreviewSectionProps {
  darkMode: boolean;
}

const appFeatures = [
  { icon: BrainCircuit, label: "AI Career Test", color: "#4F8CFF" },
  { icon: Map, label: "Roadmaps", color: "#7B61FF" },
  { icon: Trophy, label: "Scholarships", color: "#FFB347" },
  { icon: Bell, label: "Opportunity Alerts", color: "#00D4FF" },
  { icon: Users, label: "Community", color: "#FF6B8A" },
];

const mockScreens = [
  {
    title: "AI Career Dashboard",
    subtitle: "Your personalized career hub",
    items: [
      { label: "Career Match Score", value: "94%", color: "#4F8CFF" },
      { label: "Roadmap Progress", value: "38%", color: "#7B61FF" },
      { label: "Opportunities", value: "12 new", color: "#00D4FF" },
    ],
  },
  {
    title: "Today's Opportunities",
    subtitle: "Curated just for you",
    items: [
      { label: "CBSE Merit Scholarship", value: "Apply →", color: "#FFB347" },
      { label: "Google Code Jam", value: "Register →", color: "#4F8CFF" },
      { label: "IIT Research Internship", value: "Explore →", color: "#7B61FF" },
    ],
  },
];

export function AppPreviewSection({ darkMode }: AppPreviewSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="app"
      className="relative py-24 overflow-hidden"
      style={{
        background: darkMode
          ? "linear-gradient(135deg, #0d1432 0%, #0a0f1e 50%, #0d1432 100%)"
          : "linear-gradient(135deg, #f0f4ff 0%, #fafbff 50%, #f5f0ff 100%)",
      }}
    >
      {/* Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123,97,255,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-20 w-[300px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: "rgba(79,140,255,0.1)",
                border: "1px solid rgba(79,140,255,0.3)",
                color: "#4F8CFF",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Smartphone className="w-4 h-4" />
              Mobile App — Coming Soon
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: darkMode ? "#f1f5f9" : "#0d1432",
                lineHeight: 1.2,
              }}
            >
              Career Guidance in{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #4F8CFF, #7B61FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Your Pocket
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-4 mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                color: darkMode ? "#94a3b8" : "#64748b",
                lineHeight: 1.7,
              }}
            >
              Get real-time career alerts, access your roadmap, connect with mentors, and track your progress — all from your phone. Built specifically for Indian students, offline-friendly.
            </motion.p>

            {/* App Features */}
            <div className="space-y-3 mb-8">
              {appFeatures.map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                  >
                    <Icon style={{ color, width: 15, height: 15 }} />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#cbd5e1" : "#475569" }}
                  >
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              {[
                { label: "App Store", sub: "Download on the", icon: Apple, store: "iOS" },
                { label: "Google Play", sub: "Get it on", icon: Play, store: "Android" },
              ].map(({ label, sub, icon: Icon, store }) => (
                <motion.button
                  key={store}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl"
                  style={{
                    background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                    border: darkMode ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  <Icon style={{ color: darkMode ? "#f1f5f9" : "#0d1432", width: 20, height: 20 }} />
                  <div className="text-left">
                    <div
                      className="text-[10px]"
                      style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
                    >
                      {sub}
                    </div>
                    <div
                      className="text-sm font-semibold"
                      style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
                    >
                      {label}
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 mt-4"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#FFB347" }} />
                ))}
              </div>
              <span
                className="text-sm"
                style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#94a3b8" : "#64748b" }}
              >
                4.9 / 5 · 12,000+ reviews (waitlist)
              </span>
            </motion.div>
          </div>

          {/* Right: Phone Mockups */}
          <div className="relative flex justify-center items-center">
            {/* Glow behind phones */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(79,140,255,0.15) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Phone 1 (back) */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 6 }}
              animate={inView ? { opacity: 0.7, x: 0, rotate: 6, y: [0, -8, 0] } : {}}
              transition={{
                opacity: { delay: 0.4, duration: 0.6 },
                x: { delay: 0.4, duration: 0.6 },
                y: { duration: 4, repeat: Infinity, delay: 0.5 },
              }}
              className="absolute right-4 top-4"
            >
              <PhoneMockup screen={mockScreens[1]} darkMode={darkMode} />
            </motion.div>

            {/* Phone 2 (front) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0, y: [0, -12, 0] } : {}}
              transition={{
                opacity: { delay: 0.3, duration: 0.6 },
                x: { delay: 0.3, duration: 0.6 },
                y: { duration: 4, repeat: Infinity },
              }}
              className="relative z-10"
            >
              <PhoneMockup screen={mockScreens[0]} darkMode={darkMode} main />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({
  screen,
  darkMode,
  main = false,
}: {
  screen: typeof mockScreens[0];
  darkMode: boolean;
  main?: boolean;
}) {
  return (
    <div
      className={`rounded-[2.5rem] overflow-hidden ${main ? "w-52 h-96" : "w-44 h-80"}`}
      style={{
        background: darkMode ? "#0d1432" : "#ffffff",
        border: `2px solid ${darkMode ? "rgba(79,140,255,0.3)" : "rgba(79,140,255,0.2)"}`,
        boxShadow: main
          ? "0 30px 80px rgba(79,140,255,0.3), 0 0 0 1px rgba(79,140,255,0.1)"
          : "0 20px 50px rgba(0,0,0,0.2)",
      }}
    >
      {/* Notch */}
      <div
        className="w-20 h-5 rounded-b-xl mx-auto"
        style={{
          background: darkMode ? "#0a0f1e" : "#f1f5f9",
        }}
      />

      {/* Screen Content */}
      <div className="px-4 py-3">
        {/* Header */}
        <div
          className="flex items-center gap-2 mb-4 px-1 py-1.5 rounded-xl"
          style={{
            background: "linear-gradient(135deg, #4F8CFF18, #7B61FF10)",
            border: "1px solid rgba(79,140,255,0.2)",
          }}
        >
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #4F8CFF, #7B61FF)" }}
          >
            <BrainCircuit className="w-3 h-3 text-white" />
          </div>
          <div>
            <p
              className="text-[9px] font-semibold"
              style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
            >
              {screen.title}
            </p>
            <p
              className="text-[8px]"
              style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
            >
              {screen.subtitle}
            </p>
          </div>
        </div>

        {/* Items */}
        <div className="space-y-2">
          {screen.items.map(({ label, value, color }) => (
            <div
              key={label}
              className="flex items-center justify-between px-2.5 py-2 rounded-xl"
              style={{
                background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                border: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <span
                className="text-[8px]"
                style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#94a3b8" : "#64748b" }}
              >
                {label}
              </span>
              <span
                className="text-[9px] font-semibold"
                style={{ fontFamily: "Sora, sans-serif", color }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 flex justify-center">
          <div
            className="w-12 h-1 rounded-full"
            style={{ background: darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)" }}
          />
        </div>
      </div>
    </div>
  );
}
