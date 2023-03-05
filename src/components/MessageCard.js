import React from "react";

export const SenderMessageCard = () => {
  return (
    <div className="flex flex-col w-full gap-1">
      {new Array(5).fill(0).map((_, i) => {
        return (
          <div className="flex justify-start w-full">
            {i === 0 && (
              <div
                className=" ml-12 h-2 w-2 "
                style={{
                  background:
                    "linear-gradient(45deg, rgba(0, 0, 0, 0) 50%, rgba(255, 255, 255, 1) 50%)",
                }}
              ></div>
            )}

            <div
              className={`${i !== 0 && "ml-14"} bg-white px-2 py-1 ${
                i !== 0 ? "rounded-lg" : "rounded-b-lg rounded-tr-lg"
              }`}
            >
              <div className="flex gap-3">
                <div className="">
                  <span>message</span>
                </div>
                <div>
                  <span>6:24 pm</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const ReceiverMessageCard = () => {
  return (
    <div className="flex flex-col items-end w-full gap-1">
      {new Array(5).fill(0).map((_, i) => {
        return (
          <div className="flex justify-end w-full">
            <div
              className={`mr-12 bg-[#D9FDD3] px-2 py-1 ${
                i !== 0 ? "rounded-lg" : "rounded-b-lg rounded-tl-lg"
              }`}
            >
              <div className="flex gap-3">
                <div className="">
                  <span>message</span>
                </div>
                <div>
                  <span>6:24 pm</span>
                </div>
              </div>
            </div>

            {i === 0 && (
              <div
                className="h-2 w-2 fixed right-[3.6rem]"
                style={{
                  background:
                    "linear-gradient(-45deg, rgba(0, 0, 0, 0) 50%, #D9FDD3 50%)",
                }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
