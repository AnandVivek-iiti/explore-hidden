'use client';

import { useState, useRef } from "react";
import { motion, useInView } from 'motion/react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import {
  BrainCircuit, Target, Sparkles, Eye, Zap, CheckCircle, ArrowRight
} from "lucide-react";

interface AICareerTestSectionProps {
  darkMode: boolean;
}

const radarData = [
  { subject: "Analytical", score: 82 },
  { subject: "Creative", score: 68 },
  { subject: "Leadership", score: 75 },
  { subject: "Technical", score: 90 },
  { subject: "Social", score: 60 },
  { subject: "Research", score: 85 },
];

const trendData = [
  { month: "Jan", match: 45 }, { month: "Feb", match: 52 },
  { month: "Mar", match: 61 }, { month: "Apr", match: 70 },
  { month: "May", match: 78 }, { month: "Jun", match: 88 },
  { month: "Jul", match: 94 },
];

const careerMatches = [
  { career: "AI/ML Engineer", match: 94, color: "#4F8CFF" },
  { career: "Data Scientist", match: 88, color: "#7B61FF" },
  { career: "Research Analyst", match: 82, color: "#00D4FF" },
  { career: "Product Manager", match: 76, color: "#4CAF82" },
];

const features = [
  { icon: BrainCircuit, label: "Aptitude Analysis", desc: "150-point cognitive assessment" },
  { icon: Target, label: "Personality Matching", desc: "16 personality dimensions" },
  { icon: Eye, label: "Hidden Opportunities", desc: "Discover unknown career paths" },
  { icon: Sparkles, label: "Stream Recommendation", desc: "Data-backed stream guidance" },
];

export function AICareerTestSection({ darkMode }: AICareerTestSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Take 15-min AI assessment",
    "AI analyzes 200+ data points",
    "Get personalized career map",
    "Start your roadmap today",
  ];

  const cardStyle = {
    background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
    border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(79,140,255,0.15)",
    backdropFilter: "blur(16px)",
    borderRadius: "1.5rem",
  };

  return (
    <section
      id="career-test"
      className="relative py-24 overflow-hidden"
      style={{
        background: darkMode
          ? "linear-gradient(180deg, #0a0f1e 0%, #0d1432 100%)"
          : "linear-gradient(180deg, #fafbff 0%, #f0f4ff 100%)",
      }}
    >
      {/* Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(79,140,255,0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.3)",
              color: "#00D4FF",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Zap className="w-4 h-4" />
            AI-Powered Assessment
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
            Know Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4FF, #4F8CFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              True Potential
            </span>{" "}
            in 15 Minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              color: darkMode ? "#64748b" : "#94a3b8",
              lineHeight: 1.7,
            }}
          >
            Our AI Career Test analyzes your aptitude, personality, and interests to predict your best career paths with 94% accuracy.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-6"
            style={cardStyle}
          >
            <div className="flex items-center gap-2 mb-2">
              <BrainCircuit className="w-5 h-5" style={{ color: "#4F8CFF" }} />
              <span
                className="font-semibold text-sm"
                style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
              >
                Aptitude Profile — Aryan Sharma, Class 11
              </span>
            </div>
            <p
              className="text-xs mb-4"
              style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
            >
              Based on 150-point cognitive assessment
            </p>
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke={darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"} />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{
                      fill: darkMode ? "#94a3b8" : "#64748b",
                      fontSize: 11,
                      fontFamily: "Inter, sans-serif",
                    }}
                  />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="#4F8CFF"
                    fill="#4F8CFF"
                    fillOpacity={0.25}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            {/* Career Matches */}
            <div className="mt-4 space-y-3">
              <p
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
              >
                Top Career Matches
              </p>
              {careerMatches.map(({ career, match, color }) => (
                <div key={career} className="flex items-center gap-3">
                  <span
                    className="text-xs flex-1"
                    style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#cbd5e1" : "#475569" }}
                  >
                    {career}
                  </span>
                  <div
                    className="flex-1 rounded-full overflow-hidden"
                    style={{
                      height: 6,
                      background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${match}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full rounded-full"
                      style={{ background: color }}
                    />
                  </div>
                  <span
                    className="text-xs font-semibold w-8 text-right"
                    style={{ fontFamily: "Sora, sans-serif", color }}
                  >
                    {match}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Trend + Features */}
          <div className="space-y-5">
            {/* Trend Chart */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-6"
              style={cardStyle}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
                  >
                    Career Clarity Score
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
                  >
                    Students who used ExploreHidden
                  </p>
                </div>
                <div
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "Sora, sans-serif",
                    background: "linear-gradient(135deg, #4F8CFF, #00D4FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  94%
                </div>
              </div>
              <div style={{ height: 120 }}>
                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                  <AreaChart data={trendData}>
                    <XAxis
                      dataKey="month"
                      tick={{ fill: darkMode ? "#64748b" : "#94a3b8", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        background: darkMode ? "#1e2a4a" : "#fff",
                        border: "1px solid rgba(79,140,255,0.2)",
                        borderRadius: 8,
                        color: darkMode ? "#f1f5f9" : "#0d1432",
                        fontSize: 12,
                        fontFamily: "Inter, sans-serif",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="match"
                      stroke="#4F8CFF"
                      fill="url(#grad)"
                      strokeWidth={2}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4F8CFF" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#4F8CFF" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-3">
              {features.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-4"
                  style={cardStyle}
                >
                  <Icon className="w-5 h-5 mb-2" style={{ color: "#4F8CFF" }} />
                  <p
                    className="font-semibold text-xs mb-1"
                    style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
                  >
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="p-8 rounded-3xl"
          style={cardStyle}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {steps.map((step, i) => (
              <button
                key={step}
                onClick={() => setActiveStep(i)}
                className="flex flex-col items-center text-center gap-3 group cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
                  style={{
                    background:
                      activeStep >= i
                        ? "linear-gradient(135deg, #4F8CFF, #7B61FF)"
                        : darkMode
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.06)",
                    color: activeStep >= i ? "white" : darkMode ? "#64748b" : "#94a3b8",
                    fontFamily: "Sora, sans-serif",
                    boxShadow: activeStep >= i ? "0 4px 16px rgba(79,140,255,0.4)" : "none",
                  }}
                >
                  {activeStep > i ? <CheckCircle className="w-5 h-5" /> : i + 1}
                </div>
                <span
                  className="text-xs font-medium"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color:
                      activeStep >= i
                        ? darkMode
                          ? "#f1f5f9"
                          : "#0d1432"
                        : darkMode
                        ? "#64748b"
                        : "#94a3b8",
                  }}
                >
                  {step}
                </span>
              </button>
            ))}
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl text-sm"
              style={{
                fontFamily: "Inter, sans-serif",
                background: "linear-gradient(135deg, #4F8CFF, #7B61FF)",
                boxShadow: "0 8px 30px rgba(79,140,255,0.35)",
              }}
            >
              <Zap className="w-4 h-4" />
              Start Free AI Career Test
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
