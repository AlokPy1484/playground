import Image from "next/image";




const gallary = [
    {
        src: "https://placehold.co/600x400/orange/white",
        vig: "https://placehold.co/600x400?text=1st+Vignette"
    },
    {
        src: "https://placehold.co/600x400/red/white",
        vig: "https://placehold.co/600x400?text=2nd+Vignette"
    },
    {
        src: "https://placehold.co/600x400/blue/white",
        vig: "https://placehold.co/600x400?text=3rd+Vignette"
    },
    {
        src: "https://placehold.co/600x400/yellow/white",
        vig: "https://placehold.co/600x400?text=4th+Vignette"
    },
    {
        src: "https://placehold.co/600x400/green/white",
        vig: "https://placehold.co/600x400?text=5th+Vignette"
    },
    {
        src: "https://placehold.co/600x400/purple/white",
        vig: "https://placehold.co/600x400?text=6th+Vignette"
    }
]

export default function page() {



    return (

        <div className="flex flex-col justify-center items-center w-full h-full">

            {gallary.map((image, idx) => (
                <div key={idx} className="image-container relative w-screen h-screen">
                    <Image src={image.src} alt="image" fill unoptimized className="object-cover" />
                    <div className="vignette fixed top-0 left-0 w-[20vw] h-[40vh]">
                        <Image src={image.vig} alt="image" fill unoptimized className="object-cover" />
                    </div>
                </div>
            ))}
        </div>
    )
}