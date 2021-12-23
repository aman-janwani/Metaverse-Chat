import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import Modal from "react-modal";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

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

const Header = () => {
  const { user, logout } = useMoralis();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="sticky grid grid-cols-3 lg:grid-cols-4 justify-between bg-darkBlue-100 top-0 p-5 z-50 shadow-sm bg-opacity-70 backdrop-blur-sm">
      <div className="relative h-14 w-14 hidden lg:inline-grid">
        <Image
          alt="logo"
          src={
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639661276/Untitled_design_31_uja0do.png"
          }
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="col-span-2 flex justify-center space-x-6">
        <div
          onClick={openModal}
          className="h-10 w-10 md:h-16 md:w-16 relative border-2 border-blue-400 rounded-full"
        >
          <Avatar />
        </div>
        <div className="flex space-x-3 md:space-x-6 my-auto">
          <h1 className="text-lg md:text-3xl text-yellow-500 font-bold truncate">
            {user.getUsername()}
          </h1>
          <ChangeUsername />
        </div>
      </div>
      <div className="text-right">
        <button
          className="border-2 hover:animate-pulse border-yellow-500 px-5 md:px-8 py-2 rounded-xl text-sm md:text-md font-medium hover:bg-yellow-400 hover:text-black text-white"
          onClick={() => logout()}
        >
          LogOut
        </button>
      </div>
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
              src={`https://avatars.dicebear.com/api/avataaars/${user.get(
                "username"
              )}.svg`}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              alt="avatar"
            />
          </div>
          <h1 className="mx-auto my-3 text-white font-medium text-3xl">
            {user.get("username")}
          </h1>
          <p className="mx-auto my-3 text-white text-lg">
            {" "}
            ETHAddress: {user.get("ethAddress")}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
