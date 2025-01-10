// import React, { useEffect } from "react";
// import "./Embedded-tweet.css";
// const EmbeddedTweet = () => {
//   useEffect(() => {
//     // Load Twitter widgets script dynamically
//     const script = document.createElement("script");
//     script.src = "https://platform.twitter.com/widgets.js";
//     script.async = true;
//     script.charset = "utf-8";
//     document.body.appendChild(script);

//     return () => {
//       // Clean up the script if needed
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="twitter-embed-container">
//       <blockquote className="twitter-tweet">
//         <p lang="en" dir="ltr">
//           Grab an Og &amp; Mutant ArchieApes
//           <a href="https://t.co/LsM9EP0LXX">https://t.co/LsM9EP0LXX</a>
//           <br />
//           <br />
//           🛠️ Here's how:
//           <br />
//           1️⃣ Go to MetaMask
//           <br />
//           2️⃣ Add ApeChain Network (Example Pic 2)
//           <br />
//           3️⃣ Bridge from ETH to Ape using{" "}
//           <a href="https://t.co/4MuryNknf5">https://t.co/4MuryNknf5</a>
//           <br />
//           4️⃣ Use Ape to get Archie Apes &amp; Mutants{" "}
//           <a href="https://twitter.com/CryptikRiK?ref_src=twsrc%5Etfw">
//             @CryptikRiK
//           </a>{" "}
//           #ArchieApes #MutantArchieApes{" "}
//           <a href="https://t.co/vhBLwtxakk">pic.twitter.com/vhBLwtxakk</a>
//         </p>
//         &mdash; archieapes_ (@archieapes_){" "}
//         <a href="https://twitter.com/archieapes_/status/1876861134839431446?ref_src=twsrc%5Etfw">
//           January 8, 2025
//         </a>
//       </blockquote>
//       <script
//         async
//         src="https://platform.twitter.com/widgets.js"
//         charset="utf-8"
//       ></script>
//     </div>
//   );
// };

// export default EmbeddedTweet;
