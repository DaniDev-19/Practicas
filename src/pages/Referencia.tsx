import { FiAnchor, FiList, FiInfo, FiZap, FiAlertTriangle } from 'react-icons/fi';
import '../styles/teoria.css';

/* ── Tipos ───────────────────────────────────────────────── */
interface HookDef {
  name: string;
  category: 'Estado' | 'Efectos' | 'Rendimiento' | 'Contexto' | 'Avanzado';
  desc: string;
  when: string;
  code: string;
}

interface MethodDef {
  name: string;
  category: 'Transformación' | 'Búsqueda' | 'Verificación' | 'Mutación' | 'Ordenación';
  desc: string;
  returns: string;
  example: string;
}

/* ── Datos de Hooks ──────────────────────────────────────── */
const HOOKS: HookDef[] = [
  {
    name: 'useState',
    category: 'Estado',
    desc: 'Añade estado local a un componente funcional. Devuelve el valor actual y una función setter. Cada llamada al setter provoca un re-render.',
    when: 'Cualquier dato que cambia con el tiempo: contadores, inputs, toggles, listas.',
    code: 'const [count, setCount] = useState<number>(0);',
  },
  {
    name: 'useEffect',
    category: 'Efectos',
    desc: 'Sincroniza el componente con un sistema externo (API, DOM, subscripciones). La función de limpieza (return) se ejecuta al desmontar o antes del próximo efecto.',
    when: 'Fetching de datos, timers, event listeners, suscripciones, DOM directo.',
    code: `useEffect(() => {
  const id = setInterval(fn, 1000);
  return () => clearInterval(id);
}, [dependency]);`,
  },
  {
    name: 'useRef',
    category: 'Estado',
    desc: 'Guarda un valor mutable que NO provoca re-render al cambiar. También se usa para guardar referencias directas a elementos del DOM.',
    when: 'Acceder a un input/canvas DOM, guardar el ID de un timer, valores previos.',
    code: `const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();`,
  },
  {
    name: 'useMemo',
    category: 'Rendimiento',
    desc: 'Memoriza el resultado de un cálculo costoso. Solo lo recalcula cuando cambian las dependencias del array.',
    when: 'Filtros, ordenaciones, transformaciones de listas grandes o cálculos matemáticos complejos.',
    code: `const sorted = useMemo(
  () => items.sort((a, b) => a.price - b.price),
  [items]
);`,
  },
  {
    name: 'useCallback',
    category: 'Rendimiento',
    desc: 'Memoriza la referencia de una función para que no sea recreada en cada render. Útil al pasar callbacks a hijos optimizados con React.memo.',
    when: 'Funciones que se pasan como props a componentes con React.memo.',
    code: `const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []); // Sin deps → referencia estable`,
  },
  {
    name: 'useContext',
    category: 'Contexto',
    desc: 'Lee el valor actual de un Context sin prop drilling. El componente se re-renderiza cuando el valor del Context cambia.',
    when: 'Tema (dark/light), usuario autenticado, idioma, configuración global.',
    code: `const theme = useContext(ThemeContext);`,
  },
  {
    name: 'useReducer',
    category: 'Estado',
    desc: 'Alternativa a useState para estado complejo. Centraliza la lógica de actualización en una función "reducer" pura que recibe el estado actual y una acción.',
    when: 'Estado con múltiples sub-valores relacionados o lógica de transición compleja (ej: un carrito de compras).',
    code: `const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'INCREMENT', payload: 1 });`,
  },
  {
    name: 'useLayoutEffect',
    category: 'Efectos',
    desc: 'Igual que useEffect pero se ejecuta de forma síncrona ANTES de que el navegador pinte el frame. Bloquea el paint visual.',
    when: 'Medir el tamaño del DOM, sincronizar animaciones, evitar parpadeos visuales (flash).',
    code: `useLayoutEffect(() => {
  const { height } = ref.current.getBoundingClientRect();
  setHeight(height);
}, []);`,
  },
  {
    name: 'useId',
    category: 'Avanzado',
    desc: 'Genera un ID único y estable por montaje de componente. Útil para accesibilidad: asociar labels con inputs de forma segura en SSR.',
    when: 'Atributos htmlFor/id en formularios cuando el componente se usa múltiples veces.',
    code: `const id = useId();
return <label htmlFor={id}>Nombre</label>;`,
  },
  {
    name: 'useTransition',
    category: 'Avanzado',
    desc: 'Marca una actualización de estado como "no urgente" para que React pueda priorizarla. Evita que la UI se congele en actualizaciones lentas.',
    when: 'Transiciones de página, filtros de listas grandes, cualquier actualización que no deba bloquear la UI.',
    code: `const [isPending, startTransition] = useTransition();
startTransition(() => setQuery(value));`,
  },
  {
    name: 'useDeferredValue',
    category: 'Avanzado',
    desc: 'Difiere la actualización de un valor para mostrar el resultado anterior mientras se calcula el nuevo. Similar a un debounce gestionado por React.',
    when: 'Búsquedas en tiempo real sobre listas grandes sin bloquear el input.',
    code: `const deferred = useDeferredValue(searchQuery);
const results = useMemo(() => filter(deferred), [deferred]);`,
  },
];

