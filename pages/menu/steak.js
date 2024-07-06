import CategoryBtn from '@/components/ui/categoryBtn'
import CategoryWrapper from '@/components/ui/categoryWrapper'
import Item from '@/components/ui/item'
import Head from 'next/head'
import React, { useRef } from 'react'
import { CiFries } from 'react-icons/ci'
import { GiSteak } from 'react-icons/gi'
import { IoFishOutline } from 'react-icons/io5'
import { LiaHamburgerSolid } from 'react-icons/lia'
import { LuSalad, LuSandwich } from 'react-icons/lu'

const salads = [
  {id : 1 , img : '/images/menu/steak/salad/sezar.jpg' , name : 'Classic Ceasar Salad' , price : 283 , desc : ''},
  {id : 2 , img : '/images/menu/steak/salad/beef.jpg' , name : 'Beef Salad' , price : 355 , desc : 'کاهو ، توت فرنگی ، بادام زمینی ، بیبی اسفناج ، فیله گوساله'},
  {id : 3 , img : '/images/menu/steak/salad/crispy.jpg' , name : 'Crispy chicken Salad' , price : 287 , desc : 'کاهو ، تکه های مرغ سوخاری ، گوجه ، پنیر موزارالا سوخاری ، سس سزار ، زیتون سیاه و سبز ، کاپریس'},
  {id : 4 , img : '/images/menu/steak/salad/vegetable.jpg' , name : 'Vegetable Plate' , price : 213 , desc : 'ذرت ، قارچ ، بروکلی ، کدو ، سس قارچ خامه ای ، سس قارچ باربیکیو'},
]

const appetizer = [
  {id : 1 , img : '/images/menu/steak/appetizer/fride-potato.jpg' , name : 'سیب زمینی سرخ شده' , price : 135 , desc : 'Fried Potato'},
  {id : 2 , img : '/images/menu/steak/appetizer/croquettes.jpg' , name : 'کروکت سیب زمیني' , price : 173 , desc : 'POTATO CROQUETTES'},
  {id : 3 , img : '/images/menu/steak/appetizer/cheesy-bacon-potato.jpg' , name : 'Cheesy Bacon Potatoes' , price : 213 , desc : 'سیب زمینی سرخ کرده ، بیکن ، پنیر پارمسان ، پنیر موزارلا ، وایت سس'},
  {id : 4 , img : '/images/menu/steak/appetizer/mashroom.jpg' , name : 'Fried Mushroom' , price : 129 , desc : 'قارچ سوخاری شده ، سس تارتار'},
]

const steak = [
  {id : 1 , img : '/images/menu/steak/steak/beef-filet-steak.jpg' , name : 'Beef Filet Steak' , price : 697 , desc : 'استیک فیله گوساله 350 گرمی'},
  {id : 2 , img : '/images/menu/steak/steak/filet-mignon.jpg' , name : 'filet mignon' , price : 585 , desc : 'استیک فیله گوساله250 گرمی'},
  {id : 3 , img : '/images/menu/steak/steak/lamb-chops.jpg' , name : 'Lamb Chops' , price : 655 , desc : '400 گرم لم چاپس'},
  {id : 4 , img : '/images/menu/steak/steak/mix-grill.jpg' , name : 'Mix Grill' , price : 623 , desc : 'میکس فیله گوساله ، مرغ و میگو گریل شده'},
  {id : 5 , img : '/images/menu/steak/steak/t-bone.jpg' , name : 'T-bone' , price : 657 , desc : 'تی بون 500 گرمی'},
  {id : 6 , img : '/images/menu/steak/steak/rib-steak.jpg' , name : 'ريب آي 300 گرمي' , price : 675 , desc : 'RIB STEAK'},
]

const chickenSteak = [
  {id : 1 , img : '/images/menu/steak/chickenSteak/chiken-steak.jpg' , name : 'استيك مرغ گريل , GRILLED CHICKEN' , price : 369 , desc : 'دو نوع سس انتخابي ، سبزيجات بخار پز'},
]

const seaSteak = [
  {id : 1 , img : '/images/menu/steak/seaSteak/fish-steak.jpg' , name : 'استیک ماهی شیر 250 گرمی' , price : 423 , desc : 'Fish Steak'}
]

const burger = [
  {id : 1 , img : '/images/menu/steak/burger/classic.jpg' , name : 'CLASSIC BURGER' , price : 293 , desc : 'برگر کلاسیک'},
  {id : 2 , name : 'BURGER CHORIZO' , price : 337 , desc : 'برگر گوشت ، چوریتسو ، دیپچدار ، پارسلی سس'},
  {id : 3 , img : '/images/menu/steak/burger/classic-chicken.jpg' , name : 'Classic Chicken burger' , price : 227 , desc : 'برگرمرغ کلاسیک'},
  {id : 4 , img : '/images/menu/steak/burger/special-burger.jpg' , name : 'SPECIAL BURGER' , price : 343 , desc : 'برگر گوشت ، بیکن ، پنیرهالومی'},
]

const pasta = [
  {id : 1 , img : '/images/menu/steak/pasta/tomato-beef-pasta.jpg' , name : 'Tomato beef pasta' , price : 313 , desc : 'اسپاگتی ، سس مارینا'},
  {id : 2 , img : '/images/menu/steak/pasta/chicken-alfredo.jpg' , name : 'CHICKEN ALFREDO PASTA' , price : 299 , desc : 'پنه ، سس آلفردو ،‌ مرغ'},
  {id : 3 , img : '/images/menu/steak/pasta/fettuccine-pesto.jpg' , name : 'Fettuccine with pesto Chicken' , price : 287 , desc : 'فتوچینی، سس پستو، مرغ'},
]

