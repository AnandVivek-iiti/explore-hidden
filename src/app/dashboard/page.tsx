'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Compass, LogOut, BrainCircuit, Users, GraduationCap,
  ArrowRight, Map, TrendingUp, Bell, Settings, ChevronRight,
  Star, BookOpen, Zap
} from 'lucide-react';

const quickLinks = [
  { label: 'Career Test', desc: 'Discover your strengths', icon: BrainCircuit, color: '#00D4FF', href: '/career-test' },
  { label: 'Find Mentors', desc: 'Book a 1-on-1 session', icon: Users, color: '#7B61FF', href: '/mentors' },
  { label: 'Scholarships', desc: 'Browse 500+ opportunities', icon: GraduationCap, color: '#4F8CFF', href: '/scholarships' },
  { label: 'Career Pathways', desc: 'Step-by-step roadmaps', icon: Map, color: '#4CAF82', href: '/pathways' },
];

const recentActivity = [
  { text: 'You viewed the UPSC pathway', time: '2h ago', icon: Map, color: '#7B61FF' },
  { text: 'Career test recommended AI/ML', time: '1d ago', icon: BrainCircuit, color: '#00D4FF' },
  { text: 'National Merit Scholarship deadline soon', time: '2d ago', icon: GraduationCap, color: '#4F8CFF' },
];

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#fafbff' }}>
        <div className="w-8 h-8 rounded-full border-2 border-[#4F8CFF] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!session) {
    router.push('/signin');
    return null;
  }

  const firstName = session.user.name?.split(' ')[0] || 'there';
  const initials = session.user.name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || '?';

  return (
    <div className="min-h-screen" style={{ background: '#fafbff', fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar + Main layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside
          className="hidden lg:flex flex-col w-64 min-h-screen fixed left-0 top-0 pt-6 pb-4 px-4"
          style={{
            background: 'rgba(255,255,255,0.95)',
            borderRight: '1px solid rgba(79,140,255,0.1)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <Link href="/" className="flex items-center gap-2 mb-8 px-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F8CFF] to-[#7B61FF] flex items-center justify-center shadow-lg shadow-[#4F8CFF]/30">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-lg font-bold"
              style={{
                fontFamily: 'Sora, sans-serif',
                background: 'linear-gradient(135deg, #4F8CFF, #7B61FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ExploreHidden
            </span>
          </Link>

          <nav className="flex-1 space-y-1">
            {[
              { label: 'Dashboard', icon: TrendingUp, href: '/dashboard', active: true },
              { label: 'Career Test', icon: BrainCircuit, href: '/career-test' },
              { label: 'Mentors', icon: Users, href: '/mentors' },
              { label: 'Scholarships', icon: GraduationCap, href: '/scholarships' },
              { label: 'Pathways', icon: Map, href: '/pathways' },
            ].map(({ label, icon: Icon, href, active }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: active ? 'rgba(79,140,255,0.08)' : 'transparent',
                  color: active ? '#4F8CFF' : '#64748b',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3 px-3 py-2 mb-2">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #4F8CFF, #7B61FF)' }}
              >
                {initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate" style={{ color: '#0d1432' }}>
                  {session.user.name}
                </p>
                <p className="text-xs truncate" style={{ color: '#94a3b8' }}>
                  {session.user.email}
                </p>
              </div>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-sm text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-64 px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
          {/* Mobile header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4F8CFF] to-[#7B61FF] flex items-center justify-center">
                <Compass className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm" style={{ fontFamily: 'Sora, sans-serif', color: '#4F8CFF' }}>
                ExploreHidden
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl" style={{ background: 'rgba(79,140,255,0.08)' }}>
                <Bell className="w-4 h-4 text-[#4F8CFF]" />
              </button>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="p-2 rounded-xl text-gray-400 hover:text-red-400 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">👋</span>
              <h1
                className="text-2xl font-bold"
                style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}
              >
                Hey, {firstName}!
              </h1>
            </div>
            <p className="text-sm" style={{ color: '#64748b' }}>
              Ready to explore your career path today?
            </p>
          </motion.div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Career Tests', value: '0', icon: BrainCircuit, color: '#00D4FF' },
              { label: 'Mentor Sessions', value: '0', icon: Users, color: '#7B61FF' },
              { label: 'Applications', value: '0', icon: GraduationCap, color: '#4F8CFF' },
              { label: 'Pathways Started', value: '0', icon: Map, color: '#4CAF82' },
            ].map(({ label, value, icon: Icon, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl p-4"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(79,140,255,0.1)',
                  boxShadow: '0 2px 16px rgba(79,140,255,0.05)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${color}15` }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <p className="text-2xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
                  {value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#94a3b8' }}>{label}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2
              className="text-sm font-semibold mb-4 uppercase tracking-wide"
              style={{ color: '#94a3b8' }}
            >
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map(({ label, desc, icon: Icon, color, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-2xl group transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.9)',
                      border: `1px solid ${color}20`,
                      boxShadow: '0 2px 16px rgba(79,140,255,0.05)',
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold" style={{ color: '#0d1432', fontFamily: 'Sora, sans-serif' }}>
                        {label}
                      </p>
                      <p className="text-xs" style={{ color: '#94a3b8' }}>{desc}</p>
                    </div>
                    <ChevronRight
                      className="w-4 h-4 text-gray-300 group-hover:text-[#4F8CFF] transition-colors flex-shrink-0"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity + CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl p-5"
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(79,140,255,0.1)',
              }}
            >
              <h3 className="text-sm font-semibold mb-4" style={{ color: '#0d1432', fontFamily: 'Sora, sans-serif' }}>
                Recent Activity
              </h3>
              <div className="space-y-3">
                {recentActivity.map(({ text, time, icon: Icon, color }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${color}12` }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium" style={{ color: '#0d1432' }}>{text}</p>
                      <p className="text-xs" style={{ color: '#94a3b8' }}>{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Career Test CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #4F8CFF, #7B61FF)',
                boxShadow: '0 8px 32px rgba(79,140,255,0.25)',
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
                style={{ background: 'rgba(255,255,255,0.3)', transform: 'translate(20%, -30%)' }}
              />
              <Zap className="w-8 h-8 text-white/80 mb-3" />
              <h3 className="text-white font-bold text-base mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
                Discover your ideal career
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Take a 5-min AI-powered career test and get personalised recommendations.
              </p>
              <Link
                href="/career-test"
                className="inline-flex items-center gap-2 bg-white text-[#4F8CFF] text-sm font-semibold px-4 py-2 rounded-xl hover:shadow-lg transition-shadow"
              >
                Start Test
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Settings & account links bottom */}
          <div className="mt-8 flex flex-wrap gap-3 lg:hidden">
            {quickLinks.map(({ label, href, color, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                style={{ background: `${color}12`, color }}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
