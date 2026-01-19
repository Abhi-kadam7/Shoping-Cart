import React from 'react'
import { useState,useContext,createContext } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
export let CartContext=createContext()
const App = () => {
const [item, setitem] = useState(0)
  return (
    <CartContext.Provider value={{item,setitem}}>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App