const sandwiches = [
  {id : 1 , img : '/images/menu/steak/sandwiches/cheese-steak.jpg' , name : 'Cheese Steak Sandwich' , price : 299 , desc : 'اسلایس فیله گوساله ، سس قارچ ، موزارلا'},
  {id : 2 , img : '/images/menu/steak/sandwiches/pastarami.jpg' , name : 'Pastarami Sandwich' , price : 277 , desc : 'پاستارامی ، پنیر موزارالا ، نان ، مخلفات'},
  {id : 3 , img : '/images/menu/steak/sandwiches/zinger-burger.jpg' , name : 'zinger burger' , price : 273 , desc : 'فیله مرغ سوخاری ، نان ، مخلفات ، سس تاتار'},
]

const fried = [
  {id : 1 , img : '/images/menu/steak/fried/chicken-popcorn.jpg' , name : 'Chicken Popcorn' , price : 217 , desc : 'سینه مرغ سوخاری شده ، سس تارتار ، کاهو فرانسه'},
  {id : 2 , img : '/images/menu/steak/fried/crunchy-shrimp.jpg' , name : 'CRUNCHY FRIED SHRIMP' , price : 487 , desc : 'میگو سوخاری ، سیب زمینی سرخ کرده ، نان سیر'},
  {id : 3 , img : '/images/menu/steak/fried/double-down.jpg' , name : 'doble down' , price : 413 , desc : 'دو تکه سینه مرغ سوخاری شده ، پنیر گودا ، بیکن'},
  {id : 4 , img : '/images/menu/steak/fried/fish-and-chips.jpg' , name : 'FISH AND CHIPS' , price : 323 , desc : 'فیله ماهی سوخاری ، سیب زمینی سرخ کرده'},
  {id : 5 , img : '/images/menu/steak/fried/sweet-sour-chicken.jpg' , name : 'sweet and sour chicken' , price : 345 , desc : 'سینه مرغ کریسپس ، سس ترش و شیرین ، سس تاتار ، کنجد و پیازچه'},
  {id : 6 , img : '/images/menu/steak/fried/sweet-spicy-chicken.jpg' , name : 'Sweet And Spicy Chicken' , price : 345 , desc : 'تکه های مرغ سوخاری تند با سس شیرین و اسپایسی'},
  {id : 7 , img : '/images/menu/steak/fried/sweet-chili-chicken.jpg' , name : 'Sweet Chili Chicken' , price : 345 , desc : 'تکه های مرغ سوخاری شده با کاور سس تند و شیرین'},
]

export default function Steak() {

  const saladRef = useRef()
  const appetizerRef = useRef()
  const steakRef = useRef()
  const chickenSteakRef = useRef()
  const seaSteakRef = useRef()
  const burgerRef = useRef()
  const pastaRef = useRef()
  const sandwicheRef = useRef()
  const friedRef = useRef()

  return (
    <>
    <Head>
      <title>عمارت سیمون | استیک</title>
      <meta name="description" content=""></meta>
    </Head>

    <CategoryWrapper>
      <CategoryBtn callBack={() => window.scrollTo({top : saladRef.current.offsetTop - 200})} text="سالاد"> <LuSalad className='text-2xl text-primary-500' /></CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : appetizerRef.current.offsetTop - 200})} text="پیش غذا" > <CiFries className='text-2xl text-primary-500' /> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : steakRef.current.offsetTop - 200})} text="استیک ها"> <GiSteak className='text-2xl text-primary-500' /> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : chickenSteakRef.current.offsetTop - 200})} text="استیک مرغ"> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : seaSteakRef.current.offsetTop - 200})} text="استیک دریایی"> <IoFishOutline className='text-2xl text-primary-500'/></CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : burgerRef.current.offsetTop - 200})} text="برگرها"> <LiaHamburgerSolid className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : pastaRef.current.offsetTop - 200})} text="پاستا"> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : sandwicheRef.current.offsetTop - 200})} text="ساندویچ ها"> <LuSandwich className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : friedRef.current.offsetTop - 200})} text="غذاهای سرخ شده"> </CategoryBtn>
    </CategoryWrapper>

    <section className='text-neutral-700 my-32 max-w-screen-xl mx-auto gap-6 justify-center flex gap-y-20 flex-wrap 2xl:max-w-screen-2xl max-sm:mt-16 max-sm:gap-y-4 p-3'>

        <h4 ref={saladRef} className='menu-title'>سالاد</h4>
        {salads.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={appetizerRef} className='menu-title'>پیش غذا</h4>
        {appetizer.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={steakRef} className='menu-title'>استیک ها</h4>
        {steak.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={chickenSteakRef} className='menu-title'>استیک مرغ</h4>
        {chickenSteak.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={seaSteakRef} className='menu-title'>استیک دریایی</h4>
        {seaSteak.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={burgerRef} className='menu-title'>برگرها</h4>
        {burger.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={pastaRef} className='menu-title'>پاستا</h4>
        {pasta.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={sandwicheRef} className='menu-title'>ساندویچ ها</h4>
        {sandwiches.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={friedRef} className='menu-title'>غذاهای سرخ شده</h4>
        {fried.map(data => <Item key={data.id} {...data}/>)}

    </section>
    </>
  )
}