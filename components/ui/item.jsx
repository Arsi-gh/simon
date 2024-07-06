import { toPersianNumbers } from "@/toPersianNumbers";
import Image from "next/image";
import { Suspense } from "react";
import { FaImages } from "react-icons/fa6";
import ImgSkeleton from "../skeleton/imgSkeleton";


export default function Item({img , name , price , desc}) {
  return (
    <div className="group w-72 flex flex-col gap-2 p-3 rounded-2xl border border-gray-200  relative max-sm:p-2 max-sm:w-full max-sm:flex-row max-sm:text-sm">
        {!img && <div className="sm:-mt-10 w-full h-64 grid place-content-center md:rounded-t-3xl rounded-xl max-sm:size-24 shadow-xl max-sm:ml-2 bg-gradient-to-b from-zinc-200 to-zinc-100"><FaImages className="text-neutral-400 text-7xl max-sm:text-5xl"/></div>}
        {img && (
          <Suspense fallback={<ImgSkeleton/>}>
            <Image width={500} height={500} className="sm:-mt-10 w-full  object-cover md:rounded-t-3xl rounded-2xl max-sm:size-24 shadow max-sm:ml-2" src={img} alt={name} />
          </Suspense>
        )}
        <span className="flex-1 flex justify-between mt-4 flex-wrap">
          <b className="text-lg flex-1 max-sm:text-sm">{name}</b>
          <b  className="text-primary-500 text-2xl max-sm:text-base">{toPersianNumbers(price)}<span className="max-sm:hidden">,۰۰۰</span></b>
          {
            desc && (
              <>
              <span className="w-full h-[1px] my-2 bg-zinc-300 max-sm:hidden"></span>
              <p className="max-md:mt-2 text-justify max-md:w-full">{desc}</p>
              </>
            )
          }
        </span>
    </div>
  )
}