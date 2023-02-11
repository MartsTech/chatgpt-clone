import {authUserSelector} from '@features/auth/auth-state';
import {api} from '@lib/api';
import type {RootState} from '@lib/store/store-types';
import type {ChatModel} from './chat-types';

const chatApi = api.injectEndpoints({
  endpoints: builder => ({
    chatCreate: builder.mutation<ChatModel, void>({
      queryFn: async (_agr, queryApi, _extraOptions, baseQuery) => {
        const state = queryApi.getState() as RootState;

        const user = authUserSelector(state);

        if (!user) {
          throw new Error('User is not authenticated');
        }

        const result = await baseQuery('/chat/create');

        return {
          data: result.data as ChatModel,
        };
      },
    }),
    chatGetAll: builder.mutation<ChatModel[], void>({
      queryFn: async (_agr, queryApi, _extraOptions, baseQuery) => {
        const state = queryApi.getState() as RootState;

        const user = authUserSelector(state);

        if (!user) {
          throw new Error('User is not authenticated');
        }

        const result = await baseQuery('/chat/getAll');

        return {
          data: result.data as ChatModel[],
        };
      },
    }),
  }),
});

export const {chatCreate, chatGetAll} = chatApi.endpoints;
