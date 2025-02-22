import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DemoSection from "./game";
import MintAnnouncement from "./MintAnnouncement ";
import ArchieAnnouncement from "./archie-annoncement/ArchieAnnouncement";

const sections = [DemoSection, MintAnnouncement, ArchieAnnouncement]; // Add all sections here

const SlideSections = () => {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sections.length); // Cycle through sections
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const ActiveComponent = sections[index];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index} // Key updates on every change
          initial={{ x: "100%", opacity: 0 }} // Start off-screen
          animate={{ x: 0, opacity: 1 }} // Slide in
          exit={{ x: "-100%", opacity: 0 }} // Slide out
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideSections;
