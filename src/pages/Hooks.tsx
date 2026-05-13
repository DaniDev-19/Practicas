/**
 * Hooks.tsx
 * Galería de prácticas con React Hooks.
 * Cada hook se muestra en un ShowcaseCard con descripción técnica y demo interactiva.
 */

import { useState, useEffect, useMemo } from 'react';
import { FiPlus, FiMinus, FiRefreshCw } from 'react-icons/fi';

import ShowcaseCard from '../components/ui/ShowcaseCard';
import Contador from '../components/Contador';
import Contador2 from '../components/Contador2';

export default function Hooks() {
  // ── useState ──
  const [count, setCount] = useState(0);

  // ── useEffect ──
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let id: number;
    if (isRunning) id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  // ── useMemo ──
  const [numMemo, setNumMemo] = useState(1);
  const tabla = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({ factor: i + 1, result: numMemo * (i + 1) }));
  }, [numMemo]);

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">React <span className="text-gradient">Hooks</span></h1>
        <p className="page-description">Domina el estado y ciclo de vida con los hooks más importantes de React.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* ── useState ── */}
        <ShowcaseCard
          title="useState — Contador básico"
          badge="useState"
          description="El hook useState devuelve un par [valor, setter]. Cada llamada al setter provoca un re-render del componente con el nuevo valor. Aquí el contador cambia de color según si es positivo (verde), negativo (rojo) o cero (gris)."
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--bg-primary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
            <div style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: 'monospace', marginBottom: '1.5rem', transition: 'color 0.3s', color: count === 0 ? 'var(--text-secondary)' : count > 0 ? '#10b981' : '#ef4444' }}>
              {count}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => setCount(c => c - 1)} className="btn-primary" style={{ background: '#ef4444', padding: '12px' }}><FiMinus /></button>
              <button onClick={() => setCount(0)} className="btn-primary" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', padding: '12px 24px' }}>Reset</button>
              <button onClick={() => setCount(c => c + 1)} className="btn-primary" style={{ background: '#10b981', padding: '12px' }}><FiPlus /></button>
            </div>
          </div>
        </ShowcaseCard>

        {/* ── useEffect ── */}
        <ShowcaseCard
          title="useEffect — Reloj en tiempo real"
          badge="useEffect"
          badgeColor="#a855f7"
          description="useEffect recibe una función de efecto y un array de dependencias. Cuando isRunning es true, crea un setInterval y actualiza el estado cada segundo. La función de limpieza (return) cancela el intervalo para evitar memory leaks."
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--bg-primary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'monospace', color: isRunning ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '0.5rem', transition: 'color 0.3s' }}>
              {time.toLocaleTimeString()}
            </div>
            <div style={{ color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '2rem' }}>
              {time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <button onClick={() => setIsRunning(r => !r)} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: isRunning ? '#ef4444' : '#10b981' }}>
              <FiRefreshCw style={{ animation: isRunning ? 'spin-ring 2s linear infinite' : 'none' }} />
              {isRunning ? 'Detener' : 'Reanudar'}
            </button>
          </div>
        </ShowcaseCard>

        {/* ── useMemo ── */}
        <ShowcaseCard
          title="useMemo — Tabla de multiplicar calculada"
          badge="useMemo"
          badgeColor="#f59e0b"
          description="useMemo memoriza el resultado de una función costosa. Solo recalcula el valor cuando cambian las dependencias (aquí, numMemo). Ideal para transformaciones de datos como filtros, ordenaciones o cálculos matemáticos que no deberían repetirse en cada render."
        >
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '200px' }}>
              <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Selecciona el número (1–12)</label>
              <input
                type="range" min={1} max={12} value={numMemo}
                onChange={e => setNumMemo(Number(e.target.value))}
                style={{ accentColor: 'var(--accent-primary)' }}
              />
              <div style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>{numMemo}</div>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
              {tabla.map(({ factor, result }) => (
                <li key={factor} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 12px', borderRadius: '6px', background: 'var(--bg-primary)', fontSize: '0.9rem', fontFamily: 'monospace' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{numMemo} × {factor}</span>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </ShowcaseCard>

        {/* ── Contador con localStorage (componente del usuario) ── */}
        <ShowcaseCard
          title="Contador.tsx — Persistencia con localStorage"
          badge="Tu código"
          badgeColor="#10b981"
          description="Este componente usa useState con función inicializadora: lee el valor guardado en localStorage al montarse. Luego, useEffect sincroniza cada cambio del contador con el storage. Así el valor persiste aunque se recargue la página."
        >
          <Contador />
        </ShowcaseCard>

        {/* ── Contador2 (componente del usuario) ── */}
        <ShowcaseCard
          title="Contador2.tsx — Estado tipo string"
          badge="Tu código"
          badgeColor="#10b981"
          description="Muestra que useState no se limita a números: aquí el estado es un string. Un botón lo establece en 'yuli' y otro lo resetea a cadena vacía. Es un ejemplo simple pero válido del concepto de toggle de estado con strings."
        >
          <Contador2 />
        </ShowcaseCard>

      </div>
    </div>
  );
}
