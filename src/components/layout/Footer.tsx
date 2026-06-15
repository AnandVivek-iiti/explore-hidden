'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import {
  Compass,
  Mail, Phone, MapPin, ArrowRight,
} from 'lucide-react';

// Social icon SVGs (lucide-react v0.383+ removed these brand icons)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

interface FooterProps {
  darkMode: boolean;
}

const quickLinks: Record<string, { label: string; href: string }[]> = {
  Platform: [
    { label: 'AI Career Test', href: '/career-test' },
    { label: 'Career Pathways', href: '/pathways' },
    { label: 'Scholarship Finder', href: '/scholarships' },
    { label: 'Mentorship', href: '/mentors' },
    { label: 'Dashboard', href: '/dashboard' },
  ],
  'For Students': [
    { label: 'JEE / IIT Path', href: '/pathways/jee' },
    { label: 'NEET / MBBS Path', href: '/pathways/neet' },
    { label: 'UPSC / IAS Path', href: '/pathways/upsc' },
    { label: 'AI / Tech Path', href: '/pathways/ai' },
    { label: 'Design Path', href: '/pathways/design' },
    { label: 'Entrepreneurship', href: '/pathways/entrepreneurship' },
  ],
  Account: [
    { label: 'Sign Up Free', href: '/signup' },
    { label: 'Sign In', href: '/signin' },
    { label: 'My Dashboard', href: '/dashboard' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
};

const socials = [
  { icon: TwitterIcon, label: 'Twitter', href: '#', color: '#1DA1F2' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#', color: '#0077B5' },
  { icon: InstagramIcon, label: 'Instagram', href: '#', color: '#E1306C' },
  { icon: YoutubeIcon, label: 'YouTube', href: '#', color: '#FF0000' },
];

export function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      style={{
        background: darkMode
          ? 'linear-gradient(180deg, #0d1432 0%, #07091a 100%)'
          : 'linear-gradient(180deg, #f0f4ff 0%, #e8eeff 100%)',
      }}
    >
      {/* Top gradient separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: darkMode
            ? 'linear-gradient(90deg, transparent, rgba(79,140,255,0.4), rgba(123,97,255,0.4), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(79,140,255,0.3), rgba(123,97,255,0.3), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div
          className="rounded-3xl p-8 mb-16"
          style={{
            background: 'linear-gradient(135deg, rgba(79,140,255,0.12) 0%, rgba(123,97,255,0.12) 100%)',
            border: darkMode ? '1px solid rgba(79,140,255,0.2)' : '1px solid rgba(79,140,255,0.15)',
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="font-bold text-xl mb-2"
                style={{ fontFamily: 'Sora, sans-serif', color: darkMode ? '#f1f5f9' : '#0d1432' }}
              >
                Get Career Insights in Your Inbox
              </h3>
              <p
                className="text-sm"
                style={{ fontFamily: 'Inter, sans-serif', color: darkMode ? '#94a3b8' : '#64748b' }}
              >
                Weekly opportunities, career tips, and exam updates for Indian students. Free forever.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto min-w-[340px]">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.9)',
                  border: darkMode ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(79,140,255,0.2)',
                  color: darkMode ? '#f1f5f9' : '#0d1432',
                }}
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: 'linear-gradient(135deg, #4F8CFF, #7B61FF)',
                  boxShadow: '0 4px 16px rgba(79,140,255,0.3)',
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F8CFF] to-[#7B61FF] flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span
                className="font-bold text-lg"
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
            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: darkMode ? '#64748b' : '#94a3b8' }}
            >
              AI-powered career guidance for Indian students. Helping Class 8-12, college students,
              and competitive exam aspirants discover their hidden future.
            </p>

            {/* Contact */}
            <div className="space-y-2">
              {[
                { icon: Mail, label: 'hello@explorehidden.in' },
                { icon: Phone, label: '+91 98765 43210' },
                { icon: MapPin, label: 'Bengaluru, India' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#4F8CFF' }} />
                  <span
                    className="text-xs"
                    style={{ fontFamily: 'Inter, sans-serif', color: darkMode ? '#64748b' : '#94a3b8' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2 mt-6">
              {socials.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors"
                  style={{
                    background: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                    border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
                  }}
                  aria-label={label}
                >
                  <div style={{ color }}><Icon /></div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Groups */}
          {Object.entries(quickLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="font-semibold text-sm mb-4"
                style={{ fontFamily: 'Sora, sans-serif', color: darkMode ? '#f1f5f9' : '#0d1432' }}
              >
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-xs transition-colors hover:text-[#4F8CFF]"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: darkMode ? '#64748b' : '#94a3b8',
                        textDecoration: 'none',
                        display: 'block',
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{
            borderTop: darkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: 'Inter, sans-serif', color: darkMode ? '#475569' : '#94a3b8' }}
          >
            © 2025 ExploreHidden Technologies Pvt. Ltd. · Made with ❤️ for Indian students
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
              { label: 'Cookies', href: '#' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs transition-colors hover:text-[#4F8CFF]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: darkMode ? '#475569' : '#94a3b8',
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
