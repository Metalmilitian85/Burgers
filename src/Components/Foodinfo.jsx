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
            <h1>Food Info</h1>
            {/* Check if item exists before trying to access its properties */}
            {item ? (
                <div className="flex flex-wrap border-4 border-red-500 rounded-lg mx-7">
                    <img src={item.pic} alt={item.name} />
                    <p>{item.category}</p>
                    <p>{item.info}</p>
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