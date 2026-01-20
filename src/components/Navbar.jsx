import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../App"
const Navbar = () => {
let {item}=useContext(CartContext)
  return (
    <div >
        <nav className='w-full h-12.5 bg-black flex justify-between items-center caret-transparent'>
        <Link to='/'>
        <h3 className='text-sm text-amber-50 hover:text-amber-600 hover:scale-110 underline  cursor-pointer pl-5 '>Home</h3>
        </Link>
        <Link to='/'>
         <h1 className='text-2xl text-amber-50 hover:text-amber-600 hover:scale-110 underline  cursor-pointer pl-5 '>🛒Abhis-Shop</h1>
        </Link>
       <Link to='/cart'>
        <h3 className='text-sm text-amber-50  hover:text-amber-600 hover:scale-110 underline  cursor-pointer pr-5'>Cart({item})</h3>
       </Link>
        </nav>
    </div>
  )
}

export default Navbar