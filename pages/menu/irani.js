import CategoryBtn from '@/components/ui/categoryBtn'
import CategoryWrapper from '@/components/ui/categoryWrapper'
import Item from '@/components/ui/item'
import Head from 'next/head'
import React, { useRef } from 'react'

const starter = [
    {id : 1 , img : '/images/menu/irani/sar-aghaz/1.jpeg' , name : 'معجون ماست' , price : 77 , desc : 'معجونی از ماست که مختص ماست.'},
    {id : 2 , img : '/images/menu/irani/sar-aghaz/2.jpeg' , name : 'وینگوم ماست' , price : 77 , desc : 'روایتی از بورانی بادنجان از دیار مازندران.'},
    {id : 4 , img : '/images/menu/irani/sar-aghaz/4.jpeg' , name : 'قارنی یاریخ' , price : 141 , desc : 'بادنگان شکم پر ، با خوراکی لذیذ از گوشت ساطوری ، که با شهدی از انار و زرشک مزینش کرده ایم.'},
    {id : 5 , img : '/images/menu/irani/sar-aghaz/5.jpeg' , name : 'فتوش' , price : 231 , desc : 'شهرتی به وسعت بیش از بیست دیار، ترکیب ساده ای از کاهو خیار وگوجه وگشنیز با عطر نعناع در پوششی از، نان عربی سرخ شده.'},
    {id : 6 , img : '/images/menu/irani/sar-aghaz/6.jpeg' , name : 'شهر فرنگ' , price : 237 , desc : 'جمیع رنگ و طعم و مزه هایی ست از هوس انگیزهای سرآغازمان، که دیده را به شوق و شکم را به ذوق وامیدارد'},
    {id : 7 , img : '/images/menu/irani/sar-aghaz/7.jpeg' , name : 'سوپ' , price : 83 , desc : 'شوربایی برگرفته از دیار فرنگ که روزانه به زعم رئیس مطبخ خانه آفریده میشود.'},
    {id : 8 , img : '/images/menu/irani/sar-aghaz/8.jpeg' , name : 'سبزه باغ' , price : 287 , desc : 'منظره ای سبز از کاهو و گیاه و میوه فصل و دانه آجیل و تکه های پنیر ، تر شده با عسل و آمیخته بر عصاره زرشک'},
    {id : 18 , img : '/images/menu/irani/sar-aghaz/18.jpeg' , name : 'پیشقاب مهرگان' , price : 217 , desc : 'حمص / خورشت ماست / معجون ماست'},
    {id : 9 , img : '/images/menu/irani/sar-aghaz/9.jpeg' , name : 'زیتون پرورده' , price : 95 , desc : ''},
    {id : 10 , img : '/images/menu/irani/sar-aghaz/10.jpeg' , name : 'زيتون' , price : 81 , desc : 'به دستورتان سرکه و نمکی یا پرورده اش تقدیمتان می گردد.'},
    {id : 19 , img : '/images/menu/irani/sar-aghaz/19.jpeg' , name : 'باباغنوش' , price : 113 , desc : 'بورانی بادنجانی، باسبک وسیاق عربی که آمیخته با ارده و سیر وترشی لیمواست.'},
    {id : 12 , img : '/images/menu/irani/sar-aghaz/12.jpeg' , name : 'دست چین بی بی' , price : 67 , desc : 'یاد آور شیشه هایی از ترشی آلبالو در پاگرد خانه ی بی بی ست.'},
    {id : 13 , img : '/images/menu/irani/sar-aghaz/13.jpeg' , name : 'خورشت ماست' , price : 97 , desc : 'ابتکاری از مطبخ خانه دیار اصفهان ترکیب ماست فرآورده شده با گوشت گردن و زعفران.'},
    {id : 14 , img : '/images/menu/irani/sar-aghaz/14.jpeg' , name : 'حمص' , price : 111 , desc : 'حریره ای از نخود سیاه که با ارده طبعش به توازن رسیده است،اثری است بی تکرار از شهراعراب'},
    {id : 15 , img : '/images/menu/irani/sar-aghaz/15.jpeg' , name : 'چکه ماست (سوزمه)' , price : 67 , desc : 'ماست چرب آب گرفته در کیسه که هنگام تناول غذا جانی دوباره میدهد که ذره ای از غذا در پشقاب نمانده باشد.'},
    {id : 16 , img : '/images/menu/irani/sar-aghaz/16.jpeg' , name : 'ته دیگ بادنگان' , price : 175 , desc : 'جلوه ای نرم و نازک از ته چین ایرانی ست ، که با بادنگان روغن جوش شده تنیده در قیمه همراه می شود.'},
    {id : 11 , img : '/images/menu/irani/sar-aghaz/11.jpeg' , name : 'زرگون' , price : 177 , desc : 'طراوتی دو چندان از کاهو و اسفناج غنی شده با گردو و حضور پنیر برشته که به همت و تلاش سرکه سیاه و روغن زیتون سبز، اشتهایتان دو چندان میشود برای میل دل انگیزی جون کباب و خورش . . .'},
    {id : 17 , img : '/images/menu/irani/sar-aghaz/17.jpeg' , name : 'تحفه ی شیراز' , price : 67 , desc : 'به تبعیت از شیراز ، خیار و پیاز و گوجه ای ریز ریز کرده، آبغوره و اندکی لیمو در آن افکندیم با مقادیری روغن و نمک، با ذره ای نعناع خشک، باشد که به زعم تان خوش آید.'},
    {id : 3 , img : '/images/menu/irani/sar-aghaz/3.jpeg' , name : 'میرزا قاسمی' , price : 151 , desc : 'حکایتی است از بادنجان و گوجه و سیر در معیت تعدادی مرغانه، که هنگام تناول اگر چشم ببندید،لحظه ای به گیلان رفته و برمیگردید.'},
    {id : 20 , img : '/images/menu/irani/sar-aghaz/20.jpeg' , name : 'آوادان' , price : 147 , desc : 'پیشقابی است از تلفیق سمبوسه و فلافل که  آن را با حریره ای از انبه و گرد ماسالا آزموده ایم.'},
]

