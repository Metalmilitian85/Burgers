import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';

export default function Cart() {

  const { cartItems, removeFromCart, getCartTotal, clearCart } = useContext(CartContext);

  // Cart price and tax price
  const itemsPrice = {getCartTotal}
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice

  return (
    <div>
      <div className="bg-white h-16 mb-7 flex items-center">
        <h1 className="text-2xl mx-auto font-semibold">Checkout Cart</h1>
      </div>
      <div className="flex justify-center mx-auto flex-col border-4 border-red-500 rounded-[25px] bg-white max-w-[500px]">
        {cartItems.map((item, index) => (
          <div key={index} className="border-2 border-red-500 rounded-[25px] mx-7 my-7">
            <img className="w-[400px] h-[300px] rounded-[25px] px-2 py-2 mx-auto" src={item.pic} alt={item.title} />
            <div className="text-center">
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
            <div className="flex">
              <button onClick={() => removeFromCart(item)} className="font-semibold mx-auto border-2 text-center border-red-600 bg-red-300 rounded-xl mb-3 w-[150px] hover:bg-red-500 hover:scale-[105%] ease-in-out duration-75">Remove From Cart</button>
            </div>
          </div>
        ))}
        {
          cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
          <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
          <button 
            onClick={() => alert('I wish you could!')}
            className="py-2 font-bold border-2 text-center border-red-600 bg-red-300 rounded-xl mb-3 w-[150px] hover:bg-red-500 hover:scale-[105%] ease-in-out duration-75">Checkout!</button>
          <button
            className="mt-10 px-4 border-2 text-center border-red-600 bg-red-300 rounded-xl mb-3 w-[120px] hover:bg-red-500 hover:scale-[105%] ease-in-out duration-75"
            onClick={() => {
              clearCart()
            }}
          >
            Clear cart
          </button>
        </div>
          ) : (
            <div className="flex flex-col mx-auto">
              <h1 className="text-lg font-bold text-center my-3">Your cart is empty</h1>
              <Link to="/">
                <button className="border-2 font-semibold text-center border-red-600 bg-red-300 rounded-xl mb-3 w-[150px] hover:bg-red-500 hover:scale-[105%] ease-in-out duration-75">Return to Menu</button>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}
