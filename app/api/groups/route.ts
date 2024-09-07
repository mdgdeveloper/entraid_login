import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from "../auth/[...nextauth]/route"


export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    console.log(session.accessToken);
    const response = await fetch('https://graph.microsoft.com/v1.0/me/memberOf', {
      headers: {
        Authorization: `Bearer ${session.accessToken}`
      }
    });


    if (!response.ok) {
      return NextResponse.json({ error: `Error fetching groups: ${response.statusText}` }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: `Error fetching groups: ${(error as Error).message}` }, { status: 500 });
  }
}