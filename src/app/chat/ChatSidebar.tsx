import ChatSidebarAvatar from './ChatSidebarAvatar';
import ChatSidebarNew from './ChatSidebarNew';

const ChatSidebar = () => {
  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <div className="">
          <ChatSidebarNew />
        </div>
      </div>
      <div className="mx-auto mb-2">
        <ChatSidebarAvatar />
      </div>
    </div>
  );
};

export default ChatSidebar;
