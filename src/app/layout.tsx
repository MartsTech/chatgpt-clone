import AuthProvider from '@features/auth/AuthProvider';
import StoreProvider from '@lib/store/StoreProvider';
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
        <StoreProvider>
          <AuthProvider session={session}>{children}</AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
