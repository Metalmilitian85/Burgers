import React, {useState, useContext} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

const Navbar = () => {

    const { cartItems } = useContext(CartContext)
    const [nav, setNav] = useState(true)
    const [ showModal, setShowModal ] = useState(false);

    const toggle = () => {
        setShowModal(!showModal)
    }

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <nav className="h-20 mx-auto p-4 font-bold bg-red-200">
        <div className="menubar flex justify-between">
            {!nav ? <AiOutlineClose size={20} className="text-white" /> : <AiOutlineMenu onClick={handleNav} size={20} color="red" className="hover:cursor-pointer" />}
            <Link to="/"><h1 className="text-3xl font-bold m-auto">Brian's Burger Bash</h1></Link>
            <div className="flex">
              <Link to="/cart"><img src="/bag.jpg" className="bag relative" /></Link>
              {!showModal && <button className='absolute bg-[#FF0000] rounded-full text-white w-6 right-2 bottom-4'
                  onClick={toggle}
              >{cartItems.length}</button>}
            </div>
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