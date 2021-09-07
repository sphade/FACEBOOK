import React, { useState } from "react";
import a from "./a-prof.jpg";
import p from "./p-prof.jpg";
import f from "./f-prof.jpg";
import Image from "next/image";

function Stories() {
  const [storiesArray, setStoriesArray] = useState([
    {
      name: "lawal adebola",
      src: a,
          url: "lawal",
      id:1,
    },
    {
      name: "lawal pelumi",
      src: p,
      id:3,
        url: "lawal",
    },
    {
      name: "lawal pelumi",
      src: p,
      id:3,
        url: "lawal",
    },
    {
      name: "lawal feranmi",
      src: f,
        url: "lawal",
        id:3,
    },
  ]);
  const storiesL = [];
  for (let i = 0; i < storiesArray.length; i++) {
    storiesL.push(
      <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-56 cursor-pointer p-3 overflow-x transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse " key={storiesArray[i].id}>
        <Image
          src={storiesArray[i].src}
          width={40}
          height={40}
          layout="fixed"
          objectFit="cover"
          className="absolute opacity-0 lg:opacity-100 rounded-full z-10 top-10"
        />
        <Image
          src={storiesArray[i].src}
          layout="fill"
          className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        />
      </div>
    );
  }
  return (
    <div className="flex justify-center space-x-3 mx-auto">{storiesL}</div>
  );
}

export default Stories;
