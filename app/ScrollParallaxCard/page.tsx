"use client"

import ScrollParallaxCard from "./scrollParallaxCard"
import { projects } from "./data"
import { useEffect, useRef } from "react"
import { useScroll } from "motion/react"
import { LightRays } from "@/components/ui/light-rays"
import ReactLenis from "lenis/react"




export default function page() {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end']
    })

    useEffect(() => {
        scrollYProgress.on('change', e => console.log(scrollYProgress.current))
    }, [])




    return (
        <div ref={ref} className="relative flex flex-col justify-center items-center gap-8 w-screen h-full pt-80 bg-none bg-neutral-900">
            <ReactLenis root />
            {projects.map((card, idx) => {
                const targetScale = 1 - ((projects.length - idx) * 0.04)
                return <ScrollParallaxCard key={idx} color={card.color} src={card.src} i={idx} range={[idx * 0.25, 1]} targetScale={targetScale} progress={scrollYProgress} />

            })}
            <LightRays />
        </div>
    )
}

