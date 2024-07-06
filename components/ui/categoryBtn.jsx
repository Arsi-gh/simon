export default function CategoryBtn({ children , text , callBack}) {
  return (
    <button onClick={() => callBack()} className='bg-white p-2 rounded-lg flex gap-2 items-center pl-3 border-2 border-zinc-100 shadow-md min-w-fit'>
        {children}
        {text}
    </button>
  )
}
