import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const PlayCardPortal = () => {
  const questionier = useSelector((state)=>state.quesslice.questions);
  const [answers, setAnswers] = useState(Array(questionier.length).fill(null));
  const [score, setScore] = useState(null); 

  const handleOptionChange = (questionIndex, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedOption;
    setAnswers(newAnswers); 
  };

  const handleSubmitScore = () => {
    let correctAnswers = 0;
    questionier.forEach((ques, index) => {
      if (answers[index] === ques.correctOption) {
        correctAnswers++; 
      }
    });
    setScore(correctAnswers);
  };

  return (
    <div className="p-4">
      <div className="space-y-6">
        {questionier.map((ques, index) => (
          <ul key={index}>
            <li>
              <div className="text-lg font-semibold text-gray-800">Ques {index + 1}: {ques.questionText}</div>
            </li>
            <li>
              <div className="font-medium text-blue-700 mt-2">Options:
                <ul className='space-y-2 mt-2'>
                  {ques.options.map((option, ind) => (
                    <li key={ind} className="bg-blue-100 p-2 rounded-md">
                      <label className="inline-flex items-center">
                        <input type="radio" value={ind} checked={answers[index] === ind} 
                          onChange={() => handleOptionChange(index, ind)} 
                          className="form-radio text-blue-600"/>
                        <span className="ml-2">{option}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        ))}

        <button
          onClick={handleSubmitScore}
          className="w-full bg-green-400 text-white p-2 rounded-md hover:bg-green-700 transition duration-200 mt-4"
        >
          Submit Score
        </button>

        {score !== null && (
          <div className="mt-4 text-xl font-bold text-green-700">
            Your Score: {score}/{questionier.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayCardPortal;



