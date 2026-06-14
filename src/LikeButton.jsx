import { useState } from "react"

export default function LikeButton (){

const[counter,setCounter]=useState(50)
const[etat,setEtat]=useState(false)

const handleClick = () => {
    if (etat) {
      setCounter(prev => prev - 1);
    } else {
      setCounter(prev => prev + 1);
    }

    setEtat(prev => !prev);
   };

 return(

  <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border">

  <div className="flex items-center justify-between p-4">
  <div className="flex items-center gap-3">
    <img
      src="https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"
      alt=""
      className="w-12 h-12 rounded-full object-cover border-2 border-pink-500"
    />

    <div>
      <h2 className="font-semibold text-gray-900">
        @morocco.explorer
      </h2>
      <p className="text-sm text-gray-500">
        Morocco, Tangier
      </p>
    </div>
  </div>

  <button className="text-xl text-gray-600 hover:text-black">
    &#8942;
  </button>
    </div>


   <div>

    <img
    src="https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"
    alt=""
    className="w-full h-80 object-cover"
    />
    </div>


    <div className="flex flex-col gap-4 ">

      <div className="flex justify-between px-4 pt-4 text-sm text-gray-600">
       <p>{counter}</p>
       <p>25 Comments</p>
      </div>

      <div className="flex justify-around border-t mt-4 py-3">

     <button
      onClick={handleClick}
      className={`font-medium transition ${
      etat
        ? "text-red-500 scale-110"
        : "text-gray-600 hover:text-red-500"
      }`}>{etat ? "❤️ Liked" : "🤍 Like"}</button>

     <button className="text-gray-600 hover:text-blue-500 transition">
     💬 Comment
     </button>

     <button className="text-gray-600 hover:text-green-500 transition">
     📤 Share
     </button>

     </div>


    </div>

</div>

)}