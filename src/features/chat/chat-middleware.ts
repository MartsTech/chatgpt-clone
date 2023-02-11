import {authSignOut} from '@features/auth/auth-api';
import type {StoreMiddleware} from '@lib/store/store-types';
import type {AnyAction} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {chatCreate, chatDelete, chatDeleteAll} from './chat-api';
import {
  chatHydrated,
  chatListAdded,
  chatListCleared,
  chatListRemoved,
  chatListSelected,
  chatSidebarClosed,
} from './chat-state';

export const chatMiddleware: StoreMiddleware = store => {
  return next => {
    return (action: AnyAction) => {
      const result = next(action);

      if (
        (chatListAdded.match(action) ||
          chatListRemoved.match(action) ||
          chatListCleared.match(action) ||
          chatListSelected.match(action) ||
          authSignOut.matchFulfilled(action)) &&
        store.getState().chat.sidebarActive
      ) {
        store.dispatch(chatSidebarClosed());
      }

      if (action.type === HYDRATE && !store.getState().chat.hydrated) {
        store.dispatch(chatHydrated({list: action.payload.chat.list}));
      } else if (chatCreate.matchFulfilled(action)) {
        store.dispatch(chatListAdded(action.payload));
      } else if (chatDelete.matchFulfilled(action)) {
        store.dispatch(chatListRemoved(action.payload));
      } else if (chatDeleteAll.matchFulfilled(action)) {
        store.dispatch(chatListCleared());
      }

      return result;
    };
  };
};
