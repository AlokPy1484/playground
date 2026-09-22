"use client"
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";





const gallary = [
    {
        src: "https://placehold.co/600x400/orange/white",
        vig: "https://placehold.co/200x300?text=1st+Vig"
    },
    {
        src: "https://placehold.co/600x400/red/white",
        vig: "https://placehold.co/200x300?text=2nd+Vig"
    },
    {
        src: "https://placehold.co/600x400/blue/white",
        vig: "https://placehold.co/200x300?text=3rd+Vig"
    },
    {
        src: "https://placehold.co/600x400/yellow/white",
        vig: "https://placehold.co/200x300?text=4th+Vig"
    },
    {
        src: "https://placehold.co/600x400/green/white",
        vig: "https://placehold.co/200x300?text=5th+Vig"
    },
    {
        src: "https://placehold.co/600x400/purple/white",
        vig: "https://placehold.co/200x300?text=6th+Vig"
    }
]

export default function page() {

    const spring = {
        stiffness: 150,
        damping: 15,
        mass: 0.1
    }

    const mousePosition = {
        x: useSpring(0, spring),
        y: useSpring(0, spring)
    }



    const mouseMove = (e) => {
        const { clientX, clientY } = e
        const targetX = clientX - 200 / 2
        const targetY = clientY - 300 / 2
        mousePosition.x.set(targetX)
        mousePosition.y.set(targetY)
    }



    return (
        <div
            className="flex flex-col justify-center items-center w-full h-full">

            {gallary.map((image, idx) => (
                <div
                    style={{
                        clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)"
                    }}
                    onMouseMove={mouseMove}
                    key={idx} className="image-container relative w-screen h-screen">
                    <Image src={image.src} alt="image" fill unoptimized className="object-cover " />
                    <motion.div
                        style={{ x: mousePosition.x, y: mousePosition.y }}
                        className="vignette fixed top-0 left-0 w-[200px] h-[300px]">
                        <Image src={image.vig} alt="image" fill unoptimized className="object-cover rounded-2xl" />
                    </motion.div>
                </div>
            ))}
        </div>
    )
}