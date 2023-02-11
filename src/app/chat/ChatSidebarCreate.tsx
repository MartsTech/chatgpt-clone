'use client';

import {chatCreate} from '@features/chat/chat-api';
import NewChatIcon from '@heroicons/react/24/solid/PlusIcon';
import {useStoreDispatch} from '@lib/store/store-hooks';
import {useRouter} from 'next/navigation';
import {useCallback} from 'react';

const ChatSidebarCreate = () => {
  const router = useRouter();

  const dispatch = useStoreDispatch();

  const newChatHandler = useCallback(() => {
    dispatch(chatCreate.initiate())
      .unwrap()
      .then(chat => {
        router.push(`/chat/${chat.id}`);
      });
  }, [router, dispatch]);

  return (
    <div
      onClick={newChatHandler}
      className="flex cursor-pointer items-center justify-center space-x-2
      rounded-lg border border-gray-700 px-5 py-3 text-sm text-gray-300
       transition-all duration-200 ease-out hover:bg-gray-700/70">
      <NewChatIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default ChatSidebarCreate;
