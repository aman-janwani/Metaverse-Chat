import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated, logout, user } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-darkPink-100 to-darkBlue-100 overflow-hidden font-mono">
      <Head>
        <title>M-Chat | Welcome to the Metaverse Chat</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639661276/Untitled_design_31_uja0do.png"
        />
      </Head>
      <div className="z-50 h-4/6 w-full">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
