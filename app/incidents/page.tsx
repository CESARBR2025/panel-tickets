'use client';

import { useEffect, useState } from 'react';

type Incident = {
  id: number;
  title: string;
  description: string;
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
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Listado de Incidentes
      </h1>

      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 font-semibold">Título</th>
              <th className="p-3 font-semibold">Descripción</th>
              <th className="p-3 font-semibold">Prioridad</th>
              <th className="p-3 font-semibold">Estado</th>
              <th className="p-3 font-semibold">Creado</th>
              <th className="p-3 font-semibold">Acción</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {incidents.map((inc) => (
              <tr key={inc.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-3 text-gray-800">{inc.title}</td>
                <td className="p-3 text-gray-600">{inc.description}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-lg text-sm font-medium
                  ${
                    inc.priority === 'Alta'
                      ? 'bg-red-100 text-red-700'
                      : inc.priority === 'Media'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-green-100 text-green-700'
                  }
                `}
                  >
                    {inc.priority}
                  </span>
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-lg text-sm font-medium
                  ${
                    inc.status === 'Cerrado'
                      ? 'bg-gray-200 text-gray-700'
                      : inc.status === 'En progreso'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-orange-100 text-orange-700'
                  }
                `}
                  >
                    {inc.status}
                  </span>
                </td>

                <td className="p-3 text-gray-500">
                  {typeof window !== 'undefined'
                    ? new Date(inc.created_at).toLocaleString()
                    : ''}
                </td>

                <td className="p-3">
                  <select
                    value={inc.status}
                    onChange={(e) => changeStatus(inc.id, e.target.value)}
                    className="px-3 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none transition"
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
    </div>
  );
}
