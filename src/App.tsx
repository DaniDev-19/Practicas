import './App.css';
import { useState } from 'react';
import Like from './components/Megusta';
import Card from './components/Card';
function App() {

  const [count, setCount]= useState(1); 

  if(count === 0 ) {
    window.alert("no puedes tener numeros negativos")
  } else if (count === 10) {
    window.alert("felicidades llegastes a 10")
  }

  return (
    <>
      <div className='container'>
        {/* Funcionalidad 1 */}
        <p>Componente reactivo {count}</p>
        <button className='btn-1' title='Seteo el' onClick={() => setCount(count + 1)}>Soy Reactivo</button>

        {/* Funcionalidad 2 */}
        <p>Reseteame</p>
        <button className='btn-1' onClick={() => setCount(1)}>Reseteame</button>

        {/* Funcionalidad 3 */}
        <p>Restame</p>
        <button className='btn-1' onClick={() => setCount(count - 2)}>Restar</button>

        {/* Componente 2*/}
        <Like />

        {/* Componente 2  */}
        <Like></Like>

        {/* Grilla de cartas */}
      <div className='grilla'>
        <Card 
          title='Plancha Sofisticada'
          subtitle='../public/placha.webp'
          costo='5$'
          des="Plancha super novedosa"
        />
        <Card 
          title='Plancha Bonita'
          subtitle='../public/placha.webp'
          costo='2$'
          des="Plancha super novedosa"
        />
        <Card 
          title='Plancha BeBota'
          subtitle='../public/placha.webp'
          costo='100$'
          des="Plancha super novedosa"
        />
        <Card 
          title='Plancha Chingona'
          subtitle='../public/placha.webp'
          costo='15$'
          des="Plancha super novedosa"
        />
      </div>
        
      </div>
    </>
  )
}

export default App
