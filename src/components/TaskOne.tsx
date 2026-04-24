import { useState, useEffect } from "react";
import styles from "../styles/taskone.module.css";

function TaskOne() {
  const LOCAL_STORAGE = "tareas_taskone";
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<string[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE);
    return saved ? JSON.parse(saved) : [];
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError("");
  };

  const handleCreateTask = () => {
    if (inputValue.trim() === "") {
      setError("La tarea no puede estar vacía.");
      return;
    }
    if (tasks.includes(inputValue.trim())) {
      setError("La tarea ya existe.");
      return;
    }
    setTasks([...tasks, inputValue.trim()]);
    setInputValue("");
    setError("");
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((_: string, i: number) => i !== id));
    setError("");
  };

  const handleEditTask = (id: number) => {
    setEditIndex(id);
    setEditValue(tasks[id]);
    setError("");
  };

  const handleSaveEdit = (id: number) => {
    if (editValue.trim() === "") {
      setError("La tarea editada no puede estar vacía.");
      return;
    }
    if (
      tasks.some((t: string, i: number) => t === editValue.trim() && i !== id)
    ) {
      setError("Ya existe una tarea con ese nombre.");
      return;
    }
    const updatedTasks = tasks.map((t: string, i: number) =>
      i === id ? editValue.trim() : t,
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditValue("");
    setError("");
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditValue("");
    setError("");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gestor de Tareas Mejorado</h2>
      <div className={styles.inputSection}>
        <label htmlFor="task-input" style={{ display: "none" }}>
          Nueva tarea
        </label>
        <input
          id="task-input"
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Escribe una tarea"
          title="Campo para escribir una nueva tarea"
        />
        <button className={styles.addBtn} onClick={handleCreateTask}>
          Añadir
        </button>
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <ul className={styles.list}>
        {tasks.length === 0 && <li className={styles.empty}>No hay tareas.</li>}
        {tasks.map((task, id) => (
          <li key={id} className={styles.listItem}>
            {editIndex === id ? (
              <>
                <input
                  className={styles.editInput}
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  autoFocus
                  placeholder="Editar tarea"
                  title="Campo para editar la tarea"
                />
                <button
                  className={styles.saveBtn}
                  onClick={() => handleSaveEdit(id)}
                >
                  Guardar
                </button>
                <button className={styles.cancelBtn} onClick={handleCancelEdit}>
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <span className={styles.taskText}>{task}</span>
                <button
                  className={styles.editBtn}
                  onClick={() => handleEditTask(id)}
                >
                  Editar
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDeleteTask(id)}
                >
                  Eliminar
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskOne;
