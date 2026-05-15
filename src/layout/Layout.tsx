import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { Sidebar } from '../components/layout/Sidebar/Sidebar';
import { BackToTop } from '../components/ui/BackToTop/BackToTop';
import '../index.css';
import './Layout.css';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Cerrar sidebar al cambiar de ruta en móvil
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-container">
      {/* Botón de menú para móvil */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Abrir menú"
      >
        <FiMenu size={24} />
      </button>

      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* ── Contenido principal ── */}
      <main className="main-content animate-fade-in">
        <Outlet />
      </main>

      <BackToTop />
    </div>
  );
}