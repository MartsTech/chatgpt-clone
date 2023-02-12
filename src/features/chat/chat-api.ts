import {api} from '@lib/api';
import type {
  ChatMessageCreateArgs,
  ChatMessageModel,
  ChatModel,
} from './chat-types';

const chatApi = api.injectEndpoints({
  endpoints: builder => ({
    chatCreate: builder.mutation<ChatModel, void>({
      queryFn: async (_arg, _queryApi, _extraOptions, baseQuery) => {
        const result = await baseQuery('/chat/create');

        return {
          data: result.data as ChatModel,
        };
      },
    }),
    chatDelete: builder.mutation<string, string>({
      queryFn: async (arg, _queryApi, _extraOptions, baseQuery) => {
        const result = await baseQuery({
          url: '/chat/delete',
          params: {
            id: arg,
          },
          method: 'DELETE',
        });

        return {
          data: result.data as string,
        };
      },
    }),
    chatDeleteAll: builder.mutation<null, void>({
      queryFn: async (_arg, _queryApi, _extraOptions, baseQuery) => {
        const result = await baseQuery('/chat/deleteAll');

        return {
          data: result.data as null,
        };
      },
    }),
    chatMessageCreate: builder.mutation<
      ChatMessageModel,
      Omit<ChatMessageCreateArgs, 'userId'>
    >({
      queryFn: async (arg, _queryApi, _extraOptions, baseQuery) => {
        const result = await baseQuery({
          url: '/chat/message/create',
          body: {
            chatId: arg.chatId,
            body: arg.body,
          },
          method: 'POST',
        });

        return {
          data: result.data as ChatMessageModel,
        };
      },
    }),
  }),
});

export const {chatCreate, chatDelete, chatDeleteAll, chatMessageCreate} =
  chatApi.endpoints;
