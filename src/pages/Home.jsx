import React from 'react'
import Card from '../components/Card'

const Home = () => {
const products = [
  { 
    id: 1, 
    name: "Nike Air Force 1", 
    price: 499, 
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=60" 
  },
  { 
    id: 2, 
    name: "Adidas Superstar", 
    price: 799, 
    img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=500&q=60" 
  },
  { 
    id: 3, 
    name: "Puma Running Shoes", 
    price: 299, 
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=60" 
  },
  { 
    id: 4, 
    name: "Apple AirPods Pro", 
    price: 999, 
    img: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=60" 
  },
  { 
    id: 5, 
    name: "Samsung Galaxy Buds", 
    price: 699, 
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=60" 
  },
  { 
    id: 6, 
    name: "Sony Headphones", 
    price: 1299, 
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=60" 
  },
  { 
    id: 7, 
    name: "Dell Laptop", 
    price: 899, 
    img: "https://m.media-amazon.com/images/I/611DLBKu8JL._AC_UL480_FMwebp_QL65_.jpg" 
  },
  { 
    id: 8, 
    name: "HP Laptop", 
    price: 399, 
    img: "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&w=500&q=60" 
  },
  { 
    id: 9, 
    name: "Canon DSLR", 
    price: 1499, 
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=60" 
  },
  { 
    id: 10, 
    name: "PlayStation 5", 
    price: 599, 
    img: "https://m.media-amazon.com/images/I/41toe+oZTpL._AC_UY327_FMwebp_QL65_.jpg" 
  },
];
  return (
    <div className='w-full h-screen  bg-gray-800 grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-1.5 justify-items-center'>
      {  products.map((ele)=>{ 
        return <Card key={ele.id} obj={ele}/>
       })}
    </div>
  )
}

export default Home