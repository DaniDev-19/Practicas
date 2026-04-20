import './App.css';
import { useState, useEffect } from 'react';
import Like from './components/Multiplication';
import Card from './components/Card';
import plancha from "../public/placha.webp"
function App() {

  const [count, setCount]= useState(1); 

useEffect(() => {
    if (count < 0) {
      alert("No puedes tener números negativos");
      setCount(0); 
    } else if (count === 10) {
      alert("¡Felicidades, llegaste a 10!");
    }
  }, [count]);

  return (
    <>
      <div className='container'>
        {/* Funcionalidad 1 */}
        <p>Componente reactivo <strong>{count}</strong></p>
        <button className='btn-1' title='Seteo el' onClick={() => setCount(prev => prev + 1)}>Soy Reactivo</button>

        {/* Funcionalidad 2 */}
        <p>Reseteame</p>
        <button className='btn-1' onClick={() => setCount(1)}>Reseteame</button>

        {/* Funcionalidad 3 */}
        <p>Restame </p>
        <button className='btn-1' onClick={() => setCount(prev => prev - 2)}>Restar 2</button>

      <div className='grilla'>
        {/* Componente 2*/}
        <Like />

        {/* Componente 2  */}
        <Like></Like>
      </div>

        {/* Grilla de cartas */}
      <div className='grilla'>
        <Card 
          title='Plancha Sofisticada'
          imageUrl={plancha}
          costo='5$'
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, dolores."
        />
        <Card 
          title='Plancha Bonita'
          imageUrl={plancha}
          costo='2$'
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, dolores."
        />
        <Card 
          title='Plancha BeBota'
          imageUrl={plancha}
          costo='100$'
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, dolores."
        />
        <Card 
          title='Plancha Chingona'
          imageUrl={plancha}
          costo='15$'
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, dolores."
        />
      </div>
        
      </div>
    </>
  )
}

export default App
