import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  try {
    // 1. Ejecuta una consulta SQL real para saber el motor
    const result = await prisma.$queryRawUnsafe('SELECT version();');

    return Response.json({
      ok: true,
      database_version: result,
      connected_to: process.env.DATABASE_URL,
    });
  } catch (err: any) {
    return Response.json({
      ok: false,
      error: err.message,
      connected_to: process.env.DATABASE_URL,
    });
  }
}
