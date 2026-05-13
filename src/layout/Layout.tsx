import { NavLink, Outlet } from 'react-router-dom';
import { FiHome, FiBox, FiCode, FiActivity, FiGlobe } from 'react-icons/fi';
import '../index.css';
import './Layout.css';

function Layout() {
  return (
    <div className="app-container">
      <aside className="sidebar glass-panel">
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon"></div>
            <h2>React<span className="text-gradient">Pro</span></h2>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FiHome className="nav-icon" />
            <span>Inicio</span>
          </NavLink>
          
          <NavLink to="/componentes" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FiBox className="nav-icon" />
            <span>Componentes</span>
          </NavLink>
          
          <NavLink to="/hooks" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FiCode className="nav-icon" />
            <span>Hooks</span>
          </NavLink>
          
          <NavLink to="/practicas" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FiActivity className="nav-icon" />
            <span>Prácticas</span>
          </NavLink>
          
          <NavLink to="/peticiones" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FiGlobe className="nav-icon" />
            <span>Peticiones</span>
          </NavLink>
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">D</div>
            <div className="user-info">
              <span className="user-name">DaniDev</span>
              <span className="user-role">Frontend Pro</span>
            </div>
          </div>
        </div>
      </aside>
      
      <main className="main-content animate-fade-in">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;