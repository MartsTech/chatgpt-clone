import NewChatIcon from '@heroicons/react/24/solid/PlusIcon';

const ChatSidebarNew = () => {
  return (
    <div
      className="flex cursor-pointer items-center justify-center space-x-2
      rounded-lg border border-gray-700 px-5 py-3 text-sm text-gray-300
       transition-all duration-200 ease-out hover:bg-gray-700/70">
      <NewChatIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default ChatSidebarNew;
