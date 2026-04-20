import Styles from '../styles/card.module.css';
function Card ({title="", imageUrl="", costo="", des=""}) {
    return (
        <div className={Styles.container}>
            <div className={Styles.img}>
                <img src={imageUrl} alt={title} className={Styles.imge}/>
            </div>
            <hr className={Styles.hr}/>
            <h3 className={Styles.title}>{title}</h3>
            <span className={Styles.costo}>{costo}</span>
            <p className={Styles.desc}>{des}</p>
        </div>
    );
}

export default Card;