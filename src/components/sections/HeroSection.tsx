'use client';

import { motion } from 'motion/react';
import {
  Cpu, Stethoscope, Palette, BrainCircuit,
  BookOpen, Code2, Briefcase, Music, Globe,
  Rocket, ArrowRight, Play, Zap, Star, TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { useScrollTo } from '@/hooks/useScrollTo';

interface HeroSectionProps {
  darkMode: boolean;
}

const floatingIcons = [
  { Icon: Cpu, label: 'Engineering', color: '#4F8CFF', delay: 0, x: '6%', y: '28%' },
  { Icon: Stethoscope, label: 'Medical', color: '#FF6B8A', delay: 0.4, x: '87%', y: '22%' },
  { Icon: Palette, label: 'Design', color: '#7B61FF', delay: 0.8, x: '4%', y: '60%' },
  { Icon: BrainCircuit, label: 'AI', color: '#00D4FF', delay: 1.2, x: '89%', y: '55%' },
  { Icon: BookOpen, label: 'UPSC', color: '#FFB347', delay: 1.6, x: '14%', y: '78%' },
  { Icon: Code2, label: 'Coding', color: '#00D4FF', delay: 2.0, x: '82%', y: '75%' },
  { Icon: Briefcase, label: 'Business', color: '#4CAF82', delay: 2.4, x: '93%', y: '40%' },
  { Icon: Music, label: 'Arts', color: '#FF6B8A', delay: 2.8, x: '2%', y: '45%' },
  { Icon: Globe, label: 'Abroad', color: '#7B61FF', delay: 3.2, x: '48%', y: '4%' },
];

const stats = [
  { value: '50K+', label: 'Students Guided', icon: TrendingUp, color: '#4F8CFF' },
  { value: '200+', label: 'Career Paths', icon: Globe, color: '#7B61FF' },
  { value: '95%', label: 'Clarity Rate', icon: Star, color: '#FFB347' },
  { value: '500+', label: 'Scholarships', icon: BookOpen, color: '#4CAF82' },
];

function StudentIllustration({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      <motion.div
        animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(79,140,255,0.2) 0%, rgba(123,97,255,0.1) 50%, transparent 75%)',
          filter: 'blur(20px)',
        }}
      />
      <svg viewBox="0 0 400 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <circle cx="200" cy="210" r="160" fill="url(#bgGrad)" opacity="0.12" />
        <motion.ellipse cx="200" cy="210" rx="155" ry="60" stroke="url(#orbitGrad1)" strokeWidth="1.5" strokeDasharray="8 6" fill="none" opacity="0.35" />
        <motion.ellipse cx="200" cy="210" rx="120" ry="46" stroke="url(#orbitGrad2)" strokeWidth="1" strokeDasharray="5 8" fill="none" opacity="0.25" />
        <ellipse cx="200" cy="360" rx="90" ry="20" fill="url(#shadowGrad)" opacity="0.3" />
        <rect x="120" y="320" width="160" height="40" rx="12" fill={darkMode ? '#1a2545' : '#e8eeff'} />
        <rect x="130" y="316" width="140" height="12" rx="6" fill="url(#deskGrad)" />
        <rect x="148" y="240" width="104" height="72" rx="8" fill={darkMode ? '#0d1432' : '#ffffff'} />
        <rect x="148" y="240" width="104" height="72" rx="8" stroke="url(#laptopBorder)" strokeWidth="2" />
        <rect x="158" y="252" width="50" height="4" rx="2" fill="#4F8CFF" opacity="0.8" />
        <rect x="158" y="260" width="36" height="3" rx="1.5" fill="#7B61FF" opacity="0.6" />
        <rect x="158" y="268" width="60" height="3" rx="1.5" fill="#00D4FF" opacity="0.5" />
        <rect x="158" y="276" width="42" height="3" rx="1.5" fill="#4F8CFF" opacity="0.4" />
        <rect x="210" y="268" width="6" height="16" rx="2" fill="#4F8CFF" opacity="0.9" />
        <rect x="220" y="272" width="6" height="12" rx="2" fill="#7B61FF" opacity="0.9" />
        <rect x="230" y="258" width="6" height="26" rx="2" fill="#00D4FF" opacity="0.9" />
        <rect x="138" y="312" width="124" height="8" rx="4" fill={darkMode ? '#1a2545' : '#dde4ff'} />
        <ellipse cx="200" cy="312" rx="12" ry="2.5" fill={darkMode ? '#0d1432' : '#c4ceff'} />
        <rect x="178" y="290" width="44" height="30" rx="6" fill={darkMode ? '#1a2545' : '#dde4ff'} />
        <rect x="172" y="220" width="56" height="72" rx="18" fill="url(#torsoGrad)" />
        <path d="M186 232 L200 226 L214 232" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
        <path d="M172 238 C155 240 148 258 150 274 C152 285 160 290 170 285" stroke="url(#armGrad)" strokeWidth="14" strokeLinecap="round" fill="none" />
        <path d="M228 238 C245 240 252 258 250 274 C248 285 240 290 230 285" stroke="url(#armGrad)" strokeWidth="14" strokeLinecap="round" fill="none" />
        <circle cx="158" cy="286" r="8" fill="url(#skinGrad)" />
        <circle cx="242" cy="286" r="8" fill="url(#skinGrad)" />
        <rect x="192" y="206" width="16" height="18" rx="6" fill="url(#skinGrad)" />
        <ellipse cx="200" cy="190" rx="32" ry="36" fill="url(#skinGrad)" />
        <path d="M168 178 C170 152 194 144 200 144 C206 144 230 152 232 178" fill="#2d1a4a" />
        <path d="M168 178 C166 170 166 160 170 154" stroke="#2d1a4a" strokeWidth="8" strokeLinecap="round" />
        <path d="M232 178 C234 170 234 160 230 154" stroke="#2d1a4a" strokeWidth="8" strokeLinecap="round" />
        <ellipse cx="189" cy="188" rx="5" ry="6" fill="#1a0a2e" />
        <ellipse cx="211" cy="188" rx="5" ry="6" fill="#1a0a2e" />
        <circle cx="191" cy="186" r="2" fill="white" />
        <circle cx="213" cy="186" r="2" fill="white" />
        <path d="M192 202 Q200 210 208 202" stroke="#c97b5a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="182" cy="200" r="7" fill="rgba(255,150,120,0.25)" />
        <circle cx="218" cy="200" r="7" fill="rgba(255,150,120,0.25)" />
        <rect x="180" y="183" width="15" height="11" rx="5" stroke="#4F8CFF" strokeWidth="2" fill="rgba(79,140,255,0.08)" />
        <rect x="205" y="183" width="15" height="11" rx="5" stroke="#4F8CFF" strokeWidth="2" fill="rgba(79,140,255,0.08)" />
        <line x1="195" y1="188" x2="205" y2="188" stroke="#4F8CFF" strokeWidth="2" />
        <line x1="168" y1="188" x2="180" y2="188" stroke="#4F8CFF" strokeWidth="2" />
        <line x1="220" y1="188" x2="232" y2="188" stroke="#4F8CFF" strokeWidth="2" />
        <g>
          <rect x="28" y="180" width="90" height="52" rx="12" fill={darkMode ? 'rgba(15,25,60,0.9)' : 'rgba(255,255,255,0.95)'} stroke="rgba(79,140,255,0.4)" strokeWidth="1.5" />
          <rect x="36" y="192" width="24" height="24" rx="6" fill="rgba(79,140,255,0.15)" />
          <text x="49" y="208" textAnchor="middle" fontSize="12" fill="#4F8CFF">⚙️</text>
          <rect x="66" y="194" width="44" height="4" rx="2" fill="#4F8CFF" opacity="0.7" />
          <rect x="66" y="202" width="32" height="3" rx="1.5" fill="#94a3b8" opacity="0.5" />
          <rect x="36" y="220" width="74" height="6" rx="3" fill="rgba(79,140,255,0.15)" />
        </g>
        <g>
          <rect x="282" y="170" width="90" height="52" rx="12" fill={darkMode ? 'rgba(15,25,60,0.9)' : 'rgba(255,255,255,0.95)'} stroke="rgba(123,97,255,0.4)" strokeWidth="1.5" />
          <rect x="290" y="182" width="24" height="24" rx="6" fill="rgba(123,97,255,0.15)" />
          <text x="303" y="198" textAnchor="middle" fontSize="12" fill="#7B61FF">🧠</text>
          <rect x="320" y="184" width="40" height="4" rx="2" fill="#7B61FF" opacity="0.7" />
          <rect x="290" y="210" width="74" height="6" rx="3" fill="rgba(123,97,255,0.15)" />
        </g>
        <g>
          <rect x="148" y="108" width="104" height="44" rx="14" fill={darkMode ? 'rgba(15,25,60,0.95)' : 'rgba(255,255,255,0.98)'} stroke="url(#badgeBorder)" strokeWidth="1.5" />
          <text x="200" y="126" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="Inter, sans-serif">AI Match Score</text>
          <text x="200" y="145" textAnchor="middle" fontSize="18" fontWeight="800" fill="url(#scoreGrad)" fontFamily="Sora, sans-serif">94%</text>
        </g>
        <circle cx="100" cy="150" r="4" fill="#4F8CFF" opacity="0.6" />
        <circle cx="310" cy="140" r="3" fill="#7B61FF" opacity="0.5" />
        <circle cx="60" cy="300" r="3" fill="#00D4FF" opacity="0.5" />
        <circle cx="340" cy="310" r="4" fill="#FFB347" opacity="0.5" />
        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F8CFF" />
            <stop offset="100%" stopColor="#7B61FF" />
          </linearGradient>
          <linearGradient id="orbitGrad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#4F8CFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7B61FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="orbitGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7B61FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7B61FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="shadowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F8CFF" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="deskGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4F8CFF" />
            <stop offset="100%" stopColor="#7B61FF" />
          </linearGradient>
          <linearGradient id="laptopBorder" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F8CFF" />
            <stop offset="50%" stopColor="#7B61FF" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
          <linearGradient id="torsoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F8CFF" />
            <stop offset="100%" stopColor="#7B61FF" />
          </linearGradient>
          <linearGradient id="armGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5a9fff" />
            <stop offset="100%" stopColor="#8a75ff" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5c4a0" />
            <stop offset="100%" stopColor="#e8a87c" />
          </linearGradient>
          <linearGradient id="badgeBorder" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F8CFF" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
          <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4F8CFF" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function HeroSection({ darkMode }: HeroSectionProps) {
  const scrollTo = useScrollTo();

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: darkMode
            ? 'linear-gradient(135deg, #060b18 0%, #0a0f1e 40%, #0d1432 70%, #080c1a 100%)'
            : 'linear-gradient(135deg, #f0f5ff 0%, #fafbff 40%, #f5f0ff 70%, #f0f9ff 100%)',
        }}
      />

      {/* Animated mesh gradient blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79,140,255,0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,97,255,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${darkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Icons (desktop) */}
      {floatingIcons.map(({ Icon, label, color, delay, x, y }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: [0, 1, 1], scale: [0, 1, 1], y: [20, 0, -10, 0] }}
          transition={{
            opacity: { delay: delay + 1, duration: 0.5, type: 'tween' },
            scale: { delay: delay + 1, duration: 0.6, type: 'tween', ease: 'easeOut' },
            y: { duration: 3.5 + delay * 0.2, repeat: Infinity, ease: 'easeInOut', delay: delay + 1 },
          }}
          className="absolute hidden lg:flex flex-col items-center gap-1.5 pointer-events-none"
          style={{ left: x, top: y }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              background: `${color}12`,
              border: `1.5px solid ${color}35`,
              backdropFilter: 'blur(12px)',
              boxShadow: `0 8px 32px ${color}25, inset 0 1px 0 rgba(255,255,255,0.15)`,
            }}
          >
            <Icon style={{ color, width: 24, height: 24 }} />
          </div>
          <span
            className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
            style={{
              color,
              background: `${color}12`,
              border: `1px solid ${color}25`,
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            {label}
          </span>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left: Text Content */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: darkMode ? 'rgba(79,140,255,0.12)' : 'rgba(79,140,255,0.08)',
                border: '1px solid rgba(79,140,255,0.3)',
                color: '#4F8CFF',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 2 }}>
                <Zap className="w-4 h-4" />
              </motion.span>
              AI-Powered Career Discovery for Indian Students
              <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <Star className="w-3 h-3 fill-current" style={{ color: '#FFB347' }} />
              </motion.span>
            </motion.div>

            {/* Headline */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <h1
                className="mb-6 leading-none"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                <span className={darkMode ? 'text-white' : 'text-[#0d1432]'}>
                  Discover Your<br />
                </span>
                <span
                  style={{
                    background: 'linear-gradient(135deg, #4F8CFF 0%, #7B61FF 45%, #00D4FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  Hidden Future
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg mb-10 max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif', color: darkMode ? '#94a3b8' : '#64748b', lineHeight: 1.75 }}
            >
              Thousands of Indian students choose the wrong career due to family pressure, stream confusion, and zero awareness of hidden opportunities.{' '}
              <span style={{ color: darkMode ? '#cbd5e1' : '#475569', fontWeight: 500 }}>
                Our AI breaks you free and maps your true potential.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/signup">
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(79,140,255,0.45)' }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden flex items-center justify-center gap-2.5 px-8 py-4 text-white font-semibold rounded-2xl text-base cursor-pointer"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: 'linear-gradient(135deg, #4F8CFF 0%, #7B61FF 100%)',
                    boxShadow: '0 8px 30px rgba(79,140,255,0.4)',
                  }}
                >
                  <Rocket className="w-5 h-5" />
                  Explore Careers
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>

              <Link href="/career-test">
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(79,140,255,0.2)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2.5 px-8 py-4 font-semibold rounded-2xl text-base border-2 transition-all duration-300 cursor-pointer"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    borderColor: darkMode ? 'rgba(79,140,255,0.4)' : 'rgba(79,140,255,0.5)',
                    color: '#4F8CFF',
                    background: darkMode ? 'rgba(79,140,255,0.06)' : 'rgba(79,140,255,0.04)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                  }}
                >
                  <Play className="w-5 h-5" />
                  Take AI Career Test
                </motion.span>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2.5">
                {['AS', 'RV', 'MK', 'VJ', 'PK'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[9px] font-bold text-white"
                    style={{
                      background: `hsl(${200 + i * 30}, 70%, 55%)`,
                      borderColor: darkMode ? '#0a0f1e' : '#fafbff',
                      fontFamily: 'Sora, sans-serif',
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" style={{ color: '#FFB347' }} />
                  ))}
                </div>
                <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: darkMode ? '#94a3b8' : '#64748b' }}>
                  Trusted by <span style={{ color: '#4F8CFF', fontWeight: 600 }}>50,000+</span> students across India
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, type: 'spring', bounce: 0.3 }}
            className="relative"
          >
            <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <StudentIllustration darkMode={darkMode} />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 lg:mt-16"
        >
          {stats.map(({ value, label, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1, type: 'spring', bounce: 0.3 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="flex items-center gap-3 rounded-2xl p-4"
              style={{
                background: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.75)',
                border: darkMode ? '1px solid rgba(255,255,255,0.07)' : `1px solid ${color}20`,
                backdropFilter: 'blur(12px)',
                boxShadow: darkMode ? '0 4px 20px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.04)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}
              >
                <Icon style={{ color, width: 18, height: 18 }} />
              </div>
              <div>
                <div
                  className="font-bold text-lg leading-none mb-0.5"
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    background: `linear-gradient(135deg, ${color}, ${color}bb)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {value}
                </div>
                <div className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: darkMode ? '#64748b' : '#94a3b8' }}>
                  {label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif', color: darkMode ? '#475569' : '#94a3b8' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(79,140,255,0.3)' }}
        >
          <div className="w-1.5 h-2 rounded-full bg-[#4F8CFF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
