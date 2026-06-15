'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { DashboardShell } from '@/components/layout/DashboardShell';
import {
  ArrowLeft, ArrowRight, BrainCircuit, CheckCircle,
  Trophy, RotateCcw, LogIn
} from 'lucide-react';

const questions = [
  { id: 'q1', text: 'I enjoy breaking down complex problems into smaller parts.', trait: 'Analytical' },
  { id: 'q2', text: 'I often come up with new and original ideas.', trait: 'Creative' },
  { id: 'q3', text: 'I like working with data, numbers, and statistics.', trait: 'Analytical' },
  { id: 'q4', text: 'I enjoy taking charge and guiding a team toward a goal.', trait: 'Leadership' },
  { id: 'q5', text: 'I prefer expressive work: art, writing, design, or music.', trait: 'Creative' },
  { id: 'q6', text: 'I am comfortable making decisions even with incomplete information.', trait: 'Leadership' },
  { id: 'q7', text: 'I enjoy learning how machines and systems work.', trait: 'Technical' },
  { id: 'q8', text: 'I feel energized when helping others solve their problems.', trait: 'Social' },
  { id: 'q9', text: 'I frequently think of unconventional approaches to challenges.', trait: 'Creative' },
  { id: 'q10', text: 'I like setting goals for myself and for my team.', trait: 'Leadership' },
  { id: 'q11', text: 'I find deep satisfaction in teaching or mentoring others.', trait: 'Social' },
  { id: 'q12', text: 'I enjoy collaborating more than working alone.', trait: 'Social' },
  { id: 'q13', text: 'I enjoy coding, electronics, or building things.', trait: 'Technical' },
  { id: 'q14', text: 'I am willing to take calculated financial risks for a big reward.', trait: 'Entrepreneurial' },
];

const options = [
  { label: 'Strongly Disagree', value: 1 },
  { label: 'Disagree', value: 2 },
  { label: 'Neutral', value: 3 },
  { label: 'Agree', value: 4 },
  { label: 'Strongly Agree', value: 5 },
];

type Answers = Record<string, number>;
type Result = { scores: Record<string, number>; topMatches: Array<{ career: string; match: number; color: string }> };

const ITEMS_PER_PAGE = 7;

