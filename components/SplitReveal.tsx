





export default function SplitRevealButton(){


return(

    <div  className="flex justify-center items-center w-[600px] h-[600px] bg-teal-400">
    <div className="relative group flex justify-center items-center w-[200px] h-[40px] ">
        <span className="absolute top-0 left-0 w-full h-full scale-x-100 opacity-100 bg-white/20
        group-hover:scale-x-25 duration-300
        group-hover:opacity-0 
        "></span>
        <span className="absolute top-0 left-0 w-full h-full border-y scale-x-25 opacity-0
        group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300"></span>
    <a className="tracking-tight group-hover:tracking-widest transition-[letter-spacing] duration-300">Hover Me</a>
    </div>
    </div>


    )
}