const digjoosh = [
    {id : 1 , img : '/images/menu/irani/dig-joosh/1.jpeg' , name : 'قلیه ماهی' , price : 317 , desc : 'به رنگ قرمه است و عاری از بنشن ها که یاد اور اصالت سفره رنگین جنوبی ها ست.' },
    {id : 2 , img : '/images/menu/irani/dig-joosh/2.jpeg' , name : 'دمی گردن' , price : 637 , desc : '' },
    {id : 3 , img : '/images/menu/irani/dig-joosh/3.jpeg' , name : 'ماهی جواهرنشان' , price : 327 , desc : 'ماهی برشته شده، وپنهان به رنگ فسوجن که با دانه ی روغنی و زرشک و کشمش آراسته میشود.' },
    {id : 4 , img : '/images/menu/irani/dig-joosh/4.jpeg' , name : 'فسوجن گوشت' , price : 323 , desc : 'همان فسنجان است باسخاوتی دوچندان از گردو وپسته رفسنجان که همراه رشته رشته های گوشت بنا به دستورتان مهیا می گردد.' },
    {id : 5 , img : '/images/menu/irani/dig-joosh/5.jpeg' , name : 'فسوجن مرغ' , price : 293 , desc : 'همان فسنجان خانگی ست با سخاوتی دو چندان از گردو و پسته رفسنجان که همراه مرغ  بنا به دستورتان مهیا میگردد.' },
    {id : 6 , img : '/images/menu/irani/dig-joosh/6.jpeg' , name : 'دمی ماهیچه' , price : 637 , desc : 'ماهیچه ی دم کرده با هل و گلاب ودارچبن،با حمایتی از زعفران وبهارنارنج که پیاز نقش اساسی در معجون آن دارد.    ' },
    {id : 7 , img : '/images/menu/irani/dig-joosh/7.jpeg' , name : 'بز قرمه' , price : 293 , desc : 'از شما چه پنهان که معجزه ای از کشک و گوشت بره ایست که در دیار کریمان آفریده اند.' },
    {id : 8 , img : '/images/menu/irani/dig-joosh/8.jpeg' , name : 'دیزی' , price : 323 , desc : 'همان آبگوشت گوسفندی است که برحسب اصالتش لیمویی درآن چلانده ایم ودم کرده ای از دارچین وزعفران نهاده درآن' },
]

