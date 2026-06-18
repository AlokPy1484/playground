





export default function RippleButton(){

    return(

       <div  className="flex justify-center items-center w-[600px] h-[600px] bg-violet-400">

        <div className="group relative flex justify-center items-center w-[200px] h-[40px]">
            <span className="absolute top-0 left-0 w-full h-full bg-white/40 scale-100 opacity-100
            group-hover:scale-50  group-hover:opacity-0 transition-all duration-300
             z-10"></span>
            <span className="absolute top-0 left-0 w-full h-full border scale-125 opacity-0
            group-hover:scale-100 group-hover:opacity-100 transition-opacity transition-transform duration-300 "></span>
            <a>Hover Me</a>
        </div>



       </div>
    ) 
}