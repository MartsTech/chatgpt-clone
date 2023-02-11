import {authPersistedReducer} from '@features/auth/auth-state';
import {chatMiddleware} from '@features/chat/chat-middleware';
import {chatReducer} from '@features/chat/chat-state';
import {api} from '@lib/api';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authPersistedReducer,
  chat: chatReducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(api.middleware, chatMiddleware),
  });

export const wrapper = createWrapper(makeStore);
