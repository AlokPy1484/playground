"use client"


import Image from "next/image";
import showcase1 from "../../public/preview_1.webp"
import { CodeXml, Globe } from "lucide-react";
import StackButton from "@/components/StackButton";
import { Tooltip , TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";






export default function ProjectCard(){


  const StackList = [
    {
      logoLink: "https://thesvg.org/icons/nextdotjs/default.svg",
      name: "Next.js"
    },
    {
      logoLink: "https://thesvg.org/icons/typescript/default.svg",
      name: "Typescript"
    },
    {
      logoLink: "https://thesvg.org/icons/tailwind-css/default.svg",
      name: "Tailwind"
    },
    {
      logoLink: "https://thesvg.org/icons/django/default.svg",
      name: "Django"
    }
  ]


    return(

        <div className="flex flex-col justify-start items-center gap-2 md:w-[350px] h-auto border border-neutral-900 bg-neutral-950 rounded-2xl overflow-hidden"
          style={{
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.05) 0.01px, transparent 0.5px, transparent 50px),repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.05) 0.01px, transparent 0.5px, transparent 50px)",
}}>

      <Image src={showcase1} alt="image" width={350} height={200} className="z-10 object-fill w-full"/>


      <div className="flex flex-col justify-start items-start gap-4 w-full p-4 text-white">
      <div className="flex justify-between items-center w-full ">
        <h1 className="text-lg">Blognest</h1>
        <div className="flex justify-end items-center text-neutral-600 gap-2"> 
          <Tooltip>
          <TooltipTrigger className="cursor-pointer">
          <CodeXml strokeWidth={2} size={20}/>
          </TooltipTrigger>
          <TooltipContent>
            <a>View Code</a>
          </TooltipContent>
          </Tooltip>
          <Tooltip>
          <TooltipTrigger className="cursor-pointer">
          <Globe strokeWidth={2} size={20}/>
          </TooltipTrigger>
          <TooltipContent>
            <a>Live Preview</a>
          </TooltipContent>
          </Tooltip>
          
          </div>
      </div>
       <div className="w-full text-sm">
        An AI-powered online travel agency that allows users to book flight tickets, reserve hotels, and generate personalized trip itineraries.
       </div>

       <div className="flex justify-start items-center gap-2 w-full flex-wrap">
              {StackList.map((stack)=>(
                <StackButton logoLink={stack.logoLink} name={stack.name}/>
              ))}
       </div>
      </div>

        </div>
    )
}