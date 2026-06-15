import { useState } from "react"



export default function RegistrationForm(){

const[formData,setFormData]=useState({

email:"",
password:"",
confirmpassword:""



})
const[message,setMessage]=useState("")

const handleSubmit=(e)=>{
e.preventDefault();


if(formData.password !== formData.confirmpassword){

    setMessage("❌ Passwords do not match!")
}
else{
    setMessage("🎉 Registration Successful!");

setFormData({email:"",password:"",confirmpassword:""})}


}



return(
<div className="min-h-screen flex items-center justify-center bg-gray-100">

    <form action="" className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg" 
    onSubmit={handleSubmit}>
        <div className="mb-4">
        <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2">
            Email
          </label>
<input type="text" value={formData.email} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
onChange={(e)=>{setFormData({...formData,email:e.target.value})}}/></div>



<div className="mb-6">
<label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2">
            Password
          </label>


<input value={formData.password} type="password" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required 
onChange={(e)=>{setFormData({...formData,password:e.target.value})}}/>
</div>



<div className="mb-6">
<label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>



<input value={formData.confirmpassword} type="password" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
onChange={(e)=>{setFormData({...formData,confirmpassword:e.target.value})}}/>
</div>

{message && <p className="text-center font-medium mb-4 text-gray-800">{message}</p>}

<button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
>Resiter</button>
</form>
</div>

)


}