import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout     from './layout/Layout';
import Home       from './pages/Home';
import Teoria     from './pages/Teoria';
import Referencia from './pages/Referencia';
import Componentes from './pages/Componentes';
import Hooks      from './pages/Hooks';
import Practicas  from './pages/Practicas';
import Request    from './pages/Request';
import Ejercicios from './pages/Ejercicios';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"            element={<Home />} />
          <Route path="/about"            element={<About />} />
          <Route path="/teoria"      element={<Teoria />} />
          <Route path="/referencia"  element={<Referencia />} />
          <Route path="/componentes" element={<Componentes />} />
          <Route path="/hooks"       element={<Hooks />} />
          <Route path="/practicas"   element={<Practicas />} />
          <Route path="/ejercicios"  element={<Ejercicios />} />
          <Route path="/peticiones"  element={<Request />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
