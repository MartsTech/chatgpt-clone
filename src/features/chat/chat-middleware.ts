import type {StoreMiddleware} from '@lib/store/store-types';
import type {AnyAction} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {chatCreate, chatDelete} from './chat-api';
import {chatHydrated, chatListAdded, chatListRemoved} from './chat-state';

export const chatMiddleware: StoreMiddleware = store => {
  return next => {
    return (action: AnyAction) => {
      const result = next(action);

      if (action.type === HYDRATE) {
        const state = store.getState().chat;

        if (!state.hydrated) {
          store.dispatch(chatHydrated({list: action.payload.chat.list}));
        }
      } else if (chatCreate.matchFulfilled(action)) {
        store.dispatch(chatListAdded(action.payload));
      } else if (chatDelete.matchFulfilled(action)) {
        store.dispatch(chatListRemoved(action.payload));
      }

      return result;
    };
  };
};
