import type {RootState} from '@lib/store/store-types';
import {createAction, createReducer} from '@reduxjs/toolkit';
import type {AuthSession} from './auth-types';

interface AuthState {
  session: AuthSession | null;
}

const initialState: AuthState = {
  session: null,
};

export const authSessionAdded = createAction<AuthSession>('auth/sessionAdded');

export const authSessionRemoved = createAction('auth/sessionRemoved');

export const authReducer = createReducer(initialState, builder => {
  builder.addCase(authSessionAdded, (state, action) => {
    state.session = action.payload;
  });
  builder.addCase(authSessionRemoved, state => {
    state.session = null;
  });
});

export const authUserImageSelector = (state: RootState): string | null =>
  state.auth.session?.user.image || null;
