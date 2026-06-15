'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { notFound } from 'next/navigation';
import { DashboardShell } from '@/components/layout/DashboardShell';
import {
  Cpu, Stethoscope, Scale, PenTool, BrainCircuit, Briefcase,
  Clock, CheckCircle, Circle, ArrowLeft, Users
} from 'lucide-react';

const PATHWAYS = {
  jee: {
    label: 'JEE / IIT', Icon: Cpu, color: '#4F8CFF',
    description: 'Engineering & Technology · 2 years prep',
    steps: [
      { phase: 'Class 11-12', duration: '2 years', tasks: ['Complete NCERT Physics, Chemistry, Math', 'Join a reputed coaching institute', 'Solve 50 problems daily', 'Attempt mock tests every week'] },
      { phase: 'JEE Main', duration: 'Jan–April', tasks: ['Score 150+ for good NITs', 'Attempt in January & April sessions', 'Focus on speed and accuracy', 'Revise PYQ patterns'] },
      { phase: 'JEE Advanced', duration: 'May–June', tasks: ['Top 2.5 lakh from Main qualify', 'Solve previous 10 years papers', 'Focus on IIT-specific concepts', 'Join intensive crash course'] },
      { phase: 'IIT / NIT', duration: '4 years', tasks: ['Choose branch wisely based on interest', 'Explore research, startups, internships', 'Build your network early', 'CGPA + projects + internships = success'] },
    ],
    mentors: [{ name: 'Arjun Sharma', role: 'IIT Delhi · Microsoft', color: '#4F8CFF', slug: 'm6' }],
  },
  neet: {
    label: 'NEET / MBBS', Icon: Stethoscope, color: '#FF6B8A',
    description: 'Medical & Healthcare · 2 years prep',
    steps: [
      { phase: 'Class 11-12', duration: '2 years', tasks: ['Master Biology, Physics, Chemistry', 'NCERT is the Bible for NEET', 'Practice MCQs daily — aim 200/day', 'Focus on diagrams and exceptions'] },
      { phase: 'NEET UG', duration: 'May', tasks: ['Target 650+ for government colleges', 'Attempt all 200 questions strategically', 'Manage negative marking carefully', 'Biology carries 360 marks — prioritise it'] },
      { phase: 'MBBS', duration: '5.5 years', tasks: ['5.5 years including compulsory internship', 'Focus on clinical skills from Year 1', 'Consider specialization field early', 'Build research portfolio for PG'] },
      { phase: 'MD / MS', duration: '3 years', tasks: ['Prepare for NEET PG from MBBS Year 2', 'Choose specialization wisely', 'Build expertise and clinical practice', 'Superspeciality (DM/MCh) if needed'] },
    ],
    mentors: [{ name: 'Priya Menon', role: 'NEET AIR 23 · AIIMS Delhi', color: '#FF6B8A', slug: 'm5' }],
  },
  upsc: {
    label: 'UPSC / IAS', Icon: Scale, color: '#7B61FF',
    description: 'Civil Services · 2-3 years prep',
    steps: [
      { phase: 'Foundation', duration: '6-12 months', tasks: ['Read NCERT books Class 6-12 (all subjects)', 'Start The Hindu newspaper reading daily', 'Choose optional subject early & wisely', 'Join a UPSC community for accountability'] },
      { phase: 'Prelims', duration: 'June', tasks: ['GS Paper 1: History, Geography, Polity, Economy, Science', 'CSAT Paper 2: Qualifying (33% needed)', 'Current affairs — last 12 months crucial', 'Target 110+ marks for safe clearance'] },
      { phase: 'Mains', duration: 'Sep-Oct', tasks: ['9 papers total — 4 GS + 2 Optional + Essay + 2 Language', 'Answer writing practice daily (mandatory)', 'Ethics, Integrity & Aptitude (GS-IV) crucial', 'Integrate current affairs with static'] },
      { phase: 'Interview', duration: 'March-June', tasks: ['Personality test worth 275 marks', 'Be genuine and think from a civil servant perspective', 'Know your home state, graduation subject, hobbies deeply', 'Mock interviews with former IAS/IPS officers'] },
    ],
    mentors: [{ name: 'Rahul Bansal', role: 'IAS Officer, Batch 2019', color: '#7B61FF', slug: 'm2' }],
  },
  design: {
    label: 'Design', Icon: PenTool, color: '#FFB347',
    description: 'UX/UI & Creative Design · Portfolio-based',
    steps: [
      { phase: 'Foundation', duration: '3-6 months', tasks: ['Learn Figma thoroughly (free plan is fine)', 'Study design principles: typography, colour, layout', 'Build your first 3 personal projects', 'Study award-winning designs on Dribbble/Behance'] },
      { phase: 'Specialization', duration: '6 months', tasks: ['UX research methods: surveys, interviews, usability', 'Prototyping & wireframing for mobile & web', 'User testing techniques and how to iterate', 'Learn Design Systems (Material, iOS HIG)'] },
      { phase: 'Portfolio', duration: '1 year', tasks: ['Build 5-7 in-depth case studies with real problem solving', 'Contribute to open-source design projects', 'Get design internships — 2-3 before graduation', 'Write design thinking articles to build presence'] },
      { phase: 'Career', duration: 'Ongoing', tasks: ['Apply to design agencies and product companies', 'Freelance for extra income while job hunting', 'Target FAANG product design roles', 'Network on LinkedIn and local design meetups'] },
    ],
    mentors: [{ name: 'Ananya Shah', role: 'UX Designer @ Figma', color: '#FFB347', slug: 'm3' }],
  },
  ai: {
    label: 'AI / Tech', Icon: BrainCircuit, color: '#00D4FF',
    description: 'Artificial Intelligence · Self-paced',
    steps: [
      { phase: 'CS Basics', duration: '3-6 months', tasks: ['Python programming — master it completely', 'Data Structures & Algorithms (LeetCode 150+)', 'Mathematics: Linear Algebra, Calculus, Probability', 'Git, Linux basics, and version control workflows'] },
      { phase: 'ML / DL', duration: '6-12 months', tasks: ['Supervised & unsupervised learning theory', 'Neural networks with TensorFlow and PyTorch', 'Kaggle competitions — aim for bronze at least', 'Study foundational papers: attention, transformers'] },
      { phase: 'Projects', duration: '6 months', tasks: ['Build end-to-end ML projects with real datasets', 'Publish on GitHub with READMEs and demos', 'Contribute to open-source AI projects', 'Deploy at least 1 model to production'] },
      { phase: 'Career', duration: 'Ongoing', tasks: ['Apply to AI startups and FAANG AI teams', 'Target Google DeepMind, OpenAI, Anthropic, Mistral', 'Research vs industry — decide early', 'Continue learning: new models come every month'] },
    ],
    mentors: [{ name: 'Dr. Kavya Nair', role: 'IIT Bombay · Ex-Google', color: '#00D4FF', slug: 'm1' }],
  },
  entrepreneurship: {
    label: 'Entrepreneurship', Icon: Briefcase, color: '#4CAF82',
    description: 'Startups & Business · Lifelong journey',
    steps: [
      { phase: 'Ideation', duration: '3 months', tasks: ['Identify a real problem you genuinely care about', 'Validate with 100 real users before building', 'Study your market deeply — TAM, SAM, SOM', 'Read: Zero to One, The Lean Startup'] },
      { phase: 'Building', duration: '6 months', tasks: ['Build an MVP in under 8 weeks', 'Find a co-founder who complements your skills', 'Apply to startup incubators (IIT/IIM, NASSCOM)', 'Ship fast and iterate based on user feedback'] },
      { phase: 'Growth', duration: '1-2 years', tasks: ['Get first paying customers — this changes everything', 'Apply to Y Combinator and Sequoia Surge', 'Raise a seed round ($500K–$2M)', 'Build repeatable sales & marketing processes'] },
      { phase: 'Scale', duration: 'Ongoing', tasks: ['Hire the right team — culture is everything', 'Expand to new markets and geographies', 'Series A and beyond — unit economics matter', 'Build a sustainable business, not just growth'] },
    ],
    mentors: [{ name: 'Vikram Joshi', role: 'Founder, 2 Startups', color: '#4CAF82', slug: 'm4' }],
  },
};

