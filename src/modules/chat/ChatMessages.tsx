import {authUserSelector} from '@features/auth/auth-state';
import {chatListSelectedSelector} from '@features/chat/chat-state';
import {useStoreSelector} from '@lib/store/store-hooks';
import ChatMessage from './ChatMessage';

const ChatMessages = () => {
  const user = useStoreSelector(authUserSelector);
  const chat = useStoreSelector(chatListSelectedSelector);

  if (!user) {
    return null;
  }

  return (
    <div className="flex-1">
      {chat?.messages.map(item => (
        <ChatMessage
          key={item.id}
          item={item}
          image={typeof item.model === 'undefined' ? user.image : '/logo.png'}
        />
      ))}
    </div>
  );
};

export default ChatMessages;
