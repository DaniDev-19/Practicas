import {
  FiBookOpen,
  FiList,
  FiAward,
  FiBox,
  FiAnchor,
  FiCpu
} from 'react-icons/fi';

export const NAV_MODULES = [
  {
    to: '/teoria',
    Icon: FiBookOpen,
    iconColor: 'var(--accent-primary)',
    title: 'Teoría React',
    desc: 'Fundamentos profundos: qué es React, JS, TS, Vite y preguntas frecuentes.',
  },
  {
    to: '/referencia',
    Icon: FiList,
    iconColor: 'var(--accent-secondary)',
    title: 'Referencia',
    desc: 'Todos los hooks de React y métodos de Array con ejemplos de código.',
  },
  {
    to: '/ejercicios',
    Icon: FiAward,
    iconColor: '#a855f7',
    title: 'Desafíos Lógicos',
    desc: 'Pon a prueba tu lógica con ejercicios interactivos y sistema de puntos.',
  },
  {
    to: '/componentes',
    Icon: FiBox,
    iconColor: 'var(--accent-primary)',
    title: 'Componentes UI',
    desc: 'Colección de componentes reutilizables: botones, alertas, tooltips y más.',
  },
  {
    to: '/hooks',
    Icon: FiAnchor,
    iconColor: 'var(--accent-success)',
    title: 'Hooks en acción',
    desc: 'Demos interactivas de useState, useEffect y useMemo con código real.',
  },
  {
    to: '/practicas',
    Icon: FiCpu,
    iconColor: 'var(--accent-warning)',
    title: 'Prácticas Reales',
    desc: 'CRUDs, gestores de tareas y lógica compleja con componentes propios.',
  },
];

export const STATS = [
  { value: '7', label: 'Módulos', color: 'var(--accent-primary)' },
  { value: '11', label: 'Hooks documentados', color: '#a855f7' },
  { value: '18', label: 'Métodos de Array', color: '#f59e0b' },
  { value: '100%', label: 'TypeScript', color: '#10b981' },
];
