import { useSession } from "next-auth/client";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";
import React from "react";
import SidebarRow from "./SidebarRow";
function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className=" p-2 mt-5 max-w-[600px] xl:min-w-[300px]  border-r-2 border-solid drop-shadow-md">
      <SidebarRow src={session.user.image} title="friends" />
      <SidebarRow Icon={UserIcon} title="friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See more" />
    </div>
  );
}

export default Sidebar;
