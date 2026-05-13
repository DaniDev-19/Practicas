/**
 * ShowcaseCard.tsx
 * Componente wrapper que envuelve cualquier práctica o componente
 * y le agrega un encabezado con el nombre, badge de tecnología y descripción.
 * Ayuda a mantener consistencia visual en toda la galería de prácticas.
 */

import { type ReactNode } from 'react';

interface ShowcaseCardProps {
  title: string;
  description: string;
  badge?: string;
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
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <h3 style={{ marginBottom: '0.4rem', fontSize: '1.1rem' }}>{title}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>{description}</p>
        </div>
        {badge && (
          <span
            style={{
              flexShrink: 0,
              padding: '3px 10px',
              borderRadius: '20px',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              background: `${badgeColor}20`,
              color: badgeColor,
              border: `1px solid ${badgeColor}40`,
              textTransform: 'uppercase',
            }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--border-glass)' }} />

      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
