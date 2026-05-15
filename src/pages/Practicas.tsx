import ShowcaseCard from '../components/ui/ShowcaseCard';
import Crud from '../components/practicas/Crud/Crud';
import TaskOne from '../components/practicas/TaskOne/TaskOne';
import Multiplication from '../components/practicas/Multiplication/Multiplication';
import Prueba from '../components/practicas/Prueba/Prueba';
import { TaskManager } from '../components/practicas/TaskManager/TaskManager';

export default function Practicas() {
  return (
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">Prácticas <span className="text-gradient">Reales</span></h1>
        <p className="page-description">Lógicas completas: CRUDs, gestores de tareas, filtros y patrones de componentes.</p>
      </header>

      <div className="flex-col gap-lg">

        {/* ── Gestor de tareas principal ── */}
        <ShowcaseCard
          title="Gestor de Tareas — Estado derivado"
          badge="Práctica"
          description="El array tasks es la única fuente de verdad. Los stats se derivan directamente del array con .filter() sin necesidad de estado adicional."
        >
          <TaskManager />
        </ShowcaseCard>

        {/* ── TaskOne (usuario) ── */}
        <ShowcaseCard
          title="TaskOne.tsx — CRUD con edición inline"
          badge="Práctica"
          description="Versión mejorada del gestor de tareas con modo de edición inline. Persistencia en localStorage."
        >
          <TaskOne />
        </ShowcaseCard>

        {/* ── Crud (usuario) ── */}
        <ShowcaseCard
          title="Crud.tsx — CRUD con checkbox y edición"
          badge="Práctica"
          description="Implementa las 4 operaciones CRUD completas: Create, Read, Update y Delete."
        >
          <Crud />
        </ShowcaseCard>

        {/* ── Multiplication (usuario) ── */}
        <ShowcaseCard
          title="Multiplication.tsx — Renderizado de listas"
          badge="Práctica"
          description="Genera una tabla de multiplicar usando un bucle para construir el array de JSX Elements."
        >
          <div className="grid-2">
            <Multiplication count="Tabla del 3" mult={3} />
            <Multiplication count="Tabla del 12" mult={12} />
          </div>
        </ShowcaseCard>

        {/* ── Prueba (usuario) ── */}
        <ShowcaseCard
          title="Prueba.tsx — useEffect y Filtros"
          badge="Práctica"
          description="Muestra un useEffect que dispara alertas del navegador según condiciones y demuestra el filtrado de arrays."
        >
          <Prueba title="¡Hola desde props!" paragraf="Este párrafo lo paso como prop desde Practicas.tsx" />
        </ShowcaseCard>

      </div>
    </div>
  );
}
