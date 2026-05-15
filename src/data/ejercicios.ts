export interface Question {
  id: number;
  question: string;
  code?: string;
  options: string[];
  correct: number;
  difficulty: 'fácil' | 'medio' | 'difícil';
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: '¿Qué devolverá el siguiente código?',
    code: 'const x = [1, 2, 3];\nconst y = x;\ny.push(4);\nconsole.log(x.length);',
    options: ['3', '4', 'undefined', 'Error'],
    correct: 1,
    difficulty: 'fácil',
  },
  {
    id: 2,
    question: 'En React, ¿qué sucede si actualizas el estado con el mismo valor actual?',
    options: [
      'React hace un re-render de todos modos',
      'React ignora la actualización y no hace re-render',
      'React lanza un error en modo estricto',
      'El componente se desmonta'
    ],
    correct: 1,
    difficulty: 'medio',
  },
  {
    id: 3,
    question: '¿Cuál es el propósito principal de React.memo()?',
    options: [
      'Memorizar el valor de una variable costosa',
      'Evitar re-renders de un componente si sus props no han cambiado',
      'Guardar el estado en el almacenamiento local',
      'Optimizar las peticiones a la API'
    ],
    correct: 1,
    difficulty: 'medio',
  },
  {
    id: 4,
    question: '¿Qué imprimirá este código?',
    code: 'console.log(typeof NaN);',
    options: ['"NaN"', '"number"', '"undefined"', '"object"'],
    correct: 1,
    difficulty: 'fácil',
  },
  {
    id: 5,
    question: '¿Cuál es el orden correcto de ejecución en un useEffect?',
    options: [
      'Render -> Effect -> Cleanup (en el siguiente render)',
      'Effect -> Render -> Cleanup',
      'Render -> Cleanup -> Effect',
      'Cleanup -> Render -> Effect'
    ],
    correct: 0,
    difficulty: 'difícil',
  },
  {
    id: 6,
    question: '¿Qué hace el método Object.freeze()?',
    options: [
      'Evita que se añadan nuevas propiedades',
      'Evita que se borren propiedades existentes',
      'Evita que se cambien los valores de las propiedades',
      'Todas las anteriores'
    ],
    correct: 3,
    difficulty: 'medio',
  },
  {
    id: 7,
    question: '¿Qué es un "Closure" en JavaScript?',
    options: [
      'Una función que se cierra después de ejecutarse',
      'Una función que recuerda el entorno en el que fue creada',
      'Un método para cerrar una pestaña del navegador',
      'Una forma de declarar variables privadas'
    ],
    correct: 1,
    difficulty: 'difícil',
  },
  {
    id: 8,
    question: '¿Qué devolverá este fragmento de código?',
    code: 'const a = {};\nconst b = { key: "b" };\nconst c = { key: "c" };\na[b] = 123;\na[c] = 456;\nconsole.log(a[b]);',
    options: ['123', '456', 'undefined', 'Error'],
    correct: 1,
    difficulty: 'difícil',
  },
  {
    id: 9,
    question: '¿Para qué sirve el hook useLayoutEffect?',
    options: [
      'Es igual que useEffect pero más rápido',
      'Se ejecuta de forma síncrona después de todas las mutaciones del DOM',
      'Sirve para manejar layouts complejos de CSS',
      'Solo funciona en componentes de clase'
    ],
    correct: 1,
    difficulty: 'difícil',
  },
  {
    id: 10,
    question: '¿Qué es el "Prop Drilling"?',
    options: [
      'Una técnica para optimizar el rendimiento',
      'Pasar datos a través de muchos niveles de componentes intermedios',
      'Una forma de inyectar CSS en componentes',
      'Un error de compilación en TypeScript'
    ],
    correct: 1,
    difficulty: 'medio',
  },
  {
    id: 11,
    question: '¿Qué imprimirá el siguiente código?',
    code: 'console.log(0.1 + 0.2 === 0.3);',
    options: ['true', 'false', 'undefined', 'NaN'],
    correct: 1,
    difficulty: 'medio',
  },
  {
    id: 12,
    question: '¿Cuál es la diferencia entre "==" y "===" en JavaScript?',
    options: [
      '"==" compara valor y tipo, "===" solo valor',
      '"==" solo valor (con coerción), "===" valor y tipo',
      'No hay diferencia, son alias',
      '"===" es solo para objetos'
    ],
    correct: 1,
    difficulty: 'fácil',
  }
];
