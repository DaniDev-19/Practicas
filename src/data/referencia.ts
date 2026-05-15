export interface HookDef {
  name: string;
  category: 'Estado' | 'Efectos' | 'Rendimiento' | 'Contexto' | 'Avanzado';
  desc: string;
  when: string;
  code: string;
}

export interface MethodDef {
  name: string;
  category: 'Transformación' | 'Búsqueda' | 'Verificación' | 'Mutación' | 'Ordenación';
  desc: string;
  returns: string;
  example: string;
}

export const HOOKS: HookDef[] = [
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
    code: `useEffect(() => {\n  const id = setInterval(fn, 1000);\n  return () => clearInterval(id);\n}, [dependency]);`,
  },
  {
    name: 'useRef',
    category: 'Estado',
    desc: 'Guarda un valor mutable que NO provoca re-render al cambiar. También se usa para guardar referencias directas a elementos del DOM.',
    when: 'Acceder a un input/canvas DOM, guardar el ID de un timer, valores previos.',
    code: `const inputRef = useRef<HTMLInputElement>(null);\ninputRef.current?.focus();`,
  },
  {
    name: 'useMemo',
    category: 'Rendimiento',
    desc: 'Memoriza el resultado de un cálculo costoso. Solo lo recalcula cuando cambian las dependencias del array.',
    when: 'Filtros, ordenaciones, transformaciones de listas grandes o cálculos matemáticos complejos.',
    code: `const sorted = useMemo(\n  () => items.sort((a, b) => a.price - b.price),\n  [items]\n);`,
  },
  {
    name: 'useCallback',
    category: 'Rendimiento',
    desc: 'Memoriza la referencia de una función para que no sea recreada en cada render. Útil al pasar callbacks a hijos optimizados con React.memo.',
    when: 'Funciones que se pasan como props a componentes con React.memo.',
    code: `const handleClick = useCallback(() => {\n  setCount(c => c + 1);\n}, []);`,
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
    when: 'Estado con múltiples sub-valores relacionados o lógica de transición compleja.',
    code: `const [state, dispatch] = useReducer(reducer, initialState);\ndispatch({ type: 'INCREMENT', payload: 1 });`,
  },
  {
    name: 'useLayoutEffect',
    category: 'Efectos',
    desc: 'Igual que useEffect pero se ejecuta de forma síncrona ANTES de que el navegador pinte el frame. Bloquea el paint visual.',
    when: 'Medir el tamaño del DOM, sincronizar animaciones, evitar parpadeos visuales.',
    code: `useLayoutEffect(() => {\n  const { height } = ref.current.getBoundingClientRect();\n  setHeight(height);\n}, []);`,
  },
  {
    name: 'useId',
    category: 'Avanzado',
    desc: 'Genera un ID único y estable por montaje de componente. Útil para accesibilidad.',
    when: 'Atributos htmlFor/id en formularios cuando el componente se usa múltiples veces.',
    code: `const id = useId();\nreturn <label htmlFor={id}>Nombre</label>;`,
  },
  {
    name: 'useTransition',
    category: 'Avanzado',
    desc: 'Mark a state update as "non-urgent" so React can prioritize it. Prevents UI freezing.',
    when: 'Page transitions, large list filters, updates that shouldn\'t block UI.',
    code: `const [isPending, startTransition] = useTransition();\nstartTransition(() => setQuery(value));`,
  },
  {
    name: 'useDeferredValue',
    category: 'Avanzado',
    desc: 'Defers updating a value to show the old result while calculating the new one.',
    when: 'Real-time searches on large lists without blocking input.',
    code: `const deferred = useDeferredValue(searchQuery);\nconst results = useMemo(() => filter(deferred), [deferred]);`,
  },
];

export const METHODS: MethodDef[] = [
  {
    name: '.map()',
    category: 'Transformación',
    desc: 'Transforma cada elemento del array y devuelve un nuevo array del mismo tamaño.',
    returns: 'Nuevo array transformado',
    example: '[1, 2, 3].map(n => n * 2) // → [2, 4, 6]',
  },
  {
    name: '.filter()',
    category: 'Transformación',
    desc: 'Devuelve un nuevo array con solo los elementos que pasan la condición.',
    returns: 'Nuevo array filtrado',
    example: '[1,2,3,4].filter(n => n > 2) // → [3, 4]',
  },
  {
    name: '.reduce()',
    category: 'Transformación',
    desc: 'Reduce el array a un único valor acumulando resultados.',
    returns: 'Un único valor acumulado',
    example: '[1,2,3].reduce((acc, n) => acc + n, 0) // → 6',
  },
  {
    name: '.find()',
    category: 'Búsqueda',
    desc: 'Devuelve el primer elemento que cumple la condición.',
    returns: 'El primer elemento encontrado | undefined',
    example: '[{id:1},{id:2}].find(x => x.id === 2) // → {id:2}',
  },
  {
    name: '.findIndex()',
    category: 'Búsqueda',
    desc: 'Devuelve el índice del primer elemento que cumple la condición.',
    returns: 'Índice (number) | -1',
    example: '[10, 20, 30].findIndex(n => n === 20) // → 1',
  },
  {
    name: '.some()',
    category: 'Verificación',
    desc: 'Devuelve true si al menos un elemento cumple la condición.',
    returns: 'boolean',
    example: '[1, 2, 3].some(n => n > 2) // → true',
  },
  {
    name: '.every()',
    category: 'Verificación',
    desc: 'Devuelve true si todos los elementos cumplen la condición.',
    returns: 'boolean',
    example: '[2, 4, 6].every(n => n % 2 === 0) // → true',
  },
  {
    name: '.includes()',
    category: 'Verificación',
    desc: 'Verifica si el array contiene un valor específico.',
    returns: 'boolean',
    example: `['a', 'b', 'c'].includes('b') // → true`,
  },
  {
    name: '.forEach()',
    category: 'Transformación',
    desc: 'Itera el array ejecutando una función por cada elemento. No devuelve nada.',
    returns: 'void (undefined)',
    example: `[1, 2, 3].forEach(n => console.log(n))`,
  },
  {
    name: '.sort()',
    category: 'Ordenación',
    desc: 'Ordena el array IN-PLACE (muta el original).',
    returns: 'El mismo array ordenado (mutado)',
    example: `[...arr].sort((a, b) => a.age - b.age)`,
  },
  {
    name: '.slice()',
    category: 'Transformación',
    desc: 'Extrae una porción del array sin mutarlo.',
    returns: 'Nuevo array con la porción',
    example: `[1,2,3,4,5].slice(1, 3) // → [2, 3]`,
  },
  {
    name: '.splice()',
    category: 'Mutación',
    desc: 'MUTA el array original: puede eliminar, insertar o reemplazar elementos.',
    returns: 'Array de elementos eliminados',
    example: `arr.splice(1, 2) // elimina 2 desde índice 1`,
  },
];
