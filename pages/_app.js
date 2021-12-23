import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <NextSeo
        title="Metaverse Chat"
        titleTemplate="Metaverse Chat"
        defaultTitle="Metaverse Chat"
        description="Metaverse Chat is a decentralized chat application built on the Metaverse blockchain."
        canonical="https://aman-metaverse-chat.vercel.app/"
        openGraph={{
          url: "https://aman-metaverse-chat.vercel.app/",
          title: "Metaverse Chat",
          description:
            "Metaverse Chat is a decentralized chat application built on the Metaverse blockchain.",
          images: [
            {
              url: "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1640242936/c6d1f841-0c68-42d7-a66f-9557e131ecce_pusvqn.png",
              width: 800,
              height: 420,
              alt: "Metaverse Chat",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </MoralisProvider>
    // <Component {...pageProps} />
  );
}

export default MyApp;
