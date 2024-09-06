// import { createSlice, current } from "@reduxjs/toolkit";

// export const QuestionSlice = createSlice({
//   name: 'quesslice',
//   initialState: {
//     questions:[],  // JSON.parse(localStorage.getItem('questions'))||
//   },
//   reducers: {
//     addquestions: (state, action) => {
//       state.questions.push(action.payload);
//       const item = JSON.stringify(current(state.questions));
//       localStorage.setItem('questions', item);  
//     },
//   },
// });

// export const { addquestions } = QuestionSlice.actions;
// export default QuestionSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

export const QuestionSlice = createSlice({
  name: 'quesslice',
  initialState: {
    questions: JSON.parse(localStorage.getItem('questions')) || [],  
  },
  reducers: {
    addquestions: (state, action) => {
      state.questions.push(action.payload);
      localStorage.setItem('questions', JSON.stringify(state.questions));
    },
  },
});

export const { addquestions } = QuestionSlice.actions;
export default QuestionSlice.reducer;
