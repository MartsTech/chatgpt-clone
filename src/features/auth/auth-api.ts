import {api} from '@lib/api';
import {signIn, signOut} from 'next-auth/react';

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    authSignIn: builder.mutation<void, void>({
      queryFn: async () => {
        await signIn('google');
        return {
          data: undefined,
        };
      },
    }),
    authSignOut: builder.mutation<void, void>({
      queryFn: async () => {
        await signOut();
        return {
          data: undefined,
        };
      },
    }),
  }),
});

export const {authSignIn, authSignOut} = authApi.endpoints;
