

export default function SpecialEvents() {
  return (
    <>
    <h4 className='index-title'>برگزاری جشنها و تولدها در عمارت سیمون</h4>
    <div className="my-16 max-w-screen-xl mx-auto flex gap-4 justify-evenly 2xl:max-w-screen-2xl max-lg:flex-col max-lg:px-12 max-sm:px-6">
        <div className="rounded-xl overflow-hidden w-[20rem] h-[22rem] max-xl:w-[25%] max-lg:h-36 max-lg:w-full relative">
            <img loading="lazy" className="w-full h-full object-cover" src="/images/designs/1.jpeg" alt="birthday-event" />
            <div className="group absolute bottom-0 w-full h-full p-1 px-2 bg-black bg-opacity-60 grid place-items-center text-white transition-all duration-500 hover:bg-opacity-80">
                <p className="text-5xl font-bold transition-all group-hover:scale-0 group-hover:hidden max-md:text-3xl max-sm:text-xl">تم تولد</p>
                <p className="bg-zinc-100 p-2 rounded-2xl  bg-opacity-10 w-3/4 text-xl scale-0 font-bold hidden transition-all group-hover:block group-hover:scale-100 max-md:w-full max-md:text-sm">آرامشی از جنس سیمون با آسمانی زیبا ومحیطی شاد تا با خاطری خالی از هر اندیشه ای، لحظه ای را بیاسایم</p>
            </div>
        </div>
        <div className="rounded-xl overflow-hidden w-[20rem] h-[22rem] max-xl:w-[25%] max-lg:h-36 max-lg:w-full relative">
            <img loading="lazy" className="w-full h-full object-cover" src="/images/designs/2.jpeg" alt="special-events" />
            <div className="group absolute bottom-0 w-full h-full p-1 px-2 bg-black bg-opacity-60 grid place-items-center text-white transition-all duration-500 hover:bg-opacity-80">
                <p className="text-3xl text-center font-bold transition-all group-hover:scale-0 group-hover:hidden max-md:text-3xl max-sm:text-xl">دیزاین های خاص برای مراسم ها </p>
                <p className="bg-zinc-100 p-2 rounded-2xl  bg-opacity-10 w-3/4 text-xl scale-0 font-bold hidden transition-all group-hover:block group-hover:scale-100 max-md:w-full max-md:text-sm">لحظات و روزهای خاصی در زندگی تک تک ما وجود دارد که دوست داریم زمان در آن لحظه بایستد. روزهایی چون سالگرد تولد، ازدواج و… <br/>
خاطرات این لحظات را با سیمون جاودانه کنید</p>
            </div>
        </div>
        <div className="rounded-xl overflow-hidden w-[20rem] h-[22rem] max-xl:w-[25%] max-lg:h-36 max-lg:w-full relative">
            <img loading="lazy" className="w-full h-full object-cover" src="/images/designs/3.png" alt="the-throne" />
            <div className="group absolute bottom-0 w-full h-full p-1 px-2 bg-black bg-opacity-60 grid place-items-center text-white transition-all duration-500 hover:bg-opacity-80">
                <p className="text-4xl font-bold transition-all group-hover:scale-0 group-hover:hidden max-md:text-3xl max-sm:text-xl">اتاق شاه نشین</p>
                <p className="bg-zinc-100 p-2 rounded-2xl  bg-opacity-10 w-3/4 text-xl scale-0 font-bold hidden transition-all group-hover:block group-hover:scale-100 max-md:w-full max-md:text-sm">سیمون ورقی است از دفتر کهن تاریخ، که بر دیوارهایش نقش اصالت زده اند ودر میانش نقش طبیعت</p>
            </div>
        </div>
    </div>
    <div className="max-w-screen-xl mx-auto px-12 flex gap-x-4 justify-between items-center mb-28  max-md:flex-col max-md:gap-y-4 max-md:mb-12">
        <p className="text-lg max-md:text-base max-sm:text-sm max-md:w-full max-md:text-center">برای رزرو میز کافیست با ما تماس حاصل فرمایید امکان رزرو حضوری نیز وجود دارد</p>
        <span className="flex-1 h-[2px] bg-primary-500 max-md:hidden"></span>
        <span className="text-2xl font-bold max-md:text-lg">۰۳۱-۳۱۳۲۵۰۱۱</span>
    </div>
    </>
  )
}
