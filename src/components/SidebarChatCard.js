import { Avatar } from "@mui/material";
import React from "react";

const SidebarChatCard = () => {
  return (
    <div className="flex gap-4 items-center hover:bg-[#F0F2F5] py-4 px-3">
      <div className="">
        <Avatar
          src=""
          sx={{
            width: "3.3rem",
            height: "3.3rem",
          }}
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center">
          <div className="flex-1">
            <span>username</span>
          </div>
          <div className="text-xs text-slate-400">
            <span>5:12 PM</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-sm text-slate-400">
            <span>last message</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarChatCard;
