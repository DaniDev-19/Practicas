import { useState } from 'react';
import { FiCheck, FiTrash2, FiPlus } from 'react-icons/fi';
import { Button } from '../../ui/Button/Button';
import { Input } from '../../ui/Input/Input';
import styles from './TaskManager.module.css';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Aprender React Router', completed: true },
    { id: '2', text: 'Dominar CSS Variables', completed: true },
    { id: '3', text: 'Implementar CRUD completo', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks(prev => [...prev, { 
      id: crypto.randomUUID(), 
      text: newTask.trim(), 
      completed: false 
    }]);
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
    <div className={styles.container}>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statValue}>{stats.total}</div>
          <div className={styles.statLabel}>Total</div>
        </div>
        <div className={styles.statItem}>
          <div className={`${styles.statValue} ${styles.statCompleted}`}>{stats.completed}</div>
          <div className={styles.statLabel}>Completadas</div>
        </div>
      </div>

      <form onSubmit={addTask} className={styles.form}>
        <Input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="¿Qué necesitas hacer?"
          className={styles.input}
        />
        <Button type="submit">
          <FiPlus /> Añadir
        </Button>
      </form>

      <div className={styles.list}>
        {tasks.length === 0 ? (
          <p className={styles.empty}>¡Sin tareas! Añade una arriba.</p>
        ) : (
          tasks.map(task => (
            <div key={task.id} className={styles.taskItem}>
              <button
                onClick={() => toggleTask(task.id)}
                className={`${styles.checkbox} ${task.completed ? styles.checkboxCompleted : ''}`}
              >
                {task.completed && <FiCheck size={14} />}
              </button>
              <span className={`${styles.taskText} ${task.completed ? styles.taskTextCompleted : ''}`}>
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className={styles.deleteBtn}
                title="Eliminar"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
