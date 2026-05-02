import style from '../styles/footer.module.css'
import footerData from '../core/footer.json';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaReact, FaGlobe } from "react-icons/fa";

    const iconMap: Record<string, React.ReactNode> = {
        FaGithub: <FaGithub />,
        FaLinkedin: <FaLinkedin />,
        FaReact: <FaReact />,
        FaGlobe: <FaGlobe />
    };

function Footer () {
    const { title, description, link, url, icon } = footerData.footer;
    
    return (    
        <footer className={style.footer}>
            <div>
                <img src="" alt="" />
                <h1>{title}</h1>
                <span>{description}</span>
            </div>
            <div>
                <h4>Apartados</h4>
                <ul>
                    {link.map((item: {title: string, to: string}) => (
                        <li key={item.title}>
                            <Link to={item.to}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>React Vinculos</h4>
                <ul>
                    {url.map((item: {url: string, title: string}) => (
                        <li key={item.title}>
                            <a href={item.url} target='_blank'>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>Tecnología y Contacto</h4>
                {icon.map((item) => (
                    <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer">
                    {iconMap[item.icon as keyof typeof iconMap]}
                    </a>
                ))}
            </div>
        </footer>

    );
}
export default Footer;