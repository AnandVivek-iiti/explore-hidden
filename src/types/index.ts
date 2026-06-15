export interface DarkModeProps {
  darkMode: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Problem {
  icon: React.ElementType;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  color: string;
  emoji: string;
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  size: 'large' | 'normal';
  bullets: string[];
}

export interface Pathway {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  description: string;
  duration: string;
  steps: PathwayStep[];
}

export interface PathwayStep {
  phase: string;
  tasks: string[];
  duration: string;
}

export interface Scholarship {
  type: string;
  icon: React.ElementType;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  tags: string[];
  color: string;
  new: boolean;
}

export interface CommunityPost {
  avatar: string;
  name: string;
  role: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  color: string;
}

export interface Mentor {
  name: string;
  role: string;
  avatar: string;
  color: string;
  sessions: string;
}

export interface SuccessStory {
  name: string;
  from: string;
  to: string;
  avatar: string;
  color: string;
  rating: number;
  story: string;
  tags: string[];
  result: string;
}
