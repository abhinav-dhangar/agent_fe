"use client"
import { motion } from "motion/react"
type Props = {
    userName: string,
    role: string,
    cgpa: string,
    src?: string

}
export default function App({ userName, role, cgpa, src }: Props) {
    const variants = {
        initial: { top: "-100%" },
        hover: { top: "0%" },
    };

    return (
        <motion.div
            className="relative text-[#2448bf]   bg-[#f6f5ff] aspect-[4/3] w-[calc(100%+2px)] m-[-1px] border-blue-700 border-1 overflow-hidden cursor-pointer"
            initial="initial"
            whileHover="hover"
        >
            {/* 1) Background layer (under everything) */}
            <div className="absolute inset-0 z-0 bg-[#f6f5ff" />

            {/* 2) Overlay — above the blue background but below text.
          pointer-events-none lets clicks/hover pass through to parent/text. */}
            <motion.div
                className="absolute left-0 w-full h-full z-10 pointer-events-none"
                variants={variants}
                transition={{ duration: 0.28, ease: "circInOut" }}
                style={{ position: "absolute" }} // ensure top works
            >
                <div className="w-full h-full bg-[#d6dbf5]" />
            </motion.div>

            {/* 3) Content/text — always on top */}
            <div className="relative z-20 flex flex-col  p-6 md:p-10  justify-between h-full">
                <span id="userName" className=" shavanshi_rajdhani text-3xl md:text-4xl">
                    {userName}
                </span>
                <div className="flex flex-col items-start">
                    <span id="role" className=" safeya text-xl md:text-2xl ">{role}</span>
                    <span id="CGPA" className="">
                        CGPA : {cgpa}</span>
                </div>
            </div>
        </motion.div>
    )
}
