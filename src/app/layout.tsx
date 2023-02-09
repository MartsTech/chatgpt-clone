import AuthProvider from '@app/(auth)/AuthProvider';
import Sidebar from '@app/(sidebar)/Sidebar';
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
      <body>
        <AuthProvider session={session}>
          <div className="flex min-h-screen">
            <section className="h-screen max-w-xs overflow-y-auto bg-sidebar md:min-w-[20rem]">
              <Sidebar />
            </section>
            <main className="flex-1 bg-background text-text">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;

export const metadata = {
  title: 'ChatGPT Clone',
  description: 'ChatGPT Clone created with Next.js',
};
