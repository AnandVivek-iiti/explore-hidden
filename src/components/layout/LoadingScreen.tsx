'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Compass } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1432 60%, #0a0f1e 100%)',
        }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        onAnimationComplete={onComplete}
      >
        {/* Radial glow */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(79,140,255,0.2) 0%, transparent 60%)',
          }}
        />

        {/* Logo mark */}
        <motion.div
          initial={{ scale: 0, rotate: -30, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
          className="relative mb-6"
        >
          <div
            className="relative w-20 h-20 rounded-3xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #4F8CFF 0%, #7B61FF 60%, #00D4FF 100%)',
              boxShadow: '0 0 60px rgba(79,140,255,0.6), 0 0 120px rgba(123,97,255,0.3)',
            }}
          >
            <Compass className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h1
            className="text-3xl font-bold mb-1"
            style={{
              fontFamily: 'Sora, sans-serif',
              background: 'linear-gradient(135deg, #4F8CFF, #7B61FF, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ExploreHidden
          </h1>
          <p
            className="text-sm"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(148,163,184,0.8)' }}
          >
            Discovering your hidden future...
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="mt-8 w-48 h-1 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          <motion.div
            className="h-full rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            style={{
              background: 'linear-gradient(90deg, #4F8CFF, #7B61FF, #00D4FF)',
            }}
          />
        </motion.div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              background:
                i % 3 === 0 ? '#4F8CFF' : i % 3 === 1 ? '#7B61FF' : '#00D4FF',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
