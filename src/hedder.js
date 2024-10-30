import React from 'react'
import logo from "../assets/images.png"
const hedder = () => {
  return (
    <div >

      <div className='w-full  h-12 flex justify-between bg-white'>
      <img src={logo} alt="logo"  className=' w-20 h-10 flex items-center justify-center mt-1'/>
      <h2 className='flex  text-red-500 font-bold justify-center items-center text-xl '> Student Portal <i className=' text-blue-300'>-ERP</i></h2>
      <h1 className=' text-red-500 flex justify-center items-center mr-2'>2300031074</h1>
      </div> 


      <div className='w-full  h-12 bg-red-500 flex justify-between'>
      <div className='bg-blue-600 w-28 h-full '></div>
      <h1 className='text-white flex justify-center items-center font-bold mx-5'> Login</h1>
      </div>
    </div>
  )
}

export default hedder;