import ScrollParallaxCard from "./scrollParallaxCard"
import { projects } from "./data"




export default function page() {

    return (
        <div className="flex flex-col justify-center items-center gap-8 w-screen h-full mt-80">
            {projects.map((card, idx) => (
                <ScrollParallaxCard color={card.color} i={idx} />
            ))}
        </div>
    )
}