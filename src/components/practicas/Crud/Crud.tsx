import React, { useState, useEffect } from "react";
import { FiEdit2, FiTrash2, FiPlus, FiX, FiCheck } from "react-icons/fi";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const inputStyle: React.CSSProperties = {
  flex: 1,
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  background: 'var(--bg-primary)',
  border: '1px solid var(--border-glass)',
  color: 'white',
  fontFamily: 'inherit',
  fontSize: '0.95rem',
  outline: 'none',
};

const CRUD: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, title } : t));
      setEditingTask(null);
    } else {
      setTasks([...tasks, { id: Date.now(), title, completed: false }]);
    }
    setTitle("");
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setTitle(task.title);
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(i => i.id !== id));
    if (editingTask?.id === id) {
      setEditingTask(null);
      setTitle("");
    }
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  useEffect(() => {
    if (!editingTask) setTitle("");
  }, [editingTask]);

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Estadísticas */}
      {tasks.length > 0 && (
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1, padding: '0.75rem', background: 'var(--bg-primary)', borderRadius: '8px', border: '1px solid var(--border-glass)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>{tasks.length}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Total</div>
          </div>
          <div style={{ flex: 1, padding: '0.75rem', background: 'rgba(16,185,129,0.08)', borderRadius: '8px', border: '1px solid rgba(16,185,129,0.2)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#10b981' }}>{completedCount}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Completadas</div>
          </div>
          <div style={{ flex: 1, padding: '0.75rem', background: 'rgba(239,68,68,0.08)', borderRadius: '8px', border: '1px solid rgba(239,68,68,0.2)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ef4444' }}>{tasks.length - completedCount}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Pendientes</div>
          </div>
        </div>
      )}

      {/* Formulario */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem' }}>
        <input
          value={title}
          type="text"
          onChange={e => setTitle(e.target.value)}
          required
          placeholder={editingTask ? "Editar tarea..." : "Nueva tarea..."}
          style={{ ...inputStyle, borderColor: editingTask ? 'var(--accent-primary)' : 'var(--border-glass)' }}
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
          onBlur={e => (e.currentTarget.style.borderColor = editingTask ? 'var(--accent-primary)' : 'var(--border-glass)')}
        />
        <button
          type="submit"
          className="btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0.75rem 1.25rem', background: editingTask ? '#f59e0b' : undefined }}
        >
          {editingTask ? <><FiCheck size={16} /> Guardar</> : <><FiPlus size={16} /> Añadir</>}
        </button>
        {editingTask && (
          <button
            type="button"
            onClick={() => { setEditingTask(null); setTitle(""); }}
            className="btn-primary"
            style={{ background: 'transparent', border: '1px solid var(--border-glass)', color: 'var(--text-secondary)', padding: '0.75rem' }}
          >
            <FiX size={16} />
          </button>
        )}
      </form>

      {/* Lista de tareas */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {tasks.length === 0 ? (
          <li style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', background: 'var(--bg-primary)', borderRadius: '8px', border: '1px dashed var(--border-glass)' }}>
            Sin tareas. ¡Añade una arriba!
          </li>
        ) : (
          tasks.map(task => (
            <li
              key={task.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                background: task.completed ? 'rgba(16,185,129,0.05)' : 'var(--bg-primary)',
                border: `1px solid ${task.completed ? 'rgba(16,185,129,0.2)' : 'var(--border-glass)'}`,
                borderRadius: '8px',
                transition: 'all 0.2s',
              }}
            >
              {/* Checkbox circular */}
              <button
                onClick={() => toggleComplete(task.id)}
                style={{
                  width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                  border: task.completed ? 'none' : '2px solid var(--text-secondary)',
                  background: task.completed ? '#10b981' : 'transparent',
                  color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
              >
                {task.completed && <FiCheck size={13} />}
              </button>

              {/* Texto */}
              <span style={{ flex: 1, color: task.completed ? 'var(--text-secondary)' : 'var(--text-primary)', textDecoration: task.completed ? 'line-through' : 'none', transition: 'all 0.2s', fontSize: '0.95rem' }}>
                {task.title}
              </span>

              {/* Acciones */}
              <div style={{ display: 'flex', gap: '4px' }}>
                <button
                  onClick={() => handleEdit(task)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', padding: '6px', borderRadius: '6px', display: 'flex', transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#f59e0b')}
                  onMouseOut={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <FiEdit2 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', padding: '6px', borderRadius: '6px', display: 'flex', transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#ef4444')}
                  onMouseOut={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

    </div>
  );
};

export default CRUD;