const digdam = [
    {id : 1 , img : '/images/menu/irani/dig-dam/1.jpeg' , name : 'بغچه پلو' , price : '431' , desc : 'باقالی پلو با گوشت مجلسی است ، در بسته ته دیگ نان برشته شده که در تنور دم کشیده است.'},
    {id : 2 , img : '/images/menu/irani/dig-dam/2.jpeg' , name : 'جواهر پلو' , price : '347' , desc : 'مرغکی است برشته که در پیشقابی مسی با زرشک و زعفران زیستش داده ایم.'},
    {id : 3 , img : '/images/menu/irani/dig-dam/3.jpeg' , name : 'خشکه پلو' , price : '79' , desc : 'برنج بی دریغ مانده از رنگ که به کامتان مزین میشود به کباب و خورش.'},
    {id : 4 , img : '/images/menu/irani/dig-dam/4.jpeg' , name : 'وزیرپسند' , price : '363' , desc : 'همان ته چین به همراه شرحه های مرغ به رسم تواضع به این نام نهاده ایم، باشد که جسارتی به مقام وزیر نبوده باشد.'},
    {id : 5 , img : '/images/menu/irani/dig-dam/5.jpeg' , name : 'مستوره' , price : '393' , desc : 'سماق پلوی ایرانی و تکه های گوشت زغالی پز است که در پرده ای از خمیر سنتی بر سر در دیگچه مسی بنیان نهاده شده و در تنور به گفتگوی آتش نشسته و حرف های بسیاری برای گفتن دارد.'},
    {id : 6 , img : '/images/menu/irani/dig-dam/6.jpeg' , name : 'خشت بهشت' , price : '387' , desc : 'تلفیقی ست از ته چین مرغ و گوشت که خشت به خشت آن را به گونه ای آراستیم که باید بگوییم به قول معروف : شنیدن کی بود مانند دیدن.'},
    {id : 7 , img : '/images/menu/irani/dig-dam/7.jpeg' , name : 'لخلاخ' , price : '367' , desc : 'سبزی پلو با ماهی با سبک و سیاق دیار بوشهر، غوغا به پا کرده اند گشنیز و شوید و شنبلیله با عطر سیر و عصاره تمر هندی.'},
    {id : 8 , img : '/images/menu/irani/dig-dam/8.jpeg' , name : 'شوید باقالی پلو' , price : '87' , desc : ''},
] 

const atashpaz = [
    {id : 1 , img : '/images/menu/irani/atash-paz/1.jpeg' , name : 'شش طاووق' , price : '293' , desc : 'کباب مرغ بی استخوان به جامانده از مطبخ خانه ی ترک وعرب که در معجونی از آب پرتغال و زعفران وبهارات واندکی عسل خوابانده شده که برمذاق عده ای ادویه دوست خوش می آید.'},
    {id : 2 , img : '/images/menu/irani/atash-paz/2.jpeg' , name : 'مردد کباب' , price : '573' , desc : 'برای آن عده سخت پسند که جمعی را معطل خود کرده است برای تعیین خواسته اش که کارش را سهل کرده ایم با گرد هم آوردن قنجه کباب و شیش طاووق و شیر کباب.'},
    {id : 3 , img : '/images/menu/irani/atash-paz/3.jpeg' , name : 'آسه ملس' , price : '357' , desc : 'از سلائق رئیس مطبخ خانه زری از زرشک ونبات وکشمش در میان تکه های مرغ، بلاتکلیف از ترش یا شیرین، به حدسمان از شدت حض ،نوش جانتان شود بکام…'},
    {id : 4 , img : '/images/menu/irani/atash-paz/4.jpeg' , name : 'قنجه کباب' , price : '487' , desc : 'شرحه ای بی چربی واستخوان از بره که به محض تکیه بر دندان، مژه بر مژه خواهید گذاشت و حظش را می برید.'},
    {id : 5 , img : '/images/menu/irani/atash-paz/5.jpeg' , name : 'هزار و یک شب' , price : '393' , desc : 'قصه ی رنگ و عطر و مزه و طعم هایی است که تکه های گوشت و مرغ را در جشن آتش آراسته اند.'},
    {id : 6 , img : '/images/menu/irani/atash-paz/6.jpeg' , name : 'قبضه کباب' , price : '513' , desc : 'راسته بره که به لطف ضربه های قصاب تاروپود زجانش بریده و پس از آرمیدن در پیاز و زعفران ، آتش بوییده وبه ملاقاتتان می آید.'},
    {id : 7 , img : '/images/menu/irani/atash-paz/7.jpeg' , name : 'پوده کباب' , price : '279' , desc : 'گوشت وپیاز آمیخته که برسیخ کشیده شده است اگر سختش نکنم همان کوبیده کباب است وبس.'},
    {id : 8 , img : '/images/menu/irani/atash-paz/8.jpeg' , name : 'گوشت آگند' , price : '307' , desc : 'پوده کبابی پیچیده در نان روستا، که دوبار برآتش نهاده شود در معیت گوجه ی روغن داغ، در پیاله ماست فرو برده ونوش جان میشود.'},
    {id : 9 , img : '/images/menu/irani/atash-paz/9.jpeg' , name : 'ماستینه کباب' , price : '273' , desc : 'از التفات چکه ماست بر شرحه های مرغ است ، که بی شک  از باب لطافت و نرمی نیم نگاهی بر پنبه خراسان دارد.'},
    {id : 10 , img : '/images/menu/irani/atash-paz/10.jpeg' , name : 'مرغ کباب' , price : '273' , desc : 'زباب سلیقه مرغ بی استخوان بر بالشتی از ماست وزعفران وپیاز به خوابش بردیم به آسایش تا زیر دندان مبارکتان آب شود.'},
    {id : 11 , img : '/images/menu/irani/atash-paz/11.jpeg' , name : 'شیر کباب' , price : '393' , desc : 'به درخواست عده ی بسیاری از مهمانانمان بود که به محض آن که این خبر به گوش رئیس مطبخ خانه مان رسید دستور به اجابتش دادند.'},
    {id : 12 , img : '/images/menu/irani/atash-paz/12.jpeg' , name : 'التفات شاه' , price : '287' , desc : 'به زعم و دستور مردمان اسپدانه ، هم قدم می شویم با عنایت شاه تا در پیشگاه عاشقان کباب ، ضیافتی در خور تحسین به پا کنند.'},
    {id : 13 , img : '/images/menu/irani/atash-paz/13.jpeg' , name : 'عنایت شاه' , price : '335' , desc : 'لذت دو چندان از همان پوده کباب است ،پیچیده شده در پرده چربی به همراه پولبیر که قطعا بهانه ای خواهد بود که هر روز و شب چشممان به جمالتان روشن شود.'},
    {id : 14 , img : '/images/menu/irani/atash-paz/14.jpeg' , name : 'شاپور خان' , price : '373' , desc : 'هم خانواده تازه از راه رسیده ی مطبخ خانه عمارت است برگرفته از تکه های گوشت و لحافی از پرده که باب میل احوال خوبان است.'},
    {id : 15 , img : '/images/menu/irani/atash-paz/15.jpeg' , name : 'مراد دل' , price : '473' , desc : 'از طعم و رنگ و مزه چنان سرشار است که هنگام گرسنگی ، بر جانتان می نشیند ، که به مراد دلتان رسیده اید . جمیعی از شش طاووق ، التفات شاه و عنایت شاه.'},
    {id : 16 , img : '/images/menu/irani/atash-paz/16.jpeg' , name : 'سرکیف' , price : '643' , desc : 'به ذوق دیده و دل دنده ای بیات ، به سیخ کشیده ایم که لب سوز و روغن چکان تقدیمتان میکنیم.'},
]


