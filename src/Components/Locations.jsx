import React from 'react'

export default function Locations() {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl mb-3 mt-7">Locations</h1>
            <p className="font-semibold text-center my-2">Serving LA for 20 years!</p>
            <img src="/mapstars.jpg" className="max-w-[60%] m-auto" />
            <div>
                <h2 className="mt-7">Beverly Hills</h2>
                  <div className="text-center mb-3">
                    <p>555 Hill St.</p>
                    <p>Beverly Hills, CA 90210</p>
                  </div>
                    <img src="/bhills.jpg" className="max-w-[50%] m-auto mt-2" />
                <h2 className="mt-7">Downtown LA</h2>
                  <div className="text-center mb-3">
                    <p>123 City Ave.</p>
                    <p>Los Angeles, CA 90012</p>
                  </div>
                    <img src="/la.jpg" className="max-w-[50%] m-auto mt-2" />
                <h2 className="mt-7">Long Beach</h2>
                  <div className="text-center mb-3">
                    <p>913 Ocean Blvd.</p>
                    <p>Beverly Hills, CA 90802</p>
                  </div>
                    <img src="/beach.jpg" className="max-w-[50%] m-auto mt-2" />
            </div>
        </div>
    )
}