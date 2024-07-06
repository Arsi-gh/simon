

export default function SpecialGuests() {
  return (
    <>
    <h4 className='index-title'>مهمانان ویژه</h4>
    <div className="my-12 max-md:mt-4 max-md:mb-12 max-w-screen-xl mx-auto px-12 flex gap-4 justify-evenly 2xl:max-w-screen-2xl overflow-auto max-sm:px-6 max-sm:justify-start">
        <div className="rounded-xl h-fit w-[15.5rem] overflow-hidden border border-zinc-300 p-2 max-sm:min-w-[12rem]">
            <img loading="lazy" className="rounded-lg" src="/images/specialGuests/1.png" alt="special-guest-1" />
            <p className="text-justify p-2 max-sm:text-sm">حضور سخنگوی وزارت امور خارجه و سفیر واتیکان</p>
        </div>
        <div className="rounded-xl h-fit w-[15.5rem] overflow-hidden border border-zinc-300 p-2 max-sm:min-w-[12rem]">
            <img loading="lazy" className="rounded-lg" src="/images/specialGuests/2.png" alt="special-guest-2" />
            <p className="text-justify p-2 max-sm:text-sm">حضور علیرضا استکی سرمربی تیم ملی بوکس ایران</p>
        </div>
        <div className="rounded-xl h-fit w-[15.5rem] overflow-hidden border border-zinc-300 p-2 max-sm:min-w-[12rem]">
            <img loading="lazy" className="rounded-lg" src="/images/specialGuests/3.png" alt="special-guest-3" />
            <p className="text-justify p-2 max-sm:text-sm">حضور هنرمند عزیز کشورمون در عمارت زیبای سیمون</p>
        </div>
        <div className="rounded-xl h-fit w-[15.5rem] overflow-hidden border border-zinc-300 p-2 max-sm:min-w-[12rem]">
            <img loading="lazy" className="rounded-lg" src="/images/specialGuests/4.png" alt="special-guest-4" />
            <p className="text-justify p-2 max-sm:text-sm">حضور بیژن بنفشه خواه عزیز درکنار استاد کیان رنجبر</p>
        </div>
    </div>
    </>
  )
}
