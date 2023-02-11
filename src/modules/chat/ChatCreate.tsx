import {chatCreate} from '@features/chat/chat-api';
import NewChatIcon from '@heroicons/react/24/solid/PlusIcon';
import {useStoreDispatch} from '@lib/store/store-hooks';
import {useRouter} from 'next/router';
import {useCallback} from 'react';

export interface ChatCreateProps {
  icon?: boolean;
}

const ChatCreate = ({icon = false}: ChatCreateProps) => {
  const router = useRouter();

  const dispatch = useStoreDispatch();

  const createChatHandler = useCallback(() => {
    dispatch(chatCreate.initiate())
      .unwrap()
      .then(chat => {
        console.log(chat);
        router.push(`/chat/${chat.id}`);
      });
  }, [router, dispatch]);

  if (icon) {
    return (
      <div
        onClick={createChatHandler}
        className="flex h-full w-10 items-center justify-center">
        <NewChatIcon
          className="h-7 w-7 cursor-pointer opacity-90 transition-opacity duration-200 
          ease-in-out hover:opacity-100"
        />
      </div>
    );
  }

  return (
    <div
      onClick={createChatHandler}
      className="flex cursor-pointer items-center space-x-2 rounded-lg
      border border-gray-700 px-5 py-3 text-sm text-gray-300 transition-all
      duration-200 ease-out hover:bg-gray-700/70">
      <NewChatIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default ChatCreate;
