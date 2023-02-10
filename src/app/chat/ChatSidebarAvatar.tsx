'use client';

import {authSignOut} from '@features/auth/auth-api';
import {authUserImageSelector} from '@features/auth/auth-state';
import {useStoreDispatch, useStoreSelector} from '@lib/store/store-hooks';
import Image from 'next/image';
import {useCallback} from 'react';

const ChatSidebarAvatar = () => {
  const avatar = useStoreSelector(authUserImageSelector);

  const dispatch = useStoreDispatch();

  const logoutHandler = useCallback(() => {
    dispatch(authSignOut.initiate());
  }, [dispatch]);

  return (
    <Image
      onClick={logoutHandler}
      src={avatar || '/logo.png'}
      width={50}
      height={50}
      alt="avatar"
      className="cursor-pointer rounded-full hover:opacity-50"
    />
  );
};

export default ChatSidebarAvatar;
