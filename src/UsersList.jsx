import { useState, useEffect } from "react"

export default function UsersList(){
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true) 
  const [error, setError] = useState(null)          

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

 
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl overflow-x-auto rounded-2xl shadow-xl bg-white border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100/80 backdrop-blur-sm sticky top-0 border-b">
            <tr>
              <th className="px-6 py-4 font-bold text-gray-750 uppercase tracking-wider text-xs">Name</th>
              <th className="px-6 py-4 font-bold text-gray-750 uppercase tracking-wider text-xs">Email</th>
              <th className="px-6 py-4 font-bold text-gray-750 uppercase tracking-wider text-xs">City</th>
              <th className="px-6 py-4 font-bold text-gray-750 uppercase tracking-wider text-xs text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {list.map((item) => (
              <tr className="hover:bg-gray-50/80 transition select-none" key={item.id}>
                <td className="px-6 py-4 text-gray-800 font-medium">{item.name}</td>
                <td className="px-6 py-4 text-gray-650 font-mono text-sm">{item.email}</td>
                <td className="px-6 py-4 text-gray-650">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                    📍 {item.address.city}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-3 justify-center">
                  <button className="text-white bg-red-500 hover:bg-red-650 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm hover:shadow transition">
                    Delete
                  </button>
                  <button className="text-white bg-green-500 hover:bg-green-650 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm hover:shadow transition">
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