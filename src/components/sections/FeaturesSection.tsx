'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from "react";
import {
  BrainCircuit, GitBranch, GraduationCap, Map, Library,
  Users, MessageCircle, Sparkles, TrendingUp, Layers,
  ArrowRight, Check
} from "lucide-react";

interface FeaturesSectionProps {
  darkMode: boolean;
}

const features = [
  {
    icon: BrainCircuit,
    title: "AI Career Guidance",
    description: "Our AI analyzes your aptitude, personality, and interests to recommend careers you've never considered. 200+ data points analyzed.",
    color: "#4F8CFF",
    size: "large",
    bullets: ["150-point cognitive test", "Personality profiling", "Hidden career discovery"],
  },
  {
    icon: GitBranch,
    title: "Stream Selection",
    description: "Science, Commerce, Arts — get data-backed guidance on which stream aligns with your true potential.",
    color: "#7B61FF",
    size: "normal",
    bullets: ["Aptitude matching", "Income projections", "Growth analysis"],
  },
  {
    icon: GraduationCap,
    title: "Scholarship Finder",
    description: "Discover 500+ scholarships, grants, and financial aid programs curated for Indian students.",
    color: "#FFB347",
    size: "normal",
    bullets: ["Government schemes", "Private scholarships", "International grants"],
  },
  {
    icon: Map,
    title: "Exam Roadmaps",
    description: "Step-by-step roadmaps for JEE, NEET, UPSC, CA, and 50+ competitive exams with daily plans.",
    color: "#00D4FF",
    size: "normal",
    bullets: ["Day-by-day plans", "Resource library", "Progress tracking"],
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "1-on-1 sessions with IITians, IAS officers, doctors, designers, and entrepreneurs who've walked your path.",
    color: "#FF6B8A",
    size: "large",
    bullets: ["350+ expert mentors", "Free first session", "Video & chat support"],
  },
  {
    icon: Library,
    title: "Learning Resources",
    description: "Curated study materials, video lectures, books, and mock tests for every career path.",
    color: "#4CAF82",
    size: "normal",
    bullets: ["10,000+ resources", "Video courses", "Practice tests"],
  },
  {
    icon: MessageCircle,
    title: "Community",
    description: "Join 12,400+ students. Ask questions, share wins, find study buddies, and get peer guidance.",
    color: "#7B61FF",
    size: "normal",
    bullets: ["Active daily", "Topic channels", "Expert AMAs"],
  },
  {
    icon: Sparkles,
    title: "Recommendations",
    description: "Daily personalized career insights, alerts for new opportunities matched to your profile and goals.",
    color: "#4F8CFF",
    size: "normal",
    bullets: ["Smart notifications", "Goal tracking", "Weekly reports"],
  },
  {
    icon: TrendingUp,
    title: "Skill Development",
    description: "Structured skill-building paths aligned to your chosen career, starting from where you are today.",
    color: "#00D4FF",
    size: "normal",
    bullets: ["Skill gap analysis", "Learning paths", "Certificates"],
  },
];

