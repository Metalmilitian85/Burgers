import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from './data.json';
import { CartContext } from '../Context/CartContext'

export default function Foodinfo() {

    const { addToCart } = useContext(CartContext)
    const params = useParams();
    const [item, setItem] = useState(null);

  
    useEffect(() => {

        // Parse the id from the URL params to an integer type
        const idFromUrl = parseInt(params.id, 10);

        // Find the item in the data array that matches the id from the URL
        const foundItem = data.find((d) => d.id === idFromUrl);
      
        // Set the found item in the state
        setItem(foundItem);
    }, [params.id]);
  
    return (
        <div>
            {/* Check if item exists before trying to access its properties */}
            {item ? (
                <div className="flex flex-wrap border-4 border-red-500 rounded-[25px] bg-white mt-12 md:mt-24 mx-auto justify-center max-w-[80%] md:max-w-[50%]">
                    <h2 className="my-auto py-5 mx-auto md:text-2xl">{item.title}</h2>
                    <img src={item.pic} alt={item.name} className="w-[400px] h-[300px] mx-auto pb-5 md:mt-5" />
                  <div className="flex flex-col mx-auto">  
                    <h1 className="font-bold text-center md:my-auto md:text-2xl">Item Info</h1>
                    <p className="my-3 mx-auto text-center md:my-auto md:text-2xl">{item.info}</p>      
                    <p className="text-center mb-3 md:my-auto md:text-2xl md:pb-3"><strong>Calories:</strong> {item.calories}</p>            
                    <button onClick={() => addToCart(item)} className="mx-auto border-4 border-red-600 bg-red-300 rounded-xl mb-3 w-[150px] hover:bg-red-500 hover:scale-[105%] ease-in-out duration-75 font-semibold">Add To Cart</button>
                  </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}