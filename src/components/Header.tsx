import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/practicas">Lógica y Prácticas</Link></li>
                <li><Link to="/hooks">Hooks (useState, useEffect, etc.)</Link></li>
                <li><Link to="/request">Peticiones API (Fetch/Axios)</Link></li>
                {/* Nueva sección sugerida */}
                <li><Link to="/componentes">Biblioteca de Componentes</Link></li>
            </ul>
        </nav>
    );
}

export default Header;