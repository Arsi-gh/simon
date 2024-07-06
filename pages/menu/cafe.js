import CategoryBtn from '@/components/ui/categoryBtn'
import CategoryWrapper from '@/components/ui/categoryWrapper'
import Item from '@/components/ui/item'
import Head from 'next/head'
import React, { useRef } from 'react'
import { GiCoffeePot } from "react-icons/gi";
import { LuCupSoda } from "react-icons/lu";
import { TbBrandCakephp, TbCup, TbMilkshake, TbMug } from "react-icons/tb";
import { BsCupStraw } from 'react-icons/bs'
import { FiCoffee } from 'react-icons/fi'
import { SiBuymeacoffee } from "react-icons/si";

const coffee = [
  {id : 1 , name : 'کورتادو'  , price : 101},
  {id : 2 , img : '/images/menu/cafe/coffee/espresso.jpg' , name : 'اسپرسو دوپیو'  , price : 83},
  {id : 3 , img : '/images/menu/cafe/coffee/saffron-latte.jpg' , name : 'زعفران لاته'  , price : 133},
  {id : 4 , img : '/images/menu/cafe/coffee/afugato.jpg' , name : 'آفوگاتو'  , price : 119},
  {id : 5 , img : '/images/menu/cafe/coffee/americano.jpg' , name : 'آمریکانو'  , price : 85},
  {id : 6 , img : '/images/menu/cafe/coffee/capuchino.jpg' , name : 'کاپوچینو'  , price : 109},
  {id : 7 , img : '/images/menu/cafe/coffee/latte-machiato.jpg' , name : 'لاته ماکیاتو'  , price : 131},
  {id : 8 , img : '/images/menu/cafe/coffee/caffe-latte.jpg' , name : 'كافه لاته'  , price : 123},
  {id : 9 , img : '/images/menu/cafe/coffee/turkish.jpg' , name : 'ترک'  , price : 93},
  {id : 10 , img : '/images/menu/cafe/coffee/lutous-cortado.jpg' , name : 'لوتوس کورتادو'  , price : 133 , desc : 'کرم بیسکوییت ، شیر ، قهوه ، عصاره شکلات'}
]

const longCoffee = [
 {id : 1 , img : '/images/menu/cafe/longCoffee/v60.jpg' , name : 'وی 60' , price : 183},
 {id : 2 , img : '/images/menu/cafe/longCoffee/aeropress.jpg' , name : 'آئرو پرس' , price : 125},
 {id : 3 , img : '/images/menu/cafe/longCoffee/chemex.jpg' , name : 'کمکس' , price : 172},
]

const iceCoffee = [
  {id : 1 , img : '/images/menu/cafe/iceCoffee/ice-cookie-chocollatte.jpg' , name : 'شكلات آيس كوکی' , price: 129 },
  {id : 2 , img : '/images/menu/cafe/iceCoffee/ice-latte.jpg' , name : 'آیس لاته' , price: 115 },
]

const tea = [
  {id : 1 , img : '/images/menu/cafe/tea/zanjebil.jpg' , name : 'چایی زنجبیل' , price : 107 , desc : ''},
  {id : 2 , img : '/images/menu/cafe/tea/jungle-fruit.jpg' , name : 'چايي ميوه هاي جنگلي' , price : 153 , desc : ''},
  {id : 3 , img : '/images/menu/cafe/tea/tea.jpg' , name : 'سرویس چایی سیاه' , price : 73 , desc : ''},
  {id : 5 , img : '/images/menu/cafe/tea/greentea.jpg' , name : 'چایی سبز' , price : 107 , desc : ''},
  {id : 6 , img : '/images/menu/cafe/tea/darchin.jpg' , name : 'چایی دارچین' , price : 107 , desc : ''},
  {id : 7 , img : '/images/menu/cafe/tea/armaghan.jpg' , name : 'ارمغان' , price : 115 , desc : 'پونه ، آویشن ، نعنا ، لیموترش و …'},
  {id : 8 , img : '/images/menu/cafe/tea/molook.jpg' , name : 'ملوک السلطنه' , price : 123 , desc : 'علف لیمو ، هل باد ، بهار نارنج و ….'},
  {id : 9 , img : '/images/menu/cafe/tea/anarbo.jpg' , name : 'آن آربو' , price : 117 , desc : 'به ، زعفران ، دارچین و …'},
  {id : 10 , img : '/images/menu/cafe/tea/saffron.jpg' , name : 'چایی زعفران' , price : 113 , desc : ''},
]

