"use client"

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";




export default function ScrollParallaxCard({ i, color, progress, range, targetScale, src }) {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })


    // converting 0 - 1 of scrollY to 2 - 1 numeric value, which can later be used with scale
    const scale = useTransform(scrollYProgress, [0, 1], [2, 1])

    const mainScale = useTransform(progress, range, [1, targetScale])

    return (
        //Card Container
        <div ref={ref} className="sticky top-0 h-screen z-[9999]">

            {/* Card Div */}
            <motion.div className="relative flex justify-center items-center overflow-hidden rounded-4xl p-2 backdrop-blur-xs border-1 border-neutral-700"
                style={{
                    top: `calc(10vh + ${i * 30}px)`,
                    scale: mainScale

                }}>

                {/* Image Wrapper */}
                <div className="relative w-[980px] h-[480px] overflow-hidden rounded-3xl">

                    {/* Prallax Image Container */}
                    <motion.div
                        style={{ scale }}
                        className="relative object-cover overflow-hidden w-full h-full">
                        <Image unoptimized src={src} alt="image" fill className="object-cover" />
                    </motion.div>
                </div>

            </motion.div>
        </div>
    )
}