"use client";

import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { logOut } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { LogOut as LogOutIcon } from "lucide-react";

const HandleLogOut = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <DropdownMenuItem onClick={handleLogOut}>
      <LogOutIcon className="mr-2 h-4 w-4" />
      <span>Log out</span>
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  );
};

export default HandleLogOut;
