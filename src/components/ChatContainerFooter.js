import {
  AttachFileRounded,
  MicRounded,
  MoodRounded,
  SendRounded,
} from "@mui/icons-material";
import React, { useState } from "react";

const ChatContainerFooter = () => {
  const [messageInput, setMessageInput] = useState("");

  const handleMessageInputChange = ({ target }) => {
    setMessageInput(target.value);
  };

  return (
    <div className="flex items-center gap-2 p-2">
      <div className="flex gap-2 p-2">
        <div>
          <MoodRounded
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
        </div>
        <div>
          <AttachFileRounded
            className="rotate-45"
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
        </div>
      </div>

      <div className="flex-1 flex items-center py-3 px-4 bg-white rounded-lg">
        <input
          className="flex-1 outline-none"
          type="text"
          placeholder="type a message"
          onChange={handleMessageInputChange}
        />
      </div>

      <div>
        {messageInput.length > 0 ? (
          <SendRounded className="" />
        ) : (
          <MicRounded />
        )}
      </div>
    </div>
  );
};

export default ChatContainerFooter;
