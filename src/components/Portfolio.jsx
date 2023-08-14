import React from 'react'
import tic from '../images/tic.jpg'
import todo from '../images/todo.jpg'
import dashboard from '../images/dashboard.jpg'
import pharmacy from '../images/pharmcy.jpg'


const Portfolio = () => {
  const data = [
    {
      id : 1 ,
      icon : pharmacy ,
      color : "shadow-black" ,
      link : "https://github.com/DawitMac/online-pharmacy"
    } ,
    {
      id : 2 ,
      icon : dashboard ,
      color : "shadow-green-500" ,
      link : "https://github.com/DawitMac/admin_dashboard"
    },
    {
      id : 3 ,
      icon : tic ,
      color : "shadow-red-500" ,
      link : "https://github.com/DawitMac/mini-graphics"
    },
    {
      id : 4 ,
      icon :  todo ,
      color : "shadow-blue-500" ,
      link : "https://github.com/DawitMac/todo-list"
    },
   
  ]
  return (
    <div name="Portfolio">
      <div  className='md:h-screen max-w-screen-lg p-4 flex flex-col mx-auto'>
        <div className='flex flex-col items-start justify-center'>
          <div className='flex flex-col items-center justify-center gap-4'>
              <h1 className='text-5xl font-semibold font-serif'>Portfolio</h1>
              <div className='flex items-center justify-center border-[3px] border-[#FF9909] w-24 mb-10'></div> 
          </div>
        </div>
        <div className=''>
        <div className='w-full grid md:grid-cols-2 py-8 px-12 md:px-0 gap-16 text-center'>
                {
                  data.map(({id , icon , color , link })=>( 
            
                    <div key={id} className={`py-2 shadow-xl  duration-500 cursor-pointer rounded-lg p-5 ${color}`}>
                      <img src={icon} alt="icon" className={`h-44 w-5/6 mx-auto hover:scale-105 duration-500`} />
                      <button className='px-3 py-2 w-2/3 rounded-lg shadow hover:scale-l05 text-xl font-mono bg-[#2F4858] text-white mt-4 hover:scale-105 duration-500'><a href={link} target="_tab">Code</a></button>
                    </div> 
                   
                  ))
                }
              </div>
            </div>
      </div>
    </div>
  )
}

export default Portfolio