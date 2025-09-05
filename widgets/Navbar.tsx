"use client"
import { LetterSwapForward } from "@/components/ui/letter-swap"
import { ShoppingCart, CircleUserRound } from "lucide-react"
import { motion } from "motion/react"
import { ProfileButton } from "./ProfileButton"

const Navbar = () => {

    return (
        <div className="w-full h-16 flex items-center justify-between px-4">
            <h1 className="wes  pl-[20px] items-center text-3xl">AGUST</h1>
            <div className="flex myron text-xl font-semibold gap-4">
                <motion.button >
                    <LetterSwapForward
                        label="Home"
                        reverse={false} />
                </motion.button>
                <motion.button>
                    <LetterSwapForward
                        label="Agents"
                        reverse={false} /></motion.button>
                <motion.button>
                    <LetterSwapForward
                        label="About Us"
                        reverse={false} /></motion.button>
                <motion.button>
                    <LetterSwapForward
                        label="Privacy Poilcy"
                        reverse={false} /></motion.button>
            </div>
            <div className="flex items-center gap-4 mr-[20px]">
            <ProfileButton/>
            </div>
        </div>
    )

}



export default Navbar