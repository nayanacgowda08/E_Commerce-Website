import AOS from 'aos';
import React from 'react';
import 'aos/dist/aos.css';
import { useState,useEffect } from 'react';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import TopProducts from './Components/TopProducts/TopProducts';
import Subsscribe from './Components/Subscribe/Subsscribe';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
function App() {
  const [popUp, setPopUp] = useState(false);

  const handlePopUp = ()=>{
    setPopUp(!popUp);
  }

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration: 1000,
      easing: 'ease-in-sine',
      delay:100
    });
    AOS.refresh();
  },[])


  return (
    <>
   <div className='bg-gray-100 dark:bg-gray-900 dark:text-white duration-200'>
    <Navbar handlePopUp={handlePopUp} />
    <Hero handlePopUp={handlePopUp}/>
    <Products/>
    <TopProducts handlePopUp={handlePopUp}/>
    <Banner/>
    <Subsscribe/>
    <Testimonials/>
    <Footer/>
   </div>
       
    </>
  )
}

export default App
