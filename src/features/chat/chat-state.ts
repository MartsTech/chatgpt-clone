import {RootState} from '@lib/store/store-types';
import {createAction, createReducer} from '@reduxjs/toolkit';
import type {ChatMessageModel, ChatModel} from './chat-types';

interface ChatState {
  sidebarActive: boolean;
  list: ChatModel[];
  selected: ChatModel['id'] | null;
}

interface ChatHydrated {
  list: ChatState['list'];
  selected: ChatState['selected'];
}

const initialState: ChatState = {
  sidebarActive: false,
  list: [],
  selected: null,
};

export const chatHydrated = createAction<ChatHydrated>('chat/hydrated');

export const chatListLoaded = createAction<ChatModel[]>('chat/listLoaded');

export const chatListAdded = createAction<ChatModel>('chat/listAdded');

export const chatListRemoved = createAction<string>('chat/listRemoved');

export const chatListCleared = createAction('chat/listCleared');

export const chatListSelected = createAction<string | null>(
  'chat/listSelected',
);

export const chatMessageLoaded = createAction<{
  chatId: string;
  messages: ChatMessageModel[];
}>('chat/messageLoaded');

export const chatMessageAdded = createAction<{
  chatId: string;
  message: ChatMessageModel;
}>('chat/messageAdded');

export const chatSidebarOpened = createAction('chat/sidebarOpened');

export const chatSidebarClosed = createAction('chat/sidebarClosed');

export const chatReducer = createReducer(initialState, builder => {
  builder.addCase(chatHydrated, (state, action) => {
    state.selected = action.payload.selected;
    state.list = action.payload.list.map(curr => {
      const prev = state.list.find(x => x.id === curr.id);

      if (typeof prev === 'undefined') {
        return curr;
      }

      if (state.selected !== curr.id) {
        curr.messages = prev.messages;
      }

      return curr;
    });
  });
  builder.addCase(chatListLoaded, (state, action) => {
    state.list = [
      ...state.list,
      ...action.payload.filter(x => !state.list.find(y => x.id === y.id)),
    ];
  });
  builder.addCase(chatListAdded, (state, action) => {
    state.list = [...state.list, action.payload];
  });
  builder.addCase(chatListRemoved, (state, action) => {
    state.list = state.list.filter(chat => chat.id !== action.payload);
  });
  builder.addCase(chatListCleared, state => {
    state.list = [];
  });
  builder.addCase(chatListSelected, (state, action) => {
    state.selected = action.payload;
  });
  builder.addCase(chatSidebarOpened, state => {
    state.sidebarActive = true;
  });
  builder.addCase(chatSidebarClosed, state => {
    state.sidebarActive = false;
  });
  builder.addCase(chatMessageLoaded, (state, action) => {
    state.list = state.list.map(chat => {
      if (chat.id === action.payload.chatId) {
        chat.messages = [
          ...chat.messages,
          ...action.payload.messages.filter(
            x => !chat.messages.find(y => x.id === y.id),
          ),
        ];
      }
      return chat;
    });
  });
  builder.addCase(chatMessageAdded, (state, action) => {
    state.list = state.list.map(chat => {
      if (chat.id === action.payload.chatId) {
        chat.messages = [...chat.messages, action.payload.message];
      }
      return chat;
    });
  });
});

export const chatListSelector = (state: RootState): ChatState['list'] =>
  state.chat.list;

export const chatListSelectedSelector = (state: RootState): ChatModel | null =>
  state.chat.list.find(chat => chat.id === state.chat.selected) || null;

export const chatSidebarActiveSelector = (state: RootState): boolean =>
  state.chat.sidebarActive;
