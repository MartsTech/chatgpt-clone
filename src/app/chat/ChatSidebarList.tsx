import {chatGetAllRepository} from '@features/chat/chat-repository';
import {authOptions} from '@pages/api/auth/[...nextauth]';
import {getServerSession} from 'next-auth';

const ChatSidebarList = async () => {
  const data = await getData();

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.id}</div>
      ))}
    </div>
  );
};

export default ChatSidebarList;

const getData = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return [];
  }

  const data = await chatGetAllRepository({
    userId: session.user.id,
  });

  return data;
};
