import {RootState} from '@lib/store/store-types';
import {createAction, createReducer} from '@reduxjs/toolkit';
import type {ChatModel} from './chat-types';

interface ChatState {
  hydrated: boolean;
  list: ChatModel[];
}

interface ChatHydrated {
  list: ChatState['list'];
}

const initialState: ChatState = {
  hydrated: false,
  list: [],
};

export const chatHydrated = createAction<ChatHydrated>('chat/hydrated');

export const chatListLoaded = createAction<ChatModel[]>('chat/listLoaded');

export const chatListAdded = createAction<ChatModel>('chat/listAdded');

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
});

export const chatListSelector = (state: RootState): ChatState['list'] =>
  state.chat.list;
