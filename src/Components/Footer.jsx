import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer fixed inset-x-0 bottom-0">
          <div>
            <Link to='contact'><h1 className="font-bold hover:underline hover:cursor-pointer decoration-solid decoration-black decoration-2">Contact Us</h1></Link>
                <p>P: 123-456-7890</p>
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