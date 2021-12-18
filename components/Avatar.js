import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username }) {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="bg-black cursor-pointer hover:opacity-75 rounded-full"
      src={`https://avatars.dicebear.com/api/avataaars/${
        username || user.get("username")
      }.svg`}
      layout="fill"
      alt="Avatar"
    />
  );
}

export default Avatar;
