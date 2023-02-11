import {api} from '@lib/api';
import {signIn, signOut} from 'next-auth/react';

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    authSignIn: builder.mutation<null, void>({
      queryFn: async () => {
        await signIn('google');
        return {
          data: null,
        };
      },
    }),
    authSignOut: builder.mutation<null, void>({
      queryFn: async () => {
        await signOut();
        return {
          data: null,
        };
      },
    }),
  }),
});

export const {authSignIn, authSignOut} = authApi.endpoints;
