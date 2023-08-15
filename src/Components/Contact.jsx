import React from 'react'
import Form from './Form'

export default function Contact() {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl mb-3 mt-7">Contact Us</h1>
              <div className="text-center mb-3 font-semibold">
                <p>Phone: 123-456-7890</p>
                <p>Email: bbbash@burgerbash.com</p>
              </div>
              <div>
                <h2 className="mt-7">Main office located at:</h2>
                <h2 className="mt-2">Downtown LA Location</h2>
                  <div className="text-center mb-7">
                    <p>123 City Ave.</p>
                    <p>Los Angeles, CA 90012</p>
                  </div>
              </div>
              <Form />
              <button className="button hover:scale-[105%] ease-in-out duration-75">Submit</button>
        </div>
    )
}