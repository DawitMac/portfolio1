import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineCancel} from 'react-icons/md'

const Navbar = () => {
  const [ status , setStatus ] = useState("")
  const [ open , setOpen ] = useState(false)
  const handleSetActive = (to) => {
   setStatus(to)
   setOpen(false)
  }

  return (
        <div>
    <div className='fixed z-50 bg-transparent flex items-center md:justify-around justify-between md:mx-0 px-12 w-screen h-24 bg-white'>
        <h1 className='text-5xl font-semibold font-signiture text-[#FF9909]'>Dave</h1>
        <ul className={`md:static absolute z-[-1] md:z-auto md:opacity-100  transition-all duration-500 ease-in md:text-black text-white ${open ? 'top-[80px] opacity-100' : 'opacity-0 top-[-600px]'}  bg-[#2F4858] md:bg-white h-[480px] md:pl-0 pl-7 left-0 w-full md:w-auto md:h-auto flex md:flex-row flex-col  gap-20 md:text-2xl text-4xl md:pt-0 pt-7 font-normal font-josefin`}>
        <li className={`cursor-pointer hover:scale-105 duration-500 ${status === "Home" ? 'text-[#FF9909] md:border-b md:border-[#FF9909]': 'text-black'}`}>
              <Link activeClass="active"
      to="Home"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      delay={1000}
      isDynamic={true}
      onSetActive={handleSetActive}
      ignoreCancelEvents={false}
      spyThrottle={500}>
              Home
              </Link>
              </li>
      
              <li className={`cursor-pointer hover:scale-105 duration-500 ${status === "About" ? 'text-[#FF9909] md:border-b md:border-[#FF9909]': 'text-black'}`}>
              <Link activeClass="active"
      to="About"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      delay={1000}
      isDynamic={true}
      onSetActive={handleSetActive}
      ignoreCancelEvents={false}
      spyThrottle={500}>
              About
              </Link>
              </li>
              <li className={`cursor-pointer hover:scale-105 duration-500 ${status === "Services" ? 'text-[#FF9909] md:border-b md:border-[#FF9909]': 'text-black'}`}>
              <Link activeClass="active"
      to="Services"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      delay={1000}
      isDynamic={true}
      onSetActive={handleSetActive}
      ignoreCancelEvents={false}
      spyThrottle={500}>
              Services
              </Link>
              </li>
              <li className={`cursor-pointer hover:scale-105 duration-500 ${status === "Portfolio" ? 'text-[#FF9909] md:border-b md:border-[#FF9909]': 'text-black'}`}>
              <Link activeClass="active"
      to="Portfolio"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      delay={1000}
      isDynamic={true}
      onSetActive={handleSetActive}
      ignoreCancelEvents={false}
      spyThrottle={500}>
              Portfolio
              </Link>
              </li>
             
        </ul>
        <div onClick={()=> setOpen(!open)} className='md:hidden flex hover:drop-shadow-lg hover:rounded-full p-3 hover:rotate-90 hover:scale-105 duration-300 cursor-pointer '>
          {
                open ? <MdOutlineCancel size={35}  /> : <AiOutlineMenu size={35} />  
          }
        </div>
    </div>
    
    </div>
  )
}

export default Navbar