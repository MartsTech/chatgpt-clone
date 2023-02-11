import {chatListSelector} from '@features/chat/chat-state';
import {useStoreSelector} from '@lib/store/store-hooks';

const ChatList = () => {
  const chats = useStoreSelector(chatListSelector);

  return (
    <div>
      {chats.map(chat => (
        <p key={chat.id}>{chat.id}</p>
      ))}
    </div>
  );
};

export default ChatList;
