"use client"


import Image from "next/image";
import { motion } from "motion/react"


type buttonType = {
    logoLink: string,
    name: string
}


export default function StackButton(props: buttonType) {


    return (
        <motion.div

            initial={
                { width: 40 }
            }
            whileHover={{
                width: "auto"
            }}
            transition={{
                duration: 0.2,
                ease: "easeInOut"
            }}


            className="group flex justify-center items-center h-[40px]  overflow-hidden p-1 bg-neutral-900 border border-dashed border-neutral-700 border-[1px] rounded-lg gap-2 px-2 cursor-pointer">
            <Image src={props.logoLink} alt="logo" width={30} height={30} className=" rounded-full" />
            <motion.span
                className="font-light block opacity-0 group-hover:opacity-100 transition-all duration-300 text-[12px] whitespace-nowrap text-white">
                {props.name}</motion.span>
        </motion.div>
    )
}