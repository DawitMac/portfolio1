import React from 'react'
import dave2 from '../images/david.png'
import github from '../images/github.png'
import telegram from '../images/telegram.png'
import gmail from '../images/gmail.png'
import cv from '../images/curriculum-vitae.png'
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import {FiArrowRight} from 'react-icons/fi'
import { Link } from 'react-scroll'


const Hero = () => {
  const data = [
    {
      name : "Github" ,
      icon : github ,
      link : "https://github.com/DawitMac" ,
      style : "rounded-tr-lg"
    } ,
    {
      name : "Telegram" ,
      icon : telegram ,
      link : "https://t.me/DawitMac"
    } ,
    {
      name : "Gmail" ,
      icon : gmail ,
      link : "mailto:mekonendawit5@gmail.com"
    },
    {
      name : "Resume" ,
      icon : cv ,
      link : '/CV.pdf',
      style : "rounded-br-lg" ,
      download : true
    }
  ]
  return (
    <div name="Home" className='md:h-screen'>
    <div  className='flex h-full items-center justify-center mb-8 pt-40 md:mt-0'>
      <div className='flex flex-col md:flex-row h-full max-w-screen-lg leading-8 font-serif items-center justify-center  gap-10'>
      <Rotate bottom left>
        <div className='flex flex-col md:w-1/2 justify-center h-full min-w-fit'>
          <p className='text-xl font-semibold ml-2 text-[#FF9909]'>Hello</p>
          <span className='text-4xl sm:text-7xl font-bold'>
            I'm <span className='text-[#FF9909]'>Dawit</span>
            <p className='text-[#FF9909] mb-3'>Mekonen</p>
          </span>
          <p className='text-2xl mb-6 max-w-5xl'>
           A Freelance Website Designer and Full Stack <br /> Developer
         </p>
         <Link activeClass="active"
      to="Portfolio"
      spy={false}
      smooth={true}
      hashSpy={false}
      offset={0}
      duration={500}
      delay={200}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}>
              <button className='flex items-center justify-center gap-3 px-4 py-2 bg-gradient-to-tr from-[#8E5B9A] to-[#4A5883] rounded-lg text-white text-xl font-semibold shadow group'>
          Portfolio <span className='group-hover:rotate-90 duration-500'><FiArrowRight size={23} /></span>
          </button>
              </Link>
         
      </div>
      </Rotate>
      <div>
      <Bounce top><img src={dave2} className='h-[600px] mx-auto w-auto md:w-full' /></Bounce>
      </div>
      </div>
    
    </div>
     <div className='h-full hidden md:flex items-center justify-start w-1/6'>
     <div className='absolute top-[35%] ml-0 flex flex-col items-start'>
      {
        data.map((item , index) => (
          <a key={index} href={item.link} download={item.download} target='_tab' rel="noreferrer" className={"flex items-center justify-between px-4 w-44 h-[64px] bg-[#2F4858] text-white ml-[-100px] hover:ml-[0px] duration-300 shadow-lg" + " " + item.style}>
            <p className='font-semibold font-mono text-md'>{item.name}</p>
            <img src={item.icon} alt='logo' className='h-12 w-12 p-2 bg-white rounded-full'/>
          </a>
        ))
      }
     </div>
      </div>
      </div>
  )
}

export default Hero

