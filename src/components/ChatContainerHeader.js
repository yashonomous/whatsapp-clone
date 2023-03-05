import { MoreVertRounded, SearchRounded } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";

const ChatContainerHeader = () => {
  return (
    <div className="flex gap-2 items-center px-4 py-2">
      <div>
        <Avatar src="" />
      </div>
      <div className="flex-1">
        <span>username</span>
      </div>
      <div className="flex gap-2">
        <div>
          <IconButton>
            <SearchRounded />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <MoreVertRounded />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ChatContainerHeader;
