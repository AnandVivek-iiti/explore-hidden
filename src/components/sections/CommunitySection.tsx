'use client';

import { useRef } from "react";
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import {
  MessageCircle, Heart, ThumbsUp, Share2,
  Users, UserCheck, Flame
} from "lucide-react";

interface CommunitySectionProps {
  darkMode: boolean;
}

const posts = [
  {
    avatar: "AR",
    name: "Aryan Rathore",
    role: "JEE 2025 Aspirant",
    time: "2 hours ago",
    content: "Just got AIR 847 in JEE Advanced! 😭 Honestly couldn't have done it without the roadmap on ExploreHidden. The day-by-day plan was exactly what I needed during my weakest days.",
    likes: 284,
    comments: 47,
    color: "#4F8CFF",
  },
  {
    avatar: "PM",
    name: "Priya Mehta",
    role: "B.Tech 2nd Year",
    time: "5 hours ago",
    content: "PSA for everyone confused about which branch to pick in B.Tech: USE THE AI GUIDANCE TOOL. It told me to go for Data Science when I was about to pick Civil just because of family pressure. Best decision of my life. 🙏",
    likes: 512,
    comments: 89,
    color: "#7B61FF",
  },
  {
    avatar: "SK",
    name: "Siddharth Kumar",
    role: "UPSC Aspirant",
    time: "1 day ago",
    content: "For anyone from tier-3 cities feeling like UPSC is impossible — it's not. I found a mentor through ExploreHidden who got selected as IPS from a village in UP. He's guiding me for free. This community is real. 🇮🇳",
    likes: 893,
    comments: 134,
    color: "#00D4FF",
  },
];

const mentors = [
  { name: "Dr. Kavya Nair", role: "IIT Bombay Alumni • Ex-Google", avatar: "KN", color: "#4F8CFF", sessions: "200+ sessions" },
  { name: "Rahul Bansal", role: "IAS Officer, Batch 2019", avatar: "RB", color: "#7B61FF", sessions: "150+ sessions" },
  { name: "Ananya Shah", role: "UX Designer @ Figma", avatar: "AS", color: "#00D4FF", sessions: "120+ sessions" },
  { name: "Vikram Joshi", role: "Entrepreneur, 2 Startups", avatar: "VJ", color: "#FFB347", sessions: "80+ sessions" },
];

const stats = [
  { value: "12,400+", label: "Active Members", icon: Users, color: "#4F8CFF" },
  { value: "350+", label: "Expert Mentors", icon: UserCheck, color: "#7B61FF" },
  { value: "4,800+", label: "Daily Discussions", icon: MessageCircle, color: "#00D4FF" },
  { value: "98%", label: "Help Rate", icon: Flame, color: "#FF6B8A" },
];

export function CommunitySection({ darkMode }: CommunitySectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cardBase = {
    background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
    border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(79,140,255,0.12)",
    backdropFilter: "blur(16px)",
    borderRadius: "1.5rem",
  };

  return (
    <section
      id="community"
      className="relative py-24 overflow-hidden"
      style={{
        background: darkMode
          ? "linear-gradient(180deg, #0d1432 0%, #0a0f1e 100%)"
          : "linear-gradient(180deg, #f0f4ff 0%, #fafbff 100%)",
      }}
    >
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
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
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.3)",
              color: "#00D4FF",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Users className="w-4 h-4" />
            Thriving Community
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
            You're Not Alone in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              This Journey
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
            Join 12,400+ students, connect with expert mentors, and find your tribe of ambitious peers.
          </motion.p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map(({ value, label, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="p-5 text-center"
              style={cardBase}
            >
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}
              >
                <Icon style={{ color, width: 18, height: 18 }} />
              </div>
              <div
                className="font-bold text-xl"
                style={{
                  fontFamily: "Sora, sans-serif",
                  background: `linear-gradient(135deg, ${color}, ${color}aa)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {value}
              </div>
              <div
                className="text-xs mt-1"
                style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
              >
                {label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Posts */}
          <div className="lg:col-span-2 space-y-4">
            <p
              className="font-semibold text-sm mb-4"
              style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
            >
              Community Highlights
            </p>
            {posts.map((post, i) => (
              <motion.div
                key={post.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="p-5 group"
                style={cardBase}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 text-white"
                    style={{
                      background: `linear-gradient(135deg, ${post.color}, ${post.color}aa)`,
                      fontFamily: "Sora, sans-serif",
                    }}
                  >
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-semibold text-sm"
                        style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
                      >
                        {post.name}
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{ background: `${post.color}15`, color: post.color, fontFamily: "Inter" }}
                      >
                        {post.role}
                      </span>
                    </div>
                    <span
                      className="text-[10px]"
                      style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#475569" : "#94a3b8" }}
                    >
                      {post.time}
                    </span>
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: darkMode ? "#94a3b8" : "#475569",
                  }}
                >
                  {post.content}
                </p>
                <div className="flex items-center gap-4">
                  {[
                    { Icon: ThumbsUp, count: post.likes, label: "Like" },
                    { Icon: MessageCircle, count: post.comments, label: "Comment" },
                    { Icon: Share2, count: null, label: "Share" },
                  ].map(({ Icon, count, label }) => (
                    <button
                      key={label}
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[#4F8CFF]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: darkMode ? "#64748b" : "#94a3b8",
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {count !== null ? count.toLocaleString() : label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mentors */}
          <div>
            <p
              className="font-semibold text-sm mb-4"
              style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
            >
              Featured Mentors
            </p>
            <div className="space-y-3">
              {mentors.map((mentor, i) => (
                <motion.div
                  key={mentor.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-4 cursor-pointer"
                  style={cardBase}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${mentor.color}, ${mentor.color}aa)`,
                      fontFamily: "Sora, sans-serif",
                    }}
                  >
                    {mentor.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-semibold text-sm truncate"
                      style={{ fontFamily: "Sora, sans-serif", color: darkMode ? "#f1f5f9" : "#0d1432" }}
                    >
                      {mentor.name}
                    </p>
                    <p
                      className="text-[10px] truncate"
                      style={{ fontFamily: "Inter, sans-serif", color: darkMode ? "#64748b" : "#94a3b8" }}
                    >
                      {mentor.role}
                    </p>
                    <p
                      className="text-[10px] font-medium"
                      style={{ color: mentor.color, fontFamily: "Inter, sans-serif" }}
                    >
                      {mentor.sessions}
                    </p>
                  </div>
                  <Heart
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: darkMode ? "#475569" : "#cbd5e1" }}
                  />
                </motion.div>
              ))}
              <Link href="/mentors">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  className="block w-full py-3 rounded-2xl text-sm font-semibold text-center cursor-pointer"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    background: "linear-gradient(135deg, #4F8CFF, #7B61FF)",
                    color: "white",
                    boxShadow: "0 4px 20px rgba(79,140,255,0.3)",
                  }}
                >
                  Browse All 350+ Mentors
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
