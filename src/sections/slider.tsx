import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DemoSection from "./game";
import MintAnnouncement from "./MintAnnouncement ";
import ArchieAnnouncement from "./archie-annoncement/ArchieAnnouncement";
import NFTSpaceTicket from "./ticket/NFTSpaceTicket";

const sections = [DemoSection, MintAnnouncement, ArchieAnnouncement, NFTSpaceTicket];

const SlideSections = () => {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ActiveComponent = sections[index];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }} 
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideSections;
