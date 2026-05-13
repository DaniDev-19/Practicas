/**
 * Alert.tsx
 * Componente de alerta contextual con 4 variantes de tipo y opción de cerrar.
 * Cada variante tiene ícono, color de fondo y borde diferenciados.
 * Props: type (success | error | warning | info), message, title, onClose (opcional)
 */

import { useState } from 'react';
import { FiCheckCircle, FiXCircle, FiAlertTriangle, FiInfo, FiX } from 'react-icons/fi';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  type?: AlertType;
  title?: string;
  message: string;
  closeable?: boolean;
}

const config: Record<AlertType, { icon: React.ReactNode; bg: string; border: string; color: string }> = {
  success: { icon: <FiCheckCircle />, bg: 'rgba(16,185,129,0.1)', border: '#10b981', color: '#34d399' },
  error:   { icon: <FiXCircle />,    bg: 'rgba(239,68,68,0.1)',   border: '#ef4444', color: '#f87171' },
  warning: { icon: <FiAlertTriangle />, bg: 'rgba(245,158,11,0.1)', border: '#f59e0b', color: '#fbbf24' },
  info:    { icon: <FiInfo />,        bg: 'rgba(99,102,241,0.1)', border: 'var(--accent-primary)', color: '#818cf8' },
};

export default function Alert({ type = 'info', title, message, closeable = true }: AlertProps) {
  const [visible, setVisible] = useState(true);
  const { icon, bg, border, color } = config[type];

  if (!visible) return null;

  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '1rem 1.25rem',
        borderRadius: '10px',
        background: bg,
        border: `1px solid ${border}`,
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        animation: 'fadeIn 0.3s ease-out',
      }}
    >
      <span style={{ color, fontSize: '1.25rem', marginTop: '1px', flexShrink: 0 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontWeight: 600, marginBottom: '2px', color }}>{title}</div>}
        <div style={{ color: 'var(--text-secondary)' }}>{message}</div>
      </div>
      {closeable && (
        <button
          onClick={() => setVisible(false)}
          aria-label="Cerrar alerta"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', padding: '2px', display: 'flex', alignItems: 'center' }}
        >
          <FiX size={18} />
        </button>
      )}
    </div>
  );
}
