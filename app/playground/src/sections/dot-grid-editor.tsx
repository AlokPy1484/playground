"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import ColourPicker from "../../component/colour-picker"
import { Slider } from "@/components/ui/slider"








export default function DotGridEditor() {


    const [radius, setRadius] = useState(2)
    const [dotOpacity, setDotOpacity] = useState(0.5)
    const [dotSpacing, setDotSpacing] = useState(20)
    const [bgColour, setBgColour] = useState("#000000")
    const [dotColour, setDotColour] = useState("#ffffff")




    const hexToRgb = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        console.log(r, g, b)

        return `${r}, ${g}, ${b}`;
    };

    const dottedBackground = {
        backgroundColor: `${bgColour}`,
        backgroundImage: `radial-gradient(rgba(${hexToRgb(dotColour)},${dotOpacity}) ${radius}px, transparent 1px)`,
        backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
    }


    return (
        <div className="flex flex-col justify-center items-center ">
            <div className="flex justify-between items-center gap-8 bg-white w-full max-w-5xl my-8">
                <div className="flex justify-start items-center gap-4 p-8 px-16 w-[400px] h-[500px] bg-neutral-100 rounded-2xl border border-dotted border-neutral-300">

                    <form>
                        <div className="flex flex-col justify-start items-start w-full gap-4">
                            <div className="flex flex-col items-start justify-center text-black">
                                Dot Color :-
                                <ColourPicker onColorChange={setBgColour} />
                            </div>
                            <div className="flex flex-col items-start justify-center text-black">
                                Background Color :-
                                <ColourPicker onColorChange={setDotColour} />
                            </div>
                            <div className="flex flex-col items-start justify-center gap-2 text-black w-full">
                                Dot Radius :-

                                <div className="flex justify-between items-center w-full gap-2">
                                    <Slider
                                        defaultValue={[2]}
                                        max={12}
                                        step={0.5}
                                        className="mx-auto w-full "
                                        onValueChange={(value) => setRadius(value[0])}
                                    />
                                    <input type="text" className="px-4 w-full max-w-16 h-8 bg-white rounded-md " defaultValue={radius} />
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-center gap-2 text-black w-full">
                                Dot Opacity :-

                                <div className="flex justify-between items-center w-full gap-2">
                                    <Slider
                                        defaultValue={[0.2]}
                                        max={1}
                                        step={0.01}
                                        className="mx-auto w-full "
                                        onValueChange={(value) => setDotOpacity(value[0])}
                                    />
                                    <input type="text" className="px-4 w-full max-w-16 h-8 bg-white rounded-md " defaultValue={dotOpacity} />
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-center gap-2 text-black w-full">
                                Dot Spacing :-

                                <div className="flex justify-between items-center w-full gap-2">
                                    <Slider
                                        defaultValue={[75]}
                                        max={300}
                                        min={1}
                                        step={1}
                                        className="mx-auto w-full "
                                        onValueChange={(value) => setDotSpacing(value[0])}
                                    />
                                    <input type="text" className="px-4 w-full max-w-16 h-8 bg-white rounded-md " defaultValue={dotSpacing} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex w-[550px] h-[500px] bg-amber-200 rounded-2xl border border-dotted"
                    style={dottedBackground}>

                </div>



            </div>






            <div className="flex justify-center items-center w-full h-screen bg-white">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="text-background w-full flex justify-start text-4xl font-bold my-4 text-black">Sample usage</h1>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="flex justify-center items-center gap-4 w-[70vw]">
                            <div className="flex justify-center items-center bg-neutral-200 w-full h-full p-8 rounded-xl border border-dotted border-neutral-300"
                                style={dottedBackground}
                            >
                                <div className="flex justify-center items-center w-[150px] h-[60px] bg-white rounded-xl">
                                    <span className="w-[100px] h-[10px] bg-neutral-300"></span>
                                </div>
                            </div>
                            <div className="flex justify-center items-center bg-neutral-200 p-8 rounded-xl w-full h-full border border-dotted border-neutral-300">
                                <a
                                    className="text-5xl font-bold  bg-white rounded-xl p-2 text-transparent bg-clip-text"
                                    style={dottedBackground}
                                >Hello World</a>
                            </div>
                        </div>
                        <div className="flex justify-betwen w-full gap-4 ">
                            <div className="flex justify-center items-center w-full flex-1 bg-neutral-200 rounded-xl p-4 border border-dotted border-neutral-300">
                                <section className="flex flex-col justify-center items-center w-[600px] h-[400px] bg-white gap-2 "
                                    style={dottedBackground}>
                                    <span className="w-[300px] h-[25px] bg-neutral-300" />
                                    <span className="w-[250px] h-[25px] bg-neutral-300" />
                                    <span className="w-[300px] h-[10px] bg-neutral-300 mt-2" />
                                    <div className="flex justify-center items-center gap-4 mt-4">
                                        <span className="w-[80px] h-[30px] bg-neutral-300 mt-2" />
                                        <span className="w-[80px] h-[30px] bg-neutral-300 mt-2" />
                                    </div>
                                </section>
                            </div>
                            <div className="flex justify-center items-center w-full flex-1 bg-neutral-200 rounded-xl p-4 border border-dotted border-neutral-300">
                                <div className="flex justify-center items-center p-4 rounded-2xl "
                                    style={dottedBackground}>
                                    <div className="flex flex-col justify-center p-12 items-start gap-2 w-[300px] h-[400px] bg-white rounded-2xl">
                                        <span className="w-[80px] h-[20px] bg-neutral-300" />
                                        <span className="w-[200px] h-[25px] bg-neutral-300" />
                                        <span className="w-[80px] h-[20px] mt-4 bg-neutral-300" />
                                        <span className="w-[200px] h-[25px] bg-neutral-300" />
                                        <span className="w-[150px] h-[35px] mx-8 mt-8 bg-neutral-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
        </div>
    )
}