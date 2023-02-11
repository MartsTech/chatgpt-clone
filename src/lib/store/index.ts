import {authPersistedReducer} from '@features/auth/auth-state';
import {api} from '@lib/api';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authPersistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware, logger),
});

export const persistor = persistStore(store);
