import React from 'react'
import {Link} from 'react-router-dom'

function Main() {
  return (
    <div className='bg-blue-300 max-w-full h-screen '>
      <div className='bg-blue max-w-[20%] item-center font-bold text-5xl mx-auto ' >
          <h1>Quiz App</h1>
      </div>
        
        <div className='flex justify-center space-x-4 my-20'>
          <Link to='/StartLogin'> <button type='submit' className='bg-blue-800 text-white text-xl px-4 py-2 transform transition-transform duration-200 hover:scale-105'>Start</button> </Link>
          <Link to='/Quizaddpage'><button type='submit' className='bg-green-200 text-xl px-4 py-2 transform transition-transform duration-200 hover:scale-105'>Add</button></Link>
        </div>
    </div>
   
  )
}

export default Main