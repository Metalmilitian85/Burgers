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
                <div className="flex flex-wrap border-4 border-red-500 rounded-lg bg-white mt-7 mx-auto justify-center max-w-[80%] md:max-w-[60%]">
                    <h2 className="my-auto mx-auto">{item.title}</h2>
                    <img src={item.pic} alt={item.name} className="w-[400px] h-[300px] mx-auto" />
                  <div className="flex flex-col mx-auto">  
                    <h1 className="font-bold text-center my-auto">Item Info</h1>
                    <p className="my-auto mx-auto">{item.info}</p>
                    <p className="text-center"><strong>Calories:</strong> {item.calories}</p>
                  </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <Link to="/">
                <button>Menu</button>
            </Link>
        </div>
    );
}