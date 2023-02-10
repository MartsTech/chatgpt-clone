import {authReducer} from '@features/auth/auth-state';
import {api} from '@lib/api';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware, logger),
});
