import Image from "next/image";
import { useMoralis } from "react-moralis";
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

function ChangeUsername() {
  const [username, setUsername] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const ChangeUsername = (e) => {
    e.preventDefault();
    // const username = prompt(
    //   `Enter your new Username(current: ${user.getUsername()})`
    // );
    if (!username) return;

    setUserData({ username });
    closeModal();
  };

  return (
    <div>
      <button disabled={isUserUpdating}>
        <div className="relative h-4 w-4">
          <Image
            alt="edit"
            onClick={openModal}
            className="cursor-pointer hover:opacity-80"
            layout="fill"
            objectFit="cover"
            src={
              "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639825484/Aman_6_ds7jld.png"
            }
          />
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex mb-10 font-mono">
          <h1 className="text-yellow-500 text-xl font-medium text-left">
            Change Username
          </h1>
          <AiOutlineClose
            className="h-7 w-7 text-yellow-400 ml-auto hover:opacity-70 cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <form className="font-mono w-[300px] md:w-[500px] ">
          <div className="p-3 bg-black opacity-70 rounded-2xl m-5 border-2 border-blue-400">
            <input
              className="outline-none bg-transparent text-white placeholder-gray-400 w-full"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={`Enter Your New Username (current: ${user.getUsername()})`}
            />
          </div>
          <div className="w-full text-center mt-10">
            <button
              type="submit"
              onClick={ChangeUsername}
              className="border-2 hover:animate-pulse border-yellow-500 px-5 md:px-8 py-2 rounded-xl text-sm md:text-md font-medium hover:bg-yellow-400 hover:text-black text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default ChangeUsername;
