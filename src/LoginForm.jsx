import { useState } from "react"



export default function LoginForm(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const[show, setShow]=useState(false)


const  handleSubmit=(e)=>{
e.preventDefault();

alert(`Email : ${email} | Password : ${password}`)

  setEmail("")
  setPassword("")
}


return(

  <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg" >

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2">
            Password
          </label>

          <input
            type={show ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}/>

            <button onClick={()=>setShow(prev=>!prev)} type="button" className="text-base font-bold text-center pt-6 pl-2 text-blue-700 hover:text-blue-500">{show? "🔒 Hide password":"👁️ Show password"}</button>
        
           </div>
          <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Sign In
          </button>
      </form>

    </div>

)
}