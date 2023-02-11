import {RootState} from '@lib/store/store-types';
import {createAction, createReducer} from '@reduxjs/toolkit';
import type {ChatModel} from './chat-types';

interface ChatState {
  hydrated: boolean;
  sidebarActive: boolean;
  list: ChatModel[];
  selected: ChatModel['id'] | null;
}

interface ChatHydrated {
  list: ChatState['list'];
}

const initialState: ChatState = {
  hydrated: false,
  sidebarActive: false,
  list: [],
  selected: null,
};

export const chatHydrated = createAction<ChatHydrated>('chat/hydrated');

export const chatListLoaded = createAction<ChatModel[]>('chat/listLoaded');

export const chatListAdded = createAction<ChatModel>('chat/listAdded');

export const chatListRemoved = createAction<string>('chat/listRemoved');

export const chatListCleared = createAction('chat/listCleared');

export const chatListSelected = createAction<string>('chat/listSelected');

export const chatSidebarOpened = createAction('chat/sidebarOpened');

export const chatSidebarClosed = createAction('chat/sidebarClosed');

export const chatReducer = createReducer(initialState, builder => {
  builder.addCase(chatHydrated, (state, action) => {
    state.hydrated = true;
    state.list = action.payload.list;
  });
  builder.addCase(chatListLoaded, (state, action) => {
    state.list = action.payload;
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
  builder.addCase(chatListSelected, (state, action) => {});
  builder.addCase(chatSidebarOpened, state => {
    state.sidebarActive = true;
  });
  builder.addCase(chatSidebarClosed, state => {
    state.sidebarActive = false;
  });
});

export const chatListSelector = (state: RootState): ChatState['list'] =>
  state.chat.list;

export const chatListSelectedSelector = (state: RootState): ChatModel | null =>
  state.chat.list.find(chat => chat.id === state.chat.selected) || null;

export const chatSidebarActiveSelector = (state: RootState): boolean =>
  state.chat.sidebarActive;
