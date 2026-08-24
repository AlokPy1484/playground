"use client"
import Image from "next/image"
import 'lenis/dist/lenis.css'
import { useEffect, useRef, useState } from "react"
import ReactLenis, { useLenis } from "lenis/react"
import { motion, useScroll, useTransform } from 'motion/react'
import { cn } from "@/lib/utils"




export default function page() {


    // const lenis = useLenis((lenis) => {
    //     // called every scroll
    //     console.log(lenis)
    // })

    const [dimension, setDimension] = useState({ width: 0, height: 0 })



    const ref = useRef(null)


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const { height } = dimension

    const y = useTransform(scrollYProgress, [0, 1], [-400, height * 0.6])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -0.6])
    const y3 = useTransform(scrollYProgress, [0, 1], [-400, height * 0.2])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * -0.2])

    useEffect(() => {
        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight })
        }

        resize()

        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <div className="relative bg-neutral-800 p-4 w-screen ">
            <div ref={ref} className=" flex justify-center md:justify-between items-start gap-8 md:gap-8  md:h-[175vh] w-full p-4 overflow-hidden bg-neutral-900 my-[100vh] rounded-xl border-2 border-black">
                <ReactLenis root />
                <ColumnCard images={[images[0], images[1], images[2], images[3]]} y={y} />
                <ColumnCard images={[images[3], images[4], images[5], images[6]]} y={y2} />
                <ColumnCard images={[images[6], images[7], images[8], images[9]]} y={y3} />
                <ColumnCard images={[images[9], images[10], images[11], images[1]]} y={y4} />
            </div>
        </div>
    )
}

function ColumnCard(props) {

    return (
        <div className="flex flex-col justify-center items-center gap-8  w-[25vw] md:min-w-[250px] min-w-[200px]">
            {props.images.map((image, idx) => (
                <motion.div key={idx} className="flex justify-center items-center w-full h-full overflow-hidden"
                    style={{
                        y: props.y
                    }}>
                    <Image unoptimized src={image.link} alt="image" width={600} height={400} className={cn(` object-cover rounded-md md:h-[600px] `)} />
                </motion.div>
            ))}
        </div>
    )
}



const images = [
    { link: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop" },
    { link: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop" },
    { link: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop" },
    { link: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop" },
    { link: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop" },
    { link: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop" },
    { link: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop" },
    { link: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=600&fit=crop" },
    { link: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop" },
    { link: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&h=600&fit=crop" },
    { link: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop" },
    { link: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop" },
]