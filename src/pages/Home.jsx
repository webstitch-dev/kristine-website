import '../styles/Home.css';
import Hero from '../components/Hero';
import MarketSection from '../components/MarketSection';

function Home() {
  return (
    <div className="home-container">
      <Hero />

      <MarketSection />
    </div>
  );
}

export default Home;