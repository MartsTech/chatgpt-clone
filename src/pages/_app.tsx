import AuthProvider from '@features/auth/AuthProvider';
import {wrapper} from '@lib/store';
import StoreProvider from '@lib/store/StoreProvider';
import '@lib/styles/globals.css';
import type {AppPropsWithLayout} from '@lib/types/layout';
import Head from 'next/head';

const App = ({Component, ...rest}: AppPropsWithLayout) => {
  const {
    store,
    props: {
      pageProps: {session, ...pageProps},
    },
  } = wrapper.useWrappedStore(rest);

  const getLayout = Component.getLayout ?? (page => page);

  return (
    <StoreProvider store={store}>
      <AuthProvider session={session}>
        <Head>
          <title>ChatGPT Clone</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </AuthProvider>
    </StoreProvider>
  );
};

export default App;
