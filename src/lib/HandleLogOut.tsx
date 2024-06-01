"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { logOut } from "@/redux/features/auth/authSlice"
import { useAppDispatch } from "@/redux/hooks";

const HandleLogOut = () => {
  const dispatch = useAppDispatch();

    const handleLogOut = ()=>{
        dispatch(logOut())
      }
  return (
    <DropdownMenuItem onClick={handleLogOut}>Log Out</DropdownMenuItem>
  )
}

export default HandleLogOut
