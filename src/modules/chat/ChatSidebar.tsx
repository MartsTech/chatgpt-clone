import ChatAvatar from './ChatAvatar';
import ChatCreate from './ChatCreate';
import ChatList from './ChatList';

const ChatSidebar = () => {
  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <div className="">
          <ChatCreate />
          <div className=""></div>
          <ChatList />
        </div>
      </div>
      <div className="mx-auto mb-2">
        <ChatAvatar />
      </div>
    </div>
  );
};

export default ChatSidebar;
