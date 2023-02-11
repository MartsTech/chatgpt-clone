import {authSignOut} from '@features/auth/auth-api';
import LogoutIcon from '@heroicons/react/24/solid/ArrowLeftOnRectangleIcon';
import {useStoreDispatch} from '@lib/store/store-hooks';
import {useCallback} from 'react';

const ChatLogout = () => {
  const dispatch = useStoreDispatch();

  const logoutHandler = useCallback(() => {
    dispatch(authSignOut.initiate());
  }, [dispatch]);

  return (
    <div
      onClick={logoutHandler}
      className="m-1 flex cursor-pointer items-center space-x-2 rounded-lg
      px-5 py-3 text-sm text-gray-300 transition-all 
      duration-200 ease-out hover:bg-gray-700/70">
      <LogoutIcon className="h-4 w-4" />
      <p>Log out</p>
    </div>
  );
};

export default ChatLogout;
