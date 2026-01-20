import React, { useContext } from 'react'
import { CartContext } from '../App'
const Cart = () => {
    const {Carts,setCarts,setitem} = useContext(CartContext)
   
    const total=Carts.reduce((acc,ele)=>{
        return acc+=Number(ele.price)
    },0)
    let handleDelete=(index)=>{
        const updateCart=Carts.filter((ele,i)=>{
            return i !==index
        })
     setCarts(updateCart)
     setitem(prev=>prev-1)
    }
  return (
    <div className='w-full  flex justify-center items-center p-5 caret-transparent'>
       <table className='w-[50%]   border-2 border-solid '>
        <thead>
            <tr>
                <th className='border-2 border-solid p-3'>Product Name</th>
                <th  className='border-2 border-solid p-3'>Product Price</th>
                <th  className='border-2 border-solid p-3'>Remove</th>
            </tr>
        </thead>
        {Carts.map((ele,i)=>{
            return <tr key={i} className='text-center' >
                <td className=' border-2 border-solid p-3'>{ele.name}</td>
                <td className=' border-2 border-solid p-3'>{ele.price}</td>
                <td className=' border-2 border-solid p-3'><button className=' hover:scale-110 cursor-pointer' onClick={()=>{ handleDelete(i)}}>❌</button></td>
            </tr>
        })}
        <tr className='text-center'>
            <td className=' border-2 border-solid p-3'>Total</td>
            <td className=' border-2 border-solid p-3'>{total}</td>
        </tr>
       </table>
    </div>
  )
}

export default Cart