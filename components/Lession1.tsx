"use client"

import { easeInOut, motion } from 'motion/react'


export default function Component1() {


    return (

        <motion.button
            initial={{
                boxShadow: "0px 20px 30px rgba(8,112,184,0.1)"
            }}
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 20px 50px rgba(8,112,184,0.5)"
            }}
            whileTap={{
                scale: 0.99,
                boxShadow: "0px 20px 50px rgba(8,112,184,1)",
            }}
            transition={{
                duration: 0.05,
            }}
            className="[prespective::1000px] transform-3d group relative px-12 py-4 text-neutral-500 bg-black rounded-lg
        shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1_inset)]
        hover:text-cyan-500 transition-colours duration-300 ">
            Hello World
            <span className="absolute inset-x-0 bottom-px 
        bg-gradient-to-r from-transparent via-cyan-500 to-transparent 
        h-[2px] w-full mx-auto opacity-30 
        group-hover:opacity-100 transition-opacity duration-300 
         "></span>
        </motion.button>

    )
}

// Basic motion.div apis:


//     <motion.div>
//         initial={{
//             rotate: 0,
//         }} 
//         animate={{
//             rotate: [0,10,0],
//         }}
//         transition={{
//             duration: 1,
//             ease: easeInOut
//         }}
//     </motion.div>


//main props used 90% time:

// initial(())
// animate{{}}
// exit{{}}