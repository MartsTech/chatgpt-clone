import ChatCreate from './ChatCreate';
import ChatMenu from './ChatMenu';

const ChatHeader = () => {
  return (
    <div className="flex h-12 w-full items-center justify-between bg-sidebar">
      <ChatMenu />
      <h1 className="text-md text-center text-gray-300">New chat</h1>
      <ChatCreate icon />
    </div>
  );
};

export default ChatHeader;
