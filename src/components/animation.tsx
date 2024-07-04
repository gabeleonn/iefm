import { motion } from "framer-motion";
import React from "react";

export function withAnimation(Component: React.FC) {
  return function WithAnimation() {
    return (
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex min-h-screen w-full items-center justify-center"
      >
        <Component />
      </motion.main>
    );
  };
}
