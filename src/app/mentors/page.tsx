'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { Star, Clock, Search, X, CalendarDays, CheckCircle, LogIn } from 'lucide-react';

const MENTORS = [
  {
    id: 'm1', name: 'Dr. Kavya Nair', role: 'IIT Bombay Alumni • Ex-Google',
    avatar: 'KN', color: '#4F8CFF', expertise: ['AI/ML', 'Tech Career', 'IIT Prep'],
    rating: 4.9, sessions: 213, price: 499, bio: 'Ex-Googler with 8 years in AI research. Helps students crack JEE Advanced and pivot into top tech roles.',
  },
  {
    id: 'm2', name: 'Rahul Bansal', role: 'IAS Officer, Batch 2019',
    avatar: 'RB', color: '#7B61FF', expertise: ['UPSC', 'Civil Services', 'Essay Writing'],
    rating: 4.8, sessions: 158, price: 699, bio: 'IAS officer from Rajasthan cadre. Specialises in UPSC optional strategy and answer writing for Mains.',
  },
  {
    id: 'm3', name: 'Ananya Shah', role: 'UX Designer @ Figma',
    avatar: 'AS', color: '#00D4FF', expertise: ['UX Design', 'Portfolio Review', 'Career Switch'],
    rating: 4.7, sessions: 124, price: 399, bio: 'Senior UX Designer at Figma. Helps aspiring designers build portfolios that get into top product companies.',
  },
  {
    id: 'm4', name: 'Vikram Joshi', role: 'Founder, 2 Startups',
    avatar: 'VJ', color: '#FFB347', expertise: ['Entrepreneurship', 'Fundraising', 'Product'],
    rating: 4.6, sessions: 87, price: 599, bio: 'Built and sold 2 startups. Deep expertise in early-stage fundraising, MVP strategy, and YC applications.',
  },
  {
    id: 'm5', name: 'Priya Menon', role: 'NEET AIR 23 • AIIMS Delhi',
    avatar: 'PM', color: '#FF6B8A', expertise: ['NEET', 'Medical', 'Biology'],
    rating: 5.0, sessions: 96, price: 549, bio: 'AIIMS Delhi student with AIR 23 in NEET. Shares proven study strategies and answer-writing techniques.',
  },
  {
    id: 'm6', name: 'Arjun Sharma', role: 'SWE @ Microsoft | IIT Delhi',
    avatar: 'AS2', color: '#4CAF82', expertise: ['DSA', 'System Design', 'Placements'],
    rating: 4.8, sessions: 201, price: 449, bio: 'Software engineer at Microsoft. Conducts mock interviews and DSA mentoring for campus placements.',
  },
];

const FILTERS = ['All', 'AI/ML', 'UPSC', 'UX Design', 'Entrepreneurship', 'NEET', 'Placements'];

type Mentor = typeof MENTORS[0];

