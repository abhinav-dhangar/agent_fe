"use client"
import RoundedImage from "@/widgets/Image"
import "./style.css"
import Navbar from "@/widgets/Navbar"
import BlackButton from "@/widgets/PremiumBlackButton"
import { DemoOne } from "@/widgets/whatsapp/Input"
import { HeroTitle } from "@/widgets/HeroTitle"
import { FeaturesGuide } from "@/widgets/FeaturesGuide"
import { Hero } from "@/components/ui/animated-hero"
import { SpinningText } from "@/components/ui/spinning-text"
import LeftArrow from "@/public/svg/left_arrow.svg"
import RightArrow from "@/public/svg/right_arrow.svg"
import { Accordian } from "@/widgets/Accordian"
import Footer from "@/widgets/Footer"
export default function Page() {
    return (
        <div>
            <Navbar />
            {/* <HeroTitle /> */}
            <Hero />

            <LeftArrow className="text-black w-[100px] h-[100px] absolute" />
            <RightArrow className="text-black w-[100px] h-[100px] absolute" />
            <div className="my-10">
                <h1 className="text-4xl font-bold text-center mb-4">All-in-One AI Workflow & Agent Platform</h1>
                <p className="text-center w-[60%] mx-auto">this is Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus, maxime illo fugit, inventore consequuntur labore quis, id a architecto blanditiis! Fugiat?</p>
            </div>
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
            <FeaturesGuide />
            <div className="relative w-screen h-[310px] ">

                <div className="absolute rotate-3 items-center justify-center flex gap-2 w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RoundedImage src={"/pictures/red_flower.avif"} className="top-[80px] " deg={-14} />
                    <RoundedImage src={"/pictures/red_flower.avif"} deg={-7} className="top-[35px] right-[47px]" />
                    <RoundedImage src={"/pictures/red_flower.avif"} deg={-4} className="top-[41px] right-[84px]" />
                    <RoundedImage src={"/pictures/red_flower.avif"} deg={3} className="top-[6px] right-[124px]" />
                    <RoundedImage src={"/pictures/red_flower.avif"} deg={7} className="top-[38px] right-[150px]" />
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
            <div className="flex items-center justify-center my-20 mx-20 gap-20">
                <div className="w-[50%]">
                    <img src="/pictures/moons.jpg" alt="AI Workflow" className="rounded-lg shadow-lg" />
                </div>
                <Accordian />
            </div>
            <Footer/>
        </div>
    )
}