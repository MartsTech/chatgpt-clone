import {chatMessageCreate} from '@features/chat/chat-api';
import {chatListSelectedSelector} from '@features/chat/chat-state';
import SendIcon from '@heroicons/react/24/solid/PaperAirplaneIcon';
import {useStoreDispatch, useStoreSelector} from '@lib/store/store-hooks';
import {useCallback, useState} from 'react';

const ChatInput = () => {
  const chat = useStoreSelector(chatListSelectedSelector);

  const [message, setMessage] = useState('');

  const dispatch = useStoreDispatch();

  const sendMessageHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!message.length || !chat) {
        return;
      }

      dispatch(
        chatMessageCreate.initiate({
          chatId: chat.id,
          body: message,
        }),
      )
        .unwrap()
        .then(() => {
          setMessage('');
        });
    },
    [chat, message, dispatch],
  );

  return (
    <div className="rounded-lg bg-gray-700/50 text-sm text-gray-400">
      <form onSubmit={sendMessageHandler} className="flex space-x-5 p-5">
        <input
          className="flex-1 bg-transparent focus:outline-none disabled:cursor-not-allowed
         disabled:text-gray-300"
          value={message}
          onChange={e => setMessage(e.target.value)}
          type="text"
          placeholder="Type a message"
        />
        <button
          disabled={!message.length}
          type="submit"
          className="rounded bg-primary px-4 py-2 font-bold text-white
          hover:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300">
          <SendIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
