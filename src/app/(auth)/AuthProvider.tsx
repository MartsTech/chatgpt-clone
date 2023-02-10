'use client';

import Login from '@app/(login)/Login';
import type {Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';

export interface AuthProviderProps {
  session: Session | null;
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({session, children}) => {
  return (
    <SessionProvider session={session}>
      {session ? children : <Login />}
    </SessionProvider>
  );
};

export default AuthProvider;
