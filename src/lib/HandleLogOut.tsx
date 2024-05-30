"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { logOut } from "@/redux/features/auth/authSlice"

const HandleLogOut = () => {
    const handleLogOut = ()=>{
        logOut()
      }
  return (
    <DropdownMenuItem onClick={handleLogOut}>Logout</DropdownMenuItem>
  )
}

export default HandleLogOut
