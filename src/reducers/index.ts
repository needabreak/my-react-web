import counter from './counterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';


const rootReducer = () =>
  combineReducers({
    router: connectRouter(history),
    counter
  });


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
