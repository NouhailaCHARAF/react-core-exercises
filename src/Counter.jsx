import { useState } from "react"

export default function Counter(){

const [count,setCount]=useState(0)

  return (
    <div className="flex flex-col gap-7 justify-center items-center py-8">
      
      <div className="flex gap-7 justify-center items-center">
        <button
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCount(prev => prev - 1)}
          disabled={count === 0}
        >
          -
        </button>

        <p className="text-3xl font-bold w-10 text-center">{count}</p>

        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCount(prev => prev + 1)}
          disabled={count === 10}
        >
          +
        </button>

        <button
          className="px-6 py-2 bg-red-200 text-gray-800 rounded-lg hover:bg-red-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCount(0)}
          disabled={count === 0}
        >
          Reset
        </button>
      </div>

      
      <div className="mt-4 border-t border-gray-100 pt-6 text-left w-full max-w-sm mx-auto px-4">
        <div className="bg-blue-50/60 p-4 rounded-2xl text-blue-950 text-sm font-medium border border-blue-100/70 space-y-1">
          <p className="font-bold flex items-center gap-1.5 text-blue-600 text-base">
            💡 <span>Developer Note:</span>
          </p>
          <p className="text-gray-700 leading-relaxed">
            In this exercise, I learned how to control the counter limits: it strictly stops at <strong>10</strong> when incrementing, locks at <strong>0</strong> when decrementing, and the Reset button clears everything completely.
          </p>
          <p className="text-xs text-gray-400 font-mono pt-1 text-right">By Nouhaila</p>
        </div>
      </div>

    </div>
  );
}
