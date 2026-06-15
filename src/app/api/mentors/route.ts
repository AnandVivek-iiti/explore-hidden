import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { mentorId, slot, topic } = await req.json();
  if (!mentorId || !slot) {
    return NextResponse.json({ error: 'mentorId and slot are required' }, { status: 400 });
  }

  const booking = await prisma.mentorBooking.create({
    data: {
      userId: session.user.id,
      mentorId,
      slot: new Date(slot),
      topic: topic || null,
      status: 'pending',
    },
    include: { mentor: true },
  });

  return NextResponse.json(booking, { status: 201 });
}

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const bookings = await prisma.mentorBooking.findMany({
    where: { userId: session.user.id },
    include: { mentor: true },
    orderBy: { slot: 'asc' },
  });

  return NextResponse.json(bookings);
}
