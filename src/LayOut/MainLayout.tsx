
import { Outlet } from 'react-router';
import Navbar from '../components/Navber/Navber';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='bg-black/5'>

            <header className='sticky top-0 z-50'>
               <Navbar/>
            </header>
            <main >
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default MainLayout;