"use client"
import { ShoppingCart, CircleUserRound } from "lucide-react"
import { motion } from "motion/react"
const Navbar = () => {

    return (
        <div className="w-full h-16 flex items-center justify-between px-4">
            <h1 className="wes   text-3xl">AGUST</h1>
            <div className="flex myron text-xl font-semibold gap-4">
                <motion.button >Home</motion.button>
                <motion.button>Product</motion.button>
                <motion.button>About Us</motion.button>
                <motion.button>Privacy Policy</motion.button>
            </div>
            <div className="flex gap-4">
                <button><CircleUserRound /></button>
                <button><ShoppingCart /></button>
            </div>
        </div>
    )

}



export default Navbar