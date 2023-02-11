import {
  chatSidebarActiveSelector,
  chatSidebarClosed,
  chatSidebarOpened,
} from '@features/chat/chat-state';
import MenuIcon from '@heroicons/react/24/solid/Bars3Icon';
import CrossIcon from '@heroicons/react/24/solid/XMarkIcon';
import {useStoreDispatch, useStoreSelector} from '@lib/store/store-hooks';
import ChatSidebar from './ChatSidebar';

const ChatMenu = () => {
  const active = useStoreSelector(chatSidebarActiveSelector);

  const dispatch = useStoreDispatch();

  return (
    <div className="cursor-pointer p-2">
      <MenuIcon
        onClick={() => dispatch(chatSidebarOpened())}
        className="h-8 w-8 opacity-90 transition-opacity duration-200 ease-in-out 
        hover:opacity-100"
      />
      <div
        className={`fixed top-0 left-0 bottom-0 flex transition-colors duration-200 ease-in-out ${
          active ? 'w-full bg-gray-400 bg-opacity-20' : 'w-0'
        }`}>
        <div
          className={`flex transform transition-all 
            duration-300 ease-in-out ${!active && '-translate-x-80'}`}>
          <div className="h-full w-[16rem] bg-sidebar">
            <ChatSidebar />
          </div>
        </div>
        <div
          onClick={() => dispatch(chatSidebarClosed())}
          className={`flex-1 transform transition-all duration-300 ease-in-out ${
            !active && '-translate-x-80'
          }`}>
          <CrossIcon
            onClick={() => dispatch(chatSidebarClosed())}
            className="m-3 h-8 w-8 opacity-90 hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatMenu;
