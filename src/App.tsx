import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './layout/Layout';
import About from './pages/About';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<About />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
