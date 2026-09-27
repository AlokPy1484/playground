"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Airtel, Amazon, Apple, Google, Meta, Microsoft } from '@thesvg/react';
import { ArrowRight } from "lucide-react";




export default function page() {

    const testimonials = [
        {
            icon: <Apple className="size-10" />,
            name: "Apple Computers",
            background: "oklch(18% 0.01 285)",
            wrokDescription: "Integrated MongoDB into their backend infrastructure",
            testimonial:
                "We needed a system that could handle serious performance and security requirements without slowing down our developers. Supabase has given us both.",
            client: "Tim Cook, CEO, Apple Computers",
        },
        {
            icon: <Google className="size-10" />,
            name: "Google Technologies",
            background: "oklch(25% 0.12 145)",
            wrokDescription: "Optimized PostgreSQL queries across their data infrastructure",
            testimonial:
                "We needed reliable infrastructure that could scale with our growing products while keeping development simple. Supabase gave our team exactly that.",
            client: "Sundar Pichai, CEO, Google Technologies",
        },
        {
            icon: <Microsoft className="size-10" />,
            name: "Microsoft Systems",
            background: "oklch(28% 0.13 240)",
            wrokDescription: "Built secure authentication for their modern applications",
            testimonial:
                "Our developers needed powerful tools without unnecessary complexity. Supabase helped us move quickly while maintaining the security standards our products require.",
            client: "Satya Nadella, CEO, Microsoft Systems",
        },
        {
            icon: <Airtel className="size-10" />,
            name: "Amazon Services",
            background: "oklch(24% 0.08 55)",
            wrokDescription: "Developed scalable APIs for their cloud applications",
            testimonial:
                "We wanted infrastructure that could support rapid growth without creating additional complexity. Supabase helped our team build and ship with confidence.",
            client: "Andy Jassy, CEO, Amazon Services",
        },
        {
            icon: <Meta className="size-10" />,
            name: "Meta Platforms",
            background: "oklch(25% 0.14 285)",
            wrokDescription: "Implemented real-time data systems for their applications",
            testimonial:
                "We needed modern infrastructure that could keep our teams productive while supporting demanding applications. Supabase provided the flexibility we were looking for.",
            client: "Mark Zuckerberg, CEO, Meta Platforms",
        },
    ];

    const [activeCardIdx, setActiveCardIdx] = useState<number | null>(0)
    const [carouselPaused, setCarouselPaused] = useState<boolean | null>(false)
    const cardLength = 5

    const handleMouseLeaveParent = () => {
        setCarouselPaused(false)
        setActiveCardIdx(0)
    }

    useEffect(() => {
        if (carouselPaused) return

        const timer = setTimeout(() => {
            setActiveCardIdx(prev => (prev + 1) % cardLength)
        }, 3000)

        return () => clearTimeout(timer)

    }, [activeCardIdx, carouselPaused])


    return (
        <div className="flex flex-col justify-center items-center gap-8 w-screen h-screen bg-neutral-900">

            <div
                onMouseEnter={() => setCarouselPaused(true)}
                onMouseLeave={() => setCarouselPaused(false)}
                className="flex justify-between items-center gap-4 max-w-6xl w-full font-mono text-secondary">
                {testimonials.map((testimonial, i) => (
                    <Card key={i} active={activeCardIdx === i ? true : false} setActive={setActiveCardIdx} i={i}>
                        {i === activeCardIdx ?
                            <div className="flex justify-center items-center rounded-xl w-full h-full"
                                style={{
                                    backgroundColor: testimonial.background
                                }}>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        display: "none"
                                    }}
                                    animate={{
                                        opacity: 1,
                                        display: "flex"
                                    }}
                                    exit={{
                                        opacity: 0
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.1
                                    }}
                                    className="  flex-col justify-between items-center w-full h-full p-8">

                                    <div className="header flex flex-col justify-start items-start w-full">
                                        <span className="mb-12"> {testimonial.icon}</span>
                                        <a className="text-sm font-semibold">{testimonial.name}</a>
                                        <p className="text-sm font-light text-secondary/80">{testimonial.wrokDescription}</p>
                                    </div>

                                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                                        <p className="text-xl max-w-[400px] leading-tight">{testimonial.testimonial}</p>
                                        <a className="text-sm font-light text-secondary/80">{testimonial.client}</a>
                                        <button className="flex justify-start items-center gap-2 mt-4 text-sm font-light border-b border-secondary/20">
                                            <a>Read More</a>
                                            <ArrowRight size={12} strokeWidth={2} />
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                            :
                            <div
                                style={{ backgroundColor: testimonial.background }}
                                className="flex flex-col justify-between items-center w-full h-full p-8 rounded-xl">

                                {testimonial.icon}

                            </div>}
                    </Card>
                ))}
            </div>
            <div className="flex justify-center items-center gap-1 w-full text-white ">
                {Array.from({ length: cardLength }).map((_, i) => (
                    <span
                        onClick={() => setActiveCardIdx(i)}
                        key={i} className="size-[4px] bg-white rounded-full transition-all duration-300 ease-in-out"
                        style={{
                            width: i === activeCardIdx ? "12px" : "4px",

                        }}>
                    </span>
                ))}
            </div>

        </div>
    )
}




export function Card({ active, setActive, i, children }: { active: boolean, setActive: (idx: number | null) => void, i: number, children: React.ReactNode }) {

    return (
        <motion.div
            onMouseEnter={() => setActive(i)}

            style={{
                flex: active ? 8 : 1
            }}
            transition={{
                duration: 0.3,
                ease: [0.76, 0, 0.24, 1]
            }}
            className=" w-full h-[60vh]  rounded-lg transition-all duration-300 ">
            {children}
        </motion.div>
    )
}