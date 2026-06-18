import { LinkPreview } from "@/components/ui/link-preview"
import { Separator } from "@/components/ui/separator"
import { MoveUpRight } from "lucide-react"
import React, { ReactElement } from "react"



type Datas = {
    heading: string,
    subtext: string,
    logo: React.ReactNode
}

type ListingCardProps = {
    heading: string,
    datas: Datas[],
    varient: string
}

type SkillCardProps = {
    logo: React.ReactNode,
    heading: string,
    subtext: string
}

function SkillCard({logo, heading, subtext}:SkillCardProps){
    return(
        <div className="flex justify-center items-center gap-4 py-8 ">
            {logo}
            <div className="flex flex-col justify-center items-start md:w-[200px]">
                <span className="text-xl md:text-2xl">{heading}</span>
                <span className="text-xs md:text-sm">{subtext}</span>
            </div>
        </div>

    )
}

function SkillCardLinked({logo, heading, subtext, link}:SkillCardProps){
    return(
        <div className="flex justify-center items-center gap-4 py-8 ">
            {logo}
            <div className="flex flex-col justify-center items-start w-[300px] md:w-[500px]">
                <span className="flex justify-between items-center text-xl md:text-2xl w-full">{heading}
                    {link ? <LinkPreview
          url="www.google.com"
        >Hi </LinkPreview>: null}
                    <MoveUpRight size={30} className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800"/></span>
                <span className="text-xs md:text-sm">{subtext}</span>
            </div>
        </div>

    )
}


export default function ListingCard({heading,datas,varient}:ListingCardProps){


    return(
        <div className="flex flex-col justify-center items-start p-4">
            <h1 className="text-5xl mb-12">{heading}</h1>
            {datas.map((data, index) => (
                <div>
                {varient === "linked" ? <SkillCardLinked key={index} logo={data.logo} heading={data.heading} subtext={data.subtext}/> :
                <SkillCard key={index} logo={data.logo} heading={data.heading} subtext={data.subtext}/>}
                {index + 1 !== datas.length && <Separator/>}
                </div>
            ) )}


        </div>
    )
}