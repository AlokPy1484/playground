import StackButton from "@/components/StackButton"




export default function page(){


  const StackList = [
    {
      logoLink: "https://thesvg.org/icons/nextdotjs/default.svg",
      name: "Next.js"
    },
    {
      logoLink: "https://thesvg.org/icons/typescript/default.svg",
      name: "Typescript"
    },
    {
      logoLink: "https://thesvg.org/icons/tailwind-css/default.svg",
      name: "Tailwind"
    },
    {
      logoLink: "https://thesvg.org/icons/vercel/default.svg",
      name: "Vercel"
    },
    {
      logoLink: "https://thesvg.org/icons/django/default.svg",
      name: "Django"
    },
    {
      logoLink: "https://thesvg.org/icons/render/default.svg",
      name: "Render"
    }
  ]


    return(
        <div className="flex justify-center items-center w-screen h-screen bg-neutral-800" 
        style={{
      backgroundImage: `radial-gradient(circle at 0.5px  0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat"
    }}>

    <div className="flex justify-center items-center gap-1 w-[40vw] h-[30vh] bg-black flex-wrap">
      {StackList.map((stack)=>(
        <StackButton logoLink={stack.logoLink} name={stack.name}/>
      ))}
    </div>
        
    </div>
    )
}