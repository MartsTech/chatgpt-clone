import {
  chatGetAllRepository,
  chatMessageGetAllRepository,
} from '@features/chat/chat-repository';
import {
  chatListLoaded,
  chatListSelected,
  chatMessageLoaded,
} from '@features/chat/chat-state';
import {wrapper} from '@lib/store';
import type {NextPageWithLayout} from '@lib/types/layout';
import ChatLayout from '@modules/chat/ChatLayout';
import ChatPage from '@modules/chat/ChatPage';
import {authOptions} from '@pages/api/auth/[...nextauth]';
import type {GetServerSideProps} from 'next';
import {getServerSession} from 'next-auth';

const Page: NextPageWithLayout = () => {
  return <ChatPage />;
};

export default Page;

Page.getLayout = page => {
  return <ChatLayout>{page}</ChatLayout>;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async context => {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions,
    );

    if (!session) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    const chats = await chatGetAllRepository({userId: session.user.id});
    store.dispatch(chatListLoaded(chats));

    if (typeof context.query.id === 'string') {
      const chatId = context.query.id;

      const messages = await chatMessageGetAllRepository({
        userId: session.user.id,
        chatId,
      });

      store.dispatch(chatMessageLoaded({chatId, messages}));
      store.dispatch(chatListSelected(chatId));
    }

    return {
      props: {
        session,
      },
    };
  });
