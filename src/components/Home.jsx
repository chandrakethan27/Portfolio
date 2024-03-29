import { useState, useEffect } from 'react';
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profile from '../assets/final.png'

function Home() {
    // const [theme, setTheme] = useState("light")
    // let handleTheme = ()=>{
    //   setTheme(theme === 'dark' ? "light":"dark")
    // }
    // useEffect(()=>{
    //   if (theme === "dark"){
    //     document.documentElement.classList.add("dark");
    //   }else{
    //     document.documentElement.classList.remove("dark");
    //   }
    // }, [theme])
    const handleButtonClick = () => {
        // Replace 'your-section-id' with the ID of the section you want to scroll to
        const targetSection = document.getElementById('work');
    
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
  
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] '>
      {/* Container */}
      <div className='flex h-screen w-screeen'>
      <div className='mx-auto px-8 flex flex-col justify-center mr-4'>
        <p className='text-purple-500 text-2xl '>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>
          Chandrakethan
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[750px]'>
            I'm a MERN stack web developer, crafting seamless full-stack web experiences. 
            Passionate about innovative solutions and eager for exciting projects.
        </p>
        <div>
          <button className='border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200' onClick={handleButtonClick}>
            View Work
          </button>
        </div>
        </div>
        <div className=''>
            <img src={profile} alt="" className='hidden lg:block h-[400px] mt-56 mr-20  border-white border-2 rounded-full '/>
        </div>
      </div>
    </div>
  )
}

export default Home