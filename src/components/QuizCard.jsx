import React from 'react';
import { useSelector} from 'react-redux';
import {Link} from 'react-router-dom'


function QuizCard() {
  const questionier = useSelector((state) => state.quesslice.questions);
  console.log(questionier);


  return (
    <div className="p-4">
      <div className="space-y-6">
        {
          questionier.map((ques, index) => (
            <ul key={index}>
              <li>
                <div className="text-lg font-semibold text-gray-800">Ques: {ques.questionText}</div>
              </li>
              <li>
                <div className="font-medium text-blue-700"> Options:
                  {
                    ques.options.map((items, ind) => (
                      <ul key={ind} className='space-y-2 mt-2'>
                        <li className="bg-blue-100 p-2 rounded-md">{items}</li>
                      </ul>
                    ))
                  }
                </div>
              </li>
              <li>
                <div className='bg-green-100 text-green-700 p-2 mt-2 rounded-md'>Ans: {ques.correctOption}</div>
              </li>
            </ul>
          ))
        }
        <div className='m-3'>
           <Link to='/Quizaddpage/QuizQuestionForm' className=' w-1/8 bg-blue-500 text-white rounded-md p-2 hover:bg-blue-700 transition duration-200'>Back to home</Link>
         </div> 
      </div>
    </div>
  );
}

export default QuizCard;
