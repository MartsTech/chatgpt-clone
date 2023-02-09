import '@lib/styles/globals.css';
import Sidebar from './(sidebar)/Sidebar';

export interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <head />
      <body className="flex min-h-screen">
        <section className="h-screen max-w-xs overflow-y-auto bg-sidebar md:min-w-[20rem]">
          <Sidebar />
        </section>
        <main className="flex-1 bg-background text-text">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

export const metadata = {
  title: 'ChatGPT Clone',
  description: 'ChatGPT Clone created with Next.js',
};
