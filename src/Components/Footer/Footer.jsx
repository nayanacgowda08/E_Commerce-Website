// import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import { FaMapLocation } from 'react-icons/fa6'
import { FaFacebook,
   FaInstagram,
    FaLinkedinIn,
    FaLocationArrow,
  FaMobileAlt } from 'react-icons/fa'
  import {IoCall} from 'react-icons/io5'
  const footerLinks =[
    {
      title:"Home",
      link:"/#"
    },
    {
      title:"About",
      link:"/#about"
    },
    {
      title:"Contact",
      link:"/#contact"
    },
    {
      title:"Blog",
      link:"/#blog"
    },



  ]

const Footer = () => {
  return (
    <div className='text-white bg-[#212529]'>
      <div className='container '>
          <div data-aos="zoom-in"
          className='grid md:grid-cols-3 pb-44 pt-5'
          >
              <div className='py-8 px-4 '>
                  <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1'>
                      <FiShoppingBag size="30"/> ShopMe
                  </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fuga? Soluta, voluptatum minima. Quisquam tenetur delectus beatae necessitatibus quam nesciunt ipsa hic exercitationem dolore facere!</p>
              </div>
              <div>
                <div className='py-8 px-4 '>
                  <h1 className='sm:text-left sm:text-xl text-xl font-bold text-justify mb-3'>Important Links</h1>
                  <ul className='flex flex-col gap-3'>
                      {footerLinks.map((data)=>(
                        <li key ={data.title}
                        className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                        >
                          <a href={data.link}>{data.title}</a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className='py-8 px-4 '>
                <h1 className='sm:text-left sm:text-xl text-xl font-bold text-justify mb-3'>Links</h1>
                <ul className='flex flex-col gap-3'>
                      {footerLinks.map((data)=>(
                        <li key ={data.title}
                        className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                        >
                          <a href={data.link}>{data.title}</a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className='flex items-center gap-3 mt-6 '> 
                      <a href="#" >
                      <FaInstagram className='text-3xl'/></a>
                      <a href="#" >
                      <FaLinkedinIn className='text-3xl'/></a>
                      <a href="#" >
                      <FaFacebook className='text-3xl'/></a>
                </div>
                <div className='mt-6 '>
                      <div className='flex gap-3  items-center'>
                      <FaMapLocation/>
                      <p>Bengaluru, Karnataka</p>
                      </div>
                      <div className='flex items-center gap-3 mt-3'>
                        <IoCall/>
                        <p>+91 12345 96788</p>
                      </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer