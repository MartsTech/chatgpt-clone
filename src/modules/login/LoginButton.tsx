import {authSignIn} from '@features/auth/auth-api';
import {useStoreDispatch} from '@lib/store/store-hooks';
import {useCallback} from 'react';

const LoginButton = () => {
  const dispatch = useStoreDispatch();

  const loginHandler = useCallback(() => {
    dispatch(authSignIn.initiate());
  }, [dispatch]);

  return (
    <button onClick={loginHandler} className="animate-pulse text-2xl font-bold">
      Sign In With Google
    </button>
  );
};

export default LoginButton;
