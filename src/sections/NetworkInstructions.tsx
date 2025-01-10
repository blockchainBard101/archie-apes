// src/sections/NetworkInstructions.js
import React from "react";
import "./NetworkInstructions.css"; // Ensure the CSS file is updated accordingly.

function NetworkInstructions() {
  return (
    <section className="network-instructions">
      <div className="additional-instructions">
        <h3>Grab OG & Mutant ArchieApes</h3>
        <p>
          <a
            href="https://magiceden.us/collections/apechain/0x5e16142030f0daeaa2ae4c7a6aa06b14391b7bf2"
            target="_blank"
            rel="noopener noreferrer"
            className="instructions-highlight"
          >
            Explore on Magic Eden
          </a>
        </p>
        <p>🛠️ Here's how:</p>
        <ul>
          <li className="instructions-step">
            1️⃣ Go to <span>MetaMask</span>
          </li>
          <li className="instructions-step">
            2️⃣ Add <span>ApeChain Network</span>
          </li>
          <li className="instructions-step">
            3️⃣ Bridge from <span>ETH to Ape</span> using{" "}
            <a
              href="http://relay.link"
              target="_blank"
              rel="noopener noreferrer"
              className="instructions-highlight"
            >
              Relay Link
            </a>
          </li>
          <li className="instructions-step">
            4️⃣ Use <span>Ape</span> to get Archie Apes & Mutants
          </li>
        </ul>
      </div>

      <div className="connect-instructions">
        <h2 className="section-title">How to Connect to ApeChain</h2>
        <p>Follow the instructions below to add ApeChain to your wallet:</p>
        <ul>
          <li>
            <strong>Network Name:</strong> ApeChain
          </li>
          <li>
            <strong>New RPC URL:</strong>{" "}
            <a
              href="https://apechain.calderachain.xyz/http"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://apechain.calderachain.xyz/http
            </a>
          </li>
          <li>
            <strong>Chain ID:</strong> 33139
          </li>
          <li>
            <strong>Currency Symbol:</strong> APE
          </li>
          <li>
            <strong>Block Explorer URL (Optional):</strong>{" "}
            <a
              href="https://apescan.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://apescan.io
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NetworkInstructions;
