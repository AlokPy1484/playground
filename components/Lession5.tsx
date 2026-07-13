"use client"

import { Rocket, Palette, Wand2, Brush, Sparkles, Camera } from "lucide-react"
import { useMotionValue, useMotionValueEvent, useScroll, useTransform, motion, useMotionTemplate, useSpring } from "motion/react"
import Image from "next/image"
import { useRef, useState } from "react"



export default function Lession5() {

    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const backgrounds = [
        "#8B0000", // Dark Red
        "#0D3B66", // Dark Blue
        "#1B4332", // Dark Green
        "#4A235A", // Dark Purple
        "#A04000", // Dark Orange
        "#4E342E", // Dark Brown
    ];
    const [background, setBackground] = useState(backgrounds[0])

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const backgroundValue = Math.floor(latest * backgrounds.length)
        setBackground(backgrounds[backgroundValue])
    })

    type FeatureCard = {
        title: string,
        description: string,
        icon: React.ReactNode,
        content: React.ReactNode
    }



    const Features: FeatureCard[] = [
        {
            title: "Replicate great Art",
            description: "Generate the painting of renowned artists, like Van Gogh or Monet or Majnu bhai.",
            icon: <Rocket className="h-8 w-8 text-neutral-200" />,
            content: (
                <div>
                    <Image unoptimized src="https://placehold.co/500x500/png" alt="image" height="500" width="500" className="rounded-lg" />
                </div>
            )
        },
        {
            title: "Create Stunning UI",
            description: "Design beautiful user interfaces with dynamic colors and modern layouts.",
            icon: <Palette className="h-8 w-8 text-neutral-200" />,
            content: (
                <div>
                    <Image unoptimized src="https://placehold.co/500x500/png" alt="ui" height="500" width="500" className="rounded-lg" />
                </div>
            )
        },
        {
            title: "Enhance Photos",
            description: "Use AI to upscale and enhance your low resolution photos instantly.",
            icon: <Wand2 className="h-8 w-8 text-neutral-200" />,
            content: (
                <div>
                    <Image unoptimized src="https://placehold.co/500x500/png" alt="enhance" height="500" width="500" className="rounded-lg" />
                </div>
            )
        },
        {
            title: "Remove Backgrounds",
            description: "Effortlessly remove backgrounds from any image with a single click.",
            icon: <Brush className="h-8 w-8 text-neutral-200" />,
            content: (
                <div>
                    <Image unoptimized src="https://placehold.co/500x500/png" alt="background" height="500" width="500" className="rounded-lg" />
                </div>
            )
        },
        {
            title: "Add Magic Effects",
            description: "Apply magical filters and effects to make your images stand out.",
            icon: <Sparkles className="h-8 w-8 text-neutral-200" />,
            content: (
                <div>
                    <Image unoptimized src="https://placehold.co/500x500/png" alt="magic" height="500" width="500" className="rounded-lg" />
                </div>
            )
        },
        {
            title: "Generate Portraits",
            description: "Create hyper-realistic portraits of people, characters, and avatars.",
            icon: <Camera className="h-8 w-8 text-neutral-200" />,
            content: (
                <div>
                    <Image unoptimized src="https://placehold.co/500x500/png" alt="portrait" height="500" width="500" className="rounded-lg" />
                </div>
            )
        }
    ]


    const Card = ({ feature }: { feature: FeatureCard }) => {
        const ref = useRef<HTMLDivElement>(null)
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start end", "end start"]
        })

        const translateContent = useTransform(scrollYProgress, [0, 1], [-200, 200])
        const translateOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
        const translateBlur = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.9, 1], [10, 5, 0, 5, 10])

        // useMotionValueEvent(scrollYProgress, "change", (latest) => {
        //     console.log(latest)
        // })

        return (
            <div
                ref={ref}
                key={feature.title}
                className="grid grid-cols-2 gap-20 items-center py-40">
                <motion.div
                    style={{
                        filter: useMotionTemplate`blur(${translateBlur}px)`
                    }}
                    className="flex flex-col gap-2">
                    {feature.icon}
                    <h2 className="text-xl font-semibold">{feature.title}</h2>
                    <p className="text-neutral-500">{feature.description}</p>
                </motion.div>
                <motion.div
                    style={{
                        y: translateContent,
                        opacity: translateOpacity
                    }}
                    className="">
                    {feature.content}
                </motion.div>
            </div>
        )
    }


    return (
        <motion.div
            ref={containerRef}
            animate={{
                background
            }}
            className="flex justify-center items-center min-h-screen w-full">
            <div className="flex flex-col gap-10 text-white max-w-4xl mx-auto py-40" >
                {Features.map((feature, idx) => (
                    <Card key={feature.title} feature={feature} />
                ))}
            </div>
        </motion.div>
    )


}