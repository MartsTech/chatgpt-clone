'use client';

import {useStoreDispatch} from '@lib/store/store-hooks';
import type {Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import {useEffect} from 'react';
import {authSessionAdded, authSessionRemoved} from './auth-state';

export interface AuthProviderProps {
  session: Session | null;
  children: React.ReactNode;
  login: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({
  session,
  children,
  login,
}) => {
  const dispatch = useStoreDispatch();

  useEffect(() => {
    if (session) {
      dispatch(
        authSessionAdded({
          user: {
            id: session.user?.id as string,
            name: session.user?.name as string,
            email: session.user?.email as string,
            image: session.user?.image as string,
          },
          expires: session.expires,
        }),
      );
    } else {
      dispatch(authSessionRemoved());
    }
  }, [session, dispatch]);

  return (
    <SessionProvider session={session}>
      {session ? children : login}
    </SessionProvider>
  );
};

export default AuthProvider;
