import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="layout">
        <div className="header-container">
            <Header />
        </div>
        
        <main>
            <Outlet /> 
        </main>

        <div className="footer-container">
            <Footer />
        </div>
    </div>
  );
}

export default Layout;