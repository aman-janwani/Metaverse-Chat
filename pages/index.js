import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Image from "next/image";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>M-Chat | Welcome to the Metaverse Chat</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639661276/Untitled_design_31_uja0do.png"
        />
      </Head>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-10">
        <h1 className="text-5xl font-semibold text-white bg-black p-3 rounded-lg">
          Welcome to the Metaverse Chat
        </h1>
        <button
          onClick={logout}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-bounce"
        >
          LogOut From Metaverse Chat
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639663107/Copy_of_Unnamed_Design_kguzc9.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
