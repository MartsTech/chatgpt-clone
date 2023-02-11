import ChatSidebarAvatar from './ChatSidebarAvatar';
import ChatSidebarCreate from './ChatSidebarCreate';
import ChatSidebarList from './ChatSidebarList';

const ChatSidebar = () => {
  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <div className="">
          <ChatSidebarCreate />
          <div className=""></div>
          {/* @ts-ignore */}
          <ChatSidebarList />
        </div>
      </div>
      <div className="mx-auto mb-2">
        <ChatSidebarAvatar />
      </div>
    </div>
  );
};

export default ChatSidebar;
