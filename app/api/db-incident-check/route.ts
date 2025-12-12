import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  try {
    const rows = await prisma.technicalIncident.findMany();
    return Response.json({ count: rows.length, rows });
  } catch (err: any) {
    return Response.json({ error: err.message });
  }
}
