import {chatListSelectedSelector} from '@features/chat/chat-state';
import {useStoreSelector} from '@lib/store/store-hooks';

const ChatMessages = () => {
  const chat = useStoreSelector(chatListSelectedSelector);

  return (
    <div className="flex-1">
      {chat?.messages.map(message => (
        <p key={message.id}>{message.body}</p>
      ))}
    </div>
  );
};

export default ChatMessages;
