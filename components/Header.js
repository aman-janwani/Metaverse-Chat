import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user, logout } = useMoralis();

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
        <div className="h-10 w-10 md:h-16 md:w-16 relative border-2 border-blue-400 rounded-full">
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
    </div>
  );
};

export default Header;
