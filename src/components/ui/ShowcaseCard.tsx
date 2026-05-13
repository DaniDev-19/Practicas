/**
 * ShowcaseCard.tsx
 * Wrapper que documenta y presenta cualquier práctica o componente
 * con título, badge de tecnología y descripción técnica.
 * Usa semántica HTML con <article> y <header> para accesibilidad.
 */

import { type ReactNode } from 'react';

interface ShowcaseCardProps {
  title: string;
  description: string;
  badge?: string;
  /** Color hex/CSS para el badge. Por defecto usa el acento primario. */
  badgeColor?: string;
  children: ReactNode;
}

export default function ShowcaseCard({
  title,
  description,
  badge,
  badgeColor = 'var(--accent-primary)',
  children,
}: ShowcaseCardProps) {
  return (
    <article
      className="card"
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
    >
      {/* ── Encabezado ── */}
      <header style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <h3 style={{ marginBottom: '0.4rem', fontSize: '1.1rem' }}>{title}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
            {description}
          </p>
        </div>

        {badge && (
          <span
            aria-label={`Tecnología: ${badge}`}
            style={{
              flexShrink: 0,
              padding: '3px 10px',
              borderRadius: '99px',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              background: `${badgeColor}22`,
              color: badgeColor,
              border: `1px solid ${badgeColor}44`,
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {badge}
          </span>
        )}
      </header>

      {/* ── Divisor ── */}
      <div className="divider" role="separator" />

      {/* ── Contenido de la práctica ── */}
      <div>{children}</div>
    </article>
  );
}
