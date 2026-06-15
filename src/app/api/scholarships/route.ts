import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { scholarshipId, notes } = await req.json();
  if (!scholarshipId) {
    return NextResponse.json({ error: 'scholarshipId is required' }, { status: 400 });
  }

  const existing = await prisma.scholarshipApplication.findFirst({
    where: { userId: session.user.id, scholarshipId },
  });

  if (existing) {
    return NextResponse.json({ error: 'Already applied to this opportunity.' }, { status: 409 });
  }

  const app = await prisma.scholarshipApplication.create({
    data: {
      userId: session.user.id,
      scholarshipId,
      notes: notes || null,
    },
  });

  return NextResponse.json(app, { status: 201 });
}

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apps = await prisma.scholarshipApplication.findMany({
    where: { userId: session.user.id },
    include: { scholarship: true },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(apps);
}
