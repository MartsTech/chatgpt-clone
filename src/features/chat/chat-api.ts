import {api} from '@lib/api';
import type {ChatModel} from './chat-types';

const chatApi = api.injectEndpoints({
  endpoints: builder => ({
    chatCreate: builder.mutation<ChatModel, void>({
      queryFn: async (_agr, _queryApi, _extraOptions, baseQuery) => {
        const result = await baseQuery('/chat/create');

        return {
          data: result.data as ChatModel,
        };
      },
    }),
    chatGetAll: builder.query<ChatModel[], void>({
      queryFn: async (_agr, _queryApi, _extraOptions, baseQuery) => {
        const result = await baseQuery('/chat/getAll');

        return {
          data: result.data as ChatModel[],
        };
      },
    }),
    chatDelete: builder.mutation<string, string>({
      queryFn: async (agr, _queryApi, _extraOptions, baseQuery) => {
        const result = await baseQuery({
          url: '/chat/delete',
          params: {
            id: agr,
          },
        });

        return {
          data: result.data as string,
        };
      },
    }),
  }),
});

export const {chatCreate, chatGetAll, chatDelete} = chatApi.endpoints;
