import ChatSidebar from './ChatSidebar';

export interface ChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout = ({children}: ChatLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <section className="h-screen max-w-xs overflow-y-auto bg-sidebar md:min-w-[18rem]">
        <ChatSidebar />
      </section>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default ChatLayout;
