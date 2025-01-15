import React from "react";
import "./game.css";

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
        src="https://i.ibb.co/QHgVFBS/photo-2025-01-15-03-07-44.jpg"
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