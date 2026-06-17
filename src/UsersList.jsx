import { useState, useEffect } from "react"

export default function UsersList(){
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true) 
  const [error, setError] = useState(null)   
  const[nameUser,setNameUser]=useState("")
  const[userUpdate,setUserUpdate]=useState(null)
  


  useEffect(() => {

    const getUsers = async () => {
      try {
        setIsLoading(true) 
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!response.ok) {
          throw new Error("Failed to fetch data!"); 
        }

        const data = await response.json();
        setList(data);
      } catch (err) {
        setError(err.message); 
      } finally {
        setIsLoading(false) 
      }
    };

    getUsers();
  }, []);

  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 select-none">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-600 font-mono font-medium animate-pulse">Loading users data...</p>
      </div>
    )
  }

  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl shadow-sm text-center max-w-md w-full">
          <p className="font-bold text-lg mb-1">Oops! Something went wrong</p>
          <p className="text-sm text-red-600 font-mono">{error}</p>
        </div>
      </div>
    )
  }


 const handleDelete=(idToDelete)=>{


   if(window.confirm("Are you sure?")){

  setList(list.filter((item)=>item.id !== idToDelete))
  }}


 const handleSave=()=>{

  const updatedList=list.map((item)=>(
    item.id===userUpdate.id? userUpdate:item

  ))

  setList(updatedList)
  setUserUpdate(null)
  }


  return (

    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
    <div className="w-full max-w-5xl overflow-x-auto rounded-2xl shadow-xl bg-white border border-gray-100">

     {userUpdate && (  <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Update User Details</h3>
    <input
    type="text"
    placeholder="Name"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={userUpdate?.name || ""}
    onChange={(e)=>setUserUpdate({...userUpdate,name:e.target.value})}
    />

   <input
    type="email"
    placeholder="Email"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={userUpdate?.email || ""}
    onChange={(e)=>setUserUpdate({...userUpdate,email:e.target.value})}
   />

  <input
    type="text"
    placeholder="City"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={userUpdate?.address?.city || ""}
    onChange={(e)=>setUserUpdate({
              ...userUpdate,
              address: { ...userUpdate.address, city: e.target.value }})}
   />
  <div className="flex gap-3">
  <button
    className="py-3 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition "
    onClick={handleSave}
   >
    Update
   </button>
   <button
              onClick={() => setUserUpdate(null)} 
              className="py-3 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>

  </div>
 </div>  
 )}

        <div className="flex gap-3 m-6">
        <input
          type="text"
         placeholder="Search users..."
         className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
         onChange={(e)=>setNameUser(e.target.value)}
         />

        <button
          className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
           >
           Search
          </button>
          </div>
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100/80 backdrop-blur-sm sticky top-0 border-b">
            <tr>
              <th className="px-6 py-4 font-bold text-gray-800 uppercase tracking-wider text-xs">Name</th>
              <th className="px-6 py-4 font-bold text-gray-800 uppercase tracking-wider text-xs">Email</th>
              <th className="px-6 py-4 font-bold text-gray-800 uppercase tracking-wider text-xs">City</th>
              <th className="px-6 py-4 font-bold text-gray-800 uppercase tracking-wider text-xs text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">


            {list
            .filter((item)=>item.name.toLowerCase().includes(nameUser.toLowerCase()))
            .map((item) => (
              <tr className="hover:bg-gray-50/80 transition select-none" key={item.id}>
                <td className="px-6 py-4 text-gray-800 font-medium">{item.name}</td>
                <td className="px-6 py-4 text-gray-700 font-mono text-sm">{item.email}</td>
                <td className="px-6 py-4 text-gray-700">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                    📍 {item.address.city}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-3 justify-center">
                  <button className="text-white bg-red-500 hover:bg-red-700 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm hover:shadow transition"
                  onClick={()=>handleDelete(item.id)}>
                    Delete
                  </button>
                  <button className="text-white bg-green-500 hover:bg-green-700 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm hover:shadow transition"
                  
                  onClick={()=>setUserUpdate(item)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}