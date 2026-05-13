/**
 * Ejercicios.tsx
 * Módulo de desafíos lógicos y técnicos con sistema de puntuación y persistencia.
 */

import { useState, useEffect } from 'react';
import { 
  FiAward, 
  FiClock, 
  FiCheckCircle, 
  FiXCircle, 
  FiRotateCcw, 
  FiChevronRight 
} from 'react-icons/fi';
import '../styles/ejercicios.css';

/* ── Tipos ───────────────────────────────────────────────── */
interface Question {
  id: number;
  question: string;
  code?: string;
  options: string[];
  correct: number;
  difficulty: 'fácil' | 'medio' | 'difícil';
}

interface UserStats {
  totalPoints: number;
  completedQuizzes: number;
  lastScore: number;
  history: Array<{ date: string; score: number; total: number }>;
}

/* ── Banco de Preguntas ───────────────────────────────────── */
const QUESTIONS: Question[] = [
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
      'Evitar re-renders innecesarios de un componente si sus props no cambian',
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
    question: '¿Cuál es el orden correcto de ejecución en un useEffect sin dependencias?',
    options: [
      'Render -> Effect -> Cleanup',
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
  }
];

export default function Ejercicios() {
  // ── Estados del Quiz ──
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // ── Estados de Persistencia ──
  const [stats, setStats] = useState<UserStats>({
    totalPoints: 0,
    completedQuizzes: 0,
    lastScore: 0,
    history: []
  });

  // ── Cargar estadísticas al montar ──
  useEffect(() => {
    const saved = localStorage.getItem('reactpro_logic_stats');
    if (saved) {
      setStats(JSON.parse(saved));
    }
  }, []);

  // ── Guardar estadísticas ──
  const saveStats = (finalScore: number) => {
    const newStats: UserStats = {
      totalPoints: stats.totalPoints + finalScore,
      completedQuizzes: stats.completedQuizzes + 1,
      lastScore: finalScore,
      history: [
        { 
          date: new Date().toLocaleString(), 
          score: finalScore, 
          total: QUESTIONS.length 
        },
        ...stats.history.slice(0, 4) // Mantener últimos 5
      ]
    };
    setStats(newStats);
    localStorage.setItem('reactpro_logic_stats', JSON.stringify(newStats));
  };

  // ── Manejadores ──
  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === QUESTIONS[currentIndex].correct) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      saveStats(score);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const currentQ = QUESTIONS[currentIndex];

  return (
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">Desafíos <span className="text-gradient">Lógicos</span></h1>
        <p className="page-description">Pon a prueba tus conocimientos técnicos y lógica de programación.</p>
      </header>

      <div className="quiz-container">
        
        {/* ── Dashboard de Stats ── */}
        <section className="stats-banner">
          <div className="stat-box">
            <span className="stat-box__value">{stats.totalPoints}</span>
            <span className="stat-box__label">Puntos Totales</span>
          </div>
          <div className="stat-box">
            <span className="stat-box__value">{stats.completedQuizzes}</span>
            <span className="stat-box__label">Desafíos</span>
          </div>
          <div className="stat-box">
            <span className="stat-box__value">{stats.lastScore}/{QUESTIONS.length}</span>
            <span className="stat-box__label">Último Score</span>
          </div>
        </section>

        {!showResult ? (
          <section className="exercise-card">
            <div className="exercise-header">
              <span className="text-muted" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                Pregunta {currentIndex + 1} de {QUESTIONS.length}
              </span>
              <span className={`difficulty-badge diff-${currentQ.difficulty}`}>
                {currentQ.difficulty}
              </span>
            </div>

            <h2 className="question-text">{currentQ.question}</h2>

            {currentQ.code && (
              <pre className="code-block">
                <code>{currentQ.code}</code>
              </pre>
            )}

            <div className="options-grid">
              {currentQ.options.map((option, i) => {
                let className = 'option-btn';
                if (isAnswered) {
                  if (i === currentQ.correct) className += ' option-btn--correct';
                  else if (i === selectedOption) className += ' option-btn--wrong';
                  else className += ' opacity-50';
                }

                return (
                  <button
                    key={i}
                    className={className}
                    onClick={() => handleOptionClick(i)}
                    disabled={isAnswered}
                  >
                    <span className="option-index" style={{ opacity: 0.3, fontWeight: 700 }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    {option}
                    {isAnswered && i === currentQ.correct && (
                      <FiCheckCircle style={{ marginLeft: 'auto', color: '#10b981' }} />
                    )}
                    {isAnswered && i === selectedOption && i !== currentQ.correct && (
                      <FiXCircle style={{ marginLeft: 'auto', color: '#ef4444' }} />
                    )}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button className="btn-primary" onClick={nextQuestion}>
                  {currentIndex === QUESTIONS.length - 1 ? 'Finalizar' : 'Siguiente'}
                  <FiChevronRight />
                </button>
              </div>
            )}
          </section>
        ) : (
          <section className="exercise-card text-center" style={{ padding: '4rem 2rem' }}>
            <FiAward style={{ fontSize: '5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>¡Desafío Completado!</h2>
            <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Has obtenido una puntuación de <strong>{score} sobre {QUESTIONS.length}</strong>.
            </p>
            <button className="btn-primary" onClick={resetQuiz}>
              <FiRotateCcw /> Intentar de nuevo
            </button>
          </section>
        )}

        {/* ── Historial de Persistencia ── */}
        <section className="history-section">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
            <FiClock /> Historial Reciente
          </h3>
          <div className="history-list">
            {stats.history.length === 0 ? (
              <div className="card text-center" style={{ padding: '2rem', color: 'var(--text-muted)' }}>
                No hay intentos registrados aún.
              </div>
            ) : (
              stats.history.map((item, i) => (
                <div key={i} className="history-item">
                  <div className="history-item__info">
                    <span style={{ fontWeight: 600 }}>Prueba de Lógica</span>
                    <span className="history-item__date">{item.date}</span>
                  </div>
                  <span className="history-item__score">
                    {item.score} / {item.total}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
