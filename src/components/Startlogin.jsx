import React from 'react'
import {Link} from 'react-router-dom'

function Startlogin() {


  return (
    <div className='flex flex-col items-center  bg-green-50 h-screen '>
        <div className='mt-4'>
            <input className='border border-gray-300 rounded-md px-4 py-2 text-xl w-full max-w-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
             placeholder='Enter your name' required/>
            <input className='border border-gray-300 rounded-md px-4 py-2 text-xl w-full max-w-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
             placeholder='Enter quiz subject' required/>
        </div>
        <div>
        <Link to='/StartLogin/PlayCardPortal'><button type='submit' className='bg-green-200 text-xl font-bold px-4 py-2 transform transition-transform duration-200 hover:scale-105'>Start</button></Link>
        </div>
    </div>
  )
}

export default Startlogin