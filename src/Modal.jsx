import { useState } from "react"




export default function Modal(){
const[isOpen,setIsOpen]=useState(false)


return(
<div className="min-h-screen bg-gray-100 flex items-center justify-center">


<button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition shadow"
onClick={()=>setIsOpen(true)}>Open</button>



{isOpen && 
<div className="fixed inset-0 flex items-center justify-center z-50 animate-fadeIn">

<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

<div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl relative z-10 space-y-4">


<div className="flex justify-between items-center border-b pb-2">
    <h3 className="text-lg font-bold text-gray-800">User Info</h3>
    <button className="text-gray-400 hover:text-gray-600 text-xl" onClick={()=>setIsOpen(false)}>✖</button>
</div>
<p>Nouhaila, 27 years old, Web Developer based in Tangier. Learning React like a pro! </p>
<button className="w-full py-2 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition" onClick={()=>setIsOpen(false)}>Got it, Close</button>
</div>


</div>
}






</div>
)

}