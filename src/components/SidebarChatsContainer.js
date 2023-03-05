import React from "react";
import SidebarChatCard from "./SidebarChatCard";

const SidebarChatsContainer = () => {
  return (
    <div className="flex-1 flex flex-col overflow-y-scroll">
      <SidebarChatCard />
      <SidebarChatCard />
      <SidebarChatCard />
      <SidebarChatCard />
      <SidebarChatCard />
      <SidebarChatCard />
      <SidebarChatCard />
      <SidebarChatCard />
    </div>
  );
};

export default SidebarChatsContainer;
