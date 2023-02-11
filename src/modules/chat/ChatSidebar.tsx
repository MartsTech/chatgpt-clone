import ChatClear from './ChatClear';
import ChatCreate from './ChatCreate';
import ChatLinks from './ChatLinks';
import ChatLogout from './ChatLogout';

const ChatSidebar = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 p-2">
        <div className="">
          <ChatCreate />
          <div className=""></div>
          <ChatLinks />
        </div>
      </div>
      <div className="w-full border-t border-gray-700">
        <ChatClear />
        <ChatLogout />
      </div>
    </div>
  );
};

export default ChatSidebar;
