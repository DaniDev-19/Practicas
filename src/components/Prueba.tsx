import { useState, useEffect } from "react";



function Prueba ({title = '' , paragraf = ''}) {

    interface list { 
        id: number;
        name: string;
        email: string;
    };

    const [prueba, setPrueba] = useState(1);

    const [list, setList] = useState<list[]>([
        {id:1, name: 'pepe', email: 'pepe@gmail.com'},
        {id:2, name: 'daniel', email: 'pepe@gmail.com'},
        {id:3, name: 'danel', email: 'pepe@gmail.com'},
        {id:4, name: 'jenniffer', email: 'pepe@gmail.com'},
        {id:5, name: 'carlos', email: 'pepe@gmail.com'},
        {id:6, name: 'yuli', email: 'pepe@gmail.com'},
    ]);

    const filterList = list.filter(l => l.id === 2);
    
    useEffect(() => {
        
        if (prueba >= 10 ) {
            alert('Enhorabuena cumplistes con 10 cliks')
        } else if (prueba < 1) {
                alert('No puedes tener en el estado numeros negativos')
            }

            setList(list);
        // console.log(prueba + 'esto es un useEffect');
    }, [prueba]);



    return (
        <div>
            <h1>{prueba}</h1>

            <button
                onClick={() => setPrueba(prueba + 1)}
                disabled={prueba > 9}
            >
                {/* validacion ternaria ===  es true o es false  */}
                {prueba > 9 ? 'desactivado' : 'click'}
            </button>

            <div>
                {filterList.map((l) => (
                    <ul key={l.id}>
                        <li>{l.name}</li>
                        <li>{l.email}</li>
                    </ul>
                ))}
            </div>

                <h1>{title}</h1>
                <p>{paragraf}</p>

            
        </div>
    );
}

export default Prueba; 