import { FiHelpCircle, FiCheckCircle, FiInfo, FiLayers, FiBookOpen, FiZap, FiBox, FiCpu, FiShield } from 'react-icons/fi';
import { SiReact, SiJavascript, SiTypescript } from 'react-icons/si';
import { Accordion } from '../components/teoria/Accordion/Accordion';
import { TechHero } from '../components/teoria/TechHero/TechHero';
import { CompareCard } from '../components/teoria/CompareCard/CompareCard';
import { QA_DATA, REACT_FEATURES } from '../data/teoria';
import '../styles/components/teoria.css';

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
        
        <TechHero 
          icon={<SiReact />} 
          iconColor="#61DAFB"
          title={<>React — <span className="text-gradient">Biblioteca UI</span></>}
        >
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
        </TechHero>

        <div className="grid-3" style={{ marginTop: 'var(--space-lg)' }}>
          {REACT_FEATURES.map(item => (
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
        <TechHero 
          icon={<SiJavascript />} 
          iconColor="#F7DF1E"
          title="JavaScript — El lenguaje de la Web"
        >
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
        </TechHero>
      </section>

      {/* ── ¿Qué es TypeScript? ── */}
      <section className="section" aria-labelledby="ts-section">
        <h2 className="section-title" id="ts-section">
          <SiTypescript style={{ color: '#3178C6' }} /> ¿Qué es TypeScript?
        </h2>
        <TechHero 
          icon={<SiTypescript />} 
          iconColor="#3178C6"
          title="TypeScript — JavaScript con superpoderes"
        >
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
        </TechHero>
      </section>

      {/* ── JS vs TS ── */}
      <section className="section" aria-labelledby="jsts-section">
        <h2 className="section-title" id="jsts-section">⚖️ React con JS vs React con TS</h2>
        <div className="grid-2">
          <CompareCard 
            variant="a"
            icon={<SiJavascript style={{ color: '#F7DF1E' }} />}
            title="React + JavaScript"
            badge="Más simple de empezar"
            badgeType="warning"
            items={[
              { Icon: FiCheckCircle, text: 'Sin configuración extra de tipos' },
              { Icon: FiCheckCircle, text: 'Curva de aprendizaje más baja' },
              { Icon: FiCheckCircle, text: 'Prototipos rápidos' },
              { Icon: FiInfo, text: 'Errores de tipo en ejecución, no al escribir' },
              { Icon: FiInfo, text: 'Autocompletado limitado en el IDE' },
              { Icon: FiInfo, text: 'Difícil de refactorizar en proyectos grandes' },
              { Icon: FiLayers, text: 'Sin interfaz/contrato explícito de props' },
            ]}
          />
          <CompareCard 
            variant="b"
            icon={<SiTypescript style={{ color: '#3178C6' }} />}
            title="React + TypeScript"
            badge="Estándar industrial"
            badgeType="accent"
            items={[
              { Icon: FiShield, text: 'Errores detectados mientras escribes' },
              { Icon: FiZap, text: 'Autocompletado e IntelliSense completo' },
              { Icon: FiLayers, text: 'Props tipadas: sabes qué acepta cada componente' },
              { Icon: FiCheckCircle, text: 'Refactorización segura en proyectos grandes' },
              { Icon: FiBookOpen, text: 'Mejor documentación implícita del código' },
              { Icon: FiInfo, text: 'Pequeña curva de aprendizaje adicional' },
              { Icon: FiLayers, text: 'Requiere configuración (tsconfig.json)' },
            ]}
          />
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
        <div className="grid-2">
          <CompareCard 
            variant="a"
            icon={<FiLayers />}
            title="React puro (CDN)"
            badge="Solo para aprender"
            badgeType="muted"
            items={[
              { Icon: FiCheckCircle, text: 'Sin instalación ni configuración' },
              { Icon: FiBookOpen, text: 'Útil para entender los fundamentos sin magia' },
              { Icon: FiInfo, text: 'No soporta JSX sin un compilador' },
              { Icon: FiInfo, text: 'Sin hot reload (recargas manuales)' },
              { Icon: FiInfo, text: 'Sin sistema de módulos (todo en un archivo)' },
              { Icon: FiInfo, text: 'Sin optimización de bundle para producción' },
            ]}
          />
          <CompareCard 
            variant="b"
            icon={<FiZap style={{ color: 'var(--accent-primary)' }} />}
            title="React + Vite"
            badge="Estándar actual"
            badgeType="accent"
            items={[
              { Icon: FiZap, text: 'Servidor de desarrollo instantáneo (HMR en ms)' },
              { Icon: FiBox, text: 'Soporta JSX, TSX, CSS Modules, imports de imágenes' },
              { Icon: FiCpu, text: 'Build optimizado con Rollup para producción' },
              { Icon: FiZap, text: 'Tree-shaking: elimina código no usado del bundle' },
              { Icon: SiTypescript, text: 'Soporte nativo para TypeScript' },
              { Icon: FiCheckCircle, text: 'Reemplaza a Create React App (obsoleto desde 2023)' },
            ]}
          />
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
