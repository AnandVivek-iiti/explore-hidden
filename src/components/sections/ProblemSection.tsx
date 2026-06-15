'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from "react";
import {
  Users, HelpCircle, Eye, AlertCircle, UserX,
  TrendingDown, ChevronDown
} from "lucide-react";

interface ProblemSectionProps {
  darkMode: boolean;
}

const problems = [
  {
    icon: Users,
    title: "Family Pressure",
    description: "\"Beta, sirf engineer ya doctor bano\" — this crushing pressure leaves students unable to explore their own passions and true calling.",
    stat: "73%",
    statLabel: "feel pressured by family",
    color: "#FF6B8A",
    emoji: "😰",
  },
  {
    icon: HelpCircle,
    title: "Stream Confusion",
    description: "Science, Commerce, or Arts? Most students pick streams blindly at age 15 — a decision that shapes their entire life. Without data, it's a gamble.",
    stat: "68%",
    statLabel: "regret their stream choice",
    color: "#FFB347",
    emoji: "😕",
  },
  {
    icon: Eye,
    title: "No Career Awareness",
    description: "Most students know only 5-6 careers. But India has 12,000+ job types. UX design, sports science, game dev, forensics — unknown to most.",
    stat: "5-6",
    statLabel: "careers known on average",
    color: "#7B61FF",
    emoji: "🙈",
  },
  {
    icon: AlertCircle,
    title: "Exam Stress",
    description: "JEE, NEET, UPSC — competitive exams without proper roadmaps cause severe burnout, anxiety, and depression among millions of aspirants.",
    stat: "82%",
    statLabel: "report high exam anxiety",
    color: "#4F8CFF",
    emoji: "😓",
  },
  {
    icon: UserX,
    title: "No Mentorship",
    description: "Students in tier-2 and tier-3 cities have almost zero access to mentors with real-world experience. The guidance gap is massive.",
    stat: "89%",
    statLabel: "lack professional guidance",
    color: "#00D4FF",
    emoji: "😶",
  },
  {
    icon: TrendingDown,
    title: "Missed Opportunities",
    description: "₹1000Cr+ in scholarships go unclaimed every year. Olympiads, internships, and international programs pass students by — simply because no one told them.",
    stat: "₹1000Cr+",
    statLabel: "scholarships unclaimed yearly",
    color: "#4CAF82",
    emoji: "💸",
  },
];

function ProblemCard({ problem, index, darkMode }: { problem: typeof problems[0]; index: number; darkMode: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12, type: "spring", bounce: 0.2 }}
      onClick={() => setExpanded(!expanded)}
      className="relative rounded-3xl p-6 cursor-pointer group overflow-hidden"
      style={{
        background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)",
        border: darkMode ? "1px solid rgba(255,255,255,0.07)" : `1px solid ${problem.color}20`,
        backdropFilter: "blur(20px)",
        boxShadow: darkMode ? "0 4px 24px rgba(0,0,0,0.3)" : `0 4px 24px ${problem.color}10`,
      }}
    >
      {/* Bg glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 0%, ${problem.color}12 0%, transparent 60%)`,
        }}
      />

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full"
        style={{ background: `linear-gradient(180deg, ${problem.color}, ${problem.color}44)` }}
      />

      <div className="pl-2">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{
                background: `${problem.color}15`,
                border: `1px solid ${problem.color}30`,
                boxShadow: `0 4px 16px ${problem.color}20`,
              }}
            >
              <problem.icon style={{ color: problem.color, width: 20, height: 20 }} />
            </div>
            <div>
              <h3
                className="font-semibold text-base"
                style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
              >
                {problem.title}
              </h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span
                  className="font-bold text-sm"
                  style={{ fontFamily: "Sora, sans-serif", color: problem.color }}
                >
                  {problem.stat}
                </span>
                <span
                  className="text-xs"
                  style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
                >
                  {problem.statLabel}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl">{problem.emoji}</span>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown
                className="w-4 h-4"
                style={{ color: darkMode ? "#475569" : "#94a3b8" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Progress bar visualization */}
        <div
          className="w-full rounded-full overflow-hidden mb-3"
          style={{ height: 4, background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)" }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${parseInt(problem.stat) || 65}%` } : {}}
            transition={{ duration: 1.2, delay: (index % 3) * 0.15 + 0.4, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${problem.color}, ${problem.color}88)` }}
          />
        </div>

        {/* Expandable description */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p
            className="text-sm leading-relaxed pt-2"
            style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#94a3b8" : "#64748b" }}
          >
            {problem.description}
          </p>
        </motion.div>

        {!expanded && (
          <p
            className="text-xs mt-1 line-clamp-2"
            style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
          >
            {problem.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function ProblemSection({ darkMode }: ProblemSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problem"
      className="relative py-28 overflow-hidden"
      style={{
        background: darkMode
          ? "linear-gradient(180deg, #0a0f1e 0%, #0d1432 100%)"
          : "linear-gradient(180deg, #fafbff 0%, #f0f4ff 100%)",
      }}
    >
      {/* Big background number */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 text-[200px] font-black pointer-events-none select-none hidden lg:block"
        style={{
          fontFamily: "Sora, sans-serif",
          color: darkMode ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.025)",
          lineHeight: 1,
        }}
      >
        WHY?
      </div>

      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,107,138,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5"
            style={{
              background: "rgba(255,107,138,0.1)",
              border: "1px solid rgba(255,107,138,0.25)",
              color: "#FF6B8A",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <AlertCircle className="w-4 h-4" />
            The Real Struggle
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
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
            Why 90% of Indian Students
            <br />
            Feel{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF6B8A, #FFB347)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Lost & Confused
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base max-w-xl"
            style={{
              fontFamily: "Inter, sans-serif",
              color: darkMode ? "#64748b" : "#94a3b8",
              lineHeight: 1.75,
            }}
          >
            The Indian education system fails millions of students every year. Click any card to understand the struggle — and how ExploreHidden solves it.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, i) => (
            <ProblemCard key={problem.title} problem={problem} index={i} darkMode={darkMode} />
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p
            className="text-base italic"
            style={{
              fontFamily: "Sora, sans-serif",
              color: darkMode ? "#64748b" : "#94a3b8",
            }}
          >
            "The biggest career mistake isn't choosing wrong — it's not knowing what choices exist."
          </p>
          <p
            className="text-sm mt-2 font-medium"
            style={{ fontFamily: "Inter, sans-serif", color: "#4F8CFF" }}
          >
            — ExploreHidden Mission
          </p>
        </motion.div>
      </div>
    </section>
  );
}
