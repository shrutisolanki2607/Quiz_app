import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from './App/store'
import {Provider} from 'react-redux';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Main';
import Startlogin from './components/Startlogin';
import Quizaddpage from './components/Quizaddpage';
import QuizQuestionForm from './components/QuizQuestionForm';
import QuizCard from './components/QuizCard';
import CardPortal from './components/CardPortal';
import PlayCardPortal from './components/PlayCardPortal';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
        {
        path : '/',
        element : <Main/>,
        },
        {
          path : '/StartLogin',
          element : <Startlogin/>
        },
        {
           path : '/StartLogin/PlayCardPortal',
           element : <PlayCardPortal/>
        },
        {
          path : '/Quizaddpage',
          element : <Quizaddpage/>,
        },
        {
          path : '/Quizaddpage/QuizQuestionForm',
          element : <QuizQuestionForm/>
        },
        {
          path : '/Quizaddpage/QuizQuestionForm/CardPortal',
          element : <CardPortal/>
        },
        {
          path : '/Quizaddpage/QuizQuestionForm/CardPortal/QuizCard',
          element :<QuizCard/>
        }
      ]
    },
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
