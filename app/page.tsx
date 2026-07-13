import ContactButton from "@/components/ContactButton";
import HoverFillButton from "@/components/HoverFillButton";
import Component1 from "@/components/Lession1";
import Lession2 from "@/components/Lession2";
import Lession3 from "@/components/lession3";
import Lession5 from "@/components/Lession5";
import MotionButton from "@/components/motion-button";
import PLexButton from "@/components/PLexButton";
import PortfolioButton from "@/components/portfolio-button";
import RippleButton from "@/components/RippleButton";
import SplitRevealButton from "@/components/SplitReveal";
import StackButton from "@/components/StackButton";
import Image from "next/image";

export default function Home() {

  return (

    // <div className="flex justify-center items-center h-screen w-full bg-neutral-900"
    //   style={{
    //     backgroundImage: `radial-gradient(circle at 0.5px  0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
    //     backgroundSize: "8px 8px",
    //     backgroundRepeat: "repeat"
    //   }}>

    <div className="flex justify-center items-center min-h-screen h-full w-full bg-neutral-900">
      {/* <Component1/> */}
      {/* <PLexButton/> */}
      {/* <HoverFillButton/> */}
      {/* <SplitRevealButton/> */}
      {/* <RippleButton/> */}
      {/* <ContactButton/> */}
      {/* <MotionButton/> */}

      {/* <Lession2/> */}


      {/* <PortfolioButton>
        <a className="text-sm">Hover Me</a>
      </PortfolioButton> */}


      <Lession5 />





    </div>
  )

}