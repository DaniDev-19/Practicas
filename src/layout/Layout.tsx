import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import { Outlet } from 'react-router-dom';
import '../index.css'


function Layout () {
    return (
        <div className='layout-container'>
            <Header/>
            <main className='main-content'>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;