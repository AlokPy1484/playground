import ProjectCard from "../sections/project-cards";




export default function page(){


    return(

        <div className="flex justify-center items-center w-screen h-screen"
        style={{
  backgroundColor: "#0a0a0a",
  backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
}}>


    <div className="flex justify-center items-center md:w-[56vw] h-full mt-8 p-2 bg-black border border-neutral-900"
style={{
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 5px)",
}}>

    <div className="flex flex-col md:flex-row  justify-center md:items-start items-center gap-8 p-4 w-full h-full  bg-black border border-neutral-900"
    style={{
  backgroundImage:
    "repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 100px)",
}}>


     <ProjectCard />

      <ProjectCard />
</div>

    </div>

        </div>
    )
}