import React from 'react'
import {Link} from 'react-router-dom'

function Quizaddpage() {
  return (
    <div className='bg-blue-50 h-screen'>
    <form className="max-w-sm mx-auto bg-blue-100 p-5">
    <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Name" required />
  </div>
  <div class="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject Name</label>
    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Quiz Subject' required />
  </div>
  <Link to='/Quizaddpage/QuizQuestionForm'><button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button></Link>
</form>
<p className="mt-4 text-sm text-gray-600 ">
    Note: The maximum number of questions you can add to the quiz is 10. Each question must have 4 options, and one of them should be correct.
  </p>
</div>
  )
}

export default Quizaddpage