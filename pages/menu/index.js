import { toPersianNumbers } from '@/toPersianNumbers';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import { IoChevronBack  } from "react-icons/io5";

const breakfest = [
    {id : 1 , img : '/images/menu/breakfest/plates/self.jpg' , name : 'صبحانه سلف' , price : 400 , desc : 'بيش از 60 نوع آيتم مخصوص روزهای جمعه و تعطیلات'},
    {id : 2 , img : '/images/menu/breakfest/plates/self.jpg' , name : 'صبحانه سلف' , price : 400 , desc : 'بيش از 60 نوع آيتم مخصوص روزهای جمعه و تعطیلات'},
    {id : 3 , img : '/images/menu/breakfest/scrambeldEgg/chorizo.jpg' , name : 'chorizo omelette' , price : 187 , desc : 'تخم مرغ ، چوریزو'},
    {id : 4 , img : '/images/menu/breakfest/scrambeldEgg/chorizo.jpg' , name : 'chorizo omelette' , price : 187 , desc : 'تخم مرغ ، چوریزو'},
    {id : 5 , img : '/images/menu/breakfest/desert/bread-pudding.jpg' , name : 'Bread Pudding' , price : 141 , desc : 'سیب دارچین / تخم مرغ / تکه های نان شیرین' },
    {id : 6 , img : '/images/menu/breakfest/desert/bread-pudding.jpg' , name : 'Bread Pudding' , price : 141 , desc : 'سیب دارچین / تخم مرغ / تکه های نان شیرین' },
]

const irani = [
    {id : 1 , img : '/images/menu/irani/dig-joosh/1.jpeg' , name : 'قلیه ماهی' , price : 317 , desc : 'به رنگ قرمه است و عاری از بنشن ها که یاد اور اصالت سفره رنگین جنوبی ها ست.' },
    {id : 2 , img : '/images/menu/irani/dig-joosh/1.jpeg' , name : 'قلیه ماهی' , price : 317 , desc : 'به رنگ قرمه است و عاری از بنشن ها که یاد اور اصالت سفره رنگین جنوبی ها ست.' },
    {id : 3 , img : '/images/menu/irani/dig-dam/2.jpeg' , name : 'جواهر پلو' , price : '347' , desc : 'مرغکی است برشته که در پیشقابی مسی با زرشک و زعفران زیستش داده ایم.'},
    {id : 4 , img : '/images/menu/irani/dig-dam/2.jpeg' , name : 'جواهر پلو' , price : '347' , desc : 'مرغکی است برشته که در پیشقابی مسی با زرشک و زعفران زیستش داده ایم.'},
    {id : 5 , img : '/images/menu/irani/dig-dam/3.jpeg' , name : 'خشکه پلو' , price : '79' , desc : 'برنج بی دریغ مانده از رنگ که به کامتان مزین میشود به کباب و خورش.'},
    {id : 6 , img : '/images/menu/irani/dig-dam/3.jpeg' , name : 'خشکه پلو' , price : '79' , desc : 'برنج بی دریغ مانده از رنگ که به کامتان مزین میشود به کباب و خورش.'},
]

const cafe = [
    {id : 1 , img : '/images/menu/cafe/smoothie/pinklady.jpg' , name : 'پینک لیدی' , price : 145 , desc : 'هلو ، ماست خامه ای ، توت فرنگی'},
    {id : 2 , img : '/images/menu/cafe/smoothie/pinklady.jpg' , name : 'پینک لیدی' , price : 145 , desc : 'هلو ، ماست خامه ای ، توت فرنگی'},
    {id : 3 , img : '/images/menu/cafe/iraniColdDrinks/golabatoon.jpg' , name : 'گلابتون' , price : 97 , desc : 'گل پنيرك ، توت فرنگي ، خاكشير و …'},
    {id : 4 , img : '/images/menu/cafe/iraniColdDrinks/golabatoon.jpg' , name : 'گلابتون' , price : 97 , desc : 'گل پنيرك ، توت فرنگي ، خاكشير و …'},
    {id : 5 , img : '/images/menu/cafe/coldDrink/zhenic.jpg' , name : 'ژنيك' , price : 111 , desc : 'سيب سبز ، فلفل هالوپينو ، برگ تازه نعنا ، سودا و …'},
    {id : 6 , img : '/images/menu/cafe/coldDrink/zhenic.jpg' , name : 'ژنيك' , price : 111 , desc : 'سيب سبز ، فلفل هالوپينو ، برگ تازه نعنا ، سودا و …'},
]

const steak = [
    {id : 1 , img : '/images/menu/steak/steak/mix-grill.jpg' , name : 'Mix Grill' , price : 623 , desc : 'میکس فیله گوساله ، مرغ و میگو گریل شده'},
    {id : 2 , img : '/images/menu/steak/steak/mix-grill.jpg' , name : 'Mix Grill' , price : 623 , desc : 'میکس فیله گوساله ، مرغ و میگو گریل شده'},
    {id : 3 , img : '/images/menu/steak/chickenSteak/chiken-steak.jpg' , name : 'استيك مرغ گريل' , price : 369 , desc : 'دو نوع سس انتخابي ، سبزيجات بخار پز'},
    {id : 4 , img : '/images/menu/steak/chickenSteak/chiken-steak.jpg' , name : 'استيك مرغ گريل' , price : 369 , desc : 'دو نوع سس انتخابي ، سبزيجات بخار پز'},
    {id : 5 , img : '/images/menu/steak/burger/classic.jpg' , name : 'برگر کلاسیک' , price : 293 , desc : 'CLASSIC BURGER'},
    {id : 6 , img : '/images/menu/steak/burger/classic.jpg' , name : 'برگر کلاسیک' , price : 293 , desc : 'CLASSIC BURGER'},
]

