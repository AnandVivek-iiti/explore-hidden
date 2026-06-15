import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { answers } = await req.json();

  // Score computation — map answers to trait buckets
  const traitMap: Record<string, string[]> = {
    Analytical: ['q1', 'q3', 'q7'],
    Creative: ['q2', 'q5', 'q9'],
    Leadership: ['q4', 'q6', 'q10'],
    Social: ['q8', 'q11', 'q12'],
    Technical: ['q1', 'q3', 'q7', 'q13'],
    Entrepreneurial: ['q4', 'q6', 'q14'],
  };

  const scores: Record<string, number> = {};
  for (const [trait, qIds] of Object.entries(traitMap)) {
    const sum = qIds.reduce((acc, id) => acc + (Number(answers[id]) || 0), 0);
    scores[trait] = Math.min(100, Math.round((sum / (qIds.length * 5)) * 100));
  }

  // Career matches based on dominant traits
  const careerMatches = [
    { career: 'AI / ML Engineer', traits: ['Technical', 'Analytical'], color: '#00D4FF' },
    { career: 'IAS / Civil Services', traits: ['Leadership', 'Social'], color: '#7B61FF' },
    { career: 'UX Designer', traits: ['Creative', 'Analytical'], color: '#FFB347' },
    { career: 'Entrepreneur / Founder', traits: ['Entrepreneurial', 'Leadership'], color: '#4CAF82' },
    { career: 'Doctor / Researcher', traits: ['Analytical', 'Social'], color: '#FF6B8A' },
    { career: 'Software Engineer', traits: ['Technical', 'Analytical'], color: '#4F8CFF' },
  ];

  const topMatches = careerMatches
    .map((c) => ({
      career: c.career,
      color: c.color,
      match: Math.round(
        (c.traits.reduce((a, t) => a + (scores[t] || 0), 0) / c.traits.length) * 0.8 +
          Math.random() * 20
      ),
    }))
    .sort((a, b) => b.match - a.match)
    .slice(0, 4);

  const result = await prisma.careerTestResult.create({
    data: {
      userId: session.user.id,
      answers,
      scores,
      topMatches,
    },
  });

  return NextResponse.json({ id: result.id, scores, topMatches });
}

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const results = await prisma.careerTestResult.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
    take: 5,
  });

  return NextResponse.json(results);
}
