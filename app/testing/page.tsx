"use client"
import RoundedImage from "@/widgets/Image"
import "./style.css"
import Navbar from "@/widgets/Navbar"
import BlackButton from "@/widgets/PremiumBlackButton"
import { DemoOne } from "@/widgets/whatsapp/Input"
import { HeroTitle } from "@/widgets/HeroTitle"
import { Hero } from "@/components/ui/animated-hero"
import { SpinningText } from "@/components/ui/spinning-text"
export default function Page() {
    return (
        <div>
            <Navbar />
            {/* <HeroTitle /> */}
            <Hero />
            <div className="absolute top-9 left-[70px]">

                <SpinningText
                    radius={7}
                    fontSize={1}
                    transition={{ ease: "easeInOut", repeat: Infinity }}

                >
                    {`•AGUST •A.I. Workflow •AGent `}
                </SpinningText>
            </div>
            {/* <BlackButton /> */}
            <DemoOne />
            <div className="relative">
                
                <div className="absolute rotate-3 items-center justify-center flex gap-2 w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RoundedImage   src={"/urvashi.jpg"} className="top-[80px] " deg={-14} />
                    <RoundedImage src={"/urvashi.jpg"} deg={-7} className="top-[35px] right-[47px]" />
                    <RoundedImage src={"/urvashi.jpg"} deg={-4} className="top-[41px] right-[84px]" />
                    <RoundedImage src={"/urvashi.jpg"} deg={3} className="top-[6px] right-[124px]" />
                    <RoundedImage src={"/urvashi.jpg"} deg={7} className="top-[38px] right-[150px]" />
                </div>

{/* 
                <div className="absolute rotate-3 flex gap-2 w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <RoundedImage src="/urvashi.jpg" className="top-[80px]" deg={-14} delay={0} />
                <RoundedImage src="/urvashi.jpg" className="top-[35px] right-[47px]" deg={-7} delay={0.1} />
                <RoundedImage src="/urvashi.jpg" className="top-[41px] right-[84px]" deg={-4} delay={0.2} />
                <RoundedImage src="/urvashi.jpg" className="top-[6px] right-[124px]" deg={3} delay={0.3} />
                <RoundedImage src="/urvashi.jpg" className="top-[38px] right-[150px]" deg={7} delay={0.4} />
                </div> */}

            </div>
        </div>
    )
}