import { NextResponse } from 'next/server';
import { prisma } from '../../../libs/prisma';

export async function GET() {
  try {
    const notes = await prisma.technicalIncident.findMany();
    return NextResponse.json(notes);
  } catch (error) {
    console.error('Error al obtener incidentes:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Error desconocido' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, priority, affected_system } = body;

    if (!title || !description) {
      return NextResponse.json(
        { message: 'Title y description son obligatorios' },
        { status: 400 }
      );
    }

    const newIncident = await prisma.technicalIncident.create({
      data: {
        title,
        description,
        priority: priority ?? 'Media',
        affected_system: affected_system ?? null,
      },
    });

    return NextResponse.json(newIncident);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
