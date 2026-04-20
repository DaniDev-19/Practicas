import React, { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "contador-valor";

const Contador: React.FC = () => {
	const [contador, setContador] = useState<number>(() => {
		const valorGuardado = localStorage.getItem(LOCAL_STORAGE_KEY);
		return valorGuardado !== null ? Number(valorGuardado) : 0;
	});

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, contador.toString());
	}, [contador]);

	const incrementar = () => setContador((prev) => prev + 1);
	const decrementar = () => setContador((prev) => prev - 1);
	const reiniciar = () => setContador(0);

	return (
		<div>
			<h2>Contador con Persistencia</h2>
			<p>Valor: {contador}</p>
			<button onClick={decrementar}>-</button>
			<button onClick={reiniciar}>Reiniciar</button>
			<button onClick={incrementar}>+</button>
		</div>
	);
};

export default Contador;
