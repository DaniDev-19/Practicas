import { useState } from 'react';
import { FiChevronDown, FiHelpCircle, FiLayers, FiShield, FiZap, FiCheckCircle, FiInfo, FiBox, FiBookOpen, FiCpu } from 'react-icons/fi';
import { SiReact, SiJavascript, SiTypescript } from 'react-icons/si';
import '../styles/teoria.css';

/* ── Tipos ───────────────────────────────────────────────── */
interface AccordionItem {
  question: string;
  answer: string;
}

/* ── Datos de Q&A ────────────────────────────────────────── */
const QA_DATA: AccordionItem[] = [
  {
    question: '¿Qué es un componente en React?',
    answer:
      'Un componente es una función de JavaScript/TypeScript que retorna JSX (una sintaxis similar a HTML). React construye toda la interfaz como un árbol de componentes. Cada componente tiene su propio estado y ciclo de vida. Los componentes funcionales son el estándar moderno desde React 16.8 con la llegada de los Hooks.',
  },
  {
    question: '¿Qué es el Virtual DOM y por qué existe?',
    answer:
      'El Virtual DOM es una copia ligera en memoria del DOM real. Cuando el estado cambia, React recalcula en el Virtual DOM qué cambió (proceso llamado "reconciliación"), y solo actualiza los nodos reales del DOM que difieren. Esto es mucho más eficiente que reescribir el DOM completo como hacían los frameworks anteriores.',
  },
  {
    question: '¿Cuál es la diferencia entre props y state?',
    answer:
      'Las props son datos que un componente RECIBE de su padre — son de solo lectura (inmutables). El state es el estado INTERNO del componente — puede cambiar usando el setter de useState. Regla de oro: si un dato necesita cambiar en el tiempo → state. Si viene de afuera → props.',
  },
  {
    question: '¿Qué es el re-render y cuándo ocurre?',
    answer:
      'Un re-render ocurre cuando: (1) el state del componente cambia, (2) las props que recibe cambian, (3) el componente padre hace re-render. En cada re-render React ejecuta de nuevo la función del componente y compara el JSX nuevo vs el anterior para actualizar solo lo necesario.',
  },
  {
    question: '¿Por qué no se debe mutar el estado directamente?',
    answer:
      'React detecta cambios de estado por referencia. Si mutas el mismo objeto o array sin crear uno nuevo, React no detectará que hubo cambio y no hará re-render. Siempre debes pasar un nuevo valor al setter: setItems([...items, newItem]) en vez de items.push(newItem).',
  },
  {
    question: '¿Qué es JSX y cómo funciona?',
    answer:
      'JSX es una extensión de sintaxis de JavaScript que parece HTML pero es código JavaScript. Babel (o SWC en Vite) lo transforma en llamadas a React.createElement(). Permite escribir interfaces de forma declarativa directamente en JavaScript. Todo lo que va entre {} en JSX es una expresión JavaScript evaluada.',
  },
  {
    question: '¿Cuál es la diferencia entre useEffect y useLayoutEffect?',
    answer:
      'useEffect se ejecuta de forma asíncrona DESPUÉS de que el DOM se ha pintado en pantalla — ideal para fetching, suscripciones y efectos que no necesitan bloquear el render visual. useLayoutEffect se ejecuta de forma síncrona ANTES de que el navegador pinte, útil para medir el DOM o prevenir parpadeos visuales.',
  },
  {
    question: '¿Cuándo debo usar useCallback y useMemo?',
    answer:
      'Úsalos cuando el costo de recrear el valor/función en cada render sea mayor que el costo de memorizar. useMemo memoriza el resultado de un cálculo costoso. useCallback memoriza la referencia de una función (evita que un hijo con React.memo se re-renderice). En la mayoría de casos simples no son necesarios — el "prematuro optimismo" es un antipatrón.',
  },
  {
    question: '¿Qué es el Context API y cuándo usarlo?',
    answer:
      'Context API permite pasar datos a través del árbol de componentes sin prop drilling (pasar props por muchos niveles intermedios). Es ideal para datos globales como tema, idioma o usuario autenticado. Para estados complejos y frecuentemente actualizados, considera Zustand o Redux, ya que Context provoca re-renders en todos los consumidores.',
  },
  {
    question: '¿Qué es React.StrictMode?',
    answer:
      'StrictMode es un componente wrapper que activa verificaciones adicionales en modo desarrollo (no afecta producción). Lo más notable: ejecuta los efectos de useEffect dos veces para detectar side effects que no limpian correctamente. También advierte sobre el uso de APIs obsoletas.',
  },
];

