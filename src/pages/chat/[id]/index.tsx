import {chatGetAllRepository} from '@features/chat/chat-repository';
import {chatListLoaded} from '@features/chat/chat-state';
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

    return {
      props: {
        session,
      },
    };
  });
