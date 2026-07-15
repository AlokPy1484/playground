"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"




export default function Lession5b() {

    type navItemsType = {
        title: string,
        link: string
    }

    const navItems: navItemsType[] = [
        {
            title: "Home",
            link: "/home"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Contact",
            link: "/contact"
        },
        {
            title: "Services",
            link: "/services"
        },
        {
            title: "Pricing",
            link: "/pricing"
        },
        {
            title: "FAQ",
            link: "/faq"
        }
    ]

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(2)

    return (
        <div className="py-40">
            <nav className="max-w-xl mx-auto bg-gray-100 rounded-full px-2 py-1 flex">
                {navItems.map((item, idx) => (
                    <Link
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(2)}
                        className="w-full relative group text-center py-3 text-xs text-neutral-500"
                        href={item.link}
                        key={item.title}
                    >
                        {hoveredIndex === idx && (
                            <motion.div
                                layoutId="hover"
                                className="absolute inset-0 rounded-full w-full h-full bg-black"></motion.div>
                        )}
                        <span className="relative group-hover:text-white">{item.title}</span>
                    </Link>
                ))}
            </nav>

        </div>

    )
}