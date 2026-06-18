"use client"

import {motion} from "motion/react"



type BtnProps = {
    varient: string
    children: React.ReactNode
}

export default function PortfolioButton({children, varient}: BtnProps){




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
                translateY: "-90px",
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
        <motion.div
        
        variants={parentVarient}
        initial="initial"
        whileHover="hover"
        transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
        
        className="group relative flex justify-center items-center m-1">

            {varient === "outline" &&
            <div>
            <span className="absolute -top-px -left-px border-t border-l dark:border-white   w-2 h-2 group-hover:translate-[-4px] trnasition-transform ease-in-out duration-300"/>
            <span className="absolute -top-px -right-px border-t border-r dark:border-white w-2 h-2 group-hover:translate-x-[4px] group-hover:translate-y-[-4px] trnasition-transform ease-in-out duration-300"/>
            <span className="absolute -bottom-px -right-px border-b border-r dark:border-white w-2 h-2 group-hover:translate-x-[4px] group-hover:translate-y-[4px] trnasition-transform ease-in-out duration-300"/>
            <span className="absolute -bottom-px -left-px border-b border-l dark:border-white w-2 h-2 group-hover:translate-x-[-4px] group-hover:translate-y-[4px] trnasition-transform ease-in-out duration-300"/>
            </div>}
        <div className="relative flex justify-center items-center px-4 py-2 text-white bg-black overflow-hidden"
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
            className="relative z-10 bg-transparent text-sm">
               {children}
                </motion.div>

        </div>
        </motion.div>

    )


}