
import Link from "next/link";
import { LiaArrowAltCircleLeftSolid } from "react-icons/lia";


export default function WelcomeSection() {
  return (
    <section className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex gap-2 items-center mt-32 px-12 relative max-md:flex-col-reverse max-md:mt-24 max-md:px-6">
        <div className="flex flex-col gap-y-4 p-3 flex-1 max-md:absolute max-md:bg-white max-md:w-3/4 max-md:bg-opacity-90 backdrop-blur-sm max-md:rounded-xl max-md:top-1/2 max-md:transform max-md:-translate-y-1/2 max-sm:gap-y-2 max-[500px]:border max-[500px]:border-zinc-200 max-[500px]:backdrop-blur-md max-[500px]:shadow-2xl max-[500px]:relative max-[500px]:items-center max-[500px]:top-12">
            <div className="flex gap-2 items-center">
                <img loading="lazy" className="size-24 max-lg:size-16 max-sm:size-12" src="/images/logo.png" alt="mansion-log" />
                <h4 className="text-3xl text-primary-500 font-bold max-lg:text-xl max-sm:text-lg">عمارت سیمون</h4>
            </div>
            <p className="w-5/6 text-xl max-2xl:text-xl text-justify p-4 max-lg:text-base max-sm:w-full">عمارتی جا مانده از دل تاریخ که با فضایی بسیار زیبا و دلنشین به همراه كادر مجرب آشپزى برای ساخت لحظات زیبا و خاطره انگیز در کنار شما عزیزان</p>
            <Link href="/menu" className="w-fit flex items-center gap-2 p-3 pr-4 rounded-lg shadow-xl bg-gradient-to-bl from-primary-500 to-primary-400 text-white text-xl max-lg:text-base max-sm:p-2 max-sm:text-sm ">مشاهده منو<LiaArrowAltCircleLeftSolid className="text-2xl"/></Link>
        </div>
        <img loading="lazy" className="w-1/2 rounded-2xl shadow-lg max-md:w-full" src="/images/main-header.jpg" alt="masion-image" />
    </section>
  )
}