import { useState,useEffect } from "react";



export default function DigitalClock(){

const [time, setTime] = useState(new Date());

useEffect(() => {
  
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  
  return () => clearInterval(timer);
}, []);

return(

<div className="min-h-screen flex items-center justify-center bg-black p-6">


<p className="text-blue-400 text-8xl font-mono">{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</p>


</div>


)

}