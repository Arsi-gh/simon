import { useDatas } from "@/context/dataProvider";
import { toPersianNumbers } from "@/toPersianNumbers";
import { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { HiOutlineXMark } from "react-icons/hi2";
import Image from "next/image";

let filteredItems;

export default function Search() {

  const [displayModal , setDisplayModal] = useState(false)

  return (
    <div className="flex gap-2 items-center relative">
        <LuSearch onClick={() => setDisplayModal(true)} className="cursor-pointer text-3xl text-primary-500"/>
        <SearchModal display={displayModal} displayHandler={setDisplayModal}/>
    </div>
  )
}

const SearchModal = ({display , displayHandler}) => {

  const datas = useDatas()

  const inputRef = useRef()

  const [ searchedItems , setSearchedItems ] = useState(null)

  const searchHandler = (value) => {
    if (value.length > 2 ){
      filteredItems = datas.filter(data => data.name.includes(value))
      setSearchedItems(filteredItems)
    } else {
      setSearchedItems(null)
    }
  }

  useEffect(() => {
    if (display) {
      inputRef.current.focus()
      inputRef.current.value = ""
      setSearchedItems(null)
    }
  } , [display])

  return (
    <>
    <div onClick={() => displayHandler(false)} className={`bg-black fixed w-screen h-screen  top-0 left-0 opacity-0 scale-0 ${display && 'scale-100 opacity-60'}`}></div>
    <section className={`w-[35rem] rounded-lg p-3 fixed flex flex-col left-1/2 sm:top-28 transform -translate-x-1/2 scale-0 transition-all duration-500 opacity-0  max-sm:w-full  max-sm:bg-white max-sm:h-[50rem] max-sm:scale-100 max-sm:opacity-100  max-sm:rounded-none max-sm:rounded-t-2xl max-sm:mt-[170rem] ${display && 'max-sm:mt-[66rem] sm:scale-100 sm:opacity-100 '}`}>
        <span className="items-center justify-between hidden max-sm:flex">
          <b>جستجو</b>
          <HiOutlineXMark onClick={() => displayHandler(false)} className="text-3xl"/>
        </span>
        <span className="w-full h-[1px] bg-zinc-300 my-3 hidden max-sm:block"></span>
        <input ref={inputRef} onChange={(e) => searchHandler(e.target.value)} type="text" placeholder="نام آیتم مورد نظر را وارد کنید" className="peer p-3 rounded-lg bg-white w-full outline-primary-500 border border-zinc-200"/>
        <div className=" mt-4 sm:max-h-[30rem] overflow-auto p-2 rounded-lg bg-black bg-opacity-20 flex flex-col gap-2 max-sm:max-h-[33rem]">
        {
            searchedItems && searchedItems.length == 0 && (
              <p className="p-3 flex justify-between items-center text-red-500  bg-white rounded-lg">محصولی یافت نشد<LuSearch className="text-2xl"/></p>
            ) 
          }
          {searchedItems ? searchedItems.map((item) => {
            return (
              <div key={item.id} className="flex gap-x-4 rounded-lg bg-zinc-50 p-2 items-center  border border-zinc-100">
                <Image width={300} height={300}  className="size-16 rounded-lg object-cover" src={item.img} alt={item.name} />
                <strong className="flex-1">{item.name}</strong>
                <b className="text-xl text-primary-500">{toPersianNumbers(item.price)}</b>
              </div>
            )
          })
          : ( 
            <p className="p-3 flex justify-between items-center bg-white rounded-lg">برای جستجو حداقل سه کاراکتر را وارد کنید <LuSearch className="text-2xl"/></p>
          )}
        </div>
    </section>
    </>
  )
}