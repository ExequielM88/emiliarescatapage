import Image from 'next/image'
import React from 'react'
import Pata from "@/assets/vectorBgImg/patitas.png"


const divisor = () => {
  return (
    <div className='flex  mt-10 w-full h-[70px] bg-vector3 bg-cover md:h-[130px] md:mb-20'>
      <div className='flex relative justify-end w-full content-end'>
        <Image
          src={Pata}
          alt='patitas'
          width={55}
          height={50}
          priority
          className='flex absolute w-auto h-auto top-10 right-28 max-md:hidden'
        />
        <Image
          src={Pata}
          alt='patitas'
          width={55}
          height={50}
          priority
          className='flex absolute w-auto h-auto right-52 top-20 max-md:hidden '
        />
      </div>
    </div>
  )
}

export default divisor