'use client';

import {Provider} from 'react-redux';
import {store} from '.';

export interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider = ({children}: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
