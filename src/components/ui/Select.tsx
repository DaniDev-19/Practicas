/**
 * Select.tsx
 * Componente Select personalizado con estilos adaptados al tema oscuro.
 * Usa el elemento nativo <select> pero con CSS personalizado para integrarse
 * visualmente con el diseño glassmorphism del proyecto.
 * Props: label, options ({ value, label }[]), value, onChange, placeholder
 */

import { FiChevronDown } from 'react-icons/fi';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
}

export default function Select({ label, options, value, onChange, placeholder = 'Selecciona...', id = 'custom-select' }: SelectProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {label && (
        <label htmlFor={id} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={id}
          value={value}
          onChange={e => onChange(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 2.5rem 0.75rem 1rem',
            borderRadius: '8px',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-glass)',
            color: value ? 'white' : 'var(--text-secondary)',
            fontFamily: 'inherit',
            fontSize: '1rem',
            appearance: 'none',
            cursor: 'pointer',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-glass)')}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value} style={{ background: '#1e2130' }}>
              {opt.label}
            </option>
          ))}
        </select>
        <FiChevronDown
          style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', pointerEvents: 'none' }}
        />
      </div>
    </div>
  );
}
