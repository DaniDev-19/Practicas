/**
 * Practicas.tsx
 * Galería de prácticas reales: CRUD, gestores de tareas y lógica interactiva.
 * Cada componente va dentro de un ShowcaseCard con descripción técnica.
 */

import { useState } from 'react';
import { FiCheck, FiTrash2, FiPlus } from 'react-icons/fi';

import ShowcaseCard from '../components/ui/ShowcaseCard';
import Crud from '../components/Crud';
import TaskOne from '../components/TaskOne';
import Multiplication from '../components/Multiplication';
import Prueba from '../components/Prueba';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function Practicas() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Aprender React Router', completed: true },
    { id: '2', text: 'Dominar CSS Variables', completed: true },
    { id: '3', text: 'Implementar CRUD completo', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks(prev => [...prev, { id: crypto.randomUUID(), text: newTask.trim(), completed: false }]);
    setNewTask('');
  };

  const toggleTask = (id: string) =>
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTask = (id: string) =>
    setTasks(prev => prev.filter(t => t.id !== id));

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Prácticas <span className="text-gradient">Reales</span></h1>
        <p className="page-description">Lógicas completas: CRUDs, gestores de tareas, filtros y patrones de componentes.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* ── Gestor de tareas principal ── */}
        <ShowcaseCard
          title="Gestor de Tareas — Estado derivado"
          badge="useState"
          description="El array tasks es la única fuente de verdad. Los stats (total, completadas) se derivan directamente del array con .filter() sin necesidad de estado adicional. Cada tarea tiene un id único generado con crypto.randomUUID() para evitar colisiones al usar el índice."
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', marginBottom: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stats.total}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Total</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>{stats.completed}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Completadas</div>
            </div>
          </div>

          <form onSubmit={addTask} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <input
              type="text"
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
              placeholder="¿Qué necesitas hacer?"
              style={{ flex: 1, padding: '1rem', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-glass)', color: 'white', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }}
            />
            <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FiPlus /> Añadir
            </button>
          </form>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {tasks.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '2rem' }}>¡Sin tareas! Añade una arriba.</p>
            ) : (
              tasks.map(task => (
                <div key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-primary)', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
                  <button
                    onClick={() => toggleTask(task.id)}
                    style={{ width: '28px', height: '28px', borderRadius: '50%', border: task.completed ? 'none' : '2px solid var(--text-secondary)', background: task.completed ? '#10b981' : 'transparent', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0 }}
                  >
                    {task.completed && <FiCheck size={14} />}
                  </button>
                  <span style={{ flex: 1, textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'var(--text-secondary)' : 'white', transition: 'all 0.2s' }}>
                    {task.text}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#ef4444')}
                    onMouseOut={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        </ShowcaseCard>

        {/* ── TaskOne (usuario) ── */}
        <ShowcaseCard
          title="TaskOne.tsx — CRUD con edición inline"
          badge="Tu código"
          badgeColor="#10b981"
          description="Versión mejorada del gestor de tareas con modo de edición inline. Usa editIndex para rastrear cuál tarea está siendo editada, editValue para su valor temporal y validaciones de duplicados. Persistencia en localStorage con useEffect."
        >
          <TaskOne />
        </ShowcaseCard>

        {/* ── Crud (usuario) ── */}
        <ShowcaseCard
          title="Crud.tsx — CRUD con checkbox y edición"
          badge="Tu código"
          badgeColor="#10b981"
          description="Implementa las 4 operaciones CRUD completas: Create (agregar), Read (listar), Update (editar via editingTask) y Delete (eliminar). Al hacer clic en 'Editar', el estado editingTask se sincroniza con el input via useEffect para precargar el valor."
        >
          <Crud />
        </ShowcaseCard>

        {/* ── Multiplication (usuario) ── */}
        <ShowcaseCard
          title="Multiplication.tsx — Renderizado de listas con bucles"
          badge="Tu código"
          badgeColor="#10b981"
          description="Genera una tabla de multiplicar usando un bucle for imperativo (no .map) para construir el array de JSX Elements antes de retornarlos. Recibe las props count (título) y mult (número base) para ser completamente reutilizable."
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <Multiplication count="Tabla del 3" mult={3} />
            {/* <Multiplication count="Tabla del 7" mult={7} /> */}
            <Multiplication count="Tabla del 12" mult={12} />
          </div>
        </ShowcaseCard>

        {/* ── Prueba (usuario) ── */}
        <ShowcaseCard
          title="Prueba.tsx — useEffect con condiciones y filtros"
          badge="Tu código"
          badgeColor="#10b981"
          description="Muestra un useEffect que dispara alertas del navegador según condiciones (≥10 clicks o números negativos). También demuestra el filtrado de un array estático con .filter() (filtra el usuario con id=2) y props de contenido (title, paragraf)."
        >
          <Prueba title="¡Hola desde props!" paragraf="Este párrafo lo paso como prop desde Practicas.tsx" />
        </ShowcaseCard>

      </div>
    </div>
  );
}
