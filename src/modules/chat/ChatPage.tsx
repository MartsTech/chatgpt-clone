import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

const ChatPage = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default ChatPage;
