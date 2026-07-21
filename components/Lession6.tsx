"use client"

import { motion, stagger, useAnimate } from "motion/react"
import { useEffect } from "react"



const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error explicabo autem dolorem porro ullam saepe nostrum velit, voluptates libero accusantium voluptatibus iusto labore "


export default function Lession6() {

    const [scope, animate] = useAnimate()


    const startAnimating = () => {
        animate("span", {
            opacity: 1,
            filter: "blur(0px)",
            y: 0
        },
            {
                duration: 0.4,
                ease: "easeInOut",
                delay: stagger(0.05)

            }
        )
    }


    useEffect(() => {
        startAnimating()
    }, [])



    return (
        <div
            ref={scope}
            className="mx-auto max-w-4xl text-4xl text-white">
            {/* <motion.span

                style={{
                    opacity: 0
                }}
                className="text-white max-w-4xl max-auto font-bold text-4xl p-10">
                {text}
            </motion.span> */}
            {text.split(" ").map((word, index) => (
                <motion.span
                    style={{
                        opacity: 0,
                        filter: "blur(10px)",
                        y: 10
                    }}
                    key={word + index}
                    className="inline-block px-2"
                >
                    {word + " "}
                </motion.span>))}
        </div>
    )
}