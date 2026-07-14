"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"






type cardsType = {
    description: string,
    title: string,
    src: string,
    ctaText: string,
    ctaLink: string,
    content: () => React.ReactNode
}



const cards: cardsType[] = [
    {
        description: "Lana Del Rey",
        title: "Summertime Sadness",
        src: "https://placehold.co/500x500",
        ctaText: "Play",
        ctaLink: "#",
        content: () => {
            return (
                <p className="text-[10px] text-neutral-500">
                    Released in 2012, "Summertime Sadness" is a wistful synth-pop ballad that became one of Lana Del Rey's signature songs. Its melancholic yet catchy melody and evocative lyrics about lost love and summer memories resonated with listeners worldwide, making it a staple of her early discography. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
                </p>
            )
        }
    },
    {
        description: "The Weeknd",
        title: "Timeless",
        src: "https://placehold.co/500x500",
        ctaText: "Listen",
        ctaLink: "#",
        content: () => {
            return (
                <p className="text-[10px] text-neutral-500">
                    Released in 2019, "Blinding Lights" is a synth-pop anthem that became a global phenomenon. With its infectious retro-futuristic vibe and driving beat, the song pays homage to 1980s new wave while delivering a modern, high-energy experience that dominated charts worldwide.
                </p>
            )
        }
    },

    {
        description: "The Weeknd",
        title: "Blinding Lights",
        src: "https://placehold.co/500x500",
        ctaText: "Listen",
        ctaLink: "#",
        content: () => {
            return (
                <p className="text-[10px] text-neutral-500">
                    Released in 2019, "Blinding Lights" is a synth-pop anthem that became a global phenomenon. With its infectious retro-futuristic vibe and driving beat, the song pays homage to 1980s new wave while delivering a modern, high-energy experience that dominated charts worldwide.
                </p>
            )
        }
    },
    {
        description: "Bruno Mars",
        title: "Uptown Funk",
        src: "https://placehold.co/500x500",
        ctaText: "Listen",
        ctaLink: "#",
        content: () => {
            return (
                <p className="text-[10px] text-neutral-500">
                    Released in 2014, "Uptown Funk" is a funk-pop anthem that became a global phenomenon. With its infectious retro-futuristic vibe and driving beat, the song pays homage to 1980s new wave while delivering a modern, high-energy experience that dominated charts worldwide.
                </p>
            )
        }
    },
    {
        description: "Akon",
        title: " Lonely",
        src: "https://placehold.co/500x500",
        ctaText: "Listen",
        ctaLink: "#",
        content: () => {
            return (
                <p className="text-[10px] text-neutral-500">
                    Released in 2006, "Lonely" is a melancholic synth-pop ballad that became a global phenomenon. With its infectious retro-futuristic vibe and driving beat, the song pays homage to 1980s new wave while delivering a modern, high-energy experience that dominated charts worldwide.
                </p>
            )
        }
    }
]



const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback()
            }
        }
        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [callback])

    return ref
}


export default function Lession5() {

    const [current, setCurrent] = useState(null)

    const ref = useOutsideClick(() => setCurrent(null))


    return (
        <div className="py-10 bg-gray-100 min-h-screen relative">
            {current && (
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"> </motion.div>
            )}
            {current && (
                <motion.div
                    layoutId={`card-${current.title}`}
                    ref={ref}
                    className="h-[500px] fixed inset-0 z-20 m-auto bg-white w-80 rounded-2xl border border-neutral-200 p-4 overflow-hidden">

                    <motion.img
                        layoutId={`card-image-${current.title}`}
                        src={current.src}
                        alt={current.title}
                        className="w-full aspect-square rounded-xl" />
                    <div className="flex flex-col justify-between items-start">
                        <div className="flex items-start justify-between w-full gap-2">
                            <div className="flex flex-col items-start gap-2">
                                <motion.h2
                                    layoutId={`card-heading-${current.title}`}
                                    className="font-bold text-xs tracking-tight text-black">
                                    {current.title}</motion.h2>
                                <motion.p className="text-[10px] text-neutral-500">
                                    {current.description}
                                </motion.p>
                            </div>
                            <motion.Link
                                layoutId={`card-cta-${current.title}`}
                                href={current.ctaLink} className="px-2 py-1 bg-green-500 rounded-full text-white text-xs">
                                {current.ctaText}</motion.Link>
                        </div>
                        <motion.div
                            initial={{
                                filter: 'blur(10px)',
                                opacity: 0
                            }}
                            animate={{
                                filter: 'blur(0px)',
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.5
                            }}
                            className=" h-40 pb-20 overflow-auto [mask-image:linear-gradient(to_bottom, transparent,black_80%)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_80%)]" >{current.content()}</motion.div>
                    </div>
                </motion.div>
            )}
            <div className="max-w-lg mx-auto flex flex-col gap-10">
                {cards.map((card, idx) => (
                    <motion.button
                        layoutId={`card-${card.title}`}
                        onClick={() => setCurrent(card)}
                        key={card.title}
                        className="p-4 rounded-lg flex justify-between items-center bg-white border border-neutral-200"
                    >
                        <div className="flex gap-4 items-center">
                            <motion.img
                                layoutId={`card-image-${card.title}`}
                                src={card.src}
                                alt={card.title}
                                className="h-14 aspect-square rounded-lg" />
                            <div className="flex flex-col items-start gap-2">
                                <motion.h2
                                    layoutId={`card-heading-${card.title}`}
                                    className="font-bold text-xs tracking-tight text-black">
                                    {card.title}
                                </motion.h2>
                                <motion.p
                                    layoutId={`card-description-${card.title}`}
                                    className="text-[10px] text-neutral-500">
                                    {card.description}
                                </motion.p>
                            </div>

                        </div>
                        <motion.div
                            layoutId={`card-cta-${card.title}`}
                            className="px-2 py-1 bg-green-500 rounded-full text-white text-xs">
                            {card.ctaText}
                        </motion.div>
                    </motion.button>
                ))}
            </div>

        </div>
    )
}