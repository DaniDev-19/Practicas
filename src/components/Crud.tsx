import React, { useState, useEffect } from "react";
import styles from "../styles/crud.module.css";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const CRUD: React.FC = () => {
  const [task, setTask] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editingTask) {
      setTask(task.map(t => t.id === editingTask.id ? { ...t, title } : t));
      setEditingTask(null);
    } else {
      setTask([...task, { id: Date.now(), title, completed: false }]);
    }

    setTitle("");
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setTitle(task.title);
  };

  const handleDelete = (id: number) => {
    setTask(task.filter(i => i.id !== id));
    if (editingTask && editingTask.id === id) {
      setEditingTask(null);
      setTitle("");
    }
  };

  const togglecomplete = (id: number) => {
    setTask(task.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  useEffect(() => {
    if (!editingTask) setTitle("");
  }, [editingTask]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>CRUD</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={title}
          type="text"
          onChange={e => setTitle(e.target.value)}
          required
          placeholder="Nueva Tarea"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          {editingTask ? "Actualizar" : "Agregar"}
        </button>
        {editingTask && (
          <button
            type="button"
            onClick={() => { setEditingTask(null); setTitle(""); }}
            className={styles.button}
          >
            Cancelar
          </button>
        )}
      </form>
      <ul className={styles.list}>
        {task.map(task => (
          <li
            key={task.id}
            className={`${styles.item} ${task.completed ? styles.completed : ""}`}
          >
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => togglecomplete(task.id)}
                className={styles.checkbox}
              />
              <span>{task.title}</span>
            </label>
            <button onClick={() => handleEdit(task)} className={styles.button}>Editar</button>
            <button onClick={() => handleDelete(task.id)} className={styles.button}>Eliminar</button>
          </li>
        ))}
      </ul>
      {task.length === 0 && <p>No Hay Tareas.</p>}
    </div>
  );
};

export default CRUD;