const hotDrinks = [
  {id : 1 , img : '/images/menu/cafe/hotDrink/hot-chocollate.jpg' , name : 'هات چاكلت' , price : 120  , desc : ''},
  {id : 2 , img : '/images/menu/cafe/hotDrink/probin.jpg' , name : 'پروبین' , price : 127  , desc : ''},
  {id : 3 , img : '/images/menu/cafe/hotDrink/pink-chocolatte.jpg' , name : 'پینک چاكلت' , price : 127  , desc : ''},
  {id : 4 , img : '/images/menu/cafe/hotDrink/tea-latte.jpg' , name : 'تی لاته' , price : 127  , desc : ''},
  {id : 5 , img : '/images/menu/cafe/hotDrink/masala.jpg' , name : 'چای ماسالا' , price : 113  , desc : ''},
  {id : 6 , img : '/images/menu/cafe/hotDrink/arabic-milk.jpg' , name : 'شیر کرک عربی' , price : 127  , desc : 'هل ، میخک ، زنجفیل و …'},
  {id : 7 , name : 'هات پسته' , price : 130  , desc : 'شکلات سفید ، پسته ، زعفران و …'},
]

const sparkels = [
  {id : 1 , img: '/images/menu/cafe/sparkels/magical-lemonade.jpg' , name : 'مجیکال لیموناد' , price : 99 , desc : 'ليمو ، زنجفيل ، شكر قهوه اي ، سودا'},
  {id : 2 , img: '/images/menu/cafe/sparkels/orange-malt.jpg' , name : 'اورنج مالت' , price : 107 , desc : 'پرتقال ، عصاره نیشکر ، مالت'},
  {id : 4 , img: '/images/menu/cafe/sparkels/mojito.jpg' , name : 'موهیتو' , price : 95 , desc : 'نعنا ، ليمو ، نيتروژن مايع ، سودا و …'},
  {id : 5 , img: '/images/menu/cafe/sparkels/lemonade.jpg' , name : 'لیموناد' , price : 91 , desc : 'ليمو ، شكر قهوه اي ، سودا'},
  {id : 6 , img: '/images/menu/cafe/sparkels/kola-libre.jpg' , name : 'کولا لیبره' , price : 107 , desc : 'پرتقال ، رام ، کوکا ، نعنا'},
  {id : 7 , img: '/images/menu/cafe/sparkels/bumble-bea.jpg' , name : 'بامبل بی' , price : 123 , desc : 'کربن خوراکی ، پرتقال ، لیمو'},
  {id : 8 , img: '/images/menu/cafe/sparkels/sahakian.jpg' , name : 'ساهاكيان' , price : 121 , desc : 'ميوه گواوا ، زنجفيل ، آب پرتقال ،كربن خوراكي و …'},
]

const smoothies = [
  {id : 1 , img : '/images/menu/cafe/smoothie/tropical.jpg' , name : 'تراپيكال' , price : 145 , desc : 'آناناس ، موز ، نارگيل'},
  {id : 2 , img : '/images/menu/cafe/smoothie/gaya.jpg' , name : 'گايا' , price : 123 , desc : 'انبه ، عسل ، نعنا'},
  {id : 3 , img : '/images/menu/cafe/smoothie/pinklady.jpg' , name : 'پینک لیدی' , price : 145 , desc : 'هلو ، ماست خامه ای ، توت فرنگی'},
  {id : 4 , img : '/images/menu/cafe/smoothie/wild-bery.jpg' , name : 'وايلد بري' , price : 131 , desc : 'توت فرنگي ، شاتوت ، آلورا ، ليمو و …'},
  {id : 5 , img : '/images/menu/cafe/smoothie/alis.jpg' , name : 'آلیس' , price : 123 , desc : 'بلک بری ، ماست خامه ای ، میوه های قرمز'},
]

const iraniColdDrinks = [
  {id : 1 , img : '/images/menu/cafe/iraniColdDrinks/zarbaft.jpg' , name : 'زربافت' , price : 111 , desc : 'زعفران  ، دارچين ، پرتقال'},
  {id : 2 , img : '/images/menu/cafe/iraniColdDrinks/golabatoon.jpg' , name : 'گلابتون' , price : 97 , desc : 'گل پنيرك ، توت فرنگي ، خاكشير و …'},
  {id : 3 , img : '/images/menu/cafe/iraniColdDrinks/torange-punch.jpg' , name : 'پانچ ترنج' , price : 97 , desc : 'گل رز ، نسترن ، بهار نارنج ، نعنا و…'},
]