const vegan = [
    {id : 1 , img : '/images/menu/vegan/irani/fesenjoon.jpg' , name : 'خورش فسوجن' , price : 173 },
    {id : 2 , img : '/images/menu/vegan/irani/fesenjoon.jpg' , name : 'خورش فسوجن' , price : 173 },
    {id : 3 , img : '/images/menu/vegan/frangi/vegan-burger.jpg' , name : 'برگر گیاهی' , price : 205 },
    {id : 4 , img : '/images/menu/vegan/frangi/vegan-burger.jpg' , name : 'برگر گیاهی' , price : 205 },
    {id : 5 , img : '/images/menu/vegan/frangi/fridres.jpg' , name : 'فرایدرایس سبزیجات' , price : 151 },
    {id : 6 , img : '/images/menu/vegan/frangi/fridres.jpg' , name : 'فرایدرایس سبزیجات' , price : 151 },
]

export default function Index() {
  return (
    <>
    <Head>
      <title>عمارت سیمون | منو</title>
      <meta name="description" content=""></meta>
    </Head>
    <h4 className='menu-title mt-32 md:mb-6 mb-0 max-sm:mt-20'>منو</h4>
    <div className='max-w-screen-xl px-12 mx-auto flex gap-x-2 justify-between items-center text-xl text-neutral-700 font-bold max-md:px-2 max-sm:text-sm'>
        <p>صبحانه</p>
        <span className='flex-1'></span>
        <Link href="/menu/breakfest" className='flex gap-1 items-center text-neutral-600'>بیشتر<IoChevronBack/></Link>
    </div>
    <section className='mt-4 mb-8 max-w-screen-xl mx-auto px-12 flex gap-4 overflow-scroll max-md:px-2 max-md:my-4'>
        {breakfest.map(item => <MenuItem key={item.id} item={item}/>)}
    </section>
    <div className='max-w-screen-xl px-12 mx-auto flex gap-x-2 justify-between items-center text-xl text-neutral-700 font-bold max-md:px-2 max-sm:text-sm'>
        <p>غذای ایرانی</p>
        <span className='flex-1'></span>
        <Link href="/menu/irani" className='flex gap-1 items-center text-neutral-600'>بیشتر <IoChevronBack/></Link>
    </div>
    <section className='mt-4 mb-8 max-w-screen-xl mx-auto px-12 flex gap-4 overflow-scroll max-md:px-2 max-md:my-4'>
        {irani.map(item => <MenuItem key={item.id} item={item}/>)}
    </section>
    <div className='max-w-screen-xl px-12 mx-auto flex gap-x-2 justify-between items-center text-xl text-neutral-700 font-bold max-md:px-2 max-sm:text-sm'>
        <p>کافه</p>
        <span className='flex-1'></span>
        <Link href="/menu/cafe" className='flex gap-1 items-center text-neutral-600'>بیشتر<IoChevronBack/></Link>
    </div>
    <section className='mt-4 mb-8 max-w-screen-xl mx-auto px-12 flex gap-4 overflow-scroll max-md:px-2 max-md:my-4'>
        {cafe.map(item => <MenuItem key={item.id} item={item}/>)}
    </section>
    <div className='max-w-screen-xl px-12 mx-auto flex gap-x-2 justify-between items-center text-xl text-neutral-700 font-bold max-md:px-2 max-sm:text-sm'>
        <p>استیک</p>
        <span className='flex-1'></span>
        <Link href="/menu/steak" className='flex gap-1 items-center text-neutral-600'>بیشتر<IoChevronBack/></Link>
    </div>
    <section className='mt-4 mb-8 max-w-screen-xl mx-auto px-12 flex gap-4 overflow-scroll max-md:px-2 max-md:my-4'>
        {steak.map(item => <MenuItem key={item.id} item={item}/>)}
    </section>
    <div className='max-w-screen-xl px-12 mx-auto flex  gap-x-2 justify-between items-center text-xl text-neutral-700 font-bold max-md:px-2 max-sm:text-sm'>
        <p>گیاهی</p>
        <span className='flex-1'></span>
        <Link href="/menu/vegan" className='flex gap-1 items-center text-neutral-600'>بیشتر<IoChevronBack/></Link>
    </div>
    <section className='mt-4 mb-24 max-w-screen-xl mx-auto px-12 flex gap-4 overflow-scroll max-md:px-2 max-md:my-4'>
        {vegan.map(item => <MenuItem key={item.id} item={item}/>)}
    </section>
    </>
  )
}

const MenuItem = ({item}) => {
    return (
        <div className='space-y-2'>
            <img loading="lazy" className='md:min-w-48 md:size-48 min-w-36 size-36 rounded-xl shadow-md object-cover' src={item.img} alt={item.name} />
            <b className='flex justify-between items-center max-sm:text-sm'>{item.name}<span className='text-primary-500 lg:text-lg'>{toPersianNumbers(item.price)}</span></b>
            <p className='line-clamp-1 max-sm:text-sm text-neutral-600'>{item.desc}</p>
        </div>
    )
}