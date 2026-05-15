import { FiLayers, FiZap, FiBox } from 'react-icons/fi';

export interface AccordionItem {
  question: string;
  answer: string;
}

export const QA_DATA: AccordionItem[] = [
  {
    question: '¿Qué es un componente en React?',
    answer:
      'Un componente es una función de JavaScript/TypeScript que retorna JSX (una sintaxis similar a HTML). React construye toda la interfaz como un árbol de componentes. Cada componente tiene su propio estado y ciclo de vida. Los componentes funcionales son el estándar moderno desde React 16.8 con la llegada de los Hooks.',
  },
  {
    question: '¿Qué es el Virtual DOM y por qué existe?',
    answer:
      'El Virtual DOM es una copia ligera en memoria del DOM real. Cuando el estado cambia, React recalcula en el Virtual DOM qué cambió (proceso llamado "reconciliación"), y solo actualiza los nodos reales del DOM que difieren. Esto es mucho más eficiente que reescribir el DOM completo como hacían los frameworks anteriores.',
  },
  {
    question: '¿Cuál es la diferencia entre props y state?',
    answer:
      'Las props son datos que un componente RECIBE de su padre — son de solo lectura (inmutables). El state es el estado INTERNO del componente — puede cambiar usando el setter de useState. Regla de oro: si un dato necesita cambiar en el tiempo → state. Si viene de afuera → props.',
  },
  {
    question: '¿Qué es el re-render y cuándo ocurre?',
    answer:
      'Un re-render ocurre cuando: (1) el state del componente cambia, (2) las props que recibe cambian, (3) el componente padre hace re-render. En cada re-render React ejecuta de nuevo la función del componente y compara el JSX nuevo vs el anterior para actualizar solo lo necesario.',
  },
  {
    question: '¿Por qué no se debe mutar el estado directamente?',
    answer:
      'React detecta cambios de estado por referencia. Si mutas el mismo objeto o array sin crear uno nuevo, React no detectará que hubo cambio y no hará re-render. Siempre debes pasar un nuevo valor al setter: setItems([...items, newItem]) en vez de items.push(newItem).',
  },
  {
    question: '¿Qué es JSX y cómo funciona?',
    answer:
      'JSX es una extensión de sintaxis de JavaScript que parece HTML pero es código JavaScript. Babel (o SWC en Vite) lo transforma en llamadas a React.createElement(). Permite escribir interfaces de forma declarativa directamente en JavaScript. Todo lo que va entre {} en JSX es una expresión JavaScript evaluada.',
  },
  {
    question: '¿Cuál es la diferencia entre useEffect y useLayoutEffect?',
    answer:
      'useEffect se ejecuta de forma asíncrona DESPUÉS de que el DOM se ha pintado en pantalla — ideal para fetching, suscripciones y efectos que no necesitan bloquear el render visual. useLayoutEffect se ejecuta de forma síncrona ANTES de que el navegador pinte, útil para medir el DOM o prevenir parpadeos visuales.',
  },
  {
    question: '¿Cuándo debo usar useCallback y useMemo?',
    answer:
      'Úsalos cuando el costo de recrear el valor/función en cada render sea mayor que el costo de memorizar. useMemo memoriza el resultado de un cálculo costoso. useCallback memoriza la referencia de una función (evita que un hijo con React.memo se re-renderice). En la mayoría de casos simples no son necesarios — el "prematuro optimismo" es un antipatrón.',
  },
  {
    question: '¿Qué es el Context API y cuándo usarlo?',
    answer:
      'Context API permite pasar datos a través del árbol de componentes sin prop drilling (pasar props por muchos niveles intermedios). Es ideal para datos globales como tema, idioma o usuario autenticado. Para estados complejos y frecuentemente actualizados, considera Zustand o Redux, ya que Context provoca re-renders en todos los consumidores.',
  },
  {
    question: '¿Qué es React.StrictMode?',
    answer:
      'StrictMode es un componente wrapper que activa verificaciones adicionales en modo desarrollo (no afecta producción). Lo más notable: ejecuta los efectos de useEffect dos veces para detectar side effects que no limpian correctamente. También advierte sobre el uso de APIs obsoletas.',
  },
];

export const REACT_FEATURES = [
  { 
    Icon: FiLayers, 
    title: 'Componentes', 
    color: 'var(--accent-primary)', 
    desc: 'La UI se divide en piezas reutilizables e independientes llamadas componentes. Cada uno gestiona su propio estado.' 
  },
  { 
    Icon: FiZap, 
    title: 'Reactivo', 
    color: 'var(--accent-success)', 
    desc: 'Cuando el estado cambia, React actualiza automáticamente solo las partes del DOM que necesitan cambiar.' 
  },
  { 
    Icon: FiBox, 
    title: 'Ecosistema', 
    color: 'var(--accent-secondary)', 
    desc: 'React Router (navegación), TanStack Query (datos), Zustand (estado global), Vite (bundler).' 
  },
];
