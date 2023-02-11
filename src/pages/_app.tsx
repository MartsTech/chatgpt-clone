import AuthProvider from '@features/auth/AuthProvider';
import {wrapper} from '@lib/store';
import StoreProvider from '@lib/store/StoreProvider';
import '@lib/styles/globals.css';
import type {AppPropsWithLayout} from '@lib/types/layout';

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
        {getLayout(<Component {...pageProps} />)}
      </AuthProvider>
    </StoreProvider>
  );
};

export default App;
