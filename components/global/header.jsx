import Link from 'next/link'
import React, { useState } from 'react'
import Search from '../filters/search'
import Logo from './logo'
import { FaBars, FaChevronDown } from 'react-icons/fa6'

export default function Header({setDisplaySide}) {
  return (
    <div className='w-full bg-zinc-50 fixed top-0 z-30'>
        <header className='flex gap-x-4 px-12 justify-between text-neutral-700 items-center max-w-screen-xl 2xl:max-w-screen-2xl mx-auto p-2 max-md:w-full max-md:px-4'>
            <FaBars onClick={() => setDisplaySide(true)} className='text-2xl  cursor-pointer hidden max-md:block'/>
            <div className='flex items-center gap-x-10 flex-1'>
                <Logo/>
                <Links/>
            </div>
            <Search/>
        </header>
    </div>
  )
}

const Links = () => {

    const [toggleMenu , setToggleMenu] = useState(false)

    return (
        <>
        {toggleMenu && <div onClick={() => setToggleMenu(false)} className='fixed top-0 left-0 w-screen h-screen z-30 bg-opacity-30'></div>}
        <ul className='flex gap-x-8 max-md:hidden relative text-neutral-700 z-30'>
            <li><Link href="/story">حکایت سیمون</Link></li>
            <li><Link href="/menu">منو</Link></li>
            <li><Link href="/contact">ارتباط با ما</Link></li>
        </ul>
        </>
    )
}
