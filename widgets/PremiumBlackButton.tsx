"use client"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

const MotionButton = motion(Button)
const   BlackButton = () => {

    return (
        <div className="relative">

            <MotionButton whileHover={{rotate:-5 }}
            style={{transformOrigin:"bottom left"}}
                // whileTap={{ scale: 0.75 }}  
                transition={{ duration: 0.2 }} variant={"outline"} className="absolute z-[2] border-black   " >
                Testing
            </MotionButton>
            <div className="absolute bg-black h-9 px-4 py-2 has-[>svg]:px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">Testing</div>
        </div>
    )
}


export default BlackButton