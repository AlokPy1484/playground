"use client"
import { useScroll, useTransform, motion, easeInOut, useSpring, MotionValue } from "motion/react"
import { useEffect, useRef } from "react"





export default function Words({ value }: { value: string }) {

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

    const words = value.split(" ")

    return (
        <p
            ref={element}
            className="flex flex-wrap justify-start items-center gap-2 w-full max-w-3xl text-2xl leading-4 mx-12 text-neutral-100">

            {words.map((word, i) => {

                const start = i / words.length;
                const end = start + (1 / words.length);

                return <Word key={i} range={[start, end]} progress={scrollYProgress} >{word}</Word>


            })}
        </p>
    )
}


const Word = ({ children, i, progress, range }: { children: React.ReactNode, i: number, progress: MotionValue<number>, range: number[] }) => {

    const opacity = useTransform(progress, range, [0.2, 1], { ease: easeInOut })


    return (
        <motion.span
            style={{ opacity }}
            className="" key={i}>
            {children}
        </motion.span>
    )
}