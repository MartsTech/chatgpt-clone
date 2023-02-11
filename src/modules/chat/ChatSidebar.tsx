import ChatClear from './ChatClear';
import ChatCreate from './ChatCreate';
import ChatLinks from './ChatLinks';
import ChatLogout from './ChatLogout';

const ChatSidebar = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex-1 p-2">
        <ChatCreate />
        <ChatLinks />
      </div>
      <div className="w-full border-t border-gray-700">
        <ChatClear />
        <ChatLogout />
      </div>
    </div>
  );
};

export default ChatSidebar;
