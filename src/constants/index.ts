export const COLORS = {
  primary: '#4F8CFF',
  secondary: '#7B61FF',
  accent: '#00D4FF',
  pink: '#FF6B8A',
  amber: '#FFB347',
  green: '#4CAF82',
  dark: {
    bg: '#060b18',
    bgAlt: '#0a0f1e',
    bgCard: '#0d1432',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    textDim: '#64748b',
  },
  light: {
    bg: '#fafbff',
    bgAlt: '#f0f4ff',
    bgCard: '#ffffff',
    text: '#0d1432',
    textMuted: '#64748b',
    textDim: '#94a3b8',
  },
} as const;

export const FONTS = {
  heading: 'Sora, sans-serif',
  body: 'Inter, sans-serif',
} as const;

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Career Test', href: '#career-test' },
  { label: 'Pathways', href: '#pathways' },
  { label: 'Scholarships', href: '#scholarships' },
  { label: 'Community', href: '#community' },
] as const;
