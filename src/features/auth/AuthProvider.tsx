import {useStoreDispatch, useStoreSelector} from '@lib/store/store-hooks';
import type {Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import {useEffect, useMemo} from 'react';
import {
  authSessionAdded,
  authSessionRemoved,
  authUserSelector,
} from './auth-state';

export interface AuthProviderProps {
  session: Session | null;
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({session, children}) => {
  const user = useStoreSelector(authUserSelector);

  const dispatch = useStoreDispatch();

  const shouldAddSession = useMemo(() => {
    if (!session || !session.user) {
      return false;
    }
    if (session.user.id === user?.id) {
      return false;
    }
    return true;
  }, [session, user?.id]);

  const shouldRemoveSession = useMemo(() => {
    if (!session && user) {
      return true;
    }
    return false;
  }, [session, user]);

  useEffect(() => {
    if (shouldAddSession) {
      dispatch(
        authSessionAdded({
          user: {
            id: session?.user?.id as string,
            name: session?.user?.name as string,
            email: session?.user?.email as string,
            image: session?.user?.image as string,
          },
          expires: session?.expires as string,
        }),
      );
    } else if (shouldRemoveSession) {
      dispatch(authSessionRemoved());
    }
  }, [shouldAddSession, shouldRemoveSession, dispatch]);

  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