type Slug = keyof typeof PATHWAYS;

export default function PathwayDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  if (!PATHWAYS[slug as Slug]) {
    notFound();
  }

  const pathway = PATHWAYS[slug as Slug];
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const totalTasks = pathway.steps.reduce((a, s) => a + s.tasks.length, 0);
  const doneTasks = completed.size;
  const progress = Math.round((doneTasks / totalTasks) * 100);

  return (
    <DashboardShell>
      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-3xl">
        {/* Back */}
        <Link
          href="/pathways"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          All Pathways
        </Link>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${pathway.color}15`, border: `1.5px solid ${pathway.color}40` }}
          >
            <pathway.Icon className="w-7 h-7" style={{ color: pathway.color }} />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
              {pathway.label} Roadmap
            </h1>
            <p className="text-sm" style={{ color: '#94a3b8' }}>{pathway.description}</p>
          </div>
        </div>

        {/* Progress */}
        <div
          className="rounded-2xl p-4 mb-8"
          style={{ background: `${pathway.color}08`, border: `1px solid ${pathway.color}20` }}
        >
          <div className="flex items-center justify-between text-sm mb-2">
            <span style={{ color: pathway.color, fontWeight: 600 }}>Your Progress</span>
            <span style={{ color: '#64748b' }}>{doneTasks} / {totalTasks} tasks</span>
          </div>
          <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(135deg, ${pathway.color}, ${pathway.color}aa)` }}
            />
          </div>
          <p className="text-xs mt-1.5" style={{ color: '#94a3b8' }}>
            {progress === 0 ? 'Click tasks below to track completion' : `${progress}% complete — keep going!`}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-5 mb-8">
          <div
            className="absolute left-5 top-8 bottom-8 w-0.5 hidden sm:block"
            style={{ background: `linear-gradient(180deg, ${pathway.color}60, transparent)` }}
          />

          {pathway.steps.map((step, si) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: si * 0.1 }}
              className="flex gap-4"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 z-10"
                style={{
                  background: `${pathway.color}18`,
                  border: `2px solid ${pathway.color}50`,
                  color: pathway.color,
                  fontFamily: 'Sora, sans-serif',
                }}
              >
                {si + 1}
              </div>
              <div
                className="flex-1 rounded-2xl p-4"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '1px solid rgba(79,140,255,0.08)',
                  boxShadow: '0 2px 12px rgba(79,140,255,0.04)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <h3
                    className="text-sm font-bold"
                    style={{ fontFamily: 'Sora, sans-serif', color: pathway.color }}
                  >
                    {step.phase}
                  </h3>
                  <span
                    className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${pathway.color}10`, color: pathway.color }}
                  >
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </span>
                </div>
                <div className="space-y-2">
                  {step.tasks.map((task) => {
                    const key = `${si}-${task}`;
                    const done = completed.has(key);
                    return (
                      <button
                        key={task}
                        onClick={() => toggle(key)}
                        className="flex items-start gap-2.5 w-full text-left group"
                      >
                        {done
                          ? <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: pathway.color }} />
                          : <Circle className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-300 group-hover:text-gray-400 transition-colors" />
                        }
                        <span
                          className="text-xs leading-relaxed transition-colors"
                          style={{ color: done ? pathway.color : '#64748b', textDecoration: done ? 'line-through' : 'none' }}
                        >
                          {task}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentor suggestion */}
        {pathway.mentors.map((m) => (
          <div
            key={m.slug}
            className="rounded-2xl p-4 flex items-center gap-3"
            style={{ background: `${m.color}08`, border: `1px solid ${m.color}20` }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}99)` }}
            >
              <Users className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: '#0d1432', fontFamily: 'Sora, sans-serif' }}>
                Need guidance? Book a session with {m.name}
              </p>
              <p className="text-xs" style={{ color: '#94a3b8' }}>{m.role}</p>
            </div>
            <Link
              href="/mentors"
              className="text-xs font-semibold px-3.5 py-2 rounded-xl text-white flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}cc)` }}
            >
              Book
            </Link>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
