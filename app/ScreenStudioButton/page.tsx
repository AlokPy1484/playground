import MagneticButton from "../MagneticButton/MagneticEffect";
import ScreenStudioButton from "./ScreenStudioButton";



export default function page() {


    return (
        <div className="flex justify-center items-center w-screen h-screen bg-neutral-900 font-mono">


            <div className="flex justify-center items-center gap-4">
                <ScreenStudioButton>
                    <a className="text-white ">Hello World</a>
                </ScreenStudioButton>
                <ScreenStudioButton>
                    <a className="text-white ">Hello World</a>
                </ScreenStudioButton>
                <ScreenStudioButton>
                    <a className="text-white ">Hello World</a>
                </ScreenStudioButton>
            </div>
        </div>
    )
}