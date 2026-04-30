import { useState } from 'react';
import style from '../styles/menu.module.css';
function Menu () {

    interface Menu {
        id: number;
        nombre: string;
        tipo: string;
        precio: number;
        descripcion: string;
    }

    const [menu, setMenu] = useState<Menu[]>([
        {id:1, nombre: 'Pollo con Papas', tipo: 'comida', precio: 5.99, descripcion: 'cuenta con ensalada incluida',},
        {id:2, nombre: 'Pollo con Papas', tipo: 'comida', precio: 6.99, descripcion: 'cuenta con ensalada incluida',},
        {id:3, nombre: 'Pollo con Papas', tipo: 'comida', precio: 3.99, descripcion: 'cuenta con ensalada incluida',},
        {id:4, nombre: 'Pollo con Papas', tipo: 'comida', precio: 7.99, descripcion: 'cuenta con ensalada incluida',},
    ]);

    const [orden, setNewOrden] = useState<Menu>({
        id: 0,
        nombre: '',
        tipo: '',
        precio: 0,
        descripcion: '',
    });

    const addOrden = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!orden.nombre || !orden.tipo || !orden.precio) {
            return alert('Rellene los campos, todos son obligatorios');
        } else if (orden.precio < 1 ) {
            return alert('No puede colocar numeros negativos a el precio del plato');
        }

        setMenu([
            ...menu,{...orden, id: menu.length + 1, nombre: orden.nombre.trim(), tipo: orden.tipo.trim(), precio: orden.precio},]);

        setNewOrden({
            id: 0,
            nombre: '',
            tipo: '',
            precio: 0,
            descripcion: '',
        });
    };

    const deleteOrden = (id: number) => {
        setMenu(menu.filter((i) => i.id !== id));
        alert('Eliminado correctamente');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewOrden({
        ...orden,
        [name]: name === "precio" ? Number(value) : value,
    });
    }

    return (
        <main className={style.container}>
            <div>
                <form onSubmit={addOrden} className={style.formulario}>
                    <div>
                        <label htmlFor="nombre">Nombre del Plato</label>
                        <input 
                            type="text" 
                            name='nombre'
                            id='nombre'
                            value={orden.nombre}
                            onChange={handleChange}
                            placeholder='Escribe un nombre para el plato'
                        />
                    </div>
                    <div>
                        <label htmlFor="tipo">Tipo de Plato</label>
                        <input 
                            type="text" 
                            name='tipo'
                            id='tipo'
                            value={orden.tipo}
                            onChange={handleChange}
                            placeholder='Escribe el tipo de plato'
                        />
                    </div>
                    <div>
                        <label htmlFor="precio">Precio del Plato</label>
                        <input 
                            type="number" 
                            name='precio'
                            id='precio'
                            value={orden.precio}
                            onChange={handleChange}
                            placeholder='Ponle precio a el plato'
                        />
                    </div>
                    <div>
                        <label htmlFor="descripcion">Añadir Acompañantes</label>
                        <textarea  
                            name='descripcion'
                            id='descripcion'
                            value={orden.descripcion}
                            onChange={handleChange}
                            placeholder='añade topins que incluye el plato'
                        />
                    </div>
                    <div className={style.btnContainer}>
                        <button
                            title='Crear Orden'
                            onClick={() => addOrden}
                            className={style.btnCreate}
                        >
                            Crear
                        </button>
                    </div>
                </form>
            </div>

            <table className={style.tableMenu}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PLATO</th>
                        <th>TIPO</th>
                        <th>PRECIO</th>
                        <th>DESCRIPCIÓN</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {menu.map( (m) => (
                    <tr key={m.id}>
                        <td>{m.id}</td>
                        <td>{m.nombre}</td>
                        <td>{m.tipo}</td>
                        <td>{m.precio} $</td>
                        <td>{m.descripcion}</td>
                        <td>
                            <div className={style.btnContainer}>
                                <button
                                    onClick={() => deleteOrden(m.id)}
                                    className={style.btnDelete}
                                    title='Eliminar del Menu'
                                >
                                    Borrar
                                </button>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}
export default Menu;