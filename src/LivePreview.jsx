import { useState } from "react"




export default function LivePreview(){

const[dataForm,setDataForm]=useState({
name:"",
city:""
})


return(


<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      
   
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        
        
        <div className="p-8 bg-emerald-400/10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900  mb-6 text-center">Form</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name :</label>
              <input 
                type="text" 
                value={dataForm.name}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                onChange={(e)=>
                    setDataForm({
                    ...dataForm,
                    name:e.target.value,
                })}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">City :</label>
              <input 
                type="text" 
                value={dataForm.city}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                onChange={(e)=>
                    setDataForm({
                    ...dataForm,
                    city:e.target.value,
                })}
              />
            </div>

          </form>
        </div>

      
        <div className="p-8 bg-blue-500 text-white flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Informations of user</h2>
          
          
          <div className="space-y-2 bg-white/10 p-6 rounded-xl w-full max-w-xs backdrop-blur-sm">
            <p className="text-lg">👤 <span className="font-bold">Name : {dataForm.name}</span> </p>
            <p className="text-lg">📍 <span className="font-bold">City : {dataForm.city}</span> </p>
          </div>
        </div>

      </div>

    </div>


)



}