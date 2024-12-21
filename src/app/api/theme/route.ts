import { NextResponse } from 'next/server';

let themeData = {
  primaryColor: '#3b82f6',
};

export async function GET() {
  return NextResponse.json(themeData);
}

export async function POST(request: Request) {
  const body = await request.json();
  themeData = { ...themeData, ...body };
  return NextResponse.json(themeData);
}
