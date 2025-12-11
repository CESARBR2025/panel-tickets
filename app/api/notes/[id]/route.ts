import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // unwrap del Promise
    const { id } = await params;

    const incident = await prisma.technicalIncident.findUnique({
      where: { id: Number(id) },
    });

    if (!incident) {
      return NextResponse.json(
        { message: 'Incidente no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(incident);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Error desconocido' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // unwrap del Promise
    const { id } = await params;

    const incident = await prisma.technicalIncident.delete({
      where: { id: Number(id) },
    });

    if (!incident) {
      return NextResponse.json(
        { message: 'Incidente no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(incident);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Error desconocido' }, { status: 500 });
  }
}
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // unwrap del Promise
    const { id } = await params;

    // Extraer los campos del body
    const body = await request.json();
    const { title, description, priority, affected_system, status } = body;

    if (!title && !description && !priority && !affected_system && !status) {
      return NextResponse.json(
        { message: 'Debes enviar al menos un campo para actualizar' },
        { status: 400 }
      );
    }
    const incident = await prisma.technicalIncident.update({
      where: { id: Number(id) },
      data: {
        ...(title !== undefined && { title }),
        ...(description !== undefined && { description }),
        ...(priority !== undefined && { priority }),
        ...(affected_system !== undefined && { affected_system }),
        ...(status !== undefined && { status }), // <- importante!
        // Prisma actualiza updated_at automáticamente
      },
    });

    return NextResponse.json(incident);
  } catch (error: any) {
    console.error(error);
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Error desconocido' }, { status: 500 });
  }
}
