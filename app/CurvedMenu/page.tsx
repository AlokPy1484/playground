"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"



export default function page() {

    const [isOpen, setIsOpen] = useState<Boolean>(false)

    const toggleOpen = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className="relative flex justify-center items-center w-screen h-screen font-mono">
            <Header toggleOpen={toggleOpen} isOpen={isOpen} />

            <AnimatePresence>
                {isOpen && <NavMenu />}
            </AnimatePresence>

        </div>
    )
}



export function Header({ toggleOpen, isOpen }) {



    return (
        <div className="absolute top-8 right-8 flex flex-col justify-center items-center bg-red-500 rounded-full w-12 h-12 z-100">

            <div
                onClick={toggleOpen}
                className="relative flex flex-col justify-center items-center w-full h-full ">
                <span
                    style={{
                        translate: isOpen ? "0 0" : "0 -4px",
                        rotate: isOpen ? "45deg" : "0deg",

                    }}
                    className="absolute top-1/2  bg-white h-[1px] w-[30px] transition-transform duration-300 ease-in-out"></span>
                <span
                    style={{
                        translate: isOpen ? "0 0" : "0 4px",
                        rotate: isOpen ? "-45deg" : "0deg",
                    }}
                    className="absolute top-1/2  bg-white h-[1px] w-[30px] transition-transform duration-300 ease-in-out"></span>
            </div>
        </div>
    )
}



export function NavMenu() {

    const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
    const animatedPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`


    return (


        <motion.div
            initial={{
                x: 400
            }}
            animate={{
                x: 0
            }}
            exit={{
                x: 400
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            className="absolute top-0 right-0 flex flex-col justify-between items-start  w-[300px] h-full pt-28 pb-16 px-8  bg-neutral-800">
            <svg className="absolute top-0 right-[300px] w-[100px] h-full fill-neutral-800" >
                <motion.path
                    initial={{ d: initialPath }}
                    animate={{ d: animatedPath }}
                    exit={{ d: initialPath }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}

                >

                </motion.path>
            </svg>
            <div className="header flex flex-col justify-start items-start w-full gap-8">
                <span className="flex flex-col justify-start gap-1 w-full border-b border-neutral-600">
                    <a className="text-xs uppercase font-mono text-neutral-600 py-4">navigation</a>
                </span>

                <div className="flex flex-col justify-start items-start w-full gap-4">
                    {["Home", "Work", "About", "Contact"].map((item, idx) => (
                        <button className="text-3xl text-white">{item}</button>
                    ))}
                </div>
            </div>

            <div className="footer flex justify-between items-center w-full">
                {["Awwwards", "Dribble", "Instagram", "LinkedIn"].map((item, idx) => (
                    <a key={idx} className="text-[8px] text-neutral-600">{item}</a>
                ))}
            </div>


        </motion.div>
    )

}