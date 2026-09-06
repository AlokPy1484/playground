import { Camera, Mic, Settings, Wifi } from "lucide-react";
import MagneticButton from "../MagneticButton/MagneticEffect";
import ScreenStudioButton from "./ScreenStudioButton";
import MagneticLayoutButton from "./MagneticLayoutButton";



export default function page() {

    const Buttons = [
        {
            lable: "Camera",
            icon: <Camera size={16} strokeWidth={1} className="" />
        },
        {
            lable: "Wifi",
            icon: <Wifi size={16} strokeWidth={1} className="" />
        },
        {
            lable: "Mic",
            icon: <Mic size={16} strokeWidth={1} className="" />
        },
        {
            lable: "Settings",
            icon: <Settings size={16} strokeWidth={1} className="" />
        }
    ]

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-neutral-900 font-mono">


            <div className="flex justify-center items-center gap-4 text-neutral-200">
                {/* <ScreenStudioButton>
                    <a className="text-white ">Hello World</a>
                </ScreenStudioButton>
                <ScreenStudioButton>
                    <a className="text-white ">Hello World</a>
                </ScreenStudioButton>
                <ScreenStudioButton>
                    <a className="text-white ">Hello World</a>
                </ScreenStudioButton> */}



                <MagneticLayoutButton array={Buttons} />

            </div>
        </div>
    )
}