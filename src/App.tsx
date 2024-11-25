import "./App.css";

function App() {
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
            3333 unique NFTs on Ape Chain! Where innovation meets creativity,
            and the community drives the vision.
          </p>
          <a
            href="https://archie-apes.nfts2.me"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Mint Now
          </a>
        </div>

        <div className="top-links">
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
            href="https://twitter.com/archieapes?t=fVXVfrQB6mE07m-EPpht4w&s=09"
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
        </div>
      </header>

      {/* Gallery Section */}
      <main>
        <section className="gallery">
          <img
            src="https://img1.wsimg.com/isteam/ip/33669d2b-011a-4977-87e9-cf9c3f2b5fd8/banner.webp/:/cr=t:0%25,l:37.5%25,w:25%25,h:100%25/rs=w:600,h:600,cg=true"
            alt="Explore Archie Apes Collection Banner"
            className="gallery-banner"
          />

          <h2 className="section-title">Explore the Collection</h2>
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
        </section>

        {/* Roadmap Section */}
        <section className="roadmap">
          <h2 className="section-title">Roadmap</h2>
          <div className="roadmap-stages">
            <div className="roadmap-stage">
              <h3 className="roadmap-title">Stage 1</h3>
              <p className="roadmap-description">
                Mint goes live! Secure your Archie Apes now.
              </p>
            </div>
            <div className="roadmap-stage">
              <h3 className="roadmap-title">Stage 2</h3>
              <p className="roadmap-description">
                Holders of 15 Archie Apes will receive 1 Mutant Ape. Mutant Apes
                will have a very limited supply of 333 with exclusive perks on
                the horizon!
              </p>
            </div>
            <div className="roadmap-stage">
              <h3 className="roadmap-title">Stage 3</h3>
              <p className="roadmap-description">
                Upgrade your Archie Apes and reduce supply to 1,111 by burning 3
                Archie Apes to receive a new and improved one.
              </p>
            </div>
          </div>
          <p className="roadmap-note">
            <strong>The Community is Key!</strong> Together, we will shape the
            future of Archie Apes.
          </p>
        </section>

        {/* About Section */}
        <section className="about">
          <h2 className="section-title">About Archie Apes</h2>
          <div className="about-content">
            <p>
              Archie Apes is a groundbreaking collection of 3333 NFTs on the Ape
              Chain. With a vision to innovate and create, this project is for
              the community and by the community. From Mutant Apes to upgraded
              versions, each stage adds more value and excitement for holders.
            </p>
          </div>
        </section>

        <section className="about-me">
          <h2>About Me</h2>
          <img
            src="https://i.ibb.co/s3sR9pn/photo-2024-11-25-06-50-13.jpg"
            alt="Founder of Archie Apes"
            className="founder-image"
          />
          <div className="about-founder">
            <p className="founder-description">
              Hi, I’m Danyelle, the developer of Archie Apes. I've been in the
              crypto space for 3 years, working with various projects, and
              always dreamed of launching my own. Now, I’m making it happen on
              Ape Chain.
            </p>
          </div>
        </section>
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
            href="https://twitter.com/archieapes?t=fVXVfrQB6mE07m-EPpht4w&s=09"
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
        </div>
        <p>© 2024 Archie Apes - All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
