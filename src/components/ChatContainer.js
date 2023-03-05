import React from "react";
import ChatContainerFooter from "./ChatContainerFooter";
import ChatContainerHeader from "./ChatContainerHeader";
import MessagesContainer from "./MessagesContainer";

const ChatContainer = () => {
  return (
    <div className="flex-[0.70] flex flex-col bg-[#F0F2F5]">
      <ChatContainerHeader />
      <MessagesContainer />
      <ChatContainerFooter />
    </div>
  );
};

export default ChatContainer;
