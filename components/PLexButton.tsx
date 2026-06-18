"use client"


import {motion} from "motion/react"


export default function PLexButton(){



    return(

        <motion.button

        whileTap={{
    
            scale: 0.95,
            boxShadow: "0px 0px 35px rgba(255, 20, 20, 0.4)",
            borderColor: "rgba(255, 20, 20, 0.5)"
        }}
        whileHover={{
            boxShadow: "0px 10px 25px rgba(255, 20, 20, 0.2)",
            scale: 1.05,
            borderColor: "rgba(255, 20, 20, 0.2)"
        }}

        initial={{
            borderColor: "rgba(0,0,0)"
        }}
        transition={{
            duration: 0.05
        }}

            className="[prespective::1000px] transform-3d group relative px-12 py-4 text-neutral-500 bg-black rounded-lg
            border
        hover:text-red-500 transition-colours duration-300">
        Hello World
        <span className="absolute inset-x-0 bottom-px 
        bg-gradient-to-r from-transparent via-red-500 to-transparent 
        h-[2px] w-full mx-auto opacity-30 
        group-hover:opacity-100 transition-opacity duration-300 
         "></span>
        </motion.button>

    )
}