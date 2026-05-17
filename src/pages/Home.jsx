import '../styles/Home.css';
import Hero from '../components/Hero';
import MarketSection from '../components/MarketSection';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div className="home-container">
      <Hero />

      <MarketSection />

      <div className="carousel-wrapper">
        <h2 className="carousel-title">Monthly Favorites</h2>
        <Carousel />
      </div>
    </div>
  );
}

export default Home;