import { getServerSession } from 'next-auth/next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const session = await getServerSession();

  if (session) {
    // If session exists, return it
    return NextResponse.json({ session });
  } else {
    // If no session, return an error
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
