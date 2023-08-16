import React from 'react'
import Data from './data.json'
import '../index.css'
import { useSearchParams, Link } from 'react-router-dom'
import Aos from 'aos'

export default function Home() {

const [ searchParams, setSearchParams ] = useSearchParams()

const typeFilter = searchParams.get("category")

const foodType = typeFilter ? Data.filter(item => item.category === typeFilter) : Data

    return (
        <div>
            <h1 className="text-center font-bold text-2xl mt-7">Food Menu</h1>
              <div className="italic text-center my-5 mx-8 font-semibold">
                <p>** All beef burgers come standard with lettuce, tomato, pickles, and onions. **</p>
                <p>** All chicken sandwiches come standard with lettuce and mayo. **</p>
              </div>
              <div>
                <button 
                    onClick={() => setSearchParams({category: "burger"})}
                    className={`filterbuttons hover:scale-[105%] ease-in-out duration-75 
                        ${typeFilter === "burger" ? "selected" : ""}`}
                >Burgers</button>
                <button 
                    onClick={() => setSearchParams({category: "sides"})}
                    className={`filterbuttons hover:scale-[105%] ease-in-out duration-75 
                        ${typeFilter === "sides" ? "selected" : ""}`}
                >Sides</button>
                <button 
                    onClick={() => setSearchParams({category: "desert"})}
                    className={`filterbuttons hover:scale-[105%] ease-in-out duration-75 
                        ${typeFilter === "desert" ? "selected" : ""}`}
                >Desert</button>
                <button 
                    onClick={() => setSearchParams({})}
                    className={`filterbuttons hover:scale-[105%] ease-in-out duration-75 
                        ${typeFilter === null ? "selected" : ""}`}
                >All</button>
              </div>
            <div className="flex flex-wrap">
                {foodType.map(item => {
                    return (
                        <div className="menuitems hover:scale-[105%] ease-in-out duration-75 mx-auto bg-white" >
                          <Link to={`/Food/${item.id}`}>
                            <h3>{ item.title }</h3>
                            <img src={ item.pic } className="foodpics" />
                          </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}