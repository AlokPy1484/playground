"use client"
import { useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "motion/react"

export default function page() {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const scaleA = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scaleB = useTransform(scrollYProgress, [0, 1], [1, 2])
    const scaleC = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scaleD = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scaleE = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scaleF = useTransform(scrollYProgress, [0, 1], [1, 9])

    return (
        <div ref={ref} className="relative flex justify-center items-center w-screen h-[300vh] bg-neutral-900">
            <div className="sticky top-0  flex justify-center items-center h-[100vh]  bg-neutral-800 ">





                <div className="container absolute inset-0 flex justify-center items-center w-full h-full">
                    <div className="relative flex justify-center items-center  w-[38vw] h-[15vw] bg-red-400 ">
                        <Image src="https://placehold.co/600x400" alt="image" fill unoptimized className=" object-cover" />
                    </div>
                </div>

                <motion.div style={{ scale: scaleA }} className="a absolute top-[2vh] left-[25vw] w-full h-full">
                    <div className="relative flex justify-center items-center w-[38vw] h-[15vw] bg-red-400 ">
                        <Image src="https://placehold.co/600x400" alt="image" fill unoptimized className=" object-cover" />
                    </div>
                </motion.div>
                {/* 

                <motion.div style={{ scale: scaleB }} className="b absolute top-[35vh]  w-full h-full">
                    <div className="relative flex justify-center items-center w-[25vw] h-[15vw] bg-red-400 ">
                        <Image src="https://placehold.co/600x400" alt="image" fill unoptimized className=" object-cover" />
                    </div>
                </motion.div>

                <motion.div style={{ scale: scaleC }} className="c absolute left-[37vw] bottom-[8vh]  w-full h-full">
                    <div className="relative flex justify-center items-center w-[20vw] h-[12vw] bg-red-400 ">
                        <Image src="https://placehold.co/600x400" alt="image" fill unoptimized className=" object-cover" />
                    </div>
                </motion.div>

                <motion.div style={{ scale: scaleD }} className="d absolute right-[20vw] bottom-[35vh]  w-full h-full">
                    <div className="relative flex justify-center items-center w-[15vw] h-[30vw] bg-red-400 ">
                        <Image src="https://placehold.co/600x400" alt="image" fill unoptimized className=" object-cover" />
                    </div>
                </motion.div>

                <motion.div style={{ scale: scaleE }} className="e absolute left-[20vw] top-[35vh]  w-full h-full">
                    <div className="relative flex justify-center items-center w-[15vw] h-[30vw] bg-red-400 ">
                        <Image src="https://placehold.co/600x400" alt="image" fill unoptimized className=" object-cover" />
                    </div>
                </motion.div>

                <motion.div style={{ scale: scaleF }} className="f absolute right-[22vw] top-[67vh]  w-full h-full">
                    <div className="relative flex justify-center items-center w-[20vw] h-[15vw] bg-red-400 ">
                        <Image src="https://placehold.co/600x400" alt="image" fill unoptimized className=" object-cover" />
                    </div>
                </motion.div> */}

            </div>

        </div>
    )
}