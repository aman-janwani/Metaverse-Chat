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
      <div className="flex flex-col absolute z-50 w-full">
        <div className="w-full items-center flex h-2/6">
          <div className="grow m-5">
            <Image
              alt="logo"
              className=" object-cover"
              src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639661276/Untitled_design_31_uja0do.png"
              height={80}
              width={80}
            />
          </div>
          <button
            onClick={authenticate}
            className=" border-2 border-yellow-500 hover:bg-yellow-500 text-white hover:text-black rounded-lg p-3 text-md font-bold animate-bounce mr-8"
          >
            Login To Metaverse Chat
          </button>
        </div>
        <div className="flex flex-col justify-end mt-10 w-full space-y-14">
          <h1 className="text-5xl text-white font-semibold text-center md:text-right mr-4">
            The New Era of Messaging
          </h1>
          <p className="text-white m-3 text-center text-2xl max-w-lg ml-auto">
            Metaverse Chat is the Most Secure And Encrypted chatting Platform.
            It is the only chat platform that is completely secure.
          </p>
          <button
            onClick={authenticate}
            className="bg-yellow-500 rounded-lg p-5 text-lg font-bold animate-pulse max-w-sm mx-auto sm:mx-0 sm:ml-auto sm:mr-5"
          >
            Login To Metaverse Chat
          </button>
        </div>
      </div>
      <div className="w-full h-screen">
        <Image
          alt="background"
          src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639827187/Copy_of_Unnamed_Design_3840_x_2160_px_2_ueoytp.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
