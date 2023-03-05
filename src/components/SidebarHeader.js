import {
  ChatRounded,
  DonutLargeRounded,
  FilterListRounded,
  GroupsRounded,
  MoreVertRounded,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";

const SidebarHeader = () => {
  return (
    <div className="h-[6.65rem] flex flex-col bg-white">
      <div className="flex-[0.45] flex items-centers justify-between px-3 py-2 bg-[#F0F2F5]">
        <div>
          <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/237082926_215928597022831_8083927081244897475_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRg3yG8bjGqNttb_F61aX0Zu843CZZUd8M8RyJVYx1ejg&oe=640C1E19" />
        </div>
        <div className="flex items-center gap-2">
          <div>
            <IconButton>
              <GroupsRounded />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <DonutLargeRounded />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <ChatRounded />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <MoreVertRounded />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="flex-[0.55] flex gap-2 items-center px-2">
        <div className="flex-1 flex gap-7 items-center justify-between bg-[#F0F2F5] px-3 py-[0.45rem] rounded-lg">
          <div>
            {/* TODO: animate this icon onFocus */}
            <SearchOutlined fontSize="small" />
          </div>
          <div className="flex-1 flex">
            <input
              className="flex-1 outline-none bg-[#F0F2F5] text-[0.9rem] focus:placeholder:opacity-0"
              type="text"
              placeholder="search or start a new chat"
            />
          </div>
        </div>

        <div>
          <FilterListRounded fontSize="small" />
        </div>
      </div>

      <div className="h-[1px] bg-slate-200"></div>
    </div>
  );
};

export default SidebarHeader;
