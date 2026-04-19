import Styles from "../styles/like.module.css";

function Like ({count="multiplicación", mult=2}) {

    const calculo = Math.round(mult * 1);
    
    const filas = []; 

    for (let i = 0; i < 11; i++) {
        const resultado = i * calculo;
        filas.push(<li key={i}>{i} x {calculo} = {resultado}</li>);
    }

    return (
        <div className={Styles.container}>
            <h1>{count}</h1>

            <ul>
                <li>{filas}</li>
            </ul>
        </div>
    );
}

export default Like;