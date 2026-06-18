import { useState } from "react"

import UsersList from "./UsersList"
import TodoList from "./TodoList"
import ColorChanger from "./ColorChanger"
import Counter from "./Counter"
import DigitalClock from "./DigitalClock"
import FavoriteAnimal from "./FavoriteAnimal"
import LikeButton from "./LikeButton"
import LivePreview from "./LivePreview"
import LoginForm from "./LoginForm"
import Modal from "./Modal"
import NavBar from "./NavBar"
import ProductCard from "./ProductCard"
import ReadMore from "./read-more"
import RegistrationForm from "./RegistrationForm"
import Sidebar from "./Sidebar"



function App() {

  const [activeComponent, setActiveComponent] = useState("Users List")

  const componentsList = [
    
    
    { name: "Users List", comp: <UsersList /> },
    { name: "Todo List", comp: <TodoList /> },
    { name: "Registration Form", comp: <RegistrationForm /> },
    { name: "Login Form", comp: <LoginForm /> },
    { name: "Modal", comp: <Modal /> },
    { name: "Color Changer", comp: <ColorChanger /> },
    { name: "Counter", comp: <Counter /> },
    { name: "Digital Clock", comp: <DigitalClock /> },
    { name: "Favorite Animal", comp: <FavoriteAnimal /> },
    { name: "Like Button", comp: <LikeButton /> },
    { name: "Live Preview", comp: <LivePreview /> },
    { name: "Product Card", comp: <ProductCard imageSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff" title="Running Shoes" price="$89.99" /> },
    { name: "Read More", comp: <ReadMore text="..." maxLength={45}/> },
    { name: "Sidebar", comp: <Sidebar /> },
    { name: "Nav Bar", comp: <NavBar /> }
  ]

 
  const currentComponent = componentsList.find(c => c.name === activeComponent)?.comp

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col md:flex-row antialiased">
      
      
      <aside className="w-full md:w-72 bg-gray-950 border-b md:border-b-0 md:border-r border-gray-800 p-6 flex flex-col shrink-0 select-none">
        <div className="mb-6">
          <h1 className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase">
            React Exercises
          </h1>
          <p className="text-xs text-gray-500 mt-1 font-mono">Work Environment</p>
        </div>

        <nav className="flex-1 overflow-y-auto space-y-1.5 pr-1 max-h-[60vh] md:max-h-full">
          {componentsList.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveComponent(item.name)}
              className={`w-full text-left px-4 py-2.5 text-sm font-semibold rounded-xl transition duration-200 border ${
                activeComponent === item.name
                  ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20"
                  : "bg-gray-900/50 text-gray-400 border-gray-800/80 hover:bg-gray-850 hover:text-gray-200"
              }`}
            >
              🔹 {item.name}
            </button>
          ))}
        </nav>
      </aside>

     
      <main className="flex-1 bg-gray-900 p-6 md:p-10 flex items-center justify-center overflow-auto">
        <div className="w-full h-full max-w-5xl bg-white text-gray-900 rounded-3xl shadow-2xl p-2 border border-gray-100 min-h-[500px] flex flex-col justify-center">
          {currentComponent}
        </div>
      </main>

    </div>
  )
}

export default App
