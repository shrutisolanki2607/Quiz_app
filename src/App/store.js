import {configureStore} from '@reduxjs/toolkit';
import questionSlice  from '../features/Quiz/QuestionSlice';

export const store = configureStore({
    reducer : {
        quesslice : questionSlice,
    }

})