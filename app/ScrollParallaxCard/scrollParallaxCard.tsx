"use client"

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";







export default function ScrollParallaxCard({ i, color, progress, range, targetScale }) {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [2, 1])

    const mainScale = useTransform(progress, range, [1, targetScale])

    return (
        <div ref={ref} className="sticky top-0 h-screen">
            <motion.div className="relative flex justify-center items-center w-[1000px] h-[500px] rounded-4xl"
                style={{
                    backgroundColor: color,
                    top: `calc(10vh + ${i * 25}px)`,
                    scale: mainScale
                }}>
                <div className="object-cover overflow-hidden rounded-3xl">
                    <motion.div
                        style={{ scale }}
                    >
                        <Image unoptimized src={"https://placehold.co/980x480"} alt="image" width={980} height={480} />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}