import Image from 'next/image'
import React, { useState } from 'react'

export default function SpecialItems() {

  const [datas , setDatas] = useState([
    {id : 1 , img : '/images/specialParts/1.jpg' , name : 'بز قرمه' , desc : 'از شما چه پنهان که معجزه ای از کشک و گوشت بره ایست که در دیار کریمان آفریده اند.'},
    {id : 2 , img : '/images/specialParts/2.jpg' , name : 'ساندویچ پاسترامی' , desc : ''},
    {id : 3 , img : '/images/specialParts/4.jpg' , name : 'استیک سیمون' , desc : 'استیک های سیمون طعمی جادویی ست، که در کامت خاطره ی جاودانه به جای می گذارد'},
    {id : 4 , img : '/images/specialParts/3.jpg' , name : 'مردد کباب' , desc : 'برای آن عده سخت پسند که جمعی را معطل خود کرده است برای تعیین خواسته اش که کارش را سهل کرده ایم با گرد هم آوردن قنجه کباب و شیش طاووق و شیر کباب.'},
  ])  

  return (
    <>
    <h4 className='index-title mt-12'>ویژه های سیمون</h4>
    <div className='flex max-w-screen-xl 2xl:max-w-screen-2xl px-10 mx-auto gap-2 gap-x-2 py-10 mb-10 flex-wrap text-neutral-700 max-sm:px-6'>
        {datas.map((data) => <SpecialItem key={data.id} {...data}/>)}
    </div>
    </>
  )
}

const SpecialItem = ({name , desc , img }) => {
    return (
        <div className={`w-[49%] flex gap-2 p-3 rounded-lg bg-zinc-50 border border-zinc-200 pl-4 max-lg:w-full max-md:p-2`}>
            <img loading="lazy" className='size-28 rounded-lg max-md:size-20' src={img} alt={name}/>
            <div className='flex flex-col justify-center p-2 max-md:text-sm'>
                <b className='text-lg max-md:text-base'>{name}</b>
                {desc && <p className='text-justify mt-2'>{desc}</p>}
            </div>
        </div>
    )
}