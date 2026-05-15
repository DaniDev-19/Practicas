import { useState, useEffect, useMemo } from 'react';
import { FiPlus, FiMinus, FiRefreshCw } from 'react-icons/fi';

import ShowcaseCard from '../components/ui/ShowcaseCard';
import Contador  from '../components/practicas/Contador/Contador';
import Contador2 from '../components/practicas/Contador2/Contador2';
import { Button } from '../components/ui/Button/Button';
import '../styles/components/pages.css';

export default function Hooks() {
  // ── useState ──
  const [count, setCount] = useState(0);

  // ── useEffect (reloj) ──
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let id: any;
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
          description="El hook useState devuelve un par [valor, setter]. Cada llamada al setter provoca un re-render."
        >
          <div className="demo-block">
            <output className={`stat-display ${countColor}`} aria-live="polite">
              {count}
            </output>
            <div className="flex gap-md" role="group" aria-label="Controles del contador">
              <Button
                onClick={() => setCount(c => c - 1)}
                variant="danger"
                aria-label="Decrementar"
              >
                <FiMinus />
              </Button>
              <Button
                onClick={() => setCount(0)}
                variant="ghost"
                aria-label="Resetear a cero"
              >
                Reset
              </Button>
              <Button
                onClick={() => setCount(c => c + 1)}
                variant="success"
                aria-label="Incrementar"
              >
                <FiPlus />
              </Button>
            </div>
          </div>
        </ShowcaseCard>

        {/* ── useEffect ── */}
        <ShowcaseCard
          title="useEffect — Reloj en tiempo real"
          badge="useEffect"
          description="useEffect recibe una función de efecto y un array de dependencias. Crea un setInterval cuando isRunning es true."
        >
          <div className="demo-block">
            <div className="text-center">
              <p
                className={`clock-time ${isRunning ? 'clock-time--running' : 'clock-time--paused'}`}
                aria-live="polite"
              >
                {time.toLocaleTimeString()}
              </p>
              <p className="clock-date">
                {time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <Button
              onClick={() => setIsRunning(r => !r)}
              variant={isRunning ? 'danger' : 'success'}
            >
              <FiRefreshCw className={isRunning ? 'spin' : ''} />
              {isRunning ? 'Detener' : 'Reanudar'}
            </Button>
          </div>
        </ShowcaseCard>

        {/* ── useMemo ── */}
        <ShowcaseCard
          title="useMemo — Tabla de multiplicar"
          badge="useMemo"
          description="useMemo memoriza el resultado de una función costosa. Solo la recalcula cuando cambian las dependencias."
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
          badge="Práctica"
          description="Usa useState con función inicializadora para leer el valor guardado en localStorage al montarse."
        >
          <Contador />
        </ShowcaseCard>

        {/* ── Contador2.tsx (usuario) ── */}
        <ShowcaseCard
          title="Contador2.tsx — Estado tipo string"
          badge="Práctica"
          description="Demuestra que useState no se limita a números: aquí el estado es un string."
        >
          <Contador2 />
        </ShowcaseCard>

      </div>
    </div>
  );
}
