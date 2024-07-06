import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import { MdMenuBook } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { HiOutlineXMark } from "react-icons/hi2";



export default function Sidebar({display , displayHandler}) {
  return (
    <>
    <div onClick={() => displayHandler(false)} className={`fixed top-0 h-screen w-screen left-0 z-40 bg-black opacity-30 md:hidden ${!display && 'hidden' }`}></div>
    <section className={`flex flex-col gap-y-4 fixed top-0 right-0 w-60 bg-white h-screen z-40 shadow-2xl py-2 px-4 text-neutral-700 md:hidden transition-all duration-300 -mr-60 ${display && 'mr-0'}`}>
        <div className='flex gap-2 items-center'>
            <HiOutlineXMark onClick={() => displayHandler(false)} className='text-3xl cursor-pointer'/>
            <Logo/>
        </div>
        <Link onClick={() => displayHandler(false)} className='mt-4 py-1 px-3 flex justify-between items-center' href="/">صفحه اصلی<HiHome className='text-xl'/></Link>
        <Link onClick={() => displayHandler(false)} className='py-2 px-3 flex justify-between items-center' href="/menu">منو<MdMenuBook className='text-xl'/></Link>
        <Link onClick={() => displayHandler(false)} className='py-2 px-3 flex justify-between items-center' href="/story">حکایت سیمون<FaBook className='text-xl'/></Link>
        <Link onClick={() => displayHandler(false)} className='py-2 px-3 flex justify-between items-center' href="/contact">ارتباط با ما<PiPhoneDisconnectFill className='text-xl' /></Link>
    </section>
    </>
  )
}
