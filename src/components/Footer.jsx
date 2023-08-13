import React from 'react'
import github from '../images/github.png'
import telegram from '../images/telegram.png'
import twitter from '../images/twitter.png'
import phone from '../images/telephone.png'

const Footer = () => {
  return (
    <div className='flex flex-col text-center items-center bg-gray-100 p-20 gap-10 mt-10'>
       <h1 className='text-7xl font-bold text-[#FF9909]'>Dawit</h1>
        <p className='text-2xl font-light'>+2519-87-86-31-16 | mekonendawit5@gmail.com</p>
        <div className='flex items-center justify-center gap-20'>
          <a href='https://t.me/DawitMac' target="_tab" className='h-20 w-20 rounded-full p-3 bg-gray-300 hover:scale-110 duration-500'>
            <img src={telegram} alt='address' />
          </a>
          <a href='https://twitter.com/DawitMac' target="_tab"  className='h-20 w-20 rounded-full p-3 bg-gray-300 hover:scale-110 duration-500'>
            <img src={twitter} alt='address' />
          </a>
          <a href='https://github.com/DawitMac' target="_tab"  className='h-20 w-20 rounded-full p-3 bg-gray-300 hover:scale-110 duration-500'>
            <img src={github} alt='address' />
          </a>
          <a href='tel:+251987863116' target="_tab"  className='h-20 w-20 rounded-full p-3 bg-gray-300 hover:scale-110 duration-500'>
            <img src={phone} alt='address' />
          </a>
        </div>
    </div>
  )
}

export default Footer