// import React from 'react'
import img1 from '../../assets/shirt/shirt.png'
import img2 from '../../assets/shirt/shirt2.png'
import img3 from '../../assets/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa6'

const products = [
    {
        id:1,
        img:img1,
        title:"Casual Wear",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum non justo non ullamcorper.",
     
    },
    {
        id:2,
        img:img2,
        title:"Printed Shirts",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum non justo non ullamcorper.",
       
    },
    {
        id:3,
        img:img3,
        title:"Women Shirt",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum non justo non ullamcorper.",
        
    }
]
const TopProducts = ({handlePopUp}) => {
   
  return (
    <div className='conatiner'>
        <div className='mt-10 mb-24 text-center'>
            <p data-aos="fade-up"
            className='text-sm text-primary'> Top Rated Products for you</p>
            <h1  data-aos="fade-up"
            className='text-3xl font-bold'
            >Best Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam cumque, expedita molestiae ducimus iure magnam atque sint sapiente delectus. Vel omnis perferendis accusantium impedit voluptate exercitationem temporibus illo nisi, recusandae, voluptas deserunt.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {products.map((data)=>(
                    <div key={data.id} className='mt-5 rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                        <div>
                            <img src={data.img} alt="" 
                            className='max-w-[140px] block mx-auto transform group-hover:scale-105 duration-300 drop-shadow-md'
                            />
                        </div>
                        <div className='w-full flex items-center justify-center gap-1'>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                        </div>
                        <h1 className='text-xl font-bold '>{data.title}</h1>
                        <p className=''>{data.desc}</p>
                        <button className='bg-primary hover:scale-105 duration-300 text-white py-1  px-4 rounded-full group-hover:bg-white group-hover:text-primary' onClick={handlePopUp}>Order Now!</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TopProducts