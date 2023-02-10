import {authSignIn} from '@features/auth/auth-api';
import {useStoreDispatch} from '@lib/store/store-hooks';
import Image from 'next/image';
import {useCallback} from 'react';

const Login = () => {
  const dispatch = useStoreDispatch();

  const loginHandler = useCallback(() => {
    dispatch(authSignIn.initiate());
  }, [dispatch]);

  return (
    <div
      className="flex h-screen flex-col items-center justify-center
     bg-primary text-center">
      <Image src="/logo.png" width={300} height={300} alt="logo" />
      <button
        onClick={loginHandler}
        className="animate-pulse text-2xl font-bold">
        Sign In With Google
      </button>
    </div>
  );
};

export default Login;
