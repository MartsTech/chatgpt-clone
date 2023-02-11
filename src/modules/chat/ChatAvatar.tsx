import {authSignOut} from '@features/auth/auth-api';
import {authUserSelector} from '@features/auth/auth-state';
import {useStoreDispatch, useStoreSelector} from '@lib/store/store-hooks';
import Image from 'next/image';
import {useCallback} from 'react';

const ChatAvatar = () => {
  const user = useStoreSelector(authUserSelector);

  const dispatch = useStoreDispatch();

  const logoutHandler = useCallback(() => {
    dispatch(authSignOut.initiate());
  }, [dispatch]);

  return (
    <Image
      onClick={logoutHandler}
      src={user?.image || '/logo.png'}
      width={50}
      height={50}
      alt="avatar"
      className="cursor-pointer rounded-full hover:opacity-50"
    />
  );
};

export default ChatAvatar;
