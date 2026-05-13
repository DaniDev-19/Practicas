/**
 * Spinner.tsx
 * Componente de carga reutilizable con variantes de tamaño y color.
 * Usa keyframes CSS inline para girar un anillo con border-radius.
 * Props: size (sm | md | lg), color (accent | success | danger | white)
 */

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'accent' | 'success' | 'danger' | 'white';
}

const sizes = {
  sm: 20,
  md: 36,
  lg: 56,
};

const colors = {
  accent: 'var(--accent-primary)',
  success: '#10b981',
  danger: '#ef4444',
  white: '#ffffff',
};

export default function Spinner({ size = 'md', color = 'accent' }: SpinnerProps) {
  const px = sizes[size];
  const clr = colors[color];

  return (
    <>
      <style>{`
        @keyframes spin-ring {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div
        role="status"
        aria-label="Cargando..."
        style={{
          width: px,
          height: px,
          borderRadius: '50%',
          border: `${Math.max(2, px / 8)}px solid rgba(255,255,255,0.1)`,
          borderTopColor: clr,
          animation: 'spin-ring 0.75s linear infinite',
          display: 'inline-block',
          flexShrink: 0,
        }}
      />
    </>
  );
}
