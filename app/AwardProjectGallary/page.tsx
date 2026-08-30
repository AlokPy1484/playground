"use client"

import Image from "next/image"
import { projects } from "../ScrollParallaxCard/data"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"


export default function page() {


    const [modal, setModal] = useState({ active: false, index: 0 })

    const scaleAnimation = {
        initial: { scale: 0, x: "-50%", y: "-50%" },
        enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
        closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
    }

    const Modalprojects = [
        {
            title: "C2 Montreal",
            src: "c2montreal.png",
            color: "#000000"
        },
        {
            title: "Office Studio",
            src: "officestudio.png",
            color: "#8C8C8C"
        },
        {
            title: "Locomotive",
            src: "locomotive.png",
            color: "#EFE8D3"
        },
        {
            title: "Silencio",
            src: "silencio.png",
            color: "#706D63"
        }
    ]

    return (
        <motion.div

            className="page-container flex justify-center items-center w-screen h-screen font-mono bg-neutral-100">
            <div className="projects-container flex flex-col justify-center items-center max-w-3xl w-full">

                {Modalprojects.map((project, idx) => (
                    <ProjectCard index={idx} setModal={setModal} key={idx} name={project.title} role="Design & Development" />
                ))}
            </div>
            {modal.active && <Model modal={modal} scaleAnimation={scaleAnimation} index={modal.index} array={Modalprojects} />}
        </motion.div>
    )
}





const ProjectCard = (props: { name: string, role: string, index: number, setModal: any }) => (
    <div className="group project-container flex justify-center items-center px-12 py-8 border-t border-neutral-300 w-full"
        onMouseEnter={() => props.setModal({ active: true, index: props.index })}
        onMouseLeave={() => props.setModal({ active: false, index: props.index })}>
        <div className="project-wrapper flex justify-between items-center w-full">
            <a className="text-4xl text-neutral-900 opacity-100 group-hover:opacity-40 group-hover:translate-x-[-10px] transition-all duration-300 ease-in-out">{props.name}</a>
            <a className="text-sm text-neutral-400 opacity-100 group-hover:opacity-40 group-hover:translate-x-[10px] transition-all duration-300 ease-in-out">{props.role}</a>
        </div>



    </div>
)


const Model = (props) => (

    <AnimatePresence>
        <motion.div
            variants={props.scaleAnimation}
            initial="initial"
            animate={props.modal.active ? "enter" : "close"}
            className="model-container absolute flex justify-center items-center w-[218px] h-[143px] overflow-hidden pointer-events-none">
            <div className="model-slider absolute  flex justify-center items-center w-full h-full transition-all duration-300"
                style={{
                    top: props.index * -100 + "%"
                }}>
                <div className=" relative flex flex-col justify-start items-center images-container  h-full ">
                    {props.array.map((project, idx) => (
                        <div className="flex justify-center items-center p-4 bg-neutral-200 w-[218px] h-[143px]">
                            <Image key={idx} src={`/images/${project.src}`} alt="image" width={218} height={142} className="" />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    </AnimatePresence>

)