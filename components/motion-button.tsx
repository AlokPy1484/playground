"use client"
import {color, motion, scale} from "motion/react"










export default function MotionButton(){

    const parentVarient = {
        initial: {
            scale: 1
        },
        hover: {
            scale: 1.1
        }
    }

    const childVarient = {
        initial: {
                rotate: -30,
                translateY: "-80px",
                translateX: "-20px"
            },
        hover: {
                rotate: 0,
                translateY: 0,
                translateX: 0
            }

    }

    const textVarient = {
        initial: {
            color: "#ffffff"
            
        },
        hover: {
            color: "#000000"
        }
    }
    



    return(

   
        <div className="group relative flex justify-center items-center w-43 h-10 ">
{/* Top Left */}
<span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white opacity-0 group-hover:translate-x-[-6px] group-hover:translate-y-[-2px] group-hover:opacity-100 transition-all ease-in-out duration-400" />

{/* Top Right */}
<span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white opacity-0 group-hover:translate-x-[6px] group-hover:translate-y-[-2px] group-hover:opacity-100 transition-all ease-in-out duration-400" />

{/* Bottom Left */}
<span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white opacity-0 group-hover:translate-x-[-6px] group-hover:translate-y-[2px] group-hover:opacity-100 transition-all ease-in-out duration-400" />

{/* Bottom Right */}
<span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white opacity-0 group-hover:translate-x-[6px] group-hover:translate-y-[2px] group-hover:opacity-100 transition-all ease-in-out duration-400" />

            
        <motion.div
        variants={parentVarient}
        initial="initial"
        whileHover="hover"
        transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}

        
        className=" relative flex w-40 h-8 justify-center items-center bg-black text-sm  text-white overflow-hidden"
          style={{
        backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 1px, transparent 1px, transparent 8px) ",
        }}>
            

            <motion.span
            variants={childVarient}

            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}

            
            className="absolute inset-0 w-full h-full bg-white"/>

            <motion.div 
            variants={textVarient}
            className="relative z-10 text-xl">Hover Over Me</motion.div>

        </motion.div>
        </div>


    )
}