function FeatureCard({
  feature,
  index,
  darkMode,
}: {
  feature: typeof features[0];
  index: number;
  darkMode: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  const { icon: Icon, title, description, color, size, bullets } = feature;
  const isLarge = size === "large";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative rounded-3xl p-6 overflow-hidden cursor-default group transition-all duration-300 ${
        isLarge ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      style={{
        background: darkMode
          ? "rgba(255,255,255,0.03)"
          : "rgba(255,255,255,0.85)",
        border: hovered
          ? `1px solid ${color}50`
          : darkMode
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid rgba(0,0,0,0.06)",
        backdropFilter: "blur(20px)",
        boxShadow: hovered
          ? `0 20px 60px ${color}20, 0 4px 20px rgba(0,0,0,0.1)`
          : darkMode
          ? "0 4px 24px rgba(0,0,0,0.25)"
          : "0 4px 24px rgba(0,0,0,0.04)",
        transition: "border 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Animated gradient bg on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 pointer-events-none rounded-3xl"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${color}10 0%, transparent 60%)`,
        }}
      />

      {/* Top accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.35 }}
        className="absolute top-0 left-6 right-6 h-[2px] rounded-full origin-left"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}44)` }}
      />

      {/* Icon */}
      <motion.div
        animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 5 : 0 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}30`,
          boxShadow: hovered ? `0 8px 24px ${color}30` : `0 4px 12px ${color}15`,
        }}
      >
        <Icon style={{ color, width: 22, height: 22 }} />
      </motion.div>

      {/* Content */}
      <h3
        className="font-semibold mb-2"
        style={{
          fontFamily: "Sora, sans-serif",
          fontSize: "1rem",
          color: darkMode ? "#f1f5f9" : "#0d1432",
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-4"
        style={{
          fontFamily: "Inter, sans-serif",
          color: darkMode ? "#94a3b8" : "#64748b",
        }}
      >
        {description}
      </p>

      {/* Bullets */}
      <div className="space-y-1.5 mb-4">
        {bullets.map((b) => (
          <div key={b} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}18` }}
            >
              <Check style={{ color, width: 10, height: 10, strokeWidth: 3 }} />
            </div>
            <span
              className="text-xs"
              style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#94a3b8" : "#64748b" }}
            >
              {b}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0.5, x: hovered ? 0 : -4 }}
        transition={{ duration: 0.25 }}
        className="flex items-center gap-1 text-xs font-semibold"
        style={{ color, fontFamily: "Inter, sans-serif" }}
      >
        Learn more
        <ArrowRight className="w-3.5 h-3.5" />
      </motion.div>
    </motion.div>
  );
}

export function FeaturesSection({ darkMode }: FeaturesSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      className="relative py-28 overflow-hidden"
      style={{
        background: darkMode
          ? "linear-gradient(180deg, #0d1432 0%, #0a0f1e 100%)"
          : "linear-gradient(180deg, #f0f4ff 0%, #fafbff 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(79,140,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123,97,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.05)"} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5"
            style={{
              background: "rgba(79,140,255,0.1)",
              border: "1px solid rgba(79,140,255,0.25)",
              color: "#4F8CFF",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Layers className="w-4 h-4" />
            9 Powerful Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: darkMode ? "#f1f5f9" : "#0d1432",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Everything You Need to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F8CFF 0%, #7B61FF 60%, #00D4FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Navigate Your Future
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-2xl mx-auto text-base"
            style={{
              fontFamily: "Inter, sans-serif",
              color: darkMode ? "#64748b" : "#94a3b8",
              lineHeight: 1.7,
            }}
          >
            From AI-powered aptitude analysis to expert mentorship and 500+ scholarships — ExploreHidden is the only career platform built specifically for Indian students.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} darkMode={darkMode} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 rounded-3xl p-8 text-center relative overflow-hidden"
          style={{
            background: darkMode
              ? "linear-gradient(135deg, rgba(79,140,255,0.12) 0%, rgba(123,97,255,0.12) 100%)"
              : "linear-gradient(135deg, rgba(79,140,255,0.08) 0%, rgba(123,97,255,0.08) 100%)",
            border: darkMode
              ? "1px solid rgba(79,140,255,0.2)"
              : "1px solid rgba(79,140,255,0.15)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(79,140,255,0.08) 0%, transparent 70%)",
            }}
          />
          <p
            className="font-bold text-xl mb-2 relative"
            style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
          >
            All features. Free for students. Always.
          </p>
          <p
            className="text-sm mb-6 relative"
            style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
          >
            No hidden fees. No premium lock. Every Indian student deserves access to quality career guidance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative px-8 py-3.5 text-white font-semibold rounded-2xl text-sm inline-flex items-center gap-2"
            style={{
              fontFamily: "Inter, sans-serif",
              background: "linear-gradient(135deg, #4F8CFF, #7B61FF)",
              boxShadow: "0 8px 30px rgba(79,140,255,0.35)",
            }}
          >
            Get Full Access — It's Free
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
