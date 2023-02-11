import {AnyAction, Store} from '@reduxjs/toolkit';
import {useMemo} from 'react';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

export interface StoreProviderProps {
  store: Store<unknown, AnyAction>;
  children: React.ReactNode;
}

const StoreProvider = ({store, children}: StoreProviderProps) => {
  const persistor = useMemo(() => persistStore(store), [store]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default StoreProvider;
