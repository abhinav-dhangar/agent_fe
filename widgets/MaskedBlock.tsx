"use client"
import { motion } from "motion/react"



export default function App() {


    return (

        <motion.div
            className="relative text-yellow-200 bg-[#f6f5ff] aspect-[4/3] w-[calc(100%+2px)] m-[-1px ]  border-blue-700 border-2 overflow-hidden cursor-pointer"
            initial="initial"
            whileHover="hover"
        >
            {/* Yellow overlay that slides down on hover */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#d6dbf5] z-10"
                variants={{
                    initial: { y: "-100%" },
                    hover: { y: "0%" }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            />
            sdfkalj

            {/* Optional content inside the box */}
            <div className="relative z-20 flex items-center justify-center h-full">
                {/* Add any content here if needed */}
            </div>
        </motion.div>
    )
}