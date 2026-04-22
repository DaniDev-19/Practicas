import { useState, useEffect } from "react";
import Style from '../styles/task.module.css';

function Task () {
    const LOCAL_STORAGE = "tareas";
    const [inputValue, setInputValue] = useState<string>("");
    

    const [tasks, setTasks] = useState<string[]>(() => {
        const guardado = localStorage.getItem(LOCAL_STORAGE);
        return guardado ? JSON.parse(guardado) : [];
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(tasks));
    }, [tasks]);

    const handleChange = (change: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(change.target.value);
    };

    const handleCreateTask = () => {
        if (inputValue.trim() === "") return;
        setTasks([...tasks, inputValue]);
        setInputValue("");
    };

    const handleDeleteTask = (id: number) => {
        const newTask = tasks.filter(( _, i) => i !== id);
        setTasks(newTask);
    };

    
    return (
        <div>
            <div>
                <h1>Gestor de Tareas</h1>
            </div>
            <div>
                <input 
                    className={Style.campo}
                    type="text" 
                    onChange={handleChange}
                    value={inputValue}
                    placeholder="escribe una tarea"
                    />
            </div>
            <div className={Style.seccionOne}>
                <button
                    className={Style.btntask}
                    title="Pulsar si quieres Crear una tarea"
                    onClick={handleCreateTask}
                >
                    Crear Tarea
                </button>
            </div>

            <ul className={Style.list}>
                {tasks.map((task, id) => (
                    <li key={id}>
                        {task}
                            <button
                                className={Style.btntaskk}
                                onClick={() => handleDeleteTask(id)}
                                title="pulsame si quieres eliminar una tarea"
                            >
                                Delete task
                            </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Task;