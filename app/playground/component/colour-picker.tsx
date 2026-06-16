import { cn } from "@/lib/utils"
import { useState } from "react"




type ChildProps = {
    onColorChange: (color: string) => void;
};

export default function ColourPicker({ onColorChange }: ChildProps) {

    const [bgColour, setBgColour] = useState("#000000")


    return (

        <div className="flex justify-center items-center gap-2 bg-neutral-300 p-1 px-2 rounded-md">
            <input type="input" defaultValue={bgColour} className="bg-white rounded-md text-black px-2" onSubmit={(e) => { setBgColour(e.target.value) }} onChange={(e) => onColorChange(e.target.value)} />
            <input type="color" className={cn('bg-${bgColour}', "w-8 h-8 rounded-lg border")} onChange={(e) => onColorChange(e.target.value)} />
        </div>
    )
}