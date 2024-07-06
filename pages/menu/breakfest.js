import CategoryBtn from '@/components/ui/categoryBtn'
import CategoryWrapper from '@/components/ui/categoryWrapper'
import Item from '@/components/ui/item'
import Head from 'next/head'
import React, { useRef } from 'react'
import { LuEggFried, LuSandwich } from 'react-icons/lu'
import { RiCake3Line } from "react-icons/ri";


const plates = [
  {id : 1 , img : '/images/menu/breakfest/plates/american.jpg' , name : 'American Plate' , price : 243 , desc : 'پنکیک / زیتون سبز / بیکن / نیمرو / گوجه تفت داده شده'},
  {id : 2 , img : '/images/menu/breakfest/plates/english.jpg' , name : 'English Plate' , price : 255 , desc : 'نیمرو / سوسیس سرخ شده / قارچ / بیکن / فرنچ تست / سالسا میوه'},
  {id : 3 , img : '/images/menu/breakfest/plates/french.jpg' , name : 'French Plate' , price : 283 , desc : 'سیب زمینی آب پز برشته / سوسیس چوریزو / نیمرو / کروسان'},
  {id : 4 , img : '/images/menu/breakfest/plates/pancake-taco.jpg' , name : 'Pancake Taco' , price : 163 , desc : 'پنکیک / اسکرامبل / چوریزو / دیپ چدار / فلفل دلمه ای / پیازچه'},
  {id : 5 , img : '/images/menu/breakfest/plates/pancake-fruit.jpg' , name : 'Pancakes With Fruit' , price : 187 , desc : 'پنکیک / میوه های فصل / عسل طبیعی / خامه'},
  {id : 6 , img : '/images/menu/breakfest/plates/self.jpg' , name : 'صبحانه سلف' , price : 400 , desc : 'بيش از 60 نوع آيتم مخصوص روزهای جمعه و تعطیلات'},
  {id : 7 , img : '/images/menu/breakfest/plates/persian.jpg' , name : 'Persian Plate' , price : 223 , desc : 'تخم مرغ آب پز / خامه / کره / عسل / مربا / گردو / پنیر'},
  {id : 8 , img : '/images/menu/breakfest/plates/crepes-with-fruit.jpg' , name : 'Crepes with fruit and cream' , price : 203 , desc : 'کرپ های لقمه ای همراه با میوه های فصل / خامه / عسل'},
  {id : 9 , img : '/images/menu/breakfest/plates/waffel.jpg' , name : 'Waffles With Fruit And Chocolate Sauce' , price : 211 , desc : 'وافل / سس شکلات / میوه های فصل / بنا به درخواست پودر قند'},
  {id : 10 , img : '/images/menu/breakfest/plates/turkish.jpg' , name : 'Turkish Style Breakfast' , price : 269 , desc : 'پنیر سنتی / کره / عسل / سر شیر / گوجه و خیار / بادمجان سرخ کرده / سیب زمینی سرخ کرده / نان سیمیت / زیتون سیاه / زیتون سبز / املت ترکیه ای (منمن)'},
]

const scrammbledEggs = [
  {id : 1 , img : '/images/menu/breakfest/scrambeldEgg/bacon.jpeg' , name : 'Bacon omelette' , price : 173 , desc : 'تخم مرغ ، بيكن ، پنير خامه اي ، پيازچه'},
  {id : 2 , img : '/images/menu/breakfest/scrambeldEgg/chorizo.jpg' , name : 'chorizo omelette' , price : 187 , desc : 'تخم مرغ ، چوریزو'},
  {id : 3 , img : '/images/menu/breakfest/scrambeldEgg/mushroom.jpg' , name : 'Mashroom omelette' , price : 159 , desc : 'تخم مرغ ، قارچ بلانچ شده ،شير'},
  {id : 4 , img : '/images/menu/breakfest/scrambeldEgg/tomato-omelette.jpg' , name : 'Tomato Omelette' , price : 149 , desc : 'تخم مرغ / عصاره گوجه فرنگی'},
  {id : 5 , name : 'vegatables omelette' , price : 157 , desc : 'تخم مرغ ، هویج ، توت فرنگی'},
  {id : 6 , img : '/images/menu/breakfest/scrambeldEgg/shapoori.jpg' , name : 'بشقاب شاپوری' , price : 147 , desc : 'املت گوجه / خوراک لوبیا'},
  {id : 7 , img : '/images/menu/breakfest/scrambeldEgg/mix-omelette.jpg' , name : 'mix omelette' , price : 167 , desc : 'تخم مرغ / پیاز نگینی / ژامبون / پوره گوجه / سبزیجات / فلفل دلمه'},
  {id : 8 , img : '/images/menu/breakfest/scrambeldEgg/potato-omelette.jpg' , name : 'potato omelette' , price : 159 , desc : 'تخم مرغ، سیب زمینی رست شده ، پیاز ، جعفری ،بیکن'},
]

