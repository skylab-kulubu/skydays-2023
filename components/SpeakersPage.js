import Image from 'next/image'
import React from 'react'
import speakerImage from "./images/hidden.jpg"

const SpeakersPage = () => {
  return (
    <div className=' min-h-screen konusmacilar text-white flex flex-col items-center justify-evenly  snap-start'>
      <div className=' text-xl md:text-5xl font-extrabold'>
        KONUŞMACILAR
      </div>

      <div className=' grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10'>

        <div>
          <Image className=' w-20 md:w-[150px] border border-[#7BE9D3]' alt="konuşmacı" src={speakerImage} width={150}  />
          <div className=' text-sm md:text-base font-normal md:font-medium mt-2'>????? ?????</div>
          <div className=' text-xs text-zinc-600'>??????????.???</div>
        </div>

        <div>
          <Image className=' w-20 md:w-[150px] border border-[#7BE9D3]' alt="konuşmacı" src={speakerImage} width={150}  />
          <div className=' text-sm md:text-base font-normal md:font-medium mt-2'>????? ?????</div>
          <div className=' text-xs text-zinc-600'>??????????.???</div>
        </div>

        <div>
          <Image className=' w-20 md:w-[150px] border border-[#7BE9D3]' alt="konuşmacı" src={speakerImage} width={150}   />
          <div className=' text-sm md:text-base font-normal md:font-medium mt-2'>????? ?????</div>
          <div className=' text-xs text-zinc-600'>??????????.???</div>
        </div>

        <div>
          <Image className=' w-20 md:w-[150px] border border-[#7BE9D3]' alt="konuşmacı" src={speakerImage} width={150}   />
          <div className=' text-sm md:text-base font-normal md:font-medium mt-2'>????? ?????</div>
          <div className=' text-xs text-zinc-600'>??????????.???</div>
        </div>

      </div>

    </div>
  )
}

export default SpeakersPage