import { Hero } from '../components/home/Hero/Hero';
import { ModuleGrid } from '../components/home/ModuleGrid/ModuleGrid';
import { Stats } from '../components/home/Stats/Stats';
import { SEO } from '../components/ui/SEO/SEO';
import '../styles/components/pages.css';

export default function Home() {
  return (
    <div className="page-container animate-fade-in">
      <SEO 
        title="Inicio" 
        description="Portafolio educativo de React con prácticas, teoría y componentes UI premium." 
      />
      
      {/* ── Encabezado ── */}
      <header className="page-header">
        <h1 className="page-title">
          Bienvenido a <span className="text-gradient">ReactPro</span>
        </h1>
        <p className="page-description">
          Tu portafolio interactivo de prácticas, componentes y arquitectura frontend moderna.
        </p>
      </header>

      {/* ── Hero ── */}
      <Hero />

      {/* ── Módulos de navegación ── */}
      <ModuleGrid />

      {/* ── Stats row ── */}
      <Stats />

    </div>
  );
}
