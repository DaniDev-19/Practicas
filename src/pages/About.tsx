import { useState } from 'react';
import styles from './About.module.css';

function About () {
    const [modal, setModal] = useState(false);
    const [user] = useState([
        {
            id: 1,
            consejo: 'Divide y vencerás',
            aplicacion: 'Divide problemas grandes en partes pequeñas y resuélvelos paso a paso.',
            ejemplo: `// Ejemplo:\nfunction sumaArray(arr) {\n  return arr.reduce((acc, n) => acc + n, 0);\n}`
        },
        {
            id: 2,
            consejo: 'Nombra tus variables claramente',
            aplicacion: 'Usa nombres descriptivos para que tu código sea fácil de entender.',
            ejemplo: `// Ejemplo:\nconst edadUsuario = 25; // Mejor que 'x'`
        },
        {
            id: 3,
            consejo: 'Comenta tu código',
            aplicacion: 'Agrega comentarios para explicar partes complejas.',
            ejemplo: `// Explicación de la función\nfunction factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}`
        },
        {
            id: 4,
            consejo: 'Practica lógica',
            aplicacion: 'Resuelve ejercicios lógicos para mejorar tu pensamiento computacional.',
            ejemplo: `// Ejercicio:\n// Escribe una función que invierta una cadena\nfunction invertir(str) {\n  return str.split('').reverse().join('');\n}`
        },
        {
            id: 5,
            consejo: 'Aprende de los errores',
            aplicacion: 'Lee los mensajes de error y busca soluciones.',
            ejemplo: `// Lee el error y prueba soluciones\ntry {\n  JSON.parse('mal json');\n} catch (e) {\n  console.error(e.message);\n}`
        },
        {
            id: 6,
            consejo: 'Haz preguntas',
            aplicacion: 'No temas preguntar, la comunidad es tu aliada.',
            ejemplo: `// Busca en foros como Stack Overflow`
        },
        {
            id: 7,
            consejo: 'Sé constante',
            aplicacion: 'Dedica tiempo cada día, aunque sea poco.',
            ejemplo: `// Un poco cada día suma mucho a largo plazo.`
        }
    ]);
    const [selected, setSelected] = useState<number | null>(null);
    const isOpen = (id: number) => {
        setSelected(id);
        setModal(true);
    };

    const isClose = () => {
        setModal(false);
        setSelected(null);
    };

    return (
        <main className={styles['about-main']}>
            <h2 className={styles['about-title']}>Consejos y Tips para Programar</h2>
            <table className={styles['about-table']}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Consejo</th>
                        <th>Aplicación</th>
                        <th>Ejemplo</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.consejo}</td>
                            <td>{item.aplicacion}</td>
                            <td>
                                <button
                                    className={styles['about-btn']}
                                    onClick={() => isOpen(item.id)}
                                    title={`Ver ejemplo de: ${item.consejo}`}
                                    type="button"
                                    aria-label={`Ver ejemplo de ${item.consejo}`}
                                >
                                    Ver ejemplo
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {modal && (
                <div className={styles['about-modal-overlay']} onClick={isClose}>
                    <div className={styles['about-modal']} onClick={e => e.stopPropagation()}>
                        <button className={styles['about-close']} onClick={isClose} aria-label="Cerrar modal">×</button>
                        <h3>{user.find(u => u.id === selected)?.consejo}</h3>
                        <p>{user.find(u => u.id === selected)?.aplicacion}</p>
                        <pre className={styles['about-code']}>
                            {user.find(u => u.id === selected)?.ejemplo}
                        </pre>
                    </div>
                </div>
            )}
        </main>
    );
}

export default About;