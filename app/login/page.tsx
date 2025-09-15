"use client";
import MaskBg from "@/widgets/MaskBg";
import { motion } from "motion/react";
import MaskedBlock from "@/widgets/MaskedBlock";

export default function App() {
  return (
    <motion.div>
      {/* Background */}
      <div className="absolute h-full w-full z-[-1]">
        <MaskBg />
      </div>

      {/* Responsive auto-fit grid, max 3 columns */}
      {/* <div className="relative z-[1] grid grid-cols-[repeat(auto-fit,minmax(200px,max(33.33%,1fr)))] gap-[1px] w-full">
       
      </div> */}
      <div className="relative z-[1] flex w-full h-screen  justify-center items-center">


        <div className="w-[76%] h-fit">

          <div className="relative z-[1] grid w-full gap-[1px] grid-rows-[auto] auto-cols-fr 
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <MaskedBlock cgpa="8.2" userName="Gausul Wara Imam" role="Backend Dev" />
            <MaskedBlock cgpa="8.1" userName="Tanzeela Sami" role="DevOps" />
            <MaskedBlock cgpa="8.3" userName="Srashti Katiyar" role="Ui/Ux" />
            <MaskedBlock cgpa="5.8" userName="Abhinav Dhangar" role="Ai Integration" />
            <MaskedBlock cgpa="8.1" userName="Urvashi Sachan" role="Frontend Dev" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
