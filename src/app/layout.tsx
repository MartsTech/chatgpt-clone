import AuthProvider from '@app/(auth)/AuthProvider';
import '@lib/styles/globals.css';
import {authOptions} from '@pages/api/auth/[...nextauth]';
import {getServerSession} from 'next-auth';

export interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({children}: RootLayoutProps) => {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head />
      <body className="bg-background text-text">
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
