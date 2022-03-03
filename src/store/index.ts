import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reducer from '../reducers';
import {persistReducer, persistStore} from 'redux-persist';
import { routerMiddleware } from 'connected-react-router'
import storage from 'redux-persist/lib/storage';
import thunk from  'redux-thunk';
import history from '../utils/history';

const persistConfig = {
  key: "root",
  storage,
}

const middleware = [
  thunk,
  routerMiddleware(history)
]

const persistedReducer = persistReducer(persistConfig, reducer());

export const store = configureStore({
  reducer : persistedReducer,
  middleware
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;