/* ── Datos de Métodos de Array ───────────────────────────── */
const METHODS: MethodDef[] = [
  {
    name: '.map()',
    category: 'Transformación',
    desc: 'Transforma cada elemento del array y devuelve un nuevo array del mismo tamaño. Es el método más usado en React para renderizar listas.',
    returns: 'Nuevo array transformado (mismo length)',
    example: '[1, 2, 3].map(n => n * 2) // → [2, 4, 6]',
  },
  {
    name: '.filter()',
    category: 'Transformación',
    desc: 'Devuelve un nuevo array con solo los elementos que pasan la condición (función que retorna true/false). Ideal para buscadores.',
    returns: 'Nuevo array filtrado (length ≤ original)',
    example: '[1,2,3,4].filter(n => n > 2) // → [3, 4]',
  },
  {
    name: '.reduce()',
    category: 'Transformación',
    desc: 'Reduce el array a un único valor acumulando resultados. El acumulador puede ser un número, objeto, string o array.',
    returns: 'Un único valor acumulado',
    example: '[1,2,3].reduce((acc, n) => acc + n, 0) // → 6',
  },
  {
    name: '.find()',
    category: 'Búsqueda',
    desc: 'Devuelve el primer elemento que cumple la condición. Si ninguno cumple, devuelve undefined.',
    returns: 'El primer elemento encontrado | undefined',
    example: '[{id:1},{id:2}].find(x => x.id === 2) // → {id:2}',
  },
  {
    name: '.findIndex()',
    category: 'Búsqueda',
    desc: 'Igual que find() pero devuelve el índice del elemento encontrado. Devuelve -1 si no existe.',
    returns: 'Índice (number) | -1',
    example: '[10, 20, 30].findIndex(n => n === 20) // → 1',
  },
  {
    name: '.some()',
    category: 'Verificación',
    desc: 'Devuelve true si AL MENOS UN elemento cumple la condición. Cortocircuita: para de iterar cuando encuentra el primero.',
    returns: 'boolean',
    example: '[1, 2, 3].some(n => n > 2) // → true',
  },
  {
    name: '.every()',
    category: 'Verificación',
    desc: 'Devuelve true si TODOS los elementos cumplen la condición. Cortocircuita al encontrar el primer false.',
    returns: 'boolean',
    example: '[2, 4, 6].every(n => n % 2 === 0) // → true',
  },
  {
    name: '.includes()',
    category: 'Verificación',
    desc: 'Verifica si el array contiene un valor específico (comparación estricta). Funciona con primitivos.',
    returns: 'boolean',
    example: `['a', 'b', 'c'].includes('b') // → true`,
  },
  {
    name: '.forEach()',
    category: 'Transformación',
    desc: 'Itera el array ejecutando una función por cada elemento. NO devuelve nada (undefined). Usa .map() si necesitas el resultado.',
    returns: 'void (undefined)',
    example: `[1, 2, 3].forEach(n => console.log(n))`,
  },
  {
    name: '.sort()',
    category: 'Ordenación',
    desc: 'Ordena el array IN-PLACE (muta el original). Siempre usa una función comparadora para ordenar números correctamente.',
    returns: 'El mismo array ordenado (mutado)',
    example: `[...arr].sort((a, b) => a.age - b.age)`,
  },
  {
    name: '.slice()',
    category: 'Transformación',
    desc: 'Extrae una porción del array sin mutarlo. Muy usado en paginación: slice(start, end).',
    returns: 'Nuevo array con la porción',
    example: `[1,2,3,4,5].slice(1, 3) // → [2, 3]`,
  },
  {
    name: '.splice()',
    category: 'Mutación',
    desc: 'Modifica el array original: puede eliminar, insertar o reemplazar elementos. MUTA el array — evítalo en React.',
    returns: 'Array de elementos eliminados',
    example: `arr.splice(1, 2) // elimina 2 desde índice 1`,
  },
  {
    name: '.flat()',
    category: 'Transformación',
    desc: 'Aplana arrays anidados. El argumento define el nivel de profundidad a aplanar (Infinity para total).',
    returns: 'Nuevo array aplanado',
    example: `[1, [2, [3]]].flat(Infinity) // → [1, 2, 3]`,
  },
  {
    name: '.flatMap()',
    category: 'Transformación',
    desc: 'Combina .map() y .flat(1) en un solo paso. Más eficiente que encadenarlos.',
    returns: 'Nuevo array mapeado y aplanado 1 nivel',
    example: `[1, 2].flatMap(n => [n, n * 2]) // → [1,2,2,4]`,
  },
  {
    name: '.push() / .pop()',
    category: 'Mutación',
    desc: 'push() agrega al final, pop() devuelve el último. MUTAN el array. En React, usa [...arr, item] en vez de push().',
    returns: 'push: nuevo length | pop: elemento eliminado',
    example: `// React-safe:
setItems(prev => [...prev, newItem]);`,
  },
  {
    name: '.shift() / .unshift()',
    category: 'Mutación',
    desc: 'shift() devuelve el primer elemento, unshift() agrega al inicio. MUTAN. En React usa [...newItems, ...arr].',
    returns: 'shift: elem eliminado | unshift: nuevo length',
    example: `// React-safe al inicio:
setItems(prev => [newItem, ...prev]);`,
  },
  {
    name: '.concat()',
    category: 'Transformación',
    desc: 'Combina dos o más arrays en uno nuevo sin mutar. Alternativa al spread operator.',
    returns: 'Nuevo array combinado',
    example: `[1, 2].concat([3, 4]) // → [1, 2, 3, 4]`,
  },
  {
    name: '.join()',
    category: 'Transformación',
    desc: 'Une todos los elementos del array en un string usando el separador indicado.',
    returns: 'string',
    example: `['a', 'b', 'c'].join('-') // → "a-b-c"`,
  },
];

