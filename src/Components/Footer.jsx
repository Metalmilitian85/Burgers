import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
          <div>
            <Link to='contact'><h1 className="font-bold hover:underline hover:cursor-pointer decoration-solid decoration-black decoration-2">Contact Us</h1></Link>
                <p>P: 123-456-7890</p>
          </div>
          <div>
            <Link to='locations'><h1 className="font-bold hover:underline hover:cursor-pointer decoration-solid decoration-black decoration-2">Locations</h1></Link>
                <p>Beverly Hills</p>
                <p>Downtown LA</p>
                <p>Long Beach</p>
          </div>
          <div>
            <Link to='careers'><h1 className="font-bold hover:underline hover:cursor-pointer decoration-solid decoration-black decoration-2">Careers</h1></Link>
                <p>Apply</p>
          </div>
        </div>
    )
}