import { useEffect, useState } from "react";
import styles from '../styles/request.module.css';


function Request () {

interface User {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const [usuarios, setUsuarios] = useState<User[]>([]);
const [pagination, setpagination] = useState(1);
const userForPag = 10;

useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/');

            const data: User[] = await response.json();
            setUsuarios(data);

        } catch (error) {
            console.error('Error al obtener los usuarios de jsonPlaceholder', error);
        }
    };
    fetchUser();
}, []);

const ultimo = pagination * userForPag;
const primero = ultimo - userForPag;
const userActual = usuarios.slice(primero, ultimo);

const totalpag = Math.ceil(usuarios.length / userForPag);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Consumiendo API</h2>
            <ul className={styles.list}>
                {userActual.length > 0 ? (
                    userActual.map((u) => (
                        <li key={u.id} className={styles.content}>
                            {u.title} -
                            {u.completed ? 'Activo' : 'No activo'}
                        </li>
                    ))  
                ) : (
                    <li className={styles.noResult}>
                        Sorry No se encontraron resultados
                    </li>
                )}
            </ul>
                <div className={styles.pagination}>
                    <button
                        onClick={() => setpagination((prev) => Math.max(prev - 1, 1))}
                        disabled={pagination === 1}
                        className={styles.next}
                    >
                        Anterior
                    </button>

                    <span className={styles.enun}>Página {pagination} de {totalpag}</span>

                    <button
                    onClick={() => setpagination((prev) => Math.min(prev + 1, totalpag))}
                    disabled={pagination === totalpag}
                    className={styles.prev}        
                    >
                        Siguiente
                    </button>
                </div>
        </div>
    );
}

export default Request;