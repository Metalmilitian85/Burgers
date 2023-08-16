import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from './data.json';

export default function Foodinfo() {
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
                    <p className="text-center md:my-auto md:text-2xl md:pb-3"><strong>Single:</strong> {item.single}</p>                    
                    <p className="text-center mb-3 md:my-auto md:text-2xl md:pb-3"><strong>Combo:</strong> {item.combo}</p>      
                    <p className="text-center mb-3 md:my-auto md:text-2xl md:pb-3"><strong>Calories:</strong> {item.calories}</p>            
                  </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
              <div className="flex justify-center my-7 space-x-20 text-white font-semibold">
                <Link to="/">
                    <button className="bg-red-500 rounded-3xl w-28 border-2 border-red-700 hover:bg-red-600">Menu</button>
                </Link>
                <Link to="">
                    <button className="bg-red-500 rounded-3xl w-28 border-2 border-red-700 hover:bg-red-600">Add To Cart</button>
                </Link>
              </div>
        </div>
    );
}