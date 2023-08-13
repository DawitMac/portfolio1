import React from 'react'
import github from '../images/github.png'
import html from '../images/html.png'
import css from '../images/css-3.png'
import react from '../images/physics.png'
import graphQL from '../images/GraphQL_Logo.svg.webp'
import js from '../images/js.png'
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';

const Services = () => {
  const data = [
    {
      id : 1 ,
      name : "HTML" ,
      icon : html ,
    } ,
    {
      id : 2 ,
      name : "CSS" ,
      icon : css
    },
    {
      id : 3 ,
      name : "REACT" ,
      icon : react ,
    },
    {
      id : 4 ,
      name : "GITHUB" ,
      icon :  github
    },
    {
      id : 5 ,
      name : "JAVASCRIPT" ,
      icon : js
    },
    {
      id : 6 ,
      name : "GraphQL" ,
      icon : graphQL
    }
  ]
  return (
    <div name="Services" >
      <div  className='md:h-screen max-w-screen-lg p-4 flex flex-col mx-auto'>
      <Slide left>
        <div className='flex flex-col items-start justify-center'>
          <div className='flex flex-col items-center justify-center gap-4'>
             <h1 className='text-5xl font-semibold font-serif'>Services</h1>
              <div className='border-[3px] border-[#FF9909] w-24 mb-3'></div>
          </div>
              <p className='text-2xl font-sans mb-8'>
                This are the technologies i have working with
              </p>
        </div>
        </Slide>
        <Roll bottom>
              <div className='w-full grid grid-cols-2 md:grid-cols-3 py-8 px-12 gap-16 text-center'>
                {
                  data.map(({id , name , icon })=>(
                    
                      <div key={id} className='py-2 shadow-xl hover:scale-105 duration-500 cursor-pointer rounded-lg'>
                      <img src={icon} alt="icon" className='w-40 mx-auto'/>
                      <p className='text-xl font-mono mt-4'>{name}</p>
                    </div> 
                  ))
                }
              </div>
              </Roll>
      </div>
    </div>
  )
}

export default Services