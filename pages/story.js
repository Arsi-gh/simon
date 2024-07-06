import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function story() {
  return (
    <>
    <Head>
      <title>عمارت سیمون | حکایت سیمون</title>
      <meta name="description" content=""></meta>
    </Head>
    <main className='mt-20 pt-20 max-w-screen-xl  mx-auto 2xl:max-w-screen-2xl text-neutral-700 py-10 px-12 max-sm:px-4'>
      <div className='border-2 border-white bg-gradient-to-bl from-primary-500 to-primary-400 text-xl font-bold px-4 text-white mb-12 flex flex-col w-fit mx-auto items-center gap-4 p-3 rounded-xl relative max-sm:text-sm'>
        <h4>تاریخچه عمارت</h4>
        <div className='h-4 w-1 bg-primary-500 absolute -bottom-4'>
          <span className='bg-primary-500 rounded-full size-3  outline outline-2 outline-primary-500 outline-offset-2 absolute -right-1 -bottom-4'></span>
        </div>
      </div>
      <TextWrapper title="صاحب عمارت" text="بر اساس شواهد موجود مالک اصلی خانۀ خواجه سیمون، یکی از تاجران بنام  در قرن هجدهم میلادی بوده که وضعیت مالی خوبی نیز داشته است. در اسناد و مدارک مکتوب، آمده که وی علاوه بر فعالیت تجاری و ‏اجتماعی در امور خیریه پیشقدم بوده و سرپرستی حدود سی خانوار را در فریدن بر عهده داشته است. او در 1240ق/1824م به دست ‏حاجی هاشم خان، حاکم وقت، کشته شد.‏"/>
      <TextWrapper title="پس از مرگ سیمون" img="/images/story/1.png" imgTitle="کتیبه سیمون" text="در 1259ق/ 1843م، یعنی نوزده سال پس از مرگ وی اسقف هُوانس سورنیان خانۀ سیمون را از کلانتر قوکاس خریداری کرد.‏ ‏خلیفۀ جلفا ملک مذکور را برای آموزش علوم دینی و به منزلۀ مدرسۀ دینی ارمنی، مورد استفاده قرار داد. در 1310ق/ 1892م با کوشش خلیفه یسائی تعمیرات و بازسازی بسیاری در این بنا صورت گرفت. در متن کتیبۀ سنگی نصب شده بر ‏نمای شمالی طبقۀ فوقانی، که مربوط به همان دوره است، چنین آمده:«این خانه متعلق به کلیسای وانک، که معروف به خانۀ سیمون ‏است، با سعی وافر در حفظ معماری خود در زمان خلیفه یسائی تفلیسی، بیست و دومین پیشوای مذهبی کلیسای وانک جلفای نو، ‏در 1892 نوسازی شد»."/>
      <TextWrapper title="تغییر کاربری به بیمارستان" img="/images/story/2.jpeg" imgTitle="تصویری از کارکنان بیمارستان در عمارت سیمون" text="پس از تعمیرات کاربری خانه تغییر یافت و خانۀ سیمون از1329ق/ 1911م به منزلۀ بیمارستان مورد استفاده قرار گرفت و بیمارستان بغوزخانیان،که در1326ق/ 1908م در نزدیکی کلیسای هُوانس در چهارسو تأسیس شده بود، به خانۀ سیمون انتقال یافت.  از شواهد و گزارش  ها چنین بر  می  آید که کلیۀ کارهای بالینی در این مرکز انجام می  شده است"/>
      <TextWrapper title="باشگاه تفریحی"  text="در1311ش/1932م،بیمارستان بغوزخانیان به محل ساختمان اصلی، که برای این کار احداث شده بود، انتقال یافت و بلافاصله ‏خانۀ سیمون را برای استفاده به منزلۀ باشگاه تفریحی ارمنیان آماده و تجهیز کردند. باشگاه در طول فعالیت خود به جز امکانات تفریحی، خدمات فرهنگی گوناگونی نیز ارائه می  کرد از قبیل برگزاری ‏جشن  ها، سخنرانی  ها، برنامه‌های نمایشی، اجرای کنسرت  های موسیقی و بازی  های مختلف تفریحی. همچنین، محل تجمع انجمن  ها و تشکل  ها نیز بود. کتابخانه‌ای به نام رافی نیز در خانۀ سیمون ایجاد شد که در1351ش/ 1972م به کلیسای وانک ‏انتقال یافت.‏"/>
      <TitleWrapper title="بازسازی عمارت"/>
      <TextWrapper title="مرمت و بازسازی" imgTitle="نمای اصلی عمارت پس از بازسازی"  img="/images/story/3.jpeg" text="در 1380ش/ 2001م، دکتر غلامرضاکیانی از خانۀ سیمون بازدید به عمل آورده و گزارش مبسوطی مبتنی بر وضع نابسامان و در حال ‏تخریب بنا و طرح پیشنهادی لازم برای فراهم ساختن زمینۀ طراحی مرمت و احیای آن ارائه کرد. بنابراین، بدون اتلاف وقت اقدامات مقدماتی و اضطراری لازم بر روی بنای ‏مذکور آغاز شد. این امر با کار مطالعه، مستندنگاری و طراحی مرمت شروع و عملیات اجرایی از 1381ش آغاز و ‏در 1385ش به اتمام رسید."/>
      <TitleWrapper title="کافه رستوران عمارت سیمون"/>
      <TextWrapper imgTitle="نمایی از رستوان سیمون" img="/images/story/4.jpeg"  text="هم اکنون مجموعه غدايى #عمارت_سيمون با كادر مجرب آشپزى به سرپرستى آقاى #كيان_رنجبر مدرس بين المللى و با تجربه صدا و سيما و داور سرشناس برنامه محبوب #دستپخت برای ساخت لحظات زیبا و دلنشین در کنار شما عزیزان است. عمارت سیمون کافه و رستورانی در نصف جهان و از دل تاریخ است.عمارتی جا مانده از دل تاریخ که با فضایی بسیار زیبا و دلنشین به همراه منوی بسیار جذاب میزبان شما عزیزان است"/>
      <ImageWrapper width="w-54" img="/images/story/5.png"/>
    </main>
    </>
  )
}

