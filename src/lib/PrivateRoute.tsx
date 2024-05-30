"use client"
import { useAppSelector } from "@/redux/hooks"
import { redirect } from "next/navigation"
import { ReactNode } from "react"


const PrivateRoute = ({children}: {children: ReactNode}) => {
 
    const {token} = useAppSelector(state=>state.auth)
    if(token){
        return children
    }
    redirect("/login")
}

export default PrivateRoute
