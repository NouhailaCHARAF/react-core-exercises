import { useState } from "react"

export default function Counter(){

const [count,setCount]=useState(0)

  return (
    <div className="flex gap-7 justify-center items-center min-h-screen">

      <button
        className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        onClick={() => setCount(prev => prev - 1)}
        disabled={count === 0}
      >
        -
      </button>

      <p className="text-3xl font-bold w-10 text-center">{count}</p>

      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => setCount(prev => prev + 1)}
        disabled={count === 10}
      >
        +
      </button>

      <button
        className="px-6 py-2 bg-red-200 text-gray-800 rounded-lg hover:bg-red-300 transition"
        onClick={() => setCount(0)}
        disabled={count === 0}
      >
        Reset
      </button>

    </div>
  );
}
