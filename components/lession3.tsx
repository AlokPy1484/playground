"use client"

import { cn } from "@/lib/utils";
import { ChartSpline, ChevronLeft, ChevronRight, Home, Settings, Sidebar, ToggleRight, User } from "lucide-react";
import { useState } from "react";
import { motion, stagger } from "motion/react"






export default function Lession3() {


    const MenuItems = [
        {
            name: "Home",
            icon: <Home />
        },
        {
            name: "Analytics",
            icon: <ChartSpline />
        },
        {
            name: "Users",
            icon: <User />
        },
        {
            name: "Settings",
            icon: <Settings />
        }
    ]


    const [open, setOpen] = useState(true)


    const sidebarVariant = {
        open: {
            width: "200px",
        },
        closed: {
            width: "50px",
        }
    }

    const childVariant = {
        open: {
            opacity: 1,
            y: 0
        },
        closed: {
            opacity: 0,
            y: -10
        }
    }

    const childHeaderVariant = {
        open: {
            opacity: 1,
            x: 0
        },
        closed: {
            opacity: 0,
            x: -10
        },
        transition: {
            duration: 0.1
        }
    }

    const parentVariant = {
        open: {
            transition: {
                staggerChildren: 0.05,
            }
        },
        closed: {
            transition: {
                delayChildren: stagger(0.05, { from: "last" }),
            }
        }
    }


    return (
        <div className="relative w-screen h-screen bg-white">
            <motion.div

                initial={false}
                animate={open ? "open" : "closed"}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            >
                <motion.div
                    variants={sidebarVariant}



                    className={cn("absolute inset-0 flex flex-col justify-start items-start gap-16 h-screen p-4 border-r  border-neutral-200")}>
                    <div className="flex justify-between items-center gap-4 w-full">
                        <motion.a variants={childHeaderVariant} className={cn("text-2xl", !open && "hidden")}>Dashboard</motion.a>
                        {/* <button onClick={() => setOpen(prev => !prev)}>


                        </button> */}

                    </div>
                    <motion.ul
                        variants={parentVariant}
                        className="flex flex-col justify-center items-start gap-8">
                        {MenuItems.map((item) => (

                            <motion.li
                                variants={childVariant}

                                className="flex justify-center item-center gap-4">
                                <a> {item.icon}</a>
                                <motion.a variants={childHeaderVariant}>{item.name}</motion.a>

                            </motion.li>
                        ))}
                    </motion.ul>

                    <div onClick={() => setOpen(prev => !prev)} className="flex justify-center items-center gap-4">
                        <a><Sidebar size={16} /></a>
                        {open && <a>Toggle Sidebar</a>}
                    </div>
                </motion.div>
            </motion.div>


        </div >
    )
}