/* ── Componente Accordion ────────────────────────────────── */
function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="accordion" role="list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <article
            key={i}
            className={`accordion-item ${isOpen ? 'accordion-item--open' : ''}`}
            role="listitem"
          >
            <button
              className={`accordion-trigger ${isOpen ? 'accordion-trigger--open' : ''}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="qa-number">{i + 1}</span>
                {item.question}
              </span>
              <FiChevronDown
                className={`accordion-icon ${isOpen ? 'accordion-icon--open' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="accordion-body" role="region">
                <p>{item.answer}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

/* ── Página principal ────────────────────────────────────── */
export default function Teoria() {
  return (
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">
          Fundamentos de <span className="text-gradient">React</span>
        </h1>
        <p className="page-description">
          Teoría profunda: qué es React, JavaScript, TypeScript y las diferencias clave entre ecosistemas.
        </p>
      </header>

      {/* ── ¿Qué es React? ── */}
      <section className="section" aria-labelledby="react-section">
        <h2 className="section-title" id="react-section">
          <SiReact style={{ color: '#61DAFB' }} /> ¿Qué es React?
        </h2>
        <div className="tech-hero">
          <div className="tech-hero__icon">
            <SiReact style={{ color: '#61DAFB' }} />
          </div>
          <h3 className="tech-hero__title">
            React — <span className="text-gradient">Biblioteca UI</span>
          </h3>
          <div className="tech-hero__body">
            <p>
              React es una <strong>biblioteca JavaScript de código abierto</strong> creada por Facebook
              (Meta) en 2013 para construir interfaces de usuario. No es un framework completo:
              solo se encarga de la <strong>capa de vista</strong> (View) de una aplicación, el resto
              (routing, estado global, peticiones HTTP) lo delega a herramientas del ecosistema.
            </p>
            <p>
              Su modelo mental central es <strong>declarativo</strong>: describes <em>qué</em> quieres
              ver según el estado actual, y React se encarga de <em>cómo</em> actualizar el DOM de la
              forma más eficiente posible mediante su <strong>Virtual DOM</strong> y el algoritmo de
              reconciliación (Fiber).
            </p>
            <p>
              Desde la versión 16.8 (2019), React funciona con <strong>componentes funcionales + Hooks</strong>,
              eliminando la necesidad de clases. Un componente funcional es simplemente una función que
              recibe props y devuelve JSX. Esta simplicidad lo hace increíblemente flexible y fácil de testear.
            </p>
          </div>
        </div>

        <div className="grid-3" style={{ marginTop: 'var(--space-lg)' }}>
          {[
            { Icon: FiLayers, title: 'Componentes', color: 'var(--accent-primary)', desc: 'La UI se divide en piezas reutilizables e independientes llamadas componentes. Cada uno gestiona su propio estado.' },
            { Icon: FiZap, title: 'Reactivo', color: 'var(--accent-success)', desc: 'Cuando el estado cambia, React actualiza automáticamente solo las partes del DOM que necesitan cambiar.' },
            { Icon: FiBox, title: 'Ecosistema', color: 'var(--accent-secondary)', desc: 'React Router (navegación), TanStack Query (datos), Zustand (estado global), Vite (bundler).' },
          ].map(item => (
            <article key={item.title} className="card card--accent">
              <div style={{ fontSize: '1.8rem', marginBottom: 'var(--space-sm)', color: item.color }}>
                <item.Icon />
              </div>
              <h4 style={{ marginBottom: '0.4rem' }}>{item.title}</h4>
              <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── ¿Qué es JavaScript? ── */}
      <section className="section" aria-labelledby="js-section">
        <h2 className="section-title" id="js-section">
          <SiJavascript style={{ color: '#F7DF1E' }} /> ¿Qué es JavaScript?
        </h2>
        <div className="tech-hero">
          <div className="tech-hero__icon">
            <SiJavascript style={{ color: '#F7DF1E' }} />
          </div>
          <h3 className="tech-hero__title">JavaScript — El lenguaje de la Web</h3>
          <div className="tech-hero__body">
            <p>
              JavaScript es el <strong>único lenguaje de programación nativo de los navegadores web</strong>.
              Es interpretado, dinámicamente tipado y multiparadigma (soporta programación funcional,
              orientada a objetos y orientada a eventos). Fue creado en 1995 por Brendan Eich en solo 10 días.
            </p>
            <p>
              Hoy, con <strong>Node.js</strong>, JavaScript también corre en el servidor.
              Es el lenguaje más usado del mundo según GitHub y Stack Overflow. Sus características clave:
              funciones de primera clase, closures, el event loop, promesas y async/await para código asíncrono,
              y el sistema de módulos ESM.
            </p>
            <p>
              <strong>Debilidades:</strong> Al ser dinámicamente tipado, los errores de tipo solo aparecen
              en tiempo de ejecución, no al escribir el código. Un error tipográfico en el nombre de una
              propiedad puede pasar desapercibido hasta producción.
            </p>
          </div>
        </div>
      </section>

      {/* ── ¿Qué es TypeScript? ── */}
      <section className="section" aria-labelledby="ts-section">
        <h2 className="section-title" id="ts-section">
          <SiTypescript style={{ color: '#3178C6' }} /> ¿Qué es TypeScript?
        </h2>
        <div className="tech-hero">
          <div className="tech-hero__icon">
            <SiTypescript style={{ color: '#3178C6' }} />
          </div>
          <h3 className="tech-hero__title">TypeScript — JavaScript con superpoderes</h3>
          <div className="tech-hero__body">
            <p>
              TypeScript es un <strong>superconjunto de JavaScript</strong> creado por Microsoft en 2012.
              "Superconjunto" significa que todo código JavaScript válido es también TypeScript válido,
              pero TypeScript añade <strong>tipos estáticos opcionales</strong>.
            </p>
            <p>
              El compilador de TypeScript (<code>tsc</code>) analiza el código <em>antes de ejecutarlo</em>
              y detecta errores de tipo, propiedades inexistentes, parámetros incorrectos, etc.
              En proyectos grandes, esto ahorra horas de debugging. TypeScript no existe en el navegador:
              se transpila a JavaScript puro antes de ejecutarse.
            </p>
            <p>
              <strong>Lo que añade TypeScript:</strong> interfaces, tipos genéricos, enums, decoradores,
              inferencia de tipos, tipado de props en React, autocompletado IDE superior y
              refactorización segura.
            </p>
          </div>
        </div>
      </section>

      {/* ── JS vs TS ── */}
      <section className="section" aria-labelledby="jsts-section">
        <h2 className="section-title" id="jsts-section">⚖️ React con JS vs React con TS</h2>
        <div className="compare-grid">
          <article className="compare-card compare-card--a">
            <header>
              <div style={{ fontSize: '1.8rem', color: '#F7DF1E', marginBottom: '0.5rem' }}>
                <SiJavascript />
              </div>
              <h3 className="compare-card__title">React + JavaScript</h3>
              <span className="badge badge--warning">Más simple de empezar</span>
            </header>
            <ul className="compare-list">
              {[
                { Icon: FiCheckCircle, text: 'Sin configuración extra de tipos' },
                { Icon: FiCheckCircle, text: 'Curva de aprendizaje más baja' },
                { Icon: FiCheckCircle, text: 'Prototipos rápidos' },
                { Icon: FiInfo, text: 'Errores de tipo en ejecución, no al escribir' },
                { Icon: FiInfo, text: 'Autocompletado limitado en el IDE' },
                { Icon: FiInfo, text: 'Difícil de refactorizar en proyectos grandes' },
                { Icon: FiLayers, text: 'Sin interfaz/contrato explícito de props' },
              ].map((item, i) => (
                <li key={i} className="compare-list__item">
                  <span className="compare-list__icon">
                    <item.Icon />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="compare-card compare-card--b">
            <header>
              <div style={{ fontSize: '1.8rem', color: '#3178C6', marginBottom: '0.5rem' }}>
                <SiTypescript />
              </div>
              <h3 className="compare-card__title">React + TypeScript</h3>
              <span className="badge badge--accent">Estándar industrial</span>
            </header>
            <ul className="compare-list">
              {[
                { Icon: FiShield, text: 'Errores detectados mientras escribes' },
                { Icon: FiZap, text: 'Autocompletado e IntelliSense completo' },
                { Icon: FiLayers, text: 'Props tipadas: sabes qué acepta cada componente' },
                { Icon: FiCheckCircle, text: 'Refactorización segura en proyectos grandes' },
                { Icon: FiBookOpen, text: 'Mejor documentación implícita del código' },
                { Icon: FiInfo, text: 'Pequeña curva de aprendizaje adicional' },
                { Icon: FiLayers, text: 'Requiere configuración (tsconfig.json)' },
              ].map((item, i) => (
                <li key={i} className="compare-list__item">
                  <span className="compare-list__icon">
                    <item.Icon />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="callout callout--tip" style={{ marginTop: 'var(--space-lg)' }}>
          <FiZap style={{ fontSize: '1.2rem', flexShrink: 0 }} />
          <p style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>
            <strong>Recomendación:</strong> Aprende los conceptos con JavaScript para no sobrecargarte.
            Cuando domines React, migra a TypeScript — la inversión en tiempo se paga sola en proyectos
            medianos y grandes. En la industria, TypeScript es el estándar.
          </p>
        </div>
      </section>

      {/* ── React puro vs Vite ── */}
      <section className="section" aria-labelledby="vite-section">
        <h2 className="section-title" id="vite-section">⚡ React puro vs React + Vite</h2>
        <div className="compare-grid">
          <article className="compare-card compare-card--a">
            <header>
              <div style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                <FiLayers />
              </div>
              <h3 className="compare-card__title">React puro (CDN)</h3>
              <span className="badge badge--muted">Solo para aprender</span>
            </header>
            <ul className="compare-list">
              {[
                { Icon: FiCheckCircle, text: 'Sin instalación ni configuración' },
                { Icon: FiBookOpen, text: 'Útil para entender los fundamentos sin magia' },
                { Icon: FiInfo, text: 'No soporta JSX sin un compilador' },
                { Icon: FiInfo, text: 'Sin hot reload (recargas manuales)' },
                { Icon: FiInfo, text: 'Sin sistema de módulos (todo en un archivo)' },
                { Icon: FiInfo, text: 'Sin optimización de bundle para producción' },
              ].map((item, i) => (
                <li key={i} className="compare-list__item">
                  <span className="compare-list__icon">
                    <item.Icon />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="compare-card compare-card--b">
            <header>
              <div style={{ fontSize: '1.8rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                <FiZap />
              </div>
              <h3 className="compare-card__title">React + Vite</h3>
              <span className="badge badge--accent">Estándar actual</span>
            </header>
            <ul className="compare-list">
              {[
                { Icon: FiZap, text: 'Servidor de desarrollo instantáneo (HMR en ms)' },
                { Icon: FiBox, text: 'Soporta JSX, TSX, CSS Modules, imports de imágenes' },
                { Icon: FiCpu, text: 'Build optimizado con Rollup para producción' },
                { Icon: FiZap, text: 'Tree-shaking: elimina código no usado del bundle' },
                { Icon: SiTypescript, text: 'Soporte nativo para TypeScript' },
                { Icon: FiCheckCircle, text: 'Reemplaza a Create React App (obsoleto desde 2023)' },
              ].map((item, i) => (
                <li key={i} className="compare-list__item">
                  <span className="compare-list__icon">
                    <item.Icon />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <figure style={{ marginTop: 'var(--space-lg)' }}>
          <pre>{`# Crear un proyecto React + TypeScript con Vite:
npm create vite@latest mi-proyecto -- --template react-ts
cd mi-proyecto
npm install
npm run dev`}</pre>
          <figcaption className="text-muted" style={{ fontSize: '0.82rem', marginTop: '0.5rem', paddingLeft: '0.5rem' }}>
            Figura 1 — Comando para crear un proyecto React con Vite y TypeScript.
          </figcaption>
        </figure>
      </section>

      {/* ── Q&A ── */}
      <section className="section" aria-labelledby="qa-section">
        <h2 className="section-title" id="qa-section">
          <FiHelpCircle style={{ color: 'var(--accent-primary)' }} /> Preguntas frecuentes sobre React
        </h2>
        <p className="text-secondary" style={{ marginBottom: 'var(--space-lg)', fontSize: '0.95rem' }}>
          Haz clic en cada pregunta para ver la respuesta detallada.
        </p>
        <Accordion items={QA_DATA} />
      </section>
    </div>
  );
}
