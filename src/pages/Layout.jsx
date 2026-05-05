import { Outlet,useLocation } from 'react-router-dom';
import {useState,useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpenMenu(false);
      }, [location]);
    
    return (
        <div className="layout">
            <div className="header-container">
                <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            </div>
            
            <main>
                <Outlet /> 
            </main>

            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;