import React from "react";
import { ReceiverMessageCard, SenderMessageCard } from "./MessageCard";

const MessagesContainer = () => {
  return (
    <div className="flex-1 flex flex-col gap-3 overflow-y-scroll bg-repeat object-contain bg-[url('https://i.pinimg.com/originals/07/b3/7d/07b37d9e8af59caf15b0f8e1b49da368.jpg')] ">
      <SenderMessageCard />
      <ReceiverMessageCard />
      <SenderMessageCard />
      <ReceiverMessageCard />
    </div>
  );
};

export default MessagesContainer;
