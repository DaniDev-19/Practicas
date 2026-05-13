import { useState } from "react";
import { FiUser } from "react-icons/fi";

function ContadorTwo() {
  const [valor, setValor] = useState("");

  const activo = valor !== "";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Display de estado */}
      <div style={{
        background: 'var(--bg-primary)',
        border: `1px solid ${activo ? 'rgba(99,102,241,0.4)' : 'var(--border-glass)'}`,
        borderRadius: '12px',
        padding: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        transition: 'border-color 0.3s',
        minHeight: '80px',
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: activo ? 'var(--accent-gradient)' : 'var(--border-glass)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.4s',
          flexShrink: 0,
        }}>
          <FiUser size={22} color={activo ? 'white' : 'var(--text-secondary)'} />
        </div>
        <div>
          {activo ? (
            <>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{valor}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)' }}>Estado activo</div>
            </>
          ) : (
            <span style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>Sin valor — pulsa "Activar"</span>
          )}
        </div>
      </div>

      {/* Botones */}
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button
          onClick={() => setValor("yuli")}
          disabled={activo}
          className="btn-primary"
          style={{ flex: 1, opacity: activo ? 0.5 : 1 }}
        >
          Activar
        </button>
        <button
          onClick={() => setValor("")}
          disabled={!activo}
          className="btn-primary"
          style={{
            flex: 1,
            background: 'transparent',
            border: '1px solid var(--border-glass)',
            color: activo ? 'var(--text-primary)' : 'var(--text-secondary)',
            opacity: activo ? 1 : 0.5,
          }}
        >
          Resetear
        </button>
      </div>

    </div>
  );
}

export default ContadorTwo;