function TestContent() {
  const { data: session } = useSession();
  const [step, setStep] = useState<'intro' | 'test' | 'loading' | 'result'>('intro');
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  const totalPages = Math.ceil(questions.length / ITEMS_PER_PAGE);
  const pageQuestions = questions.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);
  const pageAnswered = pageQuestions.every((q) => answers[q.id] !== undefined);
  const totalAnswered = Object.keys(answers).length;
  const progress = Math.round((totalAnswered / questions.length) * 100);

  const handleAnswer = (qId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const handleSubmit = async () => {
    setStep('loading');
    setError('');
    try {
      const res = await fetch('/api/career-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setResult(data);
      setStep('result');
    } catch (e) {
      setError((e as Error).message || 'Something went wrong.');
      setStep('test');
    }
  };

  const reset = () => {
    setAnswers({});
    setPage(0);
    setResult(null);
    setStep('intro');
  };

  if (step === 'intro') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
            style={{ background: 'linear-gradient(135deg, #00D4FF22, #7B61FF22)', border: '1.5px solid #7B61FF40' }}
          >
            <BrainCircuit className="w-10 h-10" style={{ color: '#7B61FF' }} />
          </div>
          <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
            AI Career Discovery Test
          </h1>
          <p className="text-sm max-w-md mx-auto mb-2" style={{ color: '#64748b' }}>
            Answer 14 quick questions honestly and our algorithm will map your strengths to real career paths.
          </p>
          <p className="text-xs mb-8" style={{ color: '#94a3b8' }}>Takes about 5 minutes · No right or wrong answers</p>

          {!session && (
            <div
              className="mb-6 px-5 py-3 rounded-2xl text-sm flex items-center gap-2 mx-auto max-w-sm"
              style={{ background: 'rgba(79,140,255,0.08)', border: '1px solid rgba(79,140,255,0.2)', color: '#4F8CFF' }}
            >
              <LogIn className="w-4 h-4 flex-shrink-0" />
              <span>
                <Link href="/signin" className="font-semibold underline">Sign in</Link> to save your results
              </span>
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setStep('test')}
            className="px-8 py-3.5 text-white text-sm font-semibold rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #7B61FF, #4F8CFF)',
              boxShadow: '0 8px 28px rgba(123,97,255,0.35)',
            }}
          >
            Start Test →
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (step === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-[#7B61FF] border-t-transparent animate-spin" />
        <p className="text-sm font-medium" style={{ color: '#64748b' }}>Analysing your responses…</p>
      </div>
    );
  }

  if (step === 'result' && result) {
    const top = result.topMatches[0];
    const traitColors: Record<string, string> = {
      Analytical: '#4F8CFF', Creative: '#FFB347', Leadership: '#7B61FF',
      Social: '#FF6B8A', Technical: '#00D4FF', Entrepreneurial: '#4CAF82',
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto px-4 py-8"
      >
        <div className="text-center mb-8">
          <Trophy className="w-12 h-12 mx-auto mb-4" style={{ color: '#FFB347' }} />
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
            Your Top Match
          </h2>
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-white font-semibold text-lg mt-2"
            style={{ background: `linear-gradient(135deg, ${top.color}, ${top.color}99)` }}
          >
            {top.career} · {top.match}%
          </div>
        </div>

        {/* Trait scores */}
        <div
          className="rounded-2xl p-5 mb-5"
          style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(79,140,255,0.12)' }}
        >
          <h3 className="text-sm font-semibold mb-4" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
            Your Trait Profile
          </h3>
          <div className="space-y-3">
            {Object.entries(result.scores).map(([trait, score]) => (
              <div key={trait}>
                <div className="flex justify-between text-xs mb-1">
                  <span style={{ color: '#64748b' }}>{trait}</span>
                  <span style={{ color: traitColors[trait] || '#4F8CFF', fontWeight: 600 }}>{score}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.05)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="h-full rounded-full"
                    style={{ background: traitColors[trait] || '#4F8CFF' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career matches */}
        <div
          className="rounded-2xl p-5 mb-6"
          style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(79,140,255,0.12)' }}
        >
          <h3 className="text-sm font-semibold mb-4" style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}>
            Career Matches
          </h3>
          <div className="space-y-3">
            {result.topMatches.map(({ career, match, color }, i) => (
              <div key={career} className="flex items-center gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: color }}
                >
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span style={{ color: '#0d1432', fontWeight: 500 }}>{career}</span>
                    <span style={{ color, fontWeight: 600 }}>{match}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.05)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${match}%` }}
                      transition={{ duration: 0.7, delay: i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ background: color }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border"
            style={{ color: '#64748b', borderColor: 'rgba(0,0,0,0.1)' }}
          >
            <RotateCcw className="w-4 h-4" />
            Retake Test
          </button>
          <Link
            href="/pathways"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #7B61FF, #4F8CFF)' }}
          >
            View Pathways
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    );
  }

  // Test in progress
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-8">
        <button onClick={reset} className="text-gray-400 hover:text-gray-600 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <div className="flex justify-between text-xs mb-1.5" style={{ color: '#94a3b8' }}>
            <span>Question {page * ITEMS_PER_PAGE + 1}–{Math.min((page + 1) * ITEMS_PER_PAGE, questions.length)} of {questions.length}</span>
            <span>{progress}% complete</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
            <motion.div
              animate={{ width: `${progress}%` }}
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(135deg, #7B61FF, #4F8CFF)' }}
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-4 px-4 py-3 rounded-xl text-sm" style={{ background: 'rgba(255,107,138,0.1)', color: '#FF6B8A' }}>
          {error}
        </div>
      )}

      {/* Questions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {pageQuestions.map((q, qi) => (
            <div
              key={q.id}
              className="rounded-2xl p-5"
              style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(79,140,255,0.1)' }}
            >
              <p className="text-sm font-medium mb-4" style={{ color: '#0d1432' }}>
                <span className="text-[#7B61FF] font-semibold mr-2">{page * ITEMS_PER_PAGE + qi + 1}.</span>
                {q.text}
              </p>
              <div className="flex flex-wrap gap-2">
                {options.map((opt) => {
                  const selected = answers[q.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(q.id, opt.value)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all border"
                      style={{
                        background: selected ? 'rgba(123,97,255,0.1)' : 'transparent',
                        borderColor: selected ? '#7B61FF60' : 'rgba(0,0,0,0.08)',
                        color: selected ? '#7B61FF' : '#64748b',
                      }}
                    >
                      {selected && <CheckCircle className="w-3 h-3" />}
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 0}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border disabled:opacity-40 transition-colors"
          style={{ color: '#64748b', borderColor: 'rgba(0,0,0,0.1)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>

        {page < totalPages - 1 ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setPage((p) => p + 1)}
            disabled={!pageAnswered}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-50 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #7B61FF, #4F8CFF)' }}
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSubmit}
            disabled={!pageAnswered}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-50 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #4CAF82, #00D4FF)' }}
          >
            <CheckCircle className="w-4 h-4" />
            Submit & See Results
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default function CareerTestPage() {
  return (
    <DashboardShell>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-2xl lg:max-w-3xl">
          <TestContent />
        </div>
      </div>
    </DashboardShell>
  );
}
