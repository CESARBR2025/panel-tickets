import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    DATABASE_URL: process.env.DATABASE_URL
      ? process.env.DATABASE_URL.replace(/:[^:@/]+@/, ':********@') // oculta la contraseña
      : 'NO DEFINIDA EN VERCEL',

    DIRECT_URL: process.env.DIRECT_URL
      ? process.env.DIRECT_URL.replace(/:[^:@/]+@/, ':********@')
      : 'NO DEFINIDA EN VERCEL',
  });
}
