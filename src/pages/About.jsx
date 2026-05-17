import "../styles/About.css";
import kristine from "../assets/images/kristine-about.png";
import quartz from "../assets/images/quartz.jpg";
import obsidian from "../assets/images/obsidian.jpg";
import sardonyx from "../assets/images/sardonyx.jpg";

function About() {
  return (
    <section className="about">

      <div className="about-top">
        <div className="about-left">
          <h1 className="about-title">KRISTINE</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div className="about-right">
          <img
            src={kristine}
            alt="Kristine"
            className="about-image"
          />
        </div>
      </div>

      <div className="crystal-section">
        <h2 className="crystal-section-title">My Favorite Crystals</h2>

        <div className="crystal-grid">

          <div className="crystal-card">
            <img src={quartz} alt="Quartz" />
            <h3>Quartz</h3>
            <p>Amplifies energy, clarity, and intention.</p>
          </div>

          <div className="crystal-card">
            <img src={obsidian} alt="Obsidian" />
            <h3>Obsidian</h3>
            <p>Protective stone that shields negativity.</p>
          </div>

          <div className="crystal-card">
            <img src={sardonyx} alt="Sardonyx" />
            <h3>Sardonyx</h3>
            <p>Brings strength, stability, and discipline.</p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default About;