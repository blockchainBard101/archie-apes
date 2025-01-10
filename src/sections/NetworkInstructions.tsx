// src/sections/NetworkInstructions.js
import React from "react";
import "./NetworkInstructions.css"; // Create a CSS file for custom styling if needed.

function NetworkInstructions() {
  return (
    <section className="network-instructions">
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
    </section>
  );
}

export default NetworkInstructions;
