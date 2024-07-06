export default function CategoryWrapper({children}) {
  return (
    <div className='flex bg-white w-full gap-2 sticky top-20 xl:justify-center  z-20  p-4 bg-opacity-90 backdrop-blur-xl mx-auto  max-sm:w-full  max-sm:top-16  max-sm:pt-8 max-sm:p-4 overflow-x-scroll'>
      {children}
    </div>
  )
}
