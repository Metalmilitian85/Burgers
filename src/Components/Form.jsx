import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function Form() {
  const [name, setName] = useState("");

  return (
    <form>
    <label className="flex flex-col">
      <h2 className="mb-5 mt-10 text-2xl">Leave us a Review!</h2>
      <p className="text-center mb-5 font-semibold text-lg mx-7">We value your input! Please leave a comment if there are any questions, 
      concerns, or anything you'd like us to know!:</p>
      <textarea className="border-2 m-auto w-[70%]"
        name="postContent"
        defaultValue="Comment here"
        rows={4}
        cols={40}
      />
    </label>
    </form>
  )
}