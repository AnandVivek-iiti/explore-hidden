'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Compass, Sun, Moon, LayoutDashboard, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useScrolled } from '@/hooks/useScrolled';
import { useScrollTo } from '@/hooks/useScrollTo';
import { NAV_LINKS } from '@/constants';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = useScrollTo();
  const { data: session } = useSession();

  const handleScrollTo = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-white/90 backdrop-blur-xl border-b border-[#4F8CFF]/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
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
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScrollTo(link.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#4F8CFF] ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? 'bg-white/10 text-yellow-300 hover:bg-white/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-600 hover:text-red-500'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Sign In
                </Link>
                <Link href="/signup">
                  <motion.span
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#7B61FF] shadow-lg shadow-[#4F8CFF]/30 hover:shadow-[#7B61FF]/40 transition-shadow cursor-pointer"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Get Started Free
                  </motion.span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${darkMode ? 'text-yellow-300' : 'text-gray-600'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={darkMode ? 'text-white' : 'text-gray-800'}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${
              darkMode
                ? 'bg-[#0a0f1e]/95 border-white/10'
                : 'bg-white/95 border-gray-100'
            } backdrop-blur-xl`}
          >
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleScrollTo(link.href)}
                  className={`block w-full text-left text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                    darkMode
                      ? 'text-gray-300 hover:bg-white/10 hover:text-white'
                      : 'text-gray-600 hover:bg-[#4F8CFF]/10 hover:text-[#4F8CFF]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              {session ? (
                <div className="flex gap-2">
                  <Link
                    href="/dashboard"
                    className="flex-1 py-3 text-sm font-semibold text-center text-white rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#7B61FF]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="px-4 py-3 text-sm font-medium rounded-xl border border-red-100 text-red-400"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    href="/signin"
                    className="w-full py-3 text-sm font-semibold text-center rounded-xl border"
                    style={{ color: '#4F8CFF', borderColor: 'rgba(79,140,255,0.3)' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="w-full py-3 text-sm font-semibold text-center text-white rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#7B61FF]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started Free
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
