


export default function HoverFillButton(){


    return(

//  <a
//   href="#"
//   className="
//     group relative overflow-hidden
//     block w-[200px] h-[40px] leading-[40px]
//     border-2 border-[#333]
//     text-[#333] text-lg text-center tracking-widest
//     font-sans no-underline
//     transition-colors duration-[350ms] ease-in-out
//     hover:text-white
//   "
// >

//   <span
//     aria-hidden="true"
//     className="
//       absolute top-0 left-0 z-[1]
//       w-0 h-full
//       bg-[#ff003b]
//       transition-[width] duration-[350ms] ease-in-out
//       group-hover:w-full
//     "
//   />


//   <span className="relative z-[2]">Hover Me!</span>
//   </a> 
// )



<div className="group flex justify-center items-center relative w-[200px] h-[40px] border border-white
 hover:text-black trnasition-colours  duration-[350ms] ease-in-out cursor-pointer">

        <span className="absolute top-0 left-0  bg-red-400 h-full group-hover:w-full w-0 transition-[width] duration-[350ms] ease-in-out"></span>
        <a className="relative text-lg z-10 bg-none">Hover Me</a>
</div>
)






}