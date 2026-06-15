'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { DashboardShell } from '@/components/layout/DashboardShell';
import {
  GraduationCap, Trophy, Code2, Globe, Award, BookOpen,
  Search, CheckCircle, ArrowUpRight, X, LogIn, IndianRupee
} from 'lucide-react';

const OPPORTUNITIES = [
  {
    id: 's1', type: 'Scholarship', Icon: GraduationCap,
    title: 'National Merit Scholarship', provider: 'Ministry of Education, India',
    amount: '₹12,000/year', deadline: 'Sep 30, 2025',
    tags: ['Class 10+', 'Merit-based', 'All streams'], color: '#4F8CFF', isNew: false,
    desc: 'Central government scholarship for meritorious students from Class 10 onwards. Requires 80%+ in previous examination.',
  },
  {
    id: 's2', type: 'Hackathon', Icon: Code2,
    title: 'Smart India Hackathon 2025', provider: 'Govt. of India',
    amount: '₹1,00,000 prize', deadline: 'Aug 15, 2025',
    tags: ['College students', 'Tech', 'Innovation'], color: '#00D4FF', isNew: true,
    desc: 'National hackathon solving real problems across sectors. Open to all college students. Form a team of 6.',
  },
  {
    id: 's3', type: 'Olympiad', Icon: Trophy,
    title: 'Indian National Olympiad (INO)', provider: 'HBCSE',
    amount: 'International selection', deadline: 'Oct 1, 2025',
    tags: ['Class 8-12', 'Science', 'Math'], color: '#FFB347', isNew: false,
    desc: 'Pathway to International Science Olympiad. Top performers represent India globally in Physics, Chemistry, Math, Biology.',
  },
  {
    id: 's4', type: 'Internship', Icon: Award,
    title: 'Google Summer of Code', provider: 'Google',
    amount: '$1,500 – $3,500', deadline: 'April 2026',
    tags: ['College students', 'Open source', 'Tech'], color: '#7B61FF', isNew: false,
    desc: 'Global 3-month program connecting students with open source organizations. Highly competitive with global recognition.',
  },
  {
    id: 's5', type: 'Foreign Study', Icon: Globe,
    title: 'Fulbright-Nehru Scholarship', provider: 'US-India Educational Foundation',
    amount: 'Full funding', deadline: 'Jul 15, 2025',
    tags: ['Postgraduate', 'USA', 'Research'], color: '#FF6B8A', isNew: false,
    desc: 'Full funding for postgraduate study and research at US universities. Covers tuition, living, airfare.',
  },
  {
    id: 's6', type: 'Certification', Icon: BookOpen,
    title: 'AWS Cloud Practitioner', provider: 'Amazon Web Services',
    amount: 'Free via AWS Educate', deadline: 'Open enrollment',
    tags: ['Students', 'Cloud', 'Tech career'], color: '#4CAF82', isNew: true,
    desc: 'Industry-recognized cloud certification available free for students through AWS Educate. Great for tech careers.',
  },
];

const CATEGORIES = ['All', 'Scholarship', 'Hackathon', 'Olympiad', 'Internship', 'Foreign Study', 'Certification'];

type Opp = typeof OPPORTUNITIES[0];

