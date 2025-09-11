"use client";

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Base image */}
      <img
        src="/pictures/red_flower.avif"
        alt="red flower"
        className="w-full h-full object-cover"
      />

      {/* Cloudy reveal mask */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-full z-10 mix-blend-multiply"
      >
        <video 

          src="/pictures/cloud_screen.webm"
          autoPlay
          muted
          loop
          playsInline
          className="w-full  h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
