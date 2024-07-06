import React from 'react'
import { LuSendHorizonal } from 'react-icons/lu'
import { MdLocationPin } from "react-icons/md";
import { BsFillClockFill } from "react-icons/bs";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { FaInstagram } from 'react-icons/fa6';
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandTelegram } from "react-icons/tb";
import { CiFacebook } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import Head from 'next/head';

const infos = [
    {id : 1 , name : 'نشانی' , icon : <MdLocationPin className='text-2xl max-sm:text-lg'/> , text : 'اصفهان ، جلفا ، روبروی کلیسا وانک'},
    {id : 2 , name : 'ساعات کاری' , icon : <BsFillClockFill className='text-2xl max-sm:text-lg'/>  , text : 'همه روزه از ساعت ۸:۳۰ الی ۲۳:۳۰'},
    {id : 3 , name : 'شماره تماس' , icon : <PiPhoneDisconnectFill className='text-2xl max-sm:text-lg' />  , text : '۰۳۱۳۱۳۲۵۰۱۱'},
]


export default function Contact() {
  return (
    <>
    <Head>
      <title>عمارت سیمون | ارتباط با ما</title>
      <meta name="description" content=""></meta>
    </Head>
    <main className='max-w-screen-lg flex mt-32 mx-auto p-10 max-md:flex-col max-md:max-w-screen-md max-md:mt-12 max-md:gap-y-6 max-md:px-4'>
        <MessageForm/>
        <Info/>
    </main>
    <iframe className='mx-auto rounded-2xl shadow-2xl w-[984px] max-lg:w-3/4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.016982002685!2d51.65256637558174!3d32.635659291196795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc37ef686a74db%3A0x35e58713ff578cab!2sSimon%20Pavilion%20restaurant!5e1!3m2!1sen!2s!4v1705866994330!5m2!1sen!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

const MessageForm = () => {
    return (
        <form className='h-fit w-1/2 flex bg-white flex-col gap-3 p-6 border border-zinc-200 rounded-2xl text-neutral-700 max-md:w-full max-sm:text-sm'>
            <b className='text-xl'>ارتباط با ما</b>
            <input className='p-3 rounded-lg bg-white border border-zinc-300 outline-primary-500' type="text" placeholder='نام خود را وارد کنید' />
            <input className='p-3 rounded-lg bg-white border border-zinc-300 outline-primary-500' type="email" placeholder='ایمیل خود را وارد کنید'/>
            <textarea className='p-3 h-56 rounded-lg bg-white border border-zinc-300 outline-primary-500' placeholder='پیام خود را بنویسید'></textarea>
            <button className='p-3 rounded-lg bg-gradient-to-bl from-primary-500 to-primary-400 bg-opacity-90 text-white flex gap-2 justify-center items-center font-bold text-lg shadow-xl'>ارسال<LuSendHorizonal className='-rotate-45 text-2xl mb-1' /></button>
        </form>
    )
}

const Info = () => {

    return (
        <ul className='w-1/2 flex flex-col gap-y-12 text-neutral-700 lg:mr-12 max-md:w-full max-md:gap-y-4'>
            {
                infos.map((info) => {
                    return (
                        <li key={info.id} className='flex flex-wrap gap-3 items-center text-lg max-sm:text-sm'>
                            <span className='p-4 rounded-full bg-primary-500 bg-opacity-90 text-white max-sm:p-2'>
                                {info.icon}
                            </span>
                            <b>{info.name} : </b>
                            <p>{info.text}</p>
                        </li>
                    )
                })
            }
            <a className='p-2 px-4 bg-primary-500 bg-opacity-90 rounded-lg flex gap-2 items-center  text-white w-fit max-md:mx-auto max-sm:text-sm' href="tel:03131325011">تماس با ما<FiPhone className='text-xl'/></a>
            <Socials/>
        </ul>
    )
}

const Socials = () => {
    return (
        <div className='max-md:mx-auto'>
            <b className='text-lg'>سیمون در شبکه های اجتماعی</b>
            <div className='flex gap-3 mt-4'>
                <a className='rounded-full bg-primary-500 p-3 bg-opacity-90 text-white hover:outline hover:outline-2 outline-primary-500 outline-offset-2' href=""><FaInstagram className='text-xl'/></a>
                <a className='rounded-full bg-primary-500 p-3 bg-opacity-90 text-white hover:outline hover:outline-2 outline-primary-500 outline-offset-2' href=""><TbBrandTwitter className='text-xl'/></a>
                <a className='rounded-full bg-primary-500 p-3 bg-opacity-90 text-white hover:outline hover:outline-2 outline-primary-500 outline-offset-2' href=""><TbBrandTelegram className='text-xl'/></a>
                <a className='rounded-full bg-primary-500 p-3 bg-opacity-90 text-white hover:outline hover:outline-2 outline-primary-500 outline-offset-2' href=""><CiFacebook className='text-xl'/></a>
            </div>
        </div>
    )
}