
import Link from "next/link";
import { LiaArrowAltCircleLeftSolid } from "react-icons/lia";


export default function WelcomeSection() {
  return (
    <section className="max-w-screen-xl 2xl:max-w-screen-2xl max-sm:px-0 mx-auto flex gap-2 items-center mt-32 px-12 relative max-md:flex-col-reverse max-md:mt-24 max-sm:mt-[66px] max-md:px-6">
        <div className="space-y-2 flex-1 max-sm:gap-y-2 max-sm:p-3 max-sm:mb-10">
            <div className="flex gap-2 items-center max-sm:hidden">
                <img loading="lazy" className="size-24 max-lg:size-16 max-sm:size-12" src="/images/logo.png" alt="mansion-log" />
                <h4 className="text-3xl text-primary-500 font-bold max-lg:text-xl max-sm:text-lg">عمارت سیمون</h4>
            </div>
            <p className="w-5/6 xl:text-lg max-sm:text-sm  text-justify md:p-4 max-sm:w-full max-sm:text-center">عمارتی جا مانده از دل تاریخ که با فضایی بسیار زیبا و دلنشین به همراه كادر مجرب آشپزى برای ساخت لحظات زیبا و خاطره انگیز در کنار شما عزیزان</p>
            <Link href="/menu" className="w-fit flex items-center gap-2 p-3 pr-4 rounded-lg shadow-xl bg-gradient-to-bl from-primary-500 to-primary-400 text-white text-xl max-lg:text-base max-sm:p-2 max-sm:text-sm max-sm:mx-auto">مشاهده منو<LiaArrowAltCircleLeftSolid className="text-2xl"/></Link>
        </div>
        <img loading="lazy" className="w-1/2 sm:rounded-2xl shadow-lg max-md:w-full" src="/images/main-header.jpg" alt="masion-image" />
    </section>
  )
}