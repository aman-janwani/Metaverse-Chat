import Image from "next/image";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setMessage(message + emoji);
  };
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const Recognition = new SpeechRecognition();

  Recognition.onstart = function () {
    readOutLoud("voice is activated");
  };

  Recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    setMessage(message + transcript);
  };

  function readOutLoud(voiceMessage) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = voiceMessage;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  }

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // The object was saved successfully.
        },
        (error) => {
          // The save failed.
          // error is a Parse.Error with an error code and description.
          console.log(error.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <div className="max-w-2xl w-11/12">
      {showEmojis && (
        <div className="fixed bottom-28">
          <Picker onSelect={addEmoji} />
        </div>
      )}
      <form className="flex fixed bottom-10 bg-black opacity-80 px-3 py-3 md:px-6 max-w-2xl w-11/12 shadow-xl rounded-full border-2 border-blue-400">
        <button
          className="mr-5"
          onClick={(e) => {
            e.preventDefault();
            setShowEmojis(!showEmojis);
          }}
        >
          <Image
            alt="emoji"
            src={
              "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639833936/Aman_9_yxocwu.png"
            }
            height={30}
            width={30}
          />
        </button>
        <input
          className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
          type="text"
          placeholder={`Enter a Message ${user.getUsername()}...`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            Recognition.start();
          }}
          className="text-white mr-4 pr-2 border-r-2 border-pink-500"
        >
          <Image
            alt="voice"
            src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639833459/Aman_8_hja37w.png"
            width={30}
            height={30}
          />
        </button>
        <button type="submit" onClick={sendMessage}>
          <Image
            alt="send"
            src={
              "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639828585/Aman_7_nrtkbs.png"
            }
            height={30}
            width={30}
          />
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
