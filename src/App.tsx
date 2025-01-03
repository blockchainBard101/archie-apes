import "./App.css";
// import Countdown from "./sections/Countdown";
import About from "./sections/About";
import AboutMe from "./sections/About-me";

function App() {

    // const [timeRemaining, setTimeRemaining] = useState<{ days: number; hours: number; minutes: number; seconds: number; } | null>({
    //   days: 0,
    //   hours: 0,
    //   minutes: 0,
    //   seconds: 0,
    // });

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     const targetDate = new Date("2025-01-01T00:00:00Z");
    //     const currentDate = new Date();
    //     const difference = targetDate.getTime() - currentDate.getTime();

    //     if (difference <= 0) {
    //       clearInterval(interval);
    //       setTimeRemaining(null);
          
    //       return;
    //     }

    //     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor(
    //       (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //     );
    //     const minutes = Math.floor(
    //       (difference % (1000 * 60 * 60)) / (1000 * 60)
    //     );
    //     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //     setTimeRemaining({ days, hours, minutes, seconds });
    //   }, 1000);

    //   return () => clearInterval(interval);
    // }, []);

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <img
            src="https://pbs.twimg.com/profile_images/1851717473839575040/UmmETYLp_400x400.jpg"
            alt="Ape Chain Logo"
            className="hero-logo"
          />
          <h1 className="hero-title">Archie Apes NFT Collection</h1>
          <p className="hero-description">
            A unique NFTs on Ape Chain! Where innovation meets creativity, and
            the community drives the vision.
          </p>
          <a
            href="https://magiceden.io/collections/apechain/0x093414B375ecE9Ef24Dfa3Aa34ab14a4B4c244c9"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Archies
          </a>
          <a
            href="https://magiceden.io/collections/apechain/0x5e16142030f0daeaa2ae4c7a6aa06b14391b7bf2"
            rel="noopener noreferrer"
            className="btn btn-primary-mutant"
          >
            Mutants
          </a>
        </div>

        <div className="top-banner">
          <p className="banner-text">
            🚀{" "}
            <a href="#roadmap" className="banner-link">
              Phase 2 SOLD OUT! 🎉{" "}
            </a>{" "}
            Mutant Archie Apes Have Officially Minted Out! 🎉
          </p>
        </div>

        <div className="social-links">
          <a
            href="https://apescan.io/address/0x093414B375ecE9Ef24Dfa3Aa34ab14a4B4c244c9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ApeScan"
            className="social-icon"
          >
            <i className="fas fa-link"></i>
          </a>
          <a
            href="https://x.com/archieapes_?s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="social-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://magiceden.io/collections/apechain/0x093414B375ecE9Ef24Dfa3Aa34ab14a4B4c244c9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Magic Eden"
            className="social-icon"
          >
            <i className="fas fa-magic"></i>
          </a>

          <a
            href="https://discord.com/invite/NGbzrjwzdD"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="social-icon"
          >
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </header>

      {/* <section className="countdown">
        <h2 className="section-title">
          Holders of 15 Archie Apes will receive 1 Mutant Ape on January 1st,
          2025
        </h2>
        {timeRemaining ? (
          <Countdown timeRemaining={timeRemaining} />
        ) : (
          <p>The event has started!</p>
        )}
      </section> */}

      {/* Mint Announcement Section */}
      <section className="mint-announcement">
        <h2 className="section-title">
          🎉 SOLD OUT! Mutant Archie Apes Have Officially Minted Out! 🎉
        </h2>
        <p className="announcement">
          A huge THANK YOU to our incredible community for making this happen!
          🙌 The journey has just begun, and we couldn’t have done it without
          your support.
        </p>
        <p className="next-steps">
          Stay tuned for what’s next—big things are on the horizon for the
          Mutant Archie Apes. Welcome to the family, everyone who minted! 🐵💥
        </p>
        <p className="call-to-action">
          Let’s take this to the next level together. 🚀
        </p>
      </section>

      <section className="twitter-post">
        <h2 className="section-title">Featured X Post</h2>
        <blockquote className="twitter-tweet" data-lang="en">
          <a href="https://x.com/DanYellsNFTs_/status/1874958251483406623">
            View this post on X
          </a>
        </blockquote>
      </section>

      {/* Discord Ecosystem Section */}
      <section className="discord-ecosystem">
        <h2 className="section-title">🎉 Attention Archie Ape Holders! 🦍💎</h2>
        <p className="announcement">
          We’re excited to announce the{" "}
          <strong>Archie Apes Discord Ecosystem</strong> is officially live! 🚀
          Dive into the action-packed <strong>Archie Apes Economy</strong>,
          where you can earn rewards and engage with the community like never
          before!
        </p>
        <ul className="ecosystem-features">
          <li>
            ✅ <strong>NFT Staking</strong> – Stake your Archie Apes to earn
            points and unlock exclusive perks!
          </li>
          <li>
            ✅ <strong>Twitter Raids</strong> – Join the raids, amplify our
            presence, and rack up rewards!
          </li>
          <li>
            ✅ <strong>Shops & Raffles</strong> – Use your points to enter
            raffles or snag awesome items in the shop!
          </li>
        </ul>
        <p className="exclusive-rewards">
          🎁 <strong>Exclusive Holder Rewards:</strong> To kick things off,{" "}
          <strong>
            all Archie Ape holders earn 10 points for every 5 Archie Apes they
            hold.
          </strong>{" "}
          The more you hold, the more you earn—it's that simple!
        </p>
        <p className="cta">
          Let’s build the strongest community together. Start earning your way
          to the top! 💪
        </p>
      </section>

      {/* Gallery Section */}
      <main>
        <section className="gallery">
          <img
            src="https://img1.wsimg.com/isteam/ip/33669d2b-011a-4977-87e9-cf9c3f2b5fd8/banner.webp/:/cr=t:0%25,l:37.5%25,w:25%25,h:100%25/rs=w:600,h:600,cg=true"
            alt="Explore Archie Apes Collection Banner"
            className="gallery-banner"
          />

          <h2 className="section-title">Explore the Collection</h2>
          <h3 className="section-title">
            <a
              href="https://magiceden.io/collections/apechain/0x093414B375ecE9Ef24Dfa3Aa34ab14a4B4c244c9"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link"
            >
              Archie Apes
            </a>
          </h3>
          <div className="gallery-grid">
            <img
              src="https://bafybeibsduts67zem6r4qxcj3mmpukorsizlocrlv6b7cp7x3fdehxyzce.ipfs.w3s.link/?n2m=file.webp"
              alt="NFT 1"
              className="gallery-item"
            />
            <img
              src="https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fapechain%2Fi9YO%252F4yHXUdJsWcTqhqvf6yLvTp6l4RMkkud9YlZx%252B9dmWPtIKpmZxQBmM40nW2yU7muYjRubEej%252Fa1jVvKOQ3lA8rEBbb4r9VtQEq%252Bf1xJMEtD0bUysWNDdXxcip9Ot.webp"
              alt="NFT 2"
              className="gallery-item"
            />
            <img
              src="https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fapechain%2Fi9YO%252F4yHXUdJsWcTqhqvf6yLvTp6l4RMkkud9YlZx%252B9dmWPtIKpmZxQBmM40nW2yU7muYjRubEej%252Fa1jVvKOQ3lA8rEBbb4r9VtQEq%252Bf1xJz%252BBbtk5NW45kGo9ceF1q4.webp"
              alt="NFT 3"
              className="gallery-item"
            />
            <img
              src="https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fapechain%2Fi9YO%252F4yHXUdJsWcTqhqvf6yLvTp6l4RMkkud9YlZx%252B9dmWPtIKpmZxQBmM40nW2yU7muYjRubEej%252Fa1jVvKOQ3lA8rEBbb4r9VtQEq%252Bf1xLhVN%252FcYEQqvaJWXQEub%252BjM.webp"
              alt="NFT 4"
              className="gallery-item"
            />
          </div>

          <h3 className="section-title">
            <a
              href="https://magiceden.io/collections/apechain/0x5e16142030f0daeaa2ae4c7a6aa06b14391b7bf2"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link"
            >
              Mutant Archie Apes
            </a>
          </h3>
          <div className="gallery-grid">
            <img
              src="https://i.ibb.co/m6QmRP1/photo-2024-12-02-15-38-17.jpg"
              alt="NFT 1"
              className="gallery-item"
            />
            <img
              src="https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fapechain%2Fi9YO%252F4yHXUdJsWcTqhqvf7SQW%252BTkdzCeTAyik%252BHdzUGuN2HwVjQrQTBmzOJ80dsTaB9Nz%252BRZ24QcauiJPkLw28oFM2WgMySHlbvrHRW%252BaB5K%252BLpZnWcBZochQUQvO%252FIY.webp"
              alt="NFT 2"
              className="gallery-item"
            />
            <img
              src="https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fapechain%2Fi9YO%252F4yHXUdJsWcTqhqvf7SQW%252BTkdzCeTAyik%252BHdzUGuN2HwVjQrQTBmzOJ80dsTaB9Nz%252BRZ24QcauiJPkLw28oFM2WgMySHlbvrHRW%252BaB5mTRC0E0pTugZ%252BNZZ%252BVb3D.webp"
              alt="NFT 3"
              className="gallery-item"
            />
            <img
              src="https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fapechain%2Fi9YO%252F4yHXUdJsWcTqhqvf7SQW%252BTkdzCeTAyik%252BHdzUGuN2HwVjQrQTBmzOJ80dsTaB9Nz%252BRZ24QcauiJPkLw28oFM2WgMySHlbvrHRW%252BaB6rgPjUMLc7axPTW9%252FsddUC.webp"
              alt="NFT 4"
              className="gallery-item"
            />
          </div>
          {/* <span className="coming-soon-badge">Coming Soon!</span> */}
        </section>

        <section className="roadmap" id="roadmap">
          <h2 className="section-title">Archie Apes Roadmap</h2>
          <div className="roadmap-stages">
            <div className="roadmap-stage">
              <h3 className="roadmap-title">Phase 1: Launch & Mint</h3>
              <ul>
                <li>Mint Day: Launch and mint 3,333 Archie Apes.</li>
                <li>Target: Sold out in 21 days.</li>
              </ul>
            </div>
            <div className="roadmap-stage">
              <h3 className="roadmap-title">Phase 2: Expansion</h3>
              <ul>
                <li>Mint 666 Mutant Archies to expand the collection.</li>
                <li>Introduce unique traits and utility to the mutants.</li>
                <li>
                  Form strategic partnerships with other NFT projects and Web3
                  ecosystems.
                </li>
                <li>
                  Focus on collaborations that enhance the Archie Apes brand.
                </li>
              </ul>
            </div>
            <div className="roadmap-stage">
              <h3 className="roadmap-title">Phase 3: Gaming & 3D Expansion</h3>
              <ul>
                <li>
                  Partner with a gaming project to integrate Archie Apes into
                  gameplay or build a custom Archie-themed game.
                </li>
                <li>
                  Distribute 3D Archie Ape NFTs to existing holders as a reward.
                </li>
                <li>Airdrop 3D Mutant Ape NFTs to Mutant Archie holders.</li>
              </ul>
            </div>
            <div className="roadmap-stage">
              <h3 className="roadmap-title">Phase 4: Community & Ecosystem</h3>
              <ul>
                <li>
                  Launch Archie World, a virtual environment for open play and
                  community interaction.
                </li>
                <li>
                  Include features like events, mini-games, and community spaces
                  to foster engagement.
                </li>
              </ul>
            </div>
          </div>

          <div className="optional-enhancements">
            <h3 className="section-title">Optional Future Enhancements</h3>
            <ul>
              <li>Introduce staking rewards for Archie and Mutant holders.</li>
              <li>Release merch tied to NFT ownership (claimables).</li>
              <li>Host real-world or virtual community events for holders.</li>
            </ul>
          </div>
          <p className="roadmap-note">
            <strong>The Community is Key!</strong> Together, we will shape the
            future of Archie Apes.
          </p>
        </section>

        {/* About Section */}
        <About />
        <AboutMe />
      </main>

      {/* Footer */}
      <footer className="footer">
        <h3>Archie Apes</h3>
        <p>
          Join the revolution in NFTs. Follow us for the latest updates and
          milestones.
        </p>
        <div className="social-links">
          <a
            href="https://apescan.io/address/0x093414B375ecE9Ef24Dfa3Aa34ab14a4B4c244c9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ApeScan"
            className="social-icon"
          >
            <i className="fas fa-link"></i>
          </a>
          <a
            href="https://x.com/archieapes_?s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="social-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://magiceden.io/collections/apechain/0x093414B375ecE9Ef24Dfa3Aa34ab14a4B4c244c9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Magic Eden"
            className="social-icon"
          >
            <i className="fas fa-magic"></i>
          </a>

          <a
            href="https://discord.com/invite/NGbzrjwzdD"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="social-icon"
          >
            <i className="fab fa-discord"></i>
          </a>
        </div>
        <p>© 2025 Archie Apes - All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
