




export default function ContactButton(){

    return(

        <div className="relative group flex justify-center items-center w-[200px] h-[40px] gap-1 ">
            <div className="w-[40px] flex justify-center items-center translate-x-12 rotate-180 h-full rounded-full bg-black
            group-hover:translate-x-0 group-hover:rotate-0 transition-transform duration-300 "> A
                
            </div>
            <div className="relative flex flex-col justify-center items-center w-[150px] h-full bg-black rounded-4xl z-100 overflow-hidden">
                <span className="absolute top-2 translate-y-0 group-hover:translate-y-[-30px] trnasition-transform duration-300">Get in touch</span>
                <span className="translate-y-[30px] group-hover:translate-y-[0px] trnasition-transform duration-300">Get in touch</span>
            </div>


        </div>
    )
}