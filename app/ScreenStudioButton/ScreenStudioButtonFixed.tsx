"use client"

import {
    animate,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    type MotionValue,
} from "motion/react"
import { useRef, type ReactNode } from "react"

const ENTER = { duration: 0.2, ease: "easeOut" } as const
const EXIT = { duration: 0.2, ease: "easeIn" } as const
const MAGNET = { stiffness: 150, damping: 15, mass: 0.1 } as const

export default function ScreenStudioButtonNew({
    children,
}: {
    children: ReactNode
}) {

    const buttonRef = useRef<HTMLDivElement>(null)

    // Owned by enter/leave only.
    const originX = useMotionValue(0)
    const originY = useMotionValue(0)
    const scale = useMotionValue(0.4)
    const opacity = useMotionValue(0)

    // Owned by mousemove only.
    const pointerX = useMotionValue(0)
    const pointerY = useMotionValue(0)
    const magnetX = useSpring(
        useTransform(pointerX, [-100, 100], [-10, 10]),
        MAGNET
    )
    const magnetY = useSpring(
        useTransform(pointerY, [-100, 100], [-10, 10]),
        MAGNET
    )

    // Always measure the button, never the element being transformed.
    const getLocalPoint = (e: React.MouseEvent) => {
        const el = buttonRef.current
        if (!el) return { x: 0, y: 0 }

        const { width, height, left, top } = el.getBoundingClientRect()

        return {
            x: e.clientX - (left + width / 2),
            y: e.clientY - (top + height / 2),
        }
    }

    const handleMouseEnter = (e: React.MouseEvent) => {
        const { x, y } = getLocalPoint(e)

        //Imitiatly goes to mouse curr position while being invisible
        originX.jump(x)
        originY.jump(y)
        scale.jump(0.4)
        opacity.jump(0)

        //magnetic effect
        pointerX.set(x)
        pointerY.set(y)

        //Moves the span form the curr position, (which is same as mouse curr position) to center, along with Scale(0.4 ->1) and opacity(0 -> 1).
        animate(originX, 0, ENTER)
        animate(originY, 0, ENTER)
        animate(scale, 1, ENTER)
        animate(opacity, 1, ENTER)
    }

    //Magnetic effect
    const handleMouseMove = (e: React.MouseEvent) => {
        const { x, y } = getLocalPoint(e)
        pointerX.set(x)
        pointerY.set(y)
    }


    const handleMouseLeave = (e: React.MouseEvent) => {
        const { x, y } = getLocalPoint(e)

        // Let the magnet settle home so it doesn't double-count the exit point.
        pointerX.set(0)
        pointerY.set(0)

        animate(originX, x, EXIT)
        animate(originY, y, EXIT)
        animate(scale, 0.4, EXIT)
        animate(opacity, 0, EXIT)
    }

    return (
        <div
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex cursor-pointer items-center justify-center rounded-md p-4"
        >
            {/* Outer layer owns the entry/exit transform. */}
            <motion.span
                aria-hidden
                style={{ x: originX, y: originY, scale, opacity }}
                className="pointer-events-none absolute inset-0"
            >
                {/* Inner layer owns the magnetic pull. Separate elements,
                    separate transforms, no contention. */}
                <motion.span
                    style={{ x: magnetX, y: magnetY }}
                    className="block h-full w-full rounded-md bg-secondary/10"
                />
            </motion.span>

            <span className="relative z-10">{children}</span>
        </div>
    )
}