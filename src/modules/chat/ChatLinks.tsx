import {chatListSelector} from '@features/chat/chat-state';
import {useStoreSelector} from '@lib/store/store-hooks';
import ChatLink from './ChatLink';

const ChatLinks = () => {
  const chats = useStoreSelector(chatListSelector);

  return (
    <div>
      {chats.map(chat => (
        <ChatLink key={chat.id} chatId={chat.id} />
      ))}
    </div>
  );
};

export default ChatLinks;
