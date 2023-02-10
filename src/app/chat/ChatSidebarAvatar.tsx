'use client';

import {signOut, useSession} from 'next-auth/react';
import Image from 'next/image';

const ChatSidebarAvatar = () => {
  const {data: session} = useSession();

  if (!session) {
    return null;
  }

  return (
    <Image
      onClick={() => signOut()}
      src={session.user?.image || ''}
      width={50}
      height={50}
      alt="avatar"
      className="cursor-pointer rounded-full hover:opacity-50"
    />
  );
};

export default ChatSidebarAvatar;
