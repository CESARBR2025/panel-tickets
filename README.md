# Panel de Incidentes - Next.js + Prisma

Este proyecto es un **panel de gestión de incidentes técnicos** desarrollado con Next.js, Prisma y Tailwind CSS. Permite crear, visualizar, actualizar y eliminar incidentes en tiempo real desde una interfaz moderna.

---

## Características

- Listado de incidentes con filtrado por estado y prioridad.
- Crear nuevos incidentes desde un formulario.
- Editar título, descripción, prioridad y estado de un incidente.
- Eliminar incidentes con confirmación.
- Interfaz responsive y profesional con Tailwind CSS.
- Backend con Prisma y PostgreSQL.

---

## Tecnologías

- **Next.js 16** (Turbopack)
- **React 18**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Tailwind CSS**

---

## Requisitos

- Node.js >= 20
- npm o yarn
- PostgreSQL en local o remoto

---

## Instalación y ejecución local

1. Clonar el repositorio:

```bash
git https://github.com/CESARBR2025/panel-tickets.git
cd tu-repo


```

1. Instalar dependencias:

```bash
npm install
```

3. Configurar variable de entorno

```bash
DATABASE_URL y DATABASE_URL
```

4. Generar el cliente de Prisma y aplicar migraciones

```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. Ejecutar la app en modo dev

```bash
npm run dev
# o con yarn
yarn dev
```
