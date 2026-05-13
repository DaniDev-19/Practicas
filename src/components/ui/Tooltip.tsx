/**
 * Tooltip.tsx
 * Componente wrapper que muestra un tooltip flotante al hacer hover.
 * Usa posicionamiento absoluto con CSS puro (sin librerías externas).
 * Props: text (string), position (top | bottom | left | right), children (ReactNode)
 */

import { type ReactNode } from 'react';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
}

const positionStyles: Record<string, React.CSSProperties> = {
  top:    { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
  bottom: { top: 'calc(100% + 8px)',    left: '50%', transform: 'translateX(-50%)' },
  left:   { right: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' },
  right:  { left: 'calc(100% + 8px)',  top: '50%', transform: 'translateY(-50%)' },
};

export default function Tooltip({ text, position = 'top', children }: TooltipProps) {
  return (
    <>
      <style>{`
        .tooltip-wrapper { position: relative; display: inline-flex; }
        .tooltip-bubble {
          position: absolute;
          background: #1e2130;
          color: var(--text-primary);
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
          z-index: 999;
          border: 1px solid var(--border-glass);
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }
        .tooltip-wrapper:hover .tooltip-bubble { opacity: 1; }
      `}</style>
      <span className="tooltip-wrapper">
        {children}
        <span className="tooltip-bubble" style={positionStyles[position]}>
          {text}
        </span>
      </span>
    </>
  );
}
