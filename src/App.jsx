import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './landing_page/home/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HomePage/>
       </div>
    </>
  )
}
 
export default App
