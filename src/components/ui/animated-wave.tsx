'use client'

import { motion } from "framer-motion"

export default function AnimatedWave() {
    return (
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <motion.div
                className="relative h-16 w-[200%]"
                animate={{
                    x: [0, -1000],
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                }}
            >
                <svg
                    viewBox="0 0 2000 100"
                    className="absolute h-full w-full"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,50 C200,100 400,0 600,50 C800,100 1000,0 1200,50 C1400,100 1600,0 1800,50 L2000,50 L2000,100 L0,100 Z"
                        fill="#ffffff"
                    />
                </svg>
            </motion.div>
        </div>
    )
}

