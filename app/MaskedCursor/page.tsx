"use client"

import { MousePointer } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import FluidGlass from "@/components/FluidGlass"



export default function page() {




    const useMousePosition = () => {
        const [mousePosition, setMousePosition] = useState({ x: null, y: null })

        const updateMousePosition = e => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        useEffect(() => {
            window.addEventListener("mousemove", updateMousePosition)

            return () => {
                window.removeEventListener("mousemove", updateMousePosition)
            }
        }, [])

        return mousePosition
    }



    const [isHovering, setIsHovering] = useState(false)

    const scale = isHovering ? 200 : 10
    const { x, y } = useMousePosition()

    return (
        <div
            className="relative h-screen w-screen bg-neutral-900">

            {/* First layer */}
            <p className="absolute left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 text-2xl text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat
                doloribus delectus quod, eaque magni obcaecati modi, saepe rerum voluptas
                porro, rem consequatur odio numquam cum facilis blanditiis repellendus odit!
            </p>

            {/* Second layer */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    maskPosition: `${x - (scale / 2)}px ${y - (scale / 2)}px`,
                    maskSize: `${scale}px`,
                }}
                style={{
                    maskImage: "url('/mask.svg')",
                    WebkitMaskImage: "url('/mask.svg')",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    background: "#ec4e39",
                }}
            >
                <p
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="absolute left-1/2 top-[calc(50%-12px)] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 leading-8 text-2xl text-white">
                    यह एक सामान्य परीक्षण पाठ है, जिसका उपयोग वेबसाइट के डिज़ाइन, लेआउट और टाइपोग्राफी को देखने के लिए किया जाता है। यह वास्तविक सामग्री नहीं है, केवल प्रदर्शन हेतु है।
                </p>
            </motion.div>

        </div >
    )
}



