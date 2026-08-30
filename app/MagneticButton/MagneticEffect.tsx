"use client"

import { useRef, useState } from "react"
import { motion, spring } from "motion/react"





export default function MagneticButton({ children }: { children: React.ReactNode }) {


    const ref = useRef(null)

    const [position, setPosition] = useState({ x: 0, y: 0 })

    const mouseMove = (e) => {
        if (!ref.current) return
        const { clientX, clientY } = e
        const { width, height, left, top } = ref.current.getBoundingClientRect()
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        setPosition({ x, y })
    }

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position

    return (
        <motion.div
            className=""
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            animate={{ x, y }}
            transition={{ type: spring, stiffness: 150, damping: 15, mass: 0.1 }}
        >
            <div className="m-0">

                {children}
            </div>

        </motion.div>
    )
}