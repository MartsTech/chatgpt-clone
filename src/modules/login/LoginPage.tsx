import Image from 'next/image';
import LoginButton from './LoginButton';

const LoginPage = () => {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center
     bg-primary text-center">
      <Image src="/logo.png" width={300} height={300} alt="logo" />
      <LoginButton />
    </div>
  );
};

export default LoginPage;
