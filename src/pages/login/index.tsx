import LoginPage from '@modules/login/LoginPage';
import {authOptions} from '@pages/api/auth/[...nextauth]';
import type {GetServerSideProps, NextPage} from 'next';
import {getServerSession} from 'next-auth';

const Page: NextPage = () => {
  return <LoginPage />;
};

export default Page;

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
