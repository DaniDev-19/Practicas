import { useState } from "react";

function ContadorTwo () {
    const [prueba, setPrueba] = useState("");

    return (
        <div className="container">
            <button className="btn-1" onClick={() => setPrueba("yuli") }>Click</button>
            
            <button  className="btn-1" onClick={() => setPrueba("")}>reseteame</button>
            <h1>{prueba}</h1>
        </div>
    );
}

export default ContadorTwo;





