import {signIn} from 'next-auth/react';
import Image from 'next/image';

const Login = () => {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center
     bg-primary text-center">
      <Image src="/logo.png" width={300} height={300} alt="logo" />
      <button
        onClick={() => signIn('google')}
        className="animate-pulse text-2xl font-bold">
        Sign In With Google
      </button>
    </div>
  );
};

export default Login;
