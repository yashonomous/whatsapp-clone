import React from "react";
import SidebarChatsContainer from "./SidebarChatsContainer";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <div className="flex-[0.30] flex flex-col bg-white items-stretch">
      <SidebarHeader />
      <SidebarChatsContainer />
    </div>
  );
};

export default Sidebar;
