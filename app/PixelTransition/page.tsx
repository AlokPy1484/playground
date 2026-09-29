"use client"
import { delay, motion } from "motion/react"
import { useState } from "react"


export default function page() {

    const [isDark, setIsDark] = useState(false)


    return (
        <div className="relative flex justify-center items-center w-screen h-screen bg-white">
            <PixelBackgroundVertical theme={isDark} />
            <h1 onClick={() => setIsDark(prev => !prev)} className="text-5xl text-black z-100">Hello World</h1>
        </div>
    )
}

export function PixelBackgroundCentered({ theme }: { theme: boolean }) {

    const anim = {
        initial: {
            opacity: 0,
        },
        open: (i) => ({
            opacity: 1,
            transition: { duration: 0.2, delay: 0.05 * i }
        }),
        closed: (i) => ({
            opacity: 0,
            transition: { duration: 0.2, delay: 0.05 * i }
        })
    }

    const shuffle = (a: number[]) => {
        var j, x, i
        for (i = a.length - 1; i >= 0; i--) {
            j = Math.floor(Math.random() * (i + 1))
            x = a[i]
            a[i] = a[j]
            a[j] = x
        }
        return a
    }


    const getBlocks = () => {
        const { innerWidth, innerHeight } = window
        const blockSize = innerWidth * 0.05
        const blockCount = Math.ceil(innerHeight / blockSize)
        const delay = shuffle([...Array(blockCount)].map((_, i) => i))


        return delay.map((randomDelay, i) => {
            return (
                <motion.div
                    variants={anim}
                    initial="initial"
                    animate={theme ? "open" : "closed"}
                    exit="closed"
                    custom={randomDelay}
                    className="h-[5vw] w-full bg-sky-200">

                </motion.div>)
        })
    }

    return (
        <div className="absolute inset-0 flex justify-center items-center w-screen h-screen ">

            {
                [...Array(20)].map((_, idx) => {

                    return (
                        <div className="block w-[5vw] h-full  ">
                            {getBlocks()}
                        </div>
                    )
                })
            }
        </div>
    )


}




export function PixelBackgroundHorizontal({ theme }: { theme: boolean }) {

    const anim = {
        initial: {
            opacity: 0,
        },
        open: (delays) => ({
            opacity: 1,
            transition: { duration: 0.1, delay: 0.03 * delays[0] }
        }),
        closed: (delays) => ({
            opacity: 0,
            transition: { duration: 0.1, delay: 0.03 * delays[1] }
        })
    }

    const shuffle = (a: number[]) => {
        var j, x, i
        for (i = a.length - 1; i >= 0; i--) {
            j = Math.floor(Math.random() * (i + 1))
            x = a[i]
            a[i] = a[j]
            a[j] = x
        }
        return a
    }


    const getBlocks = (idx) => {
        const { innerWidth, innerHeight } = window
        const blockSize = innerWidth * 0.05
        const blockCount = Math.ceil(innerHeight / blockSize)
        const delay = shuffle([...Array(blockCount)].map((_, i) => i))

        return delay.map((randomDelay, i) => {
            return (
                <motion.div
                    variants={anim}
                    initial="initial"
                    animate={theme ? "open" : "closed"}
                    exit="closed"
                    custom={[randomDelay + idx, 20 - idx + randomDelay]}
                    className="h-[5vw] w-full bg-sky-400">

                </motion.div>)
        })
    }

    return (
        <div className="absolute inset-0 flex justify-center items-center w-screen h-screen ">

            {
                [...Array(20)].map((_, idx) => {

                    return (
                        <div className="block w-[5vw] h-full  ">
                            {getBlocks(idx)}
                        </div>
                    )
                })
            }
        </div>
    )


}


export function PixelBackgroundVertical({ theme }: { theme: boolean }) {

    const anim = {
        initial: {
            opacity: 0,
        },
        open: (delays) => ({
            opacity: 1,
            transition: { duration: 0, delay: 0.02 * delays[0] }
        }),
        closed: (delays) => ({
            opacity: 0,
            transition: { duration: 0, delay: 0.02 * delays[1] }
        })
    }

    const shuffle = (a: number[]) => {
        var j, x, i
        for (i = a.length - 1; i >= 0; i--) {
            j = Math.floor(Math.random() * (i + 1))
            x = a[i]
            a[i] = a[j]
            a[j] = x
        }
        return a
    }


    const getBlocks = (idx) => {
        const { innerWidth, innerHeight } = window
        const blockSize = innerHeight * 0.1
        const blockCount = Math.ceil(innerWidth / blockSize)
        const delay = shuffle([...Array(blockCount)].map((_, i) => i))

        return delay.map((randomDelay, i) => {
            return (
                <motion.div
                    variants={anim}
                    initial="initial"
                    animate={theme ? "open" : "closed"}
                    exit="closed"
                    custom={[randomDelay + idx, 10 - idx + randomDelay]}
                    className="w-[10vw] h-full bg-sky-400">

                </motion.div>)
        })
    }

    return (
        <div className="absolute inset-0 flex flex-col justify-center items-center w-screen h-screen ">

            {
                [...Array(10)].map((_, idx) => {

                    return (
                        <div className="flex h-[10vw] w-full  ">
                            {getBlocks(idx)}
                        </div>
                    )
                })
            }
        </div>
    )


}