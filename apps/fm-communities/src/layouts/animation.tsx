import { motion } from "framer-motion"
import React from "react"

export function withAnimation(Component: React.FC) {
    return () => (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex h-screen w-screen justify-center items-center"
            >
            <Component />
        </motion.main>
    )
}