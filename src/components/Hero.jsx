import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-text">
            <h2>Natural Stones & Handcrafted Jewelry</h2>
            <p>
            Bring pure and uplifting energy into your everyday life.
            </p>
        </div>
      </div>

      <div className="hero-right">
        <div className="glass-card">
            <h3 className="month-title">Crystal of the Month</h3>
            <h2 className="crystal-name">Carnelian</h2>

            <img
                src="/assets/hero-crystal.png"
                alt="Carnelian crystal"
                className="crystal-image"
            />

            <p className="crystal-blurb">
                Carnelian is a warm, energizing stone known for boosting confidence,
                motivation, and creativity. It has been used historically as a symbol
                of courage and vitality.
            </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;