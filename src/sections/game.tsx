import React from "react";
import "./game.css";
import gm1 from "./../assets/gm1.jpg";

const DemoSection: React.FC = () => {
  return (
    <section className="demo-section">
      <h1 className="demo-title">
        Enjoy the Demo OG Archie Ape Base Character
      </h1>
      <p className="demo-description">
        You can now battle it out in{" "}
        <span className="demo-highlight">Pew Pew Royale</span> - a
        crypto-powered play-to-earn shooting game!
      </p>
      <img
        className="demo-image"
        src={gm1}
        alt="OG Archie Ape Base Character"
      />
      <p className="demo-description">
        We just minted both collections, and this is one of the first amazing
        utilities!
      </p>
      <a
        className="demo-btn"
        href="https://pewpewroyale.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Play now
      </a>
      <footer className="demo-footer">
        Join the action and start earning!
      </footer>
    </section>
  );
};

export default DemoSection;