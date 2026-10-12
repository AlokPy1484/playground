"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react";





export default function CurvedFooter() {


    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (!width) return null;

    const initialPath = `M0 -100 L${window.innerWidth} -100 Q${window.innerWidth / 2} -100 0 -100`
    const animatedPath = `M0 -100 L${window.innerWidth} -100 Q${window.innerWidth / 2} 100 0 -100`


    return (
        <div className="flex items-end w-screen h-[200vh] bg-amber-100">
            <div className="relative w-screen h-[40vh] bg-amber-200">

            </div>
        </div>
    )
}







{/* <svg width="1279" height="70" viewBox="0 0 1279 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 70V50.4202C0 50.4202 392.921 -0.40065 646 0.00238037C894.018 0.397354 1279 50.4202 1279 50.4202V70H0Z" fill="#FFE5AF"/>
</svg> */}
