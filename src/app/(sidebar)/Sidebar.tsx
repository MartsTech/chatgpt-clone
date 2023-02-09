import SidebarNewChat from './SidebarNewChat';

const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <div className="">
          <SidebarNewChat />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