const eggs = [
  {id : 1 , img : '/images/menu/breakfest/egg/egg-benedict.jpg' , name : 'Egg Benedict' , price : 171 , desc : 'پوچد اگ / نان / سس هالندیز / پیازچه / بیکن'},
  {id : 2 , img : '/images/menu/breakfest/egg/fried-egg.jpeg' , name : 'Fried egg' , price : 137 , desc : 'نيمرو'},
  {id : 3 , img : '/images/menu/breakfest/egg/scrambled.jpg' , name : 'Scrambled' , price : 133 , desc : 'تخم مرغ هم زده'},
  {id : 4 , img : '/images/menu/breakfest/egg/vegetable-egg.jpg' , name : 'Vegetable Egg' , price : 167 , desc : 'خوراک سبزیجات / نیمرو'},
  {id : 5 , img : '/images/menu/breakfest/egg/ghorme-egg.jpg' , name : 'قرمه تخم مرغ' , price : 223 , desc : 'گوشت کره پز شده / نیمرو'},
  {id : 6 , img : '/images/menu/breakfest/egg/ghisava.jpg' , name : 'قیساوا' , price : 173 , desc : 'تخم مرغ / خرما / کنجد'},
]

const sandwiches = [
  {id : 1 , img : '/images/menu/breakfest/sandwhiches/club.jpg' , name : 'Club Sandwich' , price : 193 , desc : 'ان تست برشته / کاهو / ژامبون گوشت / ژامبون مرغ / سس مایونز / سالسا'},
  {id : 2 , img : '/images/menu/breakfest/sandwhiches/egg-beef.jpg' , name : 'egg Beef burger' , price : 245 , desc : '(2عدد اسلاید برگر) نان برگر کوچک / مین یبرگر / تخم مرغ'},
  {id : 3 , img : '/images/menu/breakfest/sandwhiches/stuffed.jpg' , name : 'Stuffed French Toast' , price : 183 , desc : 'نانن تست / ژامبون / پنیر گودا / کاهو / خیار / گوجه'},
]

const deserts = [
  {id : 1 , img : '/images/menu/breakfest/desert/bread-pudding.jpg' , name : 'Bread Pudding' , price : 141 , desc : 'سیب دارچین / تخم مرغ / تکه های نان شیرین' }
]


export default function Breakfest() {

  const plateRef = useRef()
  const scrammbledEggsRef = useRef()
  const eggsRef = useRef()
  const sandwichesRef = useRef()
  const desertsRef = useRef()

  return (
    <>
    <Head>
      <title>عمارت سیمون | منو | صبحانه</title>
      <meta name="description" content=""></meta>
    </Head>
    <CategoryWrapper>
      <CategoryBtn callBack={() => window.scrollTo({top : plateRef.current.offsetTop - 200})} text="بشقاب ها"></CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : scrammbledEggsRef.current.offsetTop - 200})} text="املت ها"></CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : eggsRef.current.offsetTop - 200})} text="تخم مرغ ها" >  <LuEggFried className='text-2xl text-primary-500'/> </CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : sandwichesRef.current.offsetTop - 200})} text="ساندویچ ها"> <LuSandwich className='text-2xl text-primary-500'/></CategoryBtn>
      <CategoryBtn callBack={() => window.scrollTo({top : desertsRef.current.offsetTop - 200})} text="دسر ها"> <RiCake3Line className='text-2xl text-primary-500'/></CategoryBtn>
    </CategoryWrapper>
    <section className='text-neutral-700 my-32 max-w-screen-xl mx-auto gap-6 justify-center flex gap-y-20 flex-wrap 2xl:max-w-screen-2xl max-sm:mt-16 max-sm:gap-y-4 p-3'>

        <h4 ref={plateRef} className='menu-title'>بشقاب ها</h4>
        {plates.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={scrammbledEggsRef} className='menu-title'>املت ها</h4>
        {scrammbledEggs.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={eggsRef} className='menu-title'>تخم مرغ ها</h4>
        {eggs.map(data => <Item key={data.id} {...data}/>)}
        
        <h4 ref={sandwichesRef} className='menu-title'>ساندویچ ها</h4>
        {sandwiches.map(data => <Item key={data.id} {...data}/>)}

        <h4 ref={desertsRef} className='menu-title'>دسر ها</h4>
        {deserts.map(data => <Item key={data.id} {...data}/>)}
        
    </section>
    </>
  )
}

















