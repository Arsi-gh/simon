import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <>
    <Head>
      <title>صفحه یافت نشد 404</title>
      <meta name="description" content=""></meta>
    </Head>
    <section className='mt-32 pb-16 w-fit mx-auto flex flex-col items-center'>
        <b className='text-[12rem] text-primary-500 max-[380px]:text-[6rem]'>۴۰۴</b>
        <p className='text-2xl max-[380px]:text-xl'>صفحه مورد نظر یافت نشد</p>
        <Link className='mt-16 text-xl rounded-xl p-3 px-5 bg-gradient-to-bl from-primary-500 to-primary-400 text-white max-[380px]:text-base' href="/">بازگشت به صفحه اصلی</Link>
    </section>
    </>
  )
}
