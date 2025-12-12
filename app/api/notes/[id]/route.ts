import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

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
}

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

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
      ...(status !== undefined && { status }),
    },
  });

  return NextResponse.json(incident);
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

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
}
