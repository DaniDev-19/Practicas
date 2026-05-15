import { useState } from 'react';
import { TipsTable } from '../components/tips/TipsTable/TipsTable';
import { TipModal } from '../components/tips/TipModal/TipModal';
import { TIPS } from '../data/tips';

export default function About() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedTip = TIPS.find(t => t.id === selectedId);

  return (
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">
          Consejos y <span className="text-gradient">Tips</span>
        </h1>
        <p className="page-description">
          Buenas prácticas y consejos fundamentales para mejorar tu nivel de programación.
        </p>
      </header>

      <section className="section">
        <TipsTable onViewExample={setSelectedId} />
      </section>

      {selectedTip && (
        <TipModal 
          tip={selectedTip} 
          onClose={() => setSelectedId(null)} 
        />
      )}
    </div>
  );
}