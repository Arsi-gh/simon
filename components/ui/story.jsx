import Link from "next/link"
import { LiaArrowAltCircleLeftSolid } from "react-icons/lia"

export default function Story() {
  return (
    <div className="flex max-w-screen-xl 2xl:max-w-screen-2xl mx-auto gap-2 items-center justify-between gap-x-2 py-10 mt-10 px-12 max-md:flex-col-reverse max-md:gap-y-10 max-sm:px-6 max-[500px]:-mt-16">
        <div className="w-1/2 flex flex-col gap-y-4 max-md:w-full max-sm:gap-y-2 max-sm:items-center">
          <h3 className="text-2xl font-bold text-primary-500 max-sm:text-lg">حکایت عمارت سیمون</h3>
          <p className="text-justify text-lg max-lg:text-base max-sm:text-sm">بر اساس شواهد موجود مالک اصلی خانۀ خواجه سیمون، یکی از تاجران بنام  در قرن هجدهم میلادی بوده که وضعیت مالی خوبی نیز داشته است. در اسناد و مدارک مکتوب، آمده که وی علاوه بر فعالیت تجاری و‏اجتماعی در امور خیریه پیشقدم بوده و سرپرستی حدود سی خانوار را در فریدن بر عهده داشته است. او در 1240ق/1824م به دست ‏حاجی هاشم خان، حاکم وقت، کشته شد.</p>
          <Link href="/story" className="mt-6 w-fit bg-gradient-to-bl from-primary-500 to-primary-400 text-white p-3 shadow-xl  rounded-lg text-lg flex gap-2 items-center max-sm:text-sm">ادامه مطلب<LiaArrowAltCircleLeftSolid className="text-2xl"/></Link>
        </div>
        <Images/>
    </div>
  )
}

const Images = () => {
    return (
        <div className="w-1/3 h-[25rem] grid grid-cols-2 grid-rows-2 gap-3 max-md:w-full">
            <img loading="lazy" src="/images/story-1.JPG" alt="mansion-img-1"  className="object-cover w-full h-full row-start-1 row-end-3 col-start-2 col-end-3 rounded-xl shadow-xl"/>
            <img loading="lazy" src="/images/main-header.jpg" alt="mansion-img-2" className="object-cover w-full h-full row-start-1 row-end-2 col-start-1 col-end-2 rounded-xl shadow-xl"/>
            <img loading="lazy" src="/images/story-2.jpg" alt="mansion-img-3" className="object-cover w-full h-full row-start-2 row-end-3 col-start-1 col-end-2 rounded-xl shadow-xl"/>
        </div>
    )
}