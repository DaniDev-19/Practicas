import { useEffect, useMemo, useState } from "react";
import Styles from "../styles/buscador.module.css";

function Buscador() {
  interface Usuarios {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
  const [busqueda, setBusqueda] = useState<string>("");

  useEffect(() => {
    const obtenerUsuarios = async () => {
      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const datos: Usuarios[] = await respuesta.json();
      setUsuarios(datos);
    };
    obtenerUsuarios();
  }, []);

  const usuariosFiltrados = useMemo(
    () =>
      usuarios.filter((usuario) =>
        usuario.name.toLowerCase().includes(busqueda.toLowerCase()),
      ),
    [usuarios, busqueda],
  );

  return (
    <div className={Styles.container}>
      <input
        type="text"
        placeholder="Buscar usuario..."
        value={busqueda}
        className={Styles.inputBusqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ul className={Styles.lista}>
        {usuariosFiltrados.length > 0 ? (
          usuariosFiltrados.map((usuario) => (
            <li key={usuario.id} className={Styles.itemUsuario}>
              {usuario.name}
            </li>
          ))
        ) : (
          <li className={Styles.noResultados}>
            No se encontraron resultados
          </li>
        )}
      </ul>
    </div>
  );
}

export default Buscador;
