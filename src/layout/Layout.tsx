import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import { Outlet } from 'react-router-dom';
import '../App.css'


function Layout () {
    return (
        <>
            <Header/>
            <main className='container'>
                <Outlet />
            </main>
            <Footer/>
        </>
    );
}

export default Layout;