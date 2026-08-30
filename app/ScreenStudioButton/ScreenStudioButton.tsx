"use client"

import { motion, spring, useAnimate, useMotionValue, useTransform } from "motion/react"
import { useRef, useState } from "react"

export default function ScreenStudioButton({
    children
}: {
    children: React.ReactNode
}) {
    const buttonRef = useRef<HTMLDivElement>(null)
    const spanRef = useRef<HTMLSpanElement>(null)

    const [scope, animate] = useAnimate()

    const [position, setPosition] = useState({ x: 0, y: 0 })

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const getMousePosition = (e: React.MouseEvent) => {
        if (!buttonRef.current) return { x: 0, y: 0 }

        const {
            width,
            height,
            left,
            top
        } = buttonRef.current.getBoundingClientRect()

        return {
            x: e.clientX - (left + width / 2),
            y: e.clientY - (top + height / 2)
        }
    }

    const handleMouseEnter = async (e: React.MouseEvent) => {
        const { x, y } = getMousePosition(e)

        // Put span exactly where mouse entered
        await animate(
            spanRef.current,
            {
                x,
                y,
                scale: 0.4,
                opacity: 0
            },
            {
                duration: 0
            }
        )

        // Animate from mouse position → center
        animate(
            spanRef.current,
            {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1
            },
            {
                duration: 0.2,
                ease: "easeOut"
            }
        )
    }

    const handleMouseLeave = (e: React.MouseEvent) => {
        const { x, y } = getMousePosition(e)

        // Animate from center → where mouse left
        animate(
            spanRef.current,
            {
                x,
                y,
                scale: 0.4,
                opacity: 0
            },
            {
                duration: 0.2,
                ease: "easeIn"
            }
        )
    }


    const mouseMove = (e) => {
        if (!spanRef.current) return
        const { clientX, clientY } = e
        const { width, height, left, top } = spanRef.current.getBoundingClientRect()
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        setPosition({ x, y })
        console.log(x, y)
        mouseX.set(x)
        mouseY.set(y)
    }
    const XPos = useTransform(mouseX, [-100, 100], [-10, 10])
    const YPos = useTransform(mouseY, [-100, 100], [-10, 10])



    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 })
        const XPos = 0
        const YPos = 0
    }

    const { x, y } = position

    return (
        <motion.div
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex justify-center items-center p-4 rounded-md cursor-pointer "
        >
            <motion.span
                ref={spanRef}
                onMouseMove={mouseMove}
                onMouseLeave={mouseLeave}
                style={{
                    x: XPos,
                    y: YPos
                }}
                transition={{ type: spring, stiffness: 150, damping: 15, mass: 0.1 }}
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    rounded-md
                    bg-black/50
                    z-50
                "
            />

            {children}
        </motion.div>
    )
}