'use client';

import { useState, useRef } from "react";
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import {
  Cpu, Stethoscope, Scale, PenTool, BrainCircuit, Building2,
  Globe, Briefcase, BookOpen, CheckCircle, Clock, ArrowRight
} from "lucide-react";

interface CareerPathwaySectionProps {
  darkMode: boolean;
}

const pathways = [
  {
    id: "jee",
    label: "JEE / IIT",
    icon: Cpu,
    color: "#4F8CFF",
    description: "Engineering & Technology",
    duration: "2 years prep",
    steps: [
      { phase: "Class 11-12", tasks: ["Complete NCERT Physics, Chemistry, Math", "Join a reputed coaching institute", "Solve 50 problems daily"], duration: "2 years" },
      { phase: "JEE Main", tasks: ["Score 150+ for good NITs", "Attempt in Jan & April", "Focus on speed and accuracy"], duration: "Jan-April" },
      { phase: "JEE Advanced", tasks: ["Top 2.5 lakh from Main qualify", "Solve previous papers", "Focus on IIT-specific concepts"], duration: "May-June" },
      { phase: "IIT / NIT", tasks: ["Choose branch wisely", "Explore research, startups, internships", "Build your network early"], duration: "4 years" },
    ],
  },
  {
    id: "neet",
    label: "NEET / MBBS",
    icon: Stethoscope,
    color: "#FF6B8A",
    description: "Medical & Healthcare",
    duration: "2 years prep",
    steps: [
      { phase: "Class 11-12", tasks: ["Master Biology, Physics, Chemistry", "NCERT is the Bible for NEET", "Practice MCQs daily"], duration: "2 years" },
      { phase: "NEET UG", tasks: ["Target 650+ for government colleges", "Attempt all 200 questions", "Negative marking awareness"], duration: "May" },
      { phase: "MBBS", tasks: ["5.5 years including internship", "Focus on clinical skills", "Consider specialization early"], duration: "5.5 years" },
      { phase: "MD / MS", tasks: ["PG entrance exams (NEET PG)", "Choose specialization", "Build expertise and practice"], duration: "3 years" },
    ],
  },
  {
    id: "upsc",
    label: "UPSC / IAS",
    icon: Scale,
    color: "#7B61FF",
    description: "Civil Services",
    duration: "2-3 years prep",
    steps: [
      { phase: "Foundation", tasks: ["Read NCERT books 6-12", "Start newspaper reading habit", "Choose optional subject early"], duration: "6-12 months" },
      { phase: "Prelims", tasks: ["GS Paper 1 & CSAT", "Current affairs crucial", "Target 110+ for safe clearance"], duration: "June" },
      { phase: "Mains", tasks: ["9 papers including essay", "Answer writing practice daily", "Ethics & integrity focus"], duration: "Sep-Oct" },
      { phase: "Interview", tasks: ["Personality test (275 marks)", "Be genuine and confident", "Know your state and optional well"], duration: "March-June" },
    ],
  },
  {
    id: "design",
    label: "Design",
    icon: PenTool,
    color: "#FFB347",
    description: "UX/UI & Creative Design",
    duration: "Portfolio-based",
    steps: [
      { phase: "Foundation", tasks: ["Learn Figma, Adobe XD", "Study design principles", "Build your first 3 projects"], duration: "3-6 months" },
      { phase: "Specialization", tasks: ["UX research methods", "Prototyping & wireframing", "User testing techniques"], duration: "6 months" },
      { phase: "Portfolio", tasks: ["Build 5-7 case studies", "Contribute to open-source design", "Get design internships"], duration: "1 year" },
      { phase: "Career", tasks: ["Apply to design agencies", "Freelance for income", "Target FAANG product roles"], duration: "Ongoing" },
    ],
  },
  {
    id: "ai",
    label: "AI / Tech",
    icon: BrainCircuit,
    color: "#00D4FF",
    description: "Artificial Intelligence",
    duration: "Self-paced",
    steps: [
      { phase: "CS Basics", tasks: ["Python programming mastery", "Data structures & algorithms", "Mathematics for ML (Linear Algebra, Stats)"], duration: "3-6 months" },
      { phase: "ML / DL", tasks: ["Supervised & unsupervised learning", "Neural networks with TensorFlow/PyTorch", "Kaggle competitions"], duration: "6-12 months" },
      { phase: "Projects", tasks: ["Build end-to-end ML projects", "Publish on GitHub", "Contribute to open-source AI projects"], duration: "6 months" },
      { phase: "Career", tasks: ["Apply to AI startups", "Target Google, OpenAI, DeepMind", "Research or industry path"], duration: "Ongoing" },
    ],
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship",
    icon: Briefcase,
    color: "#4CAF82",
    description: "Startups & Business",
    duration: "Lifelong journey",
    steps: [
      { phase: "Ideation", tasks: ["Identify a real problem", "Validate with 100 users", "Study your market deeply"], duration: "3 months" },
      { phase: "Building", tasks: ["Build MVP fast", "Find co-founder", "Apply to startup incubators"], duration: "6 months" },
      { phase: "Growth", tasks: ["Get first paying customers", "Apply to YC, Sequoia Surge", "Raise seed round"], duration: "1-2 years" },
      { phase: "Scale", tasks: ["Hire the right team", "Expand markets", "Build sustainable business"], duration: "Ongoing" },
    ],
  },
];