function BookingModal({ mentor, onClose, onBook }: { mentor: Mentor; onClose: () => void; onBook: () => void }) {
  const [slot, setSlot] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleBook = async () => {
    if (!slot) return;
    setLoading(true);
    try {
      await fetch('/api/mentors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mentorId: mentor.id, slot, topic }),
      });
      setDone(true);
      setTimeout(() => { onBook(); onClose(); }, 1800);
    } catch {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: 'rgba(13,20,50,0.5)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-3xl p-6"
        style={{ background: '#fff', boxShadow: '0 24px 80px rgba(0,0,0,0.15)' }}
      >
        {done ? (
          <div className="text-center py-4">
            <CheckCircle className="w-12 h-12 mx-auto mb-3" style={{ color: '#4CAF82' }} />
            <p className="font-semibold" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
              Session Requested!
            </p>
            <p className="text-sm mt-1" style={{ color: '#64748b' }}>
              {mentor.name} will confirm shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="font-bold text-sm" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
                  Book with {mentor.name}
                </p>
                <p className="text-xs" style={{ color: '#94a3b8' }}>{mentor.role}</p>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#94a3b8' }}>
                  Preferred Slot
                </label>
                <input
                  type="datetime-local"
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  min={new Date().toISOString().slice(0, 16)}
                  className="w-full px-3 py-2.5 rounded-xl text-sm outline-none border"
                  style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#0d1432' }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#94a3b8' }}>
                  Topic / Question (optional)
                </label>
                <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="What do you want to discuss?"
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-xl text-sm outline-none border resize-none"
                  style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#0d1432' }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl text-sm font-medium border"
                style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#64748b' }}
              >
                Cancel
              </button>
              <button
                onClick={handleBook}
                disabled={!slot || loading}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-50"
                style={{ background: `linear-gradient(135deg, ${mentor.color}, ${mentor.color}aa)` }}
              >
                {loading ? 'Booking…' : `Book · ₹${mentor.price}`}
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function MentorsPage() {
  const { data: session } = useSession();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [booking, setBooking] = useState<Mentor | null>(null);

  const filtered = MENTORS.filter((m) => {
    const matchSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.expertise.some((e) => e.toLowerCase().includes(search.toLowerCase()));
    const matchFilter = filter === 'All' || m.expertise.some((e) => e.includes(filter));
    return matchSearch && matchFilter;
  });

  return (
    <DashboardShell>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
            Find a Mentor
          </h1>
          <p className="text-sm" style={{ color: '#64748b' }}>
            Book 1-on-1 sessions with experts who've been exactly where you want to go.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or expertise…"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none border"
              style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#0d1432', background: '#fff' }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all border"
              style={{
                background: filter === f ? 'rgba(79,140,255,0.1)' : 'transparent',
                borderColor: filter === f ? '#4F8CFF60' : 'rgba(0,0,0,0.08)',
                color: filter === f ? '#4F8CFF' : '#64748b',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {!session && (
          <div
            className="mb-5 px-4 py-3 rounded-2xl text-sm flex items-center gap-2"
            style={{ background: 'rgba(79,140,255,0.06)', border: '1px solid rgba(79,140,255,0.15)', color: '#4F8CFF' }}
          >
            <LogIn className="w-4 h-4 flex-shrink-0" />
            <span><Link href="/signin" className="font-semibold underline">Sign in</Link> to book a session</span>
          </div>
        )}

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((mentor, i) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl p-5 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.95)',
                border: '1px solid rgba(79,140,255,0.1)',
                boxShadow: '0 2px 16px rgba(79,140,255,0.05)',
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${mentor.color}, ${mentor.color}99)` }}
                >
                  {mentor.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate" style={{ color: '#0d1432', fontFamily: 'Sora, sans-serif' }}>
                    {mentor.name}
                  </p>
                  <p className="text-xs truncate" style={{ color: '#94a3b8' }}>{mentor.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-[#FFB347] text-[#FFB347]" />
                      <span className="text-xs font-semibold" style={{ color: '#FFB347' }}>{mentor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs" style={{ color: '#94a3b8' }}>
                      <Clock className="w-3 h-3" />
                      {mentor.sessions} sessions
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs mb-3 leading-relaxed" style={{ color: '#64748b' }}>{mentor.bio}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {mentor.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${mentor.color}12`, color: mentor.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-bold" style={{ color: '#0d1432' }}>
                  ₹{mentor.price}
                  <span className="text-xs font-normal ml-1" style={{ color: '#94a3b8' }}>/session</span>
                </span>
                <button
                  onClick={() => session ? setBooking(mentor) : undefined}
                  disabled={!session}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white transition-all disabled:opacity-50"
                  style={{ background: `linear-gradient(135deg, ${mentor.color}, ${mentor.color}cc)` }}
                >
                  <CalendarDays className="w-3.5 h-3.5" />
                  {session ? 'Book Session' : 'Sign in to Book'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ color: '#94a3b8' }}>
            <Search className="w-8 h-8 mx-auto mb-3 opacity-40" />
            <p className="text-sm">No mentors match your search.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {booking && (
          <BookingModal
            mentor={booking}
            onClose={() => setBooking(null)}
            onBook={() => setBooking(null)}
          />
        )}
      </AnimatePresence>
    </DashboardShell>
  );
}
