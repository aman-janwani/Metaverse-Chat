import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <Head>
        <title>M-Chat | Metaverse Chat</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639661276/Untitled_design_31_uja0do.png"
        />
      </Head>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-10">
        <Image
          className=" object-cover"
          src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639661276/Untitled_design_31_uja0do.png"
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 text-lg font-bold animate-pulse"
        >
          Login To Metaverse Chat
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639662777/bg_mbtwkp.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
