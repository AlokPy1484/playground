"use client"
import { useScroll, useTransform, motion } from "motion/react"
import { useEffect, useRef } from "react"





export default function Paragraph({ value }: { value: string }) {

    const element = useRef(null)

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"]
    })

    const scrollOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    useEffect(() => {
        const scrollLog = scrollYProgress.on("change", e => console.log(e))

        return () => scrollLog()
    }, [scrollYProgress])

    return (
        <motion.p
            ref={element}
            style={{ opacity: scrollOpacity }}
            className="max-w-3xl text-2xl mx-12 text-neutral-100">
            {value}
        </motion.p>
    )
}