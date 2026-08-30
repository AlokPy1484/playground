import MagneticButton from "./MagneticEffect"




export default function page() {



    return (
        <div className="flex justify-center items-center w-screen h-screen bg-neutral-900">
            <MagneticButton>
                <div className="flex justify-center items-center w-[200px] h-20 rounded-2xl bg-neutral-800 text-neutral-200 font-bold text-lg"></div>
            </MagneticButton>
        </div>
    )
}