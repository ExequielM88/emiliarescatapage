import React from "react";
import Image from "next/image";

//assets 
import paw1 from "@/assets/mision-historia/bg-paw1.svg";
import paw2 from "@/assets/mision-historia/bg-paw2.svg";

const Bg = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0">
        <Image 
            src={paw1}
            layout="fixed"
            width={500} 
            height={60}  
            alt="paw1"
        />
      </div>
      <div className="absolute top-[500px] right-0">
        <Image 
            src={paw2}
            layout="fixed"
            width={500} 
            height={60} 
            alt="paw2"
        />
      </div>
    </div>
  );
};

export default Bg;

