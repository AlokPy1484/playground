"use client"

import ScrollParallaxCard from "./scrollParallaxCard"
import { projects } from "./data"
import { useRef } from "react"
import { useScroll } from "motion/react"




export default function page() {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end']
    })


    return (
        <div ref={ref} className="flex flex-col justify-center items-center gap-8 w-screen h-full mt-80">
            {projects.map((card, idx) => {
                const targetScale = 1 - ((projects.length) - idx * 0.05)
                return <ScrollParallaxCard color={card.color} i={idx} range={[idx * 0.25, 1]} targetScale={targetScale} progress={scrollYProgress} />
            })}
        </div>
    )
}