import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ImgSkeleton() {
  return (
    <div className='sm:-mt-10 w-full h-64 grid place-content-center md:rounded-t-3xl rounded-xl max-sm:size-24 shadow-xl max-sm:ml-2 bg-gradient-to-b from-zinc-200 to-zinc-100'>
        <AiOutlineLoading3Quarters className='text-neutral-400 text-7xl max-sm:text-5xl'/>
    </div>
  )
}