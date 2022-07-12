import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  FlagIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { useSession, signIn, signOut } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 bg-white p-2 lg:px-2 shadow-md flex items-center">
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          alt="/"
        />
        <div className="flex items-center ml-2 rounded-full p-2 bg-gray-100">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className=" hidden md:inline-flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500:"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end">
        <div className="flex items-center justify-end sm:space-x-2">
          <div className="flex items-center justify-between hover:bg-gray-200 p-[6px] rounded-full">
            <div className="flex items-center justify-between hover:bg-gray-200 p-[6px] rounded-full">
              <Image
                src={session.user.image}
                onClick={signOut}
                className="rounded-full cursor-pointer"
                width={40}
                height={40}
                layout="fixed"
                alt="/"
              />
              <p className="font-semdibold hidden md:flex p-1 whitespace-nowrap">
                {session.user.name}
              </p>
            </div>
          </div>
          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
        </div>
      </div>
    </div> 
  );
};

export default Header;
