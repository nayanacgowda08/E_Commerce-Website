// import React from 'react'
import img1 from '../../assets/hero/women.png'
import img2 from '../../assets/hero/shopping.png'
import img3 from '../../assets/hero/sale.png'
import Slider from 'react-slick'

const ImageList = [
    {
        id:1,
        img:img1,
        title:"Upto 50% off on all Men's wear",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eos iure porro blanditiis pariatur sint vel non rerum iusto adipisci."
    },
    {
        id:2,
        img:img2,
        title:"30% off on all Women's wear",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eos iure porro blanditiis pariatur sint vel non rerum iusto adipisci."
    },
    {
        id:3,
        img:img3,
        title:"70% off on all Products Sale",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eos iure porro blanditiis pariatur sint vel non rerum iusto adipisci."
    }
]



const Hero = ({handlePopUp}) => {
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 800,
        // slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: true,
        pauseOnFocus: true,
    }
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200'>
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8] '>

        </div>
        <div className="container pb-8 sm:pb-0" >
           <Slider  {...settings}>
                {ImageList.map((data,ind)=>(
                    <div key={ind}>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                <h1 data-aox="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true"
                                className='text-5xl sm:text-6xl lg:text-7xl font-bold'
                                >
                                    {data.title}
                                </h1>
                                <p data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay ="100"
                                className='text-sm'
                                  >{data.desc}</p>
                                  <div data-aos="fade-up"
                                data-aos-duration="500" 
                                 data-aos-delay ="300"
                                  ><button onClick={()=>handlePopUp()}
                                    className='bg-gradient-to-t from-primary  to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
                                  </div>
                            </div>
                             <div className='order-1 sm:order-2'>
                            <div data-aox="zoom-in"
                                data-aos-once="true"
                                 className='relative z-10'>
                                    <img src={data.img} alt="" 
                                    className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-125 object-contain mx-auto'
                                    />
                                </div>
                             </div>
                        </div>
                    </div>
                ))}
           </Slider>
        </div>
    </div>
  )
}

export default Hero