import type {StoreMiddleware} from '@lib/store/store-types';
import type {AnyAction} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {chatCreate} from './chat-api';
import {chatHydrated, chatListAdded} from './chat-state';

export const chatMiddleware: StoreMiddleware = store => {
  return next => {
    return (action: AnyAction) => {
      const result = next(action);

      if (action.type === HYDRATE) {
        const state = store.getState().chat;

        if (state.hydrated) {
          return result;
        }

        store.dispatch(chatHydrated({list: action.payload.chat.list}));
      } else if (chatCreate.matchFulfilled(action)) {
        store.dispatch(chatListAdded(action.payload));
      }

      return result;
    };
  };
};
