import {chatDeleteAll} from '@features/chat/chat-api';
import CheckIcon from '@heroicons/react/24/solid/CheckIcon';
import TrashIcon from '@heroicons/react/24/solid/TrashIcon';
import {useStoreDispatch} from '@lib/store/store-hooks';
import {useRouter} from 'next/router';
import {useCallback, useEffect, useState} from 'react';

const ChatClear = () => {
  const [confirm, setConfirm] = useState(false);

  const dispatch = useStoreDispatch();

  const router = useRouter();

  useEffect(() => {
    if (confirm) {
      const timer = setTimeout(() => {
        setConfirm(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [confirm]);

  const chatDeleteAllHandler = useCallback(() => {
    if (!confirm) {
      setConfirm(true);
      return;
    }
    setConfirm(false);

    dispatch(chatDeleteAll.initiate())
      .unwrap()
      .then(() => {
        router.replace('/chat');
      });
  }, [confirm, router, dispatch]);

  return (
    <div
      onClick={chatDeleteAllHandler}
      className="m-1 flex cursor-pointer items-center space-x-2 rounded-lg
      px-5 py-3 text-sm text-gray-300 transition-all 
      duration-200 ease-out hover:bg-gray-700/70">
      {!confirm ? (
        <>
          <TrashIcon className="h-4 w-4" />
          <p>Clear conversations</p>
        </>
      ) : (
        <>
          <CheckIcon className="h-4 w-4" />
          <p>Confirm clear conversations</p>
        </>
      )}
    </div>
  );
};

export default ChatClear;
