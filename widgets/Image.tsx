import React from "react";
import clsx from "clsx";
import { motion } from "motion/react"

type RoundedImageProps = {
    className?: string;
    deg?: number; // rotation degree
    src: string
};

const RoundedImage: React.FC<RoundedImageProps> = ({ src, className, deg = 0 }) => {
    return (
        <motion.div className={clsx("relative w-[200px] h-[250px] drop-shadow-lg", className)}>
            <span className="absolute right-[10px] top-[10px] bg-yellow-200 rounded-full px-1">
                testing
            </span>
            <img
                className="rounded-[6px] h-full object-cover shadow-lg"
                src={src}
                alt="Rounded"
                style={{ transform: `rotate(${deg}deg)` }}
            />
        </motion.div>
    );
};

export default RoundedImage;