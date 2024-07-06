import CategoryBtn from '@/components/ui/categoryBtn'
import CategoryWrapper from '@/components/ui/categoryWrapper'
import Item from '@/components/ui/item'
import Head from 'next/head'
import React, { useRef } from 'react'
import { LuSalad } from 'react-icons/lu'

const appetizer = [
  {id : 4 , img : '/images/menu/irani/sar-aghaz/5.jpeg' , name : 'فتوش' , price : 245 , desc : 'شهرتی به وسعت بیش از بیست دیار، ترکیب ساده ای از کاهو خیار وگوجه وگشنیز با عطر نعناع در پوششی از، نان عربی سرخ شده.'},
  {id : 1 , img : '/images/menu/irani/sar-aghaz/14.jpeg' , name : 'حمص' , price : 131 , desc : 'حریره ای از نخود سیاه که با ارده طبعش به توازن رسیده است،اثری است بی تکرار از شهراعراب'},
  {id : 2 , img : '/images/menu/irani/sar-aghaz/10.jpeg' , name : 'زيتون' , price : 89 , desc : 'به دستورتان سرکه و نمکی یا پرورده اش تقدیمتان می گردد.'},
  {id : 3 , img : '/images/menu/irani/sar-aghaz/9.jpeg' , name : 'زیتون پرورده' , price : 105 , desc : ''},
]

const iraniPlate = [
  {id : 1 , img : '/images/menu/irani/dig-dam/3.jpeg' , name : 'خشکه پلو' , price : '79' , desc : 'برنج بی دریغ مانده از رنگ که به کامتان مزین میشود به کباب و خورش.'},
  {id : 2 , img : '/images/menu/vegan/irani/fesenjoon.jpg' , name : 'خورش فسوجن' , price : 173 , desc : ''},
  {id : 3 , img : '/images/menu/vegan/irani/ghelie.jpg' , name : 'خورش قلیه' , price : 193 , desc : ''},
  {id : 4 , img : '/images/menu/irani/dig-dam/8.jpeg' , name : 'شوید باقالی پلو' , price : '87' , desc : ''},
]

const frangiPlate = [
  {id : 1 , img : '/images/menu/vegan/frangi/vegan-burger.jpg' , name : 'برگر گیاهی' , price : 205 , desc : ''},
  {id : 2 , img : '/images/menu/vegan/frangi/grilled-vegetable.jpg' , name : 'سبزیجات گریل' , price : 127 , desc : ''},
  {id : 4 , img : '/images/menu/vegan/frangi/fridres.jpg' , name : 'فرایدرایس سبزیجات' , price : 151 , desc : ''},
  {id : 5 , img : '/images/menu/vegan/frangi/felafel.jpg' , name : 'فلافل' , price : 107 , desc : ''},
  {id : 3 , img : '/images/menu/steak/appetizer/fride-potato.jpg' , name : 'سیب زمینی سرخ شده' , price : 135 , desc : 'Fried Potato'},
]

export default function Vegan() {

  const appetizerRef = useRef()
  const iraniPlateRef = useRef()
  const frangiPlateRef = useRef()

  return (
    <>
    <Head>
      <title>عمارت سیمون | گیاهی</title>
      <meta name="description" content=""></meta>
    </Head>

    <CategoryWrapper>
      <CategoryBtn callBack={() => window.scrollTo({top : appetizerRef.current.offsetTop - 200})} text='پیش غذا'> <LuSalad className='text-2xl text-primary-500' /> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : iraniPlateRef.current.offsetTop - 200})} text='غذای ایرانی'></CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : frangiPlateRef.current.offsetTop - 200})} text='غذای فرنگی'></CategoryBtn>
    </CategoryWrapper>

    <section className='text-neutral-700 my-32 max-w-screen-xl mx-auto gap-6 justify-center flex gap-y-20 flex-wrap 2xl:max-w-screen-2xl max-sm:mt-16 max-sm:gap-y-4 p-3'>

        <h4 ref={appetizerRef} className='menu-title'>پیش غذا</h4>
        {appetizer.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={iraniPlateRef} className='menu-title'>غذای ایرانی</h4>
        {iraniPlate.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={frangiPlateRef} className='menu-title'>غذای فرنگی</h4>
        {frangiPlate.map(data => <Item key={data.id} {...data}/>)}
        
    </section>
    </>
  )
}