/* ── Color por categoría ─────────────────────────────────── */
const hookCategoryColor: Record<string, string> = {
  Estado: 'badge--accent',
  Efectos: 'badge--info',
  Rendimiento: 'badge--success',
  Contexto: 'badge--warning',
  Avanzado: 'badge--danger',
};

const methodCategoryColor: Record<string, string> = {
  Transformación: 'badge--accent',
  Búsqueda: 'badge--info',
  Verificación: 'badge--success',
  Mutación: 'badge--danger',
  Ordenación: 'badge--warning',
};

/* ── Componente principal ────────────────────────────────── */
export default function Referencia() {
  return (
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">
          Referencia <span className="text-gradient">Técnica</span>
        </h1>
        <p className="page-description">
          Todos los hooks de React y los métodos de Array más importantes con ejemplos de código.
        </p>
      </header>

      {/* ── HOOKS ── */}
      <section className="section" aria-labelledby="hooks-ref">
        <h2 className="section-title" id="hooks-ref">
          <FiAnchor style={{ color: 'var(--accent-primary)' }} /> Hooks de React ({HOOKS.length})
        </h2>

        <div className="callout callout--info" style={{ marginBottom: 'var(--space-lg)', alignItems: 'center' }}>
          <FiInfo size={20} style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
            Los Hooks son funciones especiales que empiezan con <code>use</code>. Solo pueden llamarse
            en el nivel superior de un componente funcional o de otro Hook personalizado — nunca dentro
            de condicionales, bucles o funciones anidadas.
          </p>
        </div>

        <div className="grid-2">
          {HOOKS.map(hook => (
            <article key={hook.name} className="hook-card">
              <header className="hook-card__header">
                <code className="hook-card__name">{hook.name}</code>
                <span className={`badge ${hookCategoryColor[hook.category]}`}>{hook.category}</span>
              </header>
              <p className="hook-card__desc">{hook.desc}</p>
              <p className="hook-card__when">
                <FiInfo size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> {hook.when}
              </p>
              <pre className="hook-card__code">{hook.code}</pre>
            </article>
          ))}
        </div>

        <div className="callout callout--tip" style={{ marginTop: 'var(--space-xl)', alignItems: 'center' }}>
          <FiZap size={20} style={{ color: 'var(--accent-success)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
            <strong>Hooks personalizados (Custom Hooks):</strong> Puedes crear tus propios hooks
            extrayendo lógica reutilizable a funciones que empiecen con <code>use</code>.
            Ejemplo: <code>useFetch</code>, <code>useLocalStorage</code>, <code>useDebounce</code>.
          </p>
        </div>
      </section>

      {/* ── MÉTODOS DE ARRAY ── */}
      <section className="section" aria-labelledby="methods-ref">
        <h2 className="section-title" id="methods-ref">
          <FiList style={{ color: 'var(--accent-secondary)' }} /> Métodos de Array ({METHODS.length})
        </h2>

        <div className="callout callout--warning" style={{ marginBottom: 'var(--space-lg)', alignItems: 'center' }}>
          <FiAlertTriangle size={20} style={{ color: 'var(--accent-warning)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
            En React, <strong>nunca mutes el estado directamente</strong>. Los métodos marcados como
            <span className="badge badge--danger" style={{ margin: '0 4px' }}>Mutación</span>
            modifican el array original — usa el spread operator o métodos inmutables para el estado.
          </p>
        </div>

        <div className="grid-3">
          {METHODS.map(method => (
            <article key={method.name} className="method-card">
              <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                <code className="method-card__name">{method.name}</code>
                <span className={`badge ${methodCategoryColor[method.category]}`}>{method.category}</span>
              </header>
              <p className="method-card__desc">{method.desc}</p>
              <pre className="method-card__example">{method.example}</pre>
              <p className="method-card__returns">↩ Retorna: {method.returns}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
