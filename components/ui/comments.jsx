import { HiUserCircle } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";

export default function Comments() {
  return (
    <>
    <h4 className='index-title'>نظرات شما</h4>
    <div className="max-w-screen-xl mx-auto flex justify-center gap-4 gap-x-8 2xl:max-w-screen-2xl my-12 mb-24 max-xl:px-6 max-xl:justify-start max-xl:overflow-auto">
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
    </>
  )
}

const Comment = () => {
    return (
        <div className="rounded-xl border border-zinc-300 overflow-hidden w-96 h-64 max-lg:min-w-72 max-md:text-sm">
            <div className="flex p-2 pl-4 gap-x-2 bg-zinc-50 items-center border-b border-zinc-300">
                <HiUserCircle className="text-5xl text-neutral-300"/>
                <p className="flex-1">نام تستی</p>
                <span className="flex gap-1">
                    <FaStar className="text-2xl text-yellow-400"/>
                    <FaStar className="text-2xl text-yellow-400"/>
                    <FaStar className="text-2xl text-yellow-400"/>
                    <FaStar className="text-2xl text-yellow-400"/>
                    <FaStar className="text-2xl text-yellow-400"/>
                </span>
            </div>
            <p className="h-[12rem] p-3 text-justify overflow-y-scroll mb-4">لورم ایپسوم متن ساختگی باست، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم ، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طرسد موجود قرار گیرد.</p>
        </div>
    )
}