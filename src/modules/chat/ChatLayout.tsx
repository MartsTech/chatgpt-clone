import ChatHeader from './ChatHeader';
import ChatSidebar from './ChatSidebar';

export interface ChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout = ({children}: ChatLayoutProps) => {
  return (
    <div className="relative flex h-screen flex-1 flex-col">
      <header className="sticky top-0 z-40 md:hidden">
        <ChatHeader />
      </header>
      <div className="flex h-full flex-1">
        <section
          className="w-0 -translate-x-80 transform overflow-y-auto bg-sidebar
          transition-all duration-200 ease-in-out md:block md:w-[16rem] md:translate-x-0">
          <ChatSidebar />
        </section>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default ChatLayout;
