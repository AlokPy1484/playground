"use client"
import { useRef, useState } from "react"
import { motion, useMotionValue, useTransform } from "motion/react"





export default function MagneticLayoutButton(props) {


    const [hovered, setHovered] = useState<Number | null>(null)
    const Buttons = props.array

    const spanRef = useRef<HTMLButtonElement>(null)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const mouseMove = (e) => {
        if (!spanRef.current) return
        const { clientX, clientY } = e
        const { width, height, left, top } = spanRef.current.getBoundingClientRect()
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        mouseX.set(x)
        mouseY.set(y)
    }
    const XPos = useTransform(mouseX, [-100, 100], [-20, 20])
    const YPos = useTransform(mouseY, [-100, 100], [-20, 20])



    const mouseLeave = () => {
        const XPos = 0
        const YPos = 0
    }

    return (
        <div
            onMouseLeave={() => setHovered(null)}
            className="flex justify-center items-center gap-4 text-neutral-200">
            {
                Buttons.map((button, idx) => (
                    <button
                        onMouseEnter={() => setHovered(idx)}
                        className="relative flex justify-center items-center rounded-md px-4 py-2 gap-2 ">
                        {button.icon}
                        <a className="text-sm">{button.lable}</a>
                        {hovered == idx &&
                            <motion.span
                                ref={spanRef}
                                onMouseMove={mouseMove}
                                onMouseLeave={mouseLeave}
                                style={{
                                    x: XPos,
                                    y: YPos
                                }}
                                layoutId="hover"
                                className="absolute inset-0 w-full h-full bg-neutral-400/10 rounded-md"></motion.span>}
                    </button>))}
        </div>
    )
}