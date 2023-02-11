import type {RootState} from '@lib/store/store-types';
import {createAction, createReducer} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type {AuthSession} from './auth-types';

interface AuthState {
  session: AuthSession | null;
}

const initialState: AuthState = {
  session: null,
};

export const authSessionAdded = createAction<AuthSession>('auth/sessionAdded');

export const authSessionRemoved = createAction('auth/sessionRemoved');

const authReducer = createReducer(initialState, builder => {
  builder.addCase(authSessionAdded, (state, action) => {
    state.session = action.payload;
  });
  builder.addCase(authSessionRemoved, state => {
    state.session = null;
  });
});

export const authPersistedReducer = persistReducer(
  {
    key: 'auth',
    storage,
    whitelist: ['session'],
  },
  authReducer,
);

export const authUserSelector = (
  state: RootState,
): AuthSession['user'] | null => state.auth.session?.user || null;
