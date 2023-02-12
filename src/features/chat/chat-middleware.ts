import {authSignOut} from '@features/auth/auth-api';
import type {StoreMiddleware} from '@lib/store/store-types';
import type {AnyAction} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {
  chatCreate,
  chatDelete,
  chatDeleteAll,
  chatMessageCreate,
  chatMessageCreateCompletion,
} from './chat-api';
import {
  chatHydrated,
  chatListAdded,
  chatListCleared,
  chatListRemoved,
  chatListSelected,
  chatMessageAdded,
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

      if (action.type === HYDRATE) {
        store.dispatch(
          chatHydrated({
            list: action.payload.chat.list,
            selected: action.payload.chat.selected,
          }),
        );
      } else if (chatCreate.matchFulfilled(action)) {
        store.dispatch(chatListAdded(action.payload));
        store.dispatch(chatListSelected(action.payload.id));
      } else if (chatDelete.matchFulfilled(action)) {
        store.dispatch(chatListRemoved(action.payload));
        store.dispatch(chatListSelected(null));
      } else if (chatDeleteAll.matchFulfilled(action)) {
        store.dispatch(chatListCleared());
        store.dispatch(chatListSelected(null));
      } else if (chatMessageCreate.matchFulfilled(action)) {
        store.dispatch(
          chatMessageAdded({
            chatId: action.meta.arg.originalArgs.chatId,
            message: action.payload,
          }),
        );
        store.dispatch(
          chatMessageCreateCompletion.initiate({
            chatId: action.meta.arg.originalArgs.chatId,
            prompt: action.payload.body,
            model: 'text-davinci-003',
          }),
        );
      } else if (chatMessageCreateCompletion.matchFulfilled(action)) {
        store.dispatch(
          chatMessageAdded({
            chatId: action.meta.arg.originalArgs.chatId,
            message: action.payload,
          }),
        );
      }

      return result;
    };
  };
};
