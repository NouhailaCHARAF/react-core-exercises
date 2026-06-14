import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import ReadMore from './read-more'
import FavoriteAnimal from './FavoriteAnimal'
import ColorChanger from './ColorChanger'
import LikeButton from './LikeButton'


function App() {
  

  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <LikeButton />
</div>
  )
}

export default App
