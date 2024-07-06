import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';


export default function MansionParts () {

  const swiperRef = useRef();

  const [datas , setDatas] = useState([
    {id : 3 , title : 'بالکن موزه و موزه رستوران' , desc : 'بالکن از مهم ترین فضا‌های معماری ایرانی است و بیشتر در خانه‌های سنتی به چشم می‌خورد. این بخش از خانه ایرانی از نظر فرم، جایگاه و ابعاد متنوع است و معمولا ارتفاعی بلند تر از سایر نقاط در نما دارد، بنابراین زود تر به چشم می آید. همچنان که میان حیاط خانه ایستاده اید، وقتی به ساختمان رو به رویتان نگاه می کنید می توانید فضای نشیمن نیمه بازی را بیابید که با ارتفاعی بالاتر از سطح اطراف خود، در دل دیوارهای خانه جای گرفته و با تزئینات جذابی خود نمایی می کند. ایوان معرفی کننده و پیشانی نماست.'},
    {id : 2 , title : 'اتاق های دورنشین' , desc : 'در خانه های ایرانی اتاق ها به صورت سه دری، پنج دری ، تالار و … ساخته شده و هر کدام ویژگی خود را داشته اند. یکی از علائق ایرانیان در ساخت خانه ها ایجاد ارتباط بصری بین اتاق و فضای بیرون آن است. در بیشتر جاها از اتاق های سه دری استفاده می شده ولی در اصفهان به دلیل آب و هوای آن اتاق یک دری با دری بزرگ داشتند. در کنار در، پا چنگ یا پنجره های مشبک می ساختند.'},
    {id : 1 , title : 'اتاق جلسات' , desc : 'مناسب برای جلسات شما'},
    {id : 4 , title : 'اتاق گالری' , desc : 'مناسب برای جلسات و مهمانی های شما'},
    {id : 5 , title : 'سایت مرکزی' , desc : 'میانسرا با تناسب طلایی ایرانی و جهت گیری دستوری خود، در تمام سال محیط بهداشتی مطبوعی فراهم و از گردش آفتاب و نور خورشید، بهترین استفاده را برای فضاهای گردا گرد خود کسب و تامین می کند. در صورتی که جهت گیری یاد شده با مسیر باد غالب و سمت طوفان های شن یا محل استقرار کوه بست به آبادی سازگار نباشد، میانسرا به جنوب غربی متمایل می گردد. جهت یابی میانسراها به قرار فوق، حاصل ترسیم هندسی مستطیل های محاط در شش ضلعی منتظم است.'},
    {id : 6 , title : 'اتاق شاه نشین' , desc : 'شاه نشین در معماری ایرانی به مکانی گفته می شود که در شمال ساختمان واقع شده بود و آفتاب خور است و به آن پنج دری نیز می گویند . سقف شاه نشین سقفی بلند واقع شده که باعث خنکی میشود. شاه نشین معمولا مورد استفاده بزرگ خانواده در کنار میهمانان ویژه قرار می گیرد.'}
  ])

  const [activePart , setActivePart] = useState(0)

  return (
    <>
    <h4 className='index-title'> قسمتهای مختلف عمارت سیمون</h4>
    <section className='mt-16 flex justify-center text-neutral-700 max-w-screen-xl mx-auto 2xl:max-w-screen-2xl max-lg:flex-col-reverse max-lg:gap-y-8 max-lg:mb-10 max-sm:overflow-hidden'>
      <div className='xl:mr-40 w-[30rem] flex flex-col justify-center gap-6 relative lg:mr-20 max-lg:text-center max-lg:mx-auto max-md:text-sm max-md:items-center max-sm:w-full max-sm:gap-y-2 max-sm:px-6'>
        <b className='text-2xl font-bold max-sm:text-lg'>{datas[activePart].title}</b>
        <p className='text-justify'>{datas[activePart].desc}</p>
        <div className='flex gap-2 absolute bottom-6 max-lg:-bottom-16 max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2'>
          <button name='next-slide-button' onClick={() => swiperRef.current.slidePrev()} className='bg-zinc-100 border border-zinc-200 p-2 shadow-md rounded-full transition-all hover:bg-zinc-200'><LuChevronRight className='text-2xl'/></button>
          <button name='prev-slide-button' onClick={() => swiperRef.current.slideNext()} className='bg-zinc-100 border border-zinc-200 p-2 shadow-md rounded-full transition-all hover:bg-zinc-200'><LuChevronLeft className='text-2xl'/></button>
        </div>
      </div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(e) => setActivePart(e.activeIndex)}
        >
        <SwiperSlide><img loading="lazy" className='w-full h-full object-cover' alt='mansion-part-1' src='/images/mansionParts/2.png'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='w-full h-full object-cover' alt='mansion-part-2' src='/images/mansionParts/1.jpeg'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='w-full h-full object-cover' alt='mansion-part-3' src='/images/mansionParts/3.jpeg'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='w-full h-full object-cover' alt='mansion-part-4' src='/images/mansionParts/4.jpeg'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='w-full h-full object-cover' alt='mansion-part-5' src='/images/mansionParts/5.jpeg'/></SwiperSlide>
        <SwiperSlide><img loading="lazy" className='w-full h-full object-cover' alt='mansion-part-6' src='/images/mansionParts/6.png'/></SwiperSlide>
      </Swiper>
    </section>
    </>
  );
};