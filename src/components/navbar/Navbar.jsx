import React from 'react'
import {RiSearchLine, RiEditBoxLine} from "@remixicon/react"

const Navbar = () => {
  return (
    <nav className='px-10 flex justify-start items-center gap-40 h-20   w-full bg-white text-text-primary font-medium text-2xl'>
        <div id="logo" className="font-classic text-6xl overflow-visible flex flex-col justify-center items-center h-32 w-64 relative top-10 rotate-352">
            <h1>Avyy</h1>
            <h1>TheTechSavyy</h1>
        </div>
        <div className="search px-3 h-10 bg-[#f9f9f9] rounded-2xl flex justify-center items-center gap-2 ">
            <RiSearchLine className='text-[#6b6b6b]'/>
            <input type="text" placeholder='Search' className='outline-0 text-[#6b6b6b]' />
            </div>
        <div className="info ml-auto flex  justify-center items-center gap-10">
            <button className="bg-olive text-white px-8 py-2 rounded-2xl hover:bg-opacity-80 transition-colors">
                Clone
            </button>
            <div id="write" className='flex justify-center items-center gap-2'>
                <RiEditBoxLine size={32}/>
                Write
                </div>
            <div className="pfp w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center text-lg font-semibold">
                A
            </div>
        </div>
    </nav>
  )
}

export default Navbar