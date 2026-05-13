/**
 * Hooks.tsx
 * Galería de demos interactivas de los hooks más importantes de React.
 * Cada demo vive en un ShowcaseCard con descripción técnica.
 */

import { useState, useEffect, useMemo } from 'react';
import { FiPlus, FiMinus, FiRefreshCw } from 'react-icons/fi';

import ShowcaseCard from '../components/ui/ShowcaseCard';
import Contador  from '../components/Contador';
import Contador2 from '../components/Contador2';
import '../styles/pages.css';

export default function Hooks() {
  // ── useState ──
  const [count, setCount] = useState(0);

  // ── useEffect (reloj) ──
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let id: number;
    if (isRunning) id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  // ── useMemo (tabla) ──
  const [numMemo, setNumMemo] = useState(1);
  const tabla = useMemo(
    () => Array.from({ length: 10 }, (_, i) => ({ factor: i + 1, result: numMemo * (i + 1) })),
    [numMemo],
  );

  // ── Color del contador ──
  const countColor =
    count === 0 ? 'stat-display--neutral'
    : count > 0 ? 'stat-display--positive'
    : 'stat-display--negative';

  return (
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">React <span className="text-gradient">Hooks</span></h1>
        <p className="page-description">
          Domina el estado y ciclo de vida con los hooks más importantes de React.
        </p>
      </header>

      <div className="flex-col gap-lg">

        {/* ── useState ── */}
        <ShowcaseCard
          title="useState — Contador básico"
          badge="useState"
          description="El hook useState devuelve un par [valor, setter]. Cada llamada al setter provoca un re-render. El contador cambia de color según el signo: verde (positivo), rojo (negativo), gris (cero)."
        >
          <div className="demo-block">
            <output className={`stat-display ${countColor}`} aria-live="polite">
              {count}
            </output>
            <div className="btn-group" role="group" aria-label="Controles del contador">
              <button
                onClick={() => setCount(c => c - 1)}
                className="btn-primary"
                style={{ background: 'var(--accent-danger)' }}
                aria-label="Decrementar"
              >
                <FiMinus />
              </button>
              <button
                onClick={() => setCount(0)}
                className="btn-ghost btn"
                aria-label="Resetear a cero"
              >
                Reset
              </button>
              <button
                onClick={() => setCount(c => c + 1)}
                className="btn-primary"
                style={{ background: 'var(--accent-success)' }}
                aria-label="Incrementar"
              >
                <FiPlus />
              </button>
            </div>
          </div>
        </ShowcaseCard>

        {/* ── useEffect ── */}
        <ShowcaseCard
          title="useEffect — Reloj en tiempo real"
          badge="useEffect"
          badgeColor="#a855f7"
          description="useEffect recibe una función de efecto y un array de dependencias. Crea un setInterval cuando isRunning es true. La función de limpieza (return) cancela el intervalo para evitar memory leaks al desmontar."
        >
          <div className="demo-block">
            <div>
              <p
                className={`clock-time ${isRunning ? 'clock-time--running' : 'clock-time--paused'}`}
                aria-live="polite"
                aria-label="Hora actual"
              >
                {time.toLocaleTimeString()}
              </p>
              <p className="clock-date text-center">
                {time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <button
              onClick={() => setIsRunning(r => !r)}
              className="btn-primary"
              style={{ background: isRunning ? 'var(--accent-danger)' : 'var(--accent-success)' }}
              aria-label={isRunning ? 'Detener reloj' : 'Reanudar reloj'}
            >
              <FiRefreshCw className={isRunning ? 'spin' : ''} />
              {isRunning ? 'Detener' : 'Reanudar'}
            </button>
          </div>
        </ShowcaseCard>

        {/* ── useMemo ── */}
        <ShowcaseCard
          title="useMemo — Tabla de multiplicar"
          badge="useMemo"
          badgeColor="#f59e0b"
          description="useMemo memoriza el resultado de una función costosa. Solo la recalcula cuando cambian las dependencias (aquí, numMemo). Ideal para filtros, ordenaciones o cálculos que no deben repetirse en cada render."
        >
          <div className="demo-block demo-block--row" style={{ gap: '2rem' }}>
            <div className="mult-controls">
              <label htmlFor="mult-range">Número (1–12)</label>
              <input
                id="mult-range"
                type="range"
                min={1}
                max={12}
                value={numMemo}
                onChange={e => setNumMemo(Number(e.target.value))}
              />
              <p className="mult-big-number" aria-live="polite">{numMemo}</p>
            </div>

            <ul className="mult-table" aria-label={`Tabla del ${numMemo}`}>
              {tabla.map(({ factor, result }) => (
                <li key={factor} className="mult-table__row">
                  <span className="mult-table__op">{numMemo} × {factor}</span>
                  <span className="mult-table__result">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </ShowcaseCard>

        {/* ── Contador.tsx (usuario) ── */}
        <ShowcaseCard
          title="Contador.tsx — Persistencia con localStorage"
          badge="Tu código"
          badgeColor="#10b981"
          description="Usa useState con función inicializadora para leer el valor guardado en localStorage al montarse. Un useEffect sincroniza cada cambio con el storage, haciendo que el valor persista tras recargar la página."
        >
          <Contador />
        </ShowcaseCard>

        {/* ── Contador2.tsx (usuario) ── */}
        <ShowcaseCard
          title="Contador2.tsx — Estado tipo string"
          badge="Tu código"
          badgeColor="#10b981"
          description="Demuestra que useState no se limita a números: aquí el estado es un string. Un botón lo fija en 'yuli' y otro lo resetea a cadena vacía — un ejemplo claro de toggle de estado con strings."
        >
          <Contador2 />
        </ShowcaseCard>

      </div>
    </div>
  );
}
