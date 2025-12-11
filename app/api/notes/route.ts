import { NextResponse } from 'next/server';
import { prisma } from '../../../libs/prisma';

//Multiples notas
export async function GET() {
  try {
    const notes = await prisma.technicalIncident.findMany();
    return NextResponse.json(notes);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function POST(request: Request) {
  try {
    //Extraemos datos del body
    const body = await request.json();

    //desestructuramos
    const { title, description, priority, affected_system } = body;

    // Validación mínima
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
        priority: priority ?? 'Media', // valor por defecto si no viene
        affected_system: affected_system ?? null,
        // status, created_at y updated_at se gestionan automáticamente
      },
    });
    return NextResponse.json(newIncident);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
