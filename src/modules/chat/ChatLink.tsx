import {chatDelete} from '@features/chat/chat-api';
import {chatListSelected} from '@features/chat/chat-state';
import ChatIcon from '@heroicons/react/24/solid/ChatBubbleLeftIcon';
import TrashIcon from '@heroicons/react/24/solid/TrashIcon';
import {useStoreDispatch} from '@lib/store/store-hooks';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useCallback, useMemo} from 'react';

export interface ChatLinkProps {
  chatId: string;
}

const ChatLink = ({chatId}: ChatLinkProps) => {
  const dispatch = useStoreDispatch();

  const router = useRouter();

  const active = useMemo(() => {
    if (router.asPath.includes(chatId)) {
      return true;
    }
    return false;
  }, [router.asPath, chatId]);

  const deleteChatHandler = useCallback(async () => {
    await dispatch(chatDelete.initiate(chatId))
      .unwrap()
      .then(() => {
        router.replace('/chat');
      });
  }, [dispatch, router, chatId]);

  const selectHandler = useCallback(() => {
    if (!active) {
      dispatch(chatListSelected(chatId));
    }
  }, [dispatch, chatId, active]);

  return (
    <Link href={`/chat/${chatId}`} onClick={selectHandler}>
      <div
        className={`my-2 flex cursor-pointer items-center justify-center
        space-x-2 rounded-lg border border-gray-700 px-5 py-3 text-sm
        text-gray-300 transition-all duration-200 ease-out hover:bg-gray-700/70 ${
          active && 'bg-gray-700/50'
        }`}>
        <ChatIcon className="h-5 w-5" />
        <p className="hidden flex-1 truncate md:inline-flex">New Chat</p>
        {active && (
          <TrashIcon
            onClick={deleteChatHandler}
            className="h-5 w-5 text-gray-700 hover:text-red-700"
          />
        )}
      </div>
    </Link>
  );
};

export default ChatLink;
