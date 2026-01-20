import React, { useEffect } from 'react'
import { useState,useContext,createContext } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
export let CartContext=createContext()
const App = () => {
const [item, setitem] = useState(0)
const [Carts, setCarts] = useState([])
useEffect(() => {
  console.log(Carts);
})


  return (
    <CartContext.Provider value={{item,setitem,Carts,setCarts}}>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App