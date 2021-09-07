import React from "react";
import logo from "./logo.png";
import Image from "next/image";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  ViewGridAddIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut, session, useSession } from "next-auth/client";
function Header() {
  const [session] = useSession()
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      <div className="flex">
        <Image src={logo} width={100} height={60} />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600 cursor-pointer" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden md:inline-flex ml-2 items-center outline-none bg-transparent placeholder-gray-500 flex-shrink"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className='flex items-center space-x-6 md:space-x-2' >
          <HeaderIcon Icon={HomeIcon} active/>
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
        
      </div>
      <div className='flex items-center sm:space-x-2'>
        <Image onClick={signOut} className='rounded-full cursor-pointer' src={session.user.image} width='40' height='40' layout='fixed'/>
        <p className='font-semibold pr-3 whitespace-nowrap' >{session.user.name}</p>
        <ViewGridAddIcon className='icon'/>
        <ChatIcon  className='icon'/>
        <BellIcon  className='icon'/>
        <ChevronDownIcon className='icon'/>
     
      </div>
    </div>
  );
}

export default Header;
