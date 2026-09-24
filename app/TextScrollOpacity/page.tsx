
import Characters from "./Character";
import Paragraph from "./Paragraph";
import Words from "./Word";





export default function page() {

    const paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem eum excepturi eveniet, quaerat tempora totam? Ducimus nulla aut eum. Esse, nesciunt! Facilis expedita, nostrum fugiat cumque dolorem cupiditate provident quas rerum quam. Facilis tenetur saepe harum possimus deleniti, non eveniet."
    const demo = "This one’s for the developer who hears ‘hover’ and thinks ‘story arc’ — who treats a button’s microinteraction like a three - act play, who knows a well - timed shadow can move hearts, and that a simple transition can change the soul of a site."

    return (
        // <div className="flex justify-center items-center w-screen h-[300vh] bg-neutral-900">
        //     <div className="flex flex-wrap justify-start items-center gap-2 w-full max-w-3xl text-2xl leading-4 mx-12 text-neutral-100">
        //         <Characters value={paragraph} />
        //     </div>
        // </div>

        //ShowcaseDemo

        <div className="flex justify-center items-center max-w-screen w-full  h-[600vh] bg-neutral-100">
            <div >
                <Characters value={demo} />
            </div>
        </div>
    )
}


