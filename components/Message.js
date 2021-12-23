import { useMoralis } from "react-moralis";
import Timeago from "timeago-react";
import Avatar from "./Avatar";
import Modal from "react-modal";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(20, 15, 36, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    backgroundColor: "#842469",
    border: "5px solid #eab308",
  },
};

Modal.setAppElement("#__next");

function Message({ message }) {
  const { user } = useMoralis();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div
        onClick={openModal}
        className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2 "}`}
      >
        <Avatar username={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-xl max-w-3xl ${
          isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-400"
        } `}
      >
        <p className="break-words inline-block w-full">
          {message.get("message")}
        </p>
      </div>
      {/* Timeago stamp */}
      <Timeago
        className={`text-[10px] italic text-gray-200 ${
          isUserMessage && "pr-1 order-first"
        }`}
        datetime={message.createdAt}
      />
      <p
        className={` absolute -bottom-5 text-xs ${
          isUserMessage ? "text-pink-300" : "text-blue-400"
        }`}
      >
        {message.get("username")}
      </p>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex mb-10 w-[300px] md:w-[500px] font-mono">
          <h1 className="text-yellow-500 text-xl font-medium text-left">
            Profile
          </h1>
          <AiOutlineClose
            className="h-7 w-7 text-yellow-400 ml-auto hover:opacity-70 cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className="flex flex-col w-full font-mono">
          <div className="mx-auto h-20 w-20 lg:h-36 lg:w-36 relative border-4 border-blue-400 rounded-full">
            <Image
              src={`https://avatars.dicebear.com/api/avataaars/${message.get(
                "username"
              )}.svg`}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              alt="avatar"
            />
          </div>
          <h1 className="mx-auto my-3 text-white font-medium text-3xl">
            {message.get("username")}
          </h1>
          <p className="mx-auto my-3 text-white text-lg">
            {" "}
            ETHAddress: {message.get("ethAddress")}
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Message;
