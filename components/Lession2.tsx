"use client"

import Image from "next/image"
import nextLogo from "../public/globe.svg"
import { cn } from "@/lib/utils"
import { CrossIcon, Globe, MessageSquareIcon, ViewIcon, XIcon } from "lucide-react"
import { useState } from "react"

import {AnimatePresence, motion} from "motion/react"






export default function Lession2(){

    const [isOpen, setIsOpen] = useState(true)


    return(

        <div className={cn("w-72 min-h-[26rem] text-black rounded-xl bg-white p-4 flex flex-col shadow shadow-2xl ")}>
            <h2 className="font-bold text-[10px]">Aceternity UI Components</h2>
            <p className="mt-2 text-[10px] text-neutral-600">A collection if beautiful UI compoennts, let's get on with it</p>

            <div className="flex items-center justify-center">
            <button className="flex items-center justify-center gap-1 text-[10px] mt-4 rounded-md shadow-md px-2 py-1">
                <Globe className="w-4 h-4" fill="gray" strokeWidth={1}/>
                Aceternity
                <XIcon onClick={()=> setIsOpen(false)} className="h-4 w-4 text-neutral-400"/>
            </button>
            </div>
            <div className="relative flex-1 bg-gray-100 mt-4 rounded-lg border border-dashed border-neutral-200">


            <AnimatePresence>
                {isOpen &&
                <motion.div
                 
                exit={{
                    opacity: 0,
                    scale: 0.98,
                    filter: 'blur(1px)'
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut'
                }}
                
                
                
                className="flex flex-col items-center absolute inset-0 h-full w-full rounded-lg divide-y divide-neutral-200 bg-white">

                    <div className="gap-2  bg-white rounded-md flex items-center justify-start w-full h-full px-4">
                       <div className="shadow-md p-2 rounded-lg bg-white">
                       <MessageSquareIcon className="h-4 w-4 text-neutral-600"/>
                       </div>
                       <div className="flex flex-col justify-center items-start ">
                       <a className="text-[10px] font-bold"> Aceternity UI components</a>
                       <a className="text-[10px] text-neutral-400">A collection of UI components</a>
                       </div>
                    </div>
                                        <div className="gap-2  bg-white rounded-md flex items-center justify-start w-full h-full px-4">
                       <div className="shadow-md p-2 rounded-lg bg-white">
                       <MessageSquareIcon className="h-4 w-4 text-neutral-600"/>
                       </div>
                       <div className="flex flex-col justify-center items-start ">
                       <a className="text-[10px] font-bold"> Aceternity UI components</a>
                       <a className="text-[10px] text-neutral-400">A collection of UI components</a>
                       </div>
                    </div>
                                        <div className="gap-2  bg-white rounded-md flex items-center justify-start w-full h-full px-4">
                       <div className="shadow-md p-2 rounded-lg bg-white">
                       <MessageSquareIcon className="h-4 w-4 text-neutral-600"/>
                       </div>
                       <div className="flex flex-col justify-center items-start ">
                       <a className="text-[10px] font-bold"> Aceternity UI components</a>
                       <a className="text-[10px] text-neutral-400">A collection of UI components</a>
                       </div>
                    </div>
                                        <div className="gap-2  bg-white rounded-md flex items-center justify-start w-full h-full px-4">
                       <div className="shadow-md p-2 rounded-lg bg-white">
                       <MessageSquareIcon className="h-4 w-4 text-neutral-600"/>
                       </div>
                       <div className="flex flex-col justify-center items-start ">
                       <a className="text-[10px] font-bold"> Aceternity UI components</a>
                       <a className="text-[10px] text-neutral-400">A collection of UI components</a>
                       </div>
                    </div>
                </motion.div>}
                </AnimatePresence>
            </div>
        </div>

    ) 
}


