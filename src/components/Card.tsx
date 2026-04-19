import Styles from '../styles/card.module.css';
function Card ({title="", subtitle="", costo="", des=""}) {
    return (
        <div className={Styles.container}>
            <div className={Styles.img}>
                <img src={subtitle} alt={title} className={Styles.imge}/>
            </div>
            <h1 className={Styles.title}>{title}</h1>
            <span className={Styles.costo}>{costo}</span>
            <p className={Styles.desc}>{des}</p>
        </div>
    );
}

export default Card;