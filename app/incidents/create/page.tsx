'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateIncidentPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Media');
  const [status, setStatus] = useState('Abierto');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, priority, status }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || 'Error al crear incidente');
      } else {
        setMessage('Incidente creado con éxito!');

        // Limpiar campos
        setTitle('');
        setDescription('');
        setPriority('Media');
        setStatus('Abierto');

        // Redirigir a la página raíz después de un pequeño delay (opcional)
        setTimeout(() => {
          router.push('/'); // redirige a "/"
        }, 500); // 0.5s para que el usuario vea el mensaje
      }
    } catch (err) {
      setMessage('Error de conexión con el servidor');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Registrar Incidente</h1>
      {message && <p className="mb-4 text-red-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Baja">Baja</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Abierto">Abierto</option>
          <option value="En progreso">En progreso</option>
          <option value="Cerrado">Cerrado</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Creando...' : 'Crear Incidente'}
        </button>
      </form>
    </div>
  );
}
