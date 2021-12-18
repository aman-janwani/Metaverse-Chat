import Image from "next/image";
import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new Username(current: ${user.getUsername()})`
    );
    if (!username) return;

    setUserData({ username });
  };

  return (
    <div>
      <button disabled={isUserUpdating}>
        <div className="relative h-4 w-4">
          <Image
            alt="edit"
            onClick={setUsername}
            className="cursor-pointer hover:opacity-80"
            layout="fill"
            objectFit="cover"
            src={
              "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1639825484/Aman_6_ds7jld.png"
            }
          />
        </div>
      </button>
    </div>
  );
}

export default ChangeUsername;
