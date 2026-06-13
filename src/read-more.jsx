import { useState } from "react"


export default function ReadMore (){

    const [show, setShow]=useState(false)

     
  
return(
 <div className="max-w-2xl mx-auto mt-12 px-4">
     
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-150 shadow-sm">
        
        <h2 className="text-2xl font-bold text-gray-950 mb-4">
          Understanding Transitions in Modern UI Design
        </h2>

        <div 
          className={`relative transition-all duration-700 ease-in-out overflow-hidden ${
            show ? "max-h-[1000px]" : "max-h-44"
          }`}>

          <div className="text-gray-650 space-y-4 leading-relaxed text-base md:text-lg">
            <p>
              Tailwind doesn't include pre-designed button styles out of the box, but they're easy to build using existing utilities.
              Here are a few examples to help you get an idea of how to build components like this using Tailwind. 
              Transitions let you keep the user interface updates responsive even on slow devices.
            </p>
            <p>
              With a Transition, your UI stays responsive in the middle of a re-render. For example, if the user clicks a tab but then change their mind and click another tab, they can do that without waiting for the first re-render to finish.
            </p>
            <p>
              Transitions let you keep the user interface updates responsive even on slow devices. With a Transition, your UI stays responsive in the middle of a re-render. For example, if the user clicks a tab but then change their mind and click another tab, they can do that without waiting for the first re-render to finish.
            </p>
            <p className="bg-blue-50/60 p-4 rounded-2xl text-blue-950 font-medium border border-blue-100/70">
              💡 <strong>Pro Tip:</strong> Keeping UI responsive during heavy renders is what separates junior code from enterprise-grade application architecture.<br /> By Nouhaila
            </p>
          </div>

         
          <div 
            className={`absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent transition-opacity duration-500 pointer-events-none ${
              show ? "opacity-0" : "opacity-100"
            }`}/>
        </div>

    
        <div className="mt-6 flex justify-center border-t border-gray-100 pt-4">
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm md:text-base transition-colors duration-200 group"
          >
            <span>{show ? "Show Less" : "Read More"}</span>
            
            
            <svg 
              className={`w-4 h-4 transition-transform duration-500 ${show ? "rotate-180" : ""}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}