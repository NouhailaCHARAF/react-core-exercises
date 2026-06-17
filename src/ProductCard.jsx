import { useState } from "react"


export default function ProductCard({imageSrc,title,price}){


    const[like,setLike]=useState(false)

    const fan =()=>{
        setLike(prev=>!prev)
    }

   return(
   <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
    <img
    src={imageSrc}
    alt={title}
    className="w-full h-56 object-cover"
     />

     <div className="p-5">
     <h2 className="text-xl font-bold text-gray-800 mb-2">
      {title}
     </h2>

     <div className="flex items-center justify-between">
      <span className="text-2xl font-bold text-green-600">
        {price}
      </span>

       <button className="px-4 py-2" onClick={fan}>
        {like ? "❤️" : "🤍"}
      </button>

      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Add to Cart
      </button>
      </div>
      </div>

      </div>
)






}