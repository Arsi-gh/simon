import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <span className='flex gap-2 items-center'>
        <img loading="lazy" className='size-16 max-sm:size-12' src='/images/logo.png' alt='logo'/>
        <Link href="/" className='text-primary-500 font-bold text-2xl max-sm:text-lg'>عمـارت سیـمون</Link>
    </span>
  )
}
