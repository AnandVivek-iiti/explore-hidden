'use client';

import { useRef } from "react";
import { motion, useInView } from 'motion/react';
import { Star, Quote } from "lucide-react";
import Link from 'next/link';

interface SuccessStoriesSectionProps {
  darkMode: boolean;
}

const stories = [
  {
    name: "Ananya Sharma",
    from: "Class 12, Jaipur",
    to: "AI Engineer @ Microsoft",
    avatar: "AS",
    color: "#4F8CFF",
    rating: 5,
    story: "I was about to take up PCM just because my parents said so. The AI career test showed I was a 94% match for AI/Tech. ExploreHidden gave me the roadmap, the resources, and a mentor who guided me step by step. Today I'm an AI intern at Microsoft. 🙏",
    tags: ["Class 12 → B.Tech", "AI Career Test", "Mentorship"],
    result: "Microsoft Internship",
  },
  {
    name: "Rahul Verma",
    from: "B.Tech 1st Year, Patna",
    to: "Selected for IAS 2024",
    avatar: "RV",
    color: "#7B61FF",
    rating: 5,
    story: "Everyone told me B.Tech → Corporate was the only path. ExploreHidden showed me UPSC was my calling. The roadmap, daily study plan, and community support made it real. AIR 247 in IAS 2024. This platform changed my life.",
    tags: ["Stream Change", "UPSC Roadmap", "Community"],
    result: "IAS AIR 247",
  },
  {
    name: "Meera Krishnan",
    from: "Class 11, Coimbatore",
    to: "Full Scholarship, NID Ahmedabad",
    avatar: "MK",
    color: "#00D4FF",
    rating: 5,
    story: "Design was always my passion but I didn't know it was a real career in India. ExploreHidden showed me NID, the scholarship pathways, and how to build a portfolio. Got a full scholarship to NID Ahmedabad. My parents are so proud now! ❤️",
    tags: ["Design Career", "Scholarship", "Portfolio Guidance"],
    result: "NID Full Scholarship",
  },
  {
    name: "Vikrant Singh",
    from: "12th Pass, Lucknow",
    to: "CA Final, Top 50 All India",
    avatar: "VS",
    color: "#FFB347",
    rating: 5,
    story: "I had no idea CA was an option. No one in my family had done it. ExploreHidden's roadmap broke down the entire CA journey — Foundation, Inter, Final. Found a mentor who himself was in the CA merit list. Now I'm in Top 50 All India. 🏆",
    tags: ["CA Roadmap", "First in Family", "Mentorship"],
    result: "CA Merit List Top 50",
  },
  {
    name: "Priya Nair",
    from: "B.Tech 3rd Year, Kochi",
    to: "Research Intern @ IISc Bangalore",
    avatar: "PN",
    color: "#FF6B8A",
    rating: 5,
    story: "I wanted to do research but had zero guidance on how to start. ExploreHidden connected me with a PhD mentor who guided me through the research process. Got selected for IISc research internship with a stipend of ₹25,000/month!",
    tags: ["Research Career", "IISc", "Mentorship Network"],
    result: "IISc Research Intern",
  },
  {
    name: "Arjun Patel",
    from: "Dropped JEE 2022",
    to: "SDE @ Flipkart, 2025",
    avatar: "AP",
    color: "#4CAF82",
    rating: 5,
    story: "After dropping JEE twice, I felt like a failure. ExploreHidden showed me alternatives — self-learning through a structured roadmap. DSA, projects, internships. Got placed in Flipkart with 24 LPA package. Failure was just a detour! 💪",
    tags: ["Alternative Paths", "JEE Dropper", "Tech Career"],
    result: "Flipkart SDE, 24 LPA",
  },
];

function StoryCard({ story, index, darkMode }: { story: typeof stories[0]; index: number; darkMode: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="relative p-6 group cursor-default"
      style={{
        background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
        border: darkMode ? "1px solid rgba(255,255,255,0.08)" : `1px solid ${story.color}20`,
        backdropFilter: "blur(16px)",
        borderRadius: "1.5rem",
        boxShadow: darkMode
          ? "0 4px 30px rgba(0,0,0,0.3)"
          : `0 4px 30px ${story.color}10`,
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1.5px ${story.color}40` }}
      />

      {/* Result Badge */}
      <div
        className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-semibold"
        style={{
          background: `${story.color}18`,
          border: `1px solid ${story.color}30`,
          color: story.color,
          fontFamily: "Inter, sans-serif",
        }}
      >
        🏆 {story.result}
      </div>

      {/* Quote icon */}
      <Quote
        className="w-6 h-6 mb-4 opacity-30"
        style={{ color: story.color }}
      />

      <p
        className="text-sm leading-relaxed mb-5"
        style={{
          fontFamily: "Inter, sans-serif",
          color: darkMode ? "#94a3b8" : "#475569",
        }}
      >
        {story.story}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {story.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full text-[10px] font-medium"
            style={{
              background: `${story.color}10`,
              color: story.color,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${story.color}, ${story.color}aa)`,
            fontFamily: "Sora, sans-serif",
          }}
        >
          {story.avatar}
        </div>
        <div className="flex-1">
          <p
            className="font-semibold text-sm"
            style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
          >
            {story.name}
          </p>
          <p
            className="text-[10px]"
            style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
          >
            {story.from} → {story.to}
          </p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: story.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-3 h-3 fill-current"
              style={{ color: "#FFB347" }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SuccessStoriesSection({ darkMode }: SuccessStoriesSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="success"
      className="relative py-24 overflow-hidden"
      style={{
        background: darkMode
          ? "linear-gradient(180deg, #0a0f1e 0%, #0d1432 100%)"
          : "linear-gradient(180deg, #fafbff 0%, #f0f4ff 100%)",
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,179,71,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
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
              background: "rgba(255,179,71,0.1)",
              border: "1px solid rgba(255,179,71,0.3)",
              color: "#FFB347",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Star className="w-4 h-4 fill-current" />
            Success Stories
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
            Students Who Found{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFB347, #FF6B8A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Their Path
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
            Real students. Real transformations. These are the stories that motivate us every day.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <StoryCard key={story.name} story={story} index={i} darkMode={darkMode} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p
            className="mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              color: darkMode ? "#64748b" : "#94a3b8",
              fontSize: "0.9rem",
            }}
          >
            Join 50,000+ students already transforming their futures
          </p>
          <Link href="/signup">
            <motion.span
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(79,140,255,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-4 text-white font-semibold rounded-2xl text-sm cursor-pointer"
              style={{
                fontFamily: "Inter, sans-serif",
                background: "linear-gradient(135deg, #4F8CFF, #7B61FF)",
                boxShadow: "0 8px 30px rgba(79,140,255,0.3)",
              }}
            >
              Start Your Success Story →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
