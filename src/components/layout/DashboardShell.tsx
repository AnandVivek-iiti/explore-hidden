'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, TrendingUp, BrainCircuit, Users, GraduationCap, Map, LogOut } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: TrendingUp, href: '/dashboard' },
  { label: 'Career Test', icon: BrainCircuit, href: '/career-test' },
  { label: 'Mentors', icon: Users, href: '/mentors' },
  { label: 'Scholarships', icon: GraduationCap, href: '/scholarships' },
  { label: 'Pathways', icon: Map, href: '/pathways' },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const pathname = usePathname();

  const initials = session?.user?.name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || '?';

  return (
    <div className="flex min-h-screen" style={{ background: '#fafbff', fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <aside
        className="hidden lg:flex flex-col w-64 min-h-screen fixed left-0 top-0 pt-6 pb-4 px-4 z-20"
        style={{
          background: 'rgba(255,255,255,0.97)',
          borderRight: '1px solid rgba(79,140,255,0.1)',
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
          {navItems.map(({ label, icon: Icon, href }) => {
            const active = pathname === href || pathname.startsWith(href + '/');
            return (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: active ? 'rgba(79,140,255,0.08)' : 'transparent',
                  color: active ? '#4F8CFF' : '#64748b',
                }}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            );
          })}
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
                {session?.user?.name}
              </p>
              <p className="text-xs truncate" style={{ color: '#94a3b8' }}>
                {session?.user?.email}
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

      {/* Main */}
      <main className="flex-1 lg:ml-64">{children}</main>
    </div>
  );
}
