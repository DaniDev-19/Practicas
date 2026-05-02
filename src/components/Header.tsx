import { NavLink } from 'react-router-dom';
import style from '../styles/header.module.css';

function Header() {
    return (
        <nav className={style.navBar}>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? `${style.link} ${style.active}` : style.link
                        }
                        end
                    >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/practicas"
                        title='Lógica y Prácticas'
                        className={({ isActive }) =>
                            isActive ? `${style.link} ${style.active}` : style.link
                        }
                    >
                        Prácticas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/hooks"
                        title='Hooks y Proms'
                        className={({ isActive }) =>
                            isActive ? `${style.link} ${style.active}` : style.link
                        }
                    >
                        Hooks 
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/request"
                        title='Peticiones a APIS'
                        className={({ isActive }) =>
                            isActive ? `${style.link} ${style.active}` : style.link
                        }
                    >
                        Request
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/componentes"
                        title='Biblioteca de Componentes'
                        className={({ isActive }) =>
                            isActive ? `${style.link} ${style.active}` : style.link
                        }
                    >
                        Componentes
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;