export default function Irani() {    

  const starterRef = useRef()
  const digjooshRef = useRef()
  const digdamRef = useRef()
  const atashpazRef = useRef()
  const suggestRef = useRef()


  return (
    <>
    <Head>
      <title>عمارت سیمون | منو | غذای ایرانی</title>
      <meta name="description" content=""></meta>
    </Head>
    <CategoryWrapper>
        <CategoryBtn callBack={() => window.scrollTo({top : starterRef.current.offsetTop - 200})} text="سرآغاز"></CategoryBtn>
        <CategoryBtn callBack={() => window.scrollTo({top : digjooshRef.current.offsetTop - 200})} text="دیگ جوش"></CategoryBtn>
        <CategoryBtn callBack={() => window.scrollTo({top : digdamRef.current.offsetTop - 200})} text="دیگ دم"></CategoryBtn>
        <CategoryBtn callBack={() => window.scrollTo({top : atashpazRef.current.offsetTop - 200})} text="آتش پز"></CategoryBtn>
        <CategoryBtn callBack={() => window.scrollTo({top : suggestRef.current.offsetTop - 200})} text="پیشنهاد رییس شربتخانه"></CategoryBtn>
    </CategoryWrapper>
    <section className='text-neutral-700 my-32 max-w-screen-xl mx-auto gap-6 justify-center flex gap-y-20 flex-wrap 2xl:max-w-screen-2xl max-sm:mt-16 max-sm:gap-y-4 p-3'>
        <h4 ref={starterRef} className='menu-title'>سرآغاز</h4>
        {starter.map(data => <Item key={data.id} {...data}/>)}
        <h4 ref={digjooshRef} className='menu-title'>دل انگیز (دیگ جوش)</h4>
        {digjoosh.map(data => <Item key={data.id} {...data}/>)}
        <h4 ref={digdamRef} className='menu-title'>دل انگیز (ديگ دم)</h4>
        {digdam.map(data => <Item key={data.id} {...data}/>)}
        <h4 ref={atashpazRef} className='menu-title'>دل انگیز (آتش پز)</h4>
        {atashpaz.map(data => <Item key={data.id} {...data}/>)}
    </section>
    </>
  )
}