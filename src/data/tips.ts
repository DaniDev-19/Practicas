export interface Tip {
  id: number;
  consejo: string;
  aplicacion: string;
  ejemplo: string;
}

export const TIPS: Tip[] = [
  {
    id: 1,
    consejo: 'Componentes Atómicos',
    aplicacion: 'Divide tu UI en componentes pequeños y reutilizables con una sola responsabilidad.',
    ejemplo: `// Mal: Un componente gigante\n// Bien:\nconst UserAvatar = ({ src }) => <img src={src} />;\nconst UserName = ({ name }) => <span>{name}</span>;`
  },
  {
    id: 2,
    consejo: 'Inmutabilidad en el Estado',
    aplicacion: 'Nunca mutes el estado directamente. Crea siempre una copia nueva del objeto o array.',
    ejemplo: `// Mal: state.push(item)\n// Bien:\nsetTasks(prev => [...prev, newItem]);`
  },
  {
    id: 3,
    consejo: 'Naming Semántico',
    aplicacion: 'Usa nombres que describan el "qué" o el "por qué", no el "cómo".',
    ejemplo: `// Mal: const d = new Date();\n// Bien:\nconst userRegistrationDate = new Date();`
  },
  {
    id: 4,
    consejo: 'Early Returns (Retornos Tempranos)',
    aplicacion: 'Evita el anidamiento excesivo de IFs retornando lo antes posible.',
    ejemplo: `function UserProfile({ user }) {\n  if (!user) return <Spinner />;\n  return <div>{user.name}</div>;\n}`
  },
  {
    id: 5,
    consejo: 'Desestructuración de Props',
    aplicacion: 'Limpia tu código extrayendo las props directamente en la firma de la función.',
    ejemplo: `// Antes: props.name, props.age\n// Ahora:\nconst UserCard = ({ name, age }) => { ... }`
  },
  {
    id: 6,
    consejo: 'Uso de Optional Chaining',
    aplicacion: 'Evita errores de "cannot read property of undefined" de forma elegante.',
    ejemplo: `const city = user?.address?.city || 'Desconocida';`
  },
  {
    id: 7,
    consejo: 'Manejo de Estados Complejos',
    aplicacion: 'Si tienes muchos estados relacionados, considera usar useReducer o un objeto de estado.',
    ejemplo: `const [form, setForm] = useState({ name: '', email: '' });\n// vs\nconst [name, setName] = useState('');\nconst [email, setEmail] = useState('');`
  },
  {
    id: 8,
    consejo: 'Clean useEffect',
    aplicacion: 'Siempre limpia tus timers, suscripciones o event listeners en la función de retorno.',
    ejemplo: `useEffect(() => {\n  const id = setInterval(...);\n  return () => clearInterval(id);\n}, []);`
  },
  {
    id: 9,
    consejo: 'Evita Renders Innecesarios',
    aplicacion: 'Usa useMemo o useCallback para memorizar valores o funciones pesadas.',
    ejemplo: `const sortedList = useMemo(() => list.sort(), [list]);`
  },
  {
    id: 10,
    consejo: 'CSS Modules over Inline Styles',
    aplicacion: 'Separa la lógica de la presentación y aprovecha el scoping automático.',
    ejemplo: `import styles from './Card.module.css';\n<div className={styles.card}>...</div>`
  }
];
