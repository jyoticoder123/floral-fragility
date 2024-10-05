import React from 'react'
import 'remixicon/fonts/remixicon.css'


const Navbar = () => {
  return (
    <div className="flex z-50 fixed w-full items-center justify-between py-8 px-20">
        <h2 className="text-xl">F</h2>
        <div className="flex gap-60 font-[Classy Vogue] items-center">
        <div className="flex items-center justify-center gap-10">
            <a className="navtext relative underline px-2 text-xl font-light inline-block" href="#">Shop</a>
            <a className="navtext relative underline px-2 text-xl font-light inline-block" href="#">New</a>
            <a className="navtext relative underline px-2 text-xl font-light inline-block" href="#">About</a>
            <a className="navtext relative underline px-2 text-xl font-light inline-block" href="#">Stores</a>
            <a className="navtext relative underline px-2 text-xl font-light inline-block" href="#">Search</a>
        </div>
        <div className="flex gap-10 text-xl">
           <i className="ri-shopping-bag-3-line"></i>
           <i className="ri-menu-3-line"></i>

        </div>
        </div>
    </div>
  )
}

export default Navbar