const otherPaths = [
  { label: "CA / CMA", icon: Scale, color: "#FFB347" },
  { label: "Government Jobs", icon: Building2, color: "#4CAF82" },
  { label: "Foreign Studies", icon: Globe, color: "#7B61FF" },
  { label: "Research / PhD", icon: BookOpen, color: "#00D4FF" },
];

export function CareerPathwaySection({ darkMode }: CareerPathwaySectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activePathway, setActivePathway] = useState("jee");

  const selected = pathways.find((p) => p.id === activePathway)!;

  const cardStyle = {
    background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
    border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(79,140,255,0.12)",
    backdropFilter: "blur(16px)",
    borderRadius: "1.5rem",
  };

  return (
    <section
      id="pathways"
      className="relative py-24 overflow-hidden"
      style={{
        background: darkMode
          ? "linear-gradient(180deg, #0d1432 0%, #0a0f1e 100%)"
          : "linear-gradient(180deg, #f0f4ff 0%, #fafbff 100%)",
      }}
    >
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123,97,255,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{
              background: "rgba(123,97,255,0.1)",
              border: "1px solid rgba(123,97,255,0.3)",
              color: "#7B61FF",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <ArrowRight className="w-4 h-4" />
            Career Roadmaps
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
            Your Step-by-Step{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7B61FF, #4F8CFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Career Pathway
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              color: darkMode ? "#64748b" : "#94a3b8",
            }}
          >
            Detailed, actionable roadmaps for every major career path in India.
          </motion.p>
        </div>

        {/* Pathway Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {pathways.map((p) => {
            const { icon: Icon } = p;
            const isActive = activePathway === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePathway(p.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  background: isActive
                    ? `${p.color}20`
                    : darkMode
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.7)",
                  border: isActive
                    ? `1.5px solid ${p.color}60`
                    : darkMode
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(0,0,0,0.06)",
                  color: isActive ? p.color : darkMode ? "#94a3b8" : "#64748b",
                  boxShadow: isActive ? `0 4px 16px ${p.color}20` : "none",
                }}
              >
                <Icon className="w-4 h-4" />
                {p.label}
              </button>
            );
          })}
        </motion.div>

        {/* Pathway Content */}
        <motion.div
          key={activePathway}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 md:p-8 mb-8"
          style={cardStyle}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: `${selected.color}18`,
                border: `1.5px solid ${selected.color}40`,
                boxShadow: `0 4px 20px ${selected.color}25`,
              }}
            >
              <selected.icon style={{ color: selected.color, width: 26, height: 26 }} />
            </div>
            <div className="flex-1">
              <h3
                className="font-bold text-xl"
                style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
              >
                {selected.label} Roadmap
              </h3>
              <p
                className="text-sm"
                style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#94a3b8" : "#64748b" }}
              >
                {selected.description} · {selected.duration}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connector line */}
            <div
              className="absolute left-5 top-10 bottom-0 w-[2px] hidden md:block"
              style={{
                background: `linear-gradient(180deg, ${selected.color}60, transparent)`,
              }}
            />
            <div className="space-y-6">
              {selected.steps.map((step, i) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10"
                      style={{
                        background: `${selected.color}20`,
                        border: `2px solid ${selected.color}50`,
                        color: selected.color,
                        fontFamily: "Sora, sans-serif",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div
                    className="flex-1 rounded-2xl p-4"
                    style={{
                      background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                      border: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <h4
                        className="font-semibold text-sm"
                        style={{ fontFamily: "Sora, sans-serif", color: selected.color }}
                      >
                        {step.phase}
                      </h4>
                      <div
                        className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: `${selected.color}12`,
                          color: selected.color,
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {step.tasks.map((task) => (
                        <div key={task} className="flex items-start gap-2">
                          <CheckCircle
                            className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                            style={{ color: selected.color }}
                          />
                          <span
                            className="text-xs"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              color: darkMode ? "#94a3b8" : "#64748b",
                            }}
                          >
                            {task}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Link
              href={`/pathways/${activePathway}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: `linear-gradient(135deg, ${selected.color}, ${selected.color}cc)` }}
            >
              View Full Roadmap →
            </Link>
          </div>
        </motion.div>

        {/* Other Pathways */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {otherPaths.map(({ label, icon: Icon, color }, i) => (
            <Link href="/pathways" key={label}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="p-4 rounded-2xl text-center cursor-pointer group"
              style={{
                background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.8)",
                border: darkMode ? "1px solid rgba(255,255,255,0.08)" : `1px solid ${color}25`,
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}
              >
                <Icon style={{ color, width: 18, height: 18 }} />
              </div>
              <p
                className="text-xs font-semibold"
                style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
              >
                {label}
              </p>
              <p
                className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ fontFamily: "Inter, sans-serif", color }}
              >
                View roadmap →
              </p>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
