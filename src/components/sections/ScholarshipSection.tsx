'use client';

import { useRef } from "react";
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import {
  GraduationCap, Trophy, Code2, Globe, Award, BookOpen,
  ArrowUpRight, IndianRupee, Filter
} from "lucide-react";

interface ScholarshipSectionProps {
  darkMode: boolean;
}

const opportunities = [
  {
    type: "Scholarship",
    icon: GraduationCap,
    title: "National Merit Scholarship",
    provider: "Ministry of Education, India",
    amount: "₹12,000/year",
    deadline: "Sep 30, 2025",
    tags: ["Class 10+", "Merit-based", "All streams"],
    color: "#4F8CFF",
    new: false,
  },
  {
    type: "Hackathon",
    icon: Code2,
    title: "Smart India Hackathon 2025",
    provider: "Govt. of India",
    amount: "₹1,00,000 prize",
    deadline: "Aug 15, 2025",
    tags: ["College students", "Tech", "Innovation"],
    color: "#00D4FF",
    new: true,
  },
  {
    type: "Olympiad",
    icon: Trophy,
    title: "Indian National Olympiad (INO)",
    provider: "HBCSE",
    amount: "International selection",
    deadline: "Oct 1, 2025",
    tags: ["Class 8-12", "Science", "Math"],
    color: "#FFB347",
    new: false,
  },
  {
    type: "Internship",
    icon: Award,
    title: "Google Summer of Code",
    provider: "Google",
    amount: "$1,500 - $3,500",
    deadline: "April 2026",
    tags: ["College students", "Open source", "Tech"],
    color: "#7B61FF",
    new: false,
  },
  {
    type: "Foreign Study",
    icon: Globe,
    title: "Fulbright-Nehru Scholarship",
    provider: "US-India Educational Foundation",
    amount: "Full funding",
    deadline: "Jul 15, 2025",
    tags: ["Postgraduate", "USA", "Research"],
    color: "#FF6B8A",
    new: false,
  },
  {
    type: "Certification",
    icon: BookOpen,
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    amount: "Free via AWS Educate",
    deadline: "Open enrollment",
    tags: ["Students", "Cloud", "Tech career"],
    color: "#4CAF82",
    new: true,
  },
];

const categories = [
  { label: "All", count: 500 },
  { label: "Scholarships", count: 180 },
  { label: "Internships", count: 120 },
  { label: "Olympiads", count: 45 },
  { label: "Hackathons", count: 80 },
  { label: "Certifications", count: 75 },
];

export function ScholarshipSection({ darkMode }: ScholarshipSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cardBase = {
    background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
    border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(79,140,255,0.12)",
    backdropFilter: "blur(16px)",
    borderRadius: "1.5rem",
  };

  return (
    <section
      id="scholarships"
      className="relative py-24 overflow-hidden"
      style={{
        background: darkMode
          ? "linear-gradient(180deg, #0a0f1e 0%, #0d1432 100%)"
          : "linear-gradient(180deg, #fafbff 0%, #f0f4ff 100%)",
      }}
    >
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,179,71,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                background: "rgba(255,179,71,0.1)",
                border: "1px solid rgba(255,179,71,0.3)",
                color: "#FFB347",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Trophy className="w-4 h-4" />
              Opportunities Hub
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
              500+ Scholarships &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FFB347, #FF6B8A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Opportunities
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-2 max-w-lg"
              style={{
                fontFamily: "Inter, sans-serif",
                color: darkMode ? "#64748b" : "#94a3b8",
              }}
            >
              Curated scholarships, internships, olympiads, hackathons, and certifications for Indian students.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <div
              className="px-5 py-4 rounded-2xl text-center"
              style={cardBase}
            >
              <IndianRupee className="w-5 h-5 mx-auto mb-1" style={{ color: "#FFB347" }} />
              <div
                className="font-bold text-lg"
                style={{
                  fontFamily: "Sora, sans-serif",
                  background: "linear-gradient(135deg, #FFB347, #FF6B8A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ₹500Cr+
              </div>
              <div
                className="text-xs"
                style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
              >
                Total value
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          <div
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{
              background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
              color: darkMode ? "#94a3b8" : "#64748b",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Filter className="w-3 h-3" /> Filter by:
          </div>
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                background: i === 0
                  ? "linear-gradient(135deg, #4F8CFF, #7B61FF)"
                  : darkMode
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(255,255,255,0.7)",
                color: i === 0 ? "white" : darkMode ? "#94a3b8" : "#64748b",
                border: i === 0
                  ? "none"
                  : darkMode
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {cat.label}
              <span
                className="rounded-full px-1.5 py-0.5 text-[10px]"
                style={{
                  background: i === 0 ? "rgba(255,255,255,0.25)" : "rgba(79,140,255,0.1)",
                  color: i === 0 ? "white" : "#4F8CFF",
                }}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {opportunities.map((opp, i) => {
            const { icon: Icon } = opp;
            return (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative p-5 group cursor-pointer"
                style={cardBase}
              >
                {opp.new && (
                  <div
                    className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #4F8CFF, #7B61FF)",
                      color: "white",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    NEW
                  </div>
                )}

                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${opp.color}15`,
                      border: `1px solid ${opp.color}30`,
                    }}
                  >
                    <Icon style={{ color: opp.color, width: 18, height: 18 }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wide"
                      style={{ color: opp.color, fontFamily: "Inter, sans-serif" }}
                    >
                      {opp.type}
                    </span>
                    <h3
                      className="font-semibold text-sm leading-tight mt-0.5"
                      style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
                    >
                      {opp.title}
                    </h3>
                    <p
                      className="text-xs mt-0.5"
                      style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
                    >
                      {opp.provider}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{ fontFamily: "Sora, sans-serif", color: opp.color }}
                    >
                      {opp.amount}
                    </p>
                    <p
                      className="text-[10px]"
                      style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
                    >
                      Deadline: {opp.deadline}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: opp.color }}
                  />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {opp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                      style={{
                        background: `${opp.color}10`,
                        color: opp.color,
                        border: `1px solid ${opp.color}25`,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/scholarships">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl text-sm border-2 transition-colors cursor-pointer"
              style={{
                fontFamily: "Inter, sans-serif",
                borderColor: "#FFB347",
                color: "#FFB347",
                background: "rgba(255,179,71,0.08)",
              }}
            >
              <Trophy className="w-4 h-4" />
              Browse All 500+ Opportunities
              <ArrowUpRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
