import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

function Layout ({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header/>
            <main className='layout'>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default Layout;