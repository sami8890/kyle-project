'use client'

import { motion } from "framer-motion"
import { UserCircle2 } from 'lucide-react'

export default function DataVisualization() {
    const circles = [
        { delay: 0.2, x: 0, y: -120 },
        { delay: 0.4, x: 104, y: -60 },
        { delay: 0.6, x: 104, y: 60 },
        { delay: 0.8, x: 0, y: 120 },
        { delay: 1, x: -104, y: 60 },
        { delay: 1.2, x: -104, y: -60 },
    ]

    return (
        <div className="relative h-[360px] w-[360px]">
            {circles.map((circle, index) => (
                <motion.div
                    key={index}
                    className="absolute left-1/2 top-1/2"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                        opacity: 1,
                        x: circle.x,
                        y: circle.y
                    }}
                    transition={{
                        duration: 0.8,
                        delay: circle.delay,
                        ease: "easeOut"
                    }}
                >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                        <UserCircle2 className="h-8 w-8 text-[#00B8D4]" />
                    </div>
                    {index % 2 === 0 && (
                        <motion.div
                            className="absolute left-16 top-1/2 h-2 w-28 -translate-y-1/2 rounded-full bg-white/30"
                            initial={{ width: 0 }}
                            animate={{ width: 112 }}
                            transition={{ delay: circle.delay + 0.3, duration: 0.5 }}
                        />
                    )}
                </motion.div>
            ))}
        </div>
    )
}