const ProgressBar = () => {
  return (
    <>
    <div className='h-4 w-1 bg-primary-500 absolute -top-4'>
      <span className='bg-primary-500 rounded-full size-3  outline outline-2 outline-primary-500 outline-offset-2 absolute -right-1 -top-4'></span>
    </div>
    <div className='h-4 w-1 bg-primary-500 absolute -bottom-4'>
      <span className='bg-primary-500 rounded-full size-3  outline outline-2 outline-primary-500 outline-offset-2 absolute -right-1 -bottom-4'></span>
    </div>
    </>
  )
}

const TitleWrapper = ({title}) => {
  return (
    <div className='border-2 border-white bg-gradient-to-bl from-primary-500 to-primary-400 text-xl font-bold px-4 text-white mb-12 flex flex-col w-fit mx-auto items-center gap-4 p-3 rounded-xl relative max-sm:text-sm'>
      <h4>{title}</h4>
      <ProgressBar/>
    </div>
  )
}

const TextWrapper = ({title  , text , img , imgTitle , alt}) => {
  return (
    <div className='w-full mb-12 border-2 mx-auto justify-center items-center border-primary-500 p-4 rounded-xl flex  gap-4 relative max-sm:w-full max-md:flex-col'>
        <div>
          <strong className='text-xl max-sm:text-sm text-center'>{title}</strong>
          <p className='text-lg mt-6 max-sm:text-sm'>{text}</p>
        </div>
        <div className='flex flex-col gap-2 max-w-56 '>
          <strong className='text-center'>{imgTitle}</strong>
          <img loading="lazy" className='rounded-xl' src={img} alt={alt}/>
        </div>
        <ProgressBar/>
    </div>
  )
}

const ImageWrapper = ({title , img }) => {
  return (
    <div className='border-2 w-full mb-16 flex flex-col mx-auto items-center gap-4 border-primary-500 p-4 rounded-xl relative'>
        <strong className='text-xl max-sm:text-sm'>{title}</strong>
        <img loading="lazy" className='w-56 rounded-xl' src={img} alt={title} />
        <div className='h-4 w-1 bg-primary-500 absolute -top-4'>
          <span className='bg-primary-500 rounded-full size-3  outline outline-2 outline-primary-500 outline-offset-2 absolute -right-1 -top-4'></span>
        </div>
    </div>
  )
}
