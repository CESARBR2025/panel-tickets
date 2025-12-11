'use client';

import { useEffect, useState } from 'react';

type Incident = {
  id: number;
  title: string;
  priority: string;
  status: string;
  created_at: string;
};

export default function IncidentListPage() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchIncidents = async () => {
    try {
      const res = await fetch('/api/notes');
      const data = await res.json();
      setIncidents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  const changeStatus = async (id: number, newStatus: string) => {
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) fetchIncidents(); // refresca la lista
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Listado de Incidentes</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Título</th>
            <th className="border p-2">Prioridad</th>
            <th className="border p-2">Estado</th>
            <th className="border p-2">Creado</th>
            <th className="border p-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((inc) => (
            <tr key={inc.id}>
              <td className="border p-2">{inc.title}</td>
              <td className="border p-2">{inc.priority}</td>
              <td className="border p-2">{inc.status}</td>
              <td className="border p-2">
                {new Date(inc.created_at).toLocaleString()}
              </td>
              <td className="border p-2">
                <select
                  value={inc.status}
                  onChange={(e) => changeStatus(inc.id, e.target.value)}
                  className="p-1 border rounded"
                >
                  <option value="Abierto">Abierto</option>
                  <option value="En progreso">En progreso</option>
                  <option value="Cerrado">Cerrado</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
