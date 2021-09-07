import { useSession } from "next-auth/client";
import Image from "next/image";
import React, { useRef } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/outline";
// import { db } from "../firebase";
// import firebase from 'firebase'
function Input() {
  const [session, loading] = useSession();
  const inputRef = useRef(null)
  const sendPost = (e) => {
    e.preventDefault();
    // if (!inputRef.current.value) return
    // db.collection('post').add({
    //   message: inputRef.current.value,
    //   name: session.user.name,
    //   email: session.user.email,
    //   image: session.user.image,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })
    inputRef.current.value=''
  };
  console.log(session);
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 mt-6 font-medium">
      <div className="flex space-x-4 items-center">
        <Image
          className="rounded-full "
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={` what on your mind,${
              session.user.name.split(" ")[0]
              }?`}
            ref={inputRef }
          />
          <button hidden onClick={sendPost} type="submit">
            submit
          </button>
        </form>
      </div>
      <div className="flex items-center justify-between mt-7">
        <div className="iconinput">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="iconinput">
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="iconinput">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Felling/Activity </p>
        </div>
      </div>
    </div>
  );
}

export default Input;
