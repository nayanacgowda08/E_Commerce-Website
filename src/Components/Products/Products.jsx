// import React from 'react'

import image1 from '../../assets/women/women.png'
import image2 from '../../assets/women/women2.jpg'
import image3 from '../../assets/women/women3.jpg'
import image4 from '../../assets/women/women4.jpg'
import {FaStar} from 'react-icons/fa6'

const Products = () => {
  const products = [
    {
       id:1,
       image: image1,
       title: "Women Ethnic",
       rating: 4.9,
       color:"white",
       aosDelay:"0",

    },
    {
       id:2,
       image: image2,
       title: "Women Western",
       rating: 5.0,
       color:"red",
       aosDelay:"200",
    },
    {
       id:3,
       image: image3,
       title: "Googles",
       rating: 4.0,
       color:"brown",
       aosDelay:"400",
    },
    {
       id:4,
       image: image4,
       title: "Women Ethnic",
       rating:4.7,
       color:"yellow",
       aosDelay:"600",      
    },
    {
      id:5,
      image: image2,
      title: "Women Ethnic",
      rating:4.2,
      color:"black",
      aosDelay:"800",      
   }
    ]

        return (
            <div className="container">
              <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p  data-aos="fade-up" className='text-sm text-primary'
                >Top Selling Products for You</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up"
                 className='text-xs text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia reprehenderit odit.
                </p>
              </div>
              <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {products.map((data,ind)=>(
                      <div key={data.id}
                       data-aos="fade-up"
                       data-aos-delay={data.aosDelay}
                       className='space-y-3'>
                        <img src={data.image} alt="" 
                        className='h-[220px] w-[150px] object-cover rounded-md'
                        />
                        <div>
                          <h3 className='font-semibold'
                          >{data.title}</h3>
                          <p className='text-sm text-gray-600'>{data.color}</p>
                          <div className='flex items-center gap-1'>
                            <FaStar className='text-yellow-400'/> 
                            <span>{data.rating}</span>
                          </div>
                        </div>
                       </div>
                    ))}
                    <div className='flex justify-center'>
                        <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'
                        >View All Button</button>
                    </div>
                </div>
              </div>
            </div>
           
  )
}

export default Products