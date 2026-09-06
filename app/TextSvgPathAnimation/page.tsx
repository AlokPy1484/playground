"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef } from "react"
import { text } from "stream/consumers"





export default function page() {




    return (
        <div className="flex justify-center items-center w-screen h-[300vh]">

            <PathFooter />

        </div >

    )
}




export function PathFooter() {
    const ref = useRef(null)
    const textRef = useRef([])

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })




    useEffect(() => {
        if (!ref.current) return

        // We are using 0 to -100 because we are going backwards
        scrollYProgress.on("change", e => {
            // ref.current?.setAttribute('startOffset', e * 100 + "%")
            // console.log(e * 100 + "%")
            textRef.current.forEach((text, i) => {
                text.setAttribute("startOffset", -40 + (i * 25) + (e * 60) + "%")
            })

            console.log(e)
        })
    })

    return (
        <div ref={ref} className="flex justify-center items-center w-full">
            <svg className="w-full mb-40 " viewBox="0 0 250 90">
                <path id="path" fill="none" stroke="" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68" />
                <text className="text-[6px]">
                    {
                        [...Array(6)].map((_, i) => {
                            return <textPath
                                ref={ref => textRef.current[i] = ref}
                                startOffset={i * 20 + "%"} href="#path" className="uppercase" >
                                Lorem ipsum dolor
                            </textPath>
                        })
                    }
                </text>
            </svg>

        </div >
    )
}