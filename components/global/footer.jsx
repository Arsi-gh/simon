import Logo from "./logo"
import { FaInstagram } from "react-icons/fa6"
import { TbBrandTelegram, TbBrandTwitter } from "react-icons/tb"
import { CiFacebook } from "react-icons/ci"
import { LuSendHorizonal } from "react-icons/lu"

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-b from-zinc-50 to-zinc-200 text-neutral-700">
        <footer className="max-w-screen-xl p-12 mx-auto mt-12 flex gap-12 justify-between flex-wrap 2xl:max-w-screen-2xl max-sm:pr-6 max-sm:gap-y-8 max-md:flex-col max-sm:text-sm">
            <ConatactInfo/>
            <MenuOptipons/>
            <Links/>
            <EmailAndSocials/>
        </footer>
    </div>
  )
}

const MenuOptipons = () => {
    return (
        <ul className="flex flex-col gap-2 max-sm:mr-6">
            <li className="cursor-pointer font-bold text-lg -mr-4">منو</li>
            <li className="cursor-pointer list-disc">صبحانه</li>
            <li className="cursor-pointer list-disc">غذای ایرانی</li>
            <li className="cursor-pointer list-disc">کافه</li>
            <li className="cursor-pointer list-disc">استیک</li>
            <li className="cursor-pointer list-disc">وگن (گیاهی)</li>
        </ul>
    )
}

const Links = () => {
    return (
        <ul className="flex flex-col gap-2 max-sm:mr-6">
            <li className="cursor-pointer font-bold text-lg -mr-4">بخش های سایت</li>
            <li className="cursor-pointer list-disc">صفحه نخست</li>
            <li className="cursor-pointer list-disc">حکایت سیمون</li>
            <li className="cursor-pointer list-disc">نگارخانه سیمون</li>
            <li className="cursor-pointer list-disc">تماس با ما</li>
        </ul>
    )
}

const ConatactInfo = () => {
    return (
        <div className="flex flex-col gap-2  gap-y-3">
            <Logo/>
            <p><b>نشانی :‌ </b>اصفهان،جلفا،روبروی کلیسا وانک</p>
            <p><b>ساعات کاری : </b>همه روزه از ساعت ۸:۳۰ الی ۲۳:۳۰</p>
            <p><b>شماره تماس : </b>۰۳۱۳۱۳۲۵۰۱۱</p>
        </div>
    )
}

const EmailAndSocials = () => {
    return (
        <div className="flex flex-col gap-y-3">
            <b className="text-base">عضویت در خبرنامه</b>
            <span className="flex border border-zinc-200 rounded-lg overflow-hidden">
                <input className="p-2 md:w-52 rounded-r-lg outline-primary-500 max-md:flex-1" type="email" placeholder="ایمیل"/>
                <LuSendHorizonal className="cursor-pointer rotate-180 text-5xl p-3 bg-white"/>
            </span>
            <b className="text-base max-sm:mt-4">سیمون در شبکه های اجتماعی</b>
            <div className="flex gap-3 max-sm:justify-between max-sm:mt-1">
                <FaInstagram className='text-3xl hover:text-primary-500'/>
                <TbBrandTwitter className='text-3xl hover:text-primary-500'/>
                <TbBrandTelegram className='text-3xl hover:text-primary-500'/>
                <CiFacebook className='text-3xl hover:text-primary-500'/>
            </div>
        </div>
    )
}

