import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer fixed inset-x-0 bottom-0">
          <div>
            <h1 className="font-bold">Follow Us</h1>
              <div className="flex mt-2 justify-between">
                <img className="w-7 h-7 hover:scale-[110%] ease-in-out duration-75 cursor-pointer" src="/facebookicon.png" />
                <img className="w-7 h-7 hover:scale-[110%] ease-in-out duration-75 cursor-pointer" src="/Instagram_icon.webp" />
              </div>
          </div>
          <div>
            <Link to='locations'><h1 className="font-bold hover:underline hover:cursor-pointer decoration-solid decoration-black decoration-2">Locations</h1></Link>
              <div className="md:flex md:flex-row md:space-x-5">
                <p>Beverly Hills</p>
                <p>Downtown LA</p>
                <p>Long Beach</p>
              </div>
          </div>
          <div>
            <Link to='careers'><h1 className="font-bold hover:underline hover:cursor-pointer decoration-solid decoration-black decoration-2">Careers</h1></Link>
                <p>Apply</p>
          </div>
        </div>
    )
}