function ApplyModal({ opp, onClose }: { opp: Opp; onClose: () => void }) {
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleApply = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/scholarships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scholarshipId: opp.id, notes }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to submit.');
        setLoading(false);
        return;
      }
      setDone(true);
    } catch {
      setError('Something went wrong.');
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
          <div className="text-center py-6">
            <CheckCircle className="w-12 h-12 mx-auto mb-3" style={{ color: '#4CAF82' }} />
            <p className="font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
              Application Submitted!
            </p>
            <p className="text-sm mt-1 mb-4" style={{ color: '#64748b' }}>
              We've recorded your interest in <strong>{opp.title}</strong>.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #4F8CFF, #7B61FF)' }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-bold text-sm" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
                  Apply: {opp.title}
                </p>
                <p className="text-xs" style={{ color: '#94a3b8' }}>{opp.provider}</p>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            {error && (
              <div className="mb-3 px-3 py-2 rounded-xl text-xs" style={{ background: 'rgba(255,107,138,0.1)', color: '#FF6B8A' }}>
                {error}
              </div>
            )}

            <div className="mb-4">
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#94a3b8' }}>
                Why are you interested? (optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Briefly describe why you want to apply…"
                className="w-full px-3 py-2.5 rounded-xl text-sm outline-none border resize-none"
                style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#0d1432' }}
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl text-sm font-medium border"
                style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#64748b' }}
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                disabled={loading}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-50"
                style={{ background: `linear-gradient(135deg, ${opp.color}, ${opp.color}cc)` }}
              >
                {loading ? 'Submitting…' : 'Submit Application'}
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ScholarshipsPage() {
  const { data: session } = useSession();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [applying, setApplying] = useState<Opp | null>(null);

  const filtered = OPPORTUNITIES.filter((o) => {
    const matchSearch = !search ||
      o.title.toLowerCase().includes(search.toLowerCase()) ||
      o.provider.toLowerCase().includes(search.toLowerCase()) ||
      o.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchCat = category === 'All' || o.type === category;
    return matchSearch && matchCat;
  });

  return (
    <DashboardShell>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
            Scholarships & Opportunities
          </h1>
          <p className="text-sm" style={{ color: '#64748b' }}>
            Browse 500+ scholarships, internships, hackathons, and certifications.
          </p>
        </div>

        {!session && (
          <div
            className="mb-5 px-4 py-3 rounded-2xl text-sm flex items-center gap-2"
            style={{ background: 'rgba(79,140,255,0.06)', border: '1px solid rgba(79,140,255,0.15)', color: '#4F8CFF' }}
          >
            <LogIn className="w-4 h-4 flex-shrink-0" />
            <span><Link href="/signin" className="font-semibold underline">Sign in</Link> to track your applications</span>
          </div>
        )}

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search scholarships, providers, tags…"
            className="w-full max-w-md pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none border"
            style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#0d1432', background: '#fff' }}
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all border"
              style={{
                background: category === cat ? 'rgba(79,140,255,0.1)' : 'transparent',
                borderColor: category === cat ? '#4F8CFF60' : 'rgba(0,0,0,0.08)',
                color: category === cat ? '#4F8CFF' : '#64748b',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((opp, i) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl p-5 flex flex-col group"
              style={{
                background: 'rgba(255,255,255,0.95)',
                border: `1px solid ${opp.color}18`,
                boxShadow: '0 2px 16px rgba(79,140,255,0.05)',
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${opp.color}15`, border: `1px solid ${opp.color}30` }}
                >
                  <opp.Icon className="w-5 h-5" style={{ color: opp.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-bold leading-tight" style={{ color: '#0d1432', fontFamily: 'Sora, sans-serif' }}>
                      {opp.title}
                    </p>
                    {opp.isNew && (
                      <span
                        className="text-xs px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0"
                        style={{ background: '#4CAF8220', color: '#4CAF82' }}
                      >
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: '#94a3b8' }}>{opp.provider}</p>
                </div>
              </div>

              <p className="text-xs mb-3 leading-relaxed" style={{ color: '#64748b' }}>{opp.desc}</p>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3 text-xs">
                <div className="flex items-center gap-1" style={{ color: opp.color }}>
                  <IndianRupee className="w-3 h-3" />
                  <span className="font-semibold">{opp.amount}</span>
                </div>
                <div style={{ color: '#94a3b8' }}>·</div>
                <div style={{ color: '#94a3b8' }}>Deadline: {opp.deadline}</div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {opp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${opp.color}10`, color: opp.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-auto">
                <button
                  onClick={() => session ? setApplying(opp) : undefined}
                  disabled={!session}
                  className="flex-1 py-2 rounded-xl text-xs font-semibold text-white disabled:opacity-50 transition-all"
                  style={{ background: `linear-gradient(135deg, ${opp.color}, ${opp.color}cc)` }}
                >
                  {session ? 'Apply Now' : 'Sign in to Apply'}
                </button>
                <button
                  className="p-2 rounded-xl text-xs border transition-colors hover:border-[#4F8CFF] hover:text-[#4F8CFF]"
                  style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#94a3b8' }}
                  title="Open external link"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ color: '#94a3b8' }}>
            <Search className="w-8 h-8 mx-auto mb-3 opacity-40" />
            <p className="text-sm">No opportunities match your search.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {applying && session && (
          <ApplyModal opp={applying} onClose={() => setApplying(null)} />
        )}
      </AnimatePresence>
    </DashboardShell>
  );
}