const coldDrinks = [
  {id : 1 , img : '/images/menu/cafe/coldDrink/luci.jpg' , name : 'لوسي' , price : 125 , desc : 'عصاره ني شكر ، آب سيب ، دارچين ، نمك هيماليا و…'},
  {id : 2 , img : '/images/menu/cafe/coldDrink/zhenic.jpg' , name : 'ژنيك' , price : 111 , desc : 'سيب سبز ، فلفل هالوپينو ، برگ تازه نعنا ، سودا و …'},
  {id : 3 , img : '/images/menu/cafe/coldDrink/ana.jpg' , name : 'آنا' , price : 147 , desc : 'انار ، دم کرده شکلات و نعنا، سفیده تخم مرغ'},
  {id : 4 , img : '/images/menu/cafe/coldDrink/post-modern.jpg' , name : 'پست مدرن' , price : 117 , desc : 'پاپایا ، چای ترش ، توت فرنگی'},
  {id : 5 , img : '/images/menu/cafe/coldDrink/natural-fruit-water.jpg' , name : 'آب ميوه طبيعي' , price : 95 , desc : ''},
  {id : 6 , img : '/images/menu/cafe/coldDrink/orange-strawbery.jpg' , name : 'فرش پرتقال توت فرنگی' , price : 129 , desc : ''},
]

const shakes = [
  {id : 1 , img : '/images/menu/cafe/shakes/fandogh-chocollatte.jpg' , name : 'شیک شکلات فندق' , price : 137 , desc : ''},
  {id : 2 , img : '/images/menu/cafe/shakes/chocolatte-shake.jpg' , name : 'شيك شکلات' , price : 135 , desc : ''},
  {id : 3 , img : '/images/menu/cafe/shakes/fruit-shake.jpg' , name : 'شيك ميوه اي' , price : 135 , desc : ''},
  {id : 4 , img : '/images/menu/cafe/shakes/haji-washangton.jpg' , name : 'حاجي واشنگتن' , price : 157 , desc : ''},
  {id : 5 , img : '/images/menu/cafe/shakes/peanut-cheese.jpg' , name : 'شیک پینات چیز' , price : 173 , desc : ''},
  {id : 6 , img : '/images/menu/cafe/shakes/custom-shake.jpg' , name : 'شيك با تاپينگ انتخابي شما' , price : 167 , desc : 'زعفران ، پسته تازه ، ژلاتو وانيل'},
]

const cakes = [
  {id : 1 , img : '/images/menu/cafe/cakes/newyork-chesscake.jpg' , name : 'چیز کیک نیویورکی' , price : 127 , desc : ''},
  {id : 2 , img : '/images/menu/cafe/cakes/pinapple-cake.jpg' , name : 'کیک آناناس دارچین' , price : 123 , desc : ''},
  {id : 3 , img : '/images/menu/cafe/cakes/muchi.jpg' , name : 'موچی' , price : 153 , desc : ''},
  {id : 4 , img : '/images/menu/cafe/cakes/honey-cake.jpg' , name : 'کیک عسل روسی' , price : 123 , desc : ''},
  {id : 5 , img : '/images/menu/cafe/cakes/gatta.jpg' , name : 'گاتا ارمنی' , price : 121 , desc : ''},
  {id : 6 , img : '/images/menu/cafe/cakes/cheesecake.jpg' , name : 'چیز کیک' , price : 127 , desc : ''},
  {id : 7 , img : '/images/menu/cafe/cakes/daily-cake.jpg' , name : 'کیک روز' , price : 141 , desc : ''},
  {id : 8 , img : '/images/menu/cafe/cakes/chocollate-cake.jpg' , name : 'کیک شکلاتی' , price : 121 , desc : ''},
]

