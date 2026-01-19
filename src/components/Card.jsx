import Navbar from './Navbar'
import { CartContext } from '../App'
import { useContext } from 'react'
const Card = ({obj}) => {
    let {setitem}=useContext(CartContext)
  return (
    <div className='w-62.5 h-75 bg-amber-50 flex flex-col justify-center items-center  gap-1 rounded-[12px] caret-transparent'>
        <h2 className='font-medium'>{obj.name}</h2>
        <img src={obj.img} alt={obj.name}  className='h-50 w-11/12 rounded-[12px] hover:scale-105 '/>
        <h3>Price: ₹{obj.price}</h3>
        <button className='bg-gray-500 hover:bg-amber-600 py-0.5 p-1.5 rounded-full cursor-pointer fon' onClick={()=>{setitem(prev=>prev+1)}}>Add to cart</button>
        
    </div>
  )
}

export default Card