import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/context/AuthProvider';

export const metadata: Metadata = {
  title: 'ExploreHidden — AI-Powered Career Discovery for Indian Students',
  description:
    'Discover your true career potential with AI. Get personalised career guidance, roadmaps, scholarships, and mentorship built specifically for Indian students.',
  keywords: ['career guidance', 'Indian students', 'AI career test', 'scholarships', 'JEE', 'NEET', 'UPSC'],
  openGraph: {
    title: 'ExploreHidden — Discover Your Hidden Future',
    description: 'AI-powered career discovery for Indian students',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
