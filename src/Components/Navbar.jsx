import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <nav className="h-20 mx-auto p-4 font-bold bg-red-200">
        <div className="menubar">
            {!nav ? <AiOutlineClose size={20} className="text-white" /> : <AiOutlineMenu onClick={handleNav} size={20} color="red" className="hover:cursor-pointer" />}
            <h1 className="text-3xl font-bold m-auto">Brian's Burger Bash</h1>
            <Link to="/cart"><img src="/bag.jpg" className="bag" /></Link>
        </div>
        <div className={!nav ? "fixed left-0 top-0 w-[435px] bg-red-600 text-white h-full border-r border-r-gray-90 ease-in-out duration-200" : "ease-in-out duration-200 fixed left-[-100%]"}>
          <div className="flex">
            <h1 className="w-full text-3xl font-bold text-black-500 m-3 mt-4 ml-14">BBB's</h1>
            <button onClick={handleNav} className="mr-14 mt-4">X</button>
          </div>
          <ul className="uppercase p-7 text-center text-2xl">
            <Link to='/'><li onClick={handleNav} className="p-7 hover:underline decoration-solid decoration-black decoration-4">MENU</li></Link>
            <Link to='locations'><li onClick={handleNav} className="p-7 hover:underline decoration-solid decoration-black decoration-4">LOCATIONS</li></Link>
            <Link to='contact'><li onClick={handleNav} className="p-7 hover:underline decoration-solid decoration-black decoration-4">CONTACT US</li></Link>
            <Link to='careers'><li onClick={handleNav} className="p-7 hover:underline decoration-solid decoration-black decoration-4">CAREERS</li></Link>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar