import Image from "next/image";
import nextLogo from "../../public/globe.svg"
import Lession2 from "@/components/Lession2";
import MotionButton from "@/components/motion-button";




export default function page(){


    return(
            <div className="flex justify-center items-center w-screen h-screen bg-black">

                {/* <Lession2/> */}
                <MotionButton/>
            </div>
    )
}