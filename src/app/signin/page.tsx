'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { motion } from 'motion/react';
import { Compass, Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError('Invalid email or password. Please try again.');
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    await signIn('google', { callbackUrl });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: '#fafbff', fontFamily: 'Inter, sans-serif' }}
    >
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4F8CFF] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F8CFF] to-[#7B61FF] flex items-center justify-center shadow-lg shadow-[#4F8CFF]/30">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-xl font-bold"
              style={{
                fontFamily: 'Sora, sans-serif',
                background: 'linear-gradient(135deg, #4F8CFF, #7B61FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ExploreHidden
            </span>
          </div>
          <h1
            className="text-2xl font-bold mb-1"
            style={{ fontFamily: 'Sora, sans-serif', color: '#0d1432' }}
          >
            Welcome back
          </h1>
          <p className="text-sm" style={{ color: '#64748b' }}>
            Sign in to continue your career discovery journey
          </p>
        </div>

        <div
          className="rounded-3xl p-6 sm:p-8"
          style={{
            background: 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(79,140,255,0.12)',
            boxShadow: '0 8px 40px rgba(79,140,255,0.08)',
          }}
        >
          {error && (
            <div
              className="mb-4 px-4 py-3 rounded-xl text-sm"
              style={{ background: 'rgba(255,107,138,0.1)', color: '#FF6B8A' }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                style={{ color: '#94a3b8' }}
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none border transition-colors focus:border-[#4F8CFF]"
                  style={{ borderColor: 'rgba(0,0,0,0.08)', color: '#0d1432', background: '#fafbff' }}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                style={{ color: '#94a3b8' }}
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl text-sm outline-none border transition-colors focus:border-[#4F8CFF]"
                  style={{ borderColor: 'rgba(0,0,0,0.08)', color: '#0d1432', background: '#fafbff' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#4F8CFF]"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-shadow disabled:opacity-60"
              style={{
                background: 'linear-gradient(135deg, #4F8CFF, #7B61FF)',
                boxShadow: '0 4px 20px rgba(79,140,255,0.3)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </motion.button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px" style={{ background: 'rgba(0,0,0,0.06)' }} />
            <span className="text-xs" style={{ color: '#94a3b8' }}>
              or continue with
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(0,0,0,0.06)' }} />
          </div>

          <button
            onClick={handleGoogle}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl text-sm font-medium border transition-colors hover:bg-gray-50 disabled:opacity-60"
            style={{ borderColor: 'rgba(0,0,0,0.08)', color: '#0d1432' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.69-2.26 1.1-3.71 1.1-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.14c-.22-.69-.35-1.42-.35-2.14s.13-1.45.35-2.14V7.02H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.98l2.85-2.21.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.02l3.66 2.84c.87-2.6 3.3-4.48 6.16-4.48z" />
            </svg>
            Continue with Google
          </button>
        </div>

        <p className="text-center text-sm mt-6" style={{ color: '#64748b' }}>
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-semibold text-[#4F8CFF] hover:underline">
            Sign up for free
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={null}>
      <SignInForm />
    </Suspense>
  );
}
