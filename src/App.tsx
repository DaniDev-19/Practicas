import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Componentes from './pages/Componentes';
import Hooks from './pages/Hooks';
import Practicas from './pages/Practicas';
import Request from './pages/Request';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/componentes" element={<Componentes />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/practicas" element={<Practicas />} />
          <Route path="/peticiones" element={<Request />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