export default function Cafe() {

  const coffeeRef = useRef()
  const longCoffeeRef = useRef()
  const iceCoffeeRef = useRef()
  const teaRef = useRef()
  const hotDrinkRef = useRef()
  const sparkelRef = useRef()
  const smoothieRef = useRef()
  const iranianColdDrinkRef = useRef()
  const coldDrinkRef = useRef()
  const shakesRef = useRef()
  const cakesRef = useRef()

  return (
    <>
    <Head>
      <title>عمارت سیمون | منو | کافه</title>
      <meta name="description" content=""></meta>
    </Head>

    <CategoryWrapper>
      <CategoryBtn callBack={() => window.scrollTo({top : coffeeRef.current.offsetTop - 200})} text='قهوه ها'> <FiCoffee className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : longCoffeeRef.current.offsetTop - 200})} text='قهوه دمی'> <GiCoffeePot className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : iceCoffeeRef.current.offsetTop - 200})} text='آیس کافی'> <SiBuymeacoffee className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : teaRef.current.offsetTop - 200})} text='چای بار'> <GiCoffeePot className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : hotDrinkRef.current.offsetTop - 200})} text='نوشیدنی های گرم'> <TbMug className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : sparkelRef.current.offsetTop - 200})} text='نوشیدنی های گازدار'> <LuCupSoda className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : smoothieRef.current.offsetTop - 200})} text='اسموتی ها'> <TbCup className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : iranianColdDrinkRef.current.offsetTop - 200})} text='سرد نوش های ایرانی'> <BsCupStraw className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : coldDrinkRef.current.offsetTop - 200})} text='نوشیدنی های سرد'> <BsCupStraw className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : shakesRef.current.offsetTop - 200})} text='شیک ها'> <TbMilkshake className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : cakesRef.current.offsetTop - 200})} text='کیک و دسر'> <TbBrandCakephp className='text-2xl text-primary-500'/> </CategoryBtn>
    </CategoryWrapper>

    <section className='text-neutral-700 my-32 max-w-screen-xl mx-auto gap-6 justify-center flex gap-y-20 flex-wrap 2xl:max-w-screen-2xl max-sm:mt-16 max-sm:gap-y-4 p-3'>
      
      <h4 ref={coffeeRef} className='menu-title'>قهوه ها</h4>
      <p className='w-fit mx-auto md:-mt-16 -mt-4 max-w-screen-xl px-12 text-center max-sm:px-2 max-sm:text-sm'>تمامي آيتم هاي حاوي شير در دماي 65 الي 75 درجه سانتي گراد سرو مي شوند ، در صورت تمايل به داشتن دماي بالاتر در هنگام سفارش اطلاع دهيد. تمامي آيتم ها در صورت تمايل با قهوه تك خاستگاه قابل سرو مي باشد</p>
      {coffee.map(data => <Item key={data.id} {...data}/>)}

      <h4 ref={longCoffeeRef} className='menu-title'>قهوه دمی</h4>
      {longCoffee.map(data => <Item key={data.id} {...data}/>)}

      <h4 ref={iceCoffeeRef} className='menu-title'>آیس کافی</h4>
      {iceCoffee.map(data => <Item key={data.id} {...data}/>)}

      <h4 ref={teaRef} className='menu-title'>چای بار</h4>
      {tea.map(data => <Item key={data.id} {...data}/>)} 

      <h4 ref={hotDrinkRef} className='menu-title'>نوشیدنی های گرم</h4>
      {hotDrinks.map(data => <Item key={data.id} {...data}/>)}  

      <h4 ref={sparkelRef} className='menu-title'>نوشیدنی های گازدار</h4>
      {sparkels.map(data => <Item key={data.id} {...data}/>)}  

      <h4 ref={smoothieRef} className='menu-title'>اسموتی ها</h4>
      {smoothies.map(data => <Item key={data.id} {...data}/>)}

      <h4 ref={iranianColdDrinkRef} className='menu-title'>سرد نوش های ایرانی</h4>
      {iraniColdDrinks.map(data => <Item key={data.id} {...data}/>)}  

      <h4 ref={coldDrinkRef} className='menu-title'>نوشیدنی های سرد</h4>
      {coldDrinks.map(data => <Item key={data.id} {...data}/>)}  

      <h4 ref={shakesRef} className='menu-title'>شیک ها</h4>
      {shakes.map(data => <Item key={data.id} {...data}/>)}  

      <h4 ref={cakesRef} className='menu-title'>کیک و دسر</h4>
      {cakes.map(data => <Item key={data.id} {...data}/>)}  

    </section>
    </>
  )
}