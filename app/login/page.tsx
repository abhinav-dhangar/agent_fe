"use client";
import MaskBg from "@/widgets/MaskBg";
import { motion } from "motion/react";
import MaskedBlock from "@/widgets/MaskedBlock";

export default function App() {
  return (
    <div>
      {/* Background */}
      <div className="absolute h-full w-full z-[-1]">
        <MaskBg />
      </div>

      {/* Responsive auto-fit grid, max 3 columns */}
      {/* <div className="relative z-[1] grid grid-cols-[repeat(auto-fit,minmax(200px,max(33.33%,1fr)))] gap-[1px] w-full">
       
      </div> */}
      <div className="w-[76%]">

        <div className="relative z-[1] grid w-full gap-[1px] grid-rows-[auto] auto-cols-fr 
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <MaskedBlock />
          <MaskedBlock />
          <MaskedBlock />
          <MaskedBlock />
        </div>
      </div>
    </div>
  );
}
