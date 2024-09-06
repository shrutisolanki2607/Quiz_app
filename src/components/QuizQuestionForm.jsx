import React, {useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addquestions } from '../features/Quiz/QuestionSlice';
import { Link } from 'react-router-dom';
import {v4 as uuidv4 } from 'uuid';

const QuizQuestionForm = () => {
  const dispatch = useDispatch([]);
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState(null);
  const questions = useSelector((state) => state.quesslice.questions)

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {

    const newQuestion = {
      id : uuidv4(),
      questionText,
      options,
      correctOption,
    };
    
    dispatch(addquestions(newQuestion));
  
    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectOption(null);
    
  };


  

  return (
    <div className='bg-blue-100'>
    <div className="max-w-md mx-auto p-6 bg-blue-50 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Quiz Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Question
          </label>
          <input type="text" value={questionText} onChange={(e) => setQuestionText(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your question" required />
        </div>
        <div className="mb-4">
          {options.map((option, index) => (
            <div key={index} className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Option {index + 1}</label>
              <input type="text" value={option} onChange={(e) => handleOptionChange(index, e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder={`Enter option ${index + 1}`}
                required
              />
              <label className="inline-flex items-center mt-2">
                <input type="radio" value={index} checked={correctOption === index}
                  onChange={() => setCorrectOption(index)}
                  className="form-radio h-4 w-4 text-blue-600" required
                />
                <span className="ml-2 text-sm text-gray-700"> Mark as correct </span>
              </label>
            </div>
          ))}
        </div>
       { 
         questions.length === 10  ?
         (<Link to='/Quizaddpage/QuizQuestionForm/CardPortal'>
          <button type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200">
              Submit 
            </button> 
            </Link> )
         :
        (<button type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200">
          Add Question
        </button>)
       } 
       <Link to='/Quizaddpage/QuizQuestionForm/CardPortal'>
          <button type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200 my-2">
              Submit  before 10
            </button> 
            </Link> 
      </form>
       <p className="mt-4 text-sm text-gray-600">
        {questions.length}/10 questions added to the quiz. Each question must have 4 options, with one correct answer.
      </p>  
    </div>
    </div>
  );
};

export default QuizQuestionForm;
