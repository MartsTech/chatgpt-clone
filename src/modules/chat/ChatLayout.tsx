import ChatSidebar from './ChatSidebar';

export interface ChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout = ({children}: ChatLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <section className="h-screen w-[16rem] overflow-y-auto bg-sidebar">
        <ChatSidebar />
      </section>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default ChatLayout;
