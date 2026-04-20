import React, { useState, useEffect } from "react";
import styles from "../styles/contador.module.css"; 

const LOCAL_STORAGE_KEY = "contador-valor";

const Contador: React.FC = () => {
  const [contador, setContador] = useState<number>(() => {
    const valorGuardado = localStorage.getItem(LOCAL_STORAGE_KEY);
    return valorGuardado !== null ? Number(valorGuardado) : 0;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, contador.toString());
  }, [contador]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Persistencia</h2>
      <div className={styles.display}>{contador}</div>
      
      <div className={styles.buttonGroup}>
        <button className={`${styles.btn} ${styles.btnMinus}`} onClick={() => setContador(c => c - 1)}>-</button>
        <button className={`${styles.btn} ${styles.btnReset}`} onClick={() => setContador(0)}>R</button>
        <button className={`${styles.btn} ${styles.btnPlus}`} onClick={() => setContador(c => c + 1)}>+</button>
      </div>
    </div>
  );
};

export default Contador;
