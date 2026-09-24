"use client"
import { useScroll, useTransform, motion, easeInOut, useSpring, MotionValue } from "motion/react"
import { useEffect, useRef } from "react"





export default function Characters({ value }: { value: string }) {

    const element = useRef(null)

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.5", "end 0.5"]
    })

    const scrollOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    useEffect(() => {
        const scrollLog = scrollYProgress.on("change", e => console.log(e))

        return () => scrollLog()
    }, [scrollYProgress])

    const words = value.split(" ")

    return (
        <p
            className="flex flex-wrap justify-start items-center gap-8 w-full  text-8xl leading-24 font-mono px-12 text-neutral-900"
            ref={element}
        >

            {words.map((word, i) => {

                const start = i / words.length;
                const end = start + (1 / words.length);

                return <Word key={i} range={[start, end]} progress={scrollYProgress} >{word}</Word>


            })}
        </p>
    )
}


const Word = ({ children, i, progress, range }: { i: number, progress: MotionValue<number>, range: number[] }) => {

    const character = children.split("")

    const amount = range[1] - range[0]
    const step = amount / children.length

    return (
        <span
            className="flex flex-wrap justify-start items-center" key={i}>
            {
                character.map((char, i) => {
                    const start = range[0] + (i * step)
                    const end = range[0] + (step * (i + 1))
                    return (
                        <Character key={i} range={[start, end]} progress={progress}>{char}</Character>
                    )
                })
            }
        </span>
    )
}



const Character = ({ children, i, progress, range }: { i: number, progress: MotionValue<number>, range: number[], children: React.ReactNode }) => {

    const opacity = useTransform(progress, range, [0.2, 1], { ease: easeInOut })

    return (
        <motion.span
            style={{ opacity }}
            className=""
            key={i}>
            {children}
        </motion.span>
    )
}