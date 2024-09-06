import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CardPortal() {
    const Card = useSelector((state)=>state.quesslice.questions);
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-blue-200 h-screen ">
  {
    Card.length > 0 ? (<div className="w-64 h-64 bg-blue-50 shadow-lg rounded-lg flex items-center justify-center text-xl font-bold text-blue-700">
        <Link to='/Quizaddpage/QuizQuestionForm/CardPortal/QuizCard'>
        <div>Card </div> 
         <div>No of Questions {`${Card.length}`}</div>
        </Link>
      </div>
    ) : (
      <div className="w-64 h-64 bg-gray-100 shadow-lg rounded-lg flex items-center justify-center text-xl font-bold text-gray-500">
      <Link to='/Quizaddpage/QuizQuestionForm'><div>Add your Quiz</div></Link>
      </div>
    )
  }
  </div>

  )
}

export default CardPortal