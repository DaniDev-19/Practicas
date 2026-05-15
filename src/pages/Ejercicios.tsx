import { useState, useEffect } from 'react';
import {
  FiAward,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiRotateCcw,
  FiChevronRight
} from 'react-icons/fi';
import { Button } from '../components/ui/Button/Button';
import { QuizStats } from '../components/ejercicios/QuizStats/QuizStats';
import { QUESTIONS } from '../data/ejercicios';
import '../styles/components/ejercicios.css';

interface UserStats {
  totalPoints: number;
  completedQuizzes: number;
  lastScore: number;
  history: Array<{ date: string; score: number; total: number }>;
}

export default function Ejercicios() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const [stats, setStats] = useState<UserStats>({
    totalPoints: 0,
    completedQuizzes: 0,
    lastScore: 0,
    history: []
  });

  useEffect(() => {
    const saved = localStorage.getItem('reactpro_logic_stats');
    if (saved) {
      setStats(JSON.parse(saved));
    }
  }, []);

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
        ...stats.history.slice(0, 4)
      ]
    };
    setStats(newStats);
    localStorage.setItem('reactpro_logic_stats', JSON.stringify(newStats));
  };

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
        
        <QuizStats 
          totalPoints={stats.totalPoints}
          completedQuizzes={stats.completedQuizzes}
          lastScore={stats.lastScore}
          totalQuestions={QUESTIONS.length}
        />

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
                <Button onClick={nextQuestion}>
                  {currentIndex === QUESTIONS.length - 1 ? 'Finalizar' : 'Siguiente'}
                  <FiChevronRight />
                </Button>
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
            <Button variant="primary" onClick={resetQuiz}>
              <FiRotateCcw /> Intentar de nuevo
            </Button>
          </section>
        )}

        {/* ── Historial ── */}
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
