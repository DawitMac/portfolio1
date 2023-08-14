import React from 'react'
import dave2 from '../images/dave2.jpg'

const About = () => {
  return (
    <div name="About" className='md:h-screen flex items-center justify-center mb-8'>
        <div className='flex flex-col w-full md:flex-row items-center justify-around max-w-screen-lg mx-auto '>
            <img src={dave2} className='h-[700px] mx-auto w-2/3 md:w-full pb-8' />
            <div className='flex flex-col items-center gap-5 mx-auto max-w-2xl'>
              <h1 className='text-7xl font-semibold font-serif'>About</h1>
              <div className='border-[3px] border-[#FF9909] w-24 mb-10'></div>
              <p className='text-xl font-mono text-start leading-8'>As a full stack developer, I have the ability to create and manage every
                  aspect of a web application, from the front-end user interface to the back-end
                  server and database. With my skills in both client-side and server-side
                  technologies, I can develop and deploy dynamic, scalable, and responsive
                  web applications that meet the needs of businesses and users alike. Whether
                  it's building a beautiful and intuitive user interface or configuring a complex
                  server infrastructure, I have the expertise to bring a project to life from start to finish.</p>
            </div>
        </div>
    </div>
  )
}

export default About