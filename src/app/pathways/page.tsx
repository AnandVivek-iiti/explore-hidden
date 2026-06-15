'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { Cpu, Stethoscope, Scale, PenTool, BrainCircuit, Briefcase, Clock, ArrowRight } from 'lucide-react';

const PATHWAYS = [
  {
    slug: 'jee', label: 'JEE / IIT', Icon: Cpu, color: '#4F8CFF',
    description: 'Engineering & Technology',
    duration: '2 years prep', steps: 4,
    highlight: 'Top engineering colleges in India',
  },
  {
    slug: 'neet', label: 'NEET / MBBS', Icon: Stethoscope, color: '#FF6B8A',
    description: 'Medical & Healthcare',
    duration: '2 years prep', steps: 4,
    highlight: 'Government medical colleges & AIIMS',
  },
  {
    slug: 'upsc', label: 'UPSC / IAS', Icon: Scale, color: '#7B61FF',
    description: 'Civil Services',
    duration: '2-3 years prep', steps: 4,
    highlight: 'IAS, IPS, IFS & allied services',
  },
  {
    slug: 'design', label: 'Design', Icon: PenTool, color: '#FFB347',
    description: 'UX/UI & Creative Design',
    duration: 'Portfolio-based', steps: 4,
    highlight: 'FAANG product & top design studios',
  },
  {
    slug: 'ai', label: 'AI / Tech', Icon: BrainCircuit, color: '#00D4FF',
    description: 'Artificial Intelligence',
    duration: 'Self-paced', steps: 4,
    highlight: 'Google, OpenAI, DeepMind & more',
  },
  {
    slug: 'entrepreneurship', label: 'Entrepreneurship', Icon: Briefcase, color: '#4CAF82',
    description: 'Startups & Business',
    duration: 'Lifelong journey', steps: 4,
    highlight: 'YC, Sequoia Surge & startup ecosystem',
  },
];

export default function PathwaysPage() {
  return (
    <DashboardShell>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
            Career Pathways
          </h1>
          <p className="text-sm" style={{ color: '#64748b' }}>
            Detailed, step-by-step roadmaps for every major career in India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {PATHWAYS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <Link
                href={`/pathways/${p.slug}`}
                className="flex flex-col rounded-2xl p-5 group h-full"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  border: `1px solid ${p.color}20`,
                  boxShadow: '0 2px 16px rgba(79,140,255,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: `${p.color}15`, border: `1.5px solid ${p.color}30` }}
                >
                  <p.Icon className="w-6 h-6" style={{ color: p.color }} />
                </div>

                <h2
                  className="text-base font-bold mb-0.5"
                  style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}
                >
                  {p.label}
                </h2>
                <p className="text-xs mb-2" style={{ color: '#94a3b8' }}>{p.description}</p>
                <p className="text-xs mb-4 leading-relaxed flex-1" style={{ color: '#64748b' }}>
                  {p.highlight}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs" style={{ color: '#94a3b8' }}>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {p.duration}
                    </span>
                    <span>{p.steps} phases</span>
                  </div>
                  <span
                    className="flex items-center gap-1 text-xs font-semibold transition-colors group-hover:underline"
                    style={{ color: p.color }}
                  >